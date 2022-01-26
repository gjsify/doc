/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Arrow-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Arrow {

enum CompareOperator {
    EQUAL,
    NOT_EQUAL,
    GREATER,
    GREATER_EQUAL,
    LESS,
    LESS_EQUAL,
}
enum CompressionType {
    UNCOMPRESSED,
    SNAPPY,
    GZIP,
    BROTLI,
    ZSTD,
    LZ4,
    LZO,
    BZ2,
}
enum CountMode {
    ALL,
    NULL,
}
enum Error {
    OUT_OF_MEMORY,
    KEY,
    TYPE,
    INVALID,
    IO,
    CAPACITY,
    INDEX,
    UNKNOWN,
    NOT_IMPLEMENTED,
    SERIALIZATION,
    CODE_GENERATION,
    EXPRESSION_VALIDATION,
    EXECUTION,
    ALREADY_EXISTS,
}
enum FileMode {
    READ,
    WRITE,
    READWRITE,
}
enum FileType {
    NOT_FOUND,
    UNKNOWN,
    FILE,
    DIR,
}
enum FilterNullSelectionBehavior {
    DROP,
    EMIT_NULL,
}
enum JSONReadUnexpectedFieldBehavior {
    IGNORE,
    ERROR,
    INFER_TYPE,
}
enum MetadataVersion {
    V1,
    V2,
    V3,
}
enum SortOrder {
    ASCENDING,
    DESCENDING,
}
enum TimeUnit {
    SECOND,
    MILLI,
    MICRO,
    NANO,
}
enum Type {
    NA,
    BOOLEAN,
    UINT8,
    INT8,
    UINT16,
    INT16,
    UINT32,
    INT32,
    UINT64,
    INT64,
    HALF_FLOAT,
    FLOAT,
    DOUBLE,
    STRING,
    BINARY,
    FIXED_SIZE_BINARY,
    DATE32,
    DATE64,
    TIMESTAMP,
    TIME32,
    TIME64,
    INTERVAL_MONTHS,
    INTERVAL_DAY_TIME,
    DECIMAL128,
    DECIMAL256,
    LIST,
    STRUCT,
    SPARSE_UNION,
    DENSE_UNION,
    DICTIONARY,
    MAP,
    EXTENSION,
    FIXED_SIZE_LIST,
    DURATION,
    LARGE_STRING,
    LARGE_BINARY,
    LARGE_LIST,
}
const VERSION_MAJOR: number
const VERSION_MICRO: number
const VERSION_MINOR: number
const VERSION_TAG: string
function errorQuark(): GLib.Quark
class File {
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    getMode(): FileMode
    isClosed(): boolean
    tell(): number
    static name: string
}
class FunctionOptions {
    static name: string
}
class Readable {
    /* Methods of Arrow-1.0.Arrow.Readable */
    read(nBytes: number): Buffer | null
    readBytes(nBytes: number): any | null
    static name: string
}
class Writable {
    /* Methods of Arrow-1.0.Arrow.Writable */
    flush(): boolean
    write(data: Uint8Array): boolean
    static name: string
}
class WritableFile {
    /* Methods of Arrow-1.0.Arrow.WritableFile */
    writeAt(position: number, data: Uint8Array): boolean
    static name: string
}
interface Array_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.Array */
    array?: object
    buffer1?: Buffer
    buffer2?: Buffer
    nullBitmap?: Buffer
    parent?: Array
    valueDataType?: DataType
}
class Array {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: Array_ConstructProps)
    _init (config?: Array_ConstructProps): void
    static $gtype: GObject.Type
}
interface ArrayBuilder_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.ArrayBuilder */
    arrayBuilder?: object
}
class ArrayBuilder {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: ArrayBuilder_ConstructProps)
    _init (config?: ArrayBuilder_ConstructProps): void
    static $gtype: GObject.Type
}
interface ArrayDatum_ConstructProps extends Datum_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.ArrayDatum */
    value?: Array
}
class ArrayDatum {
    /* Fields of Arrow-1.0.Arrow.Datum */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Datum */
    equal(otherDatum: Datum): boolean
    isArray(): boolean
    isArrayLike(): boolean
    toString(): string
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
    constructor (config?: ArrayDatum_ConstructProps)
    _init (config?: ArrayDatum_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: Array): ArrayDatum
    static $gtype: GObject.Type
}
interface ArraySortOptions_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.ArraySortOptions */
    order?: SortOrder
}
class ArraySortOptions {
    /* Properties of Arrow-1.0.Arrow.ArraySortOptions */
    order: SortOrder
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ArraySortOptions */
    equal(otherOptions: ArraySortOptions): boolean
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
    connect(sigName: "notify::order", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ArraySortOptions_ConstructProps)
    _init (config?: ArraySortOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(order: SortOrder): ArraySortOptions
    static $gtype: GObject.Type
}
interface BinaryArray_ConstructProps extends Array_ConstructProps {
}
class BinaryArray {
    /* Fields of Arrow-1.0.Arrow.Array */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.BinaryArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    getOffsetsBuffer(): Buffer
    getValue(i: number): any
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: BinaryArray_ConstructProps)
    _init (config?: BinaryArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number): BinaryArray
    static $gtype: GObject.Type
}
interface BinaryArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class BinaryArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.BinaryArrayBuilder */
    append(value: Uint8Array): boolean
    appendValue(value: Uint8Array): boolean
    appendValueBytes(value: any): boolean
    appendValues(values: any[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: BinaryArrayBuilder_ConstructProps)
    _init (config?: BinaryArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BinaryArrayBuilder
    static $gtype: GObject.Type
}
interface BinaryDataType_ConstructProps extends DataType_ConstructProps {
}
class BinaryDataType {
    /* Fields of Arrow-1.0.Arrow.DataType */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: BinaryDataType_ConstructProps)
    _init (config?: BinaryDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BinaryDataType
    static $gtype: GObject.Type
}
interface BinaryDictionaryArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class BinaryDictionaryArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilder */
    appendArray(array: BinaryArray): boolean
    appendIndices(values: number[], isValids: boolean[] | null): boolean
    appendValue(value: Uint8Array): boolean
    appendValueBytes(value: any): boolean
    finishDelta(): [ /* returnType */ boolean, /* outIndices */ Array, /* outDelta */ Array ]
    getDictionaryLength(): number
    insertMemoValues(values: BinaryArray): boolean
    resetFull(): void
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: BinaryDictionaryArrayBuilder_ConstructProps)
    _init (config?: BinaryDictionaryArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BinaryDictionaryArrayBuilder
    static $gtype: GObject.Type
}
interface BooleanArray_ConstructProps extends PrimitiveArray_ConstructProps {
}
class BooleanArray {
    /* Fields of Arrow-1.0.Arrow.PrimitiveArray */
    readonly parentInstance: Array
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.BooleanArray */
    and(right: BooleanArray): BooleanArray
    getValue(i: number): boolean
    getValues(): boolean[]
    invert(): BooleanArray
    or(right: BooleanArray): BooleanArray
    xor(right: BooleanArray): BooleanArray
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: BooleanArray_ConstructProps)
    _init (config?: BooleanArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): BooleanArray
    static $gtype: GObject.Type
}
interface BooleanArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class BooleanArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.BooleanArrayBuilder */
    append(value: boolean): boolean
    appendValue(value: boolean): boolean
    appendValues(values: boolean[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: BooleanArrayBuilder_ConstructProps)
    _init (config?: BooleanArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BooleanArrayBuilder
    static $gtype: GObject.Type
}
interface BooleanDataType_ConstructProps extends FixedWidthDataType_ConstructProps {
}
class BooleanDataType {
    /* Fields of Arrow-1.0.Arrow.FixedWidthDataType */
    readonly parentInstance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: BooleanDataType_ConstructProps)
    _init (config?: BooleanDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BooleanDataType
    static $gtype: GObject.Type
}
interface Buffer_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.Buffer */
    buffer?: object
    data?: any
    parent?: Buffer
}
class Buffer {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Buffer */
    copy(start: number, size: number): Buffer | null
    equal(otherBuffer: Buffer): boolean
    equalNBytes(otherBuffer: Buffer, nBytes: number): boolean
    getCapacity(): number
    getData(): any
    getMutableData(): any | null
    getParent(): Buffer | null
    getSize(): number
    isMutable(): boolean
    slice(offset: number, size: number): Buffer
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
    constructor (config?: Buffer_ConstructProps)
    _init (config?: Buffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data: Uint8Array): Buffer
    static newBytes(data: any): Buffer
    static $gtype: GObject.Type
}
interface BufferInputStream_ConstructProps extends SeekableInputStream_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.BufferInputStream */
    buffer?: Buffer
}
class BufferInputStream {
    /* Fields of Arrow-1.0.Arrow.SeekableInputStream */
    readonly parentInstance: InputStream
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.BufferInputStream */
    getBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.SeekableInputStream */
    getSize(): number
    getSupportZeroCopy(): boolean
    peek(nBytes: number): any
    readAt(position: number, nBytes: number): Buffer | null
    readAtBytes(position: number, nBytes: number): any | null
    /* Methods of Arrow-1.0.Arrow.InputStream */
    advance(nBytes: number): boolean
    align(alignment: number): boolean
    readRecordBatch(schema: Schema, options?: ReadOptions | null): RecordBatch | null
    readTensor(): Tensor | null
    /* Methods of Gio-2.0.Gio.InputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    readAll(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array
    readAllFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array
    readBytes(count: number, cancellable?: Gio.Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readBytesFinish(result: Gio.AsyncResult): any
    readFinish(result: Gio.AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skipFinish(result: Gio.AsyncResult): number
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
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    getMode(): FileMode
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Readable */
    read(nBytes: number): Buffer | null
    readBytes(nBytes: number): any | null
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
    constructor (config?: BufferInputStream_ConstructProps)
    _init (config?: BufferInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(buffer: Buffer): BufferInputStream
    static $gtype: GObject.Type
}
interface BufferOutputStream_ConstructProps extends OutputStream_ConstructProps {
}
class BufferOutputStream {
    /* Fields of Arrow-1.0.Arrow.OutputStream */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.OutputStream */
    align(alignment: number): boolean
    writeRecordBatch(recordBatch: RecordBatch, options?: WriteOptions | null): number
    writeTensor(tensor: Tensor): number
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
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    getMode(): FileMode
    isClosed(): boolean
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Writable */
    flush(): boolean
    write(data: Uint8Array): boolean
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
    constructor (config?: BufferOutputStream_ConstructProps)
    _init (config?: BufferOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(buffer: ResizableBuffer): BufferOutputStream
    static $gtype: GObject.Type
}
interface CSVReadOptions_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.CSVReadOptions */
    allowNewlinesInValues?: boolean
    allowNullStrings?: boolean
    blockSize?: number
    checkUtf8?: boolean
    delimiter?: number
    escapeCharacter?: number
    generateColumnNames?: boolean
    ignoreEmptyLines?: boolean
    isDoubleQuoted?: boolean
    isEscaped?: boolean
    isQuoted?: boolean
    nSkipRows?: number
    quoteCharacter?: number
    useThreads?: boolean
}
class CSVReadOptions {
    /* Properties of Arrow-1.0.Arrow.CSVReadOptions */
    allowNewlinesInValues: boolean
    allowNullStrings: boolean
    blockSize: number
    checkUtf8: boolean
    delimiter: number
    escapeCharacter: number
    generateColumnNames: boolean
    ignoreEmptyLines: boolean
    isDoubleQuoted: boolean
    isEscaped: boolean
    isQuoted: boolean
    nSkipRows: number
    quoteCharacter: number
    useThreads: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.CSVReadOptions */
    addColumnName(columnName: string): void
    addColumnType(name: string, dataType: DataType): void
    addFalseValue(falseValue: string): void
    addNullValue(nullValue: string): void
    addSchema(schema: Schema): void
    addTrueValue(trueValue: string): void
    getColumnNames(): string[] | null
    getColumnTypes(): GLib.HashTable
    getFalseValues(): string[] | null
    getNullValues(): string[] | null
    getTrueValues(): string[] | null
    setColumnNames(columnNames: string[]): void
    setFalseValues(falseValues: string[]): void
    setNullValues(nullValues: string[]): void
    setTrueValues(trueValues: string[]): void
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
    connect(sigName: "notify::allow-newlines-in-values", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-newlines-in-values", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-newlines-in-values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-newlines-in-values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-newlines-in-values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allow-null-strings", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-null-strings", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-null-strings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-null-strings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-null-strings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::block-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::block-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::block-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::block-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::block-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::check-utf8", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::check-utf8", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::check-utf8", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::check-utf8", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::check-utf8", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::delimiter", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delimiter", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::delimiter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::delimiter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::delimiter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::escape-character", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::escape-character", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::escape-character", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::escape-character", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::escape-character", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::generate-column-names", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generate-column-names", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::generate-column-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::generate-column-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::generate-column-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ignore-empty-lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-empty-lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ignore-empty-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ignore-empty-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ignore-empty-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-double-quoted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-double-quoted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-double-quoted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-double-quoted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-double-quoted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-escaped", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-escaped", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-escaped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-escaped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-escaped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-quoted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-quoted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-quoted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-quoted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-quoted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-skip-rows", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-skip-rows", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-skip-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-skip-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-skip-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quote-character", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quote-character", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quote-character", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quote-character", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quote-character", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-threads", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-threads", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CSVReadOptions_ConstructProps)
    _init (config?: CSVReadOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CSVReadOptions
    static $gtype: GObject.Type
}
interface CSVReader_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.CSVReader */
    csvTableReader?: object
}
class CSVReader {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.CSVReader */
    read(): Table | null
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
    constructor (config?: CSVReader_ConstructProps)
    _init (config?: CSVReader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(input: InputStream, options?: CSVReadOptions | null): CSVReader
    static $gtype: GObject.Type
}
interface CastOptions_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.CastOptions */
    allowDecimalTruncate?: boolean
    allowFloatTruncate?: boolean
    allowIntOverflow?: boolean
    allowInvalidUtf8?: boolean
    allowTimeOverflow?: boolean
    allowTimeTruncate?: boolean
    toDataType?: DataType
}
class CastOptions {
    /* Properties of Arrow-1.0.Arrow.CastOptions */
    allowDecimalTruncate: boolean
    allowFloatTruncate: boolean
    allowIntOverflow: boolean
    allowInvalidUtf8: boolean
    allowTimeOverflow: boolean
    allowTimeTruncate: boolean
    toDataType: DataType
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
    connect(sigName: "notify::allow-decimal-truncate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-decimal-truncate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-decimal-truncate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-decimal-truncate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-decimal-truncate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allow-float-truncate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-float-truncate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-float-truncate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-float-truncate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-float-truncate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allow-int-overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-int-overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-int-overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-int-overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-int-overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allow-invalid-utf8", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-invalid-utf8", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-invalid-utf8", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-invalid-utf8", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-invalid-utf8", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allow-time-overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-time-overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-time-overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-time-overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-time-overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allow-time-truncate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-time-truncate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-time-truncate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-time-truncate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-time-truncate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::to-data-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::to-data-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::to-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::to-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::to-data-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CastOptions_ConstructProps)
    _init (config?: CastOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CastOptions
    static $gtype: GObject.Type
}
interface ChunkedArray_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.ChunkedArray */
    chunkedArray?: object
}
class ChunkedArray {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ChunkedArray */
    equal(otherChunkedArray: ChunkedArray): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): ChunkedArray | null
    filterChunkedArray(filter: ChunkedArray, options?: FilterOptions | null): ChunkedArray | null
    getChunk(i: number): Array
    getChunks(): Array[]
    getLength(): number
    getNChunks(): number
    getNNulls(): number
    getNRows(): number
    getValueDataType(): DataType
    getValueType(): Type
    slice(offset: number, length: number): ChunkedArray
    sortIndices(order: SortOrder): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): ChunkedArray | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
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
    constructor (config?: ChunkedArray_ConstructProps)
    _init (config?: ChunkedArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(chunks: Array[]): ChunkedArray
    static $gtype: GObject.Type
}
interface ChunkedArrayDatum_ConstructProps extends Datum_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.ChunkedArrayDatum */
    value?: ChunkedArray
}
class ChunkedArrayDatum {
    /* Fields of Arrow-1.0.Arrow.Datum */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Datum */
    equal(otherDatum: Datum): boolean
    isArray(): boolean
    isArrayLike(): boolean
    toString(): string
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
    constructor (config?: ChunkedArrayDatum_ConstructProps)
    _init (config?: ChunkedArrayDatum_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: ChunkedArray): ChunkedArrayDatum
    static $gtype: GObject.Type
}
interface Codec_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.Codec */
    codec?: object
}
class Codec {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Codec */
    getCompressionLevel(): number
    getCompressionType(): CompressionType
    getName(): string
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
    constructor (config?: Codec_ConstructProps)
    _init (config?: Codec_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: CompressionType): Codec
    static $gtype: GObject.Type
}
interface CompareOptions_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.CompareOptions */
    operator?: CompareOperator
}
class CompareOptions {
    /* Properties of Arrow-1.0.Arrow.CompareOptions */
    operator: CompareOperator
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
    connect(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CompareOptions_ConstructProps)
    _init (config?: CompareOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CompareOptions
    static $gtype: GObject.Type
}
interface CompressedInputStream_ConstructProps extends InputStream_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.CompressedInputStream */
    codec?: Codec
    raw?: InputStream
}
class CompressedInputStream {
    /* Fields of Arrow-1.0.Arrow.InputStream */
    readonly parentInstance: Gio.InputStream
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.InputStream */
    advance(nBytes: number): boolean
    align(alignment: number): boolean
    readRecordBatch(schema: Schema, options?: ReadOptions | null): RecordBatch | null
    readTensor(): Tensor | null
    /* Methods of Gio-2.0.Gio.InputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    readAll(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array
    readAllFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array
    readBytes(count: number, cancellable?: Gio.Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readBytesFinish(result: Gio.AsyncResult): any
    readFinish(result: Gio.AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skipFinish(result: Gio.AsyncResult): number
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
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    getMode(): FileMode
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Readable */
    read(nBytes: number): Buffer | null
    readBytes(nBytes: number): any | null
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
    constructor (config?: CompressedInputStream_ConstructProps)
    _init (config?: CompressedInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(codec: Codec, raw: InputStream): CompressedInputStream
    static $gtype: GObject.Type
}
interface CompressedOutputStream_ConstructProps extends OutputStream_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.CompressedOutputStream */
    codec?: Codec
    raw?: OutputStream
}
class CompressedOutputStream {
    /* Fields of Arrow-1.0.Arrow.OutputStream */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.OutputStream */
    align(alignment: number): boolean
    writeRecordBatch(recordBatch: RecordBatch, options?: WriteOptions | null): number
    writeTensor(tensor: Tensor): number
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
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    getMode(): FileMode
    isClosed(): boolean
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Writable */
    flush(): boolean
    write(data: Uint8Array): boolean
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
    constructor (config?: CompressedOutputStream_ConstructProps)
    _init (config?: CompressedOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(codec: Codec, raw: OutputStream): CompressedOutputStream
    static $gtype: GObject.Type
}
interface CountOptions_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.CountOptions */
    mode?: CountMode
}
class CountOptions {
    /* Properties of Arrow-1.0.Arrow.CountOptions */
    mode: CountMode
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
    connect(sigName: "notify::mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CountOptions_ConstructProps)
    _init (config?: CountOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CountOptions
    static $gtype: GObject.Type
}
interface DataType_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.DataType */
    dataType?: object
}
class DataType {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: DataType_ConstructProps)
    _init (config?: DataType_ConstructProps): void
    static $gtype: GObject.Type
}
interface Date32Array_ConstructProps extends NumericArray_ConstructProps {
}
class Date32Array {
    /* Fields of Arrow-1.0.Arrow.NumericArray */
    readonly parentInstance: PrimitiveArray
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Date32Array */
    getValue(i: number): number
    getValues(): number[]
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: Date32Array_ConstructProps)
    _init (config?: Date32Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Date32Array
    static $gtype: GObject.Type
}
interface Date32ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class Date32ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Date32ArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: Date32ArrayBuilder_ConstructProps)
    _init (config?: Date32ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Date32ArrayBuilder
    static $gtype: GObject.Type
}
interface Date32DataType_ConstructProps extends DataType_ConstructProps {
}
class Date32DataType {
    /* Fields of Arrow-1.0.Arrow.DataType */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: Date32DataType_ConstructProps)
    _init (config?: Date32DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Date32DataType
    static $gtype: GObject.Type
}
interface Date64Array_ConstructProps extends NumericArray_ConstructProps {
}
class Date64Array {
    /* Fields of Arrow-1.0.Arrow.NumericArray */
    readonly parentInstance: PrimitiveArray
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Date64Array */
    getValue(i: number): number
    getValues(): number[]
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: Date64Array_ConstructProps)
    _init (config?: Date64Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Date64Array
    static $gtype: GObject.Type
}
interface Date64ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class Date64ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Date64ArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: Date64ArrayBuilder_ConstructProps)
    _init (config?: Date64ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Date64ArrayBuilder
    static $gtype: GObject.Type
}
interface Date64DataType_ConstructProps extends DataType_ConstructProps {
}
class Date64DataType {
    /* Fields of Arrow-1.0.Arrow.DataType */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: Date64DataType_ConstructProps)
    _init (config?: Date64DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Date64DataType
    static $gtype: GObject.Type
}
interface Datum_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.Datum */
    datum?: object
}
class Datum {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Datum */
    equal(otherDatum: Datum): boolean
    isArray(): boolean
    isArrayLike(): boolean
    toString(): string
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
    constructor (config?: Datum_ConstructProps)
    _init (config?: Datum_ConstructProps): void
    static $gtype: GObject.Type
}
interface Decimal128_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.Decimal128 */
    decimal128?: object
}
class Decimal128 {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Decimal128 */
    abs(): void
    copy(): Decimal128
    divide(right: Decimal128): [ /* returnType */ Decimal128 | null, /* remainder */ Decimal128 | null ]
    equal(otherDecimal: Decimal128): boolean
    greaterThan(otherDecimal: Decimal128): boolean
    greaterThanOrEqual(otherDecimal: Decimal128): boolean
    lessThan(otherDecimal: Decimal128): boolean
    lessThanOrEqual(otherDecimal: Decimal128): boolean
    minus(right: Decimal128): Decimal128
    multiply(right: Decimal128): Decimal128
    negate(): void
    notEqual(otherDecimal: Decimal128): boolean
    plus(right: Decimal128): Decimal128
    rescale(originalScale: number, newScale: number): Decimal128 | null
    toBytes(): any
    toInteger(): number
    toString(): string
    toStringScale(scale: number): string
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
    constructor (config?: Decimal128_ConstructProps)
    _init (config?: Decimal128_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newInteger(data: number): Decimal128
    static newString(data: string): Decimal128
    static $gtype: GObject.Type
}
interface Decimal128Array_ConstructProps extends FixedSizeBinaryArray_ConstructProps {
}
class Decimal128Array {
    /* Fields of Arrow-1.0.Arrow.FixedSizeBinaryArray */
    readonly parentInstance: PrimitiveArray
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Decimal128Array */
    formatValue(i: number): string
    getValue(i: number): Decimal128
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryArray */
    getByteWidth(): number
    getValue(i: number): any
    getValuesBytes(): any
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: Decimal128Array_ConstructProps)
    _init (config?: Decimal128Array_ConstructProps): void
    static $gtype: GObject.Type
}
interface Decimal128ArrayBuilder_ConstructProps extends FixedSizeBinaryArrayBuilder_ConstructProps {
}
class Decimal128ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder */
    readonly parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Decimal128ArrayBuilder */
    append(value: Decimal128): boolean
    appendValue(value?: Decimal128 | null): boolean
    appendValues(values: Decimal128[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder */
    appendValue(value: Uint8Array | null): boolean
    appendValueBytes(value: any): boolean
    appendValues(values: any[], isValids: boolean[] | null): boolean
    appendValuesPacked(values: any, isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: Decimal128ArrayBuilder_ConstructProps)
    _init (config?: Decimal128ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: Decimal128DataType): Decimal128ArrayBuilder
    /* Function overloads */
    static new(dataType: FixedSizeBinaryDataType): Decimal128ArrayBuilder
    static $gtype: GObject.Type
}
interface Decimal128DataType_ConstructProps extends DecimalDataType_ConstructProps {
}
class Decimal128DataType {
    /* Fields of Arrow-1.0.Arrow.DecimalDataType */
    readonly parentInstance: FixedSizeBinaryDataType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DecimalDataType */
    getPrecision(): number
    getScale(): number
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryDataType */
    getByteWidth(): number
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: Decimal128DataType_ConstructProps)
    _init (config?: Decimal128DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(precision: number, scale: number): Decimal128DataType
    /* Function overloads */
    static new(precision: number, scale: number): Decimal128DataType
    static new(byteWidth: number): Decimal128DataType
    static maxPrecision(): number
    static $gtype: GObject.Type
}
interface Decimal256_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.Decimal256 */
    decimal256?: object
}
class Decimal256 {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Decimal256 */
    abs(): void
    copy(): Decimal256
    divide(right: Decimal256): [ /* returnType */ Decimal256 | null, /* remainder */ Decimal256 | null ]
    equal(otherDecimal: Decimal256): boolean
    greaterThan(otherDecimal: Decimal256): boolean
    greaterThanOrEqual(otherDecimal: Decimal256): boolean
    lessThan(otherDecimal: Decimal256): boolean
    lessThanOrEqual(otherDecimal: Decimal256): boolean
    multiply(right: Decimal256): Decimal256
    negate(): void
    notEqual(otherDecimal: Decimal256): boolean
    plus(right: Decimal256): Decimal256
    rescale(originalScale: number, newScale: number): Decimal256 | null
    toBytes(): any
    toString(): string
    toStringScale(scale: number): string
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
    constructor (config?: Decimal256_ConstructProps)
    _init (config?: Decimal256_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newInteger(data: number): Decimal256
    static newString(data: string): Decimal256
    static $gtype: GObject.Type
}
interface Decimal256Array_ConstructProps extends FixedSizeBinaryArray_ConstructProps {
}
class Decimal256Array {
    /* Fields of Arrow-1.0.Arrow.FixedSizeBinaryArray */
    readonly parentInstance: PrimitiveArray
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Decimal256Array */
    formatValue(i: number): string
    getValue(i: number): Decimal256
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryArray */
    getByteWidth(): number
    getValue(i: number): any
    getValuesBytes(): any
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: Decimal256Array_ConstructProps)
    _init (config?: Decimal256Array_ConstructProps): void
    static $gtype: GObject.Type
}
interface Decimal256ArrayBuilder_ConstructProps extends FixedSizeBinaryArrayBuilder_ConstructProps {
}
class Decimal256ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder */
    readonly parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Decimal256ArrayBuilder */
    appendValue(value?: Decimal256 | null): boolean
    appendValues(values: Decimal256[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder */
    appendValue(value: Uint8Array | null): boolean
    appendValueBytes(value: any): boolean
    appendValues(values: any[], isValids: boolean[] | null): boolean
    appendValuesPacked(values: any, isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: Decimal256ArrayBuilder_ConstructProps)
    _init (config?: Decimal256ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: Decimal256DataType): Decimal256ArrayBuilder
    /* Function overloads */
    static new(dataType: FixedSizeBinaryDataType): Decimal256ArrayBuilder
    static $gtype: GObject.Type
}
interface Decimal256DataType_ConstructProps extends DecimalDataType_ConstructProps {
}
class Decimal256DataType {
    /* Fields of Arrow-1.0.Arrow.DecimalDataType */
    readonly parentInstance: FixedSizeBinaryDataType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DecimalDataType */
    getPrecision(): number
    getScale(): number
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryDataType */
    getByteWidth(): number
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: Decimal256DataType_ConstructProps)
    _init (config?: Decimal256DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(precision: number, scale: number): Decimal256DataType
    /* Function overloads */
    static new(precision: number, scale: number): Decimal256DataType
    static new(byteWidth: number): Decimal256DataType
    static maxPrecision(): number
    static $gtype: GObject.Type
}
interface DecimalDataType_ConstructProps extends FixedSizeBinaryDataType_ConstructProps {
}
class DecimalDataType {
    /* Fields of Arrow-1.0.Arrow.FixedSizeBinaryDataType */
    readonly parentInstance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DecimalDataType */
    getPrecision(): number
    getScale(): number
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryDataType */
    getByteWidth(): number
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: DecimalDataType_ConstructProps)
    _init (config?: DecimalDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(precision: number, scale: number): DecimalDataType
    /* Function overloads */
    static new(byteWidth: number): DecimalDataType
    static $gtype: GObject.Type
}
interface DenseUnionArray_ConstructProps extends UnionArray_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.DenseUnionArray */
    valueOffsets?: Int32Array
}
class DenseUnionArray {
    /* Fields of Arrow-1.0.Arrow.UnionArray */
    readonly parentInstance: Array
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UnionArray */
    getField(i: number): Array | null
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: DenseUnionArray_ConstructProps)
    _init (config?: DenseUnionArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(typeIds: Int8Array, valueOffsets: Int32Array, fields: Array[]): DenseUnionArray
    static newDataType(dataType: DenseUnionDataType, typeIds: Int8Array, valueOffsets: Int32Array, fields: Array[]): DenseUnionArray
    static $gtype: GObject.Type
}
interface DenseUnionDataType_ConstructProps extends UnionDataType_ConstructProps {
}
class DenseUnionDataType {
    /* Fields of Arrow-1.0.Arrow.UnionDataType */
    readonly parentInstance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UnionDataType */
    getField(i: number): Field | null
    getFields(): Field[]
    getNFields(): number
    getTypeCodes(): Uint8Array
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: DenseUnionDataType_ConstructProps)
    _init (config?: DenseUnionDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fields: Field[], typeCodes: Uint8Array): DenseUnionDataType
    static $gtype: GObject.Type
}
interface DictionaryArray_ConstructProps extends Array_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.DictionaryArray */
    dictionary?: Array
    indices?: Array
}
class DictionaryArray {
    /* Fields of Arrow-1.0.Arrow.Array */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DictionaryArray */
    getDictionary(): Array
    getDictionaryDataType(): DictionaryDataType
    getIndices(): Array
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: DictionaryArray_ConstructProps)
    _init (config?: DictionaryArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: DataType, indices: Array, dictionary: Array): DictionaryArray
    static $gtype: GObject.Type
}
interface DictionaryDataType_ConstructProps extends FixedWidthDataType_ConstructProps {
}
class DictionaryDataType {
    /* Fields of Arrow-1.0.Arrow.FixedWidthDataType */
    readonly parentInstance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DictionaryDataType */
    getIndexDataType(): DataType
    getValueDataType(): DataType
    isOrdered(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: DictionaryDataType_ConstructProps)
    _init (config?: DictionaryDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(indexDataType: DataType, valueDataType: DataType, ordered: boolean): DictionaryDataType
    static $gtype: GObject.Type
}
interface DoubleArray_ConstructProps extends NumericArray_ConstructProps {
}
class DoubleArray {
    /* Fields of Arrow-1.0.Arrow.NumericArray */
    readonly parentInstance: PrimitiveArray
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DoubleArray */
    compare(value: number, options: CompareOptions): BooleanArray | null
    getValue(i: number): number
    getValues(): number[]
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: DoubleArray_ConstructProps)
    _init (config?: DoubleArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): DoubleArray
    static $gtype: GObject.Type
}
interface DoubleArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class DoubleArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DoubleArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: DoubleArrayBuilder_ConstructProps)
    _init (config?: DoubleArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DoubleArrayBuilder
    static $gtype: GObject.Type
}
interface DoubleDataType_ConstructProps extends FloatingPointDataType_ConstructProps {
}
class DoubleDataType {
    /* Fields of Arrow-1.0.Arrow.FloatingPointDataType */
    readonly parentInstance: NumericDataType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: DoubleDataType_ConstructProps)
    _init (config?: DoubleDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DoubleDataType
    static $gtype: GObject.Type
}
interface ExecuteContext_ConstructProps extends GObject.Object_ConstructProps {
}
class ExecuteContext {
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
    constructor (config?: ExecuteContext_ConstructProps)
    _init (config?: ExecuteContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ExecuteContext
    static $gtype: GObject.Type
}
interface ExtensionArray_ConstructProps extends Array_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.ExtensionArray */
    storage?: Array
}
class ExtensionArray {
    /* Fields of Arrow-1.0.Arrow.Array */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ExtensionArray */
    getStorage(): Array
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: ExtensionArray_ConstructProps)
    _init (config?: ExtensionArray_ConstructProps): void
    static $gtype: GObject.Type
}
interface ExtensionDataType_ConstructProps extends DataType_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.ExtensionDataType */
    storageDataType?: DataType
}
class ExtensionDataType {
    /* Fields of Arrow-1.0.Arrow.DataType */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ExtensionDataType */
    getExtensionName(): string
    wrapArray(storage: Array): ExtensionArray
    wrapChunkedArray(storage: ChunkedArray): ChunkedArray
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: ExtensionDataType_ConstructProps)
    _init (config?: ExtensionDataType_ConstructProps): void
    static $gtype: GObject.Type
}
interface ExtensionDataTypeRegistry_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.ExtensionDataTypeRegistry */
    registry?: object
}
class ExtensionDataTypeRegistry {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ExtensionDataTypeRegistry */
    lookup(name: string): ExtensionDataType
    register(dataType: ExtensionDataType): boolean
    unregister(name: string): boolean
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
    constructor (config?: ExtensionDataTypeRegistry_ConstructProps)
    _init (config?: ExtensionDataTypeRegistry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static default(): ExtensionDataTypeRegistry
    static $gtype: GObject.Type
}
interface FeatherFileReader_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.FeatherFileReader */
    featherReader?: object
}
class FeatherFileReader {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FeatherFileReader */
    getVersion(): number
    read(): Table
    readIndices(indices: number[]): Table
    readNames(names: string[]): Table
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
    constructor (config?: FeatherFileReader_ConstructProps)
    _init (config?: FeatherFileReader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(file: SeekableInputStream): FeatherFileReader
    static $gtype: GObject.Type
}
interface FeatherWriteProperties_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.FeatherWriteProperties */
    compression?: CompressionType
}
class FeatherWriteProperties {
    /* Properties of Arrow-1.0.Arrow.FeatherWriteProperties */
    compression: CompressionType
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
    connect(sigName: "notify::compression", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compression", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FeatherWriteProperties_ConstructProps)
    _init (config?: FeatherWriteProperties_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FeatherWriteProperties
    static $gtype: GObject.Type
}
interface Field_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.Field */
    dataType?: DataType
    field?: object
}
class Field {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Field */
    equal(otherField: Field): boolean
    getDataType(): DataType
    getMetadata(): GLib.HashTable | null
    getName(): string
    hasMetadata(): boolean
    isNullable(): boolean
    removeMetadata(): Field
    toString(): string
    toStringMetadata(showMetadata: boolean): string
    withMergedMetadata(metadata: GLib.HashTable): Field
    withMetadata(metadata: GLib.HashTable): Field
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
    constructor (config?: Field_ConstructProps)
    _init (config?: Field_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, dataType: DataType): Field
    static newFull(name: string, dataType: DataType, nullable: boolean): Field
    static $gtype: GObject.Type
}
interface FileInfo_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.FileInfo */
    mtime?: number
    path?: string
    size?: number
    type?: FileType
}
class FileInfo {
    /* Properties of Arrow-1.0.Arrow.FileInfo */
    readonly baseName: string
    readonly dirName: string
    readonly extension: string
    mtime: number
    path: string
    size: number
    type: FileType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FileInfo */
    equal(otherFileInfo: FileInfo): boolean
    isDir(): boolean
    isFile(): boolean
    toString(): string
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
    connect(sigName: "notify::base-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::base-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::base-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::base-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dir-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dir-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dir-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dir-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dir-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::extension", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extension", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: FileInfo_ConstructProps)
    _init (config?: FileInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FileInfo
    static $gtype: GObject.Type
}
interface FileOutputStream_ConstructProps extends OutputStream_ConstructProps {
}
class FileOutputStream {
    /* Fields of Arrow-1.0.Arrow.OutputStream */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.OutputStream */
    align(alignment: number): boolean
    writeRecordBatch(recordBatch: RecordBatch, options?: WriteOptions | null): number
    writeTensor(tensor: Tensor): number
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
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    getMode(): FileMode
    isClosed(): boolean
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Writable */
    flush(): boolean
    write(data: Uint8Array): boolean
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
    constructor (config?: FileOutputStream_ConstructProps)
    _init (config?: FileOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string, append: boolean): FileOutputStream
    static $gtype: GObject.Type
}
interface FileSelector_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.FileSelector */
    allowNotFound?: boolean
    baseDir?: string
    maxRecursion?: number
    recursive?: boolean
}
class FileSelector {
    /* Properties of Arrow-1.0.Arrow.FileSelector */
    allowNotFound: boolean
    baseDir: string
    maxRecursion: number
    recursive: boolean
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
    connect(sigName: "notify::allow-not-found", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-not-found", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-not-found", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-not-found", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-not-found", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::base-dir", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-dir", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::base-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::base-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::base-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-recursion", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-recursion", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-recursion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-recursion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-recursion", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: FileSelector_ConstructProps)
    _init (config?: FileSelector_ConstructProps): void
    static $gtype: GObject.Type
}
interface FileSystem_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.FileSystem */
    fileSystem?: object
}
class FileSystem {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FileSystem */
    copyFile(src: string, dest: string): boolean
    createDir(path: string, recursive: boolean): boolean
    deleteDir(path: string): boolean
    deleteDirContents(path: string): boolean
    deleteFile(path: string): boolean
    deleteFiles(paths: string[]): boolean
    getFileInfo(path: string): FileInfo | null
    getFileInfosPaths(paths: string[]): FileInfo[]
    getFileInfosSelector(fileSelector: FileSelector): FileInfo[]
    getTypeName(): string
    move(src: string, dest: string): boolean
    openAppendStream(path: string): OutputStream | null
    openInputFile(path: string): SeekableInputStream | null
    openInputStream(path: string): InputStream | null
    openOutputStream(path: string): OutputStream | null
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
    constructor (config?: FileSystem_ConstructProps)
    _init (config?: FileSystem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static create(uri: string): FileSystem | null
    static $gtype: GObject.Type
}
interface FilterOptions_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.FilterOptions */
    nullSelectionBehavior?: FilterNullSelectionBehavior
}
class FilterOptions {
    /* Properties of Arrow-1.0.Arrow.FilterOptions */
    nullSelectionBehavior: FilterNullSelectionBehavior
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
    connect(sigName: "notify::null-selection-behavior", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::null-selection-behavior", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::null-selection-behavior", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::null-selection-behavior", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::null-selection-behavior", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FilterOptions_ConstructProps)
    _init (config?: FilterOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FilterOptions
    static $gtype: GObject.Type
}
interface FixedSizeBinaryArray_ConstructProps extends PrimitiveArray_ConstructProps {
}
class FixedSizeBinaryArray {
    /* Fields of Arrow-1.0.Arrow.PrimitiveArray */
    readonly parentInstance: Array
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryArray */
    getByteWidth(): number
    getValue(i: number): any
    getValuesBytes(): any
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: FixedSizeBinaryArray_ConstructProps)
    _init (config?: FixedSizeBinaryArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: FixedSizeBinaryDataType, length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): FixedSizeBinaryArray
    static $gtype: GObject.Type
}
interface FixedSizeBinaryArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class FixedSizeBinaryArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilder */
    appendValue(value: Uint8Array | null): boolean
    appendValueBytes(value: any): boolean
    appendValues(values: any[], isValids: boolean[] | null): boolean
    appendValuesPacked(values: any, isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: FixedSizeBinaryArrayBuilder_ConstructProps)
    _init (config?: FixedSizeBinaryArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: FixedSizeBinaryDataType): FixedSizeBinaryArrayBuilder
    static $gtype: GObject.Type
}
interface FixedSizeBinaryDataType_ConstructProps extends FixedWidthDataType_ConstructProps {
}
class FixedSizeBinaryDataType {
    /* Fields of Arrow-1.0.Arrow.FixedWidthDataType */
    readonly parentInstance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FixedSizeBinaryDataType */
    getByteWidth(): number
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: FixedSizeBinaryDataType_ConstructProps)
    _init (config?: FixedSizeBinaryDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(byteWidth: number): FixedSizeBinaryDataType
    static $gtype: GObject.Type
}
interface FixedWidthDataType_ConstructProps extends DataType_ConstructProps {
}
class FixedWidthDataType {
    /* Fields of Arrow-1.0.Arrow.DataType */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: FixedWidthDataType_ConstructProps)
    _init (config?: FixedWidthDataType_ConstructProps): void
    static $gtype: GObject.Type
}
interface FloatArray_ConstructProps extends NumericArray_ConstructProps {
}
class FloatArray {
    /* Fields of Arrow-1.0.Arrow.NumericArray */
    readonly parentInstance: PrimitiveArray
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FloatArray */
    compare(value: number, options: CompareOptions): BooleanArray | null
    getValue(i: number): number
    getValues(): number[]
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: FloatArray_ConstructProps)
    _init (config?: FloatArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): FloatArray
    static $gtype: GObject.Type
}
interface FloatArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class FloatArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FloatArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: FloatArrayBuilder_ConstructProps)
    _init (config?: FloatArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FloatArrayBuilder
    static $gtype: GObject.Type
}
interface FloatDataType_ConstructProps extends FloatingPointDataType_ConstructProps {
}
class FloatDataType {
    /* Fields of Arrow-1.0.Arrow.FloatingPointDataType */
    readonly parentInstance: NumericDataType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: FloatDataType_ConstructProps)
    _init (config?: FloatDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FloatDataType
    static $gtype: GObject.Type
}
interface FloatingPointDataType_ConstructProps extends NumericDataType_ConstructProps {
}
class FloatingPointDataType {
    /* Fields of Arrow-1.0.Arrow.NumericDataType */
    readonly parentInstance: FixedWidthDataType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: FloatingPointDataType_ConstructProps)
    _init (config?: FloatingPointDataType_ConstructProps): void
    static $gtype: GObject.Type
}
interface Function_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.Function */
    "function"?: object
}
class Function {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Function */
    execute(args: Datum[], options?: FunctionOptions | null, context?: ExecuteContext | null): Datum | null
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
    constructor (config?: Function_ConstructProps)
    _init (config?: Function_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static find(name: string): Function
    static $gtype: GObject.Type
}
interface GIOInputStream_ConstructProps extends SeekableInputStream_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.GIOInputStream */
    raw?: Gio.InputStream
}
class GIOInputStream {
    /* Fields of Arrow-1.0.Arrow.SeekableInputStream */
    readonly parentInstance: InputStream
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.GIOInputStream */
    getRaw(): Gio.InputStream
    /* Methods of Arrow-1.0.Arrow.SeekableInputStream */
    getSize(): number
    getSupportZeroCopy(): boolean
    peek(nBytes: number): any
    readAt(position: number, nBytes: number): Buffer | null
    readAtBytes(position: number, nBytes: number): any | null
    /* Methods of Arrow-1.0.Arrow.InputStream */
    advance(nBytes: number): boolean
    align(alignment: number): boolean
    readRecordBatch(schema: Schema, options?: ReadOptions | null): RecordBatch | null
    readTensor(): Tensor | null
    /* Methods of Gio-2.0.Gio.InputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    readAll(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array
    readAllFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array
    readBytes(count: number, cancellable?: Gio.Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readBytesFinish(result: Gio.AsyncResult): any
    readFinish(result: Gio.AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skipFinish(result: Gio.AsyncResult): number
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
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    getMode(): FileMode
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Readable */
    read(nBytes: number): Buffer | null
    readBytes(nBytes: number): any | null
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
    constructor (config?: GIOInputStream_ConstructProps)
    _init (config?: GIOInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gioInputStream: Gio.InputStream): GIOInputStream
    static $gtype: GObject.Type
}
interface GIOOutputStream_ConstructProps extends OutputStream_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.GIOOutputStream */
    raw?: Gio.OutputStream
}
class GIOOutputStream {
    /* Fields of Arrow-1.0.Arrow.OutputStream */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.GIOOutputStream */
    getRaw(): Gio.OutputStream
    /* Methods of Arrow-1.0.Arrow.OutputStream */
    align(alignment: number): boolean
    writeRecordBatch(recordBatch: RecordBatch, options?: WriteOptions | null): number
    writeTensor(tensor: Tensor): number
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
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    getMode(): FileMode
    isClosed(): boolean
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Writable */
    flush(): boolean
    write(data: Uint8Array): boolean
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
    constructor (config?: GIOOutputStream_ConstructProps)
    _init (config?: GIOOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(gioOutputStream: Gio.OutputStream): GIOOutputStream
    static $gtype: GObject.Type
}
interface HDFSFileSystem_ConstructProps extends FileSystem_ConstructProps {
}
class HDFSFileSystem {
    /* Fields of Arrow-1.0.Arrow.FileSystem */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FileSystem */
    copyFile(src: string, dest: string): boolean
    createDir(path: string, recursive: boolean): boolean
    deleteDir(path: string): boolean
    deleteDirContents(path: string): boolean
    deleteFile(path: string): boolean
    deleteFiles(paths: string[]): boolean
    getFileInfo(path: string): FileInfo | null
    getFileInfosPaths(paths: string[]): FileInfo[]
    getFileInfosSelector(fileSelector: FileSelector): FileInfo[]
    getTypeName(): string
    move(src: string, dest: string): boolean
    openAppendStream(path: string): OutputStream | null
    openInputFile(path: string): SeekableInputStream | null
    openInputStream(path: string): InputStream | null
    openOutputStream(path: string): OutputStream | null
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
    constructor (config?: HDFSFileSystem_ConstructProps)
    _init (config?: HDFSFileSystem_ConstructProps): void
    static $gtype: GObject.Type
}
interface InputStream_ConstructProps extends Gio.InputStream_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.InputStream */
    inputStream?: object
}
class InputStream {
    /* Fields of Gio-2.0.Gio.InputStream */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.InputStream */
    advance(nBytes: number): boolean
    align(alignment: number): boolean
    readRecordBatch(schema: Schema, options?: ReadOptions | null): RecordBatch | null
    readTensor(): Tensor | null
    /* Methods of Gio-2.0.Gio.InputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    readAll(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array
    readAllFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array
    readBytes(count: number, cancellable?: Gio.Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readBytesFinish(result: Gio.AsyncResult): any
    readFinish(result: Gio.AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skipFinish(result: Gio.AsyncResult): number
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
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    getMode(): FileMode
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Readable */
    read(nBytes: number): Buffer | null
    readBytes(nBytes: number): any | null
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
    constructor (config?: InputStream_ConstructProps)
    _init (config?: InputStream_ConstructProps): void
    static $gtype: GObject.Type
}
interface Int16Array_ConstructProps extends NumericArray_ConstructProps {
}
class Int16Array {
    /* Fields of Arrow-1.0.Arrow.NumericArray */
    readonly parentInstance: PrimitiveArray
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Int16Array */
    compare(value: number, options: CompareOptions): BooleanArray | null
    getValue(i: number): number
    getValues(): number[]
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: Int16Array_ConstructProps)
    _init (config?: Int16Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Int16Array
    static $gtype: GObject.Type
}
interface Int16ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class Int16ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Int16ArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: Int16ArrayBuilder_ConstructProps)
    _init (config?: Int16ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Int16ArrayBuilder
    static $gtype: GObject.Type
}
interface Int16DataType_ConstructProps extends IntegerDataType_ConstructProps {
}
class Int16DataType {
    /* Fields of Arrow-1.0.Arrow.IntegerDataType */
    readonly parentInstance: NumericDataType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntegerDataType */
    isSigned(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: Int16DataType_ConstructProps)
    _init (config?: Int16DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Int16DataType
    static $gtype: GObject.Type
}
interface Int32Array_ConstructProps extends NumericArray_ConstructProps {
}
class Int32Array {
    /* Fields of Arrow-1.0.Arrow.NumericArray */
    readonly parentInstance: PrimitiveArray
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Int32Array */
    compare(value: number, options: CompareOptions): BooleanArray | null
    getValue(i: number): number
    getValues(): number[]
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: Int32Array_ConstructProps)
    _init (config?: Int32Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Int32Array
    static $gtype: GObject.Type
}
interface Int32ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class Int32ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Int32ArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: Int32ArrayBuilder_ConstructProps)
    _init (config?: Int32ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Int32ArrayBuilder
    static $gtype: GObject.Type
}
interface Int32DataType_ConstructProps extends IntegerDataType_ConstructProps {
}
class Int32DataType {
    /* Fields of Arrow-1.0.Arrow.IntegerDataType */
    readonly parentInstance: NumericDataType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntegerDataType */
    isSigned(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: Int32DataType_ConstructProps)
    _init (config?: Int32DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Int32DataType
    static $gtype: GObject.Type
}
interface Int64Array_ConstructProps extends NumericArray_ConstructProps {
}
class Int64Array {
    /* Fields of Arrow-1.0.Arrow.NumericArray */
    readonly parentInstance: PrimitiveArray
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Int64Array */
    compare(value: number, options: CompareOptions): BooleanArray | null
    getValue(i: number): number
    getValues(): number[]
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: Int64Array_ConstructProps)
    _init (config?: Int64Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Int64Array
    static $gtype: GObject.Type
}
interface Int64ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class Int64ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Int64ArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: Int64ArrayBuilder_ConstructProps)
    _init (config?: Int64ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Int64ArrayBuilder
    static $gtype: GObject.Type
}
interface Int64DataType_ConstructProps extends IntegerDataType_ConstructProps {
}
class Int64DataType {
    /* Fields of Arrow-1.0.Arrow.IntegerDataType */
    readonly parentInstance: NumericDataType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntegerDataType */
    isSigned(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: Int64DataType_ConstructProps)
    _init (config?: Int64DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Int64DataType
    static $gtype: GObject.Type
}
interface Int8Array_ConstructProps extends NumericArray_ConstructProps {
}
class Int8Array {
    /* Fields of Arrow-1.0.Arrow.NumericArray */
    readonly parentInstance: PrimitiveArray
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Int8Array */
    compare(value: number, options: CompareOptions): BooleanArray | null
    getValue(i: number): number
    getValues(): Uint8Array
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: Int8Array_ConstructProps)
    _init (config?: Int8Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Int8Array
    static $gtype: GObject.Type
}
interface Int8ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class Int8ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Int8ArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: Uint8Array, isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: Int8ArrayBuilder_ConstructProps)
    _init (config?: Int8ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Int8ArrayBuilder
    static $gtype: GObject.Type
}
interface Int8DataType_ConstructProps extends IntegerDataType_ConstructProps {
}
class Int8DataType {
    /* Fields of Arrow-1.0.Arrow.IntegerDataType */
    readonly parentInstance: NumericDataType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntegerDataType */
    isSigned(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: Int8DataType_ConstructProps)
    _init (config?: Int8DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Int8DataType
    static $gtype: GObject.Type
}
interface IntArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class IntArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: IntArrayBuilder_ConstructProps)
    _init (config?: IntArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IntArrayBuilder
    static $gtype: GObject.Type
}
interface IntegerDataType_ConstructProps extends NumericDataType_ConstructProps {
}
class IntegerDataType {
    /* Fields of Arrow-1.0.Arrow.NumericDataType */
    readonly parentInstance: FixedWidthDataType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntegerDataType */
    isSigned(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: IntegerDataType_ConstructProps)
    _init (config?: IntegerDataType_ConstructProps): void
    static $gtype: GObject.Type
}
interface JSONReadOptions_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.JSONReadOptions */
    allowNewlinesInValues?: boolean
    blockSize?: number
    schema?: Schema
    unexpectedFieldBehavior?: JSONReadUnexpectedFieldBehavior
    useThreads?: boolean
}
class JSONReadOptions {
    /* Properties of Arrow-1.0.Arrow.JSONReadOptions */
    allowNewlinesInValues: boolean
    blockSize: number
    schema: Schema
    unexpectedFieldBehavior: JSONReadUnexpectedFieldBehavior
    useThreads: boolean
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
    connect(sigName: "notify::allow-newlines-in-values", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-newlines-in-values", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-newlines-in-values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-newlines-in-values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-newlines-in-values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::block-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::block-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::block-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::block-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::block-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::schema", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unexpected-field-behavior", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unexpected-field-behavior", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unexpected-field-behavior", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unexpected-field-behavior", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unexpected-field-behavior", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-threads", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-threads", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: JSONReadOptions_ConstructProps)
    _init (config?: JSONReadOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): JSONReadOptions
    static $gtype: GObject.Type
}
interface JSONReader_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.JSONReader */
    jsonTableReader?: object
}
class JSONReader {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.JSONReader */
    read(): Table | null
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
    constructor (config?: JSONReader_ConstructProps)
    _init (config?: JSONReader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(input: InputStream, options?: JSONReadOptions | null): JSONReader
    static $gtype: GObject.Type
}
interface LargeBinaryArray_ConstructProps extends Array_ConstructProps {
}
class LargeBinaryArray {
    /* Fields of Arrow-1.0.Arrow.Array */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.LargeBinaryArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    getOffsetsBuffer(): Buffer
    getValue(i: number): any
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: LargeBinaryArray_ConstructProps)
    _init (config?: LargeBinaryArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number): LargeBinaryArray
    static $gtype: GObject.Type
}
interface LargeBinaryArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class LargeBinaryArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.LargeBinaryArrayBuilder */
    appendValue(value: Uint8Array): boolean
    appendValueBytes(value: any): boolean
    appendValues(values: any[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: LargeBinaryArrayBuilder_ConstructProps)
    _init (config?: LargeBinaryArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LargeBinaryArrayBuilder
    static $gtype: GObject.Type
}
interface LargeBinaryDataType_ConstructProps extends DataType_ConstructProps {
}
class LargeBinaryDataType {
    /* Fields of Arrow-1.0.Arrow.DataType */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: LargeBinaryDataType_ConstructProps)
    _init (config?: LargeBinaryDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LargeBinaryDataType
    static $gtype: GObject.Type
}
interface LargeListArray_ConstructProps extends Array_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.LargeListArray */
    rawValues?: Array
}
class LargeListArray {
    /* Fields of Arrow-1.0.Arrow.Array */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.LargeListArray */
    getValue(i: number): Array
    getValueLength(i: number): number
    getValueOffset(i: number): number
    getValueOffsets(): number[]
    getValueType(): DataType
    getValues(): Array
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: LargeListArray_ConstructProps)
    _init (config?: LargeListArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: DataType, length: number, valueOffsets: Buffer, values: Array, nullBitmap: Buffer | null, nNulls: number): LargeListArray
    static $gtype: GObject.Type
}
interface LargeListArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class LargeListArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.LargeListArrayBuilder */
    appendValue(): boolean
    getValueBuilder(): ArrayBuilder
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: LargeListArrayBuilder_ConstructProps)
    _init (config?: LargeListArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: LargeListDataType): LargeListArrayBuilder
    static $gtype: GObject.Type
}
interface LargeListDataType_ConstructProps extends DataType_ConstructProps {
}
class LargeListDataType {
    /* Fields of Arrow-1.0.Arrow.DataType */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.LargeListDataType */
    getField(): Field
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: LargeListDataType_ConstructProps)
    _init (config?: LargeListDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(field: Field): LargeListDataType
    static $gtype: GObject.Type
}
interface LargeStringArray_ConstructProps extends LargeBinaryArray_ConstructProps {
}
class LargeStringArray {
    /* Fields of Arrow-1.0.Arrow.LargeBinaryArray */
    readonly parentInstance: Array
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.LargeStringArray */
    getString(i: number): string
    /* Methods of Arrow-1.0.Arrow.LargeBinaryArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    getOffsetsBuffer(): Buffer
    getValue(i: number): any
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: LargeStringArray_ConstructProps)
    _init (config?: LargeStringArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number): LargeStringArray
    /* Function overloads */
    static new(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number): LargeStringArray
    static $gtype: GObject.Type
}
interface LargeStringArrayBuilder_ConstructProps extends LargeBinaryArrayBuilder_ConstructProps {
}
class LargeStringArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.LargeBinaryArrayBuilder */
    readonly parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.LargeStringArrayBuilder */
    appendString(value: string): boolean
    appendStrings(values: string[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.LargeBinaryArrayBuilder */
    appendValue(value: Uint8Array): boolean
    appendValueBytes(value: any): boolean
    appendValues(values: any[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: LargeStringArrayBuilder_ConstructProps)
    _init (config?: LargeStringArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LargeStringArrayBuilder
    /* Function overloads */
    static new(): LargeStringArrayBuilder
    static $gtype: GObject.Type
}
interface LargeStringDataType_ConstructProps extends DataType_ConstructProps {
}
class LargeStringDataType {
    /* Fields of Arrow-1.0.Arrow.DataType */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: LargeStringDataType_ConstructProps)
    _init (config?: LargeStringDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LargeStringDataType
    static $gtype: GObject.Type
}
interface ListArray_ConstructProps extends Array_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.ListArray */
    rawValues?: Array
}
class ListArray {
    /* Fields of Arrow-1.0.Arrow.Array */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ListArray */
    getValue(i: number): Array
    getValueLength(i: number): number
    getValueOffset(i: number): number
    getValueOffsets(): number[]
    getValueType(): DataType
    getValues(): Array
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: ListArray_ConstructProps)
    _init (config?: ListArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: DataType, length: number, valueOffsets: Buffer, values: Array, nullBitmap: Buffer | null, nNulls: number): ListArray
    static $gtype: GObject.Type
}
interface ListArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class ListArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ListArrayBuilder */
    append(): boolean
    appendValue(): boolean
    getValueBuilder(): ArrayBuilder
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: ListArrayBuilder_ConstructProps)
    _init (config?: ListArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: ListDataType): ListArrayBuilder
    static $gtype: GObject.Type
}
interface ListDataType_ConstructProps extends DataType_ConstructProps {
}
class ListDataType {
    /* Fields of Arrow-1.0.Arrow.DataType */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ListDataType */
    getField(): Field
    getValueField(): Field
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: ListDataType_ConstructProps)
    _init (config?: ListDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(field: Field): ListDataType
    static $gtype: GObject.Type
}
interface LocalFileSystem_ConstructProps extends FileSystem_ConstructProps {
}
class LocalFileSystem {
    /* Fields of Arrow-1.0.Arrow.FileSystem */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FileSystem */
    copyFile(src: string, dest: string): boolean
    createDir(path: string, recursive: boolean): boolean
    deleteDir(path: string): boolean
    deleteDirContents(path: string): boolean
    deleteFile(path: string): boolean
    deleteFiles(paths: string[]): boolean
    getFileInfo(path: string): FileInfo | null
    getFileInfosPaths(paths: string[]): FileInfo[]
    getFileInfosSelector(fileSelector: FileSelector): FileInfo[]
    getTypeName(): string
    move(src: string, dest: string): boolean
    openAppendStream(path: string): OutputStream | null
    openInputFile(path: string): SeekableInputStream | null
    openInputStream(path: string): InputStream | null
    openOutputStream(path: string): OutputStream | null
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
    constructor (config?: LocalFileSystem_ConstructProps)
    _init (config?: LocalFileSystem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(options?: LocalFileSystemOptions | null): LocalFileSystem
    static $gtype: GObject.Type
}
interface LocalFileSystemOptions_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.LocalFileSystemOptions */
    useMmap?: boolean
}
class LocalFileSystemOptions {
    /* Properties of Arrow-1.0.Arrow.LocalFileSystemOptions */
    useMmap: boolean
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
    connect(sigName: "notify::use-mmap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-mmap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-mmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-mmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-mmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LocalFileSystemOptions_ConstructProps)
    _init (config?: LocalFileSystemOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LocalFileSystemOptions
    static $gtype: GObject.Type
}
interface MapArray_ConstructProps extends ListArray_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.MapArray */
    items?: Array
    keys?: Array
    offsets?: Array
}
class MapArray {
    /* Fields of Arrow-1.0.Arrow.ListArray */
    readonly parentInstance: Array
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.MapArray */
    getItems(): Array
    getKeys(): Array
    /* Methods of Arrow-1.0.Arrow.ListArray */
    getValue(i: number): Array
    getValueLength(i: number): number
    getValueOffset(i: number): number
    getValueOffsets(): number[]
    getValueType(): DataType
    getValues(): Array
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: MapArray_ConstructProps)
    _init (config?: MapArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(offsets: Array, keys: Array, items: Array): MapArray
    /* Function overloads */
    static new(dataType: DataType, length: number, valueOffsets: Buffer, values: Array, nullBitmap: Buffer | null, nNulls: number): MapArray
    static $gtype: GObject.Type
}
interface MapArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class MapArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.MapArrayBuilder */
    appendValue(): boolean
    appendValues(offsets: number[], isValids: boolean[] | null): boolean
    getItemBuilder(): ArrayBuilder
    getKeyBuilder(): ArrayBuilder
    getValueBuilder(): ArrayBuilder
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: MapArrayBuilder_ConstructProps)
    _init (config?: MapArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: MapDataType): MapArrayBuilder
    static $gtype: GObject.Type
}
interface MapDataType_ConstructProps extends ListDataType_ConstructProps {
}
class MapDataType {
    /* Fields of Arrow-1.0.Arrow.ListDataType */
    readonly parentInstance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.MapDataType */
    getItemType(): DataType
    getKeyType(): DataType
    /* Methods of Arrow-1.0.Arrow.ListDataType */
    getField(): Field
    getValueField(): Field
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: MapDataType_ConstructProps)
    _init (config?: MapDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(keyType: DataType, itemType: DataType): MapDataType
    /* Function overloads */
    static new(field: Field): MapDataType
    static $gtype: GObject.Type
}
interface MemoryMappedInputStream_ConstructProps extends SeekableInputStream_ConstructProps {
}
class MemoryMappedInputStream {
    /* Fields of Arrow-1.0.Arrow.SeekableInputStream */
    readonly parentInstance: InputStream
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.SeekableInputStream */
    getSize(): number
    getSupportZeroCopy(): boolean
    peek(nBytes: number): any
    readAt(position: number, nBytes: number): Buffer | null
    readAtBytes(position: number, nBytes: number): any | null
    /* Methods of Arrow-1.0.Arrow.InputStream */
    advance(nBytes: number): boolean
    align(alignment: number): boolean
    readRecordBatch(schema: Schema, options?: ReadOptions | null): RecordBatch | null
    readTensor(): Tensor | null
    /* Methods of Gio-2.0.Gio.InputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    readAll(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array
    readAllFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array
    readBytes(count: number, cancellable?: Gio.Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readBytesFinish(result: Gio.AsyncResult): any
    readFinish(result: Gio.AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skipFinish(result: Gio.AsyncResult): number
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
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    getMode(): FileMode
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Readable */
    read(nBytes: number): Buffer | null
    readBytes(nBytes: number): any | null
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
    constructor (config?: MemoryMappedInputStream_ConstructProps)
    _init (config?: MemoryMappedInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string): MemoryMappedInputStream
    static $gtype: GObject.Type
}
interface MockFileSystem_ConstructProps extends FileSystem_ConstructProps {
}
class MockFileSystem {
    /* Fields of Arrow-1.0.Arrow.FileSystem */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FileSystem */
    copyFile(src: string, dest: string): boolean
    createDir(path: string, recursive: boolean): boolean
    deleteDir(path: string): boolean
    deleteDirContents(path: string): boolean
    deleteFile(path: string): boolean
    deleteFiles(paths: string[]): boolean
    getFileInfo(path: string): FileInfo | null
    getFileInfosPaths(paths: string[]): FileInfo[]
    getFileInfosSelector(fileSelector: FileSelector): FileInfo[]
    getTypeName(): string
    move(src: string, dest: string): boolean
    openAppendStream(path: string): OutputStream | null
    openInputFile(path: string): SeekableInputStream | null
    openInputStream(path: string): InputStream | null
    openOutputStream(path: string): OutputStream | null
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
    constructor (config?: MockFileSystem_ConstructProps)
    _init (config?: MockFileSystem_ConstructProps): void
    static $gtype: GObject.Type
}
interface MutableBuffer_ConstructProps extends Buffer_ConstructProps {
}
class MutableBuffer {
    /* Fields of Arrow-1.0.Arrow.Buffer */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.MutableBuffer */
    setData(offset: number, data: Uint8Array): boolean
    slice(offset: number, size: number): MutableBuffer
    /* Methods of Arrow-1.0.Arrow.Buffer */
    copy(start: number, size: number): Buffer | null
    equal(otherBuffer: Buffer): boolean
    equalNBytes(otherBuffer: Buffer, nBytes: number): boolean
    getCapacity(): number
    getData(): any
    getMutableData(): any | null
    getParent(): Buffer | null
    getSize(): number
    isMutable(): boolean
    slice(offset: number, size: number): Buffer
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
    constructor (config?: MutableBuffer_ConstructProps)
    _init (config?: MutableBuffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data: Uint8Array): MutableBuffer
    /* Function overloads */
    static new(data: Uint8Array): MutableBuffer
    static newBytes(data: any): MutableBuffer
    /* Function overloads */
    static newBytes(data: any): MutableBuffer
    static $gtype: GObject.Type
}
interface NullArray_ConstructProps extends Array_ConstructProps {
}
class NullArray {
    /* Fields of Arrow-1.0.Arrow.Array */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: NullArray_ConstructProps)
    _init (config?: NullArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number): NullArray
    static $gtype: GObject.Type
}
interface NullArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class NullArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: NullArrayBuilder_ConstructProps)
    _init (config?: NullArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NullArrayBuilder
    static $gtype: GObject.Type
}
interface NullDataType_ConstructProps extends DataType_ConstructProps {
}
class NullDataType {
    /* Fields of Arrow-1.0.Arrow.DataType */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: NullDataType_ConstructProps)
    _init (config?: NullDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NullDataType
    static $gtype: GObject.Type
}
interface NumericArray_ConstructProps extends PrimitiveArray_ConstructProps {
}
class NumericArray {
    /* Fields of Arrow-1.0.Arrow.PrimitiveArray */
    readonly parentInstance: Array
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: NumericArray_ConstructProps)
    _init (config?: NumericArray_ConstructProps): void
    static $gtype: GObject.Type
}
interface NumericDataType_ConstructProps extends FixedWidthDataType_ConstructProps {
}
class NumericDataType {
    /* Fields of Arrow-1.0.Arrow.FixedWidthDataType */
    readonly parentInstance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: NumericDataType_ConstructProps)
    _init (config?: NumericDataType_ConstructProps): void
    static $gtype: GObject.Type
}
interface ORCFileReader_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.ORCFileReader */
    input?: SeekableInputStream
    orcFileReader?: object
}
class ORCFileReader {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ORCFileReader */
    getFieldIndexes(): number[] | null
    getFieldIndices(): number[] | null
    getNRows(): number
    getNStripes(): number
    readStripe(i: number): RecordBatch | null
    readStripes(): Table | null
    readType(): Schema | null
    setFieldIndexes(fieldIndexes: number[] | null): void
    setFieldIndices(fieldIndices: number[] | null): void
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
    constructor (config?: ORCFileReader_ConstructProps)
    _init (config?: ORCFileReader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(file: SeekableInputStream): ORCFileReader
    static $gtype: GObject.Type
}
interface OutputStream_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.OutputStream */
    outputStream?: object
}
class OutputStream {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.OutputStream */
    align(alignment: number): boolean
    writeRecordBatch(recordBatch: RecordBatch, options?: WriteOptions | null): number
    writeTensor(tensor: Tensor): number
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
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    getMode(): FileMode
    isClosed(): boolean
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Writable */
    flush(): boolean
    write(data: Uint8Array): boolean
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
    constructor (config?: OutputStream_ConstructProps)
    _init (config?: OutputStream_ConstructProps): void
    static $gtype: GObject.Type
}
interface PrimitiveArray_ConstructProps extends Array_ConstructProps {
}
class PrimitiveArray {
    /* Fields of Arrow-1.0.Arrow.Array */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: PrimitiveArray_ConstructProps)
    _init (config?: PrimitiveArray_ConstructProps): void
    static $gtype: GObject.Type
}
interface ReadOptions_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.ReadOptions */
    maxRecursionDepth?: number
    useThreads?: boolean
}
class ReadOptions {
    /* Properties of Arrow-1.0.Arrow.ReadOptions */
    maxRecursionDepth: number
    useThreads: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ReadOptions */
    getIncludedFields(): number[]
    setIncludedFields(fields: number[]): void
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
    connect(sigName: "notify::max-recursion-depth", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-recursion-depth", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-recursion-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-recursion-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-recursion-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-threads", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-threads", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ReadOptions_ConstructProps)
    _init (config?: ReadOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ReadOptions
    static $gtype: GObject.Type
}
interface RecordBatch_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.RecordBatch */
    recordBatch?: object
}
class RecordBatch {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatch */
    addColumn(i: number, field: Field, column: Array): RecordBatch | null
    equal(otherRecordBatch: RecordBatch): boolean
    equalMetadata(otherRecordBatch: RecordBatch, checkMetadata: boolean): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): RecordBatch | null
    getColumnData(i: number): Array | null
    getColumnName(i: number): string | null
    getNColumns(): number
    getNRows(): number
    getSchema(): Schema
    removeColumn(i: number): RecordBatch | null
    serialize(options?: WriteOptions | null): Buffer | null
    slice(offset: number, length: number): RecordBatch
    sortIndices(options: SortOptions): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): RecordBatch | null
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
    constructor (config?: RecordBatch_ConstructProps)
    _init (config?: RecordBatch_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(schema: Schema, nRows: number, columns: Array[]): RecordBatch
    static $gtype: GObject.Type
}
interface RecordBatchBuilder_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.RecordBatchBuilder */
    recordBatchBuilder?: object
}
class RecordBatchBuilder {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatchBuilder */
    flush(): RecordBatch
    getColumnBuilder(i: number): ArrayBuilder | null
    getField(i: number): ArrayBuilder | null
    getInitialCapacity(): number
    getNColumns(): number
    getNFields(): number
    getSchema(): Schema
    setInitialCapacity(capacity: number): void
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
    constructor (config?: RecordBatchBuilder_ConstructProps)
    _init (config?: RecordBatchBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(schema: Schema): RecordBatchBuilder
    static $gtype: GObject.Type
}
interface RecordBatchDatum_ConstructProps extends Datum_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.RecordBatchDatum */
    value?: RecordBatch
}
class RecordBatchDatum {
    /* Fields of Arrow-1.0.Arrow.Datum */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Datum */
    equal(otherDatum: Datum): boolean
    isArray(): boolean
    isArrayLike(): boolean
    toString(): string
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
    constructor (config?: RecordBatchDatum_ConstructProps)
    _init (config?: RecordBatchDatum_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: RecordBatch): RecordBatchDatum
    static $gtype: GObject.Type
}
interface RecordBatchFileReader_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.RecordBatchFileReader */
    recordBatchFileReader?: object
}
class RecordBatchFileReader {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatchFileReader */
    getNRecordBatches(): number
    getRecordBatch(i: number): RecordBatch | null
    getSchema(): Schema
    getVersion(): MetadataVersion
    readRecordBatch(i: number): RecordBatch | null
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
    constructor (config?: RecordBatchFileReader_ConstructProps)
    _init (config?: RecordBatchFileReader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(file: SeekableInputStream): RecordBatchFileReader
    static $gtype: GObject.Type
}
interface RecordBatchFileWriter_ConstructProps extends RecordBatchStreamWriter_ConstructProps {
}
class RecordBatchFileWriter {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatchWriter */
    close(): boolean
    writeRecordBatch(recordBatch: RecordBatch): boolean
    writeTable(table: Table): boolean
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
    constructor (config?: RecordBatchFileWriter_ConstructProps)
    _init (config?: RecordBatchFileWriter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sink: OutputStream, schema: Schema): RecordBatchFileWriter
    /* Function overloads */
    static new(sink: OutputStream, schema: Schema): RecordBatchFileWriter
    static $gtype: GObject.Type
}
interface RecordBatchIterator_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.RecordBatchIterator */
    iterator?: object
}
class RecordBatchIterator {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatchIterator */
    equal(otherIterator: RecordBatchIterator): boolean
    next(): RecordBatch | null
    toList(): RecordBatch[]
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
    constructor (config?: RecordBatchIterator_ConstructProps)
    _init (config?: RecordBatchIterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(recordBatches: RecordBatch[]): RecordBatchIterator
    static $gtype: GObject.Type
}
interface RecordBatchReader_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.RecordBatchReader */
    recordBatchReader?: object
}
class RecordBatchReader {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatchReader */
    getNextRecordBatch(): RecordBatch | null
    getSchema(): Schema
    readNext(): RecordBatch | null
    readNextRecordBatch(): RecordBatch | null
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
    constructor (config?: RecordBatchReader_ConstructProps)
    _init (config?: RecordBatchReader_ConstructProps): void
    static $gtype: GObject.Type
}
interface RecordBatchStreamReader_ConstructProps extends RecordBatchReader_ConstructProps {
}
class RecordBatchStreamReader {
    /* Fields of Arrow-1.0.Arrow.RecordBatchReader */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatchReader */
    getNextRecordBatch(): RecordBatch | null
    getSchema(): Schema
    readNext(): RecordBatch | null
    readNextRecordBatch(): RecordBatch | null
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
    constructor (config?: RecordBatchStreamReader_ConstructProps)
    _init (config?: RecordBatchStreamReader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(stream: InputStream): RecordBatchStreamReader
    static $gtype: GObject.Type
}
interface RecordBatchStreamWriter_ConstructProps extends RecordBatchWriter_ConstructProps {
}
class RecordBatchStreamWriter {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatchWriter */
    close(): boolean
    writeRecordBatch(recordBatch: RecordBatch): boolean
    writeTable(table: Table): boolean
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
    constructor (config?: RecordBatchStreamWriter_ConstructProps)
    _init (config?: RecordBatchStreamWriter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sink: OutputStream, schema: Schema): RecordBatchStreamWriter
    static $gtype: GObject.Type
}
interface RecordBatchWriter_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.RecordBatchWriter */
    recordBatchWriter?: object
}
class RecordBatchWriter {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatchWriter */
    close(): boolean
    writeRecordBatch(recordBatch: RecordBatch): boolean
    writeTable(table: Table): boolean
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
    constructor (config?: RecordBatchWriter_ConstructProps)
    _init (config?: RecordBatchWriter_ConstructProps): void
    static $gtype: GObject.Type
}
interface ResizableBuffer_ConstructProps extends MutableBuffer_ConstructProps {
}
class ResizableBuffer {
    /* Fields of Arrow-1.0.Arrow.MutableBuffer */
    readonly parentInstance: Buffer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.ResizableBuffer */
    reserve(newCapacity: number): boolean
    resize(newSize: number): boolean
    /* Methods of Arrow-1.0.Arrow.MutableBuffer */
    setData(offset: number, data: Uint8Array): boolean
    slice(offset: number, size: number): MutableBuffer
    /* Methods of Arrow-1.0.Arrow.Buffer */
    copy(start: number, size: number): Buffer | null
    equal(otherBuffer: Buffer): boolean
    equalNBytes(otherBuffer: Buffer, nBytes: number): boolean
    getCapacity(): number
    getData(): any
    getMutableData(): any | null
    getParent(): Buffer | null
    getSize(): number
    isMutable(): boolean
    slice(offset: number, size: number): Buffer
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
    constructor (config?: ResizableBuffer_ConstructProps)
    _init (config?: ResizableBuffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(initialSize: number): ResizableBuffer
    /* Function overloads */
    static new(data: Uint8Array): ResizableBuffer
    static new(data: Uint8Array): ResizableBuffer
    static newBytes(data: any): ResizableBuffer
    /* Function overloads */
    static newBytes(data: any): ResizableBuffer
    static $gtype: GObject.Type
}
interface S3FileSystem_ConstructProps extends FileSystem_ConstructProps {
}
class S3FileSystem {
    /* Fields of Arrow-1.0.Arrow.FileSystem */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FileSystem */
    copyFile(src: string, dest: string): boolean
    createDir(path: string, recursive: boolean): boolean
    deleteDir(path: string): boolean
    deleteDirContents(path: string): boolean
    deleteFile(path: string): boolean
    deleteFiles(paths: string[]): boolean
    getFileInfo(path: string): FileInfo | null
    getFileInfosPaths(paths: string[]): FileInfo[]
    getFileInfosSelector(fileSelector: FileSelector): FileInfo[]
    getTypeName(): string
    move(src: string, dest: string): boolean
    openAppendStream(path: string): OutputStream | null
    openInputFile(path: string): SeekableInputStream | null
    openInputStream(path: string): InputStream | null
    openOutputStream(path: string): OutputStream | null
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
    constructor (config?: S3FileSystem_ConstructProps)
    _init (config?: S3FileSystem_ConstructProps): void
    static $gtype: GObject.Type
}
interface Schema_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.Schema */
    schema?: object
}
class Schema {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Schema */
    addField(i: number, field: Field): Schema | null
    equal(otherSchema: Schema): boolean
    getField(i: number): Field
    getFieldByName(name: string): Field
    getFieldIndex(name: string): number
    getFields(): Field[]
    getMetadata(): GLib.HashTable | null
    hasMetadata(): boolean
    nFields(): number
    removeField(i: number): Schema | null
    replaceField(i: number, field: Field): Schema | null
    toString(): string
    toStringMetadata(showMetadata: boolean): string
    withMetadata(metadata: GLib.HashTable): Schema
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
    constructor (config?: Schema_ConstructProps)
    _init (config?: Schema_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fields: Field[]): Schema
    static $gtype: GObject.Type
}
interface SeekableInputStream_ConstructProps extends InputStream_ConstructProps {
}
class SeekableInputStream {
    /* Fields of Arrow-1.0.Arrow.InputStream */
    readonly parentInstance: Gio.InputStream
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.SeekableInputStream */
    getSize(): number
    getSupportZeroCopy(): boolean
    peek(nBytes: number): any
    readAt(position: number, nBytes: number): Buffer | null
    readAtBytes(position: number, nBytes: number): any | null
    /* Methods of Arrow-1.0.Arrow.InputStream */
    advance(nBytes: number): boolean
    align(alignment: number): boolean
    readRecordBatch(schema: Schema, options?: ReadOptions | null): RecordBatch | null
    readTensor(): Tensor | null
    /* Methods of Gio-2.0.Gio.InputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    readAll(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array
    readAllFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array
    readBytes(count: number, cancellable?: Gio.Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readBytesFinish(result: Gio.AsyncResult): any
    readFinish(result: Gio.AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skipFinish(result: Gio.AsyncResult): number
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
    /* Methods of Arrow-1.0.Arrow.File */
    close(): boolean
    getMode(): FileMode
    tell(): number
    /* Methods of Arrow-1.0.Arrow.Readable */
    read(nBytes: number): Buffer | null
    readBytes(nBytes: number): any | null
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
    constructor (config?: SeekableInputStream_ConstructProps)
    _init (config?: SeekableInputStream_ConstructProps): void
    static $gtype: GObject.Type
}
interface SlowFileSystem_ConstructProps extends FileSystem_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.SlowFileSystem */
    baseFileSystem?: FileSystem
}
class SlowFileSystem {
    /* Fields of Arrow-1.0.Arrow.FileSystem */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FileSystem */
    copyFile(src: string, dest: string): boolean
    createDir(path: string, recursive: boolean): boolean
    deleteDir(path: string): boolean
    deleteDirContents(path: string): boolean
    deleteFile(path: string): boolean
    deleteFiles(paths: string[]): boolean
    getFileInfo(path: string): FileInfo | null
    getFileInfosPaths(paths: string[]): FileInfo[]
    getFileInfosSelector(fileSelector: FileSelector): FileInfo[]
    getTypeName(): string
    move(src: string, dest: string): boolean
    openAppendStream(path: string): OutputStream | null
    openInputFile(path: string): SeekableInputStream | null
    openInputStream(path: string): InputStream | null
    openOutputStream(path: string): OutputStream | null
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
    constructor (config?: SlowFileSystem_ConstructProps)
    _init (config?: SlowFileSystem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newAverageLatency(baseFileSystem: FileSystem, averageLatency: number): SlowFileSystem
    static newAverageLatencyAndSeed(baseFileSystem: FileSystem, averageLatency: number, seed: number): SlowFileSystem
    static $gtype: GObject.Type
}
interface SortKey_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.SortKey */
    name?: string
    order?: SortOrder
}
class SortKey {
    /* Properties of Arrow-1.0.Arrow.SortKey */
    name: string
    order: SortOrder
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.SortKey */
    equal(otherSortKey: SortKey): boolean
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
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::order", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SortKey_ConstructProps)
    _init (config?: SortKey_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, order: SortOrder): SortKey
    static $gtype: GObject.Type
}
interface SortOptions_ConstructProps extends GObject.Object_ConstructProps {
}
class SortOptions {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.SortOptions */
    addSortKey(sortKey: SortKey): void
    equal(otherOptions: SortOptions): boolean
    getSortKeys(): SortKey[]
    setSortKeys(sortKeys: SortKey[]): void
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
    constructor (config?: SortOptions_ConstructProps)
    _init (config?: SortOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sortKeys?: SortKey[] | null): SortOptions
    static $gtype: GObject.Type
}
interface SparseUnionArray_ConstructProps extends UnionArray_ConstructProps {
}
class SparseUnionArray {
    /* Fields of Arrow-1.0.Arrow.UnionArray */
    readonly parentInstance: Array
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UnionArray */
    getField(i: number): Array | null
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: SparseUnionArray_ConstructProps)
    _init (config?: SparseUnionArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(typeIds: Int8Array, fields: Array[]): SparseUnionArray
    static newDataType(dataType: SparseUnionDataType, typeIds: Int8Array, fields: Array[]): SparseUnionArray
    static $gtype: GObject.Type
}
interface SparseUnionDataType_ConstructProps extends UnionDataType_ConstructProps {
}
class SparseUnionDataType {
    /* Fields of Arrow-1.0.Arrow.UnionDataType */
    readonly parentInstance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UnionDataType */
    getField(i: number): Field | null
    getFields(): Field[]
    getNFields(): number
    getTypeCodes(): Uint8Array
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: SparseUnionDataType_ConstructProps)
    _init (config?: SparseUnionDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fields: Field[], typeCodes: Uint8Array): SparseUnionDataType
    static $gtype: GObject.Type
}
interface StringArray_ConstructProps extends BinaryArray_ConstructProps {
}
class StringArray {
    /* Fields of Arrow-1.0.Arrow.BinaryArray */
    readonly parentInstance: Array
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.StringArray */
    getString(i: number): string
    /* Methods of Arrow-1.0.Arrow.BinaryArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    getOffsetsBuffer(): Buffer
    getValue(i: number): any
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: StringArray_ConstructProps)
    _init (config?: StringArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number): StringArray
    /* Function overloads */
    static new(length: number, valueOffsets: Buffer, valueData: Buffer, nullBitmap: Buffer | null, nNulls: number): StringArray
    static $gtype: GObject.Type
}
interface StringArrayBuilder_ConstructProps extends BinaryArrayBuilder_ConstructProps {
}
class StringArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.BinaryArrayBuilder */
    readonly parentInstance: ArrayBuilder
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.StringArrayBuilder */
    append(value: string): boolean
    appendString(value: string): boolean
    appendStrings(values: string[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.BinaryArrayBuilder */
    append(value: Uint8Array): boolean
    appendValue(value: Uint8Array): boolean
    appendValueBytes(value: any): boolean
    appendValues(values: any[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: StringArrayBuilder_ConstructProps)
    _init (config?: StringArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StringArrayBuilder
    /* Function overloads */
    static new(): StringArrayBuilder
    static $gtype: GObject.Type
}
interface StringDataType_ConstructProps extends DataType_ConstructProps {
}
class StringDataType {
    /* Fields of Arrow-1.0.Arrow.DataType */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: StringDataType_ConstructProps)
    _init (config?: StringDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StringDataType
    static $gtype: GObject.Type
}
interface StringDictionaryArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class StringDictionaryArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.StringDictionaryArrayBuilder */
    appendArray(array: StringArray): boolean
    appendIndices(values: number[], isValids: boolean[] | null): boolean
    appendString(value: string): boolean
    finishDelta(): [ /* returnType */ boolean, /* outIndices */ Array, /* outDelta */ Array ]
    getDictionaryLength(): number
    insertMemoValues(values: StringArray): boolean
    resetFull(): void
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: StringDictionaryArrayBuilder_ConstructProps)
    _init (config?: StringDictionaryArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StringDictionaryArrayBuilder
    static $gtype: GObject.Type
}
interface StructArray_ConstructProps extends Array_ConstructProps {
}
class StructArray {
    /* Fields of Arrow-1.0.Arrow.Array */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.StructArray */
    flatten(): Array[]
    getField(i: number): Array
    getFields(): Array[]
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: StructArray_ConstructProps)
    _init (config?: StructArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: DataType, length: number, fields: Array[], nullBitmap: Buffer | null, nNulls: number): StructArray
    static $gtype: GObject.Type
}
interface StructArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class StructArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.StructArrayBuilder */
    append(): boolean
    appendValue(): boolean
    getFieldBuilder(i: number): ArrayBuilder
    getFieldBuilders(): Array[]
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: StructArrayBuilder_ConstructProps)
    _init (config?: StructArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: StructDataType): StructArrayBuilder
    static $gtype: GObject.Type
}
interface StructDataType_ConstructProps extends DataType_ConstructProps {
}
class StructDataType {
    /* Fields of Arrow-1.0.Arrow.DataType */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.StructDataType */
    getField(i: number): Field | null
    getFieldByName(name: string): Field | null
    getFieldIndex(name: string): number
    getFields(): Field[]
    getNFields(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: StructDataType_ConstructProps)
    _init (config?: StructDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fields: Field[]): StructDataType
    static $gtype: GObject.Type
}
interface SubTreeFileSystem_ConstructProps extends FileSystem_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.SubTreeFileSystem */
    baseFileSystem?: FileSystem
}
class SubTreeFileSystem {
    /* Fields of Arrow-1.0.Arrow.FileSystem */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.FileSystem */
    copyFile(src: string, dest: string): boolean
    createDir(path: string, recursive: boolean): boolean
    deleteDir(path: string): boolean
    deleteDirContents(path: string): boolean
    deleteFile(path: string): boolean
    deleteFiles(paths: string[]): boolean
    getFileInfo(path: string): FileInfo | null
    getFileInfosPaths(paths: string[]): FileInfo[]
    getFileInfosSelector(fileSelector: FileSelector): FileInfo[]
    getTypeName(): string
    move(src: string, dest: string): boolean
    openAppendStream(path: string): OutputStream | null
    openInputFile(path: string): SeekableInputStream | null
    openInputStream(path: string): InputStream | null
    openOutputStream(path: string): OutputStream | null
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
    constructor (config?: SubTreeFileSystem_ConstructProps)
    _init (config?: SubTreeFileSystem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(basePath: string, baseFileSystem: FileSystem): SubTreeFileSystem
    static $gtype: GObject.Type
}
interface Table_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.Table */
    table?: object
}
class Table {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Table */
    addColumn(i: number, field: Field, chunkedArray: ChunkedArray): Table | null
    combineChunks(): Table | null
    concatenate(otherTables: Table[]): Table | null
    equal(otherTable: Table): boolean
    equalMetadata(otherTable: Table, checkMetadata: boolean): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Table | null
    filterChunkedArray(filter: ChunkedArray, options?: FilterOptions | null): Table | null
    getColumnData(i: number): ChunkedArray | null
    getNColumns(): number
    getNRows(): number
    getSchema(): Schema
    removeColumn(i: number): Table | null
    replaceColumn(i: number, field: Field, chunkedArray: ChunkedArray): Table | null
    slice(offset: number, length: number): Table
    sortIndices(options: SortOptions): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Table | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): Table | null
    toString(): string | null
    writeAsFeather(sink: OutputStream, properties?: FeatherWriteProperties | null): boolean
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
    constructor (config?: Table_ConstructProps)
    _init (config?: Table_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newArrays(schema: Schema, arrays: Array[]): Table
    static newChunkedArrays(schema: Schema, chunkedArrays: ChunkedArray[]): Table
    static newRecordBatches(schema: Schema, recordBatches: RecordBatch[]): Table
    static $gtype: GObject.Type
}
interface TableBatchReader_ConstructProps extends RecordBatchReader_ConstructProps {
}
class TableBatchReader {
    /* Fields of Arrow-1.0.Arrow.RecordBatchReader */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.RecordBatchReader */
    getNextRecordBatch(): RecordBatch | null
    getSchema(): Schema
    readNext(): RecordBatch | null
    readNextRecordBatch(): RecordBatch | null
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
    constructor (config?: TableBatchReader_ConstructProps)
    _init (config?: TableBatchReader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(table: Table): TableBatchReader
    static $gtype: GObject.Type
}
interface TableDatum_ConstructProps extends Datum_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.TableDatum */
    value?: Table
}
class TableDatum {
    /* Fields of Arrow-1.0.Arrow.Datum */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Datum */
    equal(otherDatum: Datum): boolean
    isArray(): boolean
    isArrayLike(): boolean
    toString(): string
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
    constructor (config?: TableDatum_ConstructProps)
    _init (config?: TableDatum_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: Table): TableDatum
    static $gtype: GObject.Type
}
interface TakeOptions_ConstructProps extends GObject.Object_ConstructProps {
}
class TakeOptions {
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
    constructor (config?: TakeOptions_ConstructProps)
    _init (config?: TakeOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TakeOptions
    static $gtype: GObject.Type
}
interface Tensor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.Tensor */
    buffer?: Buffer
    tensor?: object
}
class Tensor {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Tensor */
    equal(otherTensor: Tensor): boolean
    getBuffer(): Buffer
    getDimensionName(i: number): string
    getNDimensions(): number
    getShape(): number[]
    getSize(): number
    getStrides(): number[]
    getValueDataType(): DataType
    getValueType(): Type
    isColumnMajor(): boolean
    isContiguous(): boolean
    isMutable(): boolean
    isRowMajor(): boolean
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
    constructor (config?: Tensor_ConstructProps)
    _init (config?: Tensor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: DataType, data: Buffer, shape: number[], strides: number[] | null, dimensionNames: string[] | null): Tensor
    static $gtype: GObject.Type
}
interface Time32Array_ConstructProps extends NumericArray_ConstructProps {
}
class Time32Array {
    /* Fields of Arrow-1.0.Arrow.NumericArray */
    readonly parentInstance: PrimitiveArray
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Time32Array */
    getValue(i: number): number
    getValues(): number[]
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: Time32Array_ConstructProps)
    _init (config?: Time32Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: Time32DataType, length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Time32Array
    static $gtype: GObject.Type
}
interface Time32ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class Time32ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Time32ArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: Time32ArrayBuilder_ConstructProps)
    _init (config?: Time32ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: Time32DataType): Time32ArrayBuilder
    static $gtype: GObject.Type
}
interface Time32DataType_ConstructProps extends TimeDataType_ConstructProps {
}
class Time32DataType {
    /* Fields of Arrow-1.0.Arrow.TimeDataType */
    readonly parentInstance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.TimeDataType */
    getUnit(): TimeUnit
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: Time32DataType_ConstructProps)
    _init (config?: Time32DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(unit: TimeUnit): Time32DataType
    static $gtype: GObject.Type
}
interface Time64Array_ConstructProps extends NumericArray_ConstructProps {
}
class Time64Array {
    /* Fields of Arrow-1.0.Arrow.NumericArray */
    readonly parentInstance: PrimitiveArray
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Time64Array */
    getValue(i: number): number
    getValues(): number[]
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: Time64Array_ConstructProps)
    _init (config?: Time64Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: Time64DataType, length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): Time64Array
    static $gtype: GObject.Type
}
interface Time64ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class Time64ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.Time64ArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: Time64ArrayBuilder_ConstructProps)
    _init (config?: Time64ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: Time64DataType): Time64ArrayBuilder
    static $gtype: GObject.Type
}
interface Time64DataType_ConstructProps extends TimeDataType_ConstructProps {
}
class Time64DataType {
    /* Fields of Arrow-1.0.Arrow.TimeDataType */
    readonly parentInstance: DataType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.TimeDataType */
    getUnit(): TimeUnit
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: Time64DataType_ConstructProps)
    _init (config?: Time64DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(unit: TimeUnit): Time64DataType
    static $gtype: GObject.Type
}
interface TimeDataType_ConstructProps extends DataType_ConstructProps {
}
class TimeDataType {
    /* Fields of Arrow-1.0.Arrow.DataType */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.TimeDataType */
    getUnit(): TimeUnit
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: TimeDataType_ConstructProps)
    _init (config?: TimeDataType_ConstructProps): void
    static $gtype: GObject.Type
}
interface TimestampArray_ConstructProps extends NumericArray_ConstructProps {
}
class TimestampArray {
    /* Fields of Arrow-1.0.Arrow.NumericArray */
    readonly parentInstance: PrimitiveArray
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.TimestampArray */
    getValue(i: number): number
    getValues(): number[]
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: TimestampArray_ConstructProps)
    _init (config?: TimestampArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: TimestampDataType, length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): TimestampArray
    static $gtype: GObject.Type
}
interface TimestampArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class TimestampArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.TimestampArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: TimestampArrayBuilder_ConstructProps)
    _init (config?: TimestampArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataType: TimestampDataType): TimestampArrayBuilder
    static $gtype: GObject.Type
}
interface TimestampDataType_ConstructProps extends DataType_ConstructProps {
}
class TimestampDataType {
    /* Fields of Arrow-1.0.Arrow.DataType */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.TimestampDataType */
    getUnit(): TimeUnit
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: TimestampDataType_ConstructProps)
    _init (config?: TimestampDataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(unit: TimeUnit): TimestampDataType
    static $gtype: GObject.Type
}
interface UInt16Array_ConstructProps extends NumericArray_ConstructProps {
}
class UInt16Array {
    /* Fields of Arrow-1.0.Arrow.NumericArray */
    readonly parentInstance: PrimitiveArray
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UInt16Array */
    compare(value: number, options: CompareOptions): BooleanArray | null
    getValue(i: number): number
    getValues(): number[]
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: UInt16Array_ConstructProps)
    _init (config?: UInt16Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): UInt16Array
    static $gtype: GObject.Type
}
interface UInt16ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class UInt16ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UInt16ArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: UInt16ArrayBuilder_ConstructProps)
    _init (config?: UInt16ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UInt16ArrayBuilder
    static $gtype: GObject.Type
}
interface UInt16DataType_ConstructProps extends IntegerDataType_ConstructProps {
}
class UInt16DataType {
    /* Fields of Arrow-1.0.Arrow.IntegerDataType */
    readonly parentInstance: NumericDataType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntegerDataType */
    isSigned(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: UInt16DataType_ConstructProps)
    _init (config?: UInt16DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UInt16DataType
    static $gtype: GObject.Type
}
interface UInt32Array_ConstructProps extends NumericArray_ConstructProps {
}
class UInt32Array {
    /* Fields of Arrow-1.0.Arrow.NumericArray */
    readonly parentInstance: PrimitiveArray
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UInt32Array */
    compare(value: number, options: CompareOptions): BooleanArray | null
    getValue(i: number): number
    getValues(): number[]
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: UInt32Array_ConstructProps)
    _init (config?: UInt32Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): UInt32Array
    static $gtype: GObject.Type
}
interface UInt32ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class UInt32ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UInt32ArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: UInt32ArrayBuilder_ConstructProps)
    _init (config?: UInt32ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UInt32ArrayBuilder
    static $gtype: GObject.Type
}
interface UInt32DataType_ConstructProps extends IntegerDataType_ConstructProps {
}
class UInt32DataType {
    /* Fields of Arrow-1.0.Arrow.IntegerDataType */
    readonly parentInstance: NumericDataType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntegerDataType */
    isSigned(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: UInt32DataType_ConstructProps)
    _init (config?: UInt32DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UInt32DataType
    static $gtype: GObject.Type
}
interface UInt64Array_ConstructProps extends NumericArray_ConstructProps {
}
class UInt64Array {
    /* Fields of Arrow-1.0.Arrow.NumericArray */
    readonly parentInstance: PrimitiveArray
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UInt64Array */
    compare(value: number, options: CompareOptions): BooleanArray | null
    getValue(i: number): number
    getValues(): number[]
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: UInt64Array_ConstructProps)
    _init (config?: UInt64Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): UInt64Array
    static $gtype: GObject.Type
}
interface UInt64ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class UInt64ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UInt64ArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: UInt64ArrayBuilder_ConstructProps)
    _init (config?: UInt64ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UInt64ArrayBuilder
    static $gtype: GObject.Type
}
interface UInt64DataType_ConstructProps extends IntegerDataType_ConstructProps {
}
class UInt64DataType {
    /* Fields of Arrow-1.0.Arrow.IntegerDataType */
    readonly parentInstance: NumericDataType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntegerDataType */
    isSigned(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: UInt64DataType_ConstructProps)
    _init (config?: UInt64DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UInt64DataType
    static $gtype: GObject.Type
}
interface UInt8Array_ConstructProps extends NumericArray_ConstructProps {
}
class UInt8Array {
    /* Fields of Arrow-1.0.Arrow.NumericArray */
    readonly parentInstance: PrimitiveArray
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UInt8Array */
    compare(value: number, options: CompareOptions): BooleanArray | null
    getValue(i: number): number
    getValues(): Uint8Array
    sum(): number
    /* Methods of Arrow-1.0.Arrow.NumericArray */
    mean(): number
    /* Methods of Arrow-1.0.Arrow.PrimitiveArray */
    getBuffer(): Buffer
    getDataBuffer(): Buffer
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: UInt8Array_ConstructProps)
    _init (config?: UInt8Array_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(length: number, data: Buffer, nullBitmap: Buffer | null, nNulls: number): UInt8Array
    static $gtype: GObject.Type
}
interface UInt8ArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class UInt8ArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UInt8ArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: Uint8Array, isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: UInt8ArrayBuilder_ConstructProps)
    _init (config?: UInt8ArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UInt8ArrayBuilder
    static $gtype: GObject.Type
}
interface UInt8DataType_ConstructProps extends IntegerDataType_ConstructProps {
}
class UInt8DataType {
    /* Fields of Arrow-1.0.Arrow.IntegerDataType */
    readonly parentInstance: NumericDataType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.IntegerDataType */
    isSigned(): boolean
    /* Methods of Arrow-1.0.Arrow.FixedWidthDataType */
    getBitWidth(): number
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: UInt8DataType_ConstructProps)
    _init (config?: UInt8DataType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UInt8DataType
    static $gtype: GObject.Type
}
interface UIntArrayBuilder_ConstructProps extends ArrayBuilder_ConstructProps {
}
class UIntArrayBuilder {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilder */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UIntArrayBuilder */
    append(value: number): boolean
    appendValue(value: number): boolean
    appendValues(values: number[], isValids: boolean[] | null): boolean
    /* Methods of Arrow-1.0.Arrow.ArrayBuilder */
    appendEmptyValue(): boolean
    appendEmptyValues(n: number): boolean
    appendNull(): boolean
    appendNulls(n: number): boolean
    finish(): Array
    getCapacity(): number
    getLength(): number
    getNNulls(): number
    getValueDataType(): DataType
    getValueType(): Type
    reserve(additionalCapacity: number): boolean
    reset(): void
    resize(capacity: number): boolean
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
    constructor (config?: UIntArrayBuilder_ConstructProps)
    _init (config?: UIntArrayBuilder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UIntArrayBuilder
    static $gtype: GObject.Type
}
interface UnionArray_ConstructProps extends Array_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.UnionArray */
    typeIds?: Int8Array
}
class UnionArray {
    /* Fields of Arrow-1.0.Arrow.Array */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UnionArray */
    getField(i: number): Array | null
    /* Methods of Arrow-1.0.Arrow.Array */
    cast(targetDataType: DataType, options?: CastOptions | null): Array | null
    count(options?: CountOptions | null): number
    countValues(): StructArray | null
    dictionaryEncode(): DictionaryArray | null
    diffUnified(otherArray: Array): string | null
    equal(otherArray: Array): boolean
    equalApprox(otherArray: Array): boolean
    equalRange(startIndex: number, otherArray: Array, otherStartIndex: number, endIndex: number): boolean
    filter(filter: BooleanArray, options?: FilterOptions | null): Array | null
    getLength(): number
    getNNulls(): number
    getNullBitmap(): Buffer | null
    getOffset(): number
    getValueDataType(): DataType
    getValueType(): Type
    isIn(right: Array): BooleanArray | null
    isInChunkedArray(right: ChunkedArray): BooleanArray | null
    isNull(i: number): boolean
    isValid(i: number): boolean
    slice(offset: number, length: number): Array
    sortIndices(order: SortOrder): UInt64Array | null
    sortToIndices(): UInt64Array | null
    take(indices: Array, options?: TakeOptions | null): Array | null
    takeChunkedArray(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null
    toString(): string | null
    unique(): Array | null
    view(returnType: DataType): Array | null
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
    constructor (config?: UnionArray_ConstructProps)
    _init (config?: UnionArray_ConstructProps): void
    static $gtype: GObject.Type
}
interface UnionDataType_ConstructProps extends DataType_ConstructProps {
}
class UnionDataType {
    /* Fields of Arrow-1.0.Arrow.DataType */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Arrow-1.0.Arrow.UnionDataType */
    getField(i: number): Field | null
    getFields(): Field[]
    getNFields(): number
    getTypeCodes(): Uint8Array
    /* Methods of Arrow-1.0.Arrow.DataType */
    equal(otherDataType: DataType): boolean
    getId(): Type
    getName(): string
    toString(): string
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
    constructor (config?: UnionDataType_ConstructProps)
    _init (config?: UnionDataType_ConstructProps): void
    static $gtype: GObject.Type
}
interface WriteOptions_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Arrow-1.0.Arrow.WriteOptions */
    alignment?: number
    allow64bit?: boolean
    codec?: Codec
    maxRecursionDepth?: number
    useThreads?: boolean
    writeLegacyIpcFormat?: boolean
}
class WriteOptions {
    /* Properties of Arrow-1.0.Arrow.WriteOptions */
    alignment: number
    allow64bit: boolean
    codec: Codec
    maxRecursionDepth: number
    useThreads: boolean
    writeLegacyIpcFormat: boolean
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
    connect(sigName: "notify::alignment", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allow-64bit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-64bit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-64bit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-64bit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-64bit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::codec", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codec", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::codec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::codec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::codec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-recursion-depth", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-recursion-depth", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-recursion-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-recursion-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-recursion-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-threads", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-threads", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::write-legacy-ipc-format", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write-legacy-ipc-format", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::write-legacy-ipc-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::write-legacy-ipc-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::write-legacy-ipc-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WriteOptions_ConstructProps)
    _init (config?: WriteOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WriteOptions
    static $gtype: GObject.Type
}
abstract class ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.ArrayBuilderClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class ArrayClass {
    /* Fields of Arrow-1.0.Arrow.ArrayClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class ArrayDatumClass {
    /* Fields of Arrow-1.0.Arrow.ArrayDatumClass */
    readonly parentClass: DatumClass
    static name: string
}
abstract class ArraySortOptionsClass {
    /* Fields of Arrow-1.0.Arrow.ArraySortOptionsClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class BinaryArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.BinaryArrayBuilderClass */
    readonly parentClass: ArrayBuilderClass
    static name: string
}
abstract class BinaryArrayClass {
    /* Fields of Arrow-1.0.Arrow.BinaryArrayClass */
    readonly parentClass: ArrayClass
    static name: string
}
abstract class BinaryDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.BinaryDataTypeClass */
    readonly parentClass: DataTypeClass
    static name: string
}
abstract class BinaryDictionaryArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.BinaryDictionaryArrayBuilderClass */
    readonly parentClass: ArrayBuilderClass
    static name: string
}
abstract class BooleanArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.BooleanArrayBuilderClass */
    readonly parentClass: ArrayBuilderClass
    static name: string
}
abstract class BooleanArrayClass {
    /* Fields of Arrow-1.0.Arrow.BooleanArrayClass */
    readonly parentClass: PrimitiveArrayClass
    static name: string
}
abstract class BooleanDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.BooleanDataTypeClass */
    readonly parentClass: FixedWidthDataTypeClass
    static name: string
}
abstract class BufferClass {
    /* Fields of Arrow-1.0.Arrow.BufferClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class BufferInputStreamClass {
    /* Fields of Arrow-1.0.Arrow.BufferInputStreamClass */
    readonly parentClass: SeekableInputStreamClass
    static name: string
}
abstract class BufferOutputStreamClass {
    /* Fields of Arrow-1.0.Arrow.BufferOutputStreamClass */
    readonly parentClass: OutputStreamClass
    static name: string
}
abstract class CSVReadOptionsClass {
    /* Fields of Arrow-1.0.Arrow.CSVReadOptionsClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class CSVReaderClass {
    /* Fields of Arrow-1.0.Arrow.CSVReaderClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class CastOptionsClass {
    /* Fields of Arrow-1.0.Arrow.CastOptionsClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class ChunkedArrayClass {
    /* Fields of Arrow-1.0.Arrow.ChunkedArrayClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class ChunkedArrayDatumClass {
    /* Fields of Arrow-1.0.Arrow.ChunkedArrayDatumClass */
    readonly parentClass: DatumClass
    static name: string
}
abstract class CodecClass {
    /* Fields of Arrow-1.0.Arrow.CodecClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class CompareOptionsClass {
    /* Fields of Arrow-1.0.Arrow.CompareOptionsClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class CompressedInputStreamClass {
    /* Fields of Arrow-1.0.Arrow.CompressedInputStreamClass */
    readonly parentClass: InputStreamClass
    static name: string
}
abstract class CompressedOutputStreamClass {
    /* Fields of Arrow-1.0.Arrow.CompressedOutputStreamClass */
    readonly parentClass: OutputStreamClass
    static name: string
}
abstract class CountOptionsClass {
    /* Fields of Arrow-1.0.Arrow.CountOptionsClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.DataTypeClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class Date32ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Date32ArrayBuilderClass */
    readonly parentClass: ArrayBuilderClass
    static name: string
}
abstract class Date32ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Date32ArrayClass */
    readonly parentClass: NumericArrayClass
    static name: string
}
abstract class Date32DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Date32DataTypeClass */
    readonly parentClass: DataTypeClass
    static name: string
}
abstract class Date64ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Date64ArrayBuilderClass */
    readonly parentClass: ArrayBuilderClass
    static name: string
}
abstract class Date64ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Date64ArrayClass */
    readonly parentClass: NumericArrayClass
    static name: string
}
abstract class Date64DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Date64DataTypeClass */
    readonly parentClass: DataTypeClass
    static name: string
}
abstract class DatumClass {
    /* Fields of Arrow-1.0.Arrow.DatumClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class Decimal128ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Decimal128ArrayBuilderClass */
    readonly parentClass: FixedSizeBinaryArrayBuilderClass
    static name: string
}
abstract class Decimal128ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Decimal128ArrayClass */
    readonly parentClass: FixedSizeBinaryArrayClass
    static name: string
}
abstract class Decimal128Class {
    /* Fields of Arrow-1.0.Arrow.Decimal128Class */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class Decimal128DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Decimal128DataTypeClass */
    readonly parentClass: DecimalDataTypeClass
    static name: string
}
abstract class Decimal256ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Decimal256ArrayBuilderClass */
    readonly parentClass: FixedSizeBinaryArrayBuilderClass
    static name: string
}
abstract class Decimal256ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Decimal256ArrayClass */
    readonly parentClass: FixedSizeBinaryArrayClass
    static name: string
}
abstract class Decimal256Class {
    /* Fields of Arrow-1.0.Arrow.Decimal256Class */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class Decimal256DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Decimal256DataTypeClass */
    readonly parentClass: DecimalDataTypeClass
    static name: string
}
abstract class DecimalDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.DecimalDataTypeClass */
    readonly parentClass: FixedSizeBinaryDataTypeClass
    static name: string
}
abstract class DenseUnionArrayClass {
    /* Fields of Arrow-1.0.Arrow.DenseUnionArrayClass */
    readonly parentClass: UnionArrayClass
    static name: string
}
abstract class DenseUnionDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.DenseUnionDataTypeClass */
    readonly parentClass: UnionDataTypeClass
    static name: string
}
abstract class DictionaryArrayClass {
    /* Fields of Arrow-1.0.Arrow.DictionaryArrayClass */
    readonly parentClass: ArrayClass
    static name: string
}
abstract class DictionaryDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.DictionaryDataTypeClass */
    readonly parentClass: FixedWidthDataTypeClass
    static name: string
}
abstract class DoubleArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.DoubleArrayBuilderClass */
    readonly parentClass: ArrayBuilderClass
    static name: string
}
abstract class DoubleArrayClass {
    /* Fields of Arrow-1.0.Arrow.DoubleArrayClass */
    readonly parentClass: NumericArrayClass
    static name: string
}
abstract class DoubleDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.DoubleDataTypeClass */
    readonly parentClass: FloatingPointDataTypeClass
    static name: string
}
abstract class ExecuteContextClass {
    /* Fields of Arrow-1.0.Arrow.ExecuteContextClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class ExtensionArrayClass {
    /* Fields of Arrow-1.0.Arrow.ExtensionArrayClass */
    readonly parentClass: ArrayClass
    static name: string
}
abstract class ExtensionDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.ExtensionDataTypeClass */
    readonly parentClass: DataTypeClass
    readonly getExtensionName: (dataType: ExtensionDataType) => string
    readonly equal: (dataType: ExtensionDataType, otherDataType: ExtensionDataType) => boolean
    readonly serialize: (dataType: ExtensionDataType) => any
    readonly getArrayGtype: (dataType: ExtensionDataType) => GObject.Type
    static name: string
}
abstract class ExtensionDataTypeRegistryClass {
    /* Fields of Arrow-1.0.Arrow.ExtensionDataTypeRegistryClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class FeatherFileReaderClass {
    /* Fields of Arrow-1.0.Arrow.FeatherFileReaderClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class FeatherWritePropertiesClass {
    /* Fields of Arrow-1.0.Arrow.FeatherWritePropertiesClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class FieldClass {
    /* Fields of Arrow-1.0.Arrow.FieldClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class FileInfoClass {
    /* Fields of Arrow-1.0.Arrow.FileInfoClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class FileInterface {
    static name: string
}
abstract class FileOutputStreamClass {
    /* Fields of Arrow-1.0.Arrow.FileOutputStreamClass */
    readonly parentClass: OutputStreamClass
    static name: string
}
abstract class FileSelectorClass {
    /* Fields of Arrow-1.0.Arrow.FileSelectorClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class FileSystemClass {
    /* Fields of Arrow-1.0.Arrow.FileSystemClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class FilterOptionsClass {
    /* Fields of Arrow-1.0.Arrow.FilterOptionsClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class FixedSizeBinaryArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.FixedSizeBinaryArrayBuilderClass */
    readonly parentClass: ArrayBuilderClass
    static name: string
}
abstract class FixedSizeBinaryArrayClass {
    /* Fields of Arrow-1.0.Arrow.FixedSizeBinaryArrayClass */
    readonly parentClass: PrimitiveArrayClass
    static name: string
}
abstract class FixedSizeBinaryDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.FixedSizeBinaryDataTypeClass */
    readonly parentClass: FixedWidthDataTypeClass
    static name: string
}
abstract class FixedWidthDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.FixedWidthDataTypeClass */
    readonly parentClass: DataTypeClass
    static name: string
}
abstract class FloatArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.FloatArrayBuilderClass */
    readonly parentClass: ArrayBuilderClass
    static name: string
}
abstract class FloatArrayClass {
    /* Fields of Arrow-1.0.Arrow.FloatArrayClass */
    readonly parentClass: NumericArrayClass
    static name: string
}
abstract class FloatDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.FloatDataTypeClass */
    readonly parentClass: FloatingPointDataTypeClass
    static name: string
}
abstract class FloatingPointDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.FloatingPointDataTypeClass */
    readonly parentClass: NumericDataTypeClass
    static name: string
}
abstract class FunctionClass {
    /* Fields of Arrow-1.0.Arrow.FunctionClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class FunctionOptionsInterface {
    static name: string
}
abstract class GIOInputStreamClass {
    /* Fields of Arrow-1.0.Arrow.GIOInputStreamClass */
    readonly parentClass: SeekableInputStreamClass
    static name: string
}
abstract class GIOOutputStreamClass {
    /* Fields of Arrow-1.0.Arrow.GIOOutputStreamClass */
    readonly parentClass: OutputStreamClass
    static name: string
}
abstract class HDFSFileSystemClass {
    /* Fields of Arrow-1.0.Arrow.HDFSFileSystemClass */
    readonly parentClass: FileSystemClass
    static name: string
}
abstract class InputStreamClass {
    /* Fields of Arrow-1.0.Arrow.InputStreamClass */
    readonly parentClass: Gio.InputStreamClass
    static name: string
}
abstract class Int16ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Int16ArrayBuilderClass */
    readonly parentClass: ArrayBuilderClass
    static name: string
}
abstract class Int16ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Int16ArrayClass */
    readonly parentClass: NumericArrayClass
    static name: string
}
abstract class Int16DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Int16DataTypeClass */
    readonly parentClass: IntegerDataTypeClass
    static name: string
}
abstract class Int32ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Int32ArrayBuilderClass */
    readonly parentClass: ArrayBuilderClass
    static name: string
}
abstract class Int32ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Int32ArrayClass */
    readonly parentClass: NumericArrayClass
    static name: string
}
abstract class Int32DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Int32DataTypeClass */
    readonly parentClass: IntegerDataTypeClass
    static name: string
}
abstract class Int64ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Int64ArrayBuilderClass */
    readonly parentClass: ArrayBuilderClass
    static name: string
}
abstract class Int64ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Int64ArrayClass */
    readonly parentClass: NumericArrayClass
    static name: string
}
abstract class Int64DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Int64DataTypeClass */
    readonly parentClass: IntegerDataTypeClass
    static name: string
}
abstract class Int8ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Int8ArrayBuilderClass */
    readonly parentClass: ArrayBuilderClass
    static name: string
}
abstract class Int8ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Int8ArrayClass */
    readonly parentClass: NumericArrayClass
    static name: string
}
abstract class Int8DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Int8DataTypeClass */
    readonly parentClass: IntegerDataTypeClass
    static name: string
}
abstract class IntArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.IntArrayBuilderClass */
    readonly parentClass: ArrayBuilderClass
    static name: string
}
abstract class IntegerDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.IntegerDataTypeClass */
    readonly parentClass: NumericDataTypeClass
    static name: string
}
abstract class JSONReadOptionsClass {
    /* Fields of Arrow-1.0.Arrow.JSONReadOptionsClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class JSONReaderClass {
    /* Fields of Arrow-1.0.Arrow.JSONReaderClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class LargeBinaryArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.LargeBinaryArrayBuilderClass */
    readonly parentClass: ArrayBuilderClass
    static name: string
}
abstract class LargeBinaryArrayClass {
    /* Fields of Arrow-1.0.Arrow.LargeBinaryArrayClass */
    readonly parentClass: ArrayClass
    static name: string
}
abstract class LargeBinaryDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.LargeBinaryDataTypeClass */
    readonly parentClass: DataTypeClass
    static name: string
}
abstract class LargeListArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.LargeListArrayBuilderClass */
    readonly parentClass: ArrayBuilderClass
    static name: string
}
abstract class LargeListArrayClass {
    /* Fields of Arrow-1.0.Arrow.LargeListArrayClass */
    readonly parentClass: ArrayClass
    static name: string
}
abstract class LargeListDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.LargeListDataTypeClass */
    readonly parentClass: DataTypeClass
    static name: string
}
abstract class LargeStringArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.LargeStringArrayBuilderClass */
    readonly parentClass: LargeBinaryArrayBuilderClass
    static name: string
}
abstract class LargeStringArrayClass {
    /* Fields of Arrow-1.0.Arrow.LargeStringArrayClass */
    readonly parentClass: LargeBinaryArrayClass
    static name: string
}
abstract class LargeStringDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.LargeStringDataTypeClass */
    readonly parentClass: LargeBinaryDataTypeClass
    static name: string
}
abstract class ListArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.ListArrayBuilderClass */
    readonly parentClass: ArrayBuilderClass
    static name: string
}
abstract class ListArrayClass {
    /* Fields of Arrow-1.0.Arrow.ListArrayClass */
    readonly parentClass: ArrayClass
    static name: string
}
abstract class ListDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.ListDataTypeClass */
    readonly parentClass: DataTypeClass
    static name: string
}
abstract class LocalFileSystemClass {
    /* Fields of Arrow-1.0.Arrow.LocalFileSystemClass */
    readonly parentClass: FileSystemClass
    static name: string
}
abstract class LocalFileSystemOptionsClass {
    /* Fields of Arrow-1.0.Arrow.LocalFileSystemOptionsClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class MapArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.MapArrayBuilderClass */
    readonly parentClass: ArrayBuilderClass
    static name: string
}
abstract class MapArrayClass {
    /* Fields of Arrow-1.0.Arrow.MapArrayClass */
    readonly parentClass: ListArrayClass
    static name: string
}
abstract class MapDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.MapDataTypeClass */
    readonly parentClass: ListDataTypeClass
    static name: string
}
abstract class MemoryMappedInputStreamClass {
    /* Fields of Arrow-1.0.Arrow.MemoryMappedInputStreamClass */
    readonly parentClass: SeekableInputStreamClass
    static name: string
}
abstract class MockFileSystemClass {
    /* Fields of Arrow-1.0.Arrow.MockFileSystemClass */
    readonly parentClass: FileSystemClass
    static name: string
}
abstract class MutableBufferClass {
    /* Fields of Arrow-1.0.Arrow.MutableBufferClass */
    readonly parentClass: BufferClass
    static name: string
}
abstract class NullArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.NullArrayBuilderClass */
    readonly parentClass: ArrayBuilderClass
    static name: string
}
abstract class NullArrayClass {
    /* Fields of Arrow-1.0.Arrow.NullArrayClass */
    readonly parentClass: ArrayClass
    static name: string
}
abstract class NullDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.NullDataTypeClass */
    readonly parentClass: DataTypeClass
    static name: string
}
abstract class NumericArrayClass {
    /* Fields of Arrow-1.0.Arrow.NumericArrayClass */
    readonly parentClass: PrimitiveArrayClass
    static name: string
}
abstract class NumericDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.NumericDataTypeClass */
    readonly parentClass: FixedWidthDataTypeClass
    static name: string
}
abstract class ORCFileReaderClass {
    /* Fields of Arrow-1.0.Arrow.ORCFileReaderClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class OutputStreamClass {
    /* Fields of Arrow-1.0.Arrow.OutputStreamClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class PrimitiveArrayClass {
    /* Fields of Arrow-1.0.Arrow.PrimitiveArrayClass */
    readonly parentClass: ArrayClass
    static name: string
}
abstract class ReadOptionsClass {
    /* Fields of Arrow-1.0.Arrow.ReadOptionsClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class ReadableInterface {
    static name: string
}
abstract class RecordBatchBuilderClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchBuilderClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class RecordBatchClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class RecordBatchDatumClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchDatumClass */
    readonly parentClass: DatumClass
    static name: string
}
abstract class RecordBatchFileReaderClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchFileReaderClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class RecordBatchFileWriterClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchFileWriterClass */
    readonly parentClass: RecordBatchStreamWriterClass
    static name: string
}
abstract class RecordBatchIteratorClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchIteratorClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class RecordBatchReaderClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchReaderClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class RecordBatchStreamReaderClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchStreamReaderClass */
    readonly parentClass: RecordBatchReaderClass
    static name: string
}
abstract class RecordBatchStreamWriterClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchStreamWriterClass */
    readonly parentClass: RecordBatchWriterClass
    static name: string
}
abstract class RecordBatchWriterClass {
    /* Fields of Arrow-1.0.Arrow.RecordBatchWriterClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class ResizableBufferClass {
    /* Fields of Arrow-1.0.Arrow.ResizableBufferClass */
    readonly parentClass: MutableBufferClass
    static name: string
}
abstract class S3FileSystemClass {
    /* Fields of Arrow-1.0.Arrow.S3FileSystemClass */
    readonly parentClass: FileSystemClass
    static name: string
}
abstract class SchemaClass {
    /* Fields of Arrow-1.0.Arrow.SchemaClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class SeekableInputStreamClass {
    /* Fields of Arrow-1.0.Arrow.SeekableInputStreamClass */
    readonly parentClass: InputStreamClass
    static name: string
}
abstract class SlowFileSystemClass {
    /* Fields of Arrow-1.0.Arrow.SlowFileSystemClass */
    readonly parentClass: FileSystemClass
    static name: string
}
abstract class SortKeyClass {
    /* Fields of Arrow-1.0.Arrow.SortKeyClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class SortOptionsClass {
    /* Fields of Arrow-1.0.Arrow.SortOptionsClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class SparseUnionArrayClass {
    /* Fields of Arrow-1.0.Arrow.SparseUnionArrayClass */
    readonly parentClass: UnionArrayClass
    static name: string
}
abstract class SparseUnionDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.SparseUnionDataTypeClass */
    readonly parentClass: UnionDataTypeClass
    static name: string
}
abstract class StringArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.StringArrayBuilderClass */
    readonly parentClass: BinaryArrayBuilderClass
    static name: string
}
abstract class StringArrayClass {
    /* Fields of Arrow-1.0.Arrow.StringArrayClass */
    readonly parentClass: BinaryArrayClass
    static name: string
}
abstract class StringDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.StringDataTypeClass */
    readonly parentClass: BinaryDataTypeClass
    static name: string
}
abstract class StringDictionaryArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.StringDictionaryArrayBuilderClass */
    readonly parentClass: ArrayBuilderClass
    static name: string
}
abstract class StructArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.StructArrayBuilderClass */
    readonly parentClass: ArrayBuilderClass
    static name: string
}
abstract class StructArrayClass {
    /* Fields of Arrow-1.0.Arrow.StructArrayClass */
    readonly parentClass: ArrayClass
    static name: string
}
abstract class StructDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.StructDataTypeClass */
    readonly parentClass: DataTypeClass
    static name: string
}
abstract class SubTreeFileSystemClass {
    /* Fields of Arrow-1.0.Arrow.SubTreeFileSystemClass */
    readonly parentClass: FileSystemClass
    static name: string
}
abstract class TableBatchReaderClass {
    /* Fields of Arrow-1.0.Arrow.TableBatchReaderClass */
    readonly parentClass: RecordBatchReaderClass
    static name: string
}
abstract class TableClass {
    /* Fields of Arrow-1.0.Arrow.TableClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class TableDatumClass {
    /* Fields of Arrow-1.0.Arrow.TableDatumClass */
    readonly parentClass: DatumClass
    static name: string
}
abstract class TakeOptionsClass {
    /* Fields of Arrow-1.0.Arrow.TakeOptionsClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class TensorClass {
    /* Fields of Arrow-1.0.Arrow.TensorClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class Time32ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Time32ArrayBuilderClass */
    readonly parentClass: ArrayBuilderClass
    static name: string
}
abstract class Time32ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Time32ArrayClass */
    readonly parentClass: NumericArrayClass
    static name: string
}
abstract class Time32DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Time32DataTypeClass */
    readonly parentClass: TimeDataTypeClass
    static name: string
}
abstract class Time64ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.Time64ArrayBuilderClass */
    readonly parentClass: ArrayBuilderClass
    static name: string
}
abstract class Time64ArrayClass {
    /* Fields of Arrow-1.0.Arrow.Time64ArrayClass */
    readonly parentClass: NumericArrayClass
    static name: string
}
abstract class Time64DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.Time64DataTypeClass */
    readonly parentClass: TimeDataTypeClass
    static name: string
}
abstract class TimeDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.TimeDataTypeClass */
    readonly parentClass: DataTypeClass
    static name: string
}
abstract class TimestampArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.TimestampArrayBuilderClass */
    readonly parentClass: ArrayBuilderClass
    static name: string
}
abstract class TimestampArrayClass {
    /* Fields of Arrow-1.0.Arrow.TimestampArrayClass */
    readonly parentClass: NumericArrayClass
    static name: string
}
abstract class TimestampDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.TimestampDataTypeClass */
    readonly parentClass: DataTypeClass
    static name: string
}
abstract class UInt16ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.UInt16ArrayBuilderClass */
    readonly parentClass: ArrayBuilderClass
    static name: string
}
abstract class UInt16ArrayClass {
    /* Fields of Arrow-1.0.Arrow.UInt16ArrayClass */
    readonly parentClass: NumericArrayClass
    static name: string
}
abstract class UInt16DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.UInt16DataTypeClass */
    readonly parentClass: IntegerDataTypeClass
    static name: string
}
abstract class UInt32ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.UInt32ArrayBuilderClass */
    readonly parentClass: ArrayBuilderClass
    static name: string
}
abstract class UInt32ArrayClass {
    /* Fields of Arrow-1.0.Arrow.UInt32ArrayClass */
    readonly parentClass: NumericArrayClass
    static name: string
}
abstract class UInt32DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.UInt32DataTypeClass */
    readonly parentClass: IntegerDataTypeClass
    static name: string
}
abstract class UInt64ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.UInt64ArrayBuilderClass */
    readonly parentClass: ArrayBuilderClass
    static name: string
}
abstract class UInt64ArrayClass {
    /* Fields of Arrow-1.0.Arrow.UInt64ArrayClass */
    readonly parentClass: NumericArrayClass
    static name: string
}
abstract class UInt64DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.UInt64DataTypeClass */
    readonly parentClass: IntegerDataTypeClass
    static name: string
}
abstract class UInt8ArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.UInt8ArrayBuilderClass */
    readonly parentClass: ArrayBuilderClass
    static name: string
}
abstract class UInt8ArrayClass {
    /* Fields of Arrow-1.0.Arrow.UInt8ArrayClass */
    readonly parentClass: NumericArrayClass
    static name: string
}
abstract class UInt8DataTypeClass {
    /* Fields of Arrow-1.0.Arrow.UInt8DataTypeClass */
    readonly parentClass: IntegerDataTypeClass
    static name: string
}
abstract class UIntArrayBuilderClass {
    /* Fields of Arrow-1.0.Arrow.UIntArrayBuilderClass */
    readonly parentClass: ArrayBuilderClass
    static name: string
}
abstract class UnionArrayClass {
    /* Fields of Arrow-1.0.Arrow.UnionArrayClass */
    readonly parentClass: ArrayClass
    static name: string
}
abstract class UnionDataTypeClass {
    /* Fields of Arrow-1.0.Arrow.UnionDataTypeClass */
    readonly parentClass: DataTypeClass
    static name: string
}
abstract class WritableFileInterface {
    static name: string
}
abstract class WritableInterface {
    static name: string
}
abstract class WriteOptionsClass {
    /* Fields of Arrow-1.0.Arrow.WriteOptionsClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
    type TimePoint = number
}
export default Arrow;