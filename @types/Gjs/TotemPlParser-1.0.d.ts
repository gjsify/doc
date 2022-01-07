/**
 * TotemPlParser-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace TotemPlParser {

enum ParserError {
    NO_DISC,
    MOUNT_FAILED,
    EMPTY_PLAYLIST,
}
enum ParserResult {
    UNHANDLED,
    ERROR,
    SUCCESS,
    IGNORED,
    CANCELLED,
}
enum ParserType {
    PLS,
    M3U,
    M3U_DOS,
    XSPF,
    IRIVER_PLA,
}
export const PARSER_CONTENT_RATING_CLEAN: string
export const PARSER_CONTENT_RATING_EXPLICIT: string
export const PARSER_CONTENT_RATING_UNRATED: string
export const PARSER_FIELD_ABSTRACT: string
export const PARSER_FIELD_ALBUM: string
export const PARSER_FIELD_AUDIO_TRACK: string
export const PARSER_FIELD_AUTHOR: string
export const PARSER_FIELD_AUTOPLAY: string
export const PARSER_FIELD_BASE: string
export const PARSER_FIELD_CONTACT: string
export const PARSER_FIELD_CONTENT_RATING: string
export const PARSER_FIELD_CONTENT_TYPE: string
export const PARSER_FIELD_COPYRIGHT: string
export const PARSER_FIELD_DESCRIPTION: string
export const PARSER_FIELD_DOWNLOAD_URI: string
export const PARSER_FIELD_DURATION: string
export const PARSER_FIELD_DURATION_MS: string
export const PARSER_FIELD_ENDTIME: string
export const PARSER_FIELD_FILESIZE: string
export const PARSER_FIELD_GENRE: string
export const PARSER_FIELD_GENRES: string
export const PARSER_FIELD_ID: string
export const PARSER_FIELD_IMAGE_URI: string
export const PARSER_FIELD_IS_PLAYLIST: string
export const PARSER_FIELD_LANGUAGE: string
export const PARSER_FIELD_MOREINFO: string
export const PARSER_FIELD_PLAYING: string
export const PARSER_FIELD_PUB_DATE: string
export const PARSER_FIELD_SCREENSIZE: string
export const PARSER_FIELD_STARTTIME: string
export const PARSER_FIELD_SUBTITLE_URI: string
export const PARSER_FIELD_TITLE: string
export const PARSER_FIELD_UI_MODE: string
export const PARSER_FIELD_URI: string
export const PARSER_FIELD_VOLUME: string
export const PARSER_VERSION_MAJOR: number
export const PARSER_VERSION_MICRO: number
export const PARSER_VERSION_MINOR: number
function parser_error_quark(): GLib.Quark
function parser_metadata_get_type(): GObject.Type
export interface Parser_ConstructProps extends GObject.Object_ConstructProps {
    debug?: boolean
    disable_unsafe?: boolean
    force?: boolean
    recurse?: boolean
}
class Parser {
    /* Properties of TotemPlParser-1.0.TotemPlParser.Parser */
    debug: boolean
    disable_unsafe: boolean
    force: boolean
    recurse: boolean
    /* Fields of TotemPlParser-1.0.TotemPlParser.Parser */
    parent: GObject.Object
    priv: ParserPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TotemPlParser-1.0.TotemPlParser.Parser */
    add_ignored_glob(glob: string): void
    add_ignored_mimetype(mimetype: string): void
    add_ignored_scheme(scheme: string): void
    parse(uri: string, fallback: boolean): ParserResult
    parse_async(uri: string, fallback: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    parse_finish(async_result: Gio.AsyncResult): ParserResult
    parse_with_base(uri: string, base: string | null, fallback: boolean): ParserResult
    parse_with_base_async(uri: string, base: string | null, fallback: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    save(playlist: Playlist, dest: Gio.File, title: string, type: ParserType): boolean
    save_async(playlist: Playlist, dest: Gio.File, title: string, type: ParserType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    save_finish(async_result: Gio.AsyncResult): boolean
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
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of TotemPlParser-1.0.TotemPlParser.Parser */
    vfunc_entry_parsed(uri: string, metadata: GLib.HashTable): void
    vfunc_playlist_ended(uri: string): void
    vfunc_playlist_started(uri: string, metadata: GLib.HashTable): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of TotemPlParser-1.0.TotemPlParser.Parser */
    connect(sigName: "entry-parsed", callback: (($obj: Parser, uri: string, metadata: GLib.HashTable) => void)): number
    connect_after(sigName: "entry-parsed", callback: (($obj: Parser, uri: string, metadata: GLib.HashTable) => void)): number
    emit(sigName: "entry-parsed", uri: string, metadata: GLib.HashTable): void
    connect(sigName: "playlist-ended", callback: (($obj: Parser, uri: string) => void)): number
    connect_after(sigName: "playlist-ended", callback: (($obj: Parser, uri: string) => void)): number
    emit(sigName: "playlist-ended", uri: string): void
    connect(sigName: "playlist-started", callback: (($obj: Parser, uri: string, metadata: GLib.HashTable) => void)): number
    connect_after(sigName: "playlist-started", callback: (($obj: Parser, uri: string, metadata: GLib.HashTable) => void)): number
    emit(sigName: "playlist-started", uri: string, metadata: GLib.HashTable): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::debug", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::debug", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::disable-unsafe", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-unsafe", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::force", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::recurse", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recurse", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Parser_ConstructProps)
    _init (config?: Parser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Parser
    static can_parse_from_data(data: string, len: number, debug: boolean): boolean
    static can_parse_from_filename(filename: string, debug: boolean): boolean
    static can_parse_from_uri(uri: string, debug: boolean): boolean
    static parse_date(date_str: string, debug: boolean): number
    static parse_duration(duration: string, debug: boolean): number
    static $gtype: GObject.Type
}
export interface Playlist_ConstructProps extends GObject.Object_ConstructProps {
}
class Playlist {
    /* Fields of TotemPlParser-1.0.TotemPlParser.Playlist */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TotemPlParser-1.0.TotemPlParser.Playlist */
    append(): /* iter */ PlaylistIter
    get_value(iter: PlaylistIter, key: string, value: any): boolean
    insert(position: number): /* iter */ PlaylistIter
    iter_first(): [ /* returnType */ boolean, /* iter */ PlaylistIter ]
    iter_next(iter: PlaylistIter): boolean
    iter_prev(iter: PlaylistIter): boolean
    prepend(): /* iter */ PlaylistIter
    set_value(iter: PlaylistIter, key: string, value: any): boolean
    size(): number
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
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Playlist_ConstructProps)
    _init (config?: Playlist_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Playlist
    static $gtype: GObject.Type
}
abstract class ParserClass {
    /* Fields of TotemPlParser-1.0.TotemPlParser.ParserClass */
    parent_class: GObject.ObjectClass
    entry_parsed: (parser: Parser, uri: string, metadata: GLib.HashTable) => void
    playlist_started: (parser: Parser, uri: string, metadata: GLib.HashTable) => void
    playlist_ended: (parser: Parser, uri: string) => void
    static name: string
}
class ParserPrivate {
    static name: string
}
abstract class PlaylistClass {
    /* Fields of TotemPlParser-1.0.TotemPlParser.PlaylistClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class PlaylistIter {
    static name: string
}
}
export default TotemPlParser;