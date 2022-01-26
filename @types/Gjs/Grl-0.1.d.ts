/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Grl-0.1
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace Grl {

enum CoreError {
    BROWSE_FAILED,
    SEARCH_FAILED,
    SEARCH_NULL_UNSUPPORTED,
    QUERY_FAILED,
    METADATA_FAILED,
    RESOLVE_FAILED,
    MEDIA_NOT_FOUND,
    STORE_FAILED,
    REMOVE_FAILED,
    SET_METADATA_FAILED,
    MEDIA_FROM_URI_FAILED,
    CONFIG_LOAD_FAILED,
    CONFIG_FAILED,
    UNREGISTER_SOURCE_FAILED,
    LOAD_PLUGIN_FAILED,
    UNLOAD_PLUGIN_FAILED,
    REGISTER_METADATA_KEY_FAILED,
    NOTIFY_CHANGED_FAILED,
    OPERATION_CANCELLED,
}
enum LogLevel {
    NONE,
    ERROR,
    WARNING,
    MESSAGE,
    INFO,
    DEBUG,
    LAST,
}
enum MediaSerializeType {
    BASIC,
    PARTIAL,
    FULL,
}
enum MediaSourceChangeType {
    CHANGED,
    ADDED,
    REMOVED,
}
enum PluginRank {
    LOWEST,
    LOW,
    DEFAULT,
    HIGH,
    HIGHEST,
}
enum MetadataResolutionFlags {
    NORMAL,
    FULL,
    IDLE_RELAY,
    FAST_ONLY,
}
enum MetadataWritingFlags {
    NORMAL,
    FULL,
}
enum SupportedOps {
    NONE,
    METADATA,
    RESOLVE,
    BROWSE,
    SEARCH,
    QUERY,
    STORE,
    STORE_PARENT,
    REMOVE,
    SET_METADATA,
    MEDIA_FROM_URI,
    NOTIFY_CHANGE,
}
const CONFIG_KEY_APIKEY: string
const CONFIG_KEY_APIKEY_BLOB: string
const CONFIG_KEY_APISECRET: string
const CONFIG_KEY_APITOKEN: string
const CONFIG_KEY_PASSWORD: string
const CONFIG_KEY_PLUGIN: string
const CONFIG_KEY_SOURCE: string
const CONFIG_KEY_USERNAME: string
const KEYID_FORMAT: string
const MEDIA_PLUGIN_AUTHOR: string
const MEDIA_PLUGIN_DESCRIPTION: string
const MEDIA_PLUGIN_LICENSE: string
const MEDIA_PLUGIN_NAME: string
const MEDIA_PLUGIN_SITE: string
const MEDIA_PLUGIN_VERSION: string
const METADATA_KEY_CHILDCOUNT_UNKNOWN: number
const PADDING: number
const PADDING_SMALL: number
const PLUGIN_LIST_VAR: string
const PLUGIN_PATH_VAR: string
const PLUGIN_RANKS_VAR: string
const SOURCE_REMAINING_UNKNOWN: number
function init(argv?: string[] | null): /* argv */ string[] | null
function log_configure(config: string): void
function marshal_VOID__BOXED_ENUM_BOOLEAN(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
function metadata_key_get_desc(key: GObject.ParamSpec): string
function metadata_key_get_name(key: GObject.ParamSpec): string
function metadata_key_setup_system_keys(registry: PluginRegistry): void
function multiple_cancel(search_id: number): void
function multiple_get_media_from_uri(uri: string, keys: KeyID[], flags: MetadataResolutionFlags, callback: MediaSourceMetadataCb): void
function multiple_search(sources: MediaSource[] | null, text: string, keys: GObject.ParamSpec[], count: number, flags: MetadataResolutionFlags, callback: MediaSourceResultCb): number
function multiple_search_sync(sources: MediaSource[] | null, text: string, keys: GObject.ParamSpec[], count: number, flags: MetadataResolutionFlags): Media[]
function operation_cancel(operation_id: number): void
function operation_get_data(operation_id: number): object
function operation_set_data(operation_id: number, user_data: object): void
function paging_translate(skip: number, count: number, max_page_size: number, page_size: number, page_number: number, internal_offset: number): void
interface MediaSourceMetadataCb {
    (source: MediaSource, operation_id: number, media: Media, error: number): void
}
interface MediaSourceRemoveCb {
    (source: MediaSource, media: Media, error: number): void
}
interface MediaSourceResultCb {
    (source: MediaSource, operation_id: number, media: Media, remaining: number, error: number): void
}
interface MediaSourceStoreCb {
    (source: MediaSource, parent: MediaBox, media: Media, error: number): void
}
interface MetadataSourceResolveCb {
    (source: MetadataSource, operation_id: number, media: Media, error: number): void
}
interface MetadataSourceSetMetadataCb {
    (source: MetadataSource, media: Media, failed_keys: GObject.ParamSpec[], error: number): void
}
interface Config_ConstructProps extends GObject.Object_ConstructProps {
}
class Config {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.Config */
    get_api_key(): string
    get_api_key_blob(size: number): number
    get_api_secret(): string
    get_api_token(): string
    get_binary(param: string, size: number): number
    get_boolean(param: string): boolean
    get_float(param: string): number
    get_int(param: string): number
    get_password(): string
    get_plugin(): string
    get_string(param: string): string
    get_username(): string
    has_param(param: string): boolean
    set(param: string, value: any): void
    set_api_key(key: string): void
    set_api_key_blob(blob: number, size: number): void
    set_api_secret(secret: string): void
    set_api_token(token: string): void
    set_binary(param: string, blob: number, size: number): void
    set_boolean(param: string, value: boolean): void
    set_float(param: string, value: number): void
    set_int(param: string, value: number): void
    set_password(password: string): void
    set_plugin(plugin: string): void
    set_source(source: string): void
    set_string(param: string, value: string): void
    set_username(username: string): void
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
    connect(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Config_ConstructProps)
    _init (config?: Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(plugin: string, source?: string | null): Config
    static $gtype: GObject.Type
}
interface Data_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Grl-0.1.Grl.Data */
    overwrite?: boolean
}
class Data {
    /* Properties of Grl-0.1.Grl.Data */
    overwrite: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.Data */
    add(key: GObject.ParamSpec): void
    add_binary(key: GObject.ParamSpec, buf: number, size: number): void
    add_float(key: GObject.ParamSpec, floatvalue: number): void
    add_int(key: GObject.ParamSpec, intvalue: number): void
    add_related_keys(relkeys: RelatedKeys): void
    add_string(key: GObject.ParamSpec, strvalue: string): void
    dup(): Data
    get(key: GObject.ParamSpec): any
    get_all_single_related_keys(key: KeyID): any[]
    get_all_single_related_keys_string(key: KeyID): string[]
    get_binary(key: GObject.ParamSpec): [ /* returnType */ number, /* size */ number ]
    get_float(key: GObject.ParamSpec): number
    get_int(key: GObject.ParamSpec): number
    get_keys(): GObject.ParamSpec[]
    get_overwrite(): boolean
    get_related_keys(key: KeyID, index: number): RelatedKeys
    get_single_values_for_key(key: KeyID): any[]
    get_single_values_for_key_string(key: KeyID): string[]
    get_string(key: GObject.ParamSpec): string
    has_key(key: GObject.ParamSpec): boolean
    key_is_known(key: GObject.ParamSpec): boolean
    length(key: KeyID): number
    remove(key: GObject.ParamSpec): void
    remove_nth(key: KeyID, index: number): void
    set(key: GObject.ParamSpec, value: any): void
    set_binary(key: GObject.ParamSpec, buf: number, size: number): void
    set_float(key: GObject.ParamSpec, floatvalue: number): void
    set_int(key: GObject.ParamSpec, intvalue: number): void
    set_overwrite(overwrite: boolean): void
    set_related_keys(relkeys: RelatedKeys, index: number): void
    set_string(key: GObject.ParamSpec, strvalue: string): void
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
    connect(sigName: "notify", callback: (($obj: Data, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Data, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::overwrite", callback: (($obj: Data, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: Data, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Data_ConstructProps)
    _init (config?: Data_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Data
    static $gtype: GObject.Type
}
interface Media_ConstructProps extends Data_ConstructProps {
}
class Media {
    /* Properties of Grl-0.1.Grl.Data */
    overwrite: boolean
    /* Fields of Grl-0.1.Grl.Data */
    readonly parent: GObject.Object
    readonly priv: DataPrivate
    readonly _grl_reserved: object[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.Media */
    add_author(author: string): void
    add_external_player(player: string): void
    add_external_url(url: string): void
    add_thumbnail(thumbnail: string): void
    add_thumbnail_binary(thumbnail: number, size: number): void
    add_url_data(url: string, mime: string): void
    get_author(): string
    get_author_nth(index: number): string
    get_certificate(): string
    get_creation_date(): string
    get_date(): string
    get_description(): string
    get_duration(): number
    get_external_url(): string
    get_external_url_nth(index: number): string
    get_id(): string
    get_last_played(): string
    get_last_position(): number
    get_license(): string
    get_mime(): string
    get_play_count(): number
    get_player(): string
    get_player_nth(index: number): string
    get_rating(): number
    get_site(): string
    get_source(): string
    get_studio(): string
    get_thumbnail(): string
    get_thumbnail_binary(size: number): number
    get_thumbnail_binary_nth(size: number, index: number): number
    get_thumbnail_nth(index: number): string
    get_title(): string
    get_url(): string
    get_url_data(): [ /* returnType */ string, /* mime */ string ]
    get_url_data_nth(index: number): [ /* returnType */ string, /* mime */ string ]
    serialize(): string
    set_author(author: string): void
    set_certificate(certificate: string): void
    set_creation_date(creation_date: string): void
    set_date(date: string): void
    set_description(description: string): void
    set_duration(duration: number): void
    set_external_player(player: string): void
    set_external_url(url: string): void
    set_id(id: string): void
    set_last_played(last_played: string): void
    set_last_position(last_position: number): void
    set_license(license: string): void
    set_mime(mime: string): void
    set_play_count(play_count: number): void
    set_rating(rating: number, max: number): void
    set_site(site: string): void
    set_source(source: string): void
    set_studio(studio: string): void
    set_thumbnail(thumbnail: string): void
    set_thumbnail_binary(thumbnail: number, size: number): void
    set_title(title: string): void
    set_url(url: string): void
    set_url_data(url: string, mime: string): void
    /* Methods of Grl-0.1.Grl.Data */
    add(key: GObject.ParamSpec): void
    add_binary(key: GObject.ParamSpec, buf: number, size: number): void
    add_float(key: GObject.ParamSpec, floatvalue: number): void
    add_int(key: GObject.ParamSpec, intvalue: number): void
    add_related_keys(relkeys: RelatedKeys): void
    add_string(key: GObject.ParamSpec, strvalue: string): void
    dup(): Data
    get(key: GObject.ParamSpec): any
    get_all_single_related_keys(key: KeyID): any[]
    get_all_single_related_keys_string(key: KeyID): string[]
    get_binary(key: GObject.ParamSpec): [ /* returnType */ number, /* size */ number ]
    get_float(key: GObject.ParamSpec): number
    get_int(key: GObject.ParamSpec): number
    get_keys(): GObject.ParamSpec[]
    get_overwrite(): boolean
    get_related_keys(key: KeyID, index: number): RelatedKeys
    get_single_values_for_key(key: KeyID): any[]
    get_single_values_for_key_string(key: KeyID): string[]
    get_string(key: GObject.ParamSpec): string
    has_key(key: GObject.ParamSpec): boolean
    key_is_known(key: GObject.ParamSpec): boolean
    length(key: KeyID): number
    remove(key: GObject.ParamSpec): void
    remove_nth(key: KeyID, index: number): void
    set(key: GObject.ParamSpec, value: any): void
    set_binary(key: GObject.ParamSpec, buf: number, size: number): void
    set_float(key: GObject.ParamSpec, floatvalue: number): void
    set_int(key: GObject.ParamSpec, intvalue: number): void
    set_overwrite(overwrite: boolean): void
    set_related_keys(relkeys: RelatedKeys, index: number): void
    set_string(key: GObject.ParamSpec, strvalue: string): void
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
    connect(sigName: "notify", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::overwrite", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Media_ConstructProps)
    _init (config?: Media_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Media
    /* Function overloads */
    static new(): Media
    static unserialize(serial: string): Media
    static $gtype: GObject.Type
}
interface MediaAudio_ConstructProps extends Media_ConstructProps {
}
class MediaAudio {
    /* Properties of Grl-0.1.Grl.Data */
    overwrite: boolean
    /* Fields of Grl-0.1.Grl.Media */
    readonly parent: Data
    /* Fields of Grl-0.1.Grl.Data */
    readonly priv: DataPrivate
    readonly _grl_reserved: object[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.MediaAudio */
    add_artist(artist: string): void
    add_genre(genre: string): void
    add_lyrics(lyrics: string): void
    add_url_data(url: string, mime: string, bitrate: number): void
    get_album(): string
    get_artist(): string
    get_artist_nth(index: number): string
    get_bitrate(): number
    get_genre(): string
    get_genre_nth(index: number): string
    get_lyrics(): string
    get_lyrics_nth(index: number): string
    get_track_number(): number
    get_url_data(): [ /* returnType */ string, /* mime */ string, /* bitrate */ number ]
    get_url_data_nth(index: number): [ /* returnType */ string, /* mime */ string, /* bitrate */ number ]
    set_album(album: string): void
    set_artist(artist: string): void
    set_bitrate(bitrate: number): void
    set_genre(genre: string): void
    set_lyrics(lyrics: string): void
    set_track_number(track_number: number): void
    set_url_data(url: string, mime: string, bitrate: number): void
    /* Methods of Grl-0.1.Grl.Media */
    add_author(author: string): void
    add_external_player(player: string): void
    add_external_url(url: string): void
    add_thumbnail(thumbnail: string): void
    add_thumbnail_binary(thumbnail: number, size: number): void
    add_url_data(url: string, mime: string): void
    get_author(): string
    get_author_nth(index: number): string
    get_certificate(): string
    get_creation_date(): string
    get_date(): string
    get_description(): string
    get_duration(): number
    get_external_url(): string
    get_external_url_nth(index: number): string
    get_id(): string
    get_last_played(): string
    get_last_position(): number
    get_license(): string
    get_mime(): string
    get_play_count(): number
    get_player(): string
    get_player_nth(index: number): string
    get_rating(): number
    get_site(): string
    get_source(): string
    get_studio(): string
    get_thumbnail(): string
    get_thumbnail_binary(size: number): number
    get_thumbnail_binary_nth(size: number, index: number): number
    get_thumbnail_nth(index: number): string
    get_title(): string
    get_url(): string
    get_url_data(): [ /* returnType */ string, /* mime */ string ]
    get_url_data_nth(index: number): [ /* returnType */ string, /* mime */ string ]
    serialize(): string
    set_author(author: string): void
    set_certificate(certificate: string): void
    set_creation_date(creation_date: string): void
    set_date(date: string): void
    set_description(description: string): void
    set_duration(duration: number): void
    set_external_player(player: string): void
    set_external_url(url: string): void
    set_id(id: string): void
    set_last_played(last_played: string): void
    set_last_position(last_position: number): void
    set_license(license: string): void
    set_mime(mime: string): void
    set_play_count(play_count: number): void
    set_rating(rating: number, max: number): void
    set_site(site: string): void
    set_source(source: string): void
    set_studio(studio: string): void
    set_thumbnail(thumbnail: string): void
    set_thumbnail_binary(thumbnail: number, size: number): void
    set_title(title: string): void
    set_url(url: string): void
    set_url_data(url: string, mime: string): void
    /* Methods of Grl-0.1.Grl.Data */
    add(key: GObject.ParamSpec): void
    add_binary(key: GObject.ParamSpec, buf: number, size: number): void
    add_float(key: GObject.ParamSpec, floatvalue: number): void
    add_int(key: GObject.ParamSpec, intvalue: number): void
    add_related_keys(relkeys: RelatedKeys): void
    add_string(key: GObject.ParamSpec, strvalue: string): void
    dup(): Data
    get(key: GObject.ParamSpec): any
    get_all_single_related_keys(key: KeyID): any[]
    get_all_single_related_keys_string(key: KeyID): string[]
    get_binary(key: GObject.ParamSpec): [ /* returnType */ number, /* size */ number ]
    get_float(key: GObject.ParamSpec): number
    get_int(key: GObject.ParamSpec): number
    get_keys(): GObject.ParamSpec[]
    get_overwrite(): boolean
    get_related_keys(key: KeyID, index: number): RelatedKeys
    get_single_values_for_key(key: KeyID): any[]
    get_single_values_for_key_string(key: KeyID): string[]
    get_string(key: GObject.ParamSpec): string
    has_key(key: GObject.ParamSpec): boolean
    key_is_known(key: GObject.ParamSpec): boolean
    length(key: KeyID): number
    remove(key: GObject.ParamSpec): void
    remove_nth(key: KeyID, index: number): void
    set(key: GObject.ParamSpec, value: any): void
    set_binary(key: GObject.ParamSpec, buf: number, size: number): void
    set_float(key: GObject.ParamSpec, floatvalue: number): void
    set_int(key: GObject.ParamSpec, intvalue: number): void
    set_overwrite(overwrite: boolean): void
    set_related_keys(relkeys: RelatedKeys, index: number): void
    set_string(key: GObject.ParamSpec, strvalue: string): void
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
    connect(sigName: "notify", callback: (($obj: MediaAudio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaAudio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::overwrite", callback: (($obj: MediaAudio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: MediaAudio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaAudio_ConstructProps)
    _init (config?: MediaAudio_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MediaAudio
    /* Function overloads */
    static new(): MediaAudio
    static $gtype: GObject.Type
}
interface MediaBox_ConstructProps extends Media_ConstructProps {
}
class MediaBox {
    /* Properties of Grl-0.1.Grl.Data */
    overwrite: boolean
    /* Fields of Grl-0.1.Grl.Media */
    readonly parent: Data
    /* Fields of Grl-0.1.Grl.Data */
    readonly priv: DataPrivate
    readonly _grl_reserved: object[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.MediaBox */
    get_childcount(): number
    set_childcount(childcount: number): void
    /* Methods of Grl-0.1.Grl.Media */
    add_author(author: string): void
    add_external_player(player: string): void
    add_external_url(url: string): void
    add_thumbnail(thumbnail: string): void
    add_thumbnail_binary(thumbnail: number, size: number): void
    add_url_data(url: string, mime: string): void
    get_author(): string
    get_author_nth(index: number): string
    get_certificate(): string
    get_creation_date(): string
    get_date(): string
    get_description(): string
    get_duration(): number
    get_external_url(): string
    get_external_url_nth(index: number): string
    get_id(): string
    get_last_played(): string
    get_last_position(): number
    get_license(): string
    get_mime(): string
    get_play_count(): number
    get_player(): string
    get_player_nth(index: number): string
    get_rating(): number
    get_site(): string
    get_source(): string
    get_studio(): string
    get_thumbnail(): string
    get_thumbnail_binary(size: number): number
    get_thumbnail_binary_nth(size: number, index: number): number
    get_thumbnail_nth(index: number): string
    get_title(): string
    get_url(): string
    get_url_data(): [ /* returnType */ string, /* mime */ string ]
    get_url_data_nth(index: number): [ /* returnType */ string, /* mime */ string ]
    serialize(): string
    set_author(author: string): void
    set_certificate(certificate: string): void
    set_creation_date(creation_date: string): void
    set_date(date: string): void
    set_description(description: string): void
    set_duration(duration: number): void
    set_external_player(player: string): void
    set_external_url(url: string): void
    set_id(id: string): void
    set_last_played(last_played: string): void
    set_last_position(last_position: number): void
    set_license(license: string): void
    set_mime(mime: string): void
    set_play_count(play_count: number): void
    set_rating(rating: number, max: number): void
    set_site(site: string): void
    set_source(source: string): void
    set_studio(studio: string): void
    set_thumbnail(thumbnail: string): void
    set_thumbnail_binary(thumbnail: number, size: number): void
    set_title(title: string): void
    set_url(url: string): void
    set_url_data(url: string, mime: string): void
    /* Methods of Grl-0.1.Grl.Data */
    add(key: GObject.ParamSpec): void
    add_binary(key: GObject.ParamSpec, buf: number, size: number): void
    add_float(key: GObject.ParamSpec, floatvalue: number): void
    add_int(key: GObject.ParamSpec, intvalue: number): void
    add_related_keys(relkeys: RelatedKeys): void
    add_string(key: GObject.ParamSpec, strvalue: string): void
    dup(): Data
    get(key: GObject.ParamSpec): any
    get_all_single_related_keys(key: KeyID): any[]
    get_all_single_related_keys_string(key: KeyID): string[]
    get_binary(key: GObject.ParamSpec): [ /* returnType */ number, /* size */ number ]
    get_float(key: GObject.ParamSpec): number
    get_int(key: GObject.ParamSpec): number
    get_keys(): GObject.ParamSpec[]
    get_overwrite(): boolean
    get_related_keys(key: KeyID, index: number): RelatedKeys
    get_single_values_for_key(key: KeyID): any[]
    get_single_values_for_key_string(key: KeyID): string[]
    get_string(key: GObject.ParamSpec): string
    has_key(key: GObject.ParamSpec): boolean
    key_is_known(key: GObject.ParamSpec): boolean
    length(key: KeyID): number
    remove(key: GObject.ParamSpec): void
    remove_nth(key: KeyID, index: number): void
    set(key: GObject.ParamSpec, value: any): void
    set_binary(key: GObject.ParamSpec, buf: number, size: number): void
    set_float(key: GObject.ParamSpec, floatvalue: number): void
    set_int(key: GObject.ParamSpec, intvalue: number): void
    set_overwrite(overwrite: boolean): void
    set_related_keys(relkeys: RelatedKeys, index: number): void
    set_string(key: GObject.ParamSpec, strvalue: string): void
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
    connect(sigName: "notify", callback: (($obj: MediaBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::overwrite", callback: (($obj: MediaBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: MediaBox, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaBox_ConstructProps)
    _init (config?: MediaBox_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MediaBox
    /* Function overloads */
    static new(): MediaBox
    static $gtype: GObject.Type
}
interface MediaImage_ConstructProps extends Media_ConstructProps {
}
class MediaImage {
    /* Properties of Grl-0.1.Grl.Data */
    overwrite: boolean
    /* Fields of Grl-0.1.Grl.Media */
    readonly parent: Data
    /* Fields of Grl-0.1.Grl.Data */
    readonly priv: DataPrivate
    readonly _grl_reserved: object[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.MediaImage */
    add_url_data(url: string, mime: string, width: number, height: number): void
    get_camera_model(): string
    get_exposure_time(): number
    get_flash_used(): string
    get_height(): number
    get_iso_speed(): number
    get_orientation(): number
    get_url_data(width: number, height: number): [ /* returnType */ string, /* mime */ string ]
    get_url_data_nth(index: number, width: number, height: number): [ /* returnType */ string, /* mime */ string ]
    get_width(): number
    set_camera_model(camera_model: string): void
    set_exposure_time(exposure_time: number): void
    set_flash_used(flash_used: string): void
    set_height(height: number): void
    set_iso_speed(iso_speed: number): void
    set_orientation(orientation: number): void
    set_size(width: number, height: number): void
    set_url_data(url: string, mime: string, width: number, height: number): void
    set_width(width: number): void
    /* Methods of Grl-0.1.Grl.Media */
    add_author(author: string): void
    add_external_player(player: string): void
    add_external_url(url: string): void
    add_thumbnail(thumbnail: string): void
    add_thumbnail_binary(thumbnail: number, size: number): void
    add_url_data(url: string, mime: string): void
    get_author(): string
    get_author_nth(index: number): string
    get_certificate(): string
    get_creation_date(): string
    get_date(): string
    get_description(): string
    get_duration(): number
    get_external_url(): string
    get_external_url_nth(index: number): string
    get_id(): string
    get_last_played(): string
    get_last_position(): number
    get_license(): string
    get_mime(): string
    get_play_count(): number
    get_player(): string
    get_player_nth(index: number): string
    get_rating(): number
    get_site(): string
    get_source(): string
    get_studio(): string
    get_thumbnail(): string
    get_thumbnail_binary(size: number): number
    get_thumbnail_binary_nth(size: number, index: number): number
    get_thumbnail_nth(index: number): string
    get_title(): string
    get_url(): string
    get_url_data(): [ /* returnType */ string, /* mime */ string ]
    get_url_data_nth(index: number): [ /* returnType */ string, /* mime */ string ]
    serialize(): string
    set_author(author: string): void
    set_certificate(certificate: string): void
    set_creation_date(creation_date: string): void
    set_date(date: string): void
    set_description(description: string): void
    set_duration(duration: number): void
    set_external_player(player: string): void
    set_external_url(url: string): void
    set_id(id: string): void
    set_last_played(last_played: string): void
    set_last_position(last_position: number): void
    set_license(license: string): void
    set_mime(mime: string): void
    set_play_count(play_count: number): void
    set_rating(rating: number, max: number): void
    set_site(site: string): void
    set_source(source: string): void
    set_studio(studio: string): void
    set_thumbnail(thumbnail: string): void
    set_thumbnail_binary(thumbnail: number, size: number): void
    set_title(title: string): void
    set_url(url: string): void
    set_url_data(url: string, mime: string): void
    /* Methods of Grl-0.1.Grl.Data */
    add(key: GObject.ParamSpec): void
    add_binary(key: GObject.ParamSpec, buf: number, size: number): void
    add_float(key: GObject.ParamSpec, floatvalue: number): void
    add_int(key: GObject.ParamSpec, intvalue: number): void
    add_related_keys(relkeys: RelatedKeys): void
    add_string(key: GObject.ParamSpec, strvalue: string): void
    dup(): Data
    get(key: GObject.ParamSpec): any
    get_all_single_related_keys(key: KeyID): any[]
    get_all_single_related_keys_string(key: KeyID): string[]
    get_binary(key: GObject.ParamSpec): [ /* returnType */ number, /* size */ number ]
    get_float(key: GObject.ParamSpec): number
    get_int(key: GObject.ParamSpec): number
    get_keys(): GObject.ParamSpec[]
    get_overwrite(): boolean
    get_related_keys(key: KeyID, index: number): RelatedKeys
    get_single_values_for_key(key: KeyID): any[]
    get_single_values_for_key_string(key: KeyID): string[]
    get_string(key: GObject.ParamSpec): string
    has_key(key: GObject.ParamSpec): boolean
    key_is_known(key: GObject.ParamSpec): boolean
    length(key: KeyID): number
    remove(key: GObject.ParamSpec): void
    remove_nth(key: KeyID, index: number): void
    set(key: GObject.ParamSpec, value: any): void
    set_binary(key: GObject.ParamSpec, buf: number, size: number): void
    set_float(key: GObject.ParamSpec, floatvalue: number): void
    set_int(key: GObject.ParamSpec, intvalue: number): void
    set_overwrite(overwrite: boolean): void
    set_related_keys(relkeys: RelatedKeys, index: number): void
    set_string(key: GObject.ParamSpec, strvalue: string): void
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
    connect(sigName: "notify", callback: (($obj: MediaImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::overwrite", callback: (($obj: MediaImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: MediaImage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaImage_ConstructProps)
    _init (config?: MediaImage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MediaImage
    /* Function overloads */
    static new(): MediaImage
    static $gtype: GObject.Type
}
interface MediaPlugin_ConstructProps extends GObject.Object_ConstructProps {
}
class MediaPlugin {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.MediaPlugin */
    get_author(): string
    get_description(): string
    get_filename(): string
    get_id(): string
    get_info(key: string): string
    get_info_keys(): string[]
    get_license(): string
    get_name(): string
    get_rank(): number
    get_site(): string
    get_version(): string
    set_plugin_info(info: PluginInfo): void
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
    connect(sigName: "notify", callback: (($obj: MediaPlugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaPlugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaPlugin_ConstructProps)
    _init (config?: MediaPlugin_ConstructProps): void
    static $gtype: GObject.Type
}
interface MediaSource_ConstructProps extends MetadataSource_ConstructProps {
    /* Constructor properties of Grl-0.1.Grl.MediaSource */
    auto_split_threshold?: number
}
class MediaSource {
    /* Properties of Grl-0.1.Grl.MediaSource */
    auto_split_threshold: number
    /* Properties of Grl-0.1.Grl.MetadataSource */
    source_desc: string
    source_id: string
    source_name: string
    /* Fields of Grl-0.1.Grl.MetadataSource */
    readonly parent: MediaPlugin
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.MediaSource */
    browse(container: Media | null, keys: GObject.ParamSpec[], skip: number, count: number, flags: MetadataResolutionFlags, callback: MediaSourceResultCb): number
    browse_sync(container: Media | null, keys: GObject.ParamSpec[], skip: number, count: number, flags: MetadataResolutionFlags): Media[]
    cancel(operation_id: number): void
    get_auto_split_threshold(): number
    get_media_from_uri(uri: string, keys: KeyID[], flags: MetadataResolutionFlags, callback: MediaSourceMetadataCb): number
    get_media_from_uri_sync(uri: string, keys: KeyID[], flags: MetadataResolutionFlags): Media
    get_operation_data(operation_id: number): object
    metadata(media: Media | null, keys: GObject.ParamSpec[], flags: MetadataResolutionFlags, callback: MediaSourceMetadataCb): number
    metadata_sync(media: Media | null, keys: GObject.ParamSpec[], flags: MetadataResolutionFlags): Media
    notify_change(media: Media | null, change_type: MediaSourceChangeType, location_unknown: boolean): void
    notify_change_list(changed_medias: Media[], change_type: MediaSourceChangeType, location_unknown: boolean): void
    notify_change_start(): boolean
    notify_change_stop(): boolean
    query(query: string, keys: GObject.ParamSpec[], skip: number, count: number, flags: MetadataResolutionFlags, callback: MediaSourceResultCb): number
    query_sync(query: string, keys: GObject.ParamSpec[], skip: number, count: number, flags: MetadataResolutionFlags): Media[]
    remove(media: Media, callback: MediaSourceRemoveCb): void
    remove_sync(media: Media): void
    search(text: string, keys: GObject.ParamSpec[], skip: number, count: number, flags: MetadataResolutionFlags, callback: MediaSourceResultCb): number
    search_sync(text: string, keys: GObject.ParamSpec[], skip: number, count: number, flags: MetadataResolutionFlags): Media[]
    set_auto_split_threshold(threshold: number): void
    set_operation_data(operation_id: number, data: object): void
    store(parent: MediaBox | null, media: Media, callback: MediaSourceStoreCb): void
    store_sync(parent: MediaBox | null, media: Media): void
    test_media_from_uri(uri: string): boolean
    /* Methods of Grl-0.1.Grl.MetadataSource */
    cancel(operation_id: number): void
    filter_slow(keys: GObject.ParamSpec[] | null, return_filtered: boolean): [ /* returnType */ GObject.ParamSpec[], /* keys */ GObject.ParamSpec[] | null ]
    filter_supported(keys: GObject.ParamSpec[] | null, return_filtered: boolean): [ /* returnType */ GObject.ParamSpec[], /* keys */ GObject.ParamSpec[] | null ]
    filter_writable(keys: GObject.ParamSpec[] | null, return_filtered: boolean): [ /* returnType */ GObject.ParamSpec[], /* keys */ GObject.ParamSpec[] | null ]
    gen_operation_id(): number
    get_description(): string
    get_id(): string
    get_name(): string
    get_operation_data(operation_id: number): object
    key_depends(key_id: GObject.ParamSpec): GObject.ParamSpec[]
    may_resolve(media: Media, key_id: KeyID): [ /* returnType */ boolean, /* missing_keys */ KeyID[] ]
    operation_is_cancelled(operation_id: number): boolean
    operation_is_completed(operation_id: number): boolean
    operation_is_finished(operation_id: number): boolean
    operation_is_ongoing(operation_id: number): boolean
    resolve(keys: GObject.ParamSpec[] | null, media: Media, flags: MetadataResolutionFlags, callback: MetadataSourceResolveCb): number
    resolve_sync(keys: GObject.ParamSpec[] | null, media: Media, flags: MetadataResolutionFlags): Media
    set_metadata(media: Media, keys: GObject.ParamSpec[] | null, flags: MetadataWritingFlags, callback: MetadataSourceSetMetadataCb): void
    set_metadata_sync(media: Media, keys: GObject.ParamSpec[] | null, flags: MetadataWritingFlags): GObject.ParamSpec[]
    set_operation_cancelled(operation_id: number): void
    set_operation_completed(operation_id: number): void
    set_operation_data(operation_id: number, data: object): void
    set_operation_finished(operation_id: number): void
    set_operation_ongoing(operation_id: number): void
    slow_keys(): GObject.ParamSpec[]
    supported_keys(): GObject.ParamSpec[]
    supported_operations(): number
    writable_keys(): GObject.ParamSpec[]
    /* Methods of Grl-0.1.Grl.MediaPlugin */
    get_author(): string
    get_filename(): string
    get_info(key: string): string
    get_info_keys(): string[]
    get_license(): string
    get_rank(): number
    get_site(): string
    get_version(): string
    set_plugin_info(info: PluginInfo): void
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
    /* Virtual methods of Grl-0.1.Grl.MediaSource */
    vfunc_browse(bs: MediaSourceBrowseSpec): void
    vfunc_cancel(operation_id: number): void
    /* Function overloads */
    vfunc_cancel(operation_id: number): void
    vfunc_media_from_uri(mfss: MediaSourceMediaFromUriSpec): void
    vfunc_metadata(ms: MediaSourceMetadataSpec): void
    vfunc_notify_change_start(): boolean
    vfunc_notify_change_stop(): boolean
    vfunc_query(qs: MediaSourceQuerySpec): void
    vfunc_remove(ss: MediaSourceRemoveSpec): void
    vfunc_search(ss: MediaSourceSearchSpec): void
    vfunc_store(ss: MediaSourceStoreSpec): void
    vfunc_test_media_from_uri(uri: string): boolean
    /* Virtual methods of Grl-0.1.Grl.MetadataSource */
    vfunc_cancel(operation_id: number): void
    vfunc_key_depends(key_id: GObject.ParamSpec): GObject.ParamSpec[]
    vfunc_may_resolve(media: Media, key_id: KeyID): [ /* returnType */ boolean, /* missing_keys */ KeyID[] ]
    vfunc_resolve(rs: MetadataSourceResolveSpec): void
    vfunc_set_metadata(sms: MetadataSourceSetMetadataSpec): void
    vfunc_slow_keys(): GObject.ParamSpec[]
    vfunc_supported_keys(): GObject.ParamSpec[]
    vfunc_supported_operations(): SupportedOps
    vfunc_writable_keys(): GObject.ParamSpec[]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Grl-0.1.Grl.MediaSource */
    connect(sigName: "content-changed", callback: (($obj: MediaSource, changed_medias: object[], change_type: MediaSourceChangeType, location_unknown: boolean) => void)): number
    connect_after(sigName: "content-changed", callback: (($obj: MediaSource, changed_medias: object[], change_type: MediaSourceChangeType, location_unknown: boolean) => void)): number
    emit(sigName: "content-changed", changed_medias: object[], change_type: MediaSourceChangeType, location_unknown: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-split-threshold", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-split-threshold", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-desc", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-desc", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-id", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-id", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-name", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-name", callback: (($obj: MediaSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaSource_ConstructProps)
    _init (config?: MediaSource_ConstructProps): void
    static $gtype: GObject.Type
}
interface MediaVideo_ConstructProps extends Media_ConstructProps {
}
class MediaVideo {
    /* Properties of Grl-0.1.Grl.Data */
    overwrite: boolean
    /* Fields of Grl-0.1.Grl.Media */
    readonly parent: Data
    /* Fields of Grl-0.1.Grl.Data */
    readonly priv: DataPrivate
    readonly _grl_reserved: object[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.MediaVideo */
    add_url_data(url: string, mime: string, framerate: number, width: number, height: number): void
    get_episode(): number
    get_framerate(): number
    get_height(): number
    get_season(): number
    get_show(): string
    get_url_data(framerate: number, width: number, height: number): [ /* returnType */ string, /* mime */ string ]
    get_url_data_nth(index: number, framerate: number, width: number, height: number): [ /* returnType */ string, /* mime */ string ]
    get_width(): number
    set_episode(episode: number): void
    set_framerate(framerate: number): void
    set_height(height: number): void
    set_season(season: number): void
    set_show(show: string): void
    set_size(width: number, height: number): void
    set_url_data(url: string, mime: string, framerate: number, width: number, height: number): void
    set_width(width: number): void
    /* Methods of Grl-0.1.Grl.Media */
    add_author(author: string): void
    add_external_player(player: string): void
    add_external_url(url: string): void
    add_thumbnail(thumbnail: string): void
    add_thumbnail_binary(thumbnail: number, size: number): void
    add_url_data(url: string, mime: string): void
    get_author(): string
    get_author_nth(index: number): string
    get_certificate(): string
    get_creation_date(): string
    get_date(): string
    get_description(): string
    get_duration(): number
    get_external_url(): string
    get_external_url_nth(index: number): string
    get_id(): string
    get_last_played(): string
    get_last_position(): number
    get_license(): string
    get_mime(): string
    get_play_count(): number
    get_player(): string
    get_player_nth(index: number): string
    get_rating(): number
    get_site(): string
    get_source(): string
    get_studio(): string
    get_thumbnail(): string
    get_thumbnail_binary(size: number): number
    get_thumbnail_binary_nth(size: number, index: number): number
    get_thumbnail_nth(index: number): string
    get_title(): string
    get_url(): string
    get_url_data(): [ /* returnType */ string, /* mime */ string ]
    get_url_data_nth(index: number): [ /* returnType */ string, /* mime */ string ]
    serialize(): string
    set_author(author: string): void
    set_certificate(certificate: string): void
    set_creation_date(creation_date: string): void
    set_date(date: string): void
    set_description(description: string): void
    set_duration(duration: number): void
    set_external_player(player: string): void
    set_external_url(url: string): void
    set_id(id: string): void
    set_last_played(last_played: string): void
    set_last_position(last_position: number): void
    set_license(license: string): void
    set_mime(mime: string): void
    set_play_count(play_count: number): void
    set_rating(rating: number, max: number): void
    set_site(site: string): void
    set_source(source: string): void
    set_studio(studio: string): void
    set_thumbnail(thumbnail: string): void
    set_thumbnail_binary(thumbnail: number, size: number): void
    set_title(title: string): void
    set_url(url: string): void
    set_url_data(url: string, mime: string): void
    /* Methods of Grl-0.1.Grl.Data */
    add(key: GObject.ParamSpec): void
    add_binary(key: GObject.ParamSpec, buf: number, size: number): void
    add_float(key: GObject.ParamSpec, floatvalue: number): void
    add_int(key: GObject.ParamSpec, intvalue: number): void
    add_related_keys(relkeys: RelatedKeys): void
    add_string(key: GObject.ParamSpec, strvalue: string): void
    dup(): Data
    get(key: GObject.ParamSpec): any
    get_all_single_related_keys(key: KeyID): any[]
    get_all_single_related_keys_string(key: KeyID): string[]
    get_binary(key: GObject.ParamSpec): [ /* returnType */ number, /* size */ number ]
    get_float(key: GObject.ParamSpec): number
    get_int(key: GObject.ParamSpec): number
    get_keys(): GObject.ParamSpec[]
    get_overwrite(): boolean
    get_related_keys(key: KeyID, index: number): RelatedKeys
    get_single_values_for_key(key: KeyID): any[]
    get_single_values_for_key_string(key: KeyID): string[]
    get_string(key: GObject.ParamSpec): string
    has_key(key: GObject.ParamSpec): boolean
    key_is_known(key: GObject.ParamSpec): boolean
    length(key: KeyID): number
    remove(key: GObject.ParamSpec): void
    remove_nth(key: KeyID, index: number): void
    set(key: GObject.ParamSpec, value: any): void
    set_binary(key: GObject.ParamSpec, buf: number, size: number): void
    set_float(key: GObject.ParamSpec, floatvalue: number): void
    set_int(key: GObject.ParamSpec, intvalue: number): void
    set_overwrite(overwrite: boolean): void
    set_related_keys(relkeys: RelatedKeys, index: number): void
    set_string(key: GObject.ParamSpec, strvalue: string): void
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
    connect(sigName: "notify", callback: (($obj: MediaVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::overwrite", callback: (($obj: MediaVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: MediaVideo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaVideo_ConstructProps)
    _init (config?: MediaVideo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MediaVideo
    /* Function overloads */
    static new(): MediaVideo
    static $gtype: GObject.Type
}
interface MetadataSource_ConstructProps extends MediaPlugin_ConstructProps {
    /* Constructor properties of Grl-0.1.Grl.MetadataSource */
    source_desc?: string
    source_id?: string
    source_name?: string
}
class MetadataSource {
    /* Properties of Grl-0.1.Grl.MetadataSource */
    source_desc: string
    source_id: string
    source_name: string
    /* Fields of Grl-0.1.Grl.MediaPlugin */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.MetadataSource */
    cancel(operation_id: number): void
    filter_slow(keys: GObject.ParamSpec[] | null, return_filtered: boolean): [ /* returnType */ GObject.ParamSpec[], /* keys */ GObject.ParamSpec[] | null ]
    filter_supported(keys: GObject.ParamSpec[] | null, return_filtered: boolean): [ /* returnType */ GObject.ParamSpec[], /* keys */ GObject.ParamSpec[] | null ]
    filter_writable(keys: GObject.ParamSpec[] | null, return_filtered: boolean): [ /* returnType */ GObject.ParamSpec[], /* keys */ GObject.ParamSpec[] | null ]
    gen_operation_id(): number
    get_description(): string
    get_id(): string
    get_name(): string
    get_operation_data(operation_id: number): object
    key_depends(key_id: GObject.ParamSpec): GObject.ParamSpec[]
    may_resolve(media: Media, key_id: KeyID): [ /* returnType */ boolean, /* missing_keys */ KeyID[] ]
    operation_is_cancelled(operation_id: number): boolean
    operation_is_completed(operation_id: number): boolean
    operation_is_finished(operation_id: number): boolean
    operation_is_ongoing(operation_id: number): boolean
    resolve(keys: GObject.ParamSpec[] | null, media: Media, flags: MetadataResolutionFlags, callback: MetadataSourceResolveCb): number
    resolve_sync(keys: GObject.ParamSpec[] | null, media: Media, flags: MetadataResolutionFlags): Media
    set_metadata(media: Media, keys: GObject.ParamSpec[] | null, flags: MetadataWritingFlags, callback: MetadataSourceSetMetadataCb): void
    set_metadata_sync(media: Media, keys: GObject.ParamSpec[] | null, flags: MetadataWritingFlags): GObject.ParamSpec[]
    set_operation_cancelled(operation_id: number): void
    set_operation_completed(operation_id: number): void
    set_operation_data(operation_id: number, data: object): void
    set_operation_finished(operation_id: number): void
    set_operation_ongoing(operation_id: number): void
    slow_keys(): GObject.ParamSpec[]
    supported_keys(): GObject.ParamSpec[]
    supported_operations(): number
    writable_keys(): GObject.ParamSpec[]
    /* Methods of Grl-0.1.Grl.MediaPlugin */
    get_author(): string
    get_filename(): string
    get_info(key: string): string
    get_info_keys(): string[]
    get_license(): string
    get_rank(): number
    get_site(): string
    get_version(): string
    set_plugin_info(info: PluginInfo): void
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
    /* Virtual methods of Grl-0.1.Grl.MetadataSource */
    vfunc_cancel(operation_id: number): void
    vfunc_key_depends(key_id: GObject.ParamSpec): GObject.ParamSpec[]
    vfunc_may_resolve(media: Media, key_id: KeyID): [ /* returnType */ boolean, /* missing_keys */ KeyID[] ]
    vfunc_resolve(rs: MetadataSourceResolveSpec): void
    vfunc_set_metadata(sms: MetadataSourceSetMetadataSpec): void
    vfunc_slow_keys(): GObject.ParamSpec[]
    vfunc_supported_keys(): GObject.ParamSpec[]
    vfunc_supported_operations(): SupportedOps
    vfunc_writable_keys(): GObject.ParamSpec[]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MetadataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MetadataSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::source-desc", callback: (($obj: MetadataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-desc", callback: (($obj: MetadataSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-id", callback: (($obj: MetadataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-id", callback: (($obj: MetadataSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-name", callback: (($obj: MetadataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-name", callback: (($obj: MetadataSource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MetadataSource_ConstructProps)
    _init (config?: MetadataSource_ConstructProps): void
    static $gtype: GObject.Type
}
interface PluginRegistry_ConstructProps extends GObject.Object_ConstructProps {
}
class PluginRegistry {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.PluginRegistry */
    add_config(config: Config): boolean
    add_config_from_file(config_file: string): boolean
    add_directory(path: string): void
    get_metadata_keys(): GObject.ParamSpec[]
    get_sources(ranked: boolean): MediaPlugin[]
    get_sources_by_operations(ops: SupportedOps, ranked: boolean): MediaPlugin[]
    load(library_filename: string): boolean
    load_all(): boolean
    load_by_id(plugin_id: string): boolean
    load_directory(path: string): boolean
    lookup_metadata_key(key_name: string): GObject.ParamSpec
    lookup_metadata_key_relation(key: KeyID): GObject.ParamSpec[]
    lookup_source(source_id: string): MediaPlugin
    register_metadata_key(key: GObject.ParamSpec): GObject.ParamSpec
    register_metadata_key_relation(key1: KeyID, key2: KeyID): void
    register_source(plugin: PluginInfo, source: MediaPlugin): boolean
    restrict_plugins(plugins: string): void
    unload(plugin_id: string): boolean
    unregister_source(source: MediaPlugin): boolean
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
    /* Signals of Grl-0.1.Grl.PluginRegistry */
    connect(sigName: "source-added", callback: (($obj: PluginRegistry, plugin: MediaPlugin) => void)): number
    connect_after(sigName: "source-added", callback: (($obj: PluginRegistry, plugin: MediaPlugin) => void)): number
    emit(sigName: "source-added", plugin: MediaPlugin): void
    connect(sigName: "source-removed", callback: (($obj: PluginRegistry, plugin: MediaPlugin) => void)): number
    connect_after(sigName: "source-removed", callback: (($obj: PluginRegistry, plugin: MediaPlugin) => void)): number
    emit(sigName: "source-removed", plugin: MediaPlugin): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PluginRegistry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PluginRegistry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PluginRegistry_ConstructProps)
    _init (config?: PluginRegistry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): PluginRegistry
    static $gtype: GObject.Type
}
interface RelatedKeys_ConstructProps extends GObject.Object_ConstructProps {
}
class RelatedKeys {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.1.Grl.RelatedKeys */
    add(key: GObject.ParamSpec): void
    dup(): RelatedKeys
    get(key: GObject.ParamSpec): any
    get_binary(key: GObject.ParamSpec): [ /* returnType */ number, /* size */ number ]
    get_float(key: GObject.ParamSpec): number
    get_int(key: GObject.ParamSpec): number
    get_keys(): GObject.ParamSpec[]
    get_string(key: GObject.ParamSpec): string
    has_key(key: GObject.ParamSpec): boolean
    key_is_known(key: GObject.ParamSpec): boolean
    set(key: GObject.ParamSpec, value: any): void
    set_binary(key: GObject.ParamSpec, buf: number, size: number): void
    set_float(key: GObject.ParamSpec, floatvalue: number): void
    set_int(key: GObject.ParamSpec, intvalue: number): void
    set_string(key: GObject.ParamSpec, strvalue: string): void
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
    connect(sigName: "notify", callback: (($obj: RelatedKeys, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RelatedKeys, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RelatedKeys_ConstructProps)
    _init (config?: RelatedKeys_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RelatedKeys
    static $gtype: GObject.Type
}
abstract class ConfigClass {
    /* Fields of Grl-0.1.Grl.ConfigClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class ConfigPrivate {
    static name: string
}
abstract class DataClass {
    /* Fields of Grl-0.1.Grl.DataClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class DataPrivate {
    static name: string
}
class LogDomain {
    /* Methods of Grl-0.1.Grl.LogDomain */
    free(): void
    static name: string
}
abstract class MediaAudioClass {
    /* Fields of Grl-0.1.Grl.MediaAudioClass */
    readonly parent_class: MediaClass
    static name: string
}
abstract class MediaBoxClass {
    /* Fields of Grl-0.1.Grl.MediaBoxClass */
    readonly parent_class: MediaClass
    static name: string
}
abstract class MediaClass {
    /* Fields of Grl-0.1.Grl.MediaClass */
    readonly parent_class: DataClass
    static name: string
}
abstract class MediaImageClass {
    /* Fields of Grl-0.1.Grl.MediaImageClass */
    readonly parent_class: MediaClass
    static name: string
}
abstract class MediaPluginClass {
    /* Fields of Grl-0.1.Grl.MediaPluginClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class MediaPluginPrivate {
    static name: string
}
class MediaSourceBrowseSpec {
    /* Fields of Grl-0.1.Grl.MediaSourceBrowseSpec */
    readonly source: MediaSource
    readonly browse_id: number
    readonly container: Media
    readonly keys: object[]
    readonly skip: number
    readonly count: number
    readonly flags: MetadataResolutionFlags
    readonly callback: MediaSourceResultCb
    readonly user_data: object
    static name: string
}
abstract class MediaSourceClass {
    /* Fields of Grl-0.1.Grl.MediaSourceClass */
    readonly parent_class: MetadataSourceClass
    readonly browse: (source: MediaSource, bs: MediaSourceBrowseSpec) => void
    readonly search: (source: MediaSource, ss: MediaSourceSearchSpec) => void
    readonly query: (source: MediaSource, qs: MediaSourceQuerySpec) => void
    readonly cancel: (source: MediaSource, operation_id: number) => void
    readonly metadata: (source: MediaSource, ms: MediaSourceMetadataSpec) => void
    readonly store: (source: MediaSource, ss: MediaSourceStoreSpec) => void
    readonly remove: (source: MediaSource, ss: MediaSourceRemoveSpec) => void
    readonly test_media_from_uri: (source: MediaSource, uri: string) => boolean
    readonly media_from_uri: (source: MediaSource, mfss: MediaSourceMediaFromUriSpec) => void
    readonly notify_change_start: (source: MediaSource) => boolean
    readonly notify_change_stop: (source: MediaSource) => boolean
    static name: string
}
class MediaSourceMediaFromUriSpec {
    /* Fields of Grl-0.1.Grl.MediaSourceMediaFromUriSpec */
    readonly source: MediaSource
    readonly media_from_uri_id: number
    readonly uri: string
    readonly keys: object[]
    readonly flags: MetadataResolutionFlags
    readonly callback: MediaSourceMetadataCb
    readonly user_data: object
    static name: string
}
class MediaSourceMetadataSpec {
    /* Fields of Grl-0.1.Grl.MediaSourceMetadataSpec */
    readonly source: MediaSource
    readonly metadata_id: number
    readonly media: Media
    readonly keys: object[]
    readonly flags: MetadataResolutionFlags
    readonly callback: MediaSourceMetadataCb
    readonly user_data: object
    static name: string
}
class MediaSourcePrivate {
    static name: string
}
class MediaSourceQuerySpec {
    /* Fields of Grl-0.1.Grl.MediaSourceQuerySpec */
    readonly source: MediaSource
    readonly query_id: number
    readonly query: string
    readonly keys: object[]
    readonly skip: number
    readonly count: number
    readonly flags: MetadataResolutionFlags
    readonly callback: MediaSourceResultCb
    readonly user_data: object
    static name: string
}
class MediaSourceRemoveSpec {
    /* Fields of Grl-0.1.Grl.MediaSourceRemoveSpec */
    readonly source: MediaSource
    readonly media_id: string
    readonly media: Media
    readonly callback: MediaSourceRemoveCb
    readonly user_data: object
    static name: string
}
class MediaSourceSearchSpec {
    /* Fields of Grl-0.1.Grl.MediaSourceSearchSpec */
    readonly source: MediaSource
    readonly search_id: number
    readonly text: string
    readonly keys: object[]
    readonly skip: number
    readonly count: number
    readonly flags: MetadataResolutionFlags
    readonly callback: MediaSourceResultCb
    readonly user_data: object
    static name: string
}
class MediaSourceStoreSpec {
    /* Fields of Grl-0.1.Grl.MediaSourceStoreSpec */
    readonly source: MediaSource
    readonly parent: MediaBox
    readonly media: Media
    readonly callback: MediaSourceStoreCb
    readonly user_data: object
    static name: string
}
abstract class MediaVideoClass {
    /* Fields of Grl-0.1.Grl.MediaVideoClass */
    readonly parent_class: MediaClass
    static name: string
}
abstract class MetadataSourceClass {
    /* Fields of Grl-0.1.Grl.MetadataSourceClass */
    readonly parent_class: MediaPluginClass
    readonly operation_id: number
    readonly supported_operations: (source: MetadataSource) => SupportedOps
    readonly supported_keys: (source: MetadataSource) => GObject.ParamSpec[]
    readonly slow_keys: (source: MetadataSource) => GObject.ParamSpec[]
    readonly key_depends: (source: MetadataSource, key_id: GObject.ParamSpec) => GObject.ParamSpec[]
    readonly writable_keys: (source: MetadataSource) => GObject.ParamSpec[]
    readonly resolve: (source: MetadataSource, rs: MetadataSourceResolveSpec) => void
    readonly set_metadata: (source: MetadataSource, sms: MetadataSourceSetMetadataSpec) => void
    readonly may_resolve: (source: MetadataSource, media: Media, key_id: KeyID) => [ /* returnType */ boolean, /* missing_keys */ KeyID[] ]
    readonly cancel: (source: MetadataSource, operation_id: number) => void
    static name: string
}
class MetadataSourcePrivate {
    static name: string
}
class MetadataSourceResolveSpec {
    /* Fields of Grl-0.1.Grl.MetadataSourceResolveSpec */
    readonly source: MetadataSource
    readonly resolve_id: number
    readonly keys: object[]
    readonly media: Media
    readonly flags: MetadataResolutionFlags
    readonly callback: MetadataSourceResolveCb
    readonly user_data: object
    static name: string
}
class MetadataSourceSetMetadataSpec {
    /* Fields of Grl-0.1.Grl.MetadataSourceSetMetadataSpec */
    readonly source: MetadataSource
    readonly media: Media
    readonly keys: object[]
    readonly flags: MetadataWritingFlags
    readonly callback: MetadataSourceSetMetadataCb
    readonly user_data: object
    readonly failed_keys: object[]
    static name: string
}
class PluginDescriptor {
    /* Fields of Grl-0.1.Grl.PluginDescriptor */
    readonly plugin_id: string
    readonly plugin_deinit: () => void
    readonly module: GModule.Module
    static name: string
}
class PluginInfo {
    /* Fields of Grl-0.1.Grl.PluginInfo */
    readonly id: string
    readonly filename: string
    readonly optional_info: GLib.HashTable
    readonly rank: number
    static name: string
}
abstract class PluginRegistryClass {
    /* Fields of Grl-0.1.Grl.PluginRegistryClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class PluginRegistryPrivate {
    static name: string
}
abstract class RelatedKeysClass {
    /* Fields of Grl-0.1.Grl.RelatedKeysClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class RelatedKeysPrivate {
    static name: string
}
    type KeyID = object
}
export default Grl;