/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gsf-1
 */

import type libxml2 from './libxml2-2.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Gsf {

enum ClipFormat {
    WINDOWS_CLIPBOARD,
    MACINTOSH_CLIPBOARD,
    GUID,
    NO_DATA,
    CLIPBOARD_FORMAT_NAME,
    UNKNOWN,
}
enum ClipFormatWindows {
    ERROR,
    UNKNOWN,
    METAFILE,
    DIB,
    ENHANCED_METAFILE,
}
enum Error {
    OUT_OF_MEMORY,
    INVALID_DATA,
}
enum OutputCsvQuotingMode {
    NEVER,
    AUTO,
    ALWAYS,
}
enum XMLContent {
    NO_CONTENT,
    CONTENT,
    SHARED_CONTENT,
    TODO_2ND,
}
enum ZipCompressionMethod {
    STORED,
    SHRUNK,
    REDUCEDX1,
    REDUCEDX2,
    REDUCEDX3,
    REDUCEDX4,
    IMPLODED,
    TOKENIZED,
    DEFLATED,
    DEFLATED_BETTER,
    IMPLODED_BETTER,
}
const META_NAME_BYTE_COUNT: string
const META_NAME_CASE_SENSITIVE: string
const META_NAME_CATEGORY: string
const META_NAME_CELL_COUNT: string
const META_NAME_CHARACTER_COUNT: string
const META_NAME_CODEPAGE: string
const META_NAME_COMPANY: string
const META_NAME_CREATOR: string
const META_NAME_DATE_CREATED: string
const META_NAME_DATE_MODIFIED: string
const META_NAME_DESCRIPTION: string
const META_NAME_DICTIONARY: string
const META_NAME_DOCUMENT_PARTS: string
const META_NAME_EDITING_DURATION: string
const META_NAME_GENERATOR: string
const META_NAME_HEADING_PAIRS: string
const META_NAME_HIDDEN_SLIDE_COUNT: string
const META_NAME_IMAGE_COUNT: string
const META_NAME_INITIAL_CREATOR: string
const META_NAME_KEYWORD: string
const META_NAME_KEYWORDS: string
const META_NAME_LANGUAGE: string
const META_NAME_LAST_PRINTED: string
const META_NAME_LAST_SAVED_BY: string
const META_NAME_LINE_COUNT: string
const META_NAME_LINKS_DIRTY: string
const META_NAME_LOCALE_SYSTEM_DEFAULT: string
const META_NAME_MANAGER: string
const META_NAME_MM_CLIP_COUNT: string
const META_NAME_MSOLE_UNKNOWN_17: string
const META_NAME_MSOLE_UNKNOWN_18: string
const META_NAME_MSOLE_UNKNOWN_19: string
const META_NAME_MSOLE_UNKNOWN_20: string
const META_NAME_MSOLE_UNKNOWN_21: string
const META_NAME_MSOLE_UNKNOWN_22: string
const META_NAME_MSOLE_UNKNOWN_23: string
const META_NAME_NOTE_COUNT: string
const META_NAME_OBJECT_COUNT: string
const META_NAME_PAGE_COUNT: string
const META_NAME_PARAGRAPH_COUNT: string
const META_NAME_PRESENTATION_FORMAT: string
const META_NAME_PRINTED_BY: string
const META_NAME_PRINT_DATE: string
const META_NAME_REVISION_COUNT: string
const META_NAME_SCALE: string
const META_NAME_SECURITY: string
const META_NAME_SLIDE_COUNT: string
const META_NAME_SPREADSHEET_COUNT: string
const META_NAME_SUBJECT: string
const META_NAME_TABLE_COUNT: string
const META_NAME_TEMPLATE: string
const META_NAME_THUMBNAIL: string
const META_NAME_TITLE: string
const META_NAME_WORD_COUNT: string
function base64DecodeSimple(data: Uint8Array, len: number): number
function base64DecodeStep(in_: Uint8Array, len: number, out: Uint8Array, state: number, save: number): [ /* returnType */ number, /* state */ number, /* save */ number ]
function base64EncodeClose(in_: Uint8Array, breakLines: boolean, out: Uint8Array, state: number, save: number): [ /* returnType */ number, /* state */ number, /* save */ number ]
function base64EncodeSimple(data: Uint8Array, len: number): number
function base64EncodeStep(in_: Uint8Array, len: number, breakLines: boolean, out: Uint8Array, state: number, save: number): [ /* returnType */ number, /* state */ number, /* save */ number ]
function debugFlag(flag: string): boolean
function docMetaDump(meta: DocMetaData): void
function errorQuark(): GLib.Quark
function extensionPointer(path: string): string
function filenameToUtf8(filename: string, quoted: boolean): string
function init(): void
function initDynamic(module: GObject.TypeModule): void
function leGetDouble(p?: object | null): number
function leGetFloat(p?: object | null): number
function leGetGuint64(p?: object | null): number
function leSetDouble(p: object | null, d: number): void
function leSetFloat(p: object | null, f: number): void
function memDump(ptr: number, len: number): void
function msoleCodepageToLid(codepage: number): number
function msoleIconvWinCodepage(): number
function msoleInflate(input: Input, offset: gsf_off_t): Uint8Array
function msoleLanguageForLid(lid: number): string
function msoleLidForLanguage(lang?: string | null): number
function msoleLidToCodepage(lid: number): number
function msoleLidToCodepageStr(lid: number): string
function odfGetNs(): XMLInNS
function odfGetVersion(): number
function odfGetVersionString(): string
function openPkgErrorId(): number
function openPkgForeachRel(opkg: Input, func: OpenPkgIter): void
function openPkgOpenRel(opkg: Input, rel: OpenPkgRel): Input
function openPkgOpenRelById(opkg: Input, id: string): Input
function openPkgOpenRelByType(opkg: Input, type: string): Input
function openPkgParseRelById(xin: XMLIn, id: string, dtd: XMLInNode, ns: XMLInNS): GLib.Error
function propertySettingsFind(name: string, params: GObject.Parameter[]): GObject.Parameter
function propertySettingsFree(params: GObject.Parameter[]): void
function shutdown(): void
function shutdownDynamic(module: GObject.TypeModule): void
function valueGetDocpropArray(value: any): any[] | null
function valueGetDocpropVarray(value: any): GObject.ValueArray
function valueGetDocpropVector(value: any): DocPropVector
function vbaInflate(input: Input, offset: gsf_off_t, size: number, addNullTerminator: boolean): number
function xmlDocFormatDump(output: Output, cur: libxml2.Doc, encoding: string | null, format: boolean): number
function xmlGvalueFromStr(res: any, t: GObject.Type, str: string): boolean
function xmlProbe(input: Input, func: XMLProbeFunc): boolean
interface OpenPkgIter {
    (opkg: Input, rel: OpenPkgRel): void
}
interface XMLInExtDtor {
    (xin: XMLIn, oldState?: object | null): void
}
interface XMLInUnknownFunc {
    (xin: XMLIn, elem: libxml2.Char, attrs: libxml2.Char): boolean
}
interface XMLProbeFunc {
    (name: libxml2.Char, prefix: libxml2.Char, uRI: libxml2.Char, nbNamespaces: number, namespaces: libxml2.Char, nbAttributes: number, nbDefaulted: number, attributes: libxml2.Char): boolean
}
interface Blob_ConstructProps extends GObject.Object_ConstructProps {
}
class Blob {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.Blob */
    getSize(): number
    peekData(): object | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: Blob_ConstructProps)
    _init (config?: Blob_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dataToCopy: Uint8Array): Blob
    static $gtype: GObject.Type
}
interface ClipData_ConstructProps extends GObject.Object_ConstructProps {
}
class ClipData {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.ClipData */
    getDataBlob(): Blob
    getFormat(): ClipFormat
    getWindowsClipboardFormat(): ClipFormatWindows
    peekRealData(retSize: number): object | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: ClipData_ConstructProps)
    _init (config?: ClipData_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(format: ClipFormat, dataBlob: Blob): ClipData
    static $gtype: GObject.Type
}
interface DocMetaData_ConstructProps extends GObject.Object_ConstructProps {
}
class DocMetaData {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.DocMetaData */
    foreach(func: GLib.HFunc): void
    insert(name: string, value: any): void
    lookup(name: string): DocProp | null
    odfSubtree(doc: XMLIn): void
    readFromMsole(in_: Input): GLib.Error
    readFromOdf(input: Input): GLib.Error
    remove(name: string): void
    size(): number
    steal(name: string): DocProp | null
    store(prop: DocProp): void
    writeToMsole(out: Output, docNotComponent: boolean): boolean
    writeToOdf(output: XMLOut): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: DocMetaData_ConstructProps)
    _init (config?: DocMetaData_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DocMetaData
    static $gtype: GObject.Type
}
interface DocPropVector_ConstructProps extends GObject.Object_ConstructProps {
}
class DocPropVector {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.DocPropVector */
    append(value: any): void
    asString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: DocPropVector_ConstructProps)
    _init (config?: DocPropVector_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DocPropVector
    static $gtype: GObject.Type
}
interface Infile_ConstructProps extends Input_ConstructProps {
}
class Infile {
    /* Properties of Gsf-1.Gsf.Input */
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly position: number
    readonly remaining: number
    /* Fields of Gsf-1.Gsf.Input */
    readonly gObject: GObject.Object
    readonly size: gsf_off_t
    readonly curOffset: gsf_off_t
    readonly name: string
    readonly container: Infile
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.Infile */
    childByAname(names: string[]): Input
    childByIndex(i: number): Input
    childByName(name: string): Input
    nameByIndex(i: number): string | null
    numChildren(): number
    /* Methods of Gsf-1.Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): Uint8Array
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Infile_ConstructProps)
    _init (config?: Infile_ConstructProps): void
    static $gtype: GObject.Type
}
interface InfileMSOle_ConstructProps extends Infile_ConstructProps {
}
class InfileMSOle {
    /* Properties of Gsf-1.Gsf.Input */
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly position: number
    readonly remaining: number
    /* Fields of Gsf-1.Gsf.Infile */
    readonly parent: Input
    /* Fields of Gsf-1.Gsf.Input */
    readonly gObject: GObject.Object
    readonly size: gsf_off_t
    readonly curOffset: gsf_off_t
    readonly name: string
    readonly container: Infile
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.InfileMSOle */
    getClassId(res: number): boolean
    /* Methods of Gsf-1.Gsf.Infile */
    childByAname(names: string[]): Input
    childByIndex(i: number): Input
    childByName(name: string): Input
    nameByIndex(i: number): string | null
    numChildren(): number
    /* Methods of Gsf-1.Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): Uint8Array
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InfileMSOle_ConstructProps)
    _init (config?: InfileMSOle_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Input): InfileMSOle
    static $gtype: GObject.Type
}
interface InfileMSVBA_ConstructProps extends Infile_ConstructProps {
}
class InfileMSVBA {
    /* Properties of Gsf-1.Gsf.Input */
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly position: number
    readonly remaining: number
    /* Fields of Gsf-1.Gsf.Infile */
    readonly parent: Input
    /* Fields of Gsf-1.Gsf.Input */
    readonly gObject: GObject.Object
    readonly size: gsf_off_t
    readonly curOffset: gsf_off_t
    readonly name: string
    readonly container: Infile
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.InfileMSVBA */
    getModules(): GLib.HashTable | null
    stealModules(): GLib.HashTable | null
    /* Methods of Gsf-1.Gsf.Infile */
    childByAname(names: string[]): Input
    childByIndex(i: number): Input
    childByName(name: string): Input
    nameByIndex(i: number): string | null
    numChildren(): number
    /* Methods of Gsf-1.Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): Uint8Array
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InfileMSVBA_ConstructProps)
    _init (config?: InfileMSVBA_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Infile): InfileMSVBA
    static $gtype: GObject.Type
}
interface InfileStdio_ConstructProps extends Infile_ConstructProps {
}
class InfileStdio {
    /* Properties of Gsf-1.Gsf.Input */
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly position: number
    readonly remaining: number
    /* Fields of Gsf-1.Gsf.Infile */
    readonly parent: Input
    /* Fields of Gsf-1.Gsf.Input */
    readonly gObject: GObject.Object
    readonly size: gsf_off_t
    readonly curOffset: gsf_off_t
    readonly name: string
    readonly container: Infile
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.Infile */
    childByAname(names: string[]): Input
    childByIndex(i: number): Input
    childByName(name: string): Input
    nameByIndex(i: number): string | null
    numChildren(): number
    /* Methods of Gsf-1.Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): Uint8Array
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InfileStdio_ConstructProps)
    _init (config?: InfileStdio_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(root: string): InfileStdio
    static $gtype: GObject.Type
}
interface InfileTar_ConstructProps extends Infile_ConstructProps {
    /* Constructor properties of Gsf-1.Gsf.InfileTar */
    source?: Input
}
class InfileTar {
    /* Properties of Gsf-1.Gsf.Input */
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly position: number
    readonly remaining: number
    /* Fields of Gsf-1.Gsf.Infile */
    readonly parent: Input
    /* Fields of Gsf-1.Gsf.Input */
    readonly gObject: GObject.Object
    readonly size: gsf_off_t
    readonly curOffset: gsf_off_t
    readonly name: string
    readonly container: Infile
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.Infile */
    childByAname(names: string[]): Input
    childByIndex(i: number): Input
    childByName(name: string): Input
    nameByIndex(i: number): string | null
    numChildren(): number
    /* Methods of Gsf-1.Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): Uint8Array
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InfileTar_ConstructProps)
    _init (config?: InfileTar_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Input): InfileTar
    static $gtype: GObject.Type
}
interface InfileZip_ConstructProps extends Infile_ConstructProps {
    /* Constructor properties of Gsf-1.Gsf.InfileZip */
    internalParent?: InfileZip
    source?: Input
}
class InfileZip {
    /* Properties of Gsf-1.Gsf.InfileZip */
    readonly compressionLevel: number
    readonly zip64: boolean
    /* Properties of Gsf-1.Gsf.Input */
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly position: number
    readonly remaining: number
    /* Fields of Gsf-1.Gsf.Infile */
    readonly parent: Input
    /* Fields of Gsf-1.Gsf.Input */
    readonly gObject: GObject.Object
    readonly size: gsf_off_t
    readonly curOffset: gsf_off_t
    readonly name: string
    readonly container: Infile
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.Infile */
    childByAname(names: string[]): Input
    childByIndex(i: number): Input
    childByName(name: string): Input
    nameByIndex(i: number): string | null
    numChildren(): number
    /* Methods of Gsf-1.Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): Uint8Array
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::compression-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compression-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compression-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compression-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compression-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::zip64", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zip64", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::zip64", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::zip64", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::zip64", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InfileZip_ConstructProps)
    _init (config?: InfileZip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Input): InfileZip
    static $gtype: GObject.Type
}
interface Input_ConstructProps extends GObject.Object_ConstructProps {
}
class Input {
    /* Properties of Gsf-1.Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): Uint8Array
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::container", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Input_ConstructProps)
    _init (config?: Input_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static mmapNew(filename: string): Input
    static errorId(): GLib.Quark
    static $gtype: GObject.Type
}
interface InputGZip_ConstructProps extends Input_ConstructProps {
    /* Constructor properties of Gsf-1.Gsf.InputGZip */
    raw?: boolean
    source?: Input
    uncompressedSize?: number
}
class InputGZip {
    /* Properties of Gsf-1.Gsf.Input */
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly position: number
    readonly remaining: number
    /* Fields of Gsf-1.Gsf.Input */
    readonly gObject: GObject.Object
    readonly size: gsf_off_t
    readonly curOffset: gsf_off_t
    readonly name: string
    readonly container: Infile
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): Uint8Array
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InputGZip_ConstructProps)
    _init (config?: InputGZip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Input): InputGZip
    static $gtype: GObject.Type
}
interface InputGio_ConstructProps extends Input_ConstructProps {
}
class InputGio {
    /* Properties of Gsf-1.Gsf.Input */
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly position: number
    readonly remaining: number
    /* Fields of Gsf-1.Gsf.Input */
    readonly gObject: GObject.Object
    readonly size: gsf_off_t
    readonly curOffset: gsf_off_t
    readonly name: string
    readonly container: Infile
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): Uint8Array
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InputGio_ConstructProps)
    _init (config?: InputGio_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(file: Gio.File): InputGio
    static newForPath(path: string): InputGio
    static newForUri(uri: string): InputGio
    static $gtype: GObject.Type
}
interface InputHTTP_ConstructProps extends Input_ConstructProps {
    /* Constructor properties of Gsf-1.Gsf.InputHTTP */
    contentType?: string
    url?: string
}
class InputHTTP {
    /* Properties of Gsf-1.Gsf.Input */
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly position: number
    readonly remaining: number
    /* Fields of Gsf-1.Gsf.Input */
    readonly gObject: GObject.Object
    readonly size: gsf_off_t
    readonly curOffset: gsf_off_t
    readonly name: string
    readonly container: Infile
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.InputHTTP */
    getContentType(): string
    getUrl(): string
    /* Methods of Gsf-1.Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): Uint8Array
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InputHTTP_ConstructProps)
    _init (config?: InputHTTP_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(url: string): InputHTTP
    static $gtype: GObject.Type
}
interface InputMemory_ConstructProps extends Input_ConstructProps {
}
class InputMemory {
    /* Properties of Gsf-1.Gsf.Input */
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly position: number
    readonly remaining: number
    /* Fields of Gsf-1.Gsf.Input */
    readonly gObject: GObject.Object
    readonly size: gsf_off_t
    readonly curOffset: gsf_off_t
    readonly name: string
    readonly container: Infile
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): Uint8Array
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InputMemory_ConstructProps)
    _init (config?: InputMemory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(buf: Uint8Array, needsFree: boolean): InputMemory
    static newClone(buf: Uint8Array): InputMemory
    static newFromBzip(source: Input): InputMemory
    static newFromIochannel(channel: GLib.IOChannel): InputMemory
    static $gtype: GObject.Type
}
interface InputProxy_ConstructProps extends Input_ConstructProps {
}
class InputProxy {
    /* Properties of Gsf-1.Gsf.Input */
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly position: number
    readonly remaining: number
    /* Fields of Gsf-1.Gsf.Input */
    readonly gObject: GObject.Object
    readonly size: gsf_off_t
    readonly curOffset: gsf_off_t
    readonly name: string
    readonly container: Infile
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): Uint8Array
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InputProxy_ConstructProps)
    _init (config?: InputProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Input): InputProxy
    static newSection(source: Input, offset: gsf_off_t, size: gsf_off_t): InputProxy
    static $gtype: GObject.Type
}
interface InputStdio_ConstructProps extends Input_ConstructProps {
}
class InputStdio {
    /* Properties of Gsf-1.Gsf.Input */
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly position: number
    readonly remaining: number
    /* Fields of Gsf-1.Gsf.Input */
    readonly gObject: GObject.Object
    readonly size: gsf_off_t
    readonly curOffset: gsf_off_t
    readonly name: string
    readonly container: Infile
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): Uint8Array
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InputStdio_ConstructProps)
    _init (config?: InputStdio_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string): InputStdio
    static newFILE(filename: string, file: object | null, keepOpen: boolean): InputStdio
    static $gtype: GObject.Type
}
interface InputTextline_ConstructProps extends Input_ConstructProps {
}
class InputTextline {
    /* Properties of Gsf-1.Gsf.Input */
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly position: number
    readonly remaining: number
    /* Fields of Gsf-1.Gsf.Input */
    readonly gObject: GObject.Object
    readonly size: gsf_off_t
    readonly curOffset: gsf_off_t
    readonly name: string
    readonly container: Infile
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.InputTextline */
    asciiGets(): Uint8Array | null
    utf8Gets(): Uint8Array | null
    /* Methods of Gsf-1.Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): Uint8Array
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InputTextline_ConstructProps)
    _init (config?: InputTextline_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Input): InputTextline
    static $gtype: GObject.Type
}
interface ODFOut_ConstructProps extends XMLOut_ConstructProps {
    /* Constructor properties of Gsf-1.Gsf.ODFOut */
    odfVersion?: number
}
class ODFOut {
    /* Properties of Gsf-1.Gsf.XMLOut */
    prettyPrint: boolean
    /* Fields of Gsf-1.Gsf.XMLOut */
    readonly base: GObject.Object
    readonly output: Output
    readonly priv: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.ODFOut */
    getVersion(): number
    getVersionString(): string
    /* Methods of Gsf-1.Gsf.XMLOut */
    addBase64(id: string | null, data: Uint8Array): void
    addBool(id: string | null, val: boolean): void
    addColor(id: string | null, r: number, g: number, b: number): void
    addCstr(id?: string | null, valUtf8?: string | null): void
    addCstrUnchecked(id?: string | null, valUtf8?: string | null): void
    addEnum(id: string | null, etype: GObject.Type, val: number): void
    addFloat(id: string | null, val: number, precision: number): void
    addGvalue(id: string | null, val: any): void
    addInt(id: string | null, val: number): void
    addUint(id: string | null, val: number): void
    endElement(): string
    getOutput(): Output | null
    getPrettyPrint(): boolean
    setDocType(type: string): void
    setPrettyPrint(pp: boolean): boolean
    simpleElement(id: string, content: string): void
    simpleFloatElement(id: string, val: number, precision: number): void
    simpleIntElement(id: string, val: number): void
    startElement(id: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::pretty-print", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pretty-print", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pretty-print", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pretty-print", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pretty-print", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ODFOut_ConstructProps)
    _init (config?: ODFOut_ConstructProps): void
    static $gtype: GObject.Type
}
interface Outfile_ConstructProps extends Output_ConstructProps {
}
class Outfile {
    /* Properties of Gsf-1.Gsf.Output */
    readonly position: number
    readonly size: number
    /* Fields of Gsf-1.Gsf.Output */
    readonly gObject: GObject.Object
    readonly curSize: gsf_off_t
    readonly curOffset: gsf_off_t
    readonly name: string
    readonly wrappedBy: GObject.Object
    readonly container: Outfile
    readonly err: GLib.Error
    readonly isClosed: boolean
    readonly printfBuf: string
    readonly printfBufSize: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.Outfile */
    newChild(name: string, isDir: boolean): Output
    openPkgAddRel(name: string, contentType: string, parent: Outfile, type: string): Output
    /* Methods of Gsf-1.Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    setContainer(container?: Outfile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: Uint8Array): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Outfile_ConstructProps)
    _init (config?: Outfile_ConstructProps): void
    static $gtype: GObject.Type
}
interface OutfileMSOle_ConstructProps extends Outfile_ConstructProps {
    /* Constructor properties of Gsf-1.Gsf.OutfileMSOle */
    bigBlockSize?: number
    sink?: Output
    smallBlockSize?: number
}
class OutfileMSOle {
    /* Properties of Gsf-1.Gsf.Output */
    readonly position: number
    readonly size: number
    /* Fields of Gsf-1.Gsf.Outfile */
    readonly parent: Output
    /* Fields of Gsf-1.Gsf.Output */
    readonly gObject: GObject.Object
    readonly curSize: gsf_off_t
    readonly curOffset: gsf_off_t
    readonly name: string
    readonly wrappedBy: GObject.Object
    readonly container: Outfile
    readonly err: GLib.Error
    readonly isClosed: boolean
    readonly printfBuf: string
    readonly printfBufSize: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.OutfileMSOle */
    setClassId(clsid: Uint8Array): boolean
    /* Methods of Gsf-1.Gsf.Outfile */
    newChild(name: string, isDir: boolean): Output
    openPkgAddRel(name: string, contentType: string, parent: Outfile, type: string): Output
    /* Methods of Gsf-1.Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    setContainer(container?: Outfile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: Uint8Array): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OutfileMSOle_ConstructProps)
    _init (config?: OutfileMSOle_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sink: Output): OutfileMSOle
    static newFull(sink: Output, bbSize: number, sbSize: number): OutfileMSOle
    static $gtype: GObject.Type
}
interface OutfileOpenPkg_ConstructProps extends Outfile_ConstructProps {
    /* Constructor properties of Gsf-1.Gsf.OutfileOpenPkg */
    contentType?: string
    isDir?: boolean
    sink?: Outfile
}
class OutfileOpenPkg {
    /* Properties of Gsf-1.Gsf.Output */
    readonly position: number
    readonly size: number
    /* Fields of Gsf-1.Gsf.Outfile */
    readonly parent: Output
    /* Fields of Gsf-1.Gsf.Output */
    readonly gObject: GObject.Object
    readonly curSize: gsf_off_t
    readonly curOffset: gsf_off_t
    readonly name: string
    readonly wrappedBy: GObject.Object
    readonly container: Outfile
    readonly err: GLib.Error
    readonly isClosed: boolean
    readonly printfBuf: string
    readonly printfBufSize: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.OutfileOpenPkg */
    addExternRel(target: string, contentType: string): string
    relate(parent: OutfileOpenPkg, type: string): string
    setContentType(contentType: string): void
    setSink(sink: Output): void
    /* Methods of Gsf-1.Gsf.Outfile */
    newChild(name: string, isDir: boolean): Output
    openPkgAddRel(name: string, contentType: string, parent: Outfile, type: string): Output
    /* Methods of Gsf-1.Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    setContainer(container?: Outfile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: Uint8Array): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OutfileOpenPkg_ConstructProps)
    _init (config?: OutfileOpenPkg_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sink: Outfile): OutfileOpenPkg
    static $gtype: GObject.Type
}
interface OutfileStdio_ConstructProps extends Outfile_ConstructProps {
}
class OutfileStdio {
    /* Properties of Gsf-1.Gsf.Output */
    readonly position: number
    readonly size: number
    /* Fields of Gsf-1.Gsf.Outfile */
    readonly parent: Output
    /* Fields of Gsf-1.Gsf.Output */
    readonly gObject: GObject.Object
    readonly curSize: gsf_off_t
    readonly curOffset: gsf_off_t
    readonly name: string
    readonly wrappedBy: GObject.Object
    readonly container: Outfile
    readonly err: GLib.Error
    readonly isClosed: boolean
    readonly printfBuf: string
    readonly printfBufSize: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.Outfile */
    newChild(name: string, isDir: boolean): Output
    openPkgAddRel(name: string, contentType: string, parent: Outfile, type: string): Output
    /* Methods of Gsf-1.Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    setContainer(container?: Outfile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: Uint8Array): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OutfileStdio_ConstructProps)
    _init (config?: OutfileStdio_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(root: string): OutfileStdio
    static $gtype: GObject.Type
}
interface OutfileZip_ConstructProps extends Outfile_ConstructProps {
    /* Constructor properties of Gsf-1.Gsf.OutfileZip */
    compressionLevel?: number
    deflateLevel?: number
    entryName?: string
    sink?: Output
    zip64?: number
}
class OutfileZip {
    /* Properties of Gsf-1.Gsf.Output */
    readonly position: number
    readonly size: number
    /* Fields of Gsf-1.Gsf.Outfile */
    readonly parent: Output
    /* Fields of Gsf-1.Gsf.Output */
    readonly gObject: GObject.Object
    readonly curSize: gsf_off_t
    readonly curOffset: gsf_off_t
    readonly name: string
    readonly wrappedBy: GObject.Object
    readonly container: Outfile
    readonly err: GLib.Error
    readonly isClosed: boolean
    readonly printfBuf: string
    readonly printfBufSize: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.OutfileZip */
    setCompressionMethod(method: ZipCompressionMethod): boolean
    /* Methods of Gsf-1.Gsf.Outfile */
    newChild(name: string, isDir: boolean): Output
    openPkgAddRel(name: string, contentType: string, parent: Outfile, type: string): Output
    /* Methods of Gsf-1.Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    setContainer(container?: Outfile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: Uint8Array): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OutfileZip_ConstructProps)
    _init (config?: OutfileZip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sink: Output): OutfileZip
    static $gtype: GObject.Type
}
interface Output_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gsf-1.Gsf.Output */
    container?: Outfile
    modtime?: GLib.DateTime
    name?: string
}
class Output {
    /* Properties of Gsf-1.Gsf.Output */
    container: Outfile
    readonly isClosed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    setContainer(container?: Outfile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: Uint8Array): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::container", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Output_ConstructProps)
    _init (config?: Output_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorId(): GLib.Quark
    static unwrap(wrapper: GObject.Object, wrapee: Output): boolean
    static wrap(wrapper: GObject.Object, wrapee: Output): boolean
    static $gtype: GObject.Type
}
interface OutputBzip_ConstructProps extends Output_ConstructProps {
}
class OutputBzip {
    /* Properties of Gsf-1.Gsf.Output */
    readonly position: number
    readonly size: number
    /* Fields of Gsf-1.Gsf.Output */
    readonly gObject: GObject.Object
    readonly curSize: gsf_off_t
    readonly curOffset: gsf_off_t
    readonly name: string
    readonly wrappedBy: GObject.Object
    readonly container: Outfile
    readonly err: GLib.Error
    readonly isClosed: boolean
    readonly printfBuf: string
    readonly printfBufSize: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    setContainer(container?: Outfile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: Uint8Array): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OutputBzip_ConstructProps)
    _init (config?: OutputBzip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sink: Output): OutputBzip
    static $gtype: GObject.Type
}
interface OutputCsv_ConstructProps extends Output_ConstructProps {
    /* Constructor properties of Gsf-1.Gsf.OutputCsv */
    eol?: string
    quote?: string
    quotingMode?: OutputCsvQuotingMode
    quotingOnWhitespace?: boolean
    quotingTriggers?: string
    separator?: string
    sink?: Output
}
class OutputCsv {
    /* Properties of Gsf-1.Gsf.OutputCsv */
    eol: string
    quote: string
    quotingMode: OutputCsvQuotingMode
    quotingOnWhitespace: boolean
    quotingTriggers: string
    separator: string
    sink: Output
    /* Properties of Gsf-1.Gsf.Output */
    readonly position: number
    readonly size: number
    /* Fields of Gsf-1.Gsf.Output */
    readonly gObject: GObject.Object
    readonly curSize: gsf_off_t
    readonly curOffset: gsf_off_t
    readonly name: string
    readonly wrappedBy: GObject.Object
    readonly container: Outfile
    readonly err: GLib.Error
    readonly isClosed: boolean
    readonly printfBuf: string
    readonly printfBufSize: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.OutputCsv */
    writeEol(): boolean
    writeField(field: string, len: number): boolean
    /* Methods of Gsf-1.Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    setContainer(container?: Outfile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: Uint8Array): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::eol", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eol", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quote", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quote", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quote", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quote", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quote", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quoting-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quoting-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quoting-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quoting-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quoting-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quoting-on-whitespace", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quoting-on-whitespace", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quoting-on-whitespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quoting-on-whitespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quoting-on-whitespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quoting-triggers", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quoting-triggers", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quoting-triggers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quoting-triggers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quoting-triggers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::separator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::separator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::separator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::separator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::separator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sink", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OutputCsv_ConstructProps)
    _init (config?: OutputCsv_ConstructProps): void
    static $gtype: GObject.Type
}
interface OutputGZip_ConstructProps extends Output_ConstructProps {
    /* Constructor properties of Gsf-1.Gsf.OutputGZip */
    deflateLevel?: number
    raw?: boolean
    sink?: Output
}
class OutputGZip {
    /* Properties of Gsf-1.Gsf.OutputGZip */
    deflateLevel: number
    /* Properties of Gsf-1.Gsf.Output */
    readonly position: number
    readonly size: number
    /* Fields of Gsf-1.Gsf.Output */
    readonly gObject: GObject.Object
    readonly curSize: gsf_off_t
    readonly curOffset: gsf_off_t
    readonly name: string
    readonly wrappedBy: GObject.Object
    readonly container: Outfile
    readonly err: GLib.Error
    readonly isClosed: boolean
    readonly printfBuf: string
    readonly printfBufSize: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    setContainer(container?: Outfile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: Uint8Array): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::deflate-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deflate-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::deflate-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::deflate-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::deflate-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OutputGZip_ConstructProps)
    _init (config?: OutputGZip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sink: Output): OutputGZip
    static $gtype: GObject.Type
}
interface OutputGio_ConstructProps extends Output_ConstructProps {
}
class OutputGio {
    /* Properties of Gsf-1.Gsf.Output */
    readonly position: number
    readonly size: number
    /* Fields of Gsf-1.Gsf.Output */
    readonly gObject: GObject.Object
    readonly curSize: gsf_off_t
    readonly curOffset: gsf_off_t
    readonly name: string
    readonly wrappedBy: GObject.Object
    readonly container: Outfile
    readonly err: GLib.Error
    readonly isClosed: boolean
    readonly printfBuf: string
    readonly printfBufSize: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    setContainer(container?: Outfile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: Uint8Array): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OutputGio_ConstructProps)
    _init (config?: OutputGio_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(file: Gio.File): OutputGio
    static newForPath(path: string): OutputGio
    static newForUri(uri: string): OutputGio
    static $gtype: GObject.Type
}
interface OutputIOChannel_ConstructProps extends Output_ConstructProps {
}
class OutputIOChannel {
    /* Properties of Gsf-1.Gsf.Output */
    readonly position: number
    readonly size: number
    /* Fields of Gsf-1.Gsf.Output */
    readonly gObject: GObject.Object
    readonly curSize: gsf_off_t
    readonly curOffset: gsf_off_t
    readonly name: string
    readonly wrappedBy: GObject.Object
    readonly container: Outfile
    readonly err: GLib.Error
    readonly isClosed: boolean
    readonly printfBuf: string
    readonly printfBufSize: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    setContainer(container?: Outfile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: Uint8Array): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OutputIOChannel_ConstructProps)
    _init (config?: OutputIOChannel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(channel: GLib.IOChannel): OutputIOChannel
    static $gtype: GObject.Type
}
interface OutputIconv_ConstructProps extends Output_ConstructProps {
    /* Constructor properties of Gsf-1.Gsf.OutputIconv */
    fallback?: string
    inputCharset?: string
    outputCharset?: string
    sink?: Output
}
class OutputIconv {
    /* Properties of Gsf-1.Gsf.OutputIconv */
    fallback: string
    /* Properties of Gsf-1.Gsf.Output */
    readonly position: number
    readonly size: number
    /* Fields of Gsf-1.Gsf.Output */
    readonly gObject: GObject.Object
    readonly curSize: gsf_off_t
    readonly curOffset: gsf_off_t
    readonly name: string
    readonly wrappedBy: GObject.Object
    readonly container: Outfile
    readonly err: GLib.Error
    readonly isClosed: boolean
    readonly printfBuf: string
    readonly printfBufSize: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    setContainer(container?: Outfile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: Uint8Array): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::fallback", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fallback", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fallback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fallback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fallback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OutputIconv_ConstructProps)
    _init (config?: OutputIconv_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sink: Output, dst: string, src: string): OutputIconv
    static $gtype: GObject.Type
}
interface OutputMemory_ConstructProps extends Output_ConstructProps {
}
class OutputMemory {
    /* Properties of Gsf-1.Gsf.Output */
    readonly position: number
    readonly size: number
    /* Fields of Gsf-1.Gsf.Output */
    readonly gObject: GObject.Object
    readonly curSize: gsf_off_t
    readonly curOffset: gsf_off_t
    readonly name: string
    readonly wrappedBy: GObject.Object
    readonly container: Outfile
    readonly err: GLib.Error
    readonly isClosed: boolean
    readonly printfBuf: string
    readonly printfBufSize: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.OutputMemory */
    getBytes(): Uint8Array | null
    stealBytes(): Uint8Array | null
    /* Methods of Gsf-1.Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    setContainer(container?: Outfile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: Uint8Array): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OutputMemory_ConstructProps)
    _init (config?: OutputMemory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): OutputMemory
    static $gtype: GObject.Type
}
interface OutputStdio_ConstructProps extends Output_ConstructProps {
}
class OutputStdio {
    /* Properties of Gsf-1.Gsf.Output */
    readonly position: number
    readonly size: number
    /* Fields of Gsf-1.Gsf.Output */
    readonly gObject: GObject.Object
    readonly curSize: gsf_off_t
    readonly curOffset: gsf_off_t
    readonly name: string
    readonly wrappedBy: GObject.Object
    readonly container: Outfile
    readonly err: GLib.Error
    readonly isClosed: boolean
    readonly printfBuf: string
    readonly printfBufSize: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    setContainer(container?: Outfile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: Uint8Array): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OutputStdio_ConstructProps)
    _init (config?: OutputStdio_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string): OutputStdio
    static $gtype: GObject.Type
}
interface SharedMemory_ConstructProps extends GObject.Object_ConstructProps {
}
class SharedMemory {
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
    constructor (config?: SharedMemory_ConstructProps)
    _init (config?: SharedMemory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static mmappedNew(buf: object | null, size: gsf_off_t): SharedMemory
    static new(buf: object | null, size: gsf_off_t, needsFree: boolean): SharedMemory
    static $gtype: GObject.Type
}
interface StructuredBlob_ConstructProps extends Infile_ConstructProps {
}
class StructuredBlob {
    /* Properties of Gsf-1.Gsf.Input */
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly position: number
    readonly remaining: number
    /* Fields of Gsf-1.Gsf.Infile */
    readonly parent: Input
    /* Fields of Gsf-1.Gsf.Input */
    readonly gObject: GObject.Object
    readonly size: gsf_off_t
    readonly curOffset: gsf_off_t
    readonly name: string
    readonly container: Infile
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.StructuredBlob */
    write(container: Outfile): boolean
    /* Methods of Gsf-1.Gsf.Infile */
    childByAname(names: string[]): Input
    childByIndex(i: number): Input
    childByName(name: string): Input
    nameByIndex(i: number): string | null
    numChildren(): number
    /* Methods of Gsf-1.Gsf.Input */
    copy(output: Output): boolean
    dump(dumpAsHex: boolean): void
    dup(): Input | null
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    read(numBytes: number): Uint8Array
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container?: Infile | null): boolean
    setModtime(modtime?: GLib.DateTime | null): boolean
    setModtimeFromStat(st?: object | null): boolean
    setName(name?: string | null): boolean
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eof", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modtime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StructuredBlob_ConstructProps)
    _init (config?: StructuredBlob_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static read(input: Input): StructuredBlob
    static $gtype: GObject.Type
}
interface XMLOut_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gsf-1.Gsf.XMLOut */
    prettyPrint?: boolean
    sink?: Output
}
class XMLOut {
    /* Properties of Gsf-1.Gsf.XMLOut */
    prettyPrint: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gsf-1.Gsf.XMLOut */
    addBase64(id: string | null, data: Uint8Array): void
    addBool(id: string | null, val: boolean): void
    addColor(id: string | null, r: number, g: number, b: number): void
    addCstr(id?: string | null, valUtf8?: string | null): void
    addCstrUnchecked(id?: string | null, valUtf8?: string | null): void
    addEnum(id: string | null, etype: GObject.Type, val: number): void
    addFloat(id: string | null, val: number, precision: number): void
    addGvalue(id: string | null, val: any): void
    addInt(id: string | null, val: number): void
    addUint(id: string | null, val: number): void
    endElement(): string
    getOutput(): Output | null
    getPrettyPrint(): boolean
    setDocType(type: string): void
    setPrettyPrint(pp: boolean): boolean
    simpleElement(id: string, content: string): void
    simpleFloatElement(id: string, val: number, precision: number): void
    simpleIntElement(id: string, val: number): void
    startElement(id: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::pretty-print", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pretty-print", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pretty-print", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pretty-print", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pretty-print", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: XMLOut_ConstructProps)
    _init (config?: XMLOut_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(output: Output): XMLOut
    static $gtype: GObject.Type
}
abstract class BlobClass {
    static name: string
}
class BlobPrivate {
    static name: string
}
abstract class ClipDataClass {
    static name: string
}
class ClipDataPrivate {
    static name: string
}
class DocProp {
    /* Methods of Gsf-1.Gsf.DocProp */
    dump(): void
    free(): void
    getLink(): string | null
    getName(): string
    getVal(): any
    setLink(link?: string | null): void
    setVal(val: any): void
    swapVal(val: any): any
    static name: string
    static new(name: string): DocProp
    constructor(name: string)
    /* Static methods and pseudo-constructors */
    static new(name: string): DocProp
}
abstract class InfileClass {
    /* Fields of Gsf-1.Gsf.InfileClass */
    readonly inputClass: InputClass
    readonly numChildren: (infile: Infile) => number
    readonly nameByIndex: (infile: Infile, i: number) => string | null
    static name: string
}
abstract class InputClass {
    /* Fields of Gsf-1.Gsf.InputClass */
    readonly gObjectClass: GObject.ObjectClass
    readonly dup: (input: Input) => Input | null
    readonly read: (input: Input, numBytes: number, optionalBuffer?: Uint8Array | null) => Uint8Array | null
    readonly seek: (input: Input, offset: gsf_off_t, whence: GLib.SeekType) => boolean
    readonly openSibling: (input: Input, name: string) => Input
    static name: string
}
class MSOleSortingKey {
    /* Methods of Gsf-1.Gsf.MSOleSortingKey */
    cmp(b: MSOleSortingKey): number
    free(): void
    static name: string
    static new(name: string): MSOleSortingKey
    constructor(name: string)
    /* Static methods and pseudo-constructors */
    static new(name: string): MSOleSortingKey
}
abstract class ODFOutClass {
    /* Fields of Gsf-1.Gsf.ODFOutClass */
    readonly base: XMLOutClass
    static name: string
}
class OpenPkgRel {
    /* Methods of Gsf-1.Gsf.OpenPkgRel */
    getTarget(): string
    getType(): string
    isExtern(): boolean
    static name: string
}
class OpenPkgRels {
    static name: string
}
abstract class OutfileClass {
    /* Fields of Gsf-1.Gsf.OutfileClass */
    readonly outputClass: OutputClass
    static name: string
}
abstract class OutputClass {
    /* Fields of Gsf-1.Gsf.OutputClass */
    readonly gObjectClass: GObject.ObjectClass
    readonly close: (output: Output) => boolean
    readonly seek: (output: Output, offset: gsf_off_t, whence: GLib.SeekType) => boolean
    readonly write: (output: Output, data: Uint8Array) => boolean
    static name: string
}
abstract class OutputCsvClass {
    /* Fields of Gsf-1.Gsf.OutputCsvClass */
    readonly outputClass: OutputClass
    static name: string
}
abstract class OutputIconvClass {
    /* Fields of Gsf-1.Gsf.OutputIconvClass */
    readonly outputClass: OutputClass
    static name: string
}
class Timestamp {
    /* Fields of Gsf-1.Gsf.Timestamp */
    readonly date: GLib.Date
    readonly seconds: number
    readonly timeZone: GLib.String
    readonly timet: number
    /* Methods of Gsf-1.Gsf.Timestamp */
    asString(): string
    copy(): Timestamp
    equal(b: Timestamp): boolean
    free(): void
    hash(): number
    loadFromString(spec: string): number
    setTime(t: number): void
    toValue(value: any): void
    static name: string
    static new(): Timestamp
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Timestamp
}
class XMLBlob {
    static name: string
}
class XMLIn {
    /* Fields of Gsf-1.Gsf.XMLIn */
    readonly userState: object
    readonly content: GLib.String
    readonly doc: XMLInDoc
    readonly node: XMLInNode
    /* Methods of Gsf-1.Gsf.XMLIn */
    checkNs(str: string, nsId: number): string | null
    getInput(): Input
    namecmp(str: string, nsId: number, name: string): boolean
    pushState(doc: XMLInDoc, newState: object | null, dtor: XMLInExtDtor, attrs: string[]): void
    setSilentUnknowns(silent: boolean): void
    static name: string
}
class XMLInDoc {
    /* Methods of Gsf-1.Gsf.XMLInDoc */
    addNodes(nodes: XMLInNode[]): void
    free(): void
    parse(input: Input, userState?: object | null): boolean
    setUnknownHandler(handler: XMLInUnknownFunc): void
    static name: string
    static new(nodes: XMLInNode[], ns: XMLInNS[]): XMLInDoc
    constructor(nodes: XMLInNode[], ns: XMLInNS[])
    /* Static methods and pseudo-constructors */
    static new(nodes: XMLInNode[], ns: XMLInNS[]): XMLInDoc
}
class XMLInNS {
    /* Fields of Gsf-1.Gsf.XMLInNS */
    readonly uri: string
    readonly nsId: number
    static name: string
}
class XMLInNode {
    /* Fields of Gsf-1.Gsf.XMLInNode */
    readonly id: string
    readonly nsId: number
    readonly name: string
    readonly parentId: string
    readonly start: (xin: XMLIn, attrs: libxml2.Char) => void
    readonly end: (xin: XMLIn, unknown: XMLBlob) => void
    readonly hasContent: XMLContent
    readonly checkChildrenForNs: number
    readonly shareChildrenWithParent: number
    static name: string
}
abstract class XMLOutClass {
    /* Fields of Gsf-1.Gsf.XMLOutClass */
    readonly base: GObject.ObjectClass
    static name: string
}
    type gsf_off_t = number
}
export default Gsf;