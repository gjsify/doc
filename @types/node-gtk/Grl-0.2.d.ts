/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Grl-0.2
 */

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
function dateTimeFromIso8601(date: string): GLib.DateTime
function deinit(): void
function gValueDup(value: any): any
function gValueFree(value: any): void
function gValueHashtableNew(): GLib.HashTable
function gValueHashtableNewDirect(): GLib.HashTable
function gValueNew(gType: GObject.Type): any
function init(argv?: string[] | null): /* argv */ string[] | null
function initGetOptionGroup(): GLib.OptionGroup
function logConfigure(config: string): void
function marshalVOIDBOXEDENUMBOOLEAN(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function metadataKeyGetDesc(key: KeyID): string
function metadataKeyGetName(key: KeyID): string
function metadataKeyGetType(key: KeyID): GObject.Type
function metadataKeySetupSystemKeys(registry: Registry): void
function multipleGetMediaFromUri(uri: string, keys: KeyID[], options: OperationOptions, callback: SourceResolveCb): void
function multipleSearch(sources: Source[] | null, text: string, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number
function multipleSearchSync(sources: Source[] | null, text: string, keys: KeyID[], options: OperationOptions): Media[]
function operationCancel(operationId: number): void
function operationGenerateId(): number
function operationGetData(operationId: number): object | null
function operationInit(): void
function operationRemove(operationId: number): void
function operationSetData(operationId: number, userData?: object | null): void
function operationSetDataFull(operationId: number, userData?: object | null, destroyFunc?: GLib.DestroyNotify | null): void
function operationSetPrivateData(operationId: number, privateData: object | null, cancelCb: OperationCancelCb): void
function pagingTranslate(skip: number, count: number, maxPageSize: number, pageSize: number, pageNumber: number, internalOffset: number): void
function rangeValueHashtableInsert(hashTable: GLib.HashTable, key: object | null, min: any, max: any): void
function rangeValueHashtableNew(): GLib.HashTable
interface OperationCancelCb {
    (data?: object | null): void
}
interface SourceRemoveCb {
    (source: Source, media: Media, error?: GLib.Error | null): void
}
interface SourceResolveCb {
    (source: Source, operationId: number, media: Media, error?: GLib.Error | null): void
}
interface SourceResultCb {
    (source: Source, operationId: number, media: Media | null, remaining: number, error?: GLib.Error | null): void
}
interface SourceStoreCb {
    (source: Source, media: Media, failedKeys: KeyID[], error?: GLib.Error | null): void
}
interface Caps_ConstructProps extends GObject.Object_ConstructProps {
}
class Caps {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Grl-0.2.Grl.Caps */
    getKeyFilter(): KeyID[]
    getKeyRangeFilter(): KeyID[]
    getTypeFilter(): TypeFilter
    isKeyFilter(key: KeyID): boolean
    isKeyRangeFilter(key: KeyID): boolean
    setKeyFilter(keys: KeyID[]): void
    setKeyRangeFilter(keys: KeyID[]): void
    setTypeFilter(filter: TypeFilter): void
    testOption(key: string, value: any): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Grl-0.2.Grl.Config */
    getApiKey(): string
    getApiKeyBlob(size: number): number
    getApiSecret(): string
    getApiToken(): string
    getApiTokenSecret(): string
    getBinary(param: string, size?: number | null): number
    getBoolean(param: string): boolean
    getFloat(param: string): number
    getInt(param: string): number
    getPassword(): string
    getPlugin(): string
    getSource(): string
    getString(param: string): string
    getUsername(): string
    hasParam(param: string): boolean
    set(param: string, value: any): void
    setApiKey(key: string): void
    setApiKeyBlob(blob: number, size: number): void
    setApiSecret(secret: string): void
    setApiToken(token: string): void
    setApiTokenSecret(secret: string): void
    setBinary(param: string, blob: number, size: number): void
    setBoolean(param: string, value: boolean): void
    setFloat(param: string, value: number): void
    setInt(param: string, value: number): void
    setPassword(password: string): void
    setPlugin(plugin: string): void
    setSource(source: string): void
    setString(param: string, value: string): void
    setUsername(username: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Grl-0.2.Grl.Data */
    addBinary(key: KeyID, buf: number, size: number): void
    addBoxed(key: KeyID, boxed?: object | null): void
    addFloat(key: KeyID, floatvalue: number): void
    addInt(key: KeyID, intvalue: number): void
    addInt64(key: KeyID, intvalue: number): void
    addRelatedKeys(relkeys: RelatedKeys): void
    addString(key: KeyID, strvalue: string): void
    dup(): Data
    get(key: KeyID): any
    getBinary(key: KeyID): [ /* returnType */ number, /* size */ number ]
    getBoolean(key: KeyID): boolean
    getBoxed(key: KeyID): object | null
    getFloat(key: KeyID): number
    getInt(key: KeyID): number
    getInt64(key: KeyID): number
    getKeys(): KeyID[]
    getRelatedKeys(key: KeyID, index: number): RelatedKeys
    getSingleValuesForKey(key: KeyID): any[]
    getSingleValuesForKeyString(key: KeyID): string[]
    getString(key: KeyID): string
    hasKey(key: KeyID): boolean
    length(key: KeyID): number
    remove(key: KeyID): void
    removeNth(key: KeyID, index: number): void
    set(key: KeyID, value: any): void
    setBinary(key: KeyID, buf: number, size: number): void
    setBoolean(key: KeyID, boolvalue: boolean): void
    setBoxed(key: KeyID, boxed?: object | null): void
    setFloat(key: KeyID, floatvalue: number): void
    setInt(key: KeyID, intvalue: number): void
    setInt64(key: KeyID, intvalue: number): void
    setRelatedKeys(relkeys: RelatedKeys, index: number): void
    setString(key: KeyID, strvalue: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly grlReserved: object[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Grl-0.2.Grl.Media */
    addAuthor(author: string): void
    addExternalPlayer(player: string): void
    addExternalUrl(url: string): void
    addKeyword(keyword: string): void
    addRegionData(region: string, publicationDate: GLib.DateTime, certificate: string): void
    addThumbnail(thumbnail: string): void
    addThumbnailBinary(thumbnail: number, size: number): void
    addUrlData(url: string, mime: string): void
    getAuthor(): string
    getAuthorNth(index: number): string
    getCertificate(): string
    getCreationDate(): GLib.DateTime
    getDescription(): string
    getDuration(): number
    getExternalUrl(): string
    getExternalUrlNth(index: number): string
    getFavourite(): boolean
    getId(): string
    getKeyword(): string
    getKeywordNth(index: number): string
    getLastPlayed(): string
    getLastPosition(): number
    getLicense(): string
    getMime(): string
    getModificationDate(): GLib.DateTime
    getPlayCount(): number
    getPlayer(): string
    getPlayerNth(index: number): string
    getPublicationDate(): GLib.DateTime
    getRating(): number
    getRegion(): string
    getRegionData(): [ /* returnType */ string, /* publicationDate */ GLib.DateTime, /* certificate */ string ]
    getRegionDataNth(index: number): [ /* returnType */ string, /* publicationDate */ GLib.DateTime, /* certificate */ string ]
    getSite(): string
    getSize(): number
    getSource(): string
    getStartTime(): number
    getStudio(): string
    getThumbnail(): string
    getThumbnailBinary(size: number): number
    getThumbnailBinaryNth(size: number, index: number): number
    getThumbnailNth(index: number): string
    getTitle(): string
    getUrl(): string
    getUrlData(): [ /* returnType */ string, /* mime */ string ]
    getUrlDataNth(index: number): [ /* returnType */ string, /* mime */ string ]
    serialize(): string
    setAuthor(author: string): void
    setCertificate(certificate: string): void
    setCreationDate(creationDate: GLib.DateTime): void
    setDescription(description: string): void
    setDuration(duration: number): void
    setExternalPlayer(player: string): void
    setExternalUrl(url: string): void
    setFavourite(favourite: boolean): void
    setId(id: string): void
    setKeyword(keyword: string): void
    setLastPlayed(lastPlayed: string): void
    setLastPosition(lastPosition: number): void
    setLicense(license: string): void
    setMime(mime: string): void
    setModificationDate(modificationDate: GLib.DateTime): void
    setPlayCount(playCount: number): void
    setPublicationDate(date: GLib.DateTime): void
    setRating(rating: number, max: number): void
    setRegion(region: string): void
    setRegionData(region: string, publicationDate: GLib.DateTime, certificate: string): void
    setSite(site: string): void
    setSize(size: number): void
    setSource(source: string): void
    setStudio(studio: string): void
    setThumbnail(thumbnail: string): void
    setThumbnailBinary(thumbnail: number, size: number): void
    setTitle(title: string): void
    setUrl(url: string): void
    setUrlData(url: string, mime: string): void
    /* Methods of Grl-0.2.Grl.Data */
    addBinary(key: KeyID, buf: number, size: number): void
    addBoxed(key: KeyID, boxed?: object | null): void
    addFloat(key: KeyID, floatvalue: number): void
    addInt(key: KeyID, intvalue: number): void
    addInt64(key: KeyID, intvalue: number): void
    addRelatedKeys(relkeys: RelatedKeys): void
    addString(key: KeyID, strvalue: string): void
    dup(): Data
    get(key: KeyID): any
    getBinary(key: KeyID): [ /* returnType */ number, /* size */ number ]
    getBoolean(key: KeyID): boolean
    getBoxed(key: KeyID): object | null
    getFloat(key: KeyID): number
    getInt(key: KeyID): number
    getInt64(key: KeyID): number
    getKeys(): KeyID[]
    getRelatedKeys(key: KeyID, index: number): RelatedKeys
    getSingleValuesForKey(key: KeyID): any[]
    getSingleValuesForKeyString(key: KeyID): string[]
    getString(key: KeyID): string
    hasKey(key: KeyID): boolean
    length(key: KeyID): number
    remove(key: KeyID): void
    removeNth(key: KeyID, index: number): void
    set(key: KeyID, value: any): void
    setBinary(key: KeyID, buf: number, size: number): void
    setBoolean(key: KeyID, boolvalue: boolean): void
    setBoxed(key: KeyID, boxed?: object | null): void
    setFloat(key: KeyID, floatvalue: number): void
    setInt(key: KeyID, intvalue: number): void
    setInt64(key: KeyID, intvalue: number): void
    setRelatedKeys(relkeys: RelatedKeys, index: number): void
    setString(key: KeyID, strvalue: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly grlReserved: object[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Grl-0.2.Grl.MediaAudio */
    addArtist(artist: string): void
    addGenre(genre: string): void
    addLyrics(lyrics: string): void
    addMbArtistId(mbArtistId: string): void
    addUrlData(url: string, mime: string, bitrate: number): void
    getAlbum(): string
    getArtist(): string
    getArtistNth(index: number): string
    getBitrate(): number
    getGenre(): string
    getGenreNth(index: number): string
    getLyrics(): string
    getLyricsNth(index: number): string
    getMbAlbumId(): string
    getMbArtistId(): string
    getMbArtistIdNth(index: number): string
    getMbRecordingId(): string
    getMbTrackId(): string
    getTrackNumber(): number
    getUrlData(): [ /* returnType */ string, /* mime */ string, /* bitrate */ number ]
    getUrlDataNth(index: number): [ /* returnType */ string, /* mime */ string, /* bitrate */ number ]
    setAlbum(album: string): void
    setArtist(artist: string): void
    setBitrate(bitrate: number): void
    setGenre(genre: string): void
    setLyrics(lyrics: string): void
    setMbAlbumId(mbAlbumId: string): void
    setMbArtistId(mbArtistId: string): void
    setMbRecordingId(mbRecordingId: string): void
    setMbTrackId(mbTrackId: string): void
    setTrackNumber(trackNumber: number): void
    setUrlData(url: string, mime: string, bitrate: number): void
    /* Methods of Grl-0.2.Grl.Media */
    addAuthor(author: string): void
    addExternalPlayer(player: string): void
    addExternalUrl(url: string): void
    addKeyword(keyword: string): void
    addRegionData(region: string, publicationDate: GLib.DateTime, certificate: string): void
    addThumbnail(thumbnail: string): void
    addThumbnailBinary(thumbnail: number, size: number): void
    addUrlData(url: string, mime: string): void
    getAuthor(): string
    getAuthorNth(index: number): string
    getCertificate(): string
    getCreationDate(): GLib.DateTime
    getDescription(): string
    getDuration(): number
    getExternalUrl(): string
    getExternalUrlNth(index: number): string
    getFavourite(): boolean
    getId(): string
    getKeyword(): string
    getKeywordNth(index: number): string
    getLastPlayed(): string
    getLastPosition(): number
    getLicense(): string
    getMime(): string
    getModificationDate(): GLib.DateTime
    getPlayCount(): number
    getPlayer(): string
    getPlayerNth(index: number): string
    getPublicationDate(): GLib.DateTime
    getRating(): number
    getRegion(): string
    getRegionData(): [ /* returnType */ string, /* publicationDate */ GLib.DateTime, /* certificate */ string ]
    getRegionDataNth(index: number): [ /* returnType */ string, /* publicationDate */ GLib.DateTime, /* certificate */ string ]
    getSite(): string
    getSize(): number
    getSource(): string
    getStartTime(): number
    getStudio(): string
    getThumbnail(): string
    getThumbnailBinary(size: number): number
    getThumbnailBinaryNth(size: number, index: number): number
    getThumbnailNth(index: number): string
    getTitle(): string
    getUrl(): string
    getUrlData(): [ /* returnType */ string, /* mime */ string ]
    getUrlDataNth(index: number): [ /* returnType */ string, /* mime */ string ]
    serialize(): string
    setAuthor(author: string): void
    setCertificate(certificate: string): void
    setCreationDate(creationDate: GLib.DateTime): void
    setDescription(description: string): void
    setDuration(duration: number): void
    setExternalPlayer(player: string): void
    setExternalUrl(url: string): void
    setFavourite(favourite: boolean): void
    setId(id: string): void
    setKeyword(keyword: string): void
    setLastPlayed(lastPlayed: string): void
    setLastPosition(lastPosition: number): void
    setLicense(license: string): void
    setMime(mime: string): void
    setModificationDate(modificationDate: GLib.DateTime): void
    setPlayCount(playCount: number): void
    setPublicationDate(date: GLib.DateTime): void
    setRating(rating: number, max: number): void
    setRegion(region: string): void
    setRegionData(region: string, publicationDate: GLib.DateTime, certificate: string): void
    setSite(site: string): void
    setSize(size: number): void
    setSource(source: string): void
    setStudio(studio: string): void
    setThumbnail(thumbnail: string): void
    setThumbnailBinary(thumbnail: number, size: number): void
    setTitle(title: string): void
    setUrl(url: string): void
    setUrlData(url: string, mime: string): void
    /* Methods of Grl-0.2.Grl.Data */
    addBinary(key: KeyID, buf: number, size: number): void
    addBoxed(key: KeyID, boxed?: object | null): void
    addFloat(key: KeyID, floatvalue: number): void
    addInt(key: KeyID, intvalue: number): void
    addInt64(key: KeyID, intvalue: number): void
    addRelatedKeys(relkeys: RelatedKeys): void
    addString(key: KeyID, strvalue: string): void
    dup(): Data
    get(key: KeyID): any
    getBinary(key: KeyID): [ /* returnType */ number, /* size */ number ]
    getBoolean(key: KeyID): boolean
    getBoxed(key: KeyID): object | null
    getFloat(key: KeyID): number
    getInt(key: KeyID): number
    getInt64(key: KeyID): number
    getKeys(): KeyID[]
    getRelatedKeys(key: KeyID, index: number): RelatedKeys
    getSingleValuesForKey(key: KeyID): any[]
    getSingleValuesForKeyString(key: KeyID): string[]
    getString(key: KeyID): string
    hasKey(key: KeyID): boolean
    length(key: KeyID): number
    remove(key: KeyID): void
    removeNth(key: KeyID, index: number): void
    set(key: KeyID, value: any): void
    setBinary(key: KeyID, buf: number, size: number): void
    setBoolean(key: KeyID, boolvalue: boolean): void
    setBoxed(key: KeyID, boxed?: object | null): void
    setFloat(key: KeyID, floatvalue: number): void
    setInt(key: KeyID, intvalue: number): void
    setInt64(key: KeyID, intvalue: number): void
    setRelatedKeys(relkeys: RelatedKeys, index: number): void
    setString(key: KeyID, strvalue: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly grlReserved: object[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Grl-0.2.Grl.MediaBox */
    getChildcount(): number
    setChildcount(childcount: number): void
    /* Methods of Grl-0.2.Grl.Media */
    addAuthor(author: string): void
    addExternalPlayer(player: string): void
    addExternalUrl(url: string): void
    addKeyword(keyword: string): void
    addRegionData(region: string, publicationDate: GLib.DateTime, certificate: string): void
    addThumbnail(thumbnail: string): void
    addThumbnailBinary(thumbnail: number, size: number): void
    addUrlData(url: string, mime: string): void
    getAuthor(): string
    getAuthorNth(index: number): string
    getCertificate(): string
    getCreationDate(): GLib.DateTime
    getDescription(): string
    getDuration(): number
    getExternalUrl(): string
    getExternalUrlNth(index: number): string
    getFavourite(): boolean
    getId(): string
    getKeyword(): string
    getKeywordNth(index: number): string
    getLastPlayed(): string
    getLastPosition(): number
    getLicense(): string
    getMime(): string
    getModificationDate(): GLib.DateTime
    getPlayCount(): number
    getPlayer(): string
    getPlayerNth(index: number): string
    getPublicationDate(): GLib.DateTime
    getRating(): number
    getRegion(): string
    getRegionData(): [ /* returnType */ string, /* publicationDate */ GLib.DateTime, /* certificate */ string ]
    getRegionDataNth(index: number): [ /* returnType */ string, /* publicationDate */ GLib.DateTime, /* certificate */ string ]
    getSite(): string
    getSize(): number
    getSource(): string
    getStartTime(): number
    getStudio(): string
    getThumbnail(): string
    getThumbnailBinary(size: number): number
    getThumbnailBinaryNth(size: number, index: number): number
    getThumbnailNth(index: number): string
    getTitle(): string
    getUrl(): string
    getUrlData(): [ /* returnType */ string, /* mime */ string ]
    getUrlDataNth(index: number): [ /* returnType */ string, /* mime */ string ]
    serialize(): string
    setAuthor(author: string): void
    setCertificate(certificate: string): void
    setCreationDate(creationDate: GLib.DateTime): void
    setDescription(description: string): void
    setDuration(duration: number): void
    setExternalPlayer(player: string): void
    setExternalUrl(url: string): void
    setFavourite(favourite: boolean): void
    setId(id: string): void
    setKeyword(keyword: string): void
    setLastPlayed(lastPlayed: string): void
    setLastPosition(lastPosition: number): void
    setLicense(license: string): void
    setMime(mime: string): void
    setModificationDate(modificationDate: GLib.DateTime): void
    setPlayCount(playCount: number): void
    setPublicationDate(date: GLib.DateTime): void
    setRating(rating: number, max: number): void
    setRegion(region: string): void
    setRegionData(region: string, publicationDate: GLib.DateTime, certificate: string): void
    setSite(site: string): void
    setSize(size: number): void
    setSource(source: string): void
    setStudio(studio: string): void
    setThumbnail(thumbnail: string): void
    setThumbnailBinary(thumbnail: number, size: number): void
    setTitle(title: string): void
    setUrl(url: string): void
    setUrlData(url: string, mime: string): void
    /* Methods of Grl-0.2.Grl.Data */
    addBinary(key: KeyID, buf: number, size: number): void
    addBoxed(key: KeyID, boxed?: object | null): void
    addFloat(key: KeyID, floatvalue: number): void
    addInt(key: KeyID, intvalue: number): void
    addInt64(key: KeyID, intvalue: number): void
    addRelatedKeys(relkeys: RelatedKeys): void
    addString(key: KeyID, strvalue: string): void
    dup(): Data
    get(key: KeyID): any
    getBinary(key: KeyID): [ /* returnType */ number, /* size */ number ]
    getBoolean(key: KeyID): boolean
    getBoxed(key: KeyID): object | null
    getFloat(key: KeyID): number
    getInt(key: KeyID): number
    getInt64(key: KeyID): number
    getKeys(): KeyID[]
    getRelatedKeys(key: KeyID, index: number): RelatedKeys
    getSingleValuesForKey(key: KeyID): any[]
    getSingleValuesForKeyString(key: KeyID): string[]
    getString(key: KeyID): string
    hasKey(key: KeyID): boolean
    length(key: KeyID): number
    remove(key: KeyID): void
    removeNth(key: KeyID, index: number): void
    set(key: KeyID, value: any): void
    setBinary(key: KeyID, buf: number, size: number): void
    setBoolean(key: KeyID, boolvalue: boolean): void
    setBoxed(key: KeyID, boxed?: object | null): void
    setFloat(key: KeyID, floatvalue: number): void
    setInt(key: KeyID, intvalue: number): void
    setInt64(key: KeyID, intvalue: number): void
    setRelatedKeys(relkeys: RelatedKeys, index: number): void
    setString(key: KeyID, strvalue: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly grlReserved: object[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Grl-0.2.Grl.MediaImage */
    addUrlData(url: string, mime: string, width: number, height: number): void
    getCameraModel(): string
    getExposureTime(): number
    getFlashUsed(): string
    getHeight(): number
    getIsoSpeed(): number
    getOrientation(): number
    getUrlData(width: number, height: number): [ /* returnType */ string, /* mime */ string ]
    getUrlDataNth(index: number, width: number, height: number): [ /* returnType */ string, /* mime */ string ]
    getWidth(): number
    setCameraModel(cameraModel: string): void
    setExposureTime(exposureTime: number): void
    setFlashUsed(flashUsed: string): void
    setHeight(height: number): void
    setIsoSpeed(isoSpeed: number): void
    setOrientation(orientation: number): void
    setSize(width: number, height: number): void
    setUrlData(url: string, mime: string, width: number, height: number): void
    setWidth(width: number): void
    /* Methods of Grl-0.2.Grl.Media */
    addAuthor(author: string): void
    addExternalPlayer(player: string): void
    addExternalUrl(url: string): void
    addKeyword(keyword: string): void
    addRegionData(region: string, publicationDate: GLib.DateTime, certificate: string): void
    addThumbnail(thumbnail: string): void
    addThumbnailBinary(thumbnail: number, size: number): void
    addUrlData(url: string, mime: string): void
    getAuthor(): string
    getAuthorNth(index: number): string
    getCertificate(): string
    getCreationDate(): GLib.DateTime
    getDescription(): string
    getDuration(): number
    getExternalUrl(): string
    getExternalUrlNth(index: number): string
    getFavourite(): boolean
    getId(): string
    getKeyword(): string
    getKeywordNth(index: number): string
    getLastPlayed(): string
    getLastPosition(): number
    getLicense(): string
    getMime(): string
    getModificationDate(): GLib.DateTime
    getPlayCount(): number
    getPlayer(): string
    getPlayerNth(index: number): string
    getPublicationDate(): GLib.DateTime
    getRating(): number
    getRegion(): string
    getRegionData(): [ /* returnType */ string, /* publicationDate */ GLib.DateTime, /* certificate */ string ]
    getRegionDataNth(index: number): [ /* returnType */ string, /* publicationDate */ GLib.DateTime, /* certificate */ string ]
    getSite(): string
    getSize(): number
    getSource(): string
    getStartTime(): number
    getStudio(): string
    getThumbnail(): string
    getThumbnailBinary(size: number): number
    getThumbnailBinaryNth(size: number, index: number): number
    getThumbnailNth(index: number): string
    getTitle(): string
    getUrl(): string
    getUrlData(): [ /* returnType */ string, /* mime */ string ]
    getUrlDataNth(index: number): [ /* returnType */ string, /* mime */ string ]
    serialize(): string
    setAuthor(author: string): void
    setCertificate(certificate: string): void
    setCreationDate(creationDate: GLib.DateTime): void
    setDescription(description: string): void
    setDuration(duration: number): void
    setExternalPlayer(player: string): void
    setExternalUrl(url: string): void
    setFavourite(favourite: boolean): void
    setId(id: string): void
    setKeyword(keyword: string): void
    setLastPlayed(lastPlayed: string): void
    setLastPosition(lastPosition: number): void
    setLicense(license: string): void
    setMime(mime: string): void
    setModificationDate(modificationDate: GLib.DateTime): void
    setPlayCount(playCount: number): void
    setPublicationDate(date: GLib.DateTime): void
    setRating(rating: number, max: number): void
    setRegion(region: string): void
    setRegionData(region: string, publicationDate: GLib.DateTime, certificate: string): void
    setSite(site: string): void
    setSize(size: number): void
    setSource(source: string): void
    setStudio(studio: string): void
    setThumbnail(thumbnail: string): void
    setThumbnailBinary(thumbnail: number, size: number): void
    setTitle(title: string): void
    setUrl(url: string): void
    setUrlData(url: string, mime: string): void
    /* Methods of Grl-0.2.Grl.Data */
    addBinary(key: KeyID, buf: number, size: number): void
    addBoxed(key: KeyID, boxed?: object | null): void
    addFloat(key: KeyID, floatvalue: number): void
    addInt(key: KeyID, intvalue: number): void
    addInt64(key: KeyID, intvalue: number): void
    addRelatedKeys(relkeys: RelatedKeys): void
    addString(key: KeyID, strvalue: string): void
    dup(): Data
    get(key: KeyID): any
    getBinary(key: KeyID): [ /* returnType */ number, /* size */ number ]
    getBoolean(key: KeyID): boolean
    getBoxed(key: KeyID): object | null
    getFloat(key: KeyID): number
    getInt(key: KeyID): number
    getInt64(key: KeyID): number
    getKeys(): KeyID[]
    getRelatedKeys(key: KeyID, index: number): RelatedKeys
    getSingleValuesForKey(key: KeyID): any[]
    getSingleValuesForKeyString(key: KeyID): string[]
    getString(key: KeyID): string
    hasKey(key: KeyID): boolean
    length(key: KeyID): number
    remove(key: KeyID): void
    removeNth(key: KeyID, index: number): void
    set(key: KeyID, value: any): void
    setBinary(key: KeyID, buf: number, size: number): void
    setBoolean(key: KeyID, boolvalue: boolean): void
    setBoxed(key: KeyID, boxed?: object | null): void
    setFloat(key: KeyID, floatvalue: number): void
    setInt(key: KeyID, intvalue: number): void
    setInt64(key: KeyID, intvalue: number): void
    setRelatedKeys(relkeys: RelatedKeys, index: number): void
    setString(key: KeyID, strvalue: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly grlReserved: object[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Grl-0.2.Grl.MediaVideo */
    addDirector(director: string): void
    addPerformer(performer: string): void
    addProducer(producer: string): void
    addUrlData(url: string, mime: string, framerate: number, width: number, height: number): void
    getDirector(): string
    getDirectorNth(index: number): string
    getEpisode(): number
    getEpisodeTitle(): string
    getFramerate(): number
    getHeight(): number
    getOriginalTitle(): string
    getPerformer(): string
    getPerformerNth(index: number): string
    getProducer(): string
    getProducerNth(index: number): string
    getSeason(): number
    getShow(): string
    getUrlData(framerate: number, width: number, height: number): [ /* returnType */ string, /* mime */ string ]
    getUrlDataNth(index: number, framerate: number, width: number, height: number): [ /* returnType */ string, /* mime */ string ]
    getWidth(): number
    setDirector(director: string): void
    setEpisode(episode: number): void
    setEpisodeTitle(episodeTitle: string): void
    setFramerate(framerate: number): void
    setHeight(height: number): void
    setOriginalTitle(originalTitle: string): void
    setPerformer(performer: string): void
    setProducer(producer: string): void
    setSeason(season: number): void
    setShow(show: string): void
    setSize(width: number, height: number): void
    setUrlData(url: string, mime: string, framerate: number, width: number, height: number): void
    setWidth(width: number): void
    /* Methods of Grl-0.2.Grl.Media */
    addAuthor(author: string): void
    addExternalPlayer(player: string): void
    addExternalUrl(url: string): void
    addKeyword(keyword: string): void
    addRegionData(region: string, publicationDate: GLib.DateTime, certificate: string): void
    addThumbnail(thumbnail: string): void
    addThumbnailBinary(thumbnail: number, size: number): void
    addUrlData(url: string, mime: string): void
    getAuthor(): string
    getAuthorNth(index: number): string
    getCertificate(): string
    getCreationDate(): GLib.DateTime
    getDescription(): string
    getDuration(): number
    getExternalUrl(): string
    getExternalUrlNth(index: number): string
    getFavourite(): boolean
    getId(): string
    getKeyword(): string
    getKeywordNth(index: number): string
    getLastPlayed(): string
    getLastPosition(): number
    getLicense(): string
    getMime(): string
    getModificationDate(): GLib.DateTime
    getPlayCount(): number
    getPlayer(): string
    getPlayerNth(index: number): string
    getPublicationDate(): GLib.DateTime
    getRating(): number
    getRegion(): string
    getRegionData(): [ /* returnType */ string, /* publicationDate */ GLib.DateTime, /* certificate */ string ]
    getRegionDataNth(index: number): [ /* returnType */ string, /* publicationDate */ GLib.DateTime, /* certificate */ string ]
    getSite(): string
    getSize(): number
    getSource(): string
    getStartTime(): number
    getStudio(): string
    getThumbnail(): string
    getThumbnailBinary(size: number): number
    getThumbnailBinaryNth(size: number, index: number): number
    getThumbnailNth(index: number): string
    getTitle(): string
    getUrl(): string
    getUrlData(): [ /* returnType */ string, /* mime */ string ]
    getUrlDataNth(index: number): [ /* returnType */ string, /* mime */ string ]
    serialize(): string
    setAuthor(author: string): void
    setCertificate(certificate: string): void
    setCreationDate(creationDate: GLib.DateTime): void
    setDescription(description: string): void
    setDuration(duration: number): void
    setExternalPlayer(player: string): void
    setExternalUrl(url: string): void
    setFavourite(favourite: boolean): void
    setId(id: string): void
    setKeyword(keyword: string): void
    setLastPlayed(lastPlayed: string): void
    setLastPosition(lastPosition: number): void
    setLicense(license: string): void
    setMime(mime: string): void
    setModificationDate(modificationDate: GLib.DateTime): void
    setPlayCount(playCount: number): void
    setPublicationDate(date: GLib.DateTime): void
    setRating(rating: number, max: number): void
    setRegion(region: string): void
    setRegionData(region: string, publicationDate: GLib.DateTime, certificate: string): void
    setSite(site: string): void
    setSize(size: number): void
    setSource(source: string): void
    setStudio(studio: string): void
    setThumbnail(thumbnail: string): void
    setThumbnailBinary(thumbnail: number, size: number): void
    setTitle(title: string): void
    setUrl(url: string): void
    setUrlData(url: string, mime: string): void
    /* Methods of Grl-0.2.Grl.Data */
    addBinary(key: KeyID, buf: number, size: number): void
    addBoxed(key: KeyID, boxed?: object | null): void
    addFloat(key: KeyID, floatvalue: number): void
    addInt(key: KeyID, intvalue: number): void
    addInt64(key: KeyID, intvalue: number): void
    addRelatedKeys(relkeys: RelatedKeys): void
    addString(key: KeyID, strvalue: string): void
    dup(): Data
    get(key: KeyID): any
    getBinary(key: KeyID): [ /* returnType */ number, /* size */ number ]
    getBoolean(key: KeyID): boolean
    getBoxed(key: KeyID): object | null
    getFloat(key: KeyID): number
    getInt(key: KeyID): number
    getInt64(key: KeyID): number
    getKeys(): KeyID[]
    getRelatedKeys(key: KeyID, index: number): RelatedKeys
    getSingleValuesForKey(key: KeyID): any[]
    getSingleValuesForKeyString(key: KeyID): string[]
    getString(key: KeyID): string
    hasKey(key: KeyID): boolean
    length(key: KeyID): number
    remove(key: KeyID): void
    removeNth(key: KeyID, index: number): void
    set(key: KeyID, value: any): void
    setBinary(key: KeyID, buf: number, size: number): void
    setBoolean(key: KeyID, boolvalue: boolean): void
    setBoxed(key: KeyID, boxed?: object | null): void
    setFloat(key: KeyID, floatvalue: number): void
    setInt(key: KeyID, intvalue: number): void
    setInt64(key: KeyID, intvalue: number): void
    setRelatedKeys(relkeys: RelatedKeys, index: number): void
    setString(key: KeyID, strvalue: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Grl-0.2.Grl.OperationOptions */
    copy(): OperationOptions
    getCount(): number
    getFlags(): ResolutionFlags
    getKeyFilter(key: KeyID): any
    getKeyFilterList(): KeyID[]
    getKeyRangeFilter(key: KeyID): [ /* minValue */ any | null, /* maxValue */ any | null ]
    getKeyRangeFilterList(): KeyID[]
    getResolutionFlags(): ResolutionFlags
    getSkip(): number
    getTypeFilter(): TypeFilter
    keyIsSet(key: string): boolean
    obeyCaps(caps: Caps): [ /* returnType */ boolean, /* supportedOptions */ OperationOptions, /* unsupportedOptions */ OperationOptions ]
    setCount(count: number): boolean
    setFlags(flags: ResolutionFlags): boolean
    setKeyFilters(filters: GLib.HashTable): boolean
    setKeyFilterValue(key: KeyID, value: any): boolean
    setKeyRangeFilterValue(key: KeyID, minValue?: any | null, maxValue?: any | null): boolean
    setResolutionFlags(flags: ResolutionFlags): boolean
    setSkip(skip: number): boolean
    setTypeFilter(filter: TypeFilter): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Grl-0.2.Grl.Plugin */
    getAuthor(): string
    getDescription(): string
    getFilename(): string
    getId(): string
    getInfo(key: string): string
    getInfoKeys(): string[]
    getLicense(): string
    getName(): string
    getSite(): string
    getSources(): Source[]
    getVersion(): string
    load(configurations: Config[]): boolean
    registerKeys(): void
    setFilename(filename: string): void
    setId(id: string): void
    setInfo(key: string, value: string): void
    setLoadFunc(loadFunction?: object | null): void
    setModule(module: GModule.Module): void
    setOptionalInfo(info: GLib.HashTable): void
    setRegisterKeysFunc(registerKeysFunction?: object | null): void
    setUnloadFunc(unloadFunction?: object | null): void
    unload(): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::loaded", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loaded", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Plugin_ConstructProps)
    _init (config?: Plugin_ConstructProps): void
    static $gtype: GObject.Type
}
interface Registry_ConstructProps extends GObject.Object_ConstructProps {
}
class Registry {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Grl-0.2.Grl.Registry */
    addConfig(config: Config): boolean
    addConfigFromFile(configFile: string): boolean
    addConfigFromResource(resourcePath: string): boolean
    addDirectory(path: string): void
    getMetadataKeys(): KeyID[]
    getPlugins(onlyLoaded: boolean): Plugin[]
    getSources(ranked: boolean): Source[]
    getSourcesByOperations(ops: SupportedOps, ranked: boolean): Source[]
    loadAllPlugins(): boolean
    loadPlugin(libraryFilename: string): boolean
    loadPluginById(pluginId: string): boolean
    loadPluginDirectory(path: string): boolean
    lookupMetadataKey(keyName: string): KeyID
    lookupMetadataKeyDesc(key: KeyID): string
    lookupMetadataKeyName(key: KeyID): string
    lookupMetadataKeyRelation(key: KeyID): KeyID[]
    lookupMetadataKeyType(key: KeyID): GObject.Type
    lookupPlugin(pluginId: string): Plugin
    lookupSource(sourceId: string): Source
    metadataKeyValidate(key: KeyID, value: any): boolean
    registerMetadataKey(paramSpec: GObject.ParamSpec): KeyID
    registerMetadataKeyRelation(key1: KeyID, key2: KeyID): void
    registerMetadataKeySystem(paramSpec: GObject.ParamSpec, key: KeyID): KeyID
    registerSource(plugin: Plugin, source: Source): boolean
    restrictPlugins(plugins: string): void
    shutdown(): void
    unloadPlugin(pluginId: string): boolean
    unregisterSource(source: Source): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Grl-0.2.Grl.Registry */
    connect(sigName: "metadata-key-added", callback: ((key: string) => void)): number
    on(sigName: "metadata-key-added", callback: (key: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "metadata-key-added", callback: (key: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "metadata-key-added", callback: (key: string) => void): NodeJS.EventEmitter
    emit(sigName: "metadata-key-added", key: string): void
    connect(sigName: "source-added", callback: ((source: Source) => void)): number
    on(sigName: "source-added", callback: (source: Source) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-added", callback: (source: Source) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-added", callback: (source: Source) => void): NodeJS.EventEmitter
    emit(sigName: "source-added", source: Source): void
    connect(sigName: "source-removed", callback: ((source: Source) => void)): number
    on(sigName: "source-removed", callback: (source: Source) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-removed", callback: (source: Source) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-removed", callback: (source: Source) => void): NodeJS.EventEmitter
    emit(sigName: "source-removed", source: Source): void
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
    constructor (config?: Registry_ConstructProps)
    _init (config?: Registry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): Registry
    static $gtype: GObject.Type
}
interface RelatedKeys_ConstructProps extends GObject.Object_ConstructProps {
}
class RelatedKeys {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Grl-0.2.Grl.RelatedKeys */
    dup(): RelatedKeys
    get(key: KeyID): any
    getBinary(key: KeyID): [ /* returnType */ number, /* size */ number ]
    getBoolean(key: KeyID): boolean
    getBoxed(key: KeyID): object | null
    getFloat(key: KeyID): number
    getInt(key: KeyID): number
    getInt64(key: KeyID): number
    getKeys(): KeyID[]
    getString(key: KeyID): string
    hasKey(key: KeyID): boolean
    remove(key: KeyID): void
    set(key: KeyID, value: any): void
    setBinary(key: KeyID, buf: number, size: number): void
    setBoolean(key: KeyID, booleanvalue: boolean): void
    setBoxed(key: KeyID, boxed?: object | null): void
    setFloat(key: KeyID, floatvalue: number): void
    setInt(key: KeyID, intvalue: number): void
    setInt64(key: KeyID, intvalue: number): void
    setString(key: KeyID, strvalue: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: RelatedKeys_ConstructProps)
    _init (config?: RelatedKeys_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RelatedKeys
    static $gtype: GObject.Type
}
interface Source_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Grl-0.2.Grl.Source */
    autoSplitThreshold?: number
    plugin?: Plugin
    rank?: number
    sourceDesc?: string
    sourceIcon?: Gio.Icon
    sourceId?: string
    sourceName?: string
    sourceTags?: string[]
    supportedMedia?: MediaType
}
class Source {
    /* Properties of Grl-0.2.Grl.Source */
    autoSplitThreshold: number
    plugin: Plugin
    rank: number
    sourceDesc: string
    sourceIcon: Gio.Icon
    sourceId: string
    sourceName: string
    sourceTags: string[]
    supportedMedia: MediaType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Grl-0.2.Grl.Source */
    browse(container: Media | null, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number
    browseSync(container: Media | null, keys: KeyID[], options: OperationOptions): Media[]
    getAutoSplitThreshold(): number
    getCaps(operation: SupportedOps): Caps
    getDescription(): string
    getIcon(): Gio.Icon
    getId(): string
    getMediaFromUri(uri: string, keys: KeyID[], options: OperationOptions, callback: SourceResolveCb): number
    getMediaFromUriSync(uri: string, keys: KeyID[], options: OperationOptions): Media
    getName(): string
    getPlugin(): Plugin
    getRank(): number
    getSupportedMedia(): MediaType
    getTags(): string[]
    mayResolve(media: Media, keyId: KeyID, missingKeys: KeyID[]): boolean
    notifyChange(media: Media | null, changeType: SourceChangeType, locationUnknown: boolean): void
    notifyChangeList(changedMedias: Media[], changeType: SourceChangeType, locationUnknown: boolean): void
    notifyChangeStart(): boolean
    notifyChangeStop(): boolean
    query(query: string, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number
    querySync(query: string, keys: KeyID[], options: OperationOptions): Media[]
    remove(media: Media, callback: SourceRemoveCb): void
    removeSync(media: Media): void
    resolve(media: Media | null, keys: KeyID[], options: OperationOptions, callback: SourceResolveCb): number
    resolveSync(media: Media | null, keys: KeyID[], options: OperationOptions): Media
    search(text: string, keys: KeyID[], options: OperationOptions, callback: SourceResultCb): number
    searchSync(text: string, keys: KeyID[], options: OperationOptions): Media[]
    setAutoSplitThreshold(threshold: number): void
    slowKeys(): KeyID[]
    store(parent: MediaBox | null, media: Media, flags: WriteFlags, callback: SourceStoreCb): void
    storeMetadata(media: Media, keys: KeyID[] | null, flags: WriteFlags, callback: SourceStoreCb): void
    storeMetadataSync(media: Media, keys: KeyID[] | null, flags: WriteFlags): KeyID[]
    storeSync(parent: MediaBox | null, media: Media, flags: WriteFlags): void
    supportedKeys(): KeyID[]
    supportedOperations(): number
    testMediaFromUri(uri: string): boolean
    writableKeys(): KeyID[]
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Grl-0.2.Grl.Source */
    connect(sigName: "content-changed", callback: ((changedMedias: Media[], changeType: SourceChangeType, locationUnknown: boolean) => void)): number
    on(sigName: "content-changed", callback: (changedMedias: Media[], changeType: SourceChangeType, locationUnknown: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "content-changed", callback: (changedMedias: Media[], changeType: SourceChangeType, locationUnknown: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "content-changed", callback: (changedMedias: Media[], changeType: SourceChangeType, locationUnknown: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "content-changed", changedMedias: Media[], changeType: SourceChangeType, locationUnknown: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-split-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-split-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-split-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-split-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-split-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::plugin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rank", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rank", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rank", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rank", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rank", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source-icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source-tags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-tags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::supported-media", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-media", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-media", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-media", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-media", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class ConfigPrivate {
    static name: string
}
abstract class DataClass {
    /* Fields of Grl-0.2.Grl.DataClass */
    readonly parentClass: GObject.ObjectClass
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
    readonly parentClass: MediaClass
    static name: string
}
abstract class MediaBoxClass {
    /* Fields of Grl-0.2.Grl.MediaBoxClass */
    readonly parentClass: MediaClass
    static name: string
}
abstract class MediaClass {
    /* Fields of Grl-0.2.Grl.MediaClass */
    readonly parentClass: DataClass
    static name: string
}
abstract class MediaImageClass {
    /* Fields of Grl-0.2.Grl.MediaImageClass */
    readonly parentClass: MediaClass
    static name: string
}
abstract class MediaVideoClass {
    /* Fields of Grl-0.2.Grl.MediaVideoClass */
    readonly parentClass: MediaClass
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
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class PluginDescriptor {
    /* Fields of Grl-0.2.Grl.PluginDescriptor */
    readonly pluginId: string
    readonly pluginDeinit: (plugin: Plugin) => void
    readonly module: GModule.Module
    readonly pluginRegisterKeys: (registry: Registry, plugin: Plugin) => void
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
    static hashtableInsert(hashTable: GLib.HashTable, key: object | null, min: any, max: any): void
    static hashtableNew(): GLib.HashTable
}
abstract class RegistryClass {
    /* Fields of Grl-0.2.Grl.RegistryClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class RegistryPrivate {
    static name: string
}
abstract class RelatedKeysClass {
    /* Fields of Grl-0.2.Grl.RelatedKeysClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class RelatedKeysPrivate {
    static name: string
}
class SourceBrowseSpec {
    /* Fields of Grl-0.2.Grl.SourceBrowseSpec */
    readonly source: Source
    readonly operationId: number
    readonly container: Media
    readonly keys: object[]
    readonly options: OperationOptions
    readonly callback: SourceResultCb
    readonly userData: object
    static name: string
}
abstract class SourceClass {
    /* Fields of Grl-0.2.Grl.SourceClass */
    readonly parentClass: GObject.ObjectClass
    readonly supportedOperations: (source: Source) => SupportedOps
    readonly supportedKeys: (source: Source) => KeyID[]
    readonly slowKeys: (source: Source) => KeyID[]
    readonly writableKeys: (source: Source) => KeyID[]
    readonly getCaps: (source: Source, operation: SupportedOps) => Caps
    readonly resolve: (source: Source, ms: SourceResolveSpec) => void
    readonly mayResolve: (source: Source, media: Media, keyId: KeyID, missingKeys: KeyID[]) => boolean
    readonly testMediaFromUri: (source: Source, uri: string) => boolean
    readonly mediaFromUri: (source: Source, mfus: SourceMediaFromUriSpec) => void
    readonly browse: (source: Source, bs: SourceBrowseSpec) => void
    readonly search: (source: Source, ss: SourceSearchSpec) => void
    readonly query: (source: Source, qs: SourceQuerySpec) => void
    readonly remove: (source: Source, rs: SourceRemoveSpec) => void
    readonly store: (source: Source, ss: SourceStoreSpec) => void
    readonly storeMetadata: (source: Source, sms: SourceStoreMetadataSpec) => void
    readonly cancel: (source: Source, operationId: number) => void
    readonly notifyChangeStart: (source: Source) => boolean
    readonly notifyChangeStop: (source: Source) => boolean
    static name: string
}
class SourceMediaFromUriSpec {
    /* Fields of Grl-0.2.Grl.SourceMediaFromUriSpec */
    readonly source: Source
    readonly operationId: number
    readonly uri: string
    readonly keys: object[]
    readonly options: OperationOptions
    readonly callback: SourceResolveCb
    readonly userData: object
    static name: string
}
class SourcePrivate {
    static name: string
}
class SourceQuerySpec {
    /* Fields of Grl-0.2.Grl.SourceQuerySpec */
    readonly source: Source
    readonly operationId: number
    readonly query: string
    readonly keys: object[]
    readonly options: OperationOptions
    readonly callback: SourceResultCb
    readonly userData: object
    static name: string
}
class SourceRemoveSpec {
    /* Fields of Grl-0.2.Grl.SourceRemoveSpec */
    readonly source: Source
    readonly mediaId: string
    readonly media: Media
    readonly callback: SourceRemoveCb
    readonly userData: object
    static name: string
}
class SourceResolveSpec {
    /* Fields of Grl-0.2.Grl.SourceResolveSpec */
    readonly source: Source
    readonly operationId: number
    readonly media: Media
    readonly keys: object[]
    readonly options: OperationOptions
    readonly callback: SourceResolveCb
    readonly userData: object
    static name: string
}
class SourceSearchSpec {
    /* Fields of Grl-0.2.Grl.SourceSearchSpec */
    readonly source: Source
    readonly operationId: number
    readonly text: string
    readonly keys: object[]
    readonly options: OperationOptions
    readonly callback: SourceResultCb
    readonly userData: object
    static name: string
}
class SourceStoreMetadataSpec {
    /* Fields of Grl-0.2.Grl.SourceStoreMetadataSpec */
    readonly source: Source
    readonly media: Media
    readonly keys: object[]
    readonly flags: WriteFlags
    readonly callback: SourceStoreCb
    readonly userData: object
    readonly failedKeys: object[]
    static name: string
}
class SourceStoreSpec {
    /* Fields of Grl-0.2.Grl.SourceStoreSpec */
    readonly source: Source
    readonly parent: MediaBox
    readonly media: Media
    readonly callback: SourceStoreCb
    readonly userData: object
    static name: string
}
    type KeyID = number
}
export default Grl;