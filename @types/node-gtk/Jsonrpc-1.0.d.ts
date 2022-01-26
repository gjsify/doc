/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Jsonrpc-1.0
 */

import type Json from './Json-1.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Jsonrpc {

enum ClientError {
    PARSE_ERROR,
    INVALID_REQUEST,
    METHOD_NOT_FOUND,
    INVALID_PARAMS,
    INTERNAL_ERROR,
}
const MAJOR_VERSION: number
const MICRO_VERSION: number
const MINOR_VERSION: number
const VERSION_S: string
interface ServerHandler {
    (self: Server, client: Client, method: string, id: GLib.Variant, params: GLib.Variant): void
}
interface Client_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Jsonrpc-1.0.Jsonrpc.Client */
    ioStream?: Gio.IOStream
    useGvariant?: boolean
}
class Client {
    /* Properties of Jsonrpc-1.0.Jsonrpc.Client */
    useGvariant: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Jsonrpc-1.0.Jsonrpc.Client */
    call(method: string, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* returnValue */ GLib.Variant | null ]
    callAsync(method: string, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* returnValue */ GLib.Variant | null ]
    callWithIdAsync(method: string, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* id */ GLib.Variant | null
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    getUseGvariant(): boolean
    reply(id: GLib.Variant, result?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    replyAsync(id: GLib.Variant, result: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    replyErrorAsync(id: GLib.Variant, code: number, message?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    replyErrorFinish(result: Gio.AsyncResult): boolean
    replyFinish(result: Gio.AsyncResult): boolean
    sendNotification(method: string, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): boolean
    sendNotificationAsync(method: string, params?: GLib.Variant | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendNotificationFinish(result: Gio.AsyncResult): boolean
    setUseGvariant(useGvariant: boolean): void
    startListening(): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Jsonrpc-1.0.Jsonrpc.Client */
    connect(sigName: "failed", callback: (() => void)): number
    on(sigName: "failed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "failed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "failed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "failed"): void
    connect(sigName: "handle-call", callback: ((method: string, id: GLib.Variant, params?: GLib.Variant | null) => boolean)): number
    on(sigName: "handle-call", callback: (method: string, id: GLib.Variant, params?: GLib.Variant | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-call", callback: (method: string, id: GLib.Variant, params?: GLib.Variant | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-call", callback: (method: string, id: GLib.Variant, params?: GLib.Variant | null) => void): NodeJS.EventEmitter
    emit(sigName: "handle-call", method: string, id: GLib.Variant, params?: GLib.Variant | null): void
    connect(sigName: "notification", callback: ((method: string, params?: GLib.Variant | null) => void)): number
    on(sigName: "notification", callback: (method: string, params?: GLib.Variant | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notification", callback: (method: string, params?: GLib.Variant | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notification", callback: (method: string, params?: GLib.Variant | null) => void): NodeJS.EventEmitter
    emit(sigName: "notification", method: string, params?: GLib.Variant | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::use-gvariant", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-gvariant", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-gvariant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-gvariant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-gvariant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(ioStream: Gio.IOStream): Client
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
interface InputStream_ConstructProps extends Gio.DataInputStream_ConstructProps {
}
class InputStream {
    /* Properties of Gio-2.0.Gio.DataInputStream */
    byteOrder: Gio.DataStreamByteOrder
    newlineType: Gio.DataStreamNewlineType
    /* Properties of Gio-2.0.Gio.BufferedInputStream */
    bufferSize: number
    /* Properties of Gio-2.0.Gio.FilterInputStream */
    closeBaseStream: boolean
    /* Fields of Gio-2.0.Gio.DataInputStream */
    readonly parentInstance: Gio.BufferedInputStream
    /* Fields of Gio-2.0.Gio.FilterInputStream */
    readonly baseStream: Gio.InputStream
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Jsonrpc-1.0.Jsonrpc.InputStream */
    readMessage(cancellable: Gio.Cancellable | null, message: GLib.Variant): boolean
    readMessageAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readMessageFinish(result: Gio.AsyncResult, message: GLib.Variant): boolean
    /* Methods of Gio-2.0.Gio.DataInputStream */
    getByteOrder(): Gio.DataStreamByteOrder
    getNewlineType(): Gio.DataStreamNewlineType
    readByte(cancellable?: Gio.Cancellable | null): number
    readInt16(cancellable?: Gio.Cancellable | null): number
    readInt32(cancellable?: Gio.Cancellable | null): number
    readInt64(cancellable?: Gio.Cancellable | null): number
    readLine(cancellable?: Gio.Cancellable | null): [ /* returnType */ Uint8Array | null, /* length */ number | null ]
    readLineAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readLineFinish(result: Gio.AsyncResult): [ /* returnType */ Uint8Array | null, /* length */ number | null ]
    readLineFinishUtf8(result: Gio.AsyncResult): [ /* returnType */ string | null, /* length */ number | null ]
    readLineUtf8(cancellable?: Gio.Cancellable | null): [ /* returnType */ string | null, /* length */ number | null ]
    readUint16(cancellable?: Gio.Cancellable | null): number
    readUint32(cancellable?: Gio.Cancellable | null): number
    readUint64(cancellable?: Gio.Cancellable | null): number
    readUntil(stopChars: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ string, /* length */ number | null ]
    readUntilAsync(stopChars: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readUntilFinish(result: Gio.AsyncResult): [ /* returnType */ string, /* length */ number | null ]
    readUpto(stopChars: string, stopCharsLen: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ string, /* length */ number | null ]
    readUptoAsync(stopChars: string, stopCharsLen: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readUptoFinish(result: Gio.AsyncResult): [ /* returnType */ string, /* length */ number | null ]
    setByteOrder(order: Gio.DataStreamByteOrder): void
    setNewlineType(type: Gio.DataStreamNewlineType): void
    /* Methods of Gio-2.0.Gio.BufferedInputStream */
    fill(count: number, cancellable?: Gio.Cancellable | null): number
    fillAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    fillFinish(result: Gio.AsyncResult): number
    getAvailable(): number
    getBufferSize(): number
    peek(buffer: Uint8Array, offset: number): number
    peekBuffer(): Uint8Array
    readByte(cancellable?: Gio.Cancellable | null): number
    setBufferSize(size: number): void
    /* Methods of Gio-2.0.Gio.FilterInputStream */
    getBaseStream(): Gio.InputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(closeBase: boolean): void
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
    /* Methods of Gio-2.0.Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::byte-order", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::byte-order", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::byte-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::byte-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::byte-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::newline-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::newline-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::newline-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::newline-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::newline-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::buffer-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::close-base-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Static methods and pseudo-constructors */
    static new(baseStream: Gio.InputStream): InputStream
    /* Function overloads */
    static new(baseStream: Gio.InputStream): InputStream
    static new(baseStream: Gio.InputStream): InputStream
    static $gtype: GObject.Type
}
interface OutputStream_ConstructProps extends Gio.DataOutputStream_ConstructProps {
    /* Constructor properties of Jsonrpc-1.0.Jsonrpc.OutputStream */
    useGvariant?: boolean
}
class OutputStream {
    /* Properties of Jsonrpc-1.0.Jsonrpc.OutputStream */
    useGvariant: boolean
    /* Properties of Gio-2.0.Gio.DataOutputStream */
    byteOrder: Gio.DataStreamByteOrder
    /* Fields of Gio-2.0.Gio.DataOutputStream */
    readonly parentInstance: Gio.FilterOutputStream
    /* Fields of Gio-2.0.Gio.FilterOutputStream */
    readonly baseStream: Gio.OutputStream
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Jsonrpc-1.0.Jsonrpc.OutputStream */
    getUseGvariant(): boolean
    setUseGvariant(useGvariant: boolean): void
    writeMessage(message: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    writeMessageAsync(message: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeMessageFinish(result: Gio.AsyncResult): boolean
    /* Methods of Gio-2.0.Gio.DataOutputStream */
    getByteOrder(): Gio.DataStreamByteOrder
    putByte(data: number, cancellable?: Gio.Cancellable | null): boolean
    putInt16(data: number, cancellable?: Gio.Cancellable | null): boolean
    putInt32(data: number, cancellable?: Gio.Cancellable | null): boolean
    putInt64(data: number, cancellable?: Gio.Cancellable | null): boolean
    putString(str: string, cancellable?: Gio.Cancellable | null): boolean
    putUint16(data: number, cancellable?: Gio.Cancellable | null): boolean
    putUint32(data: number, cancellable?: Gio.Cancellable | null): boolean
    putUint64(data: number, cancellable?: Gio.Cancellable | null): boolean
    setByteOrder(order: Gio.DataStreamByteOrder): void
    /* Methods of Gio-2.0.Gio.FilterOutputStream */
    getBaseStream(): Gio.OutputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(closeBase: boolean): void
    /* Methods of Gio-2.0.Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    flush(cancellable?: Gio.Cancellable | null): boolean
    flushAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, cancellable?: Gio.Cancellable | null): number
    spliceAsync(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    spliceFinish(result: Gio.AsyncResult): number
    write(buffer: Uint8Array, cancellable?: Gio.Cancellable | null): number
    writeAll(buffer: Uint8Array, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAllAsync(buffer: Uint8Array, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeAllFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAsync(buffer: Uint8Array, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeBytes(bytes: any, cancellable?: Gio.Cancellable | null): number
    writeBytesAsync(bytes: any, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeBytesFinish(result: Gio.AsyncResult): number
    writeFinish(result: Gio.AsyncResult): number
    writev(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAll(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAllAsync(vectors: Gio.OutputVector[], ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writevAllFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAsync(vectors: Gio.OutputVector[], ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writevFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Seekable */
    canSeek(): boolean
    canTruncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::use-gvariant", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-gvariant", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-gvariant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-gvariant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-gvariant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::byte-order", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::byte-order", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::byte-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::byte-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::byte-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Static methods and pseudo-constructors */
    static new(baseStream: Gio.OutputStream): OutputStream
    /* Function overloads */
    static new(baseStream: Gio.OutputStream): OutputStream
    static $gtype: GObject.Type
}
interface Server_ConstructProps extends GObject.Object_ConstructProps {
}
class Server {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Jsonrpc-1.0.Jsonrpc.Server */
    acceptIoStream(ioStream: Gio.IOStream): void
    addHandler(method: string, handler: ServerHandler): number
    foreach(foreachFunc: GLib.Func): void
    removeHandler(handlerId: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Jsonrpc-1.0.Jsonrpc.Server */
    connect(sigName: "client-accepted", callback: ((client: Client) => void)): number
    on(sigName: "client-accepted", callback: (client: Client) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "client-accepted", callback: (client: Client) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "client-accepted", callback: (client: Client) => void): NodeJS.EventEmitter
    emit(sigName: "client-accepted", client: Client): void
    connect(sigName: "client-closed", callback: ((client: Client) => void)): number
    on(sigName: "client-closed", callback: (client: Client) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "client-closed", callback: (client: Client) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "client-closed", callback: (client: Client) => void): NodeJS.EventEmitter
    emit(sigName: "client-closed", client: Client): void
    connect(sigName: "handle-call", callback: ((client: Client, method: string, id: GLib.Variant, params: GLib.Variant) => boolean)): number
    on(sigName: "handle-call", callback: (client: Client, method: string, id: GLib.Variant, params: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-call", callback: (client: Client, method: string, id: GLib.Variant, params: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-call", callback: (client: Client, method: string, id: GLib.Variant, params: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "handle-call", client: Client, method: string, id: GLib.Variant, params: GLib.Variant): void
    connect(sigName: "notification", callback: ((client: Client, method: string, id: GLib.Variant) => void)): number
    on(sigName: "notification", callback: (client: Client, method: string, id: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notification", callback: (client: Client, method: string, id: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notification", callback: (client: Client, method: string, id: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "notification", client: Client, method: string, id: GLib.Variant): void
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
    constructor (config?: Server_ConstructProps)
    _init (config?: Server_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Server
    static $gtype: GObject.Type
}
abstract class ClientClass {
    /* Fields of Jsonrpc-1.0.Jsonrpc.ClientClass */
    readonly parentClass: GObject.ObjectClass
    readonly notification: (self: Client, methodName: string, params: GLib.Variant) => void
    readonly handleCall: (self: Client, method: string, id: GLib.Variant, params: GLib.Variant) => boolean
    readonly failed: (self: Client) => void
    readonly reserved2: object
    readonly reserved3: object
    readonly reserved4: object
    readonly reserved5: object
    readonly reserved6: object
    readonly reserved7: object
    readonly reserved8: object
    static name: string
}
abstract class InputStreamClass {
    /* Fields of Jsonrpc-1.0.Jsonrpc.InputStreamClass */
    readonly parentClass: Gio.DataInputStreamClass
    readonly reserved1: object
    readonly reserved2: object
    readonly reserved3: object
    readonly reserved4: object
    readonly reserved5: object
    readonly reserved6: object
    readonly reserved7: object
    readonly reserved8: object
    static name: string
}
class MessageAny {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageAny */
    readonly magic: MessageMagic
    static name: string
}
class MessageGetBoolean {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageGetBoolean */
    readonly magic: MessageMagic
    readonly valptr: boolean
    static name: string
}
class MessageGetDict {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageGetDict */
    readonly magic: MessageMagic
    readonly dictptr: GLib.VariantDict
    static name: string
}
class MessageGetDouble {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageGetDouble */
    readonly magic: MessageMagic
    readonly valptr: number
    static name: string
}
class MessageGetInt32 {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageGetInt32 */
    readonly magic: MessageMagic
    readonly valptr: number
    static name: string
}
class MessageGetInt64 {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageGetInt64 */
    readonly magic: MessageMagic
    readonly valptr: number
    static name: string
}
class MessageGetIter {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageGetIter */
    readonly magic: MessageMagic
    static name: string
}
class MessageGetString {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageGetString */
    readonly magic: MessageMagic
    readonly valptr: string
    static name: string
}
class MessageGetStrv {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageGetStrv */
    readonly magic: MessageMagic
    readonly valptr: string
    static name: string
}
class MessageGetVariant {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageGetVariant */
    readonly magic: MessageMagic
    readonly variantptr: GLib.Variant
    static name: string
}
class MessageMagic {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessageMagic */
    readonly bytes: number[]
    static name: string
}
class MessagePutBoolean {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessagePutBoolean */
    readonly magic: MessageMagic
    readonly val: boolean
    static name: string
}
class MessagePutDouble {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessagePutDouble */
    readonly magic: MessageMagic
    readonly val: number
    static name: string
}
class MessagePutInt32 {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessagePutInt32 */
    readonly magic: MessageMagic
    readonly val: number
    static name: string
}
class MessagePutInt64 {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessagePutInt64 */
    readonly magic: MessageMagic
    readonly val: number
    static name: string
}
class MessagePutString {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessagePutString */
    readonly magic: MessageMagic
    readonly val: string
    static name: string
}
class MessagePutStrv {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessagePutStrv */
    readonly magic: MessageMagic
    readonly val: string
    static name: string
}
class MessagePutVariant {
    /* Fields of Jsonrpc-1.0.Jsonrpc.MessagePutVariant */
    readonly magic: MessageMagic
    readonly val: GLib.Variant
    static name: string
}
abstract class OutputStreamClass {
    /* Fields of Jsonrpc-1.0.Jsonrpc.OutputStreamClass */
    readonly parentClass: Gio.DataOutputStreamClass
    readonly reserved1: object
    readonly reserved2: object
    readonly reserved3: object
    readonly reserved4: object
    readonly reserved5: object
    readonly reserved6: object
    readonly reserved7: object
    readonly reserved8: object
    readonly reserved9: object
    readonly reserved10: object
    readonly reserved11: object
    readonly reserved12: object
    static name: string
}
abstract class ServerClass {
    /* Fields of Jsonrpc-1.0.Jsonrpc.ServerClass */
    readonly parentClass: GObject.ObjectClass
    readonly handleCall: (self: Server, client: Client, method: string, id: GLib.Variant, params: GLib.Variant) => boolean
    readonly notification: (self: Server, client: Client, method: string, params: GLib.Variant) => void
    readonly clientAccepted: (self: Server, client: Client) => void
    readonly clientClosed: (self: Server, client: Client) => void
    static name: string
}
}
export default Jsonrpc;