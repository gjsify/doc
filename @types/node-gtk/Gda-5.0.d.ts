/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gda-5.0
 */

import type libxml2 from './libxml2-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Gda {

enum BatchError {
    BATCH_CONFLICTING_PARAMETER_ERROR,
}
enum ConfigError {
    DSN_NOT_FOUND_ERROR,
    PERMISSION_ERROR,
    PROVIDER_NOT_FOUND_ERROR,
    PROVIDER_CREATION_ERROR,
}
enum ConnectionError {
    DSN_NOT_FOUND_ERROR,
    PROVIDER_NOT_FOUND_ERROR,
    PROVIDER_ERROR,
    NO_CNC_SPEC_ERROR,
    NO_PROVIDER_SPEC_ERROR,
    OPEN_ERROR,
    STATEMENT_TYPE_ERROR,
    CANT_LOCK_ERROR,
    TASK_NOT_FOUND_ERROR,
    UNSUPPORTED_THREADS_ERROR,
    CLOSED_ERROR,
    META_DATA_CONTEXT_ERROR,
    UNSUPPORTED_ASYNC_EXEC_ERROR,
}
enum ConnectionEventCode {
    CONSTRAINT_VIOLATION,
    RESTRICT_VIOLATION,
    NOT_NULL_VIOLATION,
    FOREIGN_KEY_VIOLATION,
    UNIQUE_VIOLATION,
    CHECK_VIOLATION,
    INSUFFICIENT_PRIVILEGES,
    UNDEFINED_COLUMN,
    UNDEFINED_FUNCTION,
    UNDEFINED_TABLE,
    DUPLICATE_COLUMN,
    DUPLICATE_DATABASE,
    DUPLICATE_FUNCTION,
    DUPLICATE_SCHEMA,
    DUPLICATE_TABLE,
    DUPLICATE_ALIAS,
    DUPLICATE_OBJECT,
    SYNTAX_ERROR,
    UNKNOWN,
}
enum ConnectionEventType {
    NOTICE,
    WARNING,
    ERROR,
    COMMAND,
}
enum ConnectionFeature {
    AGGREGATES,
    BLOBS,
    INDEXES,
    INHERITANCE,
    NAMESPACES,
    PROCEDURES,
    SEQUENCES,
    SQL,
    TRANSACTIONS,
    SAVEPOINTS,
    SAVEPOINTS_REMOVE,
    TRIGGERS,
    UPDATABLE_CURSOR,
    USERS,
    VIEWS,
    XA_TRANSACTIONS,
    MULTI_THREADING,
    ASYNC_EXEC,
    LAST,
}
enum ConnectionMetaType {
    NAMESPACES,
    TYPES,
    TABLES,
    VIEWS,
    FIELDS,
    INDEXES,
}
enum DataComparatorError {
    MISSING_DATA_MODEL_ERROR,
    COLUMN_TYPES_MISMATCH_ERROR,
    MODEL_ACCESS_ERROR,
    USER_CANCELLED_ERROR,
}
enum DataModelError {
    ROW_OUT_OF_RANGE_ERROR,
    COLUMN_OUT_OF_RANGE_ERROR,
    VALUES_LIST_ERROR,
    VALUE_TYPE_ERROR,
    ROW_NOT_FOUND_ERROR,
    ACCESS_ERROR,
    FEATURE_NON_SUPPORTED_ERROR,
    FILE_EXIST_ERROR,
    XML_FORMAT_ERROR,
    TRUNCATED_ERROR,
    OTHER_ERROR,
}
enum DataModelHint {
    START_BATCH_UPDATE,
    END_BATCH_UPDATE,
    REFRESH,
}
enum DataModelIOFormat {
    DATA_ARRAY_XML,
    TEXT_SEPARATED,
    TEXT_TABLE,
}
enum DataModelIterError {
    DATA_MODEL_ITER_COLUMN_OUT_OF_RANGE_ERROR,
}
enum DataPivotAggregate {
    AVG,
    COUNT,
    MAX,
    MIN,
    SUM,
}
enum DataPivotError {
    INTERNAL_ERROR,
    SOURCE_MODEL_ERROR,
    FIELD_FORMAT_ERROR,
    USAGE_ERROR,
    OVERFLOW_ERROR,
}
enum DataPivotFieldType {
    ROW,
    COLUMN,
}
enum DataProxyError {
    COMMIT_ERROR,
    COMMIT_CANCELLED,
    READ_ONLY_VALUE,
    READ_ONLY_ROW,
    FILTER_ERROR,
}
enum DataSelectConditionType {
    PK,
    ALL_COLUMNS,
}
enum DataSelectError {
    MODIFICATION_STATEMENT_ERROR,
    MISSING_MODIFICATION_STATEMENT_ERROR,
    CONNECTION_ERROR,
    ACCESS_ERROR,
    SQL_ERROR,
    SAFETY_LOCKED_ERROR,
}
enum DiffType {
    ADD_ROW,
    REMOVE_ROW,
    MODIFY_ROW,
}
enum HolderError {
    STRING_CONVERSION_ERROR,
    VALUE_TYPE_ERROR,
    VALUE_NULL_ERROR,
}
enum LdapSearchScope {
    BASE,
    ONELEVEL,
    SUBTREE,
}
enum MetaDbObjectType {
    UNKNOWN,
    TABLE,
    VIEW,
}
enum MetaForeignKeyPolicy {
    UNKNOWN,
    NONE,
    NO_ACTION,
    RESTRICT,
    CASCADE,
    SET_NULL,
    SET_DEFAULT,
}
enum MetaSortType {
    ALHAPETICAL,
    DEPENDENCIES,
}
enum MetaStoreChangeType {
    ADD,
    REMOVE,
    MODIFY,
}
enum MetaStoreError {
    INCORRECT_SCHEMA_ERROR,
    UNSUPPORTED_PROVIDER_ERROR,
    INTERNAL_ERROR,
    META_CONTEXT_ERROR,
    MODIFY_CONTENTS_ERROR,
    EXTRACT_SQL_ERROR,
    ATTRIBUTE_NOT_FOUND_ERROR,
    ATTRIBUTE_ERROR,
    SCHEMA_OBJECT_NOT_FOUND_ERROR,
    SCHEMA_OBJECT_CONFLICT_ERROR,
    SCHEMA_OBJECT_DESCR_ERROR,
    TRANSACTION_ALREADY_STARTED_ERROR,
}
enum MetaStructError {
    UNKNOWN_OBJECT_ERROR,
    DUPLICATE_OBJECT_ERROR,
    INCOHERENCE_ERROR,
    XML_ERROR,
}
enum ServerOperationError {
    OBJECT_NAME_ERROR,
    INCORRECT_VALUE_ERROR,
    XML_ERROR,
}
enum ServerOperationNodeStatus {
    OPTIONAL,
    REQUIRED,
    UNKNOWN,
}
enum ServerOperationNodeType {
    PARAMLIST,
    DATA_MODEL,
    PARAM,
    SEQUENCE,
    SEQUENCE_ITEM,
    DATA_MODEL_COLUMN,
    UNKNOWN,
}
enum ServerOperationType {
    CREATE_DB,
    DROP_DB,
    CREATE_TABLE,
    DROP_TABLE,
    RENAME_TABLE,
    ADD_COLUMN,
    DROP_COLUMN,
    CREATE_INDEX,
    DROP_INDEX,
    CREATE_VIEW,
    DROP_VIEW,
    COMMENT_TABLE,
    COMMENT_COLUMN,
    CREATE_USER,
    ALTER_USER,
    DROP_USER,
    LAST,
}
enum ServerProviderError {
    METHOD_NON_IMPLEMENTED_ERROR,
    PREPARE_STMT_ERROR,
    EMPTY_STMT_ERROR,
    MISSING_PARAM_ERROR,
    STATEMENT_EXEC_ERROR,
    OPERATION_ERROR,
    INTERNAL_ERROR,
    BUSY_ERROR,
    NON_SUPPORTED_ERROR,
    SERVER_VERSION_ERROR,
    DATA_ERROR,
    DEFAULT_VALUE_HANDLING_ERROR,
    MISUSE_ERROR,
    FILE_NOT_FOUND_ERROR,
}
enum SetError {
    XML_SPEC_ERROR,
    HOLDER_NOT_FOUND_ERROR,
    INVALID_ERROR,
    READ_ONLY_ERROR,
    IMPLEMENTATION_ERROR,
}
enum SqlBuilderError {
    WRONG_TYPE_ERROR,
    MISUSE_ERROR,
}
enum SqlError {
    STRUCTURE_CONTENTS_ERROR,
    MALFORMED_IDENTIFIER_ERROR,
    MISSING_IDENTIFIER_ERROR,
    VALIDATION_ERROR,
}
enum SqlOperatorType {
    AND,
    OR,
    EQ,
    IS,
    LIKE,
    BETWEEN,
    GT,
    LT,
    GEQ,
    LEQ,
    DIFF,
    REGEXP,
    REGEXP_CI,
    NOT_REGEXP,
    NOT_REGEXP_CI,
    SIMILAR,
    ISNULL,
    ISNOTNULL,
    NOT,
    IN,
    NOTIN,
    CONCAT,
    PLUS,
    MINUS,
    STAR,
    DIV,
    REM,
    BITAND,
    BITOR,
    BITNOT,
    ILIKE,
    NOTLIKE,
    NOTILIKE,
    GLOB,
}
enum SqlParserError {
    SYNTAX_ERROR,
    OVERFLOW_ERROR,
    EMPTY_SQL_ERROR,
}
enum SqlParserFlavour {
    STANDARD,
    SQLITE,
    MYSQL,
    ORACLE,
    POSTGRESQL,
}
enum SqlParserMode {
    PARSE,
    DELIMIT,
}
enum SqlSelectJoinType {
    CROSS,
    NATURAL,
    INNER,
    LEFT,
    RIGHT,
    FULL,
}
enum SqlStatementCompoundType {
    UNION,
    UNION_ALL,
    INTERSECT,
    INTERSECT_ALL,
    EXCEPT,
    EXCEPT_ALL,
}
enum SqlStatementType {
    SELECT,
    INSERT,
    UPDATE,
    DELETE,
    COMPOUND,
    BEGIN,
    ROLLBACK,
    COMMIT,
    SAVEPOINT,
    ROLLBACK_SAVEPOINT,
    DELETE_SAVEPOINT,
    UNKNOWN,
    NONE,
}
enum StatementError {
    PARSE_ERROR,
    SYNTAX_ERROR,
    NO_CNC_ERROR,
    CNC_CLOSED_ERROR,
    EXEC_ERROR,
    PARAM_TYPE_ERROR,
    PARAM_ERROR,
}
enum ThreadNotificationType {
    JOB,
    SIGNAL,
}
enum ThreadWrapperError {
    THREAD_WRAPPER_UNKNOWN_ERROR,
}
enum TransactionIsolation {
    UNKNOWN,
    READ_COMMITTED,
    READ_UNCOMMITTED,
    REPEATABLE_READ,
    SERIALIZABLE,
}
enum TransactionStatusEventType {
    SAVEPOINT,
    SQL,
    SUB_TRANSACTION,
}
enum TransactionStatusState {
    OK,
    FAILED,
}
enum TreeError {
    TREE_UNKNOWN_ERROR,
}
enum TreeManagerError {
    TREE_MANAGER_UNKNOWN_ERROR,
}
enum TreeNodeError {
    TREE_NODE_UNKNOWN_ERROR,
}
enum XaTransactionError {
    ALREADY_REGISTERED_ERROR,
    DTP_NOT_SUPPORTED_ERROR,
    CONNECTION_BRANCH_LENGTH_ERROR,
}
enum ConnectionOptions {
    NONE,
    READ_ONLY,
    SQL_IDENTIFIERS_CASE_SENSITIVE,
    THREAD_SAFE,
    THREAD_ISOLATED,
    AUTO_META_DATA,
}
enum DataModelAccessFlags {
    RANDOM,
    CURSOR_FORWARD,
    CURSOR_BACKWARD,
    CURSOR,
    INSERT,
    UPDATE,
    DELETE,
    WRITE,
}
enum MetaGraphInfo {
    META_GRAPH_COLUMNS,
}
enum MetaStructFeature {
    NONE,
    FOREIGN_KEYS,
    VIEW_DEPENDENCIES,
    ALL,
}
enum ServerOperationCreateTableFlag {
    NOTHING_FLAG,
    PKEY_FLAG,
    NOT_NULL_FLAG,
    UNIQUE_FLAG,
    AUTOINC_FLAG,
    FKEY_FLAG,
    PKEY_AUTOINC_FLAG,
}
enum SqlIdentifierStyle {
    LOWER_CASE,
    UPPER_CASE,
}
enum StatementModelUsage {
    RANDOM_ACCESS,
    CURSOR_FORWARD,
    CURSOR_BACKWARD,
    CURSOR,
    ALLOW_NOPARAM,
    OFFLINE,
}
enum StatementSqlFlag {
    PARAMS_AS_VALUES,
    PRETTY,
    PARAMS_LONG,
    PARAMS_SHORT,
    PARAMS_AS_COLON,
    PARAMS_AS_DOLLAR,
    PARAMS_AS_QMARK,
    PARAMS_AS_UQMARK,
    TIMEZONE_TO_GMT,
}
enum ValueAttribute {
    NONE,
    IS_NULL,
    CAN_BE_NULL,
    IS_DEFAULT,
    CAN_BE_DEFAULT,
    IS_UNCHANGED,
    ACTIONS_SHOWN,
    DATA_NON_VALID,
    HAS_VALUE_ORIG,
    NO_MODIF,
    UNUSED,
}
const ATTRIBUTE_AUTO_INCREMENT: string
const ATTRIBUTE_DESCRIPTION: string
const ATTRIBUTE_IS_DEFAULT: string
const ATTRIBUTE_NAME: string
const ATTRIBUTE_NUMERIC_PRECISION: string
const ATTRIBUTE_NUMERIC_SCALE: string
const ATTRIBUTE_TREE_NODE_UNKNOWN_CHILDREN: string
const EXTRA_AUTO_INCREMENT: string

const SQLSTATE_GENERAL_ERROR: string
const SQLSTATE_NO_ERROR: string
const TIMEZONE_INVALID: number
function alphanumToText(text: string): string
function binaryCopy(boxed?: object | null): object | null
function binaryFree(boxed?: object | null): void
function blobCopy(boxed?: object | null): object | null
function blobFree(boxed?: object | null): void
function completionListGet(cnc: Connection, sql: string, start: number, end: number): string[] | null
function computeDmlStatements(cnc: Connection, selectStmt: Statement, requirePk: boolean, insertStmt?: Statement | null, updateStmt?: Statement | null, deleteStmt?: Statement | null): boolean
function dataHandlerGetDefault(forType: GObject.Type): DataHandler
function dataModelErrorQuark(): GLib.Quark
function defaultEscapeString(string: string): string
function defaultUnescapeString(string: string): string
function dsnSplit(string: string, outDsn: string, outUsername: string, outPassword: string): void
function gTypeFromString(str: string): GObject.Type
function gTypeToString(type: GObject.Type): string
function geometricpointCopy(boxed?: object | null): object | null
function geometricpointFree(boxed?: object | null): void
function getApplicationExecPath(appName: string): string
function identifierEqual(id1: string, id2: string): boolean
function identifierHash(id: string): number
function init(): void
function localeChanged(): void
function logDisable(): void
function logEnable(): void
function logIsEnabled(): boolean
function mutexFree(mutex: Mutex): void
function mutexLock(mutex: Mutex): void
function mutexTrylock(mutex: Mutex): boolean
function mutexUnlock(mutex: Mutex): void
function parseFormattedDate(gdate: GLib.Date, value: string, first: GLib.DateDMY, second: GLib.DateDMY, third: GLib.DateDMY, sep: number): boolean
function parseFormattedTime(timegda: Time, value: string, sep: number): boolean
function parseFormattedTimestamp(timestamp: Timestamp, value: string, first: GLib.DateDMY, second: GLib.DateDMY, third: GLib.DateDMY, sep: number): boolean
function parseIso8601Date(gdate: GLib.Date, value: string): boolean
function parseIso8601Time(timegda: Time, value: string): boolean
function parseIso8601Timestamp(timestamp: Timestamp, value: string): boolean
function rewriteStatementForNullParameters(stmt: Statement, params: Set, outStmt?: Statement | null): boolean
function rfc1738Decode(string: string): boolean
function rfc1738Encode(string: string): string
function selectAlterSelectForEmpty(stmt: Statement): Statement
function sqlErrorQuark(): GLib.Quark
function sqlIdentifierQuote(id: string, cnc: Connection | null, prov: ServerProvider | null, metaStoreConvention: boolean, forceQuotes: boolean): string
function sqlIdentifierSplit(id: string): string[] | null
function sqlOperationOperatorFromString(op: string): SqlOperatorType
function sqlOperationOperatorToString(op: SqlOperatorType): string
function sqlSelectJoinTypeToString(type: SqlSelectJoinType): string
function stringToBinary(str?: string | null): Binary
function stringToBlob(str: string): Blob
function textToAlphanum(text: string): string
function timeCopy(boxed?: object | null): object | null
function timeFree(boxed?: object | null): void
function timestampCopy(boxed?: object | null): object | null
function timestampFree(boxed?: object | null): void
function utilityCheckDataModel(model: DataModel, types: GObject.Type[]): boolean
function utilityDataModelDumpDataToXml(model: DataModel, parent: libxml2.NodePtr, cols: number[] | null, rows: number[] | null, useColIds: boolean): boolean
function utilityDataModelFindColumnDescription(model: DataSelect, fieldName: string): string
function utilityHolderLoadAttributes(holder: Holder, node: libxml2.NodePtr, sources: DataModel[]): boolean
function valueCompare(value1: any, value2: any): number
function valueDiffer(value1: any, value2: any): number
function valueStringify(value: any): string
interface AttributesManagerFunc {
    (attName: string, value: any, data?: object | null): void
}
interface AttributesManagerSignal {
    (obj: GObject.Object, attName: string, value: any, data?: object | null): void
}
interface ServerProviderAsyncCallback {
    (provider: ServerProvider, cnc: Connection, taskId: number, resultStatus: boolean, error: GLib.Error, data?: object | null): void
}
interface ServerProviderExecCallback {
    (provider: ServerProvider, cnc: Connection, taskId: number, resultObj: GObject.Object, error: GLib.Error, data?: object | null): void
}
interface SqlRenderingValue {
    (value: any, context: SqlRenderingContext): string
}
interface SqlReservedKeywordsFunc {
    (word: string): boolean
}
interface ThreadWrapperCallback {
    (wrapper: ThreadWrapper, instance: object | null, signame: string, nParamValues: number, paramValues: any, gdaReserved?: object | null, data?: object | null): void
}
interface ThreadWrapperFunc {
    (arg?: object | null): object | null
}
interface ThreadWrapperVoidFunc {
    (arg?: object | null): void
}
class DataHandler {
    /* Methods of Gda-5.0.Gda.DataHandler */
    acceptsGType(type: GObject.Type): boolean
    getDescr(): string
    getSaneInitValue(type: GObject.Type): any | null
    getSqlFromValue(value?: any | null): string
    getStrFromValue(value?: any | null): string
    getValueFromSql(sql: string | null, type: GObject.Type): any
    getValueFromStr(str: string | null, type: GObject.Type): any
    static name: string
    /* Static methods and pseudo-constructors */
    static getDefault(forType: GObject.Type): DataHandler
}
class DataModel {
    /* Methods of Gda-5.0.Gda.DataModel */
    addDataFromXmlNode(node: libxml2.NodePtr): boolean
    appendRow(): number
    appendValues(values?: any[] | null): number
    arrayCopyModel(): DataModelArray | null
    arrayCopyModelExt(cols: number[]): DataModelArray | null
    createIter(): DataModelIter
    describeColumn(col: number): Column | null
    dump(toStream?: object | null): void
    dumpAsString(): string
    exportToFile(format: DataModelIOFormat, file: string, cols: number[] | null, rows: number[] | null, options: Set): boolean
    exportToString(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string
    freeze(): void
    getAccessFlags(): DataModelAccessFlags
    getAttributesAt(col: number, row: number): ValueAttribute
    getColumnIndex(name: string): number
    getColumnName(col: number): string
    getColumnTitle(col: number): string
    getExceptions(): GLib.Error[]
    getNColumns(): number
    getNRows(): number
    getNotify(): boolean
    getRowFromValues(values: any[], colsIndex: number[]): number
    getTypedValueAt(col: number, row: number, expectedType: GObject.Type, nullok: boolean): any | null
    getValueAt(col: number, row: number): any | null
    importFromFile(file: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    importFromModel(from: DataModel, overwrite: boolean, colsTrans?: GLib.HashTable | null): boolean
    importFromString(string: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    iterAtRow(iter: DataModelIter, row: number): boolean
    iterNext(iter: DataModelIter): boolean
    iterPrev(iter: DataModelIter): boolean
    iterSetValue(iter: DataModelIter, col: number, value: any): boolean
    removeRow(row: number): boolean
    reset(): void
    rowInserted(row: number): void
    rowRemoved(row: number): void
    rowUpdated(row: number): void
    sendHint(hint: DataModelHint, hintValue?: any | null): void
    setColumnName(col: number, name: string): void
    setColumnTitle(col: number, title: string): void
    setNotify(doNotifyChanges: boolean): void
    setValueAt(col: number, row: number, value: any): boolean
    setValues(row: number, values?: any[] | null): boolean
    thaw(): void
    /* Signals of Gda-5.0.Gda.DataModel */
    connect(sigName: "access-changed", callback: (() => void)): number
    on(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "access-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: (() => void)): number
    on(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: ((row: number) => void)): number
    on(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: ((row: number) => void)): number
    on(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: ((row: number) => void)): number
    on(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-updated", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-updated", row: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Lockable {
    /* Methods of Gda-5.0.Gda.Lockable */
    lock(): void
    trylock(): boolean
    unlock(): void
    static name: string
}
interface Batch_ConstructProps extends GObject.Object_ConstructProps {
}
class Batch {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.Batch */
    addStatement(stmt: Statement): void
    copy(): Batch
    getParameters(): [ /* returnType */ boolean, /* outParams */ Set | null ]
    getStatements(): Statement[]
    removeStatement(stmt: Statement): void
    serialize(): string
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
    /* Signals of Gda-5.0.Gda.Batch */
    connect(sigName: "changed", callback: ((changedStmt: GObject.Object) => void)): number
    on(sigName: "changed", callback: (changedStmt: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (changedStmt: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (changedStmt: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "changed", changedStmt: GObject.Object): void
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
    constructor (config?: Batch_ConstructProps)
    _init (config?: Batch_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Batch
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
interface BlobOp_ConstructProps extends GObject.Object_ConstructProps {
}
class BlobOp {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.BlobOp */
    getLength(): number
    read(blob: Blob, offset: number, size: number): number
    readAll(blob: Blob): boolean
    write(blob: Blob, offset: number): number
    writeAll(blob: Blob): boolean
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
    constructor (config?: BlobOp_ConstructProps)
    _init (config?: BlobOp_ConstructProps): void
    static $gtype: GObject.Type
}
interface Column_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.Column */
    id?: string
}
class Column {
    /* Properties of Gda-5.0.Gda.Column */
    id: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.Column */
    copy(): Column
    getAllowNull(): boolean
    getAttribute(attribute: string): any
    getAutoIncrement(): boolean
    getDbmsType(): string
    getDefaultValue(): any | null
    getDescription(): string
    getGType(): GObject.Type
    getName(): string
    getPosition(): number
    setAllowNull(allow: boolean): void
    setAttribute(attribute: string, value?: any | null, destroy?: GLib.DestroyNotify | null): void
    setAutoIncrement(isAuto: boolean): void
    setDbmsType(dbmsType: string): void
    setDefaultValue(defaultValue?: any | null): void
    setDescription(title: string): void
    setGType(type: GObject.Type): void
    setName(name: string): void
    setPosition(position: number): void
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
    /* Signals of Gda-5.0.Gda.Column */
    connect(sigName: "g-type-changed", callback: ((oldType: GObject.Type, newType: GObject.Type) => void)): number
    on(sigName: "g-type-changed", callback: (oldType: GObject.Type, newType: GObject.Type) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-type-changed", callback: (oldType: GObject.Type, newType: GObject.Type) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-type-changed", callback: (oldType: GObject.Type, newType: GObject.Type) => void): NodeJS.EventEmitter
    emit(sigName: "g-type-changed", oldType: GObject.Type, newType: GObject.Type): void
    connect(sigName: "name-changed", callback: ((oldName: string) => void)): number
    on(sigName: "name-changed", callback: (oldName: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: (oldName: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: (oldName: string) => void): NodeJS.EventEmitter
    emit(sigName: "name-changed", oldName: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Column_ConstructProps)
    _init (config?: Column_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Column
    static $gtype: GObject.Type
}
interface Config_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.Config */
    systemFilename?: string
    userFilename?: string
}
class Config {
    /* Properties of Gda-5.0.Gda.Config */
    systemFilename: string
    userFilename: string
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
    /* Signals of Gda-5.0.Gda.Config */
    connect(sigName: "dsn-added", callback: ((newDsn?: object | null) => void)): number
    on(sigName: "dsn-added", callback: (newDsn?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dsn-added", callback: (newDsn?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dsn-added", callback: (newDsn?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "dsn-added", newDsn?: object | null): void
    connect(sigName: "dsn-changed", callback: ((dsn?: object | null) => void)): number
    on(sigName: "dsn-changed", callback: (dsn?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dsn-changed", callback: (dsn?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dsn-changed", callback: (dsn?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "dsn-changed", dsn?: object | null): void
    connect(sigName: "dsn-removed", callback: ((oldDsn?: object | null) => void)): number
    on(sigName: "dsn-removed", callback: (oldDsn?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dsn-removed", callback: (oldDsn?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dsn-removed", callback: (oldDsn?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "dsn-removed", oldDsn?: object | null): void
    connect(sigName: "dsn-to-be-removed", callback: ((oldDsn?: object | null) => void)): number
    on(sigName: "dsn-to-be-removed", callback: (oldDsn?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dsn-to-be-removed", callback: (oldDsn?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dsn-to-be-removed", callback: (oldDsn?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "dsn-to-be-removed", oldDsn?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::system-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::system-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::system-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::system-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Config_ConstructProps)
    _init (config?: Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static canModifySystemConfig(): boolean
    static defineDsn(info: DsnInfo): boolean
    static dsnNeedsAuthentication(dsnName: string): boolean
    static errorQuark(): GLib.Quark
    static get(): Config
    static getDsnInfo(dsnName: string): DsnInfo
    static getDsnInfoAtIndex(index: number): DsnInfo
    static getDsnInfoIndex(dsnName: string): number
    static getNbDsn(): number
    static getProvider(providerName: string): ServerProvider
    static getProviderInfo(providerName: string): ProviderInfo
    static listDsn(): DataModel
    static listProviders(): DataModel
    static removeDsn(dsnName: string): boolean
    static $gtype: GObject.Type
}
interface Connection_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.Connection */
    authString?: string
    cncString?: string
    dsn?: string
    eventsHistorySize?: number
    executionSlowdown?: number
    executionTimer?: boolean
    isWrapper?: boolean
    metaStore?: MetaStore
    monitorWrappedInMainloop?: boolean
    provider?: ServerProvider
    threadOwner?: object
}
class Connection {
    /* Properties of Gda-5.0.Gda.Connection */
    authString: string
    cncString: string
    dsn: string
    eventsHistorySize: number
    executionSlowdown: number
    executionTimer: boolean
    isWrapper: boolean
    metaStore: MetaStore
    monitorWrappedInMainloop: boolean
    provider: ServerProvider
    threadOwner: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.Connection */
    addEvent(event: ConnectionEvent): void
    addPreparedStatement(gdaStmt: Statement, preparedStmt: PStmt): void
    addSavepoint(name?: string | null): boolean
    asyncCancel(taskId: number): boolean
    asyncFetchResult(taskId: number): [ /* returnType */ GObject.Object, /* lastInsertRow */ Set | null ]
    asyncStatementExecute(stmt: Statement, params: Set | null, modelUsage: StatementModelUsage, colTypes: GObject.Type[] | null, needLastInsertRow: boolean): number
    batchExecute(batch: Batch, params: Set | null, modelUsage: StatementModelUsage): GObject.Object[]
    beginTransaction(name: string | null, level: TransactionIsolation): boolean
    clearEventsList(): void
    close(): void
    closeNoWarning(): void
    commitTransaction(name?: string | null): boolean
    createOperation(type: ServerOperationType, options?: Set | null): ServerOperation
    createParser(): SqlParser
    delPreparedStatement(gdaStmt: Statement): void
    deleteRowFromTable(table: string, conditionColumnName: string, conditionValue: any): boolean
    deleteSavepoint(name?: string | null): boolean
    executeNonSelectCommand(sql: string): number
    executeSelectCommand(sql: string): DataModel
    getAuthentication(): string
    getCncString(): string
    getDateFormat(): [ /* returnType */ boolean, /* outFirst */ GLib.DateDMY | null, /* outSecond */ GLib.DateDMY | null, /* outThird */ GLib.DateDMY | null, /* outSep */ string | null ]
    getDsn(): string
    getEvents(): ConnectionEvent[]
    getMetaStore(): MetaStore
    getMetaStoreDataV(metaType: ConnectionMetaType, filters: Holder[]): DataModel
    getOptions(): ConnectionOptions
    getPreparedStatement(gdaStmt: Statement): PStmt
    getProvider(): ServerProvider
    getProviderName(): string
    getTransactionStatus(): TransactionStatus
    insertRowIntoTableV(table: string, colNames: string[], values: any[]): boolean
    isOpened(): boolean
    open(): boolean
    parseSqlString(sql: string): [ /* returnType */ Statement, /* params */ Set | null ]
    performOperation(op: ServerOperation): boolean
    pointAvailableEvent(type: ConnectionEventType): ConnectionEvent
    quoteSqlIdentifier(id: string): string
    repetitiveStatementExecute(rstmt: RepetitiveStatement, modelUsage: StatementModelUsage, colTypes: GObject.Type[] | null, stopOnError: boolean): GObject.Object[]
    rollbackSavepoint(name?: string | null): boolean
    rollbackTransaction(name?: string | null): boolean
    statementExecute(stmt: Statement, params: Set | null, modelUsage: StatementModelUsage): [ /* returnType */ GObject.Object, /* lastInsertRow */ Set | null ]
    statementExecuteNonSelect(stmt: Statement, params?: Set | null): [ /* returnType */ number, /* lastInsertRow */ Set | null ]
    statementExecuteSelect(stmt: Statement, params?: Set | null): DataModel
    statementExecuteSelectFull(stmt: Statement, params: Set | null, modelUsage: StatementModelUsage, colTypes?: GObject.Type[] | null): DataModel
    statementPrepare(stmt: Statement): boolean
    statementToSql(stmt: Statement, params: Set | null, flags: StatementSqlFlag): [ /* returnType */ string, /* paramsUsed */ Holder[] | null ]
    supportsFeature(feature: ConnectionFeature): boolean
    updateMetaStore(context?: MetaContext | null): boolean
    updateRowInTableV(table: string, conditionColumnName: string, conditionValue: any, colNames: string[], values: any[]): boolean
    valueToSqlString(from: any): string
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
    /* Methods of Gda-5.0.Gda.Lockable */
    lock(): void
    trylock(): boolean
    unlock(): void
    /* Signals of Gda-5.0.Gda.Connection */
    connect(sigName: "conn-closed", callback: (() => void)): number
    on(sigName: "conn-closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "conn-closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "conn-closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "conn-closed"): void
    connect(sigName: "conn-opened", callback: (() => void)): number
    on(sigName: "conn-opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "conn-opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "conn-opened", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "conn-opened"): void
    connect(sigName: "conn-to-close", callback: (() => void)): number
    on(sigName: "conn-to-close", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "conn-to-close", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "conn-to-close", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "conn-to-close"): void
    connect(sigName: "dsn-changed", callback: (() => void)): number
    on(sigName: "dsn-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dsn-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dsn-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "dsn-changed"): void
    connect(sigName: "error", callback: ((event: ConnectionEvent) => void)): number
    on(sigName: "error", callback: (event: ConnectionEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: (event: ConnectionEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: (event: ConnectionEvent) => void): NodeJS.EventEmitter
    emit(sigName: "error", event: ConnectionEvent): void
    connect(sigName: "transaction-status-changed", callback: (() => void)): number
    on(sigName: "transaction-status-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "transaction-status-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "transaction-status-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "transaction-status-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auth-string", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-string", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auth-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auth-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auth-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cnc-string", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cnc-string", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cnc-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cnc-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cnc-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dsn", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dsn", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dsn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dsn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dsn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::events-history-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events-history-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::events-history-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::events-history-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::events-history-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::execution-slowdown", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::execution-slowdown", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::execution-slowdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::execution-slowdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::execution-slowdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::execution-timer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::execution-timer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::execution-timer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::execution-timer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::execution-timer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-wrapper", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-wrapper", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-wrapper", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-wrapper", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-wrapper", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::meta-store", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::meta-store", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::meta-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::meta-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::meta-store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::monitor-wrapped-in-mainloop", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monitor-wrapped-in-mainloop", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::monitor-wrapped-in-mainloop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::monitor-wrapped-in-mainloop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::monitor-wrapped-in-mainloop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::provider", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::thread-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thread-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::thread-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::thread-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::thread-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Connection_ConstructProps)
    _init (config?: Connection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromDsn(dsn: string, authString: string | null, options: ConnectionOptions): Connection
    static newFromString(providerName: string | null, cncString: string, authString: string | null, options: ConnectionOptions): Connection
    static errorQuark(): GLib.Quark
    static openFromDsn(dsn: string, authString: string | null, options: ConnectionOptions): Connection
    static openFromString(providerName: string | null, cncString: string, authString: string | null, options: ConnectionOptions): Connection
    static openSqlite(directory: string | null, filename: string, autoUnlink: boolean): Connection
    static stringSplit(string: string, outCncParams: string, outProvider: string, outUsername: string, outPassword?: string | null): void
    static $gtype: GObject.Type
}
interface ConnectionEvent_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.ConnectionEvent */
    type?: number
}
class ConnectionEvent {
    /* Properties of Gda-5.0.Gda.ConnectionEvent */
    type: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.ConnectionEvent */
    getCode(): number
    getDescription(): string
    getEventType(): ConnectionEventType
    getGdaCode(): ConnectionEventCode
    getSource(): string
    getSqlstate(): string
    setCode(code: number): void
    setDescription(description?: string | null): void
    setEventType(type: ConnectionEventType): void
    setGdaCode(code: ConnectionEventCode): void
    setSource(source: string): void
    setSqlstate(sqlstate: string): void
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
    connect(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ConnectionEvent_ConstructProps)
    _init (config?: ConnectionEvent_ConstructProps): void
    static $gtype: GObject.Type
}
interface DataAccessWrapper_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.DataAccessWrapper */
    model?: DataModel
}
class DataAccessWrapper {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.DataAccessWrapper */
    setMapping(mapping: number[] | null): boolean
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
    /* Methods of Gda-5.0.Gda.DataModel */
    addDataFromXmlNode(node: libxml2.NodePtr): boolean
    appendRow(): number
    appendValues(values?: any[] | null): number
    arrayCopyModel(): DataModelArray | null
    arrayCopyModelExt(cols: number[]): DataModelArray | null
    createIter(): DataModelIter
    describeColumn(col: number): Column | null
    dump(toStream?: object | null): void
    dumpAsString(): string
    exportToFile(format: DataModelIOFormat, file: string, cols: number[] | null, rows: number[] | null, options: Set): boolean
    exportToString(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string
    freeze(): void
    getAccessFlags(): DataModelAccessFlags
    getAttributesAt(col: number, row: number): ValueAttribute
    getColumnIndex(name: string): number
    getColumnName(col: number): string
    getColumnTitle(col: number): string
    getExceptions(): GLib.Error[]
    getNColumns(): number
    getNRows(): number
    getNotify(): boolean
    getRowFromValues(values: any[], colsIndex: number[]): number
    getTypedValueAt(col: number, row: number, expectedType: GObject.Type, nullok: boolean): any | null
    getValueAt(col: number, row: number): any | null
    importFromFile(file: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    importFromModel(from: DataModel, overwrite: boolean, colsTrans?: GLib.HashTable | null): boolean
    importFromString(string: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    iterAtRow(iter: DataModelIter, row: number): boolean
    iterNext(iter: DataModelIter): boolean
    iterPrev(iter: DataModelIter): boolean
    iterSetValue(iter: DataModelIter, col: number, value: any): boolean
    removeRow(row: number): boolean
    reset(): void
    rowInserted(row: number): void
    rowRemoved(row: number): void
    rowUpdated(row: number): void
    sendHint(hint: DataModelHint, hintValue?: any | null): void
    setColumnName(col: number, name: string): void
    setColumnTitle(col: number, title: string): void
    setNotify(doNotifyChanges: boolean): void
    setValueAt(col: number, row: number, value: any): boolean
    setValues(row: number, values?: any[] | null): boolean
    thaw(): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda-5.0.Gda.DataModel */
    connect(sigName: "access-changed", callback: (() => void)): number
    on(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "access-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: (() => void)): number
    on(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: ((row: number) => void)): number
    on(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: ((row: number) => void)): number
    on(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: ((row: number) => void)): number
    on(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-updated", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-updated", row: number): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataAccessWrapper_ConstructProps)
    _init (config?: DataAccessWrapper_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
interface DataComparator_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.DataComparator */
    newModel?: DataModel
    oldModel?: DataModel
}
class DataComparator {
    /* Properties of Gda-5.0.Gda.DataComparator */
    newModel: DataModel
    oldModel: DataModel
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.DataComparator */
    computeDiff(): boolean
    getDiff(pos: number): Diff
    getNDiffs(): number
    setKeyColumns(colNumbers: number[]): void
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
    /* Signals of Gda-5.0.Gda.DataComparator */
    connect(sigName: "diff-computed", callback: ((object?: object | null) => boolean)): number
    on(sigName: "diff-computed", callback: (object?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "diff-computed", callback: (object?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "diff-computed", callback: (object?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "diff-computed", object?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::new-model", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::new-model", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::new-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::new-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::new-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::old-model", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::old-model", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::old-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::old-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::old-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataComparator_ConstructProps)
    _init (config?: DataComparator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(oldModel: DataModel, newModel: DataModel): DataComparator
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
interface DataModelArray_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.DataModelArray */
    nColumns?: number
    readOnly?: boolean
}
class DataModelArray {
    /* Properties of Gda-5.0.Gda.DataModelArray */
    nColumns: number
    readOnly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.DataModelArray */
    clear(): void
    getRow(row: number): Row
    setNColumns(cols: number): void
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
    /* Methods of Gda-5.0.Gda.DataModel */
    addDataFromXmlNode(node: libxml2.NodePtr): boolean
    appendRow(): number
    appendValues(values?: any[] | null): number
    arrayCopyModel(): DataModelArray | null
    arrayCopyModelExt(cols: number[]): DataModelArray | null
    createIter(): DataModelIter
    describeColumn(col: number): Column | null
    dump(toStream?: object | null): void
    dumpAsString(): string
    exportToFile(format: DataModelIOFormat, file: string, cols: number[] | null, rows: number[] | null, options: Set): boolean
    exportToString(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string
    freeze(): void
    getAccessFlags(): DataModelAccessFlags
    getAttributesAt(col: number, row: number): ValueAttribute
    getColumnIndex(name: string): number
    getColumnName(col: number): string
    getColumnTitle(col: number): string
    getExceptions(): GLib.Error[]
    getNColumns(): number
    getNRows(): number
    getNotify(): boolean
    getRowFromValues(values: any[], colsIndex: number[]): number
    getTypedValueAt(col: number, row: number, expectedType: GObject.Type, nullok: boolean): any | null
    getValueAt(col: number, row: number): any | null
    importFromFile(file: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    importFromModel(from: DataModel, overwrite: boolean, colsTrans?: GLib.HashTable | null): boolean
    importFromString(string: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    iterAtRow(iter: DataModelIter, row: number): boolean
    iterNext(iter: DataModelIter): boolean
    iterPrev(iter: DataModelIter): boolean
    iterSetValue(iter: DataModelIter, col: number, value: any): boolean
    removeRow(row: number): boolean
    reset(): void
    rowInserted(row: number): void
    rowRemoved(row: number): void
    rowUpdated(row: number): void
    sendHint(hint: DataModelHint, hintValue?: any | null): void
    setColumnName(col: number, name: string): void
    setColumnTitle(col: number, title: string): void
    setNotify(doNotifyChanges: boolean): void
    setValueAt(col: number, row: number, value: any): boolean
    setValues(row: number, values?: any[] | null): boolean
    thaw(): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda-5.0.Gda.DataModel */
    connect(sigName: "access-changed", callback: (() => void)): number
    on(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "access-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: (() => void)): number
    on(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: ((row: number) => void)): number
    on(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: ((row: number) => void)): number
    on(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: ((row: number) => void)): number
    on(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-updated", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-updated", row: number): void
    connect(sigName: "notify::n-columns", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-columns", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: DataModelArray_ConstructProps)
    _init (config?: DataModelArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
interface DataModelDir_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.DataModelDir */
    basedir?: string
}
class DataModelDir {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.DataModelDir */
    cleanErrors(): void
    getErrors(): GLib.Error[]
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
    /* Methods of Gda-5.0.Gda.DataModel */
    addDataFromXmlNode(node: libxml2.NodePtr): boolean
    appendRow(): number
    appendValues(values?: any[] | null): number
    arrayCopyModel(): DataModelArray | null
    arrayCopyModelExt(cols: number[]): DataModelArray | null
    createIter(): DataModelIter
    describeColumn(col: number): Column | null
    dump(toStream?: object | null): void
    dumpAsString(): string
    exportToFile(format: DataModelIOFormat, file: string, cols: number[] | null, rows: number[] | null, options: Set): boolean
    exportToString(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string
    freeze(): void
    getAccessFlags(): DataModelAccessFlags
    getAttributesAt(col: number, row: number): ValueAttribute
    getColumnIndex(name: string): number
    getColumnName(col: number): string
    getColumnTitle(col: number): string
    getExceptions(): GLib.Error[]
    getNColumns(): number
    getNRows(): number
    getNotify(): boolean
    getRowFromValues(values: any[], colsIndex: number[]): number
    getTypedValueAt(col: number, row: number, expectedType: GObject.Type, nullok: boolean): any | null
    getValueAt(col: number, row: number): any | null
    importFromFile(file: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    importFromModel(from: DataModel, overwrite: boolean, colsTrans?: GLib.HashTable | null): boolean
    importFromString(string: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    iterAtRow(iter: DataModelIter, row: number): boolean
    iterNext(iter: DataModelIter): boolean
    iterPrev(iter: DataModelIter): boolean
    iterSetValue(iter: DataModelIter, col: number, value: any): boolean
    removeRow(row: number): boolean
    reset(): void
    rowInserted(row: number): void
    rowRemoved(row: number): void
    rowUpdated(row: number): void
    sendHint(hint: DataModelHint, hintValue?: any | null): void
    setColumnName(col: number, name: string): void
    setColumnTitle(col: number, title: string): void
    setNotify(doNotifyChanges: boolean): void
    setValueAt(col: number, row: number, value: any): boolean
    setValues(row: number, values?: any[] | null): boolean
    thaw(): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda-5.0.Gda.DataModel */
    connect(sigName: "access-changed", callback: (() => void)): number
    on(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "access-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: (() => void)): number
    on(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: ((row: number) => void)): number
    on(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: ((row: number) => void)): number
    on(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: ((row: number) => void)): number
    on(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-updated", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-updated", row: number): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataModelDir_ConstructProps)
    _init (config?: DataModelDir_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
interface DataModelImport_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.DataModelImport */
    dataString?: string
    filename?: string
    options?: Set
    randomAccess?: boolean
    strict?: boolean
    xmlNode?: object
}
class DataModelImport {
    /* Properties of Gda-5.0.Gda.DataModelImport */
    strict: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.DataModelImport */
    cleanErrors(): void
    getErrors(): GLib.Error[]
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
    /* Methods of Gda-5.0.Gda.DataModel */
    addDataFromXmlNode(node: libxml2.NodePtr): boolean
    appendRow(): number
    appendValues(values?: any[] | null): number
    arrayCopyModel(): DataModelArray | null
    arrayCopyModelExt(cols: number[]): DataModelArray | null
    createIter(): DataModelIter
    describeColumn(col: number): Column | null
    dump(toStream?: object | null): void
    dumpAsString(): string
    exportToFile(format: DataModelIOFormat, file: string, cols: number[] | null, rows: number[] | null, options: Set): boolean
    exportToString(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string
    freeze(): void
    getAccessFlags(): DataModelAccessFlags
    getAttributesAt(col: number, row: number): ValueAttribute
    getColumnIndex(name: string): number
    getColumnName(col: number): string
    getColumnTitle(col: number): string
    getExceptions(): GLib.Error[]
    getNColumns(): number
    getNRows(): number
    getNotify(): boolean
    getRowFromValues(values: any[], colsIndex: number[]): number
    getTypedValueAt(col: number, row: number, expectedType: GObject.Type, nullok: boolean): any | null
    getValueAt(col: number, row: number): any | null
    importFromFile(file: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    importFromModel(from: DataModel, overwrite: boolean, colsTrans?: GLib.HashTable | null): boolean
    importFromString(string: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    iterAtRow(iter: DataModelIter, row: number): boolean
    iterNext(iter: DataModelIter): boolean
    iterPrev(iter: DataModelIter): boolean
    iterSetValue(iter: DataModelIter, col: number, value: any): boolean
    removeRow(row: number): boolean
    reset(): void
    rowInserted(row: number): void
    rowRemoved(row: number): void
    rowUpdated(row: number): void
    sendHint(hint: DataModelHint, hintValue?: any | null): void
    setColumnName(col: number, name: string): void
    setColumnTitle(col: number, title: string): void
    setNotify(doNotifyChanges: boolean): void
    setValueAt(col: number, row: number, value: any): boolean
    setValues(row: number, values?: any[] | null): boolean
    thaw(): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda-5.0.Gda.DataModel */
    connect(sigName: "access-changed", callback: (() => void)): number
    on(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "access-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: (() => void)): number
    on(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: ((row: number) => void)): number
    on(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: ((row: number) => void)): number
    on(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: ((row: number) => void)): number
    on(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-updated", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-updated", row: number): void
    connect(sigName: "notify::strict", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strict", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataModelImport_ConstructProps)
    _init (config?: DataModelImport_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFile(filename: string, randomAccess: boolean, options?: Set | null): DataModel
    static newMem(data: string, randomAccess: boolean, options?: Set | null): DataModel
    static newXmlNode(node: libxml2.NodePtr): DataModel
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
interface DataModelIter_ConstructProps extends Set_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.DataModelIter */
    currentRow?: number
    dataModel?: DataModel
    forcedModel?: DataModel
    updateModel?: boolean
}
class DataModelIter {
    /* Properties of Gda-5.0.Gda.DataModelIter */
    currentRow: number
    dataModel: DataModel
    forcedModel: DataModel
    updateModel: boolean
    /* Properties of Gda-5.0.Gda.Set */
    description: string
    id: string
    name: string
    validateChanges: boolean
    /* Fields of Gda-5.0.Gda.Set */
    readonly object: GObject.Object
    readonly priv: SetPrivate
    readonly holders: Holder[]
    readonly nodesList: SetNode[]
    readonly sourcesList: SetSource[]
    readonly groupsList: SetGroup[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.DataModelIter */
    getColumnForParam(param: Holder): number
    getHolderForField(col: number): Holder
    getRow(): number
    getValueAt(col: number): any | null
    getValueAtE(col: number): any | null
    getValueForField(fieldName: string): any | null
    invalidateContents(): void
    isValid(): boolean
    moveNext(): boolean
    movePrev(): boolean
    moveToRow(row: number): boolean
    setValueAt(col: number, value: any): boolean
    /* Methods of Gda-5.0.Gda.Set */
    addHolder(holder: Holder): boolean
    copy(): Set
    getGroup(holder: Holder): SetGroup
    getHolder(holderId: string): Holder
    getHolderValue(holderId: string): any | null
    getNode(holder: Holder): SetNode
    getNthHolder(pos: number): Holder
    getSource(holder: Holder): SetSource
    getSourceForModel(model: DataModel): SetSource
    mergeWithSet(setToMerge: Set): void
    removeHolder(holder: Holder): void
    replaceSourceModel(source: SetSource, model: DataModel): void
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
    /* Signals of Gda-5.0.Gda.DataModelIter */
    connect(sigName: "end-of-data", callback: (() => void)): number
    on(sigName: "end-of-data", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "end-of-data", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "end-of-data", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "end-of-data"): void
    connect(sigName: "row-changed", callback: ((row: number) => void)): number
    on(sigName: "row-changed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-changed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-changed", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-changed", row: number): void
    /* Signals of Gda-5.0.Gda.Set */
    connect(sigName: "holder-attr-changed", callback: ((holder: Holder, attrName: string, attrValue: any) => void)): number
    on(sigName: "holder-attr-changed", callback: (holder: Holder, attrName: string, attrValue: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "holder-attr-changed", callback: (holder: Holder, attrName: string, attrValue: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "holder-attr-changed", callback: (holder: Holder, attrName: string, attrValue: any) => void): NodeJS.EventEmitter
    emit(sigName: "holder-attr-changed", holder: Holder, attrName: string, attrValue: any): void
    connect(sigName: "holder-changed", callback: ((object: Holder) => void)): number
    on(sigName: "holder-changed", callback: (object: Holder) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "holder-changed", callback: (object: Holder) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "holder-changed", callback: (object: Holder) => void): NodeJS.EventEmitter
    emit(sigName: "holder-changed", object: Holder): void
    connect(sigName: "holder-type-set", callback: ((holder: Holder) => void)): number
    on(sigName: "holder-type-set", callback: (holder: Holder) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "holder-type-set", callback: (holder: Holder) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "holder-type-set", callback: (holder: Holder) => void): NodeJS.EventEmitter
    emit(sigName: "holder-type-set", holder: Holder): void
    connect(sigName: "public-data-changed", callback: (() => void)): number
    on(sigName: "public-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "public-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "public-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "public-data-changed"): void
    connect(sigName: "source-model-changed", callback: ((source?: object | null) => void)): number
    on(sigName: "source-model-changed", callback: (source?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-model-changed", callback: (source?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-model-changed", callback: (source?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "source-model-changed", source?: object | null): void
    connect(sigName: "validate-holder-change", callback: ((holder: Holder, newValue: any) => GLib.Error)): number
    on(sigName: "validate-holder-change", callback: (holder: Holder, newValue: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "validate-holder-change", callback: (holder: Holder, newValue: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "validate-holder-change", callback: (holder: Holder, newValue: any) => void): NodeJS.EventEmitter
    emit(sigName: "validate-holder-change", holder: Holder, newValue: any): void
    connect(sigName: "validate-set", callback: (() => GLib.Error)): number
    on(sigName: "validate-set", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "validate-set", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "validate-set", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "validate-set"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-row", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-row", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-row", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-row", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-row", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::data-model", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-model", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::forced-model", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::forced-model", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::forced-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::forced-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::forced-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-model", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-model", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::validate-changes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::validate-changes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataModelIter_ConstructProps)
    _init (config?: DataModelIter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
interface DataModelLdap_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.DataModelLdap */
    attributes?: string
    base?: string
    cnc?: Connection
    filter?: string
    scope?: number
}
class DataModelLdap {
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
    /* Methods of Gda-5.0.Gda.DataModel */
    addDataFromXmlNode(node: libxml2.NodePtr): boolean
    appendRow(): number
    appendValues(values?: any[] | null): number
    arrayCopyModel(): DataModelArray | null
    arrayCopyModelExt(cols: number[]): DataModelArray | null
    createIter(): DataModelIter
    describeColumn(col: number): Column | null
    dump(toStream?: object | null): void
    dumpAsString(): string
    exportToFile(format: DataModelIOFormat, file: string, cols: number[] | null, rows: number[] | null, options: Set): boolean
    exportToString(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string
    freeze(): void
    getAccessFlags(): DataModelAccessFlags
    getAttributesAt(col: number, row: number): ValueAttribute
    getColumnIndex(name: string): number
    getColumnName(col: number): string
    getColumnTitle(col: number): string
    getExceptions(): GLib.Error[]
    getNColumns(): number
    getNRows(): number
    getNotify(): boolean
    getRowFromValues(values: any[], colsIndex: number[]): number
    getTypedValueAt(col: number, row: number, expectedType: GObject.Type, nullok: boolean): any | null
    getValueAt(col: number, row: number): any | null
    importFromFile(file: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    importFromModel(from: DataModel, overwrite: boolean, colsTrans?: GLib.HashTable | null): boolean
    importFromString(string: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    iterAtRow(iter: DataModelIter, row: number): boolean
    iterNext(iter: DataModelIter): boolean
    iterPrev(iter: DataModelIter): boolean
    iterSetValue(iter: DataModelIter, col: number, value: any): boolean
    removeRow(row: number): boolean
    reset(): void
    rowInserted(row: number): void
    rowRemoved(row: number): void
    rowUpdated(row: number): void
    sendHint(hint: DataModelHint, hintValue?: any | null): void
    setColumnName(col: number, name: string): void
    setColumnTitle(col: number, title: string): void
    setNotify(doNotifyChanges: boolean): void
    setValueAt(col: number, row: number, value: any): boolean
    setValues(row: number, values?: any[] | null): boolean
    thaw(): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda-5.0.Gda.DataModel */
    connect(sigName: "access-changed", callback: (() => void)): number
    on(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "access-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: (() => void)): number
    on(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: ((row: number) => void)): number
    on(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: ((row: number) => void)): number
    on(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: ((row: number) => void)): number
    on(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-updated", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-updated", row: number): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataModelLdap_ConstructProps)
    _init (config?: DataModelLdap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newWithConfig(cnc: Connection, baseDn: string | null, filter: string | null, attributes: string | null, scope: LdapSearchScope): DataModelLdap
    static computeColumns(cnc: Connection, attributes?: string | null): Column[]
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
interface DataPivot_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.DataPivot */
    model?: DataModel
}
class DataPivot {
    /* Properties of Gda-5.0.Gda.DataPivot */
    model: DataModel
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.DataPivot */
    addData(aggregateType: DataPivotAggregate, field: string, alias?: string | null): boolean
    addField(fieldType: DataPivotFieldType, field: string, alias?: string | null): boolean
    populate(): boolean
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
    /* Methods of Gda-5.0.Gda.DataModel */
    addDataFromXmlNode(node: libxml2.NodePtr): boolean
    appendRow(): number
    appendValues(values?: any[] | null): number
    arrayCopyModel(): DataModelArray | null
    arrayCopyModelExt(cols: number[]): DataModelArray | null
    createIter(): DataModelIter
    describeColumn(col: number): Column | null
    dump(toStream?: object | null): void
    dumpAsString(): string
    exportToFile(format: DataModelIOFormat, file: string, cols: number[] | null, rows: number[] | null, options: Set): boolean
    exportToString(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string
    freeze(): void
    getAccessFlags(): DataModelAccessFlags
    getAttributesAt(col: number, row: number): ValueAttribute
    getColumnIndex(name: string): number
    getColumnName(col: number): string
    getColumnTitle(col: number): string
    getExceptions(): GLib.Error[]
    getNColumns(): number
    getNRows(): number
    getNotify(): boolean
    getRowFromValues(values: any[], colsIndex: number[]): number
    getTypedValueAt(col: number, row: number, expectedType: GObject.Type, nullok: boolean): any | null
    getValueAt(col: number, row: number): any | null
    importFromFile(file: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    importFromModel(from: DataModel, overwrite: boolean, colsTrans?: GLib.HashTable | null): boolean
    importFromString(string: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    iterAtRow(iter: DataModelIter, row: number): boolean
    iterNext(iter: DataModelIter): boolean
    iterPrev(iter: DataModelIter): boolean
    iterSetValue(iter: DataModelIter, col: number, value: any): boolean
    removeRow(row: number): boolean
    reset(): void
    rowInserted(row: number): void
    rowRemoved(row: number): void
    rowUpdated(row: number): void
    sendHint(hint: DataModelHint, hintValue?: any | null): void
    setColumnName(col: number, name: string): void
    setColumnTitle(col: number, title: string): void
    setNotify(doNotifyChanges: boolean): void
    setValueAt(col: number, row: number, value: any): boolean
    setValues(row: number, values?: any[] | null): boolean
    thaw(): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda-5.0.Gda.DataModel */
    connect(sigName: "access-changed", callback: (() => void)): number
    on(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "access-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: (() => void)): number
    on(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: ((row: number) => void)): number
    on(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: ((row: number) => void)): number
    on(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: ((row: number) => void)): number
    on(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-updated", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-updated", row: number): void
    connect(sigName: "notify::model", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataPivot_ConstructProps)
    _init (config?: DataPivot_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
interface DataProxy_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.DataProxy */
    cacheChanges?: boolean
    deferSync?: boolean
    model?: DataModel
    prependNullEntry?: boolean
    sampleSize?: number
}
class DataProxy {
    /* Properties of Gda-5.0.Gda.DataProxy */
    cacheChanges: boolean
    deferSync: boolean
    model: DataModel
    prependNullEntry: boolean
    sampleSize: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.DataProxy */
    alterValueAttributes(proxyRow: number, col: number, alterFlags: ValueAttribute): void
    applyAllChanges(): boolean
    applyRowChanges(proxyRow: number): boolean
    cancelAllChanges(): boolean
    cancelRowChanges(proxyRow: number, col: number): void
    delete(proxyRow: number): void
    getFilterExpr(): string
    getFilteredNRows(): number
    getNModifiedRows(): number
    getNNewRows(): number
    getProxiedModel(): DataModel
    getProxiedModelNCols(): number
    getProxiedModelNRows(): number
    getProxiedModelRow(proxyRow: number): number
    getSampleEnd(): number
    getSampleSize(): number
    getSampleStart(): number
    getValueAttributes(proxyRow: number, col: number): ValueAttribute
    getValues(proxyRow: number, colsIndex: number[]): any[]
    hasChanged(): boolean
    isReadOnly(): boolean
    rowHasChanged(proxyRow: number): boolean
    rowIsDeleted(proxyRow: number): boolean
    rowIsInserted(proxyRow: number): boolean
    setFilterExpr(filterExpr?: string | null): boolean
    setOrderingColumn(col: number): boolean
    setSampleSize(sampleSize: number): void
    setSampleStart(sampleStart: number): void
    undelete(proxyRow: number): void
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
    /* Methods of Gda-5.0.Gda.DataModel */
    addDataFromXmlNode(node: libxml2.NodePtr): boolean
    appendRow(): number
    appendValues(values?: any[] | null): number
    arrayCopyModel(): DataModelArray | null
    arrayCopyModelExt(cols: number[]): DataModelArray | null
    createIter(): DataModelIter
    describeColumn(col: number): Column | null
    dump(toStream?: object | null): void
    dumpAsString(): string
    exportToFile(format: DataModelIOFormat, file: string, cols: number[] | null, rows: number[] | null, options: Set): boolean
    exportToString(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string
    freeze(): void
    getAccessFlags(): DataModelAccessFlags
    getAttributesAt(col: number, row: number): ValueAttribute
    getColumnIndex(name: string): number
    getColumnName(col: number): string
    getColumnTitle(col: number): string
    getExceptions(): GLib.Error[]
    getNColumns(): number
    getNRows(): number
    getNotify(): boolean
    getRowFromValues(values: any[], colsIndex: number[]): number
    getTypedValueAt(col: number, row: number, expectedType: GObject.Type, nullok: boolean): any | null
    getValueAt(col: number, row: number): any | null
    importFromFile(file: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    importFromModel(from: DataModel, overwrite: boolean, colsTrans?: GLib.HashTable | null): boolean
    importFromString(string: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    iterAtRow(iter: DataModelIter, row: number): boolean
    iterNext(iter: DataModelIter): boolean
    iterPrev(iter: DataModelIter): boolean
    iterSetValue(iter: DataModelIter, col: number, value: any): boolean
    removeRow(row: number): boolean
    reset(): void
    rowInserted(row: number): void
    rowRemoved(row: number): void
    rowUpdated(row: number): void
    sendHint(hint: DataModelHint, hintValue?: any | null): void
    setColumnName(col: number, name: string): void
    setColumnTitle(col: number, title: string): void
    setNotify(doNotifyChanges: boolean): void
    setValueAt(col: number, row: number, value: any): boolean
    setValues(row: number, values?: any[] | null): boolean
    thaw(): void
    /* Signals of Gda-5.0.Gda.DataProxy */
    connect(sigName: "filter-changed", callback: (() => void)): number
    on(sigName: "filter-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "filter-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "filter-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "filter-changed"): void
    connect(sigName: "row-changes-applied", callback: ((row: number, proxiedRow: number) => void)): number
    on(sigName: "row-changes-applied", callback: (row: number, proxiedRow: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-changes-applied", callback: (row: number, proxiedRow: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-changes-applied", callback: (row: number, proxiedRow: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-changes-applied", row: number, proxiedRow: number): void
    connect(sigName: "row-delete-changed", callback: ((row: number, toBeDeleted: boolean) => void)): number
    on(sigName: "row-delete-changed", callback: (row: number, toBeDeleted: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-delete-changed", callback: (row: number, toBeDeleted: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-delete-changed", callback: (row: number, toBeDeleted: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "row-delete-changed", row: number, toBeDeleted: boolean): void
    connect(sigName: "sample-changed", callback: ((sampleStart: number, sampleEnd: number) => void)): number
    on(sigName: "sample-changed", callback: (sampleStart: number, sampleEnd: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sample-changed", callback: (sampleStart: number, sampleEnd: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sample-changed", callback: (sampleStart: number, sampleEnd: number) => void): NodeJS.EventEmitter
    emit(sigName: "sample-changed", sampleStart: number, sampleEnd: number): void
    connect(sigName: "sample-size-changed", callback: ((sampleSize: number) => void)): number
    on(sigName: "sample-size-changed", callback: (sampleSize: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sample-size-changed", callback: (sampleSize: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sample-size-changed", callback: (sampleSize: number) => void): NodeJS.EventEmitter
    emit(sigName: "sample-size-changed", sampleSize: number): void
    connect(sigName: "validate-row-changes", callback: ((row: number, proxiedRow: number) => GLib.Error)): number
    on(sigName: "validate-row-changes", callback: (row: number, proxiedRow: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "validate-row-changes", callback: (row: number, proxiedRow: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "validate-row-changes", callback: (row: number, proxiedRow: number) => void): NodeJS.EventEmitter
    emit(sigName: "validate-row-changes", row: number, proxiedRow: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda-5.0.Gda.DataModel */
    connect(sigName: "access-changed", callback: (() => void)): number
    on(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "access-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: (() => void)): number
    on(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: ((row: number) => void)): number
    on(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: ((row: number) => void)): number
    on(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: ((row: number) => void)): number
    on(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-updated", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-updated", row: number): void
    connect(sigName: "notify::cache-changes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-changes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cache-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cache-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cache-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::defer-sync", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::defer-sync", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::defer-sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::defer-sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::defer-sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::model", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prepend-null-entry", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prepend-null-entry", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prepend-null-entry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prepend-null-entry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prepend-null-entry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sample-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sample-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sample-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sample-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sample-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataProxy_ConstructProps)
    _init (config?: DataProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(model: DataModel): DataProxy
    static newWithDataModel(model: DataModel): DataProxy
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
interface DataSelect_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.DataSelect */
    autoReset?: boolean
    connection?: Connection
    deleteStmt?: Statement
    execParams?: Set
    executionDelay?: number
    insertStmt?: Statement
    modelUsage?: number
    preparedStmt?: PStmt
    storeAllRows?: boolean
    updateStmt?: Statement
}
class DataSelect {
    /* Properties of Gda-5.0.Gda.DataSelect */
    autoReset: boolean
    deleteStmt: Statement
    executionDelay: number
    insertStmt: Statement
    preparedStmt: PStmt
    readonly selectStmt: Statement
    storeAllRows: boolean
    updateStmt: Statement
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.DataSelect */
    computeColumnsAttributes(): boolean
    computeModificationStatements(): boolean
    computeModificationStatementsExt(condType: DataSelectConditionType): boolean
    computeRowSelectionCondition(): boolean
    getConnection(): Connection
    prepareForOffline(): boolean
    rerun(): boolean
    setModificationStatement(modStmt: Statement): boolean
    setModificationStatementSql(sql: string): boolean
    setRowSelectionConditionSql(sqlWhere: string): boolean
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
    /* Methods of Gda-5.0.Gda.DataModel */
    addDataFromXmlNode(node: libxml2.NodePtr): boolean
    appendRow(): number
    appendValues(values?: any[] | null): number
    arrayCopyModel(): DataModelArray | null
    arrayCopyModelExt(cols: number[]): DataModelArray | null
    createIter(): DataModelIter
    describeColumn(col: number): Column | null
    dump(toStream?: object | null): void
    dumpAsString(): string
    exportToFile(format: DataModelIOFormat, file: string, cols: number[] | null, rows: number[] | null, options: Set): boolean
    exportToString(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string
    freeze(): void
    getAccessFlags(): DataModelAccessFlags
    getAttributesAt(col: number, row: number): ValueAttribute
    getColumnIndex(name: string): number
    getColumnName(col: number): string
    getColumnTitle(col: number): string
    getExceptions(): GLib.Error[]
    getNColumns(): number
    getNRows(): number
    getNotify(): boolean
    getRowFromValues(values: any[], colsIndex: number[]): number
    getTypedValueAt(col: number, row: number, expectedType: GObject.Type, nullok: boolean): any | null
    getValueAt(col: number, row: number): any | null
    importFromFile(file: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    importFromModel(from: DataModel, overwrite: boolean, colsTrans?: GLib.HashTable | null): boolean
    importFromString(string: string, colsTrans: GLib.HashTable | null, options: Set): boolean
    iterAtRow(iter: DataModelIter, row: number): boolean
    iterNext(iter: DataModelIter): boolean
    iterPrev(iter: DataModelIter): boolean
    iterSetValue(iter: DataModelIter, col: number, value: any): boolean
    removeRow(row: number): boolean
    reset(): void
    rowInserted(row: number): void
    rowRemoved(row: number): void
    rowUpdated(row: number): void
    sendHint(hint: DataModelHint, hintValue?: any | null): void
    setColumnName(col: number, name: string): void
    setColumnTitle(col: number, title: string): void
    setNotify(doNotifyChanges: boolean): void
    setValueAt(col: number, row: number, value: any): boolean
    setValues(row: number, values?: any[] | null): boolean
    thaw(): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gda-5.0.Gda.DataModel */
    connect(sigName: "access-changed", callback: (() => void)): number
    on(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "access-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "access-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "access-changed"): void
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "reset", callback: (() => void)): number
    on(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reset"): void
    connect(sigName: "row-inserted", callback: ((row: number) => void)): number
    on(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-inserted", row: number): void
    connect(sigName: "row-removed", callback: ((row: number) => void)): number
    on(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-removed", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-removed", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-removed", row: number): void
    connect(sigName: "row-updated", callback: ((row: number) => void)): number
    on(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-updated", callback: (row: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-updated", callback: (row: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-updated", row: number): void
    connect(sigName: "notify::auto-reset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-reset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-reset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-reset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-reset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::delete-stmt", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delete-stmt", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::delete-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::delete-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::delete-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::execution-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::execution-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::execution-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::execution-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::execution-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::insert-stmt", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::insert-stmt", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::insert-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::insert-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::insert-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prepared-stmt", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prepared-stmt", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prepared-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prepared-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prepared-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::select-stmt", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::select-stmt", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::select-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::select-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::select-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::store-all-rows", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::store-all-rows", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::store-all-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::store-all-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::store-all-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-stmt", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-stmt", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-stmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataSelect_ConstructProps)
    _init (config?: DataSelect_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
interface HandlerBin_ConstructProps extends GObject.Object_ConstructProps {
}
class HandlerBin {
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
    /* Methods of Gda-5.0.Gda.DataHandler */
    acceptsGType(type: GObject.Type): boolean
    getDescr(): string
    getSaneInitValue(type: GObject.Type): any | null
    getSqlFromValue(value?: any | null): string
    getStrFromValue(value?: any | null): string
    getValueFromSql(sql: string | null, type: GObject.Type): any
    getValueFromStr(str: string | null, type: GObject.Type): any
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
    constructor (config?: HandlerBin_ConstructProps)
    _init (config?: HandlerBin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(forType: GObject.Type): DataHandler
    static $gtype: GObject.Type
}
interface HandlerBoolean_ConstructProps extends GObject.Object_ConstructProps {
}
class HandlerBoolean {
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
    /* Methods of Gda-5.0.Gda.DataHandler */
    acceptsGType(type: GObject.Type): boolean
    getDescr(): string
    getSaneInitValue(type: GObject.Type): any | null
    getSqlFromValue(value?: any | null): string
    getStrFromValue(value?: any | null): string
    getValueFromSql(sql: string | null, type: GObject.Type): any
    getValueFromStr(str: string | null, type: GObject.Type): any
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
    constructor (config?: HandlerBoolean_ConstructProps)
    _init (config?: HandlerBoolean_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(forType: GObject.Type): DataHandler
    static $gtype: GObject.Type
}
interface HandlerNumerical_ConstructProps extends GObject.Object_ConstructProps {
}
class HandlerNumerical {
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
    /* Methods of Gda-5.0.Gda.DataHandler */
    acceptsGType(type: GObject.Type): boolean
    getDescr(): string
    getSaneInitValue(type: GObject.Type): any | null
    getSqlFromValue(value?: any | null): string
    getStrFromValue(value?: any | null): string
    getValueFromSql(sql: string | null, type: GObject.Type): any
    getValueFromStr(str: string | null, type: GObject.Type): any
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
    constructor (config?: HandlerNumerical_ConstructProps)
    _init (config?: HandlerNumerical_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(forType: GObject.Type): DataHandler
    static $gtype: GObject.Type
}
interface HandlerString_ConstructProps extends GObject.Object_ConstructProps {
}
class HandlerString {
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
    /* Methods of Gda-5.0.Gda.DataHandler */
    acceptsGType(type: GObject.Type): boolean
    getDescr(): string
    getSaneInitValue(type: GObject.Type): any | null
    getSqlFromValue(value?: any | null): string
    getStrFromValue(value?: any | null): string
    getValueFromSql(sql: string | null, type: GObject.Type): any
    getValueFromStr(str: string | null, type: GObject.Type): any
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
    constructor (config?: HandlerString_ConstructProps)
    _init (config?: HandlerString_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newWithProvider(prov: ServerProvider, cnc?: Connection | null): DataHandler
    static getDefault(forType: GObject.Type): DataHandler
    static $gtype: GObject.Type
}
interface HandlerTime_ConstructProps extends GObject.Object_ConstructProps {
}
class HandlerTime {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.HandlerTime */
    getFormat(type: GObject.Type): string
    getNoLocaleStrFromValue(value: any): string
    setSqlSpec(first: GLib.DateDMY, sec: GLib.DateDMY, third: GLib.DateDMY, separator: number, twodigitsYears: boolean): void
    setStrSpec(first: GLib.DateDMY, sec: GLib.DateDMY, third: GLib.DateDMY, separator: number, twodigitsYears: boolean): void
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
    /* Methods of Gda-5.0.Gda.DataHandler */
    acceptsGType(type: GObject.Type): boolean
    getDescr(): string
    getSaneInitValue(type: GObject.Type): any | null
    getSqlFromValue(value?: any | null): string
    getStrFromValue(value?: any | null): string
    getValueFromSql(sql: string | null, type: GObject.Type): any
    getValueFromStr(str: string | null, type: GObject.Type): any
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
    constructor (config?: HandlerTime_ConstructProps)
    _init (config?: HandlerTime_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newNoLocale(): DataHandler
    static getDefault(forType: GObject.Type): DataHandler
    static $gtype: GObject.Type
}
interface HandlerType_ConstructProps extends GObject.Object_ConstructProps {
}
class HandlerType {
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
    /* Methods of Gda-5.0.Gda.DataHandler */
    acceptsGType(type: GObject.Type): boolean
    getDescr(): string
    getSaneInitValue(type: GObject.Type): any | null
    getSqlFromValue(value?: any | null): string
    getStrFromValue(value?: any | null): string
    getValueFromSql(sql: string | null, type: GObject.Type): any
    getValueFromStr(str: string | null, type: GObject.Type): any
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
    constructor (config?: HandlerType_ConstructProps)
    _init (config?: HandlerType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(forType: GObject.Type): DataHandler
    static $gtype: GObject.Type
}
interface Holder_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.Holder */
    description?: string
    fullBind?: Holder
    gType?: GObject.Type
    id?: string
    name?: string
    notNull?: boolean
    simpleBind?: Holder
    sourceColumn?: number
    sourceModel?: DataModel
    validateChanges?: boolean
}
class Holder {
    /* Properties of Gda-5.0.Gda.Holder */
    description: string
    fullBind: Holder
    gType: GObject.Type
    id: string
    name: string
    notNull: boolean
    simpleBind: Holder
    sourceColumn: number
    sourceModel: DataModel
    validateChanges: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.Holder */
    copy(): Holder
    forceInvalid(): void
    forceInvalidE(error?: GLib.Error | null): void
    getAlphanumId(): string
    getAttribute(attribute: string): any
    getBind(): Holder
    getDefaultValue(): any
    getGType(): GObject.Type
    getId(): string
    getNotNull(): boolean
    getSourceModel(col: number): DataModel
    getValue(): any | null
    getValueStr(dh?: DataHandler | null): string
    isValid(): boolean
    isValidE(): boolean
    setAttribute(attribute: string, value: any, destroy: GLib.DestroyNotify): void
    setBind(bindTo: Holder): boolean
    setDefaultValue(value: any): void
    setNotNull(notNull: boolean): void
    setSourceModel(model: DataModel, col: number): boolean
    setValue(value?: any | null): boolean
    setValueStr(dh: DataHandler, value: string): boolean
    setValueToDefault(): boolean
    takeStaticValue(value: any, valueChanged: boolean): any
    takeValue(value: any): boolean
    valueIsDefault(): boolean
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
    /* Methods of Gda-5.0.Gda.Lockable */
    lock(): void
    trylock(): boolean
    unlock(): void
    /* Signals of Gda-5.0.Gda.Holder */
    connect(sigName: "attribute-changed", callback: ((attName: string, attValue: any) => void)): number
    on(sigName: "attribute-changed", callback: (attName: string, attValue: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "attribute-changed", callback: (attName: string, attValue: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "attribute-changed", callback: (attName: string, attValue: any) => void): NodeJS.EventEmitter
    emit(sigName: "attribute-changed", attName: string, attValue: any): void
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "source-changed", callback: (() => void)): number
    on(sigName: "source-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "source-changed"): void
    connect(sigName: "validate-change", callback: ((newValue: any) => GLib.Error)): number
    on(sigName: "validate-change", callback: (newValue: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "validate-change", callback: (newValue: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "validate-change", callback: (newValue: any) => void): NodeJS.EventEmitter
    emit(sigName: "validate-change", newValue: any): void
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
    connect(sigName: "notify::full-bind", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-bind", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::full-bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::full-bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::full-bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::not-null", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::not-null", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::not-null", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::not-null", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::not-null", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::simple-bind", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::simple-bind", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::simple-bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::simple-bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::simple-bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source-column", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-column", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-column", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source-model", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-model", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::validate-changes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::validate-changes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Holder_ConstructProps)
    _init (config?: Holder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: GObject.Type): Holder
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
interface MetaStore_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.MetaStore */
    catalog?: string
    cnc?: Connection
    cncString?: string
    schema?: string
}
class MetaStore {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.MetaStore */
    createModifyDataModel(tableName: string): DataModel
    declareForeignKey(mstruct: MetaStruct | null, fkName: string, catalog: string | null, schema: string | null, table: string, refCatalog: string | null, refSchema: string | null, refTable: string, colnames: string[], refColnames: string[]): boolean
    extract(selectSql: string, vars?: GLib.HashTable | null): DataModel
    getAttributeValue(attName: string): [ /* returnType */ boolean, /* attValue */ string ]
    getInternalConnection(): Connection
    getVersion(): number
    modify(tableName: string, newData: DataModel | null, condition: string | null, valueNames: string[], values: any[]): boolean
    modifyWithContext(context: MetaContext, newData?: DataModel | null): boolean
    schemaAddCustomObject(xmlDescription: string): boolean
    schemaGetAllTables(): string[]
    schemaGetDependTables(tableName: string): string[]
    schemaGetStructure(): MetaStruct
    schemaRemoveCustomObject(objName: string): boolean
    setAttributeValue(attName: string, attValue?: string | null): boolean
    setIdentifiersStyle(style: SqlIdentifierStyle): void
    setReservedKeywordsFunc(func?: SqlReservedKeywordsFunc | null): void
    undeclareForeignKey(mstruct: MetaStruct | null, fkName: string, catalog: string | null, schema: string | null, table: string, refCatalog: string | null, refSchema: string | null, refTable: string): boolean
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
    /* Signals of Gda-5.0.Gda.MetaStore */
    connect(sigName: "meta-changed", callback: ((changes: MetaStoreChange[]) => void)): number
    on(sigName: "meta-changed", callback: (changes: MetaStoreChange[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "meta-changed", callback: (changes: MetaStoreChange[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "meta-changed", callback: (changes: MetaStoreChange[]) => void): NodeJS.EventEmitter
    emit(sigName: "meta-changed", changes: MetaStoreChange[]): void
    connect(sigName: "meta-reset", callback: (() => void)): number
    on(sigName: "meta-reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "meta-reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "meta-reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "meta-reset"): void
    connect(sigName: "suggest-update", callback: ((suggest: MetaContext) => GLib.Error)): number
    on(sigName: "suggest-update", callback: (suggest: MetaContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "suggest-update", callback: (suggest: MetaContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "suggest-update", callback: (suggest: MetaContext) => void): NodeJS.EventEmitter
    emit(sigName: "suggest-update", suggest: MetaContext): void
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
    constructor (config?: MetaStore_ConstructProps)
    _init (config?: MetaStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cncString?: string | null): MetaStore
    static newWithFile(fileName: string): MetaStore
    static errorQuark(): GLib.Quark
    static sqlIdentifierQuote(id: string, cnc: Connection): string
    static $gtype: GObject.Type
}
interface MetaStruct_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.MetaStruct */
    features?: number
    metaStore?: MetaStore
}
class MetaStruct {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.MetaStruct */
    complement(type: MetaDbObjectType, catalog: any | null, schema: any | null, name: any): MetaDbObject
    complementAll(): boolean
    complementDefault(): boolean
    complementDepend(dbo: MetaDbObject): boolean
    complementSchema(catalog?: any | null, schema?: any | null): boolean
    dumpAsGraph(info: MetaGraphInfo): string
    getAllDbObjects(): MetaDbObject[]
    getDbObject(catalog: any | null, schema: any | null, name: any): MetaDbObject
    loadFromXmlFile(catalog: string | null, schema: string | null, xmlSpecFile: string): boolean
    sortDbObjects(sortType: MetaSortType): boolean
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
    constructor (config?: MetaStruct_ConstructProps)
    _init (config?: MetaStruct_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(store: MetaStore, features: MetaStructFeature): MetaStruct
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
interface PStmt_ConstructProps extends GObject.Object_ConstructProps {
}
class PStmt {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.PStmt */
    copyContents(dest: PStmt): void
    getGdaStatement(): Statement
    setGdaStatement(stmt?: Statement | null): void
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
    constructor (config?: PStmt_ConstructProps)
    _init (config?: PStmt_ConstructProps): void
    static $gtype: GObject.Type
}
interface RepetitiveStatement_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.RepetitiveStatement */
    statement?: Statement
}
class RepetitiveStatement {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.RepetitiveStatement */
    appendSet(values: Set, makeCopy: boolean): boolean
    getAllSets(): Set[]
    getTemplateSet(set: Set): boolean
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
    constructor (config?: RepetitiveStatement_ConstructProps)
    _init (config?: RepetitiveStatement_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(stmt: Statement): RepetitiveStatement
    static $gtype: GObject.Type
}
interface Row_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.Row */
    nbValues?: number
}
class Row {
    /* Properties of Gda-5.0.Gda.Row */
    nbValues: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.Row */
    getLength(): number
    getValue(num: number): any | null
    invalidateValue(value: any): void
    invalidateValueE(value: any, error?: GLib.Error | null): void
    valueIsValid(value: any): boolean
    valueIsValidE(value: any): boolean
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
    connect(sigName: "notify::nb-values", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nb-values", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nb-values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nb-values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nb-values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Row_ConstructProps)
    _init (config?: Row_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(count: number): Row
    static $gtype: GObject.Type
}
interface ServerOperation_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.ServerOperation */
    connection?: Connection
    opType?: number
    provider?: ServerProvider
    specFilename?: string
}
class ServerOperation {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.ServerOperation */
    addItemToSequence(seqPath: string): number
    delItemFromSequence(itemPath: string): boolean
    getNodeParent(path: string): string
    getNodePathPortion(path: string): string
    getNodeType(path: string, status?: ServerOperationNodeStatus | null): ServerOperationNodeType
    getOpType(): ServerOperationType
    getRootNodes(): string[]
    getSequenceItemNames(path: string): string[]
    getSequenceMaxSize(path: string): number
    getSequenceMinSize(path: string): number
    getSequenceName(path: string): string
    getSequenceSize(path: string): number
    getSqlIdentifierAt(cnc: Connection | null, prov: ServerProvider | null, path: string): string
    getValueAt(path: string): any | null
    isValid(xmlFile?: string | null): boolean
    loadDataFromXml(node: libxml2.NodePtr): boolean
    performCreateDatabase(provider?: string | null): boolean
    performCreateTable(): boolean
    performDropDatabase(provider?: string | null): boolean
    performDropTable(): boolean
    setValueAt(value: string | null, path: string): boolean
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
    /* Signals of Gda-5.0.Gda.ServerOperation */
    connect(sigName: "sequence-item-added", callback: ((seqPath: string, itemIndex: number) => void)): number
    on(sigName: "sequence-item-added", callback: (seqPath: string, itemIndex: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sequence-item-added", callback: (seqPath: string, itemIndex: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sequence-item-added", callback: (seqPath: string, itemIndex: number) => void): NodeJS.EventEmitter
    emit(sigName: "sequence-item-added", seqPath: string, itemIndex: number): void
    connect(sigName: "sequence-item-remove", callback: ((seqPath: string, itemIndex: number) => void)): number
    on(sigName: "sequence-item-remove", callback: (seqPath: string, itemIndex: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sequence-item-remove", callback: (seqPath: string, itemIndex: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sequence-item-remove", callback: (seqPath: string, itemIndex: number) => void): NodeJS.EventEmitter
    emit(sigName: "sequence-item-remove", seqPath: string, itemIndex: number): void
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
    constructor (config?: ServerOperation_ConstructProps)
    _init (config?: ServerOperation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(opType: ServerOperationType, xmlFile: string): ServerOperation
    static errorQuark(): GLib.Quark
    static opTypeToString(type: ServerOperationType): string
    static prepareCreateDatabase(provider: string, dbName?: string | null): ServerOperation | null
    static prepareDropDatabase(provider: string, dbName?: string | null): ServerOperation | null
    static prepareDropTable(cnc: Connection, tableName: string): ServerOperation | null
    static stringToOpType(str: string): ServerOperationType
    static $gtype: GObject.Type
}
interface ServerProvider_ConstructProps extends GObject.Object_ConstructProps {
}
class ServerProvider {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.ServerProvider */
    createOperation(cnc: Connection | null, type: ServerOperationType, options?: Set | null): ServerOperation | null
    createParser(cnc?: Connection | null): SqlParser
    escapeString(cnc: Connection | null, str: string): string
    findFile(instDir: string, filename: string): string
    getDataHandlerDbms(cnc: Connection | null, forType: string): DataHandler
    getDataHandlerDefault(cnc: Connection | null, type: GObject.Type, dbmsType: string): DataHandler
    getDataHandlerGType(cnc: Connection | null, forType: GObject.Type): DataHandler
    getDefaultDbmsType(cnc: Connection | null, type: GObject.Type): string | null
    getName(): string
    getServerVersion(cnc: Connection): string
    getVersion(): string
    handlerDeclare(dh: DataHandler, cnc: Connection, gType: GObject.Type, dbmsType: string): void
    handlerFind(cnc: Connection | null, gType: GObject.Type, dbmsType?: string | null): DataHandler
    internalGetParser(): SqlParser
    performOperation(cnc: Connection | null, op: ServerOperation): boolean
    performOperationDefault(cnc: Connection | null, op: ServerOperation): boolean
    renderOperation(cnc: Connection | null, op: ServerOperation): string | null
    stringToValue(cnc: Connection | null, string: string, preferredType: GObject.Type, dbmsType?: string | null): any
    supportsFeature(cnc: Connection | null, feature: ConnectionFeature): boolean
    supportsOperation(cnc: Connection | null, type: ServerOperationType, options?: Set | null): boolean
    unescapeString(cnc: Connection | null, str: string): string
    valueToSqlString(cnc: Connection | null, from: any): string
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
    constructor (config?: ServerProvider_ConstructProps)
    _init (config?: ServerProvider_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
    static loadFileContents(instDir: string, dataDir: string, filename: string): string
    static $gtype: GObject.Type
}
interface Set_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.Set */
    description?: string
    holders?: object
    id?: string
    name?: string
    validateChanges?: boolean
}
class Set {
    /* Properties of Gda-5.0.Gda.Set */
    description: string
    id: string
    name: string
    validateChanges: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.Set */
    addHolder(holder: Holder): boolean
    copy(): Set
    getGroup(holder: Holder): SetGroup
    getHolder(holderId: string): Holder
    getHolderValue(holderId: string): any | null
    getNode(holder: Holder): SetNode
    getNthHolder(pos: number): Holder
    getSource(holder: Holder): SetSource
    getSourceForModel(model: DataModel): SetSource
    isValid(): boolean
    mergeWithSet(setToMerge: Set): void
    removeHolder(holder: Holder): void
    replaceSourceModel(source: SetSource, model: DataModel): void
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
    /* Signals of Gda-5.0.Gda.Set */
    connect(sigName: "holder-attr-changed", callback: ((holder: Holder, attrName: string, attrValue: any) => void)): number
    on(sigName: "holder-attr-changed", callback: (holder: Holder, attrName: string, attrValue: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "holder-attr-changed", callback: (holder: Holder, attrName: string, attrValue: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "holder-attr-changed", callback: (holder: Holder, attrName: string, attrValue: any) => void): NodeJS.EventEmitter
    emit(sigName: "holder-attr-changed", holder: Holder, attrName: string, attrValue: any): void
    connect(sigName: "holder-changed", callback: ((object: Holder) => void)): number
    on(sigName: "holder-changed", callback: (object: Holder) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "holder-changed", callback: (object: Holder) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "holder-changed", callback: (object: Holder) => void): NodeJS.EventEmitter
    emit(sigName: "holder-changed", object: Holder): void
    connect(sigName: "holder-type-set", callback: ((holder: Holder) => void)): number
    on(sigName: "holder-type-set", callback: (holder: Holder) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "holder-type-set", callback: (holder: Holder) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "holder-type-set", callback: (holder: Holder) => void): NodeJS.EventEmitter
    emit(sigName: "holder-type-set", holder: Holder): void
    connect(sigName: "public-data-changed", callback: (() => void)): number
    on(sigName: "public-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "public-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "public-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "public-data-changed"): void
    connect(sigName: "source-model-changed", callback: ((source?: object | null) => void)): number
    on(sigName: "source-model-changed", callback: (source?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-model-changed", callback: (source?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-model-changed", callback: (source?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "source-model-changed", source?: object | null): void
    connect(sigName: "validate-holder-change", callback: ((holder: Holder, newValue: any) => GLib.Error)): number
    on(sigName: "validate-holder-change", callback: (holder: Holder, newValue: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "validate-holder-change", callback: (holder: Holder, newValue: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "validate-holder-change", callback: (holder: Holder, newValue: any) => void): NodeJS.EventEmitter
    emit(sigName: "validate-holder-change", holder: Holder, newValue: any): void
    connect(sigName: "validate-set", callback: (() => GLib.Error)): number
    on(sigName: "validate-set", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "validate-set", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "validate-set", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "validate-set"): void
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
    connect(sigName: "notify::validate-changes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::validate-changes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::validate-changes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Set_ConstructProps)
    _init (config?: Set_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(holders: Holder[]): Set
    static newFromSpecNode(xmlSpec: libxml2.NodePtr): Set
    static newFromSpecString(xmlSpec: string): Set
    static newReadOnly(holders: Holder[]): Set
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
class Short {
    static name: string
}
interface SqlBuilder_ConstructProps extends GObject.Object_ConstructProps {
}
class SqlBuilder {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.SqlBuilder */
    addCase(testExpr: SqlBuilderId, elseExpr: SqlBuilderId, whenArray: SqlBuilderId[], thenArray: SqlBuilderId[]): SqlBuilderId
    addCond(op: SqlOperatorType, op1: SqlBuilderId, op2: SqlBuilderId, op3: SqlBuilderId): SqlBuilderId
    addCondV(op: SqlOperatorType, opIds: SqlBuilderId[]): SqlBuilderId
    addExprValue(dh?: DataHandler | null, value?: any | null): SqlBuilderId
    addFieldId(fieldName: string, tableName?: string | null): SqlBuilderId
    addFieldValueAsGvalue(fieldName: string, value?: any | null): void
    addFieldValueId(fieldId: SqlBuilderId, valueId: SqlBuilderId): void
    addFunction(funcName: string, args: SqlBuilderId[]): SqlBuilderId
    addId(str: string): SqlBuilderId
    addParam(paramName: string, type: GObject.Type, nullok: boolean): SqlBuilderId
    compoundAddSubSelectFromBuilder(subselect: SqlBuilder): void
    compoundSetType(compoundType: SqlStatementCompoundType): void
    getStatement(): Statement
    importExpressionFromBuilder(query: SqlBuilder, exprId: SqlBuilderId): SqlBuilderId
    joinAddField(joinId: SqlBuilderId, fieldName: string): void
    selectAddField(fieldName: string, tableName?: string | null, alias?: string | null): SqlBuilderId
    selectAddTarget(tableName: string, alias?: string | null): SqlBuilderId
    selectAddTargetId(tableId: SqlBuilderId, alias?: string | null): SqlBuilderId
    selectGroupBy(exprId: SqlBuilderId): void
    selectOrderBy(exprId: SqlBuilderId, asc: boolean, collationName?: string | null): void
    selectSetDistinct(distinct: boolean, exprId: SqlBuilderId): void
    selectSetHaving(condId: SqlBuilderId): void
    selectSetLimit(limitCountExprId: SqlBuilderId, limitOffsetExprId: SqlBuilderId): void
    setTable(tableName: string): void
    setWhere(condId: SqlBuilderId): void
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
    constructor (config?: SqlBuilder_ConstructProps)
    _init (config?: SqlBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(stmtType: SqlStatementType): SqlBuilder
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
interface SqlParser_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.SqlParser */
    mode?: number
    tokenizerFlavour?: number
}
class SqlParser {
    /* Properties of Gda-5.0.Gda.SqlParser */
    readonly columnError: number
    readonly lineError: number
    mode: number
    tokenizerFlavour: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.SqlParser */
    parseFileAsBatch(filename: string): Batch | null
    parseString(sql: string): [ /* returnType */ Statement | null, /* remain */ string | null ]
    parseStringAsBatch(sql: string): [ /* returnType */ Batch | null, /* remain */ string | null ]
    setOverflowError(): void
    setSyntaxError(): void
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
    /* Methods of Gda-5.0.Gda.Lockable */
    lock(): void
    trylock(): boolean
    unlock(): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::column-error", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-error", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::column-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::column-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::column-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-error", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-error", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tokenizer-flavour", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tokenizer-flavour", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tokenizer-flavour", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tokenizer-flavour", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tokenizer-flavour", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SqlParser_ConstructProps)
    _init (config?: SqlParser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SqlParser
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
interface Statement_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.Statement */
    structure?: object
}
class Statement {
    /* Properties of Gda-5.0.Gda.Statement */
    structure: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.Statement */
    checkStructure(): boolean
    checkValidity(cnc?: Connection | null): boolean
    copy(): Statement
    getParameters(): [ /* returnType */ boolean, /* outParams */ Set | null ]
    getStatementType(): SqlStatementType
    isUseless(): boolean
    normalize(cnc: Connection): boolean
    serialize(): string
    toSqlExtended(cnc: Connection | null, params: Set | null, flags: StatementSqlFlag): [ /* returnType */ string, /* paramsUsed */ Holder[] | null ]
    toSqlReal(context: SqlRenderingContext): string
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
    /* Signals of Gda-5.0.Gda.Statement */
    connect(sigName: "checked", callback: ((object: Connection, p0: boolean) => void)): number
    on(sigName: "checked", callback: (object: Connection, p0: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "checked", callback: (object: Connection, p0: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "checked", callback: (object: Connection, p0: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "checked", object: Connection, p0: boolean): void
    connect(sigName: "reset", callback: (() => void)): number
    on(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reset"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::structure", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::structure", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::structure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::structure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::structure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Statement_ConstructProps)
    _init (config?: Statement_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Statement
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
interface ThreadWrapper_ConstructProps extends GObject.Object_ConstructProps {
}
class ThreadWrapper {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.ThreadWrapper */
    cancel(id: number): boolean
    connectRaw(instance: object | null, sigName: string, privateThread: boolean, privateJob: boolean, callback: ThreadWrapperCallback): number
    disconnect(id: number): void
    execute(func: ThreadWrapperFunc, arg?: object | null): number
    executeVoid(func: ThreadWrapperVoidFunc, arg?: object | null): number
    fetchResult(mayLock: boolean, expId: number): object | null
    getIoChannel(): GLib.IOChannel
    getWaitingSize(): number
    iterate(mayBlock: boolean): void
    stealSignal(id: number): void
    unsetIoChannel(): void
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
    constructor (config?: ThreadWrapper_ConstructProps)
    _init (config?: ThreadWrapper_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ThreadWrapper
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
interface TransactionStatus_ConstructProps extends GObject.Object_ConstructProps {
}
class TransactionStatus {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.TransactionStatus */
    find(str: string, destev: TransactionStatusEvent): TransactionStatus | null
    findCurrent(destev: TransactionStatusEvent, unnamedOnly: boolean): TransactionStatus | null
    freeEvents(event: TransactionStatusEvent, freeAfter: boolean): void
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
    constructor (config?: TransactionStatus_ConstructProps)
    _init (config?: TransactionStatus_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): TransactionStatus
    static $gtype: GObject.Type
}
interface Tree_ConstructProps extends GObject.Object_ConstructProps {
}
class Tree {
    /* Properties of Gda-5.0.Gda.Tree */
    readonly isList: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.Tree */
    addManager(manager: TreeManager): void
    clean(): void
    dump(node?: TreeNode | null, stream?: object | null): void
    getNode(treePath: string, useNames: boolean): TreeNode | null
    getNodeManager(node: TreeNode): TreeManager
    getNodePath(node: TreeNode): string
    getNodesInPath(treePath: string | null, useNames: boolean): TreeNode[]
    setAttribute(attribute: string, value: any, destroy: GLib.DestroyNotify): void
    updateAll(): boolean
    updateChildren(node?: TreeNode | null): boolean
    updatePart(node: TreeNode): boolean
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
    /* Signals of Gda-5.0.Gda.Tree */
    connect(sigName: "node-changed", callback: ((node: TreeNode) => void)): number
    on(sigName: "node-changed", callback: (node: TreeNode) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-changed", callback: (node: TreeNode) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-changed", callback: (node: TreeNode) => void): NodeJS.EventEmitter
    emit(sigName: "node-changed", node: TreeNode): void
    connect(sigName: "node-deleted", callback: ((nodePath: string) => void)): number
    on(sigName: "node-deleted", callback: (nodePath: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-deleted", callback: (nodePath: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-deleted", callback: (nodePath: string) => void): NodeJS.EventEmitter
    emit(sigName: "node-deleted", nodePath: string): void
    connect(sigName: "node-has-child-toggled", callback: ((node: TreeNode) => void)): number
    on(sigName: "node-has-child-toggled", callback: (node: TreeNode) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-has-child-toggled", callback: (node: TreeNode) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-has-child-toggled", callback: (node: TreeNode) => void): NodeJS.EventEmitter
    emit(sigName: "node-has-child-toggled", node: TreeNode): void
    connect(sigName: "node-inserted", callback: ((node: TreeNode) => void)): number
    on(sigName: "node-inserted", callback: (node: TreeNode) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-inserted", callback: (node: TreeNode) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-inserted", callback: (node: TreeNode) => void): NodeJS.EventEmitter
    emit(sigName: "node-inserted", node: TreeNode): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Tree_ConstructProps)
    _init (config?: Tree_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Tree
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
interface TreeManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.TreeManager */
    func?: object
    recursive?: boolean
}
class TreeManager {
    /* Properties of Gda-5.0.Gda.TreeManager */
    func: object
    recursive: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.TreeManager */
    addManager(sub: TreeManager): void
    addNewNodeAttribute(attribute: string, value?: any | null): void
    createNode(parent?: TreeNode | null, name?: string | null): TreeNode
    getManagers(): TreeManager[]
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
    connect(sigName: "notify::func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::recursive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TreeManager_ConstructProps)
    _init (config?: TreeManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
interface TreeMgrColumns_ConstructProps extends TreeManager_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.TreeMgrColumns */
    connection?: Connection
    metaStore?: MetaStore
    schema?: string
    tableName?: string
}
class TreeMgrColumns {
    /* Properties of Gda-5.0.Gda.TreeManager */
    func: object
    recursive: boolean
    /* Fields of Gda-5.0.Gda.TreeManager */
    readonly object: GObject.Object
    readonly priv: TreeManagerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.TreeManager */
    addManager(sub: TreeManager): void
    addNewNodeAttribute(attribute: string, value?: any | null): void
    createNode(parent?: TreeNode | null, name?: string | null): TreeNode
    getManagers(): TreeManager[]
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
    connect(sigName: "notify::func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::recursive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TreeMgrColumns_ConstructProps)
    _init (config?: TreeMgrColumns_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cnc: Connection, schema: string, tableName: string): TreeMgrColumns
    static $gtype: GObject.Type
}
interface TreeMgrLabel_ConstructProps extends TreeManager_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.TreeMgrLabel */
    label?: string
}
class TreeMgrLabel {
    /* Properties of Gda-5.0.Gda.TreeManager */
    func: object
    recursive: boolean
    /* Fields of Gda-5.0.Gda.TreeManager */
    readonly object: GObject.Object
    readonly priv: TreeManagerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.TreeManager */
    addManager(sub: TreeManager): void
    addNewNodeAttribute(attribute: string, value?: any | null): void
    createNode(parent?: TreeNode | null, name?: string | null): TreeNode
    getManagers(): TreeManager[]
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
    connect(sigName: "notify::func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::recursive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TreeMgrLabel_ConstructProps)
    _init (config?: TreeMgrLabel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(label: string): TreeMgrLabel
    static $gtype: GObject.Type
}
interface TreeMgrLdap_ConstructProps extends TreeManager_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.TreeMgrLdap */
    dn?: string
}
class TreeMgrLdap {
    /* Properties of Gda-5.0.Gda.TreeManager */
    func: object
    recursive: boolean
    /* Fields of Gda-5.0.Gda.TreeManager */
    readonly object: GObject.Object
    readonly priv: TreeManagerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.TreeManager */
    addManager(sub: TreeManager): void
    addNewNodeAttribute(attribute: string, value?: any | null): void
    createNode(parent?: TreeNode | null, name?: string | null): TreeNode
    getManagers(): TreeManager[]
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
    connect(sigName: "notify::func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::recursive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TreeMgrLdap_ConstructProps)
    _init (config?: TreeMgrLdap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cnc: Connection, dn?: string | null): TreeMgrLdap
    static $gtype: GObject.Type
}
interface TreeMgrSchemas_ConstructProps extends TreeManager_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.TreeMgrSchemas */
    connection?: Connection
    metaStore?: MetaStore
}
class TreeMgrSchemas {
    /* Properties of Gda-5.0.Gda.TreeManager */
    func: object
    recursive: boolean
    /* Fields of Gda-5.0.Gda.TreeManager */
    readonly object: GObject.Object
    readonly priv: TreeManagerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.TreeManager */
    addManager(sub: TreeManager): void
    addNewNodeAttribute(attribute: string, value?: any | null): void
    createNode(parent?: TreeNode | null, name?: string | null): TreeNode
    getManagers(): TreeManager[]
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
    connect(sigName: "notify::func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::recursive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TreeMgrSchemas_ConstructProps)
    _init (config?: TreeMgrSchemas_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cnc: Connection): TreeMgrSchemas
    static $gtype: GObject.Type
}
interface TreeMgrSelect_ConstructProps extends TreeManager_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.TreeMgrSelect */
    connection?: Connection
    params?: Set
    statement?: Statement
}
class TreeMgrSelect {
    /* Properties of Gda-5.0.Gda.TreeManager */
    func: object
    recursive: boolean
    /* Fields of Gda-5.0.Gda.TreeManager */
    readonly object: GObject.Object
    readonly priv: TreeManagerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.TreeManager */
    addManager(sub: TreeManager): void
    addNewNodeAttribute(attribute: string, value?: any | null): void
    createNode(parent?: TreeNode | null, name?: string | null): TreeNode
    getManagers(): TreeManager[]
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
    connect(sigName: "notify::func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::recursive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TreeMgrSelect_ConstructProps)
    _init (config?: TreeMgrSelect_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cnc: Connection, stmt: Statement, params: Set): TreeMgrSelect
    static $gtype: GObject.Type
}
interface TreeMgrTables_ConstructProps extends TreeManager_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.TreeMgrTables */
    connection?: Connection
    metaStore?: MetaStore
    schema?: string
}
class TreeMgrTables {
    /* Properties of Gda-5.0.Gda.TreeManager */
    func: object
    recursive: boolean
    /* Fields of Gda-5.0.Gda.TreeManager */
    readonly object: GObject.Object
    readonly priv: TreeManagerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.TreeManager */
    addManager(sub: TreeManager): void
    addNewNodeAttribute(attribute: string, value?: any | null): void
    createNode(parent?: TreeNode | null, name?: string | null): TreeNode
    getManagers(): TreeManager[]
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
    connect(sigName: "notify::func", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::func", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::recursive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recursive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::recursive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TreeMgrTables_ConstructProps)
    _init (config?: TreeMgrTables_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cnc: Connection, schema?: string | null): TreeMgrTables
    static $gtype: GObject.Type
}
interface TreeNode_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.TreeNode */
    name?: string
}
class TreeNode {
    /* Properties of Gda-5.0.Gda.TreeNode */
    name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.TreeNode */
    fetchAttribute(attribute: string): any
    getChildIndex(index: number): TreeNode
    getChildName(name: string): TreeNode
    getChildren(): TreeNode[]
    getNodeAttribute(attribute: string): any
    getParent(): TreeNode
    setNodeAttribute(attribute: string, value: any | null, destroy: GLib.DestroyNotify): void
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
    /* Signals of Gda-5.0.Gda.TreeNode */
    connect(sigName: "node-changed", callback: ((node: TreeNode) => void)): number
    on(sigName: "node-changed", callback: (node: TreeNode) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-changed", callback: (node: TreeNode) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-changed", callback: (node: TreeNode) => void): NodeJS.EventEmitter
    emit(sigName: "node-changed", node: TreeNode): void
    connect(sigName: "node-deleted", callback: ((relativePath: string) => void)): number
    on(sigName: "node-deleted", callback: (relativePath: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-deleted", callback: (relativePath: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-deleted", callback: (relativePath: string) => void): NodeJS.EventEmitter
    emit(sigName: "node-deleted", relativePath: string): void
    connect(sigName: "node-has-child-toggled", callback: ((node: TreeNode) => void)): number
    on(sigName: "node-has-child-toggled", callback: (node: TreeNode) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-has-child-toggled", callback: (node: TreeNode) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-has-child-toggled", callback: (node: TreeNode) => void): NodeJS.EventEmitter
    emit(sigName: "node-has-child-toggled", node: TreeNode): void
    connect(sigName: "node-inserted", callback: ((node: TreeNode) => void)): number
    on(sigName: "node-inserted", callback: (node: TreeNode) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-inserted", callback: (node: TreeNode) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-inserted", callback: (node: TreeNode) => void): NodeJS.EventEmitter
    emit(sigName: "node-inserted", node: TreeNode): void
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
    constructor (config?: TreeNode_ConstructProps)
    _init (config?: TreeNode_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name?: string | null): TreeNode
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
class UShort {
    static name: string
}
interface XaTransaction_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gda-5.0.Gda.XaTransaction */
    formatId?: number
    transactionId?: string
}
class XaTransaction {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gda-5.0.Gda.XaTransaction */
    begin(): boolean
    commit(): [ /* returnType */ boolean, /* cncToRecover */ Connection[] | null ]
    commitRecovered(): [ /* returnType */ boolean, /* cncToRecover */ Connection[] | null ]
    registerConnection(cnc: Connection, branch: string): boolean
    rollback(): boolean
    unregisterConnection(cnc: Connection): void
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
    constructor (config?: XaTransaction_ConstructProps)
    _init (config?: XaTransaction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(format: number, globalTransactionId: string): XaTransaction
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
class AttributesManager {
    /* Methods of Gda-5.0.Gda.AttributesManager */
    clear(ptr?: object | null): void
    foreach(ptr: object | null, func: AttributesManagerFunc): void
    free(): void
    get(ptr: object | null, attName: string): any
    set(ptr: object | null, attName: string, value: any): void
    setFull(ptr: object | null, attName: string, value: any, destroy: GLib.DestroyNotify): void
    static name: string
}
abstract class BatchClass {
    /* Fields of Gda-5.0.Gda.BatchClass */
    readonly parentClass: GObject.ObjectClass
    readonly changed: (batch: Batch, changedStmt: Statement) => void
    static name: string
}
class BatchPrivate {
    static name: string
}
class Binary {
    /* Fields of Gda-5.0.Gda.Binary */
    readonly data: Uint8Array
    readonly binaryLength: number
    /* Methods of Gda-5.0.Gda.Binary */
    toString(maxlen: number): string
    static name: string
    /* Static methods and pseudo-constructors */
    static copy(boxed?: object | null): object | null
    static free(boxed?: object | null): void
}
class Blob {
    /* Fields of Gda-5.0.Gda.Blob */
    readonly data: Binary
    readonly op: BlobOp
    /* Methods of Gda-5.0.Gda.Blob */
    setOp(op?: BlobOp | null): void
    toString(maxlen: number): string
    static name: string
    /* Static methods and pseudo-constructors */
    static copy(boxed?: object | null): object | null
    static free(boxed?: object | null): void
}
abstract class BlobOpClass {
    /* Fields of Gda-5.0.Gda.BlobOpClass */
    readonly parentClass: GObject.ObjectClass
    readonly getLength: (op: BlobOp) => number
    readonly read: (op: BlobOp, blob: Blob, offset: number, size: number) => number
    readonly write: (op: BlobOp, blob: Blob, offset: number) => number
    readonly writeAll: (op: BlobOp, blob: Blob) => boolean
    static name: string
}
abstract class ColumnClass {
    /* Fields of Gda-5.0.Gda.ColumnClass */
    readonly parentClass: GObject.ObjectClass
    readonly nameChanged: (column: Column, oldName: string) => void
    readonly gTypeChanged: (column: Column, oldType: GObject.Type, newType: GObject.Type) => void
    static name: string
}
class ColumnPrivate {
    static name: string
}
abstract class ConfigClass {
    /* Fields of Gda-5.0.Gda.ConfigClass */
    readonly objectClass: GObject.ObjectClass
    readonly dsnAdded: (conf: Config, newDsn: DsnInfo) => void
    readonly dsnToBeRemoved: (conf: Config, oldDsn: DsnInfo) => void
    readonly dsnRemoved: (conf: Config, oldDsn: DsnInfo) => void
    readonly dsnChanged: (conf: Config, dsn: DsnInfo) => void
    static name: string
}
class ConfigPrivate {
    static name: string
}
abstract class ConnectionClass {
    /* Fields of Gda-5.0.Gda.ConnectionClass */
    readonly objectClass: GObject.ObjectClass
    readonly error: (cnc: Connection, error: ConnectionEvent) => void
    readonly connOpened: (obj: Connection) => void
    readonly connToClose: (obj: Connection) => void
    readonly connClosed: (obj: Connection) => void
    readonly dsnChanged: (obj: Connection) => void
    readonly transactionStatusChanged: (obj: Connection) => void
    static name: string
}
abstract class ConnectionEventClass {
    /* Fields of Gda-5.0.Gda.ConnectionEventClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class ConnectionEventPrivate {
    static name: string
}
class ConnectionPrivate {
    static name: string
}
abstract class DataAccessWrapperClass {
    /* Fields of Gda-5.0.Gda.DataAccessWrapperClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class DataAccessWrapperPrivate {
    static name: string
}
abstract class DataComparatorClass {
    /* Fields of Gda-5.0.Gda.DataComparatorClass */
    readonly parentClass: GObject.ObjectClass
    readonly diffComputed: (comp: DataComparator, diff: Diff) => boolean
    static name: string
}
class DataComparatorPrivate {
    static name: string
}
abstract class DataHandlerIface {
    /* Fields of Gda-5.0.Gda.DataHandlerIface */
    readonly gIface: GObject.TypeInterface
    readonly getSqlFromValue: (dh: DataHandler, value?: any | null) => string
    readonly getStrFromValue: (dh: DataHandler, value?: any | null) => string
    readonly getValueFromSql: (dh: DataHandler, sql: string | null, type: GObject.Type) => any
    readonly getValueFromStr: (dh: DataHandler, str: string | null, type: GObject.Type) => any
    readonly getSaneInitValue: (dh: DataHandler, type: GObject.Type) => any | null
    readonly acceptsGType: (dh: DataHandler, type: GObject.Type) => boolean
    readonly getDescr: (dh: DataHandler) => string
    static name: string
}
abstract class DataModelArrayClass {
    /* Fields of Gda-5.0.Gda.DataModelArrayClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class DataModelArrayPrivate {
    static name: string
}
abstract class DataModelDirClass {
    /* Fields of Gda-5.0.Gda.DataModelDirClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class DataModelDirPrivate {
    static name: string
}
abstract class DataModelIface {
    /* Fields of Gda-5.0.Gda.DataModelIface */
    readonly gIface: GObject.TypeInterface
    readonly iGetNRows: (model: DataModel) => number
    readonly iGetNColumns: (model: DataModel) => number
    readonly iDescribeColumn: (model: DataModel, col: number) => Column | null
    readonly iGetAccessFlags: (model: DataModel) => DataModelAccessFlags
    readonly iGetValueAt: (model: DataModel, col: number, row: number) => any | null
    readonly iGetAttributesAt: (model: DataModel, col: number, row: number) => ValueAttribute
    readonly iCreateIter: (model: DataModel) => DataModelIter
    readonly iIterAtRow: (model: DataModel, iter: DataModelIter, row: number) => boolean
    readonly iIterNext: (model: DataModel, iter: DataModelIter) => boolean
    readonly iIterPrev: (model: DataModel, iter: DataModelIter) => boolean
    readonly iSetValueAt: (model: DataModel, col: number, row: number, value: any) => boolean
    readonly iIterSetValue: (model: DataModel, iter: DataModelIter, col: number, value: any) => boolean
    readonly iSetValues: (model: DataModel, row: number, values?: any[] | null) => boolean
    readonly iAppendValues: (model: DataModel, values?: any[] | null) => number
    readonly iAppendRow: (model: DataModel) => number
    readonly iRemoveRow: (model: DataModel, row: number) => boolean
    readonly iFindRow: (model: DataModel, values: any[], colsIndex: number[]) => number
    readonly iSetNotify: (model: DataModel, doNotifyChanges: boolean) => void
    readonly iGetNotify: (model: DataModel) => boolean
    readonly iSendHint: (model: DataModel, hint: DataModelHint, hintValue?: any | null) => void
    readonly rowInserted: (model: DataModel, row: number) => void
    readonly rowUpdated: (model: DataModel, row: number) => void
    readonly rowRemoved: (model: DataModel, row: number) => void
    readonly changed: (model: DataModel) => void
    readonly reset: (model: DataModel) => void
    readonly accessChanged: (model: DataModel) => void
    readonly iGetExceptions: (model: DataModel) => GLib.Error[]
    static name: string
}
abstract class DataModelImportClass {
    /* Fields of Gda-5.0.Gda.DataModelImportClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class DataModelImportPrivate {
    static name: string
}
abstract class DataModelIterClass {
    /* Fields of Gda-5.0.Gda.DataModelIterClass */
    readonly parentClass: SetClass
    readonly rowChanged: (iter: DataModelIter, row: number) => void
    readonly endOfData: (iter: DataModelIter) => void
    static name: string
}
class DataModelIterPrivate {
    static name: string
}
abstract class DataModelLdapClass {
    /* Fields of Gda-5.0.Gda.DataModelLdapClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class DataModelLdapPrivate {
    static name: string
}
abstract class DataPivotClass {
    /* Fields of Gda-5.0.Gda.DataPivotClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class DataPivotPrivate {
    static name: string
}
abstract class DataProxyClass {
    /* Fields of Gda-5.0.Gda.DataProxyClass */
    readonly parentClass: GObject.ObjectClass
    readonly rowDeleteChanged: (proxy: DataProxy, row: number, toBeDeleted: boolean) => void
    readonly sampleSizeChanged: (proxy: DataProxy, sampleSize: number) => void
    readonly sampleChanged: (proxy: DataProxy, sampleStart: number, sampleEnd: number) => void
    readonly validateRowChanges: (proxy: DataProxy, row: number, proxiedRow: number) => GLib.Error
    readonly rowChangesApplied: (proxy: DataProxy, row: number, proxiedRow: number) => void
    readonly filterChanged: (proxy: DataProxy) => void
    static name: string
}
class DataProxyPrivate {
    static name: string
}
abstract class DataSelectClass {
    /* Fields of Gda-5.0.Gda.DataSelectClass */
    readonly parentClass: GObject.ObjectClass
    readonly fetchNbRows: (model: DataSelect) => number
    readonly fetchRandom: (model: DataSelect, prow: Row, rownum: number) => boolean
    readonly storeAll: (model: DataSelect) => boolean
    readonly fetchNext: (model: DataSelect, prow: Row, rownum: number) => boolean
    readonly fetchPrev: (model: DataSelect, prow: Row, rownum: number) => boolean
    readonly fetchAt: (model: DataSelect, prow: Row, rownum: number) => boolean
    static name: string
}
class DataSelectPrivate {
    static name: string
}
class Diff {
    /* Fields of Gda-5.0.Gda.Diff */
    readonly type: DiffType
    readonly oldRow: number
    readonly newRow: number
    readonly values: GLib.HashTable
    static name: string
}
class DsnInfo {
    /* Fields of Gda-5.0.Gda.DsnInfo */
    readonly name: string
    readonly provider: string
    readonly description: string
    readonly cncString: string
    readonly authString: string
    readonly isSystem: boolean
    /* Methods of Gda-5.0.Gda.DsnInfo */
    copy(): DsnInfo
    free(): void
    static name: string
    static new(): DsnInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): DsnInfo
}
class GeometricPoint {
    /* Fields of Gda-5.0.Gda.GeometricPoint */
    readonly x: number
    readonly y: number
    static name: string
    /* Static methods and pseudo-constructors */
    static copy(boxed?: object | null): object | null
    static free(boxed?: object | null): void
}
abstract class HandlerBinClass {
    /* Fields of Gda-5.0.Gda.HandlerBinClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class HandlerBinPriv {
    static name: string
}
abstract class HandlerBooleanClass {
    /* Fields of Gda-5.0.Gda.HandlerBooleanClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class HandlerBooleanPriv {
    static name: string
}
abstract class HandlerNumericalClass {
    /* Fields of Gda-5.0.Gda.HandlerNumericalClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class HandlerNumericalPriv {
    static name: string
}
abstract class HandlerStringClass {
    /* Fields of Gda-5.0.Gda.HandlerStringClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class HandlerStringPriv {
    static name: string
}
abstract class HandlerTimeClass {
    /* Fields of Gda-5.0.Gda.HandlerTimeClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class HandlerTimePriv {
    static name: string
}
abstract class HandlerTypeClass {
    /* Fields of Gda-5.0.Gda.HandlerTypeClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class HandlerTypePriv {
    static name: string
}
abstract class HolderClass {
    /* Fields of Gda-5.0.Gda.HolderClass */
    readonly parentClass: GObject.ObjectClass
    readonly changed: (holder: Holder) => void
    readonly sourceChanged: (holder: Holder) => void
    readonly validateChange: (holder: Holder, newValue: any) => GLib.Error
    readonly attChanged: (holder: Holder, attName: string, attValue: any) => void
    static name: string
}
class HolderPrivate {
    static name: string
}
abstract class LockableIface {
    /* Fields of Gda-5.0.Gda.LockableIface */
    readonly gIface: GObject.TypeInterface
    readonly iLock: (lock: Lockable) => void
    readonly iTrylock: (lock: Lockable) => boolean
    readonly iUnlock: (lock: Lockable) => void
    static name: string
}
class MetaContext {
    /* Fields of Gda-5.0.Gda.MetaContext */
    readonly tableName: string
    readonly size: number
    readonly columnNames: string[]
    readonly columnValues: any[]
    readonly columns: GLib.HashTable
    /* Methods of Gda-5.0.Gda.MetaContext */
    copy(): MetaContext
    free(): void
    getTable(): string
    setColumn(column: string, value: any, cnc?: Connection | null): void
    setColumns(columns: GLib.HashTable, cnc?: Connection | null): void
    setTable(table: string): void
    static name: string
    static new(): MetaContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MetaContext
}
class MetaDbObject {
    /* Fields of Gda-5.0.Gda.MetaDbObject */
    readonly objType: MetaDbObjectType
    readonly outdated: boolean
    readonly objCatalog: string
    readonly objSchema: string
    readonly objName: string
    readonly objShortName: string
    readonly objFullName: string
    readonly objOwner: string
    readonly dependList: MetaDbObject[]
    static name: string
}
class MetaStoreChange {
    /* Fields of Gda-5.0.Gda.MetaStoreChange */
    readonly cType: MetaStoreChangeType
    readonly tableName: string
    readonly keys: GLib.HashTable
    static name: string
}
abstract class MetaStoreClass {
    /* Fields of Gda-5.0.Gda.MetaStoreClass */
    readonly parentClass: GObject.ObjectClass
    readonly cpriv: MetaStoreClassPrivate
    readonly metaReset: (store: MetaStore) => void
    readonly suggestUpdate: (store: MetaStore, suggest: MetaContext) => GLib.Error
    static name: string
}
class MetaStoreClassPrivate {
    static name: string
}
class MetaStorePrivate {
    static name: string
}
abstract class MetaStructClass {
    /* Fields of Gda-5.0.Gda.MetaStructClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class MetaStructPrivate {
    static name: string
}
class MetaTable {
    /* Fields of Gda-5.0.Gda.MetaTable */
    readonly columns: MetaTableColumn[]
    readonly pkColsArray: number
    readonly pkColsNb: number
    readonly reverseFkList: MetaTableForeignKey[]
    readonly fkList: MetaTableForeignKey[]
    static name: string
}
class MetaTableColumn {
    /* Fields of Gda-5.0.Gda.MetaTableColumn */
    readonly columnName: string
    readonly columnType: string
    readonly gtype: GObject.Type
    readonly pkey: boolean
    readonly nullok: boolean
    readonly defaultValue: string
    /* Methods of Gda-5.0.Gda.MetaTableColumn */
    foreachAttribute(func: AttributesManagerFunc): void
    getAttribute(attribute: string): any
    setAttribute(attribute: string, value?: any | null, destroy?: GLib.DestroyNotify | null): void
    static name: string
}
class MetaTableForeignKey {
    /* Fields of Gda-5.0.Gda.MetaTableForeignKey */
    readonly metaTable: MetaDbObject
    readonly dependOn: MetaDbObject
    readonly colsNb: number
    readonly fkColsArray: number
    readonly fkNamesArray: string
    readonly refPkColsArray: number
    readonly refPkNamesArray: string
    readonly fkName: string
    static name: string
}
class MetaView {
    /* Fields of Gda-5.0.Gda.MetaView */
    readonly table: MetaTable
    readonly viewDef: string
    readonly isUpdatable: boolean
    static name: string
}
class Numeric {
    /* Fields of Gda-5.0.Gda.Numeric */
    readonly number: string
    readonly precision: number
    readonly width: number
    /* Methods of Gda-5.0.Gda.Numeric */
    copy(): Numeric
    free(): void
    getDouble(): number
    getPrecision(): number
    getString(): string | null
    getWidth(): number
    setDouble(number: number): void
    setFromString(str: string): void
    setPrecision(precision: number): void
    setWidth(width: number): void
    static name: string
    static new(): Numeric
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Numeric
}
abstract class PStmtClass {
    /* Fields of Gda-5.0.Gda.PStmtClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class PStmtPrivate {
    static name: string
}
class ProviderInfo {
    /* Fields of Gda-5.0.Gda.ProviderInfo */
    readonly id: string
    readonly location: string
    readonly description: string
    readonly dsnParams: Set
    readonly authParams: Set
    static name: string
}
class QuarkList {
    /* Methods of Gda-5.0.Gda.QuarkList */
    addFromString(string: string, cleanup: boolean): void
    clear(): void
    copy(): QuarkList
    find(name: string): string
    foreach(func: GLib.HFunc): void
    free(): void
    protectValues(): void
    remove(name: string): void
    static name: string
    static new(): QuarkList
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): QuarkList
    static newFromString(string: string): QuarkList
}
abstract class RepetitiveStatementClass {
    /* Fields of Gda-5.0.Gda.RepetitiveStatementClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class RowClass {
    /* Fields of Gda-5.0.Gda.RowClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class RowPrivate {
    static name: string
}
abstract class ServerOperationClass {
    /* Fields of Gda-5.0.Gda.ServerOperationClass */
    readonly parentClass: GObject.ObjectClass
    readonly seqItemAdded: (op: ServerOperation, seqPath: string, itemIndex: number) => void
    readonly seqItemRemove: (op: ServerOperation, seqPath: string, itemIndex: number) => void
    static name: string
}
class ServerOperationNode {
    /* Fields of Gda-5.0.Gda.ServerOperationNode */
    readonly type: ServerOperationNodeType
    readonly status: ServerOperationNodeStatus
    readonly plist: Set
    readonly model: DataModel
    readonly column: Column
    readonly param: Holder
    readonly priv: object
    static name: string
}
class ServerOperationPrivate {
    static name: string
}
abstract class ServerProviderClass {
    /* Fields of Gda-5.0.Gda.ServerProviderClass */
    readonly parentClass: GObject.ObjectClass
    readonly limitingThread: GLib.Thread
    readonly getName: (provider: ServerProvider) => string
    readonly getVersion: (provider: ServerProvider) => string
    readonly getServerVersion: (provider: ServerProvider, cnc: Connection) => string
    readonly supportsFeature: (provider: ServerProvider, cnc: Connection | null, feature: ConnectionFeature) => boolean
    readonly getDefDbmsType: (provider: ServerProvider, cnc: Connection, gType: GObject.Type) => string
    readonly escapeString: (provider: ServerProvider, cnc: Connection | null, str: string) => string
    readonly unescapeString: (provider: ServerProvider, cnc: Connection | null, str: string) => string
    readonly closeConnection: (provider: ServerProvider, cnc: Connection) => boolean
    readonly getDatabase: (provider: ServerProvider, cnc: Connection) => string
    readonly supportsOperation: (provider: ServerProvider, cnc: Connection | null, type: ServerOperationType, options?: Set | null) => boolean
    readonly createOperation: (provider: ServerProvider, cnc: Connection | null, type: ServerOperationType, options?: Set | null) => ServerOperation | null
    readonly renderOperation: (provider: ServerProvider, cnc: Connection | null, op: ServerOperation) => string | null
    readonly beginTransaction: (provider: ServerProvider, cnc: Connection, name: string, level: TransactionIsolation) => boolean
    readonly commitTransaction: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    readonly rollbackTransaction: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    readonly addSavepoint: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    readonly rollbackSavepoint: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    readonly deleteSavepoint: (provider: ServerProvider, cnc: Connection, name: string) => boolean
    readonly createParser: (provider: ServerProvider, cnc?: Connection | null) => SqlParser
    readonly statementPrepare: (provider: ServerProvider, cnc: Connection, stmt: Statement) => boolean
    readonly isBusy: (provider: ServerProvider, cnc: Connection) => boolean
    readonly cancel: (provider: ServerProvider, cnc: Connection, taskId: number) => boolean
    readonly metaFuncs: ServerProviderMeta
    readonly xaFuncs: ServerProviderXa
    readonly identifierQuote: (provider: ServerProvider, cnc: Connection, id: string, forMetaStore: boolean, forceQuotes: boolean) => string
    readonly handleAsync: (provider: ServerProvider, cnc: Connection) => boolean
    static name: string
}
class ServerProviderHandlerInfo {
    /* Fields of Gda-5.0.Gda.ServerProviderHandlerInfo */
    readonly cnc: Connection
    readonly gType: GObject.Type
    readonly dbmsType: string
    static name: string
}
class ServerProviderInfo {
    static name: string
}
class ServerProviderMeta {
    /* Fields of Gda-5.0.Gda.ServerProviderMeta */
    readonly udt: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, udtCatalog: any, udtSchema: any) => boolean
    readonly udtCols: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, udtCatalog: any, udtSchema: any, udtName: any) => boolean
    readonly enums: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, udtCatalog: any, udtSchema: any, udtName: any) => boolean
    readonly domains: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, domainCatalog: any, domainSchema: any) => boolean
    readonly constraintsDom: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, domainCatalog: any, domainSchema: any, domainName: any) => boolean
    readonly elTypes: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, specificName: any) => boolean
    readonly collations: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, collationCatalog: any, collationSchema: any, collationNameN: any) => boolean
    readonly characterSets: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, chsetCatalog: any, chsetSchema: any, chsetNameN: any) => boolean
    readonly schemata: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, catalogName: any, schemaNameN: any) => boolean
    readonly tablesViews: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, tableCatalog: any, tableSchema: any, tableNameN: any) => boolean
    readonly columns: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, tableCatalog: any, tableSchema: any, tableName: any) => boolean
    readonly viewCols: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, viewCatalog: any, viewSchema: any, viewName: any) => boolean
    readonly constraintsTab: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, tableCatalog: any, tableSchema: any, tableName: any, constraintNameN: any) => boolean
    readonly constraintsRef: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, tableCatalog: any, tableSchema: any, tableName: any, constraintName: any) => boolean
    readonly keyColumns: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, tableCatalog: any, tableSchema: any, tableName: any, constraintName: any) => boolean
    readonly checkColumns: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, tableCatalog: any, tableSchema: any, tableName: any, constraintName: any) => boolean
    readonly triggers: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, tableCatalog: any, tableSchema: any, tableName: any) => boolean
    readonly routines: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, routineCatalog: any, routineSchema: any, routineNameN: any) => boolean
    readonly routineCol: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, routCatalog: any, routSchema: any, routName: any) => boolean
    readonly routinePar: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, routCatalog: any, routSchema: any, routName: any) => boolean
    readonly indexesTab: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, tableCatalog: any, tableSchema: any, tableName: any, indexNameN: any) => boolean
    readonly indexCols: (prov: ServerProvider, cnc: Connection, meta: MetaStore, ctx: MetaContext, error: GLib.Error, tableCatalog: any, tableSchema: any, tableName: any, indexName: any) => boolean
    static name: string
}
class ServerProviderPrivate {
    /* Fields of Gda-5.0.Gda.ServerProviderPrivate */
    readonly dataHandlers: GLib.HashTable
    readonly parser: SqlParser
    static name: string
}
class ServerProviderXa {
    /* Fields of Gda-5.0.Gda.ServerProviderXa */
    readonly xaStart: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
    readonly xaEnd: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
    readonly xaPrepare: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
    readonly xaCommit: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
    readonly xaRollback: (prov: ServerProvider, cnc: Connection, trx: XaTransactionId) => boolean
    static name: string
}
abstract class SetClass {
    /* Fields of Gda-5.0.Gda.SetClass */
    readonly parentClass: GObject.ObjectClass
    readonly validateHolderChange: (set: Set, holder: Holder, newValue: any) => GLib.Error
    readonly validateSet: (set: Set) => GLib.Error
    readonly holderChanged: (set: Set, holder: Holder) => void
    readonly holderAttrChanged: (set: Set, holder: Holder, attrName: string, attrValue: any) => void
    readonly publicDataChanged: (set: Set) => void
    readonly holderTypeSet: (set: Set, holder: Holder) => void
    readonly sourceModelChanged: (set: Set, source: SetSource) => void
    static name: string
}
class SetGroup {
    /* Fields of Gda-5.0.Gda.SetGroup */
    readonly nodes: SetNode[]
    readonly nodesSource: SetSource
    /* Methods of Gda-5.0.Gda.SetGroup */
    addNode(node: SetNode): void
    copy(): SetGroup
    free(): void
    getNNodes(): number
    getNode(): SetNode
    getNodes(): SetNode[]
    getSource(): SetSource
    setSource(source: SetSource): void
    static name: string
    static new(node: SetNode): SetGroup
    constructor(node: SetNode)
    /* Static methods and pseudo-constructors */
    static new(node: SetNode): SetGroup
}
class SetNode {
    /* Fields of Gda-5.0.Gda.SetNode */
    readonly holder: Holder
    readonly sourceModel: DataModel
    readonly sourceColumn: number
    /* Methods of Gda-5.0.Gda.SetNode */
    copy(): SetNode
    free(): void
    getDataModel(): DataModel
    getHolder(): Holder
    getSourceColumn(): number
    setDataModel(model?: DataModel | null): void
    setHolder(holder: Holder): void
    setSourceColumn(column: number): void
    static name: string
    static new(holder: Holder): SetNode
    constructor(holder: Holder)
    /* Static methods and pseudo-constructors */
    static new(holder: Holder): SetNode
}
class SetPrivate {
    static name: string
}
class SetSource {
    /* Fields of Gda-5.0.Gda.SetSource */
    readonly dataModel: DataModel
    readonly nodes: SetNode[]
    /* Methods of Gda-5.0.Gda.SetSource */
    addNode(node: SetNode): void
    copy(): SetSource
    free(): void
    getDataModel(): DataModel
    getNNodes(): number
    getNodes(): SetNode[]
    setDataModel(model: DataModel): void
    static name: string
    static new(model: DataModel): SetSource
    constructor(model: DataModel)
    /* Static methods and pseudo-constructors */
    static new(model: DataModel): SetSource
}
class SqlAnyPart {
    /* Fields of Gda-5.0.Gda.SqlAnyPart */
    readonly type: any
    readonly parent: any
    /* Methods of Gda-5.0.Gda.SqlAnyPart */
    checkStructure(): boolean
    static name: string
}
abstract class SqlBuilderClass {
    /* Fields of Gda-5.0.Gda.SqlBuilderClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class SqlBuilderPrivate {
    static name: string
}
class SqlCase {
    /* Fields of Gda-5.0.Gda.SqlCase */
    readonly any: any
    readonly baseExpr: any
    readonly whenExprList: object[]
    readonly thenExprList: object[]
    readonly elseExpr: any
    /* Methods of Gda-5.0.Gda.SqlCase */
    free(): void
    serialize(): string
    static name: string
}
class SqlExpr {
    /* Fields of Gda-5.0.Gda.SqlExpr */
    readonly any: any
    readonly value: any
    readonly paramSpec: any
    readonly func: any
    readonly cond: any
    readonly select: any
    readonly caseS: any
    readonly castAs: string
    readonly valueIsIdent: boolean
    /* Methods of Gda-5.0.Gda.SqlExpr */
    free(): void
    serialize(): string
    takeSelect(stmt: SqlStatement): void
    static name: string
}
class SqlField {
    /* Fields of Gda-5.0.Gda.SqlField */
    readonly any: any
    readonly fieldName: string
    readonly validityMetaTableColumn: MetaTableColumn
    /* Methods of Gda-5.0.Gda.SqlField */
    free(): void
    serialize(): string
    takeName(value: any): void
    static name: string
}
class SqlFunction {
    /* Fields of Gda-5.0.Gda.SqlFunction */
    readonly any: any
    readonly functionName: string
    readonly argsList: object[]
    /* Methods of Gda-5.0.Gda.SqlFunction */
    checkClean(): void
    free(): void
    serialize(): string
    takeArgsList(args: object[]): void
    takeName(value: any): void
    static name: string
}
class SqlOperation {
    /* Fields of Gda-5.0.Gda.SqlOperation */
    readonly any: any
    readonly operatorType: SqlOperatorType
    readonly operands: object[]
    /* Methods of Gda-5.0.Gda.SqlOperation */
    free(): void
    serialize(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static operatorFromString(op: string): SqlOperatorType
    static operatorToString(op: SqlOperatorType): string
}
abstract class SqlParserClass {
    /* Fields of Gda-5.0.Gda.SqlParserClass */
    readonly parentClass: GObject.ObjectClass
    readonly delimAlloc: (f: object) => object
    readonly delimFree: (d: object, f: object) => void
    readonly delimTrace: (d: object, s: string) => void
    readonly delimParse: (d: object, i: number, v: any, iface: SqlParserIface) => void
    readonly delimTokensTrans: number
    readonly parserAlloc: (f: object) => object
    readonly parserFree: (p: object, f: object) => void
    readonly parserTrace: (p: object, s: string) => void
    readonly parserParse: (p: object, i: number, v: any, iface: SqlParserIface) => void
    readonly parserTokensTrans: number
    static name: string
}
class SqlParserIface {
    /* Fields of Gda-5.0.Gda.SqlParserIface */
    readonly parser: SqlParser
    readonly parsedStatement: SqlStatement
    static name: string
}
class SqlParserPrivate {
    static name: string
}
class SqlRenderingContext {
    /* Fields of Gda-5.0.Gda.SqlRenderingContext */
    readonly flags: StatementSqlFlag
    readonly params: Set
    readonly paramsUsed: Holder[]
    readonly provider: ServerProvider
    readonly cnc: Connection
    readonly renderValue: SqlRenderingValue
    static name: string
}
class SqlSelectField {
    /* Fields of Gda-5.0.Gda.SqlSelectField */
    readonly any: any
    readonly expr: any
    readonly fieldName: string
    readonly tableName: string
    readonly as: string
    readonly validityMetaObject: MetaDbObject
    readonly validityMetaTableColumn: MetaTableColumn
    /* Methods of Gda-5.0.Gda.SqlSelectField */
    free(): void
    serialize(): string
    takeAlias(alias: any): void
    takeStarValue(value: any): void
    static name: string
}
class SqlSelectFrom {
    /* Fields of Gda-5.0.Gda.SqlSelectFrom */
    readonly any: any
    readonly targets: any[]
    readonly joins: any[]
    /* Methods of Gda-5.0.Gda.SqlSelectFrom */
    free(): void
    serialize(): string
    static name: string
}
class SqlSelectJoin {
    /* Fields of Gda-5.0.Gda.SqlSelectJoin */
    readonly any: any
    readonly type: SqlSelectJoinType
    readonly position: number
    readonly expr: any
    readonly use: object[]
    /* Methods of Gda-5.0.Gda.SqlSelectJoin */
    free(): void
    serialize(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static typeToString(type: SqlSelectJoinType): string
}
class SqlSelectOrder {
    /* Fields of Gda-5.0.Gda.SqlSelectOrder */
    readonly any: any
    readonly expr: any
    readonly asc: boolean
    readonly collationName: string
    /* Methods of Gda-5.0.Gda.SqlSelectOrder */
    free(): void
    serialize(): string
    static name: string
}
class SqlSelectTarget {
    /* Fields of Gda-5.0.Gda.SqlSelectTarget */
    readonly any: any
    readonly expr: any
    readonly tableName: string
    readonly as: string
    readonly validityMetaObject: MetaDbObject
    /* Methods of Gda-5.0.Gda.SqlSelectTarget */
    free(): void
    serialize(): string
    takeAlias(alias: any): void
    takeSelect(stmt: SqlStatement): void
    takeTableName(value: any): void
    static name: string
}
class SqlStatement {
    /* Methods of Gda-5.0.Gda.SqlStatement */
    compoundSetType(type: SqlStatementCompoundType): void
    compoundTakeStmt(s: SqlStatement): void
    static name: string
}
class SqlStatementCheckValidityData {
    /* Fields of Gda-5.0.Gda.SqlStatementCheckValidityData */
    readonly cnc: Connection
    readonly store: MetaStore
    readonly mstruct: MetaStruct
    static name: string
}
class SqlStatementCompound {
    /* Fields of Gda-5.0.Gda.SqlStatementCompound */
    readonly any: any
    readonly compoundType: SqlStatementCompoundType
    readonly stmtList: object[]
    static name: string
}
class SqlStatementContentsInfo {
    /* Fields of Gda-5.0.Gda.SqlStatementContentsInfo */
    readonly type: SqlStatementType
    readonly name: string
    readonly construct: () => object
    readonly free: (stm: object) => void
    readonly copy: (stm: object) => object
    readonly serialize: (stm: object) => string
    readonly checkStructureFunc: any
    readonly checkValidityFunc: any
    static name: string
}
class SqlStatementDelete {
    static name: string
}
class SqlStatementInsert {
    static name: string
}
class SqlStatementSelect {
    static name: string
}
class SqlStatementTransaction {
    static name: string
}
class SqlStatementUnknown {
    static name: string
}
class SqlStatementUpdate {
    static name: string
}
class SqlTable {
    /* Fields of Gda-5.0.Gda.SqlTable */
    readonly any: any
    readonly tableName: string
    readonly validityMetaObject: MetaDbObject
    /* Methods of Gda-5.0.Gda.SqlTable */
    free(): void
    serialize(): string
    takeName(value: any): void
    static name: string
}
abstract class StatementClass {
    /* Fields of Gda-5.0.Gda.StatementClass */
    readonly parentClass: GObject.ObjectClass
    readonly checked: (stmt: Statement, cnc: Connection, checked: boolean) => void
    readonly reset: (stmt: Statement) => void
    static name: string
}
class StatementPrivate {
    static name: string
}
class ThreadNotification {
    /* Fields of Gda-5.0.Gda.ThreadNotification */
    readonly type: ThreadNotificationType
    readonly jobId: number
    static name: string
}
abstract class ThreadWrapperClass {
    /* Fields of Gda-5.0.Gda.ThreadWrapperClass */
    readonly objectClass: GObject.ObjectClass
    static name: string
}
class ThreadWrapperPrivate {
    static name: string
}
class Time {
    /* Fields of Gda-5.0.Gda.Time */
    readonly hour: number
    readonly minute: number
    readonly second: number
    readonly fraction: number
    readonly timezone: number
    /* Methods of Gda-5.0.Gda.Time */
    changeTimezone(ntz: number): void
    valid(): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static copy(boxed?: object | null): object | null
    static free(boxed?: object | null): void
}
class Timestamp {
    /* Fields of Gda-5.0.Gda.Timestamp */
    readonly year: number
    readonly month: number
    readonly day: number
    readonly hour: number
    readonly minute: number
    readonly second: number
    readonly fraction: number
    readonly timezone: number
    /* Methods of Gda-5.0.Gda.Timestamp */
    changeTimezone(ntz: number): void
    valid(): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static copy(boxed?: object | null): object | null
    static free(boxed?: object | null): void
}
abstract class TransactionStatusClass {
    /* Fields of Gda-5.0.Gda.TransactionStatusClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class TransactionStatusEvent {
    /* Fields of Gda-5.0.Gda.TransactionStatusEvent */
    readonly trans: TransactionStatus
    readonly type: TransactionStatusEventType
    readonly connEvent: ConnectionEvent
    static name: string
}
abstract class TreeClass {
    /* Fields of Gda-5.0.Gda.TreeClass */
    readonly objectClass: GObject.ObjectClass
    readonly nodeChanged: (tree: Tree, node: TreeNode) => void
    readonly nodeInserted: (tree: Tree, node: TreeNode) => void
    readonly nodeHasChildToggled: (tree: Tree, node: TreeNode) => void
    readonly nodeDeleted: (tree: Tree, nodePath: string) => void
    static name: string
}
abstract class TreeManagerClass {
    /* Fields of Gda-5.0.Gda.TreeManagerClass */
    readonly objectClass: GObject.ObjectClass
    static name: string
}
class TreeManagerPrivate {
    static name: string
}
abstract class TreeMgrColumnsClass {
    /* Fields of Gda-5.0.Gda.TreeMgrColumnsClass */
    readonly objectClass: TreeManagerClass
    static name: string
}
class TreeMgrColumnsPriv {
    static name: string
}
abstract class TreeMgrLabelClass {
    /* Fields of Gda-5.0.Gda.TreeMgrLabelClass */
    readonly objectClass: TreeManagerClass
    static name: string
}
class TreeMgrLabelPriv {
    static name: string
}
abstract class TreeMgrLdapClass {
    /* Fields of Gda-5.0.Gda.TreeMgrLdapClass */
    readonly objectClass: TreeManagerClass
    static name: string
}
class TreeMgrLdapPriv {
    static name: string
}
abstract class TreeMgrSchemasClass {
    /* Fields of Gda-5.0.Gda.TreeMgrSchemasClass */
    readonly objectClass: TreeManagerClass
    static name: string
}
class TreeMgrSchemasPriv {
    static name: string
}
abstract class TreeMgrSelectClass {
    /* Fields of Gda-5.0.Gda.TreeMgrSelectClass */
    readonly objectClass: TreeManagerClass
    static name: string
}
class TreeMgrSelectPriv {
    static name: string
}
abstract class TreeMgrTablesClass {
    /* Fields of Gda-5.0.Gda.TreeMgrTablesClass */
    readonly objectClass: TreeManagerClass
    static name: string
}
class TreeMgrTablesPriv {
    static name: string
}
abstract class TreeNodeClass {
    /* Fields of Gda-5.0.Gda.TreeNodeClass */
    readonly objectClass: GObject.ObjectClass
    readonly nodeChanged: (reporting: TreeNode, node: TreeNode) => void
    readonly nodeInserted: (reporting: TreeNode, node: TreeNode) => void
    readonly nodeHasChildToggled: (reporting: TreeNode, node: TreeNode) => void
    readonly nodeDeleted: (reporting: TreeNode, relativePath: string) => void
    readonly dumpHeader: (node: TreeNode) => string
    readonly dumpChildren: (node: TreeNode, prefix: string, inString: GLib.String) => void
    static name: string
}
class TreeNodePrivate {
    static name: string
}
class TreePrivate {
    static name: string
}
abstract class XaTransactionClass {
    /* Fields of Gda-5.0.Gda.XaTransactionClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class XaTransactionId {
    /* Fields of Gda-5.0.Gda.XaTransactionId */
    readonly format: number
    readonly gtridLength: number
    readonly bqualLength: number
    readonly data: number[]
    /* Methods of Gda-5.0.Gda.XaTransactionId */
    toString(): string
    static name: string
}
class XaTransactionPrivate {
    static name: string
}
    type Mutex = GLib.RecMutex
    type SqlBuilderId = number
    type SqlErrorType = SqlError
}
export default Gda;