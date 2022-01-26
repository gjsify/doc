/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * MediaArt-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace MediaArt {

enum Error {
    NO_STORAGE,
    NO_TITLE,
    SYMLINK_FAILED,
    RENAME_FAILED,
}
enum Type {
    NONE,
    ALBUM,
    VIDEO,
}
enum ProcessFlags {
    NONE,
    FORCE,
}
function bufferToJpeg(buffer: number, len: number, bufferMime: string, target: string): boolean
function errorQuark(): GLib.Quark
function fileToJpeg(filename: string, target: string): boolean
function getFile(artist?: string | null, title?: string | null, prefix?: string | null, file?: Gio.File | null): [ /* returnType */ boolean, /* cacheFile */ Gio.File | null, /* localFile */ Gio.File | null ]
function getPath(artist?: string | null, title?: string | null, prefix?: string | null, uri?: string | null): [ /* returnType */ boolean, /* cachePath */ string | null, /* localUri */ string | null ]
function pluginInit(maxWidth: number): void
function pluginShutdown(): void
function remove(artist: string, album?: string | null): boolean
function stripInvalidEntities(original: string): string
interface Process_ConstructProps extends GObject.Object_ConstructProps {
}
class Process {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of MediaArt-1.0.MediaArt.Process */
    buffer(type: Type, flags: ProcessFlags, relatedFile: Gio.File, buffer: Uint8Array | null, mime: string, artist?: string | null, title?: string | null): boolean
    file(type: Type, flags: ProcessFlags, file: Gio.File, artist?: string | null, title?: string | null): boolean
    uri(type: Type, flags: ProcessFlags, uri: string, artist?: string | null, title?: string | null): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
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
    constructor (config?: Process_ConstructProps)
    _init (config?: Process_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Process
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
abstract class ProcessClass {
    /* Fields of MediaArt-1.0.MediaArt.ProcessClass */
    readonly parent: GObject.ObjectClass
    static name: string
}
}
export default MediaArt;