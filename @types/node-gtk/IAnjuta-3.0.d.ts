/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * IAnjuta-3.0
 */

import type Gtk from './Gtk-3.0';
import type xlib from './xlib-2.0';
import type Gdk from './Gdk-3.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';
import type Anjuta from './Anjuta-3.0';
import type Gdl from './Gdl-3';

export namespace IAnjuta {

enum BuildableCommand {
    COMMAND_COMPILE,
    COMMAND_BUILD,
    COMMAND_BUILD_TARBALL,
    COMMAND_INSTALL,
    COMMAND_CONFIGURE,
    COMMAND_GENERATE,
    COMMAND_CLEAN,
    COMMAND_EXECUTE,
    COMMAND_IS_BUILT,
    COMMAND_AUTORECONF,
    COMMAND_DISTCLEAN,
    COMMAND_CHECK,
    N_COMMANDS,
}
enum BuilderError {
    SUCCEED,
    FAILED,
    CANCELED,
    ABORTED,
    INTERRUPTED,
    TERMINATED,
    UNKNOWN_TARGET,
    UNKNOWN_ERROR,
    OTHER_ERROR,
}
enum DebuggerBreakpointMethod {
    SET_AT_ADDRESS,
    SET_AT_FUNCTION,
    ENABLE,
    IGNORE,
    CONDITION,
}
enum DebuggerBreakpointType {
    REMOVED,
    UPDATED,
    ON_LINE,
    ON_ADDRESS,
    ON_FUNCTION,
    ON_READ,
    ON_WRITE,
    WITH_ENABLE,
    WITH_IGNORE,
    WITH_TIME,
    WITH_CONDITION,
    WITH_TEMPORARY,
    WITH_PENDING,
}
enum DebuggerError {
    OK,
    NOT_READY,
    NOT_RUNNING,
    NOT_STOPPED,
    NOT_LOADED,
    NOT_STARTED,
    NOT_CONNECTED,
    NOT_IMPLEMENTED,
    CANCEL,
    UNABLE_TO_CREATE_VARIABLE,
    UNABLE_TO_ACCESS_MEMORY,
    UNABLE_TO_OPEN_FILE,
    UNSUPPORTED_FILE_TYPE,
    UNSUPPORTED_VERSION,
    UNABLE_TO_FIND_DEBUGGER,
    ALREADY_DONE,
    PROGRAM_NOT_FOUND,
    UNABLE_TO_CONNECT,
    UNKNOWN_ERROR,
    OTHER_ERROR,
}
enum DebuggerOutputType {
    OUTPUT,
    WARNING_OUTPUT,
    ERROR_OUTPUT,
    INFO_OUTPUT,
}
enum DebuggerState {
    BUSY,
    STOPPED,
    STARTED,
    PROGRAM_LOADED,
    PROGRAM_STOPPED,
    PROGRAM_RUNNING,
}
enum DocumentManagerError {
    DOESNT_EXIST,
}
enum EditorAttribute {
    TEXT,
    KEYWORD,
    COMMENT,
    STRING,
}
enum EditorError {
    DOESNT_EXIST,
}
enum EditorLineModeType {
    LF,
    CR,
    CRLF,
}
enum EnvironmentError {
    CONFIG,
    OTHER_ERROR,
}
enum IndicableIndicator {
    NONE,
    IMPORTANT,
    WARNING,
    CRITICAL,
}
enum MarkableError {
    INVALID_LOCATION,
}
enum MarkableMarker {
    LINEMARKER,
    BOOKMARK,
    MESSAGE,
    BREAKPOINT_DISABLED,
    BREAKPOINT_ENABLED,
    PROGRAM_COUNTER,
}
enum MessageManagerError {
    DOESNT_EXIST,
}
enum MessageViewType {
    TYPE_NORMAL,
    TYPE_INFO,
    TYPE_WARNING,
    TYPE_ERROR,
}
enum PluginFactoryError {
    OK,
    MISSING_LOCATION,
    MISSING_TYPE,
    MISSING_MODULE,
    INVALID_MODULE,
    MISSING_FUNCTION,
    INVALID_TYPE,
    UNKNOWN_ERROR,
}
enum ProjectError {
    ERROR_SUCCESS,
    ERROR_DOESNT_EXIST,
    ERROR_ALREADY_EXISTS,
    ERROR_VALIDATION_FAILED,
    ERROR_PROJECT_MALFORMED,
    ERROR_WRONG_PARENT,
    ERROR_NOT_SUPPORTED,
    ERROR_GENERAL_FAILURE,
}
enum ProjectProbe {
    PROBE_FILES,
    PROBE_MAKE_FILES,
    PROBE_PROJECT_FILES,
}
enum SymbolField {
    FIELD_ID,
    FIELD_NAME,
    FIELD_FILE_POS,
    FILED_SCOPE_DEF_ID,
    FIELD_FILE_SCOPE,
    FIELD_SIGNATURE,
    FIELD_RETURNTYPE,
    FIELD_TYPE,
    FIELD_TYPE_NAME,
    FIELD_FILE_PATH,
    FIELD_PROJECT_NAME,
    FIELD_PROJECT_VERSION,
    FIELD_IMPLEMENTATION,
    FIELD_ACCESS,
    FIELD_KIND,
    FIELD_IS_CONTAINER,
    FIELD_END,
}
enum SymbolQueryDb {
    DB_PROJECT,
    DB_SYSTEM,
}
enum SymbolQueryFileScope {
    SEARCH_FS_IGNORE,
    SEARCH_FS_PUBLIC,
    SEARCH_FS_PRIVATE,
}
enum SymbolQueryMode {
    MODE_SYNC,
    MODE_ASYNC,
    MODE_QUEUED,
}
enum SymbolQueryName {
    SEARCH,
    SEARCH_ALL,
    SEARCH_FILE,
    SEARCH_IN_SCOPE,
    SEARCH_ID,
    SEARCH_MEMBERS,
    SEARCH_CLASS_PARENTS,
    SEARCH_SCOPE,
    SEARCH_PARENT_SCOPE,
    SEARCH_PARENT_SCOPE_FILE,
}
enum SymbolType {
    TYPE_NONE,
    TYPE_UNDEF,
    TYPE_CLASS,
    TYPE_ENUM,
    TYPE_ENUMERATOR,
    TYPE_FIELD,
    TYPE_FUNCTION,
    TYPE_INTERFACE,
    TYPE_MEMBER,
    TYPE_METHOD,
    TYPE_NAMESPACE,
    TYPE_PACKAGE,
    TYPE_PROTOTYPE,
    TYPE_STRUCT,
    TYPE_TYPEDEF,
    TYPE_UNION,
    TYPE_VARIABLE,
    TYPE_EXTERNVAR,
    TYPE_MACRO,
    TYPE_MACRO_WITH_ARG,
    TYPE_FILE,
    TYPE_OTHER,
    TYPE_SCOPE_CONTAINER,
    TYPE_MAX,
}
enum VcsError {
    UNKOWN_ERROR,
}
const BUILDER_CONFIGURATION_DEBUG: string
const BUILDER_CONFIGURATION_OPTIMIZED: string
const BUILDER_CONFIGURATION_PROFILING: string
const BUILDER_ROOT_URI: string
const DOCUMENT_MANAGER_CURRENT_DOCUMENT: string
const EDITOR_INDENT_WIDTH_KEY: string
const EDITOR_PREF_SCHEMA: string
const EDITOR_TAB_WIDTH_KEY: string
const EDITOR_USE_TABS_KEY: string
const FILE_MANAGER_SELECTED_FILE: string
const LANGUAGE_PROVIDER_PREF_AUTOCOMPLETE_BRACE_AFTER_FUNC: string
const LANGUAGE_PROVIDER_PREF_AUTOCOMPLETE_CLOSEBRACE_AFTER_FUNC: string
const LANGUAGE_PROVIDER_PREF_AUTOCOMPLETE_ENABLE: string
const LANGUAGE_PROVIDER_PREF_AUTOCOMPLETE_SPACE_AFTER_FUNC: string
const LANGUAGE_PROVIDER_PREF_CALLTIP_ENABLE: string
const PROJECT_MANAGER_CURRENT_PROJECT: string
const PROJECT_MANAGER_CURRENT_URI: string
const PROJECT_MANAGER_PROJECT_ROOT_URI: string
function buildableErrorQuark(): GLib.Quark
function builderErrorQuark(): GLib.Quark
function debugManagerErrorQuark(): GLib.Quark
function debuggerBreakpointErrorQuark(): GLib.Quark
function debuggerErrorQuark(): GLib.Quark
function debuggerInstructionErrorQuark(): GLib.Quark
function debuggerMemoryErrorQuark(): GLib.Quark
function debuggerRegisterErrorQuark(): GLib.Quark
function debuggerVariableErrorQuark(): GLib.Quark
function documentErrorQuark(): GLib.Quark
function documentManagerErrorQuark(): GLib.Quark
function editorAssistErrorQuark(): GLib.Quark
function editorCellErrorQuark(): GLib.Quark
function editorCellStyleErrorQuark(): GLib.Quark
function editorCommentErrorQuark(): GLib.Quark
function editorConvertErrorQuark(): GLib.Quark
function editorErrorQuark(): GLib.Quark
function editorFactoryErrorQuark(): GLib.Quark
function editorFoldsErrorQuark(): GLib.Quark
function editorGladeSignalErrorQuark(): GLib.Quark
function editorGotoErrorQuark(): GLib.Quark
function editorHoverErrorQuark(): GLib.Quark
function editorLanguageErrorQuark(): GLib.Quark
function editorLineModeErrorQuark(): GLib.Quark
function editorSearchErrorQuark(): GLib.Quark
function editorSelectionErrorQuark(): GLib.Quark
function editorTipErrorQuark(): GLib.Quark
function editorViewErrorQuark(): GLib.Quark
function editorZoomErrorQuark(): GLib.Quark
function environmentErrorQuark(): GLib.Quark
function fileErrorQuark(): GLib.Quark
function fileLoaderErrorQuark(): GLib.Quark
function fileManagerErrorQuark(): GLib.Quark
function fileSavableErrorQuark(): GLib.Quark
function gladeErrorQuark(): GLib.Quark
function helpErrorQuark(): GLib.Quark
function indenterErrorQuark(): GLib.Quark
function indicableErrorQuark(): GLib.Quark
function iterableErrorQuark(): GLib.Quark
function iterableTreeErrorQuark(): GLib.Quark
function languageErrorQuark(): GLib.Quark
function languageProviderErrorQuark(): GLib.Quark
function loaderErrorQuark(): GLib.Quark
function markableErrorQuark(): GLib.Quark
function messageManagerErrorQuark(): GLib.Quark
function messageViewErrorQuark(): GLib.Quark
function pluginFactoryErrorQuark(): GLib.Quark
function preferencesErrorQuark(): GLib.Quark
function printErrorQuark(): GLib.Quark
function projectBackendErrorQuark(): GLib.Quark
function projectChooserErrorQuark(): GLib.Quark
function projectErrorQuark(): GLib.Quark
function projectManagerErrorQuark(): GLib.Quark
function providerErrorQuark(): GLib.Quark
function snippetsManagerErrorQuark(): GLib.Quark
function streamErrorQuark(): GLib.Quark
function streamLoaderErrorQuark(): GLib.Quark
function streamSavableErrorQuark(): GLib.Quark
function symbolErrorQuark(): GLib.Quark
function symbolManagerErrorQuark(): GLib.Quark
function symbolQueryErrorQuark(): GLib.Quark
function terminalErrorQuark(): GLib.Quark
function todoErrorQuark(): GLib.Quark
function vcsErrorQuark(): GLib.Quark
function wizardErrorQuark(): GLib.Quark
interface BuilderCallback {
    (sender: GObject.Object, command: BuilderHandle, err: GLib.Error): void
}
interface DebuggerBreakpointCallback {
    (data: DebuggerBreakpointItem, err: GLib.Error): void
}
interface DebuggerCallback {
    (data: object | null, err: GLib.Error): void
}
interface DebuggerGCharCallback {
    (value: string, err: GLib.Error): void
}
interface DebuggerInstructionCallback {
    (data: DebuggerInstructionDisassembly, err: GLib.Error): void
}
interface DebuggerMemoryCallback {
    (data: DebuggerMemoryBlock, err: GLib.Error): void
}
interface DebuggerOutputCallback {
    (type: DebuggerOutputType, output: string): void
}
interface DebuggerVariableCallback {
    (data: DebuggerVariableObject, err: GLib.Error): void
}
interface VcsDiffCallback {
    (file: Gio.File, diff: string): void
}
interface VcsStatusCallback {
    (file: Gio.File, status: Anjuta.VcsStatus): void
}
class Buildable {
    /* Methods of IAnjuta-3.0.IAnjuta.Buildable */
    build(uri: string): void
    clean(uri: string): void
    configure(uri: string): void
    execute(uri: string): void
    generate(uri: string): void
    getCommand(commandId: BuildableCommand): string
    install(uri: string): void
    resetCommands(): void
    setCommand(commandId: BuildableCommand, command: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Builder {
    /* Methods of IAnjuta-3.0.IAnjuta.Builder */
    cancel(handle: BuilderHandle): void
    getUriConfiguration(uri: string): string
    listConfiguration(): string[]
    static name: string
}
class DebugManager {
    /* Methods of IAnjuta-3.0.IAnjuta.DebugManager */
    quit(): boolean
    start(uri: string): boolean
    startRemote(server: string, uri: string): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.DebugManager */
    connect(sigName: "breakpoint-changed", callback: ((object?: object | null) => void)): number
    on(sigName: "breakpoint-changed", callback: (object?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "breakpoint-changed", callback: (object?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "breakpoint-changed", callback: (object?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "breakpoint-changed", object?: object | null): void
    connect(sigName: "debugger-started", callback: (() => void)): number
    on(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: ((object: GLib.Error) => void)): number
    on(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-stopped", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: ((object: number, p0: number) => void)): number
    on(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "frame-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "location-changed", callback: ((object: number, p0: string, p1: number) => void)): number
    on(sigName: "location-changed", callback: (object: number, p0: string, p1: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "location-changed", callback: (object: number, p0: string, p1: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "location-changed", callback: (object: number, p0: string, p1: number) => void): NodeJS.EventEmitter
    emit(sigName: "location-changed", object: number, p0: string, p1: number): void
    connect(sigName: "program-exited", callback: (() => void)): number
    on(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-exited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (() => void)): number
    on(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-loaded", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: ((object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    on(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void): NodeJS.EventEmitter
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (() => void)): number
    on(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-running", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-running"): void
    connect(sigName: "program-started", callback: (() => void)): number
    on(sigName: "program-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-started"): void
    connect(sigName: "program-stopped", callback: (() => void)): number
    on(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-stopped"): void
    connect(sigName: "program-unloaded", callback: (() => void)): number
    on(sigName: "program-unloaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-unloaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-unloaded", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-unloaded"): void
    connect(sigName: "sharedlib-event", callback: (() => void)): number
    on(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sharedlib-event", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: ((object: string, p0: string) => void)): number
    on(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signal-received", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Debugger {
    /* Methods of IAnjuta-3.0.IAnjuta.Debugger */
    abort(): boolean
    attach(pid: number, sourceSearchDirectories: string[]): boolean
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    disableLog(): void
    enableLog(log: MessageView): void
    exit(): boolean
    getState(): DebuggerState
    handleSignal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    interrupt(): boolean
    load(file: string, mimeType: string, sourceSearchDirectories: string[]): boolean
    quit(): boolean
    run(): boolean
    runFrom(file: string, line: number): boolean
    runTo(file: string, line: number): boolean
    sendCommand(command: string): boolean
    setEnvironment(env: string): boolean
    setFrame(frame: number): boolean
    setThread(thread: number): boolean
    setWorkingDirectory(dir: string): boolean
    start(args: string, terminal: boolean, stop: boolean): boolean
    stepIn(): boolean
    stepOut(): boolean
    stepOver(): boolean
    unload(): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: ((object: DebuggerState) => void)): number
    on(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-ready", callback: (object: DebuggerState) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (() => void)): number
    on(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: ((object: GLib.Error) => void)): number
    on(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-stopped", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: ((object: number, p0: number) => void)): number
    on(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "frame-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (() => void)): number
    on(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-exited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (() => void)): number
    on(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-loaded", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: ((object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    on(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void): NodeJS.EventEmitter
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (() => void)): number
    on(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-running", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (() => void)): number
    on(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (() => void)): number
    on(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sharedlib-event", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: ((object: string, p0: string) => void)): number
    on(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signal-received", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
}
class DebuggerBreakpoint {
    /* Methods of IAnjuta-3.0.IAnjuta.DebuggerBreakpoint */
    implementBreakpoint(): number
    /* Methods of IAnjuta-3.0.IAnjuta.Debugger */
    abort(): boolean
    attach(pid: number, sourceSearchDirectories: string[]): boolean
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    disableLog(): void
    enableLog(log: MessageView): void
    exit(): boolean
    getState(): DebuggerState
    handleSignal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    interrupt(): boolean
    load(file: string, mimeType: string, sourceSearchDirectories: string[]): boolean
    quit(): boolean
    run(): boolean
    runFrom(file: string, line: number): boolean
    runTo(file: string, line: number): boolean
    sendCommand(command: string): boolean
    setEnvironment(env: string): boolean
    setFrame(frame: number): boolean
    setThread(thread: number): boolean
    setWorkingDirectory(dir: string): boolean
    start(args: string, terminal: boolean, stop: boolean): boolean
    stepIn(): boolean
    stepOut(): boolean
    stepOver(): boolean
    unload(): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: ((object: DebuggerState) => void)): number
    on(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-ready", callback: (object: DebuggerState) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (() => void)): number
    on(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: ((object: GLib.Error) => void)): number
    on(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-stopped", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: ((object: number, p0: number) => void)): number
    on(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "frame-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (() => void)): number
    on(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-exited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (() => void)): number
    on(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-loaded", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: ((object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    on(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void): NodeJS.EventEmitter
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (() => void)): number
    on(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-running", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (() => void)): number
    on(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (() => void)): number
    on(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sharedlib-event", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: ((object: string, p0: string) => void)): number
    on(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signal-received", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class DebuggerInstruction {
    /* Methods of IAnjuta-3.0.IAnjuta.DebuggerInstruction */
    runFromAddress(address: number): boolean
    runToAddress(address: number): boolean
    stepInInstruction(): boolean
    stepOverInstruction(): boolean
    /* Methods of IAnjuta-3.0.IAnjuta.Debugger */
    abort(): boolean
    attach(pid: number, sourceSearchDirectories: string[]): boolean
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    disableLog(): void
    enableLog(log: MessageView): void
    exit(): boolean
    getState(): DebuggerState
    handleSignal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    interrupt(): boolean
    load(file: string, mimeType: string, sourceSearchDirectories: string[]): boolean
    quit(): boolean
    run(): boolean
    runFrom(file: string, line: number): boolean
    runTo(file: string, line: number): boolean
    sendCommand(command: string): boolean
    setEnvironment(env: string): boolean
    setFrame(frame: number): boolean
    setThread(thread: number): boolean
    setWorkingDirectory(dir: string): boolean
    start(args: string, terminal: boolean, stop: boolean): boolean
    stepIn(): boolean
    stepOut(): boolean
    stepOver(): boolean
    unload(): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: ((object: DebuggerState) => void)): number
    on(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-ready", callback: (object: DebuggerState) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (() => void)): number
    on(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: ((object: GLib.Error) => void)): number
    on(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-stopped", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: ((object: number, p0: number) => void)): number
    on(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "frame-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (() => void)): number
    on(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-exited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (() => void)): number
    on(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-loaded", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: ((object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    on(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void): NodeJS.EventEmitter
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (() => void)): number
    on(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-running", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (() => void)): number
    on(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (() => void)): number
    on(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sharedlib-event", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: ((object: string, p0: string) => void)): number
    on(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signal-received", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class DebuggerMemory {
    /* Methods of IAnjuta-3.0.IAnjuta.Debugger */
    abort(): boolean
    attach(pid: number, sourceSearchDirectories: string[]): boolean
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    disableLog(): void
    enableLog(log: MessageView): void
    exit(): boolean
    getState(): DebuggerState
    handleSignal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    interrupt(): boolean
    load(file: string, mimeType: string, sourceSearchDirectories: string[]): boolean
    quit(): boolean
    run(): boolean
    runFrom(file: string, line: number): boolean
    runTo(file: string, line: number): boolean
    sendCommand(command: string): boolean
    setEnvironment(env: string): boolean
    setFrame(frame: number): boolean
    setThread(thread: number): boolean
    setWorkingDirectory(dir: string): boolean
    start(args: string, terminal: boolean, stop: boolean): boolean
    stepIn(): boolean
    stepOut(): boolean
    stepOver(): boolean
    unload(): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: ((object: DebuggerState) => void)): number
    on(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-ready", callback: (object: DebuggerState) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (() => void)): number
    on(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: ((object: GLib.Error) => void)): number
    on(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-stopped", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: ((object: number, p0: number) => void)): number
    on(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "frame-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (() => void)): number
    on(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-exited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (() => void)): number
    on(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-loaded", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: ((object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    on(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void): NodeJS.EventEmitter
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (() => void)): number
    on(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-running", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (() => void)): number
    on(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (() => void)): number
    on(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sharedlib-event", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: ((object: string, p0: string) => void)): number
    on(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signal-received", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class DebuggerRegister {
    /* Methods of IAnjuta-3.0.IAnjuta.DebuggerRegister */
    writeRegister(value: DebuggerRegisterData): boolean
    /* Methods of IAnjuta-3.0.IAnjuta.Debugger */
    abort(): boolean
    attach(pid: number, sourceSearchDirectories: string[]): boolean
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    disableLog(): void
    enableLog(log: MessageView): void
    exit(): boolean
    getState(): DebuggerState
    handleSignal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    interrupt(): boolean
    load(file: string, mimeType: string, sourceSearchDirectories: string[]): boolean
    quit(): boolean
    run(): boolean
    runFrom(file: string, line: number): boolean
    runTo(file: string, line: number): boolean
    sendCommand(command: string): boolean
    setEnvironment(env: string): boolean
    setFrame(frame: number): boolean
    setThread(thread: number): boolean
    setWorkingDirectory(dir: string): boolean
    start(args: string, terminal: boolean, stop: boolean): boolean
    stepIn(): boolean
    stepOut(): boolean
    stepOver(): boolean
    unload(): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: ((object: DebuggerState) => void)): number
    on(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-ready", callback: (object: DebuggerState) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (() => void)): number
    on(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: ((object: GLib.Error) => void)): number
    on(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-stopped", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: ((object: number, p0: number) => void)): number
    on(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "frame-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (() => void)): number
    on(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-exited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (() => void)): number
    on(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-loaded", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: ((object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    on(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void): NodeJS.EventEmitter
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (() => void)): number
    on(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-running", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (() => void)): number
    on(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (() => void)): number
    on(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sharedlib-event", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: ((object: string, p0: string) => void)): number
    on(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signal-received", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class DebuggerVariable {
    /* Methods of IAnjuta-3.0.IAnjuta.DebuggerVariable */
    assign(name: string, value: string): boolean
    destroy(name: string): boolean
    /* Methods of IAnjuta-3.0.IAnjuta.Debugger */
    abort(): boolean
    attach(pid: number, sourceSearchDirectories: string[]): boolean
    connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    disableLog(): void
    enableLog(log: MessageView): void
    exit(): boolean
    getState(): DebuggerState
    handleSignal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    interrupt(): boolean
    load(file: string, mimeType: string, sourceSearchDirectories: string[]): boolean
    quit(): boolean
    run(): boolean
    runFrom(file: string, line: number): boolean
    runTo(file: string, line: number): boolean
    sendCommand(command: string): boolean
    setEnvironment(env: string): boolean
    setFrame(frame: number): boolean
    setThread(thread: number): boolean
    setWorkingDirectory(dir: string): boolean
    start(args: string, terminal: boolean, stop: boolean): boolean
    stepIn(): boolean
    stepOut(): boolean
    stepOver(): boolean
    unload(): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.Debugger */
    connect(sigName: "debugger-ready", callback: ((object: DebuggerState) => void)): number
    on(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-ready", callback: (object: DebuggerState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-ready", callback: (object: DebuggerState) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-ready", object: DebuggerState): void
    connect(sigName: "debugger-started", callback: (() => void)): number
    on(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "debugger-started"): void
    connect(sigName: "debugger-stopped", callback: ((object: GLib.Error) => void)): number
    on(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "debugger-stopped", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "debugger-stopped", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "debugger-stopped", object: GLib.Error): void
    connect(sigName: "frame-changed", callback: ((object: number, p0: number) => void)): number
    on(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "frame-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "frame-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "frame-changed", object: number, p0: number): void
    connect(sigName: "program-exited", callback: (() => void)): number
    on(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-exited", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-exited", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-exited"): void
    connect(sigName: "program-loaded", callback: (() => void)): number
    on(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-loaded", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-loaded", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-loaded"): void
    connect(sigName: "program-moved", callback: ((object: number, p0: number, p1: number, p2: string, p3: number) => void)): number
    on(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-moved", callback: (object: number, p0: number, p1: number, p2: string, p3: number) => void): NodeJS.EventEmitter
    emit(sigName: "program-moved", object: number, p0: number, p1: number, p2: string, p3: number): void
    connect(sigName: "program-running", callback: (() => void)): number
    on(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-running", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-running", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-running"): void
    connect(sigName: "program-stopped", callback: (() => void)): number
    on(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "program-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "program-stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "program-stopped"): void
    connect(sigName: "sharedlib-event", callback: (() => void)): number
    on(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sharedlib-event", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sharedlib-event", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "sharedlib-event"): void
    connect(sigName: "signal-received", callback: ((object: string, p0: string) => void)): number
    on(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signal-received", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signal-received", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "signal-received", object: string, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Document {
    /* Methods of IAnjuta-3.0.IAnjuta.Document */
    beginUndoAction(): void
    canRedo(): boolean
    canUndo(): boolean
    clear(): void
    copy(): void
    cut(): void
    endUndoAction(): void
    getFilename(): string
    grabFocus(): void
    paste(): void
    redo(): void
    undo(): void
    /* Signals of IAnjuta-3.0.IAnjuta.Document */
    connect(sigName: "update-ui", callback: (() => void)): number
    on(sigName: "update-ui", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update-ui", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update-ui", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "update-ui"): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class DocumentManager {
    /* Methods of IAnjuta-3.0.IAnjuta.DocumentManager */
    addBookmark(file: Gio.File, line: number): void
    addBuffer(name: string, content: string): Editor
    addDocument(document: Document): void
    findDocumentWithFile(file: Gio.File): Document
    getCurrentDocument(): Document
    getDocWidgets(): Gtk.Widget[]
    getFile(filename: string): Gio.File
    gotoFileLine(file: Gio.File, lineno: number): Editor
    gotoFileLineMark(file: Gio.File, lineno: number, mark: boolean): Editor
    removeDocument(document: Document, saveBefore: boolean): boolean
    setCurrentDocument(document: Document): void
    /* Signals of IAnjuta-3.0.IAnjuta.DocumentManager */
    connect(sigName: "document-added", callback: ((doc: Document) => void)): number
    on(sigName: "document-added", callback: (doc: Document) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "document-added", callback: (doc: Document) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "document-added", callback: (doc: Document) => void): NodeJS.EventEmitter
    emit(sigName: "document-added", doc: Document): void
    connect(sigName: "document-removed", callback: ((doc: Document) => void)): number
    on(sigName: "document-removed", callback: (doc: Document) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "document-removed", callback: (doc: Document) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "document-removed", callback: (doc: Document) => void): NodeJS.EventEmitter
    emit(sigName: "document-removed", doc: Document): void
    static name: string
}
class Editor {
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
}
class EditorAssist {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorAssist */
    add(provider: Provider): void
    invoke(provider: Provider): void
    proposals(provider: Provider, proposals: EditorAssistProposal[], preWord: string, finished: boolean): void
    remove(provider: Provider): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.EditorAssist */
    connect(sigName: "cancelled", callback: (() => void)): number
    on(sigName: "cancelled", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cancelled", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cancelled", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cancelled"): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class EditorCell {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorCell */
    getAttribute(): EditorAttribute
    getChar(charIndex: number): number
    getCharacter(): string
    getLength(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class EditorCellStyle {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorCellStyle */
    getBackgroundColor(): string
    getColor(): string
    getFontDescription(): string
    /* Methods of IAnjuta-3.0.IAnjuta.EditorCell */
    getAttribute(): EditorAttribute
    getChar(charIndex: number): number
    getCharacter(): string
    getLength(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class EditorComment {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorComment */
    block(): void
    box(): void
    stream(): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class EditorConvert {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorConvert */
    toLower(startPosition: Iterable, endPosition: Iterable): void
    toUpper(startPosition: Iterable, endPosition: Iterable): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class EditorFactory {
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class EditorFolds {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorFolds */
    closeAll(): void
    openAll(): void
    toggleCurrent(): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class EditorGladeSignal {
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.EditorGladeSignal */
    connect(sigName: "drop", callback: ((iter: Iterable, signalData: string) => void)): number
    on(sigName: "drop", callback: (iter: Iterable, signalData: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drop", callback: (iter: Iterable, signalData: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drop", callback: (iter: Iterable, signalData: string) => void): NodeJS.EventEmitter
    emit(sigName: "drop", iter: Iterable, signalData: string): void
    connect(sigName: "drop-possible", callback: ((iter: Iterable) => boolean)): number
    on(sigName: "drop-possible", callback: (iter: Iterable) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drop-possible", callback: (iter: Iterable) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drop-possible", callback: (iter: Iterable) => void): NodeJS.EventEmitter
    emit(sigName: "drop-possible", iter: Iterable): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class EditorGoto {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorGoto */
    endBlock(): void
    matchingBrace(): void
    startBlock(): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class EditorHover {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorHover */
    display(position: Iterable, info: string): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.EditorHover */
    connect(sigName: "hover-leave", callback: ((position: Iterable) => void)): number
    on(sigName: "hover-leave", callback: (position: Iterable) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hover-leave", callback: (position: Iterable) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hover-leave", callback: (position: Iterable) => void): NodeJS.EventEmitter
    emit(sigName: "hover-leave", position: Iterable): void
    connect(sigName: "hover-over", callback: ((position: Iterable) => void)): number
    on(sigName: "hover-over", callback: (position: Iterable) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hover-over", callback: (position: Iterable) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hover-over", callback: (position: Iterable) => void): NodeJS.EventEmitter
    emit(sigName: "hover-over", position: Iterable): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class EditorLanguage {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorLanguage */
    getLanguage(): string
    getLanguageName(language: string): string
    getSupportedLanguages(): string[]
    setLanguage(language: string): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.EditorLanguage */
    connect(sigName: "language-changed", callback: ((language: string) => void)): number
    on(sigName: "language-changed", callback: (language: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "language-changed", callback: (language: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "language-changed", callback: (language: string) => void): NodeJS.EventEmitter
    emit(sigName: "language-changed", language: string): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class EditorLineMode {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorLineMode */
    convert(mode: EditorLineModeType): void
    fix(): void
    get(): EditorLineModeType
    set(mode: EditorLineModeType): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class EditorSearch {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorSearch */
    backward(search: string, caseSensitive: boolean, start: EditorCell, end: EditorCell): [ /* returnType */ boolean, /* resultStart */ EditorCell, /* resultEnd */ EditorCell ]
    forward(search: string, caseSensitive: boolean, start: EditorCell, end: EditorCell): [ /* returnType */ boolean, /* resultStart */ EditorCell, /* resultEnd */ EditorCell ]
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class EditorSelection {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorSelection */
    get(): string
    hasSelection(): boolean
    replace(text: string, length: number): void
    selectAll(): void
    selectBlock(): void
    selectFunction(): void
    set(start: Iterable, end: Iterable, scroll: boolean): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class EditorTip {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorTip */
    cancel(): void
    show(tips: string[], position: Iterable): void
    visible(): boolean
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class EditorView {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorView */
    create(): void
    getCount(): number
    removeCurrent(): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class EditorZoom {
    /* Methods of IAnjuta-3.0.IAnjuta.EditorZoom */
    in(): void
    out(): void
    /* Methods of IAnjuta-3.0.IAnjuta.Editor */
    append(text: string, length: number): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    eraseAll(): void
    getColumn(): number
    getCurrentWord(): string
    getEndPosition(): Iterable
    getIndentsize(): number
    getLength(): number
    getLineBeginPosition(line: number): Iterable
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    getLineno(): number
    getOffset(): number
    getOverwrite(): boolean
    getPosition(): Iterable
    getStartPosition(): Iterable
    getTabsize(): number
    getText(begin: Iterable, end: Iterable): string
    getTextAll(): string
    getUseSpaces(): boolean
    gotoEnd(): void
    gotoLine(lineno: number): void
    gotoPosition(position: Iterable): void
    gotoStart(): void
    insert(position: Iterable, text: string, length: number): void
    setAutoIndent(autoIndent: boolean): void
    setIndentsize(indentsize: number): void
    setPopupMenu(menu: Gtk.Widget): void
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void
    /* Signals of IAnjuta-3.0.IAnjuta.Editor */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "changed", callback: ((added: Iterable, length: boolean, lines: number, text: number, obj: string) => void)): number
    on(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (added: Iterable, length: boolean, lines: number, text: number, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "changed", added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    connect(sigName: "char-added", callback: ((ch: Iterable, obj: number) => void)): number
    on(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "char-added", callback: (ch: Iterable, obj: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "char-added", callback: (ch: Iterable, obj: number) => void): NodeJS.EventEmitter
    emit(sigName: "char-added", ch: Iterable, obj: number): void
    connect(sigName: "code-changed", callback: ((code: Iterable, obj: string) => void)): number
    on(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "code-changed", callback: (code: Iterable, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "code-changed", callback: (code: Iterable, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "code-changed", code: Iterable, obj: string): void
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "glade-callback-add", callback: ((signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void)): number
    on(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-callback-add", callback: (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-callback-add", signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    connect(sigName: "glade-member-add", callback: ((widgetName: string, filename: string, obj: string) => void)): number
    on(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "glade-member-add", callback: (widgetName: string, filename: string, obj: string) => void): NodeJS.EventEmitter
    emit(sigName: "glade-member-add", widgetName: string, filename: string, obj: string): void
    connect(sigName: "line-marks-gutter-clicked", callback: ((doubleClick: number) => void)): number
    on(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-marks-gutter-clicked", callback: (doubleClick: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-marks-gutter-clicked", doubleClick: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Environment {
    /* Methods of IAnjuta-3.0.IAnjuta.Environment */
    getRealDirectory(dir: string): string
    override(dirp: string, argvp: string, envp: string): boolean
    static name: string
}
class File {
    /* Methods of IAnjuta-3.0.IAnjuta.File */
    getFile(): Gio.File
    open(file: Gio.File): void
    /* Signals of IAnjuta-3.0.IAnjuta.File */
    connect(sigName: "opened", callback: (() => void)): number
    on(sigName: "opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "opened", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "opened"): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class FileLoader {
    /* Methods of IAnjuta-3.0.IAnjuta.FileLoader */
    peekInterface(file: Gio.File): string
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class FileManager {
    /* Methods of IAnjuta-3.0.IAnjuta.FileManager */
    setRoot(rootUri: string): void
    setSelected(file: Gio.File): void
    /* Signals of IAnjuta-3.0.IAnjuta.FileManager */
    connect(sigName: "section-changed", callback: ((err: Gio.File) => void)): number
    on(sigName: "section-changed", callback: (err: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "section-changed", callback: (err: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "section-changed", callback: (err: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "section-changed", err: Gio.File): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class FileSavable {
    /* Methods of IAnjuta-3.0.IAnjuta.FileSavable */
    isConflict(): boolean
    isDirty(): boolean
    isReadOnly(): boolean
    save(): void
    saveAs(file: Gio.File): void
    setDirty(dirty: boolean): void
    /* Methods of IAnjuta-3.0.IAnjuta.File */
    getFile(): Gio.File
    open(file: Gio.File): void
    /* Signals of IAnjuta-3.0.IAnjuta.FileSavable */
    connect(sigName: "saved", callback: ((file: Gio.File) => void)): number
    on(sigName: "saved", callback: (file: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "saved", callback: (file: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "saved", callback: (file: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "saved", file: Gio.File): void
    connect(sigName: "update-save-ui", callback: (() => void)): number
    on(sigName: "update-save-ui", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update-save-ui", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update-save-ui", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "update-save-ui"): void
    /* Signals of IAnjuta-3.0.IAnjuta.File */
    connect(sigName: "opened", callback: (() => void)): number
    on(sigName: "opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "opened", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "opened"): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Glade {
    /* Methods of IAnjuta-3.0.IAnjuta.Glade */
    addAssociation(master: string, slave: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Help {
    /* Methods of IAnjuta-3.0.IAnjuta.Help */
    search(query: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Indenter {
    /* Methods of IAnjuta-3.0.IAnjuta.Indenter */
    indent(start: Iterable, end: Iterable): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Indicable {
    /* Methods of IAnjuta-3.0.IAnjuta.Indicable */
    clear(): void
    set(beginLocation: Iterable, endLocation: Iterable, indicator: IndicableIndicator): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Iterable {
    /* Methods of IAnjuta-3.0.IAnjuta.Iterable */
    assign(srcIter: Iterable): void
    clone(): Iterable
    compare(iter2: Iterable): number
    diff(iter2: Iterable): number
    first(): boolean
    getLength(): number
    getPosition(): number
    last(): boolean
    next(): boolean
    previous(): boolean
    setPosition(position: number): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class IterableTree {
    /* Methods of IAnjuta-3.0.IAnjuta.IterableTree */
    children(): boolean
    hasChildren(): boolean
    parent(): boolean
    /* Methods of IAnjuta-3.0.IAnjuta.Iterable */
    assign(srcIter: Iterable): void
    clone(): Iterable
    compare(iter2: Iterable): number
    diff(iter2: Iterable): number
    first(): boolean
    getLength(): number
    getPosition(): number
    last(): boolean
    next(): boolean
    previous(): boolean
    setPosition(position: number): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Language {
    /* Methods of IAnjuta-3.0.IAnjuta.Language */
    getFromEditor(editor: EditorLanguage): LanguageId
    getFromMimeType(mimeType: string): LanguageId
    getFromString(string: string): LanguageId
    getLanguages(): number[]
    getMakeTarget(id: LanguageId): string
    getName(id: LanguageId): string
    getNameFromEditor(editor: EditorLanguage): string
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class LanguageProvider {
    /* Methods of IAnjuta-3.0.IAnjuta.LanguageProvider */
    getCalltipCache(callContext: string): string[]
    getCalltipContext(iter: Iterable): string
    newCalltip(callContext: string, iter: Iterable): void
    populateCompletions(iter: Iterable): Iterable | null
    /* Methods of IAnjuta-3.0.IAnjuta.Provider */
    activate(iter: Iterable, data?: object | null): void
    getName(): string
    getStartIter(): Iterable
    populate(iter: Iterable): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Loader {
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Markable {
    /* Methods of IAnjuta-3.0.IAnjuta.Markable */
    deleteAllMarkers(marker: MarkableMarker): void
    isMarkerSet(location: number, marker: MarkableMarker): boolean
    locationFromHandle(handle: number): number
    mark(location: number, marker: MarkableMarker, tooltip?: string | null): number
    unmark(location: number, marker: MarkableMarker): void
    /* Signals of IAnjuta-3.0.IAnjuta.Markable */
    connect(sigName: "marker-clicked", callback: ((doubleClick: boolean, location: number) => void)): number
    on(sigName: "marker-clicked", callback: (doubleClick: boolean, location: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "marker-clicked", callback: (doubleClick: boolean, location: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "marker-clicked", callback: (doubleClick: boolean, location: number) => void): NodeJS.EventEmitter
    emit(sigName: "marker-clicked", doubleClick: boolean, location: number): void
    static name: string
}
class MessageManager {
    /* Methods of IAnjuta-3.0.IAnjuta.MessageManager */
    removeView(view: MessageView): void
    setCurrentView(view: MessageView): void
    setViewIcon(view: MessageView, icon: GdkPixbuf.PixbufAnimation): void
    setViewIconFromStock(view: MessageView, icon: string): void
    setViewTitle(view: MessageView, title: string): void
    static name: string
}
class MessageView {
    /* Methods of IAnjuta-3.0.IAnjuta.MessageView */
    append(type: MessageViewType, summary: string, details: string): void
    bufferAppend(text: string): void
    clear(): void
    getCurrentMessage(): string
    selectNext(): void
    selectPrevious(): void
    /* Signals of IAnjuta-3.0.IAnjuta.MessageView */
    connect(sigName: "buffer-flushed", callback: ((line: string) => void)): number
    on(sigName: "buffer-flushed", callback: (line: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "buffer-flushed", callback: (line: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "buffer-flushed", callback: (line: string) => void): NodeJS.EventEmitter
    emit(sigName: "buffer-flushed", line: string): void
    connect(sigName: "message-clicked", callback: ((message: string) => void)): number
    on(sigName: "message-clicked", callback: (message: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "message-clicked", callback: (message: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "message-clicked", callback: (message: string) => void): NodeJS.EventEmitter
    emit(sigName: "message-clicked", message: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class PluginFactory {
    static name: string
}
class Preferences {
    /* Methods of IAnjuta-3.0.IAnjuta.Preferences */
    merge(prefs: Anjuta.Preferences): void
    unmerge(prefs: Anjuta.Preferences): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Print {
    /* Methods of IAnjuta-3.0.IAnjuta.Print */
    print(): void
    printPreview(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Project {
    /* Methods of IAnjuta-3.0.IAnjuta.Project */
    addNodeAfter(parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file?: Gio.File | null, name?: string | null): Anjuta.ProjectNode
    addNodeBefore(parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file?: Gio.File | null, name?: string | null): Anjuta.ProjectNode
    getNodeInfo(): Anjuta.ProjectNodeInfo[]
    getRoot(): Anjuta.ProjectNode
    isLoaded(): boolean
    loadNode(node: Anjuta.ProjectNode): boolean
    removeNode(node: Anjuta.ProjectNode): boolean
    removeProperty(node: Anjuta.ProjectNode, id: string, name?: string | null): boolean
    saveNode(node: Anjuta.ProjectNode): boolean
    setProperty(node: Anjuta.ProjectNode, id: string, name: string | null, value: string): Anjuta.ProjectProperty | null
    /* Signals of IAnjuta-3.0.IAnjuta.Project */
    connect(sigName: "file-changed", callback: ((node?: object | null) => void)): number
    on(sigName: "file-changed", callback: (node?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "file-changed", callback: (node?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "file-changed", callback: (node?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "file-changed", node?: object | null): void
    connect(sigName: "node-changed", callback: ((node: object | null, error: GLib.Error) => void)): number
    on(sigName: "node-changed", callback: (node: object | null, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-changed", callback: (node: object | null, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-changed", callback: (node: object | null, error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "node-changed", node: object | null, error: GLib.Error): void
    connect(sigName: "node-loaded", callback: ((node: object | null, error: GLib.Error) => void)): number
    on(sigName: "node-loaded", callback: (node: object | null, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-loaded", callback: (node: object | null, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-loaded", callback: (node: object | null, error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "node-loaded", node: object | null, error: GLib.Error): void
    connect(sigName: "node-saved", callback: ((node: object | null, error: GLib.Error) => void)): number
    on(sigName: "node-saved", callback: (node: object | null, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "node-saved", callback: (node: object | null, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "node-saved", callback: (node: object | null, error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "node-saved", node: object | null, error: GLib.Error): void
    static name: string
}
class ProjectBackend {
    /* Methods of IAnjuta-3.0.IAnjuta.ProjectBackend */
    newProject(file: Gio.File): Project
    probe(directory: Gio.File): number
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class ProjectChooser {
    /* Methods of IAnjuta-3.0.IAnjuta.ProjectChooser */
    getSelected(): Gio.File
    setProjectModel(manager: ProjectManager, childType: Anjuta.ProjectNodeType): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.ProjectChooser */
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class ProjectManager {
    /* Methods of IAnjuta-3.0.IAnjuta.ProjectManager */
    addGroup(name: string, defaultGroup?: Gio.File | null): Gio.File
    addSource(name: string, defaultTarget?: Gio.File | null): Gio.File
    addSourceQuiet(name: string, target: Gio.File): Gio.File
    addSources(names: string[], defaultTarget?: Gio.File | null): Gio.File[]
    addTarget(name: string, defaultGroup?: Gio.File | null): Gio.File
    getCapabilities(): number
    getChildren(parent: Gio.File, childrenType: number): Gio.File[]
    getCurrentProject(): Project
    getElements(elementType: Anjuta.ProjectNodeType): Gio.File[]
    getPackages(): string[]
    getSelected(): Gio.File
    getTargetType(target: Gio.File): Anjuta.ProjectNodeType
    getTargets(targetType: Anjuta.ProjectNodeType): Gio.File[]
    isOpen(): boolean
    removeFile(file: Gio.File): boolean
    /* Signals of IAnjuta-3.0.IAnjuta.ProjectManager */
    connect(sigName: "element-added", callback: ((object: Gio.File) => void)): number
    on(sigName: "element-added", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-added", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-added", callback: (object: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "element-added", object: Gio.File): void
    connect(sigName: "element-removed", callback: ((object: Gio.File) => void)): number
    on(sigName: "element-removed", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-removed", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-removed", callback: (object: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "element-removed", object: Gio.File): void
    connect(sigName: "element-selected", callback: ((object: Gio.File) => void)): number
    on(sigName: "element-selected", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-selected", callback: (object: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-selected", callback: (object: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "element-selected", object: Gio.File): void
    connect(sigName: "project-loaded", callback: ((object: GLib.Error) => void)): number
    on(sigName: "project-loaded", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "project-loaded", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "project-loaded", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "project-loaded", object: GLib.Error): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Provider {
    /* Methods of IAnjuta-3.0.IAnjuta.Provider */
    activate(iter: Iterable, data?: object | null): void
    getName(): string
    getStartIter(): Iterable
    populate(iter: Iterable): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class SnippetsManager {
    /* Methods of IAnjuta-3.0.IAnjuta.SnippetsManager */
    insert(key: string, editingSession: boolean): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Stream {
    /* Methods of IAnjuta-3.0.IAnjuta.Stream */
    open(stream?: object | null): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class StreamLoader {
    /* Methods of IAnjuta-3.0.IAnjuta.StreamLoader */
    peekInterface(stream?: object | null): string
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class StreamSavable {
    /* Methods of IAnjuta-3.0.IAnjuta.StreamSavable */
    save(stream?: object | null): void
    /* Methods of IAnjuta-3.0.IAnjuta.Stream */
    open(stream?: object | null): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Symbol {
    /* Methods of IAnjuta-3.0.IAnjuta.Symbol */
    getBoolean(field: SymbolField): boolean
    getIcon(): GdkPixbuf.Pixbuf
    getInt(field: SymbolField): number
    getString(field: SymbolField): string
    getSymType(): SymbolType
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class SymbolManager {
    /* Methods of IAnjuta-3.0.IAnjuta.SymbolManager */
    activatePackage(pkgName: string, pkgVersion: string): boolean
    deactivateAll(): void
    deactivatePackage(pkgName: string, pkgVersion: string): void
    /* Signals of IAnjuta-3.0.IAnjuta.SymbolManager */
    connect(sigName: "prj-scan-end", callback: ((object: number) => void)): number
    on(sigName: "prj-scan-end", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "prj-scan-end", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "prj-scan-end", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "prj-scan-end", object: number): void
    connect(sigName: "sys-scan-end", callback: ((object: number) => void)): number
    on(sigName: "sys-scan-end", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sys-scan-end", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sys-scan-end", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "sys-scan-end", object: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class SymbolQuery {
    /* Methods of IAnjuta-3.0.IAnjuta.SymbolQuery */
    cancel(): void
    setFields(nFields: number, fields: SymbolField): void
    setFileScope(filescopeSearch: SymbolQueryFileScope): void
    setFilters(filters: SymbolType, includeTypes: boolean): void
    setGroupBy(field: SymbolField): void
    setLimit(limit: number): void
    setMode(mode: SymbolQueryMode): void
    setOffset(offset: number): void
    setOrderBy(field: SymbolField): void
    /* Signals of IAnjuta-3.0.IAnjuta.SymbolQuery */
    connect(sigName: "async-result", callback: ((object: GObject.Object) => void)): number
    on(sigName: "async-result", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "async-result", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "async-result", callback: (object: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "async-result", object: GObject.Object): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Terminal {
    /* Methods of IAnjuta-3.0.IAnjuta.Terminal */
    executeCommand(directory: string, command: string, environment: string[]): number
    /* Signals of IAnjuta-3.0.IAnjuta.Terminal */
    connect(sigName: "child-exited", callback: ((object: number, p0: number) => void)): number
    on(sigName: "child-exited", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-exited", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-exited", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-exited", object: number, p0: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Todo {
    /* Methods of IAnjuta-3.0.IAnjuta.Todo */
    load(file: Gio.File): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
class Vcs {
    /* Methods of IAnjuta-3.0.IAnjuta.Vcs */
    add(files: Gio.File[], notify: Anjuta.AsyncNotify): void
    checkout(repositoryLocation: string, dest: Gio.File, cancel: Gio.Cancellable | null, notify: Anjuta.AsyncNotify): void
    remove(files: Gio.File[], notify: Anjuta.AsyncNotify): void
    /* Signals of IAnjuta-3.0.IAnjuta.Vcs */
    connect(sigName: "status-changed", callback: (() => void)): number
    on(sigName: "status-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "status-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "status-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "status-changed"): void
    static name: string
}
class Wizard {
    /* Methods of IAnjuta-3.0.IAnjuta.Wizard */
    activate(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
abstract class BuildableIface {
    /* Fields of IAnjuta-3.0.IAnjuta.BuildableIface */
    readonly gIface: GObject.TypeInterface
    readonly build: (obj: Buildable, uri: string) => void
    readonly clean: (obj: Buildable, uri: string) => void
    readonly configure: (obj: Buildable, uri: string) => void
    readonly execute: (obj: Buildable, uri: string) => void
    readonly generate: (obj: Buildable, uri: string) => void
    readonly getCommand: (obj: Buildable, commandId: BuildableCommand) => string
    readonly install: (obj: Buildable, uri: string) => void
    readonly resetCommands: (obj: Buildable) => void
    readonly setCommand: (obj: Buildable, commandId: BuildableCommand, command: string) => void
    static name: string
}
abstract class BuilderIface {
    /* Fields of IAnjuta-3.0.IAnjuta.BuilderIface */
    readonly gIface: GObject.TypeInterface
    readonly cancel: (obj: Builder, handle: BuilderHandle) => void
    readonly getUriConfiguration: (obj: Builder, uri: string) => string
    readonly listConfiguration: (obj: Builder) => string[]
    static name: string
}
abstract class DebugManagerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DebugManagerIface */
    readonly gIface: GObject.TypeInterface
    readonly breakpointChanged: (obj: DebugManager, breakpoint: DebuggerBreakpointItem) => void
    readonly debuggerStarted: (obj: DebugManager) => void
    readonly debuggerStopped: (obj: DebugManager, err: GLib.Error) => void
    readonly frameChanged: (obj: DebugManager, frame: number, thread: number) => void
    readonly locationChanged: (obj: DebugManager, address: number, uri: string, line: number) => void
    readonly programExited: (obj: DebugManager) => void
    readonly programLoaded: (obj: DebugManager) => void
    readonly programMoved: (obj: DebugManager, pid: number, tid: number, address: number, file: string, line: number) => void
    readonly programRunning: (obj: DebugManager) => void
    readonly programStarted: (obj: DebugManager) => void
    readonly programStopped: (obj: DebugManager) => void
    readonly programUnloaded: (obj: DebugManager) => void
    readonly sharedlibEvent: (obj: DebugManager) => void
    readonly signalReceived: (obj: DebugManager, name: string, description: string) => void
    readonly quit: (obj: DebugManager) => boolean
    readonly start: (obj: DebugManager, uri: string) => boolean
    readonly startRemote: (obj: DebugManager, server: string, uri: string) => boolean
    static name: string
}
abstract class DebuggerBreakpointIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerBreakpointIface */
    readonly gIface: DebuggerIface
    readonly implementBreakpoint: (obj: DebuggerBreakpoint) => number
    static name: string
}
class DebuggerBreakpointItem {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerBreakpointItem */
    readonly type: number
    readonly id: number
    readonly file: string
    readonly line: number
    readonly function_: string
    readonly address: number
    readonly enable: boolean
    readonly ignore: number
    readonly times: number
    readonly condition: string
    readonly temporary: boolean
    readonly pending: boolean
    static name: string
}
class DebuggerFrame {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerFrame */
    readonly thread: number
    readonly level: number
    readonly args: string
    readonly file: string
    readonly line: number
    readonly function_: string
    readonly library: string
    readonly address: number
    static name: string
}
abstract class DebuggerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerIface */
    readonly gIface: GObject.TypeInterface
    readonly debuggerReady: (obj: Debugger, state: DebuggerState) => void
    readonly debuggerStarted: (obj: Debugger) => void
    readonly debuggerStopped: (obj: Debugger, err: GLib.Error) => void
    readonly frameChanged: (obj: Debugger, frame: number, thread: number) => void
    readonly programExited: (obj: Debugger) => void
    readonly programLoaded: (obj: Debugger) => void
    readonly programMoved: (obj: Debugger, pid: number, tid: number, address: number, file: string, line: number) => void
    readonly programRunning: (obj: Debugger) => void
    readonly programStopped: (obj: Debugger) => void
    readonly sharedlibEvent: (obj: Debugger) => void
    readonly signalReceived: (obj: Debugger, name: string, description: string) => void
    readonly abort: (obj: Debugger) => boolean
    readonly attach: (obj: Debugger, pid: number, sourceSearchDirectories: string[]) => boolean
    readonly connect: (obj: Debugger, server: string, args: string, terminal: boolean, stop: boolean) => boolean
    readonly disableLog: (obj: Debugger) => void
    readonly enableLog: (obj: Debugger, log: MessageView) => void
    readonly exit: (obj: Debugger) => boolean
    readonly getState: (obj: Debugger) => DebuggerState
    readonly handleSignal: (obj: Debugger, name: string, stop: boolean, print: boolean, ignore: boolean) => boolean
    readonly interrupt: (obj: Debugger) => boolean
    readonly load: (obj: Debugger, file: string, mimeType: string, sourceSearchDirectories: string[]) => boolean
    readonly quit: (obj: Debugger) => boolean
    readonly run: (obj: Debugger) => boolean
    readonly runFrom: (obj: Debugger, file: string, line: number) => boolean
    readonly runTo: (obj: Debugger, file: string, line: number) => boolean
    readonly sendCommand: (obj: Debugger, command: string) => boolean
    readonly setEnvironment: (obj: Debugger, env: string) => boolean
    readonly setFrame: (obj: Debugger, frame: number) => boolean
    readonly setThread: (obj: Debugger, thread: number) => boolean
    readonly setWorkingDirectory: (obj: Debugger, dir: string) => boolean
    readonly start: (obj: Debugger, args: string, terminal: boolean, stop: boolean) => boolean
    readonly stepIn: (obj: Debugger) => boolean
    readonly stepOut: (obj: Debugger) => boolean
    readonly stepOver: (obj: Debugger) => boolean
    readonly unload: (obj: Debugger) => boolean
    static name: string
}
class DebuggerInstructionALine {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerInstructionALine */
    readonly address: number
    readonly label: string
    readonly text: string
    static name: string
}
class DebuggerInstructionDisassembly {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerInstructionDisassembly */
    readonly size: number
    readonly data: DebuggerInstructionALine[]
    static name: string
}
abstract class DebuggerInstructionIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerInstructionIface */
    readonly gIface: DebuggerIface
    readonly runFromAddress: (obj: DebuggerInstruction, address: number) => boolean
    readonly runToAddress: (obj: DebuggerInstruction, address: number) => boolean
    readonly stepInInstruction: (obj: DebuggerInstruction) => boolean
    readonly stepOverInstruction: (obj: DebuggerInstruction) => boolean
    static name: string
}
class DebuggerMemoryBlock {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerMemoryBlock */
    readonly address: number
    readonly length: number
    readonly data: string
    static name: string
}
abstract class DebuggerMemoryIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerMemoryIface */
    readonly gIface: DebuggerIface
    static name: string
}
class DebuggerRegisterData {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerRegisterData */
    readonly num: number
    readonly name: string
    readonly value: string
    static name: string
}
abstract class DebuggerRegisterIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerRegisterIface */
    readonly gIface: DebuggerIface
    readonly writeRegister: (obj: DebuggerRegister, value: DebuggerRegisterData) => boolean
    static name: string
}
abstract class DebuggerVariableIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerVariableIface */
    readonly gIface: DebuggerIface
    readonly assign: (obj: DebuggerVariable, name: string, value: string) => boolean
    readonly destroy: (obj: DebuggerVariable, name: string) => boolean
    static name: string
}
class DebuggerVariableObject {
    /* Fields of IAnjuta-3.0.IAnjuta.DebuggerVariableObject */
    readonly name: string
    readonly expression: string
    readonly type: string
    readonly value: string
    readonly changed: boolean
    readonly exited: boolean
    readonly deleted: boolean
    readonly children: number
    readonly hasMore: boolean
    static name: string
}
abstract class DocumentIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DocumentIface */
    readonly gIface: GObject.TypeInterface
    readonly updateUi: (obj: Document) => void
    readonly beginUndoAction: (obj: Document) => void
    readonly canRedo: (obj: Document) => boolean
    readonly canUndo: (obj: Document) => boolean
    readonly clear: (obj: Document) => void
    readonly copy: (obj: Document) => void
    readonly cut: (obj: Document) => void
    readonly endUndoAction: (obj: Document) => void
    readonly getFilename: (obj: Document) => string
    readonly grabFocus: (obj: Document) => void
    readonly paste: (obj: Document) => void
    readonly redo: (obj: Document) => void
    readonly undo: (obj: Document) => void
    static name: string
}
abstract class DocumentManagerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.DocumentManagerIface */
    readonly gIface: GObject.TypeInterface
    readonly documentAdded: (obj: DocumentManager, doc: Document) => void
    readonly documentRemoved: (obj: DocumentManager, doc: Document) => void
    readonly addBookmark: (obj: DocumentManager, file: Gio.File, line: number) => void
    readonly addBuffer: (obj: DocumentManager, name: string, content: string) => Editor
    readonly addDocument: (obj: DocumentManager, document: Document) => void
    readonly findDocumentWithFile: (obj: DocumentManager, file: Gio.File) => Document
    readonly getCurrentDocument: (obj: DocumentManager) => Document
    readonly getDocWidgets: (obj: DocumentManager) => Gtk.Widget[]
    readonly getFile: (obj: DocumentManager, filename: string) => Gio.File
    readonly gotoFileLine: (obj: DocumentManager, file: Gio.File, lineno: number) => Editor
    readonly gotoFileLineMark: (obj: DocumentManager, file: Gio.File, lineno: number, mark: boolean) => Editor
    readonly removeDocument: (obj: DocumentManager, document: Document, saveBefore: boolean) => boolean
    readonly setCurrentDocument: (obj: DocumentManager, document: Document) => void
    static name: string
}
abstract class EditorAssistIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorAssistIface */
    readonly gIface: EditorIface
    readonly cancelled: (obj: EditorAssist) => void
    readonly add: (obj: EditorAssist, provider: Provider) => void
    readonly invoke: (obj: EditorAssist, provider: Provider) => void
    readonly proposals: (obj: EditorAssist, provider: Provider, proposals: EditorAssistProposal[], preWord: string, finished: boolean) => void
    readonly remove: (obj: EditorAssist, provider: Provider) => void
    static name: string
}
class EditorAssistProposal {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorAssistProposal */
    readonly label: string
    readonly markup: string
    readonly info: string
    readonly text: string
    readonly icon: GdkPixbuf.Pixbuf
    readonly data: object
    static name: string
}
abstract class EditorCellIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorCellIface */
    readonly gIface: GObject.TypeInterface
    readonly getAttribute: (obj: EditorCell) => EditorAttribute
    readonly getChar: (obj: EditorCell, charIndex: number) => number
    readonly getCharacter: (obj: EditorCell) => string
    readonly getLength: (obj: EditorCell) => number
    static name: string
}
abstract class EditorCellStyleIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorCellStyleIface */
    readonly gIface: EditorCellIface
    readonly getBackgroundColor: (obj: EditorCellStyle) => string
    readonly getColor: (obj: EditorCellStyle) => string
    readonly getFontDescription: (obj: EditorCellStyle) => string
    static name: string
}
abstract class EditorCommentIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorCommentIface */
    readonly gIface: EditorIface
    readonly block: (obj: EditorComment) => void
    readonly box: (obj: EditorComment) => void
    readonly stream: (obj: EditorComment) => void
    static name: string
}
abstract class EditorConvertIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorConvertIface */
    readonly gIface: EditorIface
    readonly toLower: (obj: EditorConvert, startPosition: Iterable, endPosition: Iterable) => void
    readonly toUpper: (obj: EditorConvert, startPosition: Iterable, endPosition: Iterable) => void
    static name: string
}
abstract class EditorFactoryIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorFactoryIface */
    readonly gIface: GObject.TypeInterface
    static name: string
}
abstract class EditorFoldsIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorFoldsIface */
    readonly gIface: EditorIface
    readonly closeAll: (obj: EditorFolds) => void
    readonly openAll: (obj: EditorFolds) => void
    readonly toggleCurrent: (obj: EditorFolds) => void
    static name: string
}
abstract class EditorGladeSignalIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorGladeSignalIface */
    readonly gIface: EditorIface
    readonly drop: (obj: EditorGladeSignal, iterator: Iterable, signalData: string) => void
    readonly dropPossible: (obj: EditorGladeSignal, iterator: Iterable) => boolean
    static name: string
}
abstract class EditorGotoIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorGotoIface */
    readonly gIface: EditorIface
    readonly endBlock: (obj: EditorGoto) => void
    readonly matchingBrace: (obj: EditorGoto) => void
    readonly startBlock: (obj: EditorGoto) => void
    static name: string
}
abstract class EditorHoverIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorHoverIface */
    readonly gIface: EditorIface
    readonly hoverLeave: (obj: EditorHover, position: Iterable) => void
    readonly hoverOver: (obj: EditorHover, position: Iterable) => void
    readonly display: (obj: EditorHover, position: Iterable, info: string) => void
    static name: string
}
abstract class EditorIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorIface */
    readonly gIface: GObject.TypeInterface
    readonly backspace: (obj: Editor) => void
    readonly changed: (obj: Editor, position: Iterable, added: boolean, length: number, lines: number, text: string) => void
    readonly charAdded: (obj: Editor, position: Iterable, ch: number) => void
    readonly codeChanged: (obj: Editor, position: Iterable, code: string) => void
    readonly cursorMoved: (obj: Editor) => void
    readonly gladeCallbackAdd: (obj: Editor, widgetTypename: string, signalName: string, handlerName: string, object: string, swap: boolean, after: boolean, filename: string) => void
    readonly gladeMemberAdd: (obj: Editor, widgetTypename: string, widgetName: string, filename: string) => void
    readonly lineMarksGutterClicked: (obj: Editor, location: number) => void
    readonly append: (obj: Editor, text: string, length: number) => void
    readonly erase: (obj: Editor, positionStart: Iterable, positionEnd: Iterable) => void
    readonly eraseAll: (obj: Editor) => void
    readonly getColumn: (obj: Editor) => number
    readonly getCurrentWord: (obj: Editor) => string
    readonly getEndPosition: (obj: Editor) => Iterable
    readonly getIndentsize: (obj: Editor) => number
    readonly getLength: (obj: Editor) => number
    readonly getLineBeginPosition: (obj: Editor, line: number) => Iterable
    readonly getLineEndPosition: (obj: Editor, line: number) => Iterable
    readonly getLineFromPosition: (obj: Editor, position: Iterable) => number
    readonly getLineno: (obj: Editor) => number
    readonly getOffset: (obj: Editor) => number
    readonly getOverwrite: (obj: Editor) => boolean
    readonly getPosition: (obj: Editor) => Iterable
    readonly getStartPosition: (obj: Editor) => Iterable
    readonly getTabsize: (obj: Editor) => number
    readonly getText: (obj: Editor, begin: Iterable, end: Iterable) => string
    readonly getTextAll: (obj: Editor) => string
    readonly getUseSpaces: (obj: Editor) => boolean
    readonly gotoEnd: (obj: Editor) => void
    readonly gotoLine: (obj: Editor, lineno: number) => void
    readonly gotoPosition: (obj: Editor, position: Iterable) => void
    readonly gotoStart: (obj: Editor) => void
    readonly insert: (obj: Editor, position: Iterable, text: string, length: number) => void
    readonly setAutoIndent: (obj: Editor, autoIndent: boolean) => void
    readonly setIndentsize: (obj: Editor, indentsize: number) => void
    readonly setPopupMenu: (obj: Editor, menu: Gtk.Widget) => void
    readonly setTabsize: (obj: Editor, tabsize: number) => void
    readonly setUseSpaces: (obj: Editor, useSpaces: boolean) => void
    static name: string
}
abstract class EditorLanguageIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorLanguageIface */
    readonly gIface: EditorIface
    readonly languageChanged: (obj: EditorLanguage, language: string) => void
    readonly getLanguage: (obj: EditorLanguage) => string
    readonly getLanguageName: (obj: EditorLanguage, language: string) => string
    readonly getSupportedLanguages: (obj: EditorLanguage) => string[]
    readonly setLanguage: (obj: EditorLanguage, language: string) => void
    static name: string
}
abstract class EditorLineModeIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorLineModeIface */
    readonly gIface: EditorIface
    readonly convert: (obj: EditorLineMode, mode: EditorLineModeType) => void
    readonly fix: (obj: EditorLineMode) => void
    readonly get: (obj: EditorLineMode) => EditorLineModeType
    readonly set: (obj: EditorLineMode, mode: EditorLineModeType) => void
    static name: string
}
abstract class EditorSearchIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorSearchIface */
    readonly gIface: EditorIface
    readonly backward: (obj: EditorSearch, search: string, caseSensitive: boolean, start: EditorCell, end: EditorCell) => [ /* returnType */ boolean, /* resultStart */ EditorCell, /* resultEnd */ EditorCell ]
    readonly forward: (obj: EditorSearch, search: string, caseSensitive: boolean, start: EditorCell, end: EditorCell) => [ /* returnType */ boolean, /* resultStart */ EditorCell, /* resultEnd */ EditorCell ]
    static name: string
}
abstract class EditorSelectionIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorSelectionIface */
    readonly gIface: EditorIface
    readonly get: (obj: EditorSelection) => string
    readonly hasSelection: (obj: EditorSelection) => boolean
    readonly replace: (obj: EditorSelection, text: string, length: number) => void
    readonly selectAll: (obj: EditorSelection) => void
    readonly selectBlock: (obj: EditorSelection) => void
    readonly selectFunction: (obj: EditorSelection) => void
    readonly set: (obj: EditorSelection, start: Iterable, end: Iterable, scroll: boolean) => void
    static name: string
}
abstract class EditorTipIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorTipIface */
    readonly gIface: EditorIface
    readonly cancel: (obj: EditorTip) => void
    readonly show: (obj: EditorTip, tips: string[], position: Iterable) => void
    readonly visible: (obj: EditorTip) => boolean
    static name: string
}
abstract class EditorViewIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorViewIface */
    readonly gIface: EditorIface
    readonly create: (obj: EditorView) => void
    readonly getCount: (obj: EditorView) => number
    readonly removeCurrent: (obj: EditorView) => void
    static name: string
}
abstract class EditorZoomIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EditorZoomIface */
    readonly gIface: EditorIface
    readonly in_: (obj: EditorZoom) => void
    readonly out: (obj: EditorZoom) => void
    static name: string
}
abstract class EnvironmentIface {
    /* Fields of IAnjuta-3.0.IAnjuta.EnvironmentIface */
    readonly gIface: GObject.TypeInterface
    readonly getRealDirectory: (obj: Environment, dir: string) => string
    readonly override: (obj: Environment, dirp: string, argvp: string, envp: string) => boolean
    static name: string
}
abstract class FileIface {
    /* Fields of IAnjuta-3.0.IAnjuta.FileIface */
    readonly gIface: GObject.TypeInterface
    readonly opened: (obj: File) => void
    readonly getFile: (obj: File) => Gio.File
    readonly open: (obj: File, file: Gio.File) => void
    static name: string
}
abstract class FileLoaderIface {
    /* Fields of IAnjuta-3.0.IAnjuta.FileLoaderIface */
    readonly gIface: LoaderIface
    readonly peekInterface: (obj: FileLoader, file: Gio.File) => string
    static name: string
}
abstract class FileManagerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.FileManagerIface */
    readonly gIface: GObject.TypeInterface
    readonly sectionChanged: (obj: FileManager, file: Gio.File) => void
    readonly setRoot: (obj: FileManager, rootUri: string) => void
    readonly setSelected: (obj: FileManager, file: Gio.File) => void
    static name: string
}
abstract class FileSavableIface {
    /* Fields of IAnjuta-3.0.IAnjuta.FileSavableIface */
    readonly gIface: FileIface
    readonly saved: (obj: FileSavable, file: Gio.File) => void
    readonly updateSaveUi: (obj: FileSavable) => void
    readonly isConflict: (obj: FileSavable) => boolean
    readonly isDirty: (obj: FileSavable) => boolean
    readonly isReadOnly: (obj: FileSavable) => boolean
    readonly save: (obj: FileSavable) => void
    readonly saveAs: (obj: FileSavable, file: Gio.File) => void
    readonly setDirty: (obj: FileSavable, dirty: boolean) => void
    static name: string
}
abstract class GladeIface {
    /* Fields of IAnjuta-3.0.IAnjuta.GladeIface */
    readonly gIface: GObject.TypeInterface
    readonly addAssociation: (obj: Glade, master: string, slave: string) => void
    static name: string
}
abstract class HelpIface {
    /* Fields of IAnjuta-3.0.IAnjuta.HelpIface */
    readonly gIface: GObject.TypeInterface
    readonly search: (obj: Help, query: string) => void
    static name: string
}
abstract class IndenterIface {
    /* Fields of IAnjuta-3.0.IAnjuta.IndenterIface */
    readonly gIface: GObject.TypeInterface
    readonly indent: (obj: Indenter, start: Iterable, end: Iterable) => void
    static name: string
}
abstract class IndicableIface {
    /* Fields of IAnjuta-3.0.IAnjuta.IndicableIface */
    readonly gIface: GObject.TypeInterface
    readonly clear: (obj: Indicable) => void
    readonly set: (obj: Indicable, beginLocation: Iterable, endLocation: Iterable, indicator: IndicableIndicator) => void
    static name: string
}
abstract class IterableIface {
    /* Fields of IAnjuta-3.0.IAnjuta.IterableIface */
    readonly gIface: GObject.TypeInterface
    readonly assign: (obj: Iterable, srcIter: Iterable) => void
    readonly clone: (obj: Iterable) => Iterable
    readonly compare: (obj: Iterable, iter2: Iterable) => number
    readonly diff: (obj: Iterable, iter2: Iterable) => number
    readonly first: (obj: Iterable) => boolean
    readonly getLength: (obj: Iterable) => number
    readonly getPosition: (obj: Iterable) => number
    readonly last: (obj: Iterable) => boolean
    readonly next: (obj: Iterable) => boolean
    readonly previous: (obj: Iterable) => boolean
    readonly setPosition: (obj: Iterable, position: number) => boolean
    static name: string
}
abstract class IterableTreeIface {
    /* Fields of IAnjuta-3.0.IAnjuta.IterableTreeIface */
    readonly gIface: IterableIface
    readonly children: (obj: IterableTree) => boolean
    readonly hasChildren: (obj: IterableTree) => boolean
    readonly parent: (obj: IterableTree) => boolean
    static name: string
}
abstract class LanguageIface {
    /* Fields of IAnjuta-3.0.IAnjuta.LanguageIface */
    readonly gIface: GObject.TypeInterface
    readonly getFromEditor: (obj: Language, editor: EditorLanguage) => LanguageId
    readonly getFromMimeType: (obj: Language, mimeType: string) => LanguageId
    readonly getFromString: (obj: Language, string: string) => LanguageId
    readonly getLanguages: (obj: Language) => number[]
    readonly getMakeTarget: (obj: Language, id: LanguageId) => string
    readonly getName: (obj: Language, id: LanguageId) => string
    readonly getNameFromEditor: (obj: Language, editor: EditorLanguage) => string
    static name: string
}
abstract class LanguageProviderIface {
    /* Fields of IAnjuta-3.0.IAnjuta.LanguageProviderIface */
    readonly gIface: ProviderIface
    readonly getCalltipCache: (obj: LanguageProvider, callContext: string) => string[]
    readonly getCalltipContext: (obj: LanguageProvider, iter: Iterable) => string
    readonly newCalltip: (obj: LanguageProvider, callContext: string, iter: Iterable) => void
    readonly populateCompletions: (obj: LanguageProvider, iter: Iterable) => Iterable | null
    static name: string
}
abstract class LoaderIface {
    /* Fields of IAnjuta-3.0.IAnjuta.LoaderIface */
    readonly gIface: GObject.TypeInterface
    static name: string
}
abstract class MarkableIface {
    /* Fields of IAnjuta-3.0.IAnjuta.MarkableIface */
    readonly gIface: GObject.TypeInterface
    readonly markerClicked: (obj: Markable, doubleClick: boolean, location: number) => void
    readonly deleteAllMarkers: (obj: Markable, marker: MarkableMarker) => void
    readonly isMarkerSet: (obj: Markable, location: number, marker: MarkableMarker) => boolean
    readonly locationFromHandle: (obj: Markable, handle: number) => number
    readonly mark: (obj: Markable, location: number, marker: MarkableMarker, tooltip?: string | null) => number
    readonly unmark: (obj: Markable, location: number, marker: MarkableMarker) => void
    static name: string
}
abstract class MessageManagerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.MessageManagerIface */
    readonly gIface: GObject.TypeInterface
    readonly removeView: (obj: MessageManager, view: MessageView) => void
    readonly setCurrentView: (obj: MessageManager, view: MessageView) => void
    readonly setViewIcon: (obj: MessageManager, view: MessageView, icon: GdkPixbuf.PixbufAnimation) => void
    readonly setViewIconFromStock: (obj: MessageManager, view: MessageView, icon: string) => void
    readonly setViewTitle: (obj: MessageManager, view: MessageView, title: string) => void
    static name: string
}
abstract class MessageViewIface {
    /* Fields of IAnjuta-3.0.IAnjuta.MessageViewIface */
    readonly gIface: GObject.TypeInterface
    readonly bufferFlushed: (obj: MessageView, line: string) => void
    readonly messageClicked: (obj: MessageView, message: string) => void
    readonly append: (obj: MessageView, type: MessageViewType, summary: string, details: string) => void
    readonly bufferAppend: (obj: MessageView, text: string) => void
    readonly clear: (obj: MessageView) => void
    readonly getCurrentMessage: (obj: MessageView) => string
    readonly selectNext: (obj: MessageView) => void
    readonly selectPrevious: (obj: MessageView) => void
    static name: string
}
abstract class PluginFactoryIface {
    /* Fields of IAnjuta-3.0.IAnjuta.PluginFactoryIface */
    readonly gIface: GObject.TypeInterface
    static name: string
}
abstract class PreferencesIface {
    /* Fields of IAnjuta-3.0.IAnjuta.PreferencesIface */
    readonly gIface: GObject.TypeInterface
    readonly merge: (obj: Preferences, prefs: Anjuta.Preferences) => void
    readonly unmerge: (obj: Preferences, prefs: Anjuta.Preferences) => void
    static name: string
}
abstract class PrintIface {
    /* Fields of IAnjuta-3.0.IAnjuta.PrintIface */
    readonly gIface: GObject.TypeInterface
    readonly print: (obj: Print) => void
    readonly printPreview: (obj: Print) => void
    static name: string
}
abstract class ProjectBackendIface {
    /* Fields of IAnjuta-3.0.IAnjuta.ProjectBackendIface */
    readonly gIface: GObject.TypeInterface
    readonly newProject: (obj: ProjectBackend, file: Gio.File) => Project
    readonly probe: (obj: ProjectBackend, directory: Gio.File) => number
    static name: string
}
abstract class ProjectChooserIface {
    /* Fields of IAnjuta-3.0.IAnjuta.ProjectChooserIface */
    readonly gIface: GObject.TypeInterface
    readonly changed: (obj: ProjectChooser) => void
    readonly getSelected: (obj: ProjectChooser) => Gio.File
    readonly setProjectModel: (obj: ProjectChooser, manager: ProjectManager, childType: Anjuta.ProjectNodeType) => boolean
    static name: string
}
abstract class ProjectIface {
    /* Fields of IAnjuta-3.0.IAnjuta.ProjectIface */
    readonly gIface: GObject.TypeInterface
    readonly fileChanged: (obj: Project, node?: object | null) => void
    readonly nodeChanged: (obj: Project, node: object | null, error: GLib.Error) => void
    readonly nodeLoaded: (obj: Project, node: object | null, error: GLib.Error) => void
    readonly nodeSaved: (obj: Project, node: object | null, error: GLib.Error) => void
    readonly addNodeAfter: (obj: Project, parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file?: Gio.File | null, name?: string | null) => Anjuta.ProjectNode
    readonly addNodeBefore: (obj: Project, parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file?: Gio.File | null, name?: string | null) => Anjuta.ProjectNode
    readonly getNodeInfo: (obj: Project) => Anjuta.ProjectNodeInfo[]
    readonly getRoot: (obj: Project) => Anjuta.ProjectNode
    readonly isLoaded: (obj: Project) => boolean
    readonly loadNode: (obj: Project, node: Anjuta.ProjectNode) => boolean
    readonly removeNode: (obj: Project, node: Anjuta.ProjectNode) => boolean
    readonly removeProperty: (obj: Project, node: Anjuta.ProjectNode, id: string, name?: string | null) => boolean
    readonly saveNode: (obj: Project, node: Anjuta.ProjectNode) => boolean
    readonly setProperty: (obj: Project, node: Anjuta.ProjectNode, id: string, name: string | null, value: string) => Anjuta.ProjectProperty | null
    static name: string
}
abstract class ProjectManagerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.ProjectManagerIface */
    readonly gIface: GObject.TypeInterface
    readonly elementAdded: (obj: ProjectManager, element: Gio.File) => void
    readonly elementRemoved: (obj: ProjectManager, element: Gio.File) => void
    readonly elementSelected: (obj: ProjectManager, element: Gio.File) => void
    readonly projectLoaded: (obj: ProjectManager, error: GLib.Error) => void
    readonly addGroup: (obj: ProjectManager, name: string, defaultGroup?: Gio.File | null) => Gio.File
    readonly addSource: (obj: ProjectManager, name: string, defaultTarget?: Gio.File | null) => Gio.File
    readonly addSourceQuiet: (obj: ProjectManager, name: string, target: Gio.File) => Gio.File
    readonly addSources: (obj: ProjectManager, names: string[], defaultTarget?: Gio.File | null) => Gio.File[]
    readonly addTarget: (obj: ProjectManager, name: string, defaultGroup?: Gio.File | null) => Gio.File
    readonly getCapabilities: (obj: ProjectManager) => number
    readonly getChildren: (obj: ProjectManager, parent: Gio.File, childrenType: number) => Gio.File[]
    readonly getCurrentProject: (obj: ProjectManager) => Project
    readonly getElements: (obj: ProjectManager, elementType: Anjuta.ProjectNodeType) => Gio.File[]
    readonly getPackages: (obj: ProjectManager) => string[]
    readonly getSelected: (obj: ProjectManager) => Gio.File
    readonly getTargetType: (obj: ProjectManager, target: Gio.File) => Anjuta.ProjectNodeType
    readonly getTargets: (obj: ProjectManager, targetType: Anjuta.ProjectNodeType) => Gio.File[]
    readonly isOpen: (obj: ProjectManager) => boolean
    readonly removeFile: (obj: ProjectManager, file: Gio.File) => boolean
    static name: string
}
abstract class ProviderIface {
    /* Fields of IAnjuta-3.0.IAnjuta.ProviderIface */
    readonly gIface: GObject.TypeInterface
    readonly activate: (obj: Provider, iter: Iterable, data?: object | null) => void
    readonly getName: (obj: Provider) => string
    readonly getStartIter: (obj: Provider) => Iterable
    readonly populate: (obj: Provider, iter: Iterable) => void
    static name: string
}
abstract class SnippetsManagerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.SnippetsManagerIface */
    readonly gIface: GObject.TypeInterface
    readonly insert: (obj: SnippetsManager, key: string, editingSession: boolean) => boolean
    static name: string
}
abstract class StreamIface {
    /* Fields of IAnjuta-3.0.IAnjuta.StreamIface */
    readonly gIface: GObject.TypeInterface
    readonly open: (obj: Stream, stream?: object | null) => void
    static name: string
}
abstract class StreamLoaderIface {
    /* Fields of IAnjuta-3.0.IAnjuta.StreamLoaderIface */
    readonly gIface: LoaderIface
    readonly peekInterface: (obj: StreamLoader, stream?: object | null) => string
    static name: string
}
abstract class StreamSavableIface {
    /* Fields of IAnjuta-3.0.IAnjuta.StreamSavableIface */
    readonly gIface: StreamIface
    readonly save: (obj: StreamSavable, stream?: object | null) => void
    static name: string
}
abstract class SymbolIface {
    /* Fields of IAnjuta-3.0.IAnjuta.SymbolIface */
    readonly gIface: GObject.TypeInterface
    readonly getBoolean: (obj: Symbol, field: SymbolField) => boolean
    readonly getIcon: (obj: Symbol) => GdkPixbuf.Pixbuf
    readonly getInt: (obj: Symbol, field: SymbolField) => number
    readonly getString: (obj: Symbol, field: SymbolField) => string
    readonly getSymType: (obj: Symbol) => SymbolType
    static name: string
}
abstract class SymbolManagerIface {
    /* Fields of IAnjuta-3.0.IAnjuta.SymbolManagerIface */
    readonly gIface: GObject.TypeInterface
    readonly prjScanEnd: (obj: SymbolManager, processId: number) => void
    readonly sysScanEnd: (obj: SymbolManager, processId: number) => void
    readonly activatePackage: (obj: SymbolManager, pkgName: string, pkgVersion: string) => boolean
    readonly deactivateAll: (obj: SymbolManager) => void
    readonly deactivatePackage: (obj: SymbolManager, pkgName: string, pkgVersion: string) => void
    static name: string
}
abstract class SymbolQueryIface {
    /* Fields of IAnjuta-3.0.IAnjuta.SymbolQueryIface */
    readonly gIface: GObject.TypeInterface
    readonly asyncResult: (obj: SymbolQuery, result: GObject.Object) => void
    readonly cancel: (obj: SymbolQuery) => void
    readonly setFields: (obj: SymbolQuery, nFields: number, fields: SymbolField) => void
    readonly setFileScope: (obj: SymbolQuery, filescopeSearch: SymbolQueryFileScope) => void
    readonly setFilters: (obj: SymbolQuery, filters: SymbolType, includeTypes: boolean) => void
    readonly setGroupBy: (obj: SymbolQuery, field: SymbolField) => void
    readonly setLimit: (obj: SymbolQuery, limit: number) => void
    readonly setMode: (obj: SymbolQuery, mode: SymbolQueryMode) => void
    readonly setOffset: (obj: SymbolQuery, offset: number) => void
    readonly setOrderBy: (obj: SymbolQuery, field: SymbolField) => void
    static name: string
}
abstract class TerminalIface {
    /* Fields of IAnjuta-3.0.IAnjuta.TerminalIface */
    readonly gIface: GObject.TypeInterface
    readonly childExited: (obj: Terminal, pid: number, status: number) => void
    readonly executeCommand: (obj: Terminal, directory: string, command: string, environment: string[]) => number
    static name: string
}
abstract class TodoIface {
    /* Fields of IAnjuta-3.0.IAnjuta.TodoIface */
    readonly gIface: GObject.TypeInterface
    readonly load: (obj: Todo, file: Gio.File) => void
    static name: string
}
abstract class VcsIface {
    /* Fields of IAnjuta-3.0.IAnjuta.VcsIface */
    readonly gIface: GObject.TypeInterface
    readonly statusChanged: (obj: Vcs) => void
    readonly add: (obj: Vcs, files: Gio.File[], notify: Anjuta.AsyncNotify) => void
    readonly checkout: (obj: Vcs, repositoryLocation: string, dest: Gio.File, cancel: Gio.Cancellable | null, notify: Anjuta.AsyncNotify) => void
    readonly remove: (obj: Vcs, files: Gio.File[], notify: Anjuta.AsyncNotify) => void
    static name: string
}
abstract class WizardIface {
    /* Fields of IAnjuta-3.0.IAnjuta.WizardIface */
    readonly gIface: GObject.TypeInterface
    readonly activate: (obj: Wizard) => void
    static name: string
}
    type BuilderHandle = object
    type LanguageId = number
}
export default IAnjuta;