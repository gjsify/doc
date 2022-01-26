/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Grl-0.2
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace Grl {

enum CoreError {
    BROWSE_FAILED,
    SEARCH_FAILED,
    SEARCH_NULL_UNSUPPORTED,
    QUERY_FAILED,
    RESOLVE_FAILED,
    MEDIA_NOT_FOUND,
    STORE_FAILED,
    STORE_METADATA_FAILED,
    REMOVE_FAILED,
    MEDIA_FROM_URI_FAILED,
    CONFIG_LOAD_FAILED,
    CONFIG_FAILED,
    UNREGISTER_SOURCE_FAILED,
    LOAD_PLUGIN_FAILED,
    UNLOAD_PLUGIN_FAILED,
    REGISTER_METADATA_KEY_FAILED,
    NOTIFY_CHANGED_FAILED,
    OPERATION_CANCELLED,
    AUTHENTICATION_TOKEN,
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
enum Rank {
    LOWEST,
    LOW,
    DEFAULT,
    HIGH,
    HIGHEST,
}
enum SourceChangeType {
    CHANGED,
    ADDED,
    REMOVED,
}
enum MediaType {
    NONE,
    AUDIO,
    VIDEO,
    IMAGE,
    ALL,
}
enum ResolutionFlags {
    NORMAL,
    FULL,
    IDLE_RELAY,
    FAST_ONLY,
}
enum SupportedOps {
    NONE,
    RESOLVE,
    BROWSE,
    SEARCH,
    QUERY,
    STORE,
    STORE_PARENT,
    STORE_METADATA,
    REMOVE,
    MEDIA_FROM_URI,
    NOTIFY_CHANGE,
}
enum TypeFilter {
    NONE,
    AUDIO,
    VIDEO,
    IMAGE,
    ALL,
}
enum WriteFlags {
    NORMAL,
    FULL,
}
const CONFIG_KEY_APIKEY: string
const CONFIG_KEY_APIKEY_BLOB: string
const CONFIG_KEY_APISECRET: string
const CONFIG_KEY_APITOKEN: string
const CONFIG_KEY_APITOKEN_SECRET: string
const CONFIG_KEY_PASSWORD: string
const CONFIG_KEY_PLUGIN: string
const CONFIG_KEY_SOURCE: string
const CONFIG_KEY_USERNAME: string
const COUNT_INFINITY: number
const KEYID_FORMAT: string
const METADATA_KEY_ALBUM: number
const METADATA_KEY_ARTIST: number
const METADATA_KEY_AUDIO_TRACK: number
const METADATA_KEY_AUTHOR: number
const METADATA_KEY_BITRATE: number
const METADATA_KEY_CAMERA_MODEL: number
const METADATA_KEY_CERTIFICATE: number
const METADATA_KEY_CHILDCOUNT: number
const METADATA_KEY_CHILDCOUNT_UNKNOWN: number
const METADATA_KEY_CREATION_DATE: number
const METADATA_KEY_DESCRIPTION: number
const METADATA_KEY_DIRECTOR: number
const METADATA_KEY_DURATION: number
const METADATA_KEY_EPISODE: number
const METADATA_KEY_EPISODE_TITLE: number
const METADATA_KEY_EXPOSURE_TIME: number
const METADATA_KEY_EXTERNAL_PLAYER: number
const METADATA_KEY_EXTERNAL_URL: number
const METADATA_KEY_FAVOURITE: number
const METADATA_KEY_FLASH_USED: number
const METADATA_KEY_FRAMERATE: number
const METADATA_KEY_GENRE: number
const METADATA_KEY_HEIGHT: number
const METADATA_KEY_ID: number
const METADATA_KEY_INVALID: number
const METADATA_KEY_ISO_SPEED: number
const METADATA_KEY_KEYWORD: number
const METADATA_KEY_LAST_PLAYED: number
const METADATA_KEY_LAST_POSITION: number
const METADATA_KEY_LICENSE: number
const METADATA_KEY_LYRICS: number
const METADATA_KEY_MB_ALBUM_ID: number
const METADATA_KEY_MB_ARTIST_ID: number
const METADATA_KEY_MB_RECORDING_ID: number
const METADATA_KEY_MB_TRACK_ID: number
const METADATA_KEY_MIME: number
const METADATA_KEY_MODIFICATION_DATE: number
const METADATA_KEY_ORIENTATION: number
const METADATA_KEY_ORIGINAL_TITLE: number
const METADATA_KEY_PERFORMER: number
const METADATA_KEY_PLAY_COUNT: number
const METADATA_KEY_PRODUCER: number
const METADATA_KEY_PUBLICATION_DATE: number
const METADATA_KEY_RATING: number
const METADATA_KEY_REGION: number
const METADATA_KEY_SEASON: number
const METADATA_KEY_SHOW: number
const METADATA_KEY_SITE: number
const METADATA_KEY_SIZE: number
const METADATA_KEY_SOURCE: number
const METADATA_KEY_START_TIME: number
const METADATA_KEY_STUDIO: number
const METADATA_KEY_THUMBNAIL: number
const METADATA_KEY_THUMBNAIL_BINARY: number
const METADATA_KEY_TITLE: number
const METADATA_KEY_TITLE_FROM_FILENAME: number
const METADATA_KEY_TRACK_NUMBER: number
const METADATA_KEY_URL: number
const METADATA_KEY_WIDTH: number
const OPERATION_OPTION_COUNT: string
const OPERATION_OPTION_KEY_EQUAL_FILTER: string
const OPERATION_OPTION_KEY_RANGE_FILTER: string
const OPERATION_OPTION_RESOLUTION_FLAGS: string
const OPERATION_OPTION_SKIP: string
const OPERATION_OPTION_TYPE_FILTER: string
const PADDING: number
const PADDING_SMALL: number
const PLUGIN_AUTHOR: string
const PLUGIN_DESCRIPTION: string
const PLUGIN_LICENSE: string
const PLUGIN_LIST_VAR: string
const PLUGIN_NAME: string
const PLUGIN_PATH_VAR: string
const PLUGIN_RANKS_VAR: string
const PLUGIN_SITE: string
const PLUGIN_VERSION: string
const SOURCE_REMAINING_UNKNOWN: number
function date_time_from_iso8601(date: string): GLib.DateTime
function deinit(): void
function g_value_dup(value: any): any
function g_value_free(value: any): void
function g_value_hashtable_new(): GLib.HashTable
function g_value_hashtable_new_direct(): GLib.HashTable
function g_value_new(g_type: GObject.Type): any
function init(argv?: string[] | null): /* argv */ string[] | null
function init_get_option_group(): GLib.OptionGroup
function log_configure(config: string): void
function marshal_VOID__BOXED_ENUM_BOOLEAN(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function metadata_key_get_desc(key: KeyID): string
function metadata_key_get_name(key: KeyID): string
function metadata_key_get_type(key: KeyID): GObject.Type
function metadata_key_setup_system_keys(registry: Registry): void
function multiple_get_media_from_uri(uri: string, keys: KeyID[], options: OperationOptions, callback: SourceResolveCb): void
function multiple_search(sources: Source[] | null, text: string, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number
function multiple_search_sync(sources: Source[] | null, text: string, keys: KeyID[], options: OperationOptions): Media[]
function operation_cancel(operation_id: number): void
function operation_generate_id(): number
function operation_get_data(operation_id: number): object | null
function operation_init(): void
function operation_remove(operation_id: number): void
function operation_set_data(operation_id: number, user_data?: object | null): void
function operation_set_data_full(operation_id: number, user_data?: object | null, destroy_func?: GLib.DestroyNotify | null): void
function operation_set_private_data(operation_id: number, private_data: object | null, cancel_cb: OperationCancelCb): void
function paging_translate(skip: number, count: number, max_page_size: number, page_size: number, page_number: number, internal_offset: number): void
function range_value_hashtable_insert(hash_table: GLib.HashTable, key: object | null, min: any, max: any): void
function range_value_hashtable_new(): GLib.HashTable
interface OperationCancelCb {
    (data?: object | null): void
}
interface SourceRemoveCb {
    (source: Source, media: Media, error?: GLib.Error | null): void
}
interface SourceResolveCb {
    (source: Source, operation_id: number, media: Media, error?: GLib.Error | null): void
}
interface SourceResultCb {
    (source: Source, operation_id: number, media: Media | null, remaining: number, error?: GLib.Error | null): void
}
interface SourceStoreCb {
    (source: Source, media: Media, failed_keys: KeyID[], error?: GLib.Error | null): void
}
interface Caps_ConstructProps extends GObject.Object_ConstructProps {
}
class Caps {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.2.Grl.Caps */
    get_key_filter(): KeyID[]
    get_key_range_filter(): KeyID[]
    get_type_filter(): TypeFilter
    is_key_filter(key: KeyID): boolean
    is_key_range_filter(key: KeyID): boolean
    set_key_filter(keys: KeyID[]): void
    set_key_range_filter(keys: KeyID[]): void
    set_type_filter(filter: TypeFilter): void
    test_option(key: string, value: any): boolean
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
    connect(sigName: "notify", callback: (($obj: Caps, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Caps, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Caps_ConstructProps)
    _init (config?: Caps_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Caps
    static $gtype: GObject.Type
}
interface Config_ConstructProps extends GObject.Object_ConstructProps {
}
class Config {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.2.Grl.Config */
    get_api_key(): string
    get_api_key_blob(size: number): number
    get_api_secret(): string
    get_api_token(): string
    get_api_token_secret(): string
    get_binary(param: string, size?: number | null): number
    get_boolean(param: string): boolean
    get_float(param: string): number
    get_int(param: string): number
    get_password(): string
    get_plugin(): string
    get_source(): string
    get_string(param: string): string
    get_username(): string
    has_param(param: string): boolean
    set(param: string, value: any): void
    set_api_key(key: string): void
    set_api_key_blob(blob: number, size: number): void
    set_api_secret(secret: string): void
    set_api_token(token: string): void
    set_api_token_secret(secret: string): void
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
}
class Data {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.2.Grl.Data */
    add_binary(key: KeyID, buf: number, size: number): void
    add_boxed(key: KeyID, boxed?: object | null): void
    add_float(key: KeyID, floatvalue: number): void
    add_int(key: KeyID, intvalue: number): void
    add_int64(key: KeyID, intvalue: number): void
    add_related_keys(relkeys: RelatedKeys): void
    add_string(key: KeyID, strvalue: string): void
    dup(): Data
    get(key: KeyID): any
    get_binary(key: KeyID): [ /* returnType */ number, /* size */ number ]
    get_boolean(key: KeyID): boolean
    get_boxed(key: KeyID): object | null
    get_float(key: KeyID): number
    get_int(key: KeyID): number
    get_int64(key: KeyID): number
    get_keys(): KeyID[]
    get_related_keys(key: KeyID, index: number): RelatedKeys
    get_single_values_for_key(key: KeyID): any[]
    get_single_values_for_key_string(key: KeyID): string[]
    get_string(key: KeyID): string
    has_key(key: KeyID): boolean
    length(key: KeyID): number
    remove(key: KeyID): void
    remove_nth(key: KeyID, index: number): void
    set(key: KeyID, value: any): void
    set_binary(key: KeyID, buf: number, size: number): void
    set_boolean(key: KeyID, boolvalue: boolean): void
    set_boxed(key: KeyID, boxed?: object | null): void
    set_float(key: KeyID, floatvalue: number): void
    set_int(key: KeyID, intvalue: number): void
    set_int64(key: KeyID, intvalue: number): void
    set_related_keys(relkeys: RelatedKeys, index: number): void
    set_string(key: KeyID, strvalue: string): void
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
    /* Fields of Grl-0.2.Grl.Data */
    readonly parent: GObject.Object
    readonly priv: DataPrivate
    readonly _grl_reserved: object[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.2.Grl.Media */
    add_author(author: string): void
    add_external_player(player: string): void
    add_external_url(url: string): void
    add_keyword(keyword: string): void
    add_region_data(region: string, publication_date: GLib.DateTime, certificate: string): void
    add_thumbnail(thumbnail: string): void
    add_thumbnail_binary(thumbnail: number, size: number): void
    add_url_data(url: string, mime: string): void
    get_author(): string
    get_author_nth(index: number): string
    get_certificate(): string
    get_creation_date(): GLib.DateTime
    get_description(): string
    get_duration(): number
    get_external_url(): string
    get_external_url_nth(index: number): string
    get_favourite(): boolean
    get_id(): string
    get_keyword(): string
    get_keyword_nth(index: number): string
    get_last_played(): string
    get_last_position(): number
    get_license(): string
    get_mime(): string
    get_modification_date(): GLib.DateTime
    get_play_count(): number
    get_player(): string
    get_player_nth(index: number): string
    get_publication_date(): GLib.DateTime
    get_rating(): number
    get_region(): string
    get_region_data(): [ /* returnType */ string, /* publication_date */ GLib.DateTime, /* certificate */ string ]
    get_region_data_nth(index: number): [ /* returnType */ string, /* publication_date */ GLib.DateTime, /* certificate */ string ]
    get_site(): string
    get_size(): number
    get_source(): string
    get_start_time(): number
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
    set_creation_date(creation_date: GLib.DateTime): void
    set_description(description: string): void
    set_duration(duration: number): void
    set_external_player(player: string): void
    set_external_url(url: string): void
    set_favourite(favourite: boolean): void
    set_id(id: string): void
    set_keyword(keyword: string): void
    set_last_played(last_played: string): void
    set_last_position(last_position: number): void
    set_license(license: string): void
    set_mime(mime: string): void
    set_modification_date(modification_date: GLib.DateTime): void
    set_play_count(play_count: number): void
    set_publication_date(date: GLib.DateTime): void
    set_rating(rating: number, max: number): void
    set_region(region: string): void
    set_region_data(region: string, publication_date: GLib.DateTime, certificate: string): void
    set_site(site: string): void
    set_size(size: number): void
    set_source(source: string): void
    set_studio(studio: string): void
    set_thumbnail(thumbnail: string): void
    set_thumbnail_binary(thumbnail: number, size: number): void
    set_title(title: string): void
    set_url(url: string): void
    set_url_data(url: string, mime: string): void
    /* Methods of Grl-0.2.Grl.Data */
    add_binary(key: KeyID, buf: number, size: number): void
    add_boxed(key: KeyID, boxed?: object | null): void
    add_float(key: KeyID, floatvalue: number): void
    add_int(key: KeyID, intvalue: number): void
    add_int64(key: KeyID, intvalue: number): void
    add_related_keys(relkeys: RelatedKeys): void
    add_string(key: KeyID, strvalue: string): void
    dup(): Data
    get(key: KeyID): any
    get_binary(key: KeyID): [ /* returnType */ number, /* size */ number ]
    get_boolean(key: KeyID): boolean
    get_boxed(key: KeyID): object | null
    get_float(key: KeyID): number
    get_int(key: KeyID): number
    get_int64(key: KeyID): number
    get_keys(): KeyID[]
    get_related_keys(key: KeyID, index: number): RelatedKeys
    get_single_values_for_key(key: KeyID): any[]
    get_single_values_for_key_string(key: KeyID): string[]
    get_string(key: KeyID): string
    has_key(key: KeyID): boolean
    length(key: KeyID): number
    remove(key: KeyID): void
    remove_nth(key: KeyID, index: number): void
    set(key: KeyID, value: any): void
    set_binary(key: KeyID, buf: number, size: number): void
    set_boolean(key: KeyID, boolvalue: boolean): void
    set_boxed(key: KeyID, boxed?: object | null): void
    set_float(key: KeyID, floatvalue: number): void
    set_int(key: KeyID, intvalue: number): void
    set_int64(key: KeyID, intvalue: number): void
    set_related_keys(relkeys: RelatedKeys, index: number): void
    set_string(key: KeyID, strvalue: string): void
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
    /* Fields of Grl-0.2.Grl.Media */
    readonly parent: Data
    /* Fields of Grl-0.2.Grl.Data */
    readonly priv: DataPrivate
    readonly _grl_reserved: object[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.2.Grl.MediaAudio */
    add_artist(artist: string): void
    add_genre(genre: string): void
    add_lyrics(lyrics: string): void
    add_mb_artist_id(mb_artist_id: string): void
    add_url_data(url: string, mime: string, bitrate: number): void
    get_album(): string
    get_artist(): string
    get_artist_nth(index: number): string
    get_bitrate(): number
    get_genre(): string
    get_genre_nth(index: number): string
    get_lyrics(): string
    get_lyrics_nth(index: number): string
    get_mb_album_id(): string
    get_mb_artist_id(): string
    get_mb_artist_id_nth(index: number): string
    get_mb_recording_id(): string
    get_mb_track_id(): string
    get_track_number(): number
    get_url_data(): [ /* returnType */ string, /* mime */ string, /* bitrate */ number ]
    get_url_data_nth(index: number): [ /* returnType */ string, /* mime */ string, /* bitrate */ number ]
    set_album(album: string): void
    set_artist(artist: string): void
    set_bitrate(bitrate: number): void
    set_genre(genre: string): void
    set_lyrics(lyrics: string): void
    set_mb_album_id(mb_album_id: string): void
    set_mb_artist_id(mb_artist_id: string): void
    set_mb_recording_id(mb_recording_id: string): void
    set_mb_track_id(mb_track_id: string): void
    set_track_number(track_number: number): void
    set_url_data(url: string, mime: string, bitrate: number): void
    /* Methods of Grl-0.2.Grl.Media */
    add_author(author: string): void
    add_external_player(player: string): void
    add_external_url(url: string): void
    add_keyword(keyword: string): void
    add_region_data(region: string, publication_date: GLib.DateTime, certificate: string): void
    add_thumbnail(thumbnail: string): void
    add_thumbnail_binary(thumbnail: number, size: number): void
    add_url_data(url: string, mime: string): void
    get_author(): string
    get_author_nth(index: number): string
    get_certificate(): string
    get_creation_date(): GLib.DateTime
    get_description(): string
    get_duration(): number
    get_external_url(): string
    get_external_url_nth(index: number): string
    get_favourite(): boolean
    get_id(): string
    get_keyword(): string
    get_keyword_nth(index: number): string
    get_last_played(): string
    get_last_position(): number
    get_license(): string
    get_mime(): string
    get_modification_date(): GLib.DateTime
    get_play_count(): number
    get_player(): string
    get_player_nth(index: number): string
    get_publication_date(): GLib.DateTime
    get_rating(): number
    get_region(): string
    get_region_data(): [ /* returnType */ string, /* publication_date */ GLib.DateTime, /* certificate */ string ]
    get_region_data_nth(index: number): [ /* returnType */ string, /* publication_date */ GLib.DateTime, /* certificate */ string ]
    get_site(): string
    get_size(): number
    get_source(): string
    get_start_time(): number
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
    set_creation_date(creation_date: GLib.DateTime): void
    set_description(description: string): void
    set_duration(duration: number): void
    set_external_player(player: string): void
    set_external_url(url: string): void
    set_favourite(favourite: boolean): void
    set_id(id: string): void
    set_keyword(keyword: string): void
    set_last_played(last_played: string): void
    set_last_position(last_position: number): void
    set_license(license: string): void
    set_mime(mime: string): void
    set_modification_date(modification_date: GLib.DateTime): void
    set_play_count(play_count: number): void
    set_publication_date(date: GLib.DateTime): void
    set_rating(rating: number, max: number): void
    set_region(region: string): void
    set_region_data(region: string, publication_date: GLib.DateTime, certificate: string): void
    set_site(site: string): void
    set_size(size: number): void
    set_source(source: string): void
    set_studio(studio: string): void
    set_thumbnail(thumbnail: string): void
    set_thumbnail_binary(thumbnail: number, size: number): void
    set_title(title: string): void
    set_url(url: string): void
    set_url_data(url: string, mime: string): void
    /* Methods of Grl-0.2.Grl.Data */
    add_binary(key: KeyID, buf: number, size: number): void
    add_boxed(key: KeyID, boxed?: object | null): void
    add_float(key: KeyID, floatvalue: number): void
    add_int(key: KeyID, intvalue: number): void
    add_int64(key: KeyID, intvalue: number): void
    add_related_keys(relkeys: RelatedKeys): void
    add_string(key: KeyID, strvalue: string): void
    dup(): Data
    get(key: KeyID): any
    get_binary(key: KeyID): [ /* returnType */ number, /* size */ number ]
    get_boolean(key: KeyID): boolean
    get_boxed(key: KeyID): object | null
    get_float(key: KeyID): number
    get_int(key: KeyID): number
    get_int64(key: KeyID): number
    get_keys(): KeyID[]
    get_related_keys(key: KeyID, index: number): RelatedKeys
    get_single_values_for_key(key: KeyID): any[]
    get_single_values_for_key_string(key: KeyID): string[]
    get_string(key: KeyID): string
    has_key(key: KeyID): boolean
    length(key: KeyID): number
    remove(key: KeyID): void
    remove_nth(key: KeyID, index: number): void
    set(key: KeyID, value: any): void
    set_binary(key: KeyID, buf: number, size: number): void
    set_boolean(key: KeyID, boolvalue: boolean): void
    set_boxed(key: KeyID, boxed?: object | null): void
    set_float(key: KeyID, floatvalue: number): void
    set_int(key: KeyID, intvalue: number): void
    set_int64(key: KeyID, intvalue: number): void
    set_related_keys(relkeys: RelatedKeys, index: number): void
    set_string(key: KeyID, strvalue: string): void
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
    /* Fields of Grl-0.2.Grl.Media */
    readonly parent: Data
    /* Fields of Grl-0.2.Grl.Data */
    readonly priv: DataPrivate
    readonly _grl_reserved: object[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.2.Grl.MediaBox */
    get_childcount(): number
    set_childcount(childcount: number): void
    /* Methods of Grl-0.2.Grl.Media */
    add_author(author: string): void
    add_external_player(player: string): void
    add_external_url(url: string): void
    add_keyword(keyword: string): void
    add_region_data(region: string, publication_date: GLib.DateTime, certificate: string): void
    add_thumbnail(thumbnail: string): void
    add_thumbnail_binary(thumbnail: number, size: number): void
    add_url_data(url: string, mime: string): void
    get_author(): string
    get_author_nth(index: number): string
    get_certificate(): string
    get_creation_date(): GLib.DateTime
    get_description(): string
    get_duration(): number
    get_external_url(): string
    get_external_url_nth(index: number): string
    get_favourite(): boolean
    get_id(): string
    get_keyword(): string
    get_keyword_nth(index: number): string
    get_last_played(): string
    get_last_position(): number
    get_license(): string
    get_mime(): string
    get_modification_date(): GLib.DateTime
    get_play_count(): number
    get_player(): string
    get_player_nth(index: number): string
    get_publication_date(): GLib.DateTime
    get_rating(): number
    get_region(): string
    get_region_data(): [ /* returnType */ string, /* publication_date */ GLib.DateTime, /* certificate */ string ]
    get_region_data_nth(index: number): [ /* returnType */ string, /* publication_date */ GLib.DateTime, /* certificate */ string ]
    get_site(): string
    get_size(): number
    get_source(): string
    get_start_time(): number
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
    set_creation_date(creation_date: GLib.DateTime): void
    set_description(description: string): void
    set_duration(duration: number): void
    set_external_player(player: string): void
    set_external_url(url: string): void
    set_favourite(favourite: boolean): void
    set_id(id: string): void
    set_keyword(keyword: string): void
    set_last_played(last_played: string): void
    set_last_position(last_position: number): void
    set_license(license: string): void
    set_mime(mime: string): void
    set_modification_date(modification_date: GLib.DateTime): void
    set_play_count(play_count: number): void
    set_publication_date(date: GLib.DateTime): void
    set_rating(rating: number, max: number): void
    set_region(region: string): void
    set_region_data(region: string, publication_date: GLib.DateTime, certificate: string): void
    set_site(site: string): void
    set_size(size: number): void
    set_source(source: string): void
    set_studio(studio: string): void
    set_thumbnail(thumbnail: string): void
    set_thumbnail_binary(thumbnail: number, size: number): void
    set_title(title: string): void
    set_url(url: string): void
    set_url_data(url: string, mime: string): void
    /* Methods of Grl-0.2.Grl.Data */
    add_binary(key: KeyID, buf: number, size: number): void
    add_boxed(key: KeyID, boxed?: object | null): void
    add_float(key: KeyID, floatvalue: number): void
    add_int(key: KeyID, intvalue: number): void
    add_int64(key: KeyID, intvalue: number): void
    add_related_keys(relkeys: RelatedKeys): void
    add_string(key: KeyID, strvalue: string): void
    dup(): Data
    get(key: KeyID): any
    get_binary(key: KeyID): [ /* returnType */ number, /* size */ number ]
    get_boolean(key: KeyID): boolean
    get_boxed(key: KeyID): object | null
    get_float(key: KeyID): number
    get_int(key: KeyID): number
    get_int64(key: KeyID): number
    get_keys(): KeyID[]
    get_related_keys(key: KeyID, index: number): RelatedKeys
    get_single_values_for_key(key: KeyID): any[]
    get_single_values_for_key_string(key: KeyID): string[]
    get_string(key: KeyID): string
    has_key(key: KeyID): boolean
    length(key: KeyID): number
    remove(key: KeyID): void
    remove_nth(key: KeyID, index: number): void
    set(key: KeyID, value: any): void
    set_binary(key: KeyID, buf: number, size: number): void
    set_boolean(key: KeyID, boolvalue: boolean): void
    set_boxed(key: KeyID, boxed?: object | null): void
    set_float(key: KeyID, floatvalue: number): void
    set_int(key: KeyID, intvalue: number): void
    set_int64(key: KeyID, intvalue: number): void
    set_related_keys(relkeys: RelatedKeys, index: number): void
    set_string(key: KeyID, strvalue: string): void
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
    /* Fields of Grl-0.2.Grl.Media */
    readonly parent: Data
    /* Fields of Grl-0.2.Grl.Data */
    readonly priv: DataPrivate
    readonly _grl_reserved: object[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.2.Grl.MediaImage */
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
    /* Methods of Grl-0.2.Grl.Media */
    add_author(author: string): void
    add_external_player(player: string): void
    add_external_url(url: string): void
    add_keyword(keyword: string): void
    add_region_data(region: string, publication_date: GLib.DateTime, certificate: string): void
    add_thumbnail(thumbnail: string): void
    add_thumbnail_binary(thumbnail: number, size: number): void
    add_url_data(url: string, mime: string): void
    get_author(): string
    get_author_nth(index: number): string
    get_certificate(): string
    get_creation_date(): GLib.DateTime
    get_description(): string
    get_duration(): number
    get_external_url(): string
    get_external_url_nth(index: number): string
    get_favourite(): boolean
    get_id(): string
    get_keyword(): string
    get_keyword_nth(index: number): string
    get_last_played(): string
    get_last_position(): number
    get_license(): string
    get_mime(): string
    get_modification_date(): GLib.DateTime
    get_play_count(): number
    get_player(): string
    get_player_nth(index: number): string
    get_publication_date(): GLib.DateTime
    get_rating(): number
    get_region(): string
    get_region_data(): [ /* returnType */ string, /* publication_date */ GLib.DateTime, /* certificate */ string ]
    get_region_data_nth(index: number): [ /* returnType */ string, /* publication_date */ GLib.DateTime, /* certificate */ string ]
    get_site(): string
    get_size(): number
    get_source(): string
    get_start_time(): number
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
    set_creation_date(creation_date: GLib.DateTime): void
    set_description(description: string): void
    set_duration(duration: number): void
    set_external_player(player: string): void
    set_external_url(url: string): void
    set_favourite(favourite: boolean): void
    set_id(id: string): void
    set_keyword(keyword: string): void
    set_last_played(last_played: string): void
    set_last_position(last_position: number): void
    set_license(license: string): void
    set_mime(mime: string): void
    set_modification_date(modification_date: GLib.DateTime): void
    set_play_count(play_count: number): void
    set_publication_date(date: GLib.DateTime): void
    set_rating(rating: number, max: number): void
    set_region(region: string): void
    set_region_data(region: string, publication_date: GLib.DateTime, certificate: string): void
    set_site(site: string): void
    set_size(size: number): void
    set_source(source: string): void
    set_studio(studio: string): void
    set_thumbnail(thumbnail: string): void
    set_thumbnail_binary(thumbnail: number, size: number): void
    set_title(title: string): void
    set_url(url: string): void
    set_url_data(url: string, mime: string): void
    /* Methods of Grl-0.2.Grl.Data */
    add_binary(key: KeyID, buf: number, size: number): void
    add_boxed(key: KeyID, boxed?: object | null): void
    add_float(key: KeyID, floatvalue: number): void
    add_int(key: KeyID, intvalue: number): void
    add_int64(key: KeyID, intvalue: number): void
    add_related_keys(relkeys: RelatedKeys): void
    add_string(key: KeyID, strvalue: string): void
    dup(): Data
    get(key: KeyID): any
    get_binary(key: KeyID): [ /* returnType */ number, /* size */ number ]
    get_boolean(key: KeyID): boolean
    get_boxed(key: KeyID): object | null
    get_float(key: KeyID): number
    get_int(key: KeyID): number
    get_int64(key: KeyID): number
    get_keys(): KeyID[]
    get_related_keys(key: KeyID, index: number): RelatedKeys
    get_single_values_for_key(key: KeyID): any[]
    get_single_values_for_key_string(key: KeyID): string[]
    get_string(key: KeyID): string
    has_key(key: KeyID): boolean
    length(key: KeyID): number
    remove(key: KeyID): void
    remove_nth(key: KeyID, index: number): void
    set(key: KeyID, value: any): void
    set_binary(key: KeyID, buf: number, size: number): void
    set_boolean(key: KeyID, boolvalue: boolean): void
    set_boxed(key: KeyID, boxed?: object | null): void
    set_float(key: KeyID, floatvalue: number): void
    set_int(key: KeyID, intvalue: number): void
    set_int64(key: KeyID, intvalue: number): void
    set_related_keys(relkeys: RelatedKeys, index: number): void
    set_string(key: KeyID, strvalue: string): void
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
interface MediaVideo_ConstructProps extends Media_ConstructProps {
}
class MediaVideo {
    /* Fields of Grl-0.2.Grl.Media */
    readonly parent: Data
    /* Fields of Grl-0.2.Grl.Data */
    readonly priv: DataPrivate
    readonly _grl_reserved: object[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.2.Grl.MediaVideo */
    add_director(director: string): void
    add_performer(performer: string): void
    add_producer(producer: string): void
    add_url_data(url: string, mime: string, framerate: number, width: number, height: number): void
    get_director(): string
    get_director_nth(index: number): string
    get_episode(): number
    get_episode_title(): string
    get_framerate(): number
    get_height(): number
    get_original_title(): string
    get_performer(): string
    get_performer_nth(index: number): string
    get_producer(): string
    get_producer_nth(index: number): string
    get_season(): number
    get_show(): string
    get_url_data(framerate: number, width: number, height: number): [ /* returnType */ string, /* mime */ string ]
    get_url_data_nth(index: number, framerate: number, width: number, height: number): [ /* returnType */ string, /* mime */ string ]
    get_width(): number
    set_director(director: string): void
    set_episode(episode: number): void
    set_episode_title(episode_title: string): void
    set_framerate(framerate: number): void
    set_height(height: number): void
    set_original_title(original_title: string): void
    set_performer(performer: string): void
    set_producer(producer: string): void
    set_season(season: number): void
    set_show(show: string): void
    set_size(width: number, height: number): void
    set_url_data(url: string, mime: string, framerate: number, width: number, height: number): void
    set_width(width: number): void
    /* Methods of Grl-0.2.Grl.Media */
    add_author(author: string): void
    add_external_player(player: string): void
    add_external_url(url: string): void
    add_keyword(keyword: string): void
    add_region_data(region: string, publication_date: GLib.DateTime, certificate: string): void
    add_thumbnail(thumbnail: string): void
    add_thumbnail_binary(thumbnail: number, size: number): void
    add_url_data(url: string, mime: string): void
    get_author(): string
    get_author_nth(index: number): string
    get_certificate(): string
    get_creation_date(): GLib.DateTime
    get_description(): string
    get_duration(): number
    get_external_url(): string
    get_external_url_nth(index: number): string
    get_favourite(): boolean
    get_id(): string
    get_keyword(): string
    get_keyword_nth(index: number): string
    get_last_played(): string
    get_last_position(): number
    get_license(): string
    get_mime(): string
    get_modification_date(): GLib.DateTime
    get_play_count(): number
    get_player(): string
    get_player_nth(index: number): string
    get_publication_date(): GLib.DateTime
    get_rating(): number
    get_region(): string
    get_region_data(): [ /* returnType */ string, /* publication_date */ GLib.DateTime, /* certificate */ string ]
    get_region_data_nth(index: number): [ /* returnType */ string, /* publication_date */ GLib.DateTime, /* certificate */ string ]
    get_site(): string
    get_size(): number
    get_source(): string
    get_start_time(): number
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
    set_creation_date(creation_date: GLib.DateTime): void
    set_description(description: string): void
    set_duration(duration: number): void
    set_external_player(player: string): void
    set_external_url(url: string): void
    set_favourite(favourite: boolean): void
    set_id(id: string): void
    set_keyword(keyword: string): void
    set_last_played(last_played: string): void
    set_last_position(last_position: number): void
    set_license(license: string): void
    set_mime(mime: string): void
    set_modification_date(modification_date: GLib.DateTime): void
    set_play_count(play_count: number): void
    set_publication_date(date: GLib.DateTime): void
    set_rating(rating: number, max: number): void
    set_region(region: string): void
    set_region_data(region: string, publication_date: GLib.DateTime, certificate: string): void
    set_site(site: string): void
    set_size(size: number): void
    set_source(source: string): void
    set_studio(studio: string): void
    set_thumbnail(thumbnail: string): void
    set_thumbnail_binary(thumbnail: number, size: number): void
    set_title(title: string): void
    set_url(url: string): void
    set_url_data(url: string, mime: string): void
    /* Methods of Grl-0.2.Grl.Data */
    add_binary(key: KeyID, buf: number, size: number): void
    add_boxed(key: KeyID, boxed?: object | null): void
    add_float(key: KeyID, floatvalue: number): void
    add_int(key: KeyID, intvalue: number): void
    add_int64(key: KeyID, intvalue: number): void
    add_related_keys(relkeys: RelatedKeys): void
    add_string(key: KeyID, strvalue: string): void
    dup(): Data
    get(key: KeyID): any
    get_binary(key: KeyID): [ /* returnType */ number, /* size */ number ]
    get_boolean(key: KeyID): boolean
    get_boxed(key: KeyID): object | null
    get_float(key: KeyID): number
    get_int(key: KeyID): number
    get_int64(key: KeyID): number
    get_keys(): KeyID[]
    get_related_keys(key: KeyID, index: number): RelatedKeys
    get_single_values_for_key(key: KeyID): any[]
    get_single_values_for_key_string(key: KeyID): string[]
    get_string(key: KeyID): string
    has_key(key: KeyID): boolean
    length(key: KeyID): number
    remove(key: KeyID): void
    remove_nth(key: KeyID, index: number): void
    set(key: KeyID, value: any): void
    set_binary(key: KeyID, buf: number, size: number): void
    set_boolean(key: KeyID, boolvalue: boolean): void
    set_boxed(key: KeyID, boxed?: object | null): void
    set_float(key: KeyID, floatvalue: number): void
    set_int(key: KeyID, intvalue: number): void
    set_int64(key: KeyID, intvalue: number): void
    set_related_keys(relkeys: RelatedKeys, index: number): void
    set_string(key: KeyID, strvalue: string): void
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
interface OperationOptions_ConstructProps extends GObject.Object_ConstructProps {
}
class OperationOptions {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.2.Grl.OperationOptions */
    copy(): OperationOptions
    get_count(): number
    get_flags(): ResolutionFlags
    get_key_filter(key: KeyID): any
    get_key_filter_list(): KeyID[]
    get_key_range_filter(key: KeyID): [ /* min_value */ any | null, /* max_value */ any | null ]
    get_key_range_filter_list(): KeyID[]
    get_resolution_flags(): ResolutionFlags
    get_skip(): number
    get_type_filter(): TypeFilter
    key_is_set(key: string): boolean
    obey_caps(caps: Caps): [ /* returnType */ boolean, /* supported_options */ OperationOptions, /* unsupported_options */ OperationOptions ]
    set_count(count: number): boolean
    set_flags(flags: ResolutionFlags): boolean
    set_key_filters(filters: GLib.HashTable): boolean
    set_key_filter_value(key: KeyID, value: any): boolean
    set_key_range_filter_value(key: KeyID, min_value?: any | null, max_value?: any | null): boolean
    set_resolution_flags(flags: ResolutionFlags): boolean
    set_skip(skip: number): boolean
    set_type_filter(filter: TypeFilter): boolean
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
    connect(sigName: "notify", callback: (($obj: OperationOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OperationOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OperationOptions_ConstructProps)
    _init (config?: OperationOptions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(caps?: Caps | null): OperationOptions
    static $gtype: GObject.Type
}
interface Plugin_ConstructProps extends GObject.Object_ConstructProps {
}
class Plugin {
    /* Properties of Grl-0.2.Grl.Plugin */
    readonly loaded: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.2.Grl.Plugin */
    get_author(): string
    get_description(): string
    get_filename(): string
    get_id(): string
    get_info(key: string): string
    get_info_keys(): string[]
    get_license(): string
    get_name(): string
    get_site(): string
    get_sources(): Source[]
    get_version(): string
    load(configurations: Config[]): boolean
    register_keys(): void
    set_filename(filename: string): void
    set_id(id: string): void
    set_info(key: string, value: string): void
    set_load_func(load_function?: object | null): void
    set_module(module: GModule.Module): void
    set_optional_info(info: GLib.HashTable): void
    set_register_keys_func(register_keys_function?: object | null): void
    set_unload_func(unload_function?: object | null): void
    unload(): void
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
    connect(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::loaded", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loaded", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Plugin_ConstructProps)
    _init (config?: Plugin_ConstructProps): void
    static $gtype: GObject.Type
}
interface Registry_ConstructProps extends GObject.Object_ConstructProps {
}
class Registry {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.2.Grl.Registry */
    add_config(config: Config): boolean
    add_config_from_file(config_file: string): boolean
    add_config_from_resource(resource_path: string): boolean
    add_directory(path: string): void
    get_metadata_keys(): KeyID[]
    get_plugins(only_loaded: boolean): Plugin[]
    get_sources(ranked: boolean): Source[]
    get_sources_by_operations(ops: SupportedOps, ranked: boolean): Source[]
    load_all_plugins(): boolean
    load_plugin(library_filename: string): boolean
    load_plugin_by_id(plugin_id: string): boolean
    load_plugin_directory(path: string): boolean
    lookup_metadata_key(key_name: string): KeyID
    lookup_metadata_key_desc(key: KeyID): string
    lookup_metadata_key_name(key: KeyID): string
    lookup_metadata_key_relation(key: KeyID): KeyID[]
    lookup_metadata_key_type(key: KeyID): GObject.Type
    lookup_plugin(plugin_id: string): Plugin
    lookup_source(source_id: string): Source
    metadata_key_validate(key: KeyID, value: any): boolean
    register_metadata_key(param_spec: GObject.ParamSpec): KeyID
    register_metadata_key_relation(key1: KeyID, key2: KeyID): void
    register_metadata_key_system(param_spec: GObject.ParamSpec, key: KeyID): KeyID
    register_source(plugin: Plugin, source: Source): boolean
    restrict_plugins(plugins: string): void
    shutdown(): void
    unload_plugin(plugin_id: string): boolean
    unregister_source(source: Source): boolean
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
    /* Signals of Grl-0.2.Grl.Registry */
    connect(sigName: "metadata-key-added", callback: (($obj: Registry, key: string) => void)): number
    connect_after(sigName: "metadata-key-added", callback: (($obj: Registry, key: string) => void)): number
    emit(sigName: "metadata-key-added", key: string): void
    connect(sigName: "source-added", callback: (($obj: Registry, source: Source) => void)): number
    connect_after(sigName: "source-added", callback: (($obj: Registry, source: Source) => void)): number
    emit(sigName: "source-added", source: Source): void
    connect(sigName: "source-removed", callback: (($obj: Registry, source: Source) => void)): number
    connect_after(sigName: "source-removed", callback: (($obj: Registry, source: Source) => void)): number
    emit(sigName: "source-removed", source: Source): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Registry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Registry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Registry_ConstructProps)
    _init (config?: Registry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): Registry
    static $gtype: GObject.Type
}
interface RelatedKeys_ConstructProps extends GObject.Object_ConstructProps {
}
class RelatedKeys {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.2.Grl.RelatedKeys */
    dup(): RelatedKeys
    get(key: KeyID): any
    get_binary(key: KeyID): [ /* returnType */ number, /* size */ number ]
    get_boolean(key: KeyID): boolean
    get_boxed(key: KeyID): object | null
    get_float(key: KeyID): number
    get_int(key: KeyID): number
    get_int64(key: KeyID): number
    get_keys(): KeyID[]
    get_string(key: KeyID): string
    has_key(key: KeyID): boolean
    remove(key: KeyID): void
    set(key: KeyID, value: any): void
    set_binary(key: KeyID, buf: number, size: number): void
    set_boolean(key: KeyID, booleanvalue: boolean): void
    set_boxed(key: KeyID, boxed?: object | null): void
    set_float(key: KeyID, floatvalue: number): void
    set_int(key: KeyID, intvalue: number): void
    set_int64(key: KeyID, intvalue: number): void
    set_string(key: KeyID, strvalue: string): void
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
interface Source_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Grl-0.2.Grl.Source */
    auto_split_threshold?: number
    plugin?: Plugin
    rank?: number
    source_desc?: string
    source_icon?: Gio.Icon
    source_id?: string
    source_name?: string
    source_tags?: string[]
    supported_media?: MediaType
}
class Source {
    /* Properties of Grl-0.2.Grl.Source */
    auto_split_threshold: number
    plugin: Plugin
    rank: number
    source_desc: string
    source_icon: Gio.Icon
    source_id: string
    source_name: string
    source_tags: string[]
    supported_media: MediaType
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Grl-0.2.Grl.Source */
    browse(container: Media | null, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number
    browse_sync(container: Media | null, keys: KeyID[], options: OperationOptions): Media[]
    get_auto_split_threshold(): number
    get_caps(operation: SupportedOps): Caps
    get_description(): string
    get_icon(): Gio.Icon
    get_id(): string
    get_media_from_uri(uri: string, keys: KeyID[], options: OperationOptions, callback: SourceResolveCb): number
    get_media_from_uri_sync(uri: string, keys: KeyID[], options: OperationOptions): Media
    get_name(): string
    get_plugin(): Plugin
    get_rank(): number
    get_supported_media(): MediaType
    get_tags(): string[]
    may_resolve(media: Media, key_id: KeyID, missing_keys: KeyID[]): boolean
    notify_change(media: Media | null, change_type: SourceChangeType, location_unknown: boolean): void
    notify_change_list(changed_medias: Media[], change_type: SourceChangeType, location_unknown: boolean): void
    notify_change_start(): boolean
    notify_change_stop(): boolean
    query(query: string, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number
    query_sync(query: string, keys: KeyID[], options: OperationOptions): Media[]
    remove(media: Media, callback: SourceRemoveCb): void
    remove_sync(media: Media): void
    resolve(media: Media | null, keys: KeyID[], options: OperationOptions, callback: SourceResolveCb): number
    resolve_sync(media: Media | null, keys: KeyID[], options: OperationOptions): Media
    search(text: string, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number
    search_sync(text: string, keys: KeyID[], options: OperationOptions): Media[]
    set_auto_split_threshold(threshold: number): void
    slow_keys(): KeyID[]
    store(parent: MediaBox | null, media: Media, flags: WriteFlags, callback: SourceStoreCb): void
    store_metadata(media: Media, keys: KeyID[] | null, flags: WriteFlags, callback: SourceStoreCb): void
    store_metadata_sync(media: Media, keys: KeyID[] | null, flags: WriteFlags): KeyID[]
    store_sync(parent: MediaBox | null, media: Media, flags: WriteFlags): void
    supported_keys(): KeyID[]
    supported_operations(): number
    test_media_from_uri(uri: string): boolean
    writable_keys(): KeyID[]
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
    /* Virtual methods of Grl-0.2.Grl.Source */
    vfunc_browse(bs: SourceBrowseSpec): void
    vfunc_cancel(operation_id: number): void
    vfunc_get_caps(operation: SupportedOps): Caps
    vfunc_may_resolve(media: Media, key_id: KeyID, missing_keys: KeyID[]): boolean
    vfunc_media_from_uri(mfus: SourceMediaFromUriSpec): void
    vfunc_notify_change_start(): boolean
    vfunc_notify_change_stop(): boolean
    vfunc_query(qs: SourceQuerySpec): void
    vfunc_remove(rs: SourceRemoveSpec): void
    vfunc_resolve(ms: SourceResolveSpec): void
    vfunc_search(ss: SourceSearchSpec): void
    vfunc_slow_keys(): KeyID[]
    vfunc_store(ss: SourceStoreSpec): void
    vfunc_store_metadata(sms: SourceStoreMetadataSpec): void
    vfunc_supported_keys(): KeyID[]
    vfunc_supported_operations(): SupportedOps
    vfunc_test_media_from_uri(uri: string): boolean
    vfunc_writable_keys(): KeyID[]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Grl-0.2.Grl.Source */
    connect(sigName: "content-changed", callback: (($obj: Source, changed_medias: Media[], change_type: SourceChangeType, location_unknown: boolean) => void)): number
    connect_after(sigName: "content-changed", callback: (($obj: Source, changed_medias: Media[], change_type: SourceChangeType, location_unknown: boolean) => void)): number
    emit(sigName: "content-changed", changed_medias: Media[], change_type: SourceChangeType, location_unknown: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-split-threshold", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-split-threshold", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::plugin", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rank", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rank", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-desc", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-desc", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-icon", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-icon", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-id", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-id", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-name", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-name", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-tags", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-tags", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-media", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-media", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Source_ConstructProps)
    _init (config?: Source_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class CapsClass {
    /* Fields of Grl-0.2.Grl.CapsClass */
    readonly parent: GObject.ObjectClass
    static name: string
}
class CapsPrivate {
    static name: string
}
abstract class ConfigClass {
    /* Fields of Grl-0.2.Grl.ConfigClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class ConfigPrivate {
    static name: string
}
abstract class DataClass {
    /* Fields of Grl-0.2.Grl.DataClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class DataPrivate {
    static name: string
}
class LogDomain {
    /* Methods of Grl-0.2.Grl.LogDomain */
    free(): void
    static name: string
}
abstract class MediaAudioClass {
    /* Fields of Grl-0.2.Grl.MediaAudioClass */
    readonly parent_class: MediaClass
    static name: string
}
abstract class MediaBoxClass {
    /* Fields of Grl-0.2.Grl.MediaBoxClass */
    readonly parent_class: MediaClass
    static name: string
}
abstract class MediaClass {
    /* Fields of Grl-0.2.Grl.MediaClass */
    readonly parent_class: DataClass
    static name: string
}
abstract class MediaImageClass {
    /* Fields of Grl-0.2.Grl.MediaImageClass */
    readonly parent_class: MediaClass
    static name: string
}
abstract class MediaVideoClass {
    /* Fields of Grl-0.2.Grl.MediaVideoClass */
    readonly parent_class: MediaClass
    static name: string
}
abstract class OperationOptionsClass {
    /* Fields of Grl-0.2.Grl.OperationOptionsClass */
    readonly parent: GObject.ObjectClass
    static name: string
}
class OperationOptionsPrivate {
    static name: string
}
abstract class PluginClass {
    /* Fields of Grl-0.2.Grl.PluginClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class PluginDescriptor {
    /* Fields of Grl-0.2.Grl.PluginDescriptor */
    readonly plugin_id: string
    readonly plugin_deinit: (plugin: Plugin) => void
    readonly module: GModule.Module
    readonly plugin_register_keys: (registry: Registry, plugin: Plugin) => void
    static name: string
}
class PluginPrivate {
    static name: string
}
class RangeValue {
    /* Fields of Grl-0.2.Grl.RangeValue */
    readonly min: any
    readonly max: any
    /* Methods of Grl-0.2.Grl.RangeValue */
    dup(): RangeValue
    free(): void
    static name: string
    static new(min: any, max: any): RangeValue
    constructor(min: any, max: any)
    /* Static methods and pseudo-constructors */
    static new(min: any, max: any): RangeValue
    static hashtable_insert(hash_table: GLib.HashTable, key: object | null, min: any, max: any): void
    static hashtable_new(): GLib.HashTable
}
abstract class RegistryClass {
    /* Fields of Grl-0.2.Grl.RegistryClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class RegistryPrivate {
    static name: string
}
abstract class RelatedKeysClass {
    /* Fields of Grl-0.2.Grl.RelatedKeysClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class RelatedKeysPrivate {
    static name: string
}
class SourceBrowseSpec {
    /* Fields of Grl-0.2.Grl.SourceBrowseSpec */
    readonly source: Source
    readonly operation_id: number
    readonly container: Media
    readonly keys: object[]
    readonly options: OperationOptions
    readonly callback: SourceResultCb
    readonly user_data: object
    static name: string
}
abstract class SourceClass {
    /* Fields of Grl-0.2.Grl.SourceClass */
    readonly parent_class: GObject.ObjectClass
    readonly supported_operations: (source: Source) => SupportedOps
    readonly supported_keys: (source: Source) => KeyID[]
    readonly slow_keys: (source: Source) => KeyID[]
    readonly writable_keys: (source: Source) => KeyID[]
    readonly get_caps: (source: Source, operation: SupportedOps) => Caps
    readonly resolve: (source: Source, ms: SourceResolveSpec) => void
    readonly may_resolve: (source: Source, media: Media, key_id: KeyID, missing_keys: KeyID[]) => boolean
    readonly test_media_from_uri: (source: Source, uri: string) => boolean
    readonly media_from_uri: (source: Source, mfus: SourceMediaFromUriSpec) => void
    readonly browse: (source: Source, bs: SourceBrowseSpec) => void
    readonly search: (source: Source, ss: SourceSearchSpec) => void
    readonly query: (source: Source, qs: SourceQuerySpec) => void
    readonly remove: (source: Source, rs: SourceRemoveSpec) => void
    readonly store: (source: Source, ss: SourceStoreSpec) => void
    readonly store_metadata: (source: Source, sms: SourceStoreMetadataSpec) => void
    readonly cancel: (source: Source, operation_id: number) => void
    readonly notify_change_start: (source: Source) => boolean
    readonly notify_change_stop: (source: Source) => boolean
    static name: string
}
class SourceMediaFromUriSpec {
    /* Fields of Grl-0.2.Grl.SourceMediaFromUriSpec */
    readonly source: Source
    readonly operation_id: number
    readonly uri: string
    readonly keys: object[]
    readonly options: OperationOptions
    readonly callback: SourceResolveCb
    readonly user_data: object
    static name: string
}
class SourcePrivate {
    static name: string
}
class SourceQuerySpec {
    /* Fields of Grl-0.2.Grl.SourceQuerySpec */
    readonly source: Source
    readonly operation_id: number
    readonly query: string
    readonly keys: object[]
    readonly options: OperationOptions
    readonly callback: SourceResultCb
    readonly user_data: object
    static name: string
}
class SourceRemoveSpec {
    /* Fields of Grl-0.2.Grl.SourceRemoveSpec */
    readonly source: Source
    readonly media_id: string
    readonly media: Media
    readonly callback: SourceRemoveCb
    readonly user_data: object
    static name: string
}
class SourceResolveSpec {
    /* Fields of Grl-0.2.Grl.SourceResolveSpec */
    readonly source: Source
    readonly operation_id: number
    readonly media: Media
    readonly keys: object[]
    readonly options: OperationOptions
    readonly callback: SourceResolveCb
    readonly user_data: object
    static name: string
}
class SourceSearchSpec {
    /* Fields of Grl-0.2.Grl.SourceSearchSpec */
    readonly source: Source
    readonly operation_id: number
    readonly text: string
    readonly keys: object[]
    readonly options: OperationOptions
    readonly callback: SourceResultCb
    readonly user_data: object
    static name: string
}
class SourceStoreMetadataSpec {
    /* Fields of Grl-0.2.Grl.SourceStoreMetadataSpec */
    readonly source: Source
    readonly media: Media
    readonly keys: object[]
    readonly flags: WriteFlags
    readonly callback: SourceStoreCb
    readonly user_data: object
    readonly failed_keys: object[]
    static name: string
}
class SourceStoreSpec {
    /* Fields of Grl-0.2.Grl.SourceStoreSpec */
    readonly source: Source
    readonly parent: MediaBox
    readonly media: Media
    readonly callback: SourceStoreCb
    readonly user_data: object
    static name: string
}
    type KeyID = number
}
export default Grl;