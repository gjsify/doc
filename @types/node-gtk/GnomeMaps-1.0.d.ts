/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GnomeMaps-1.0
 */

import type Rest from './Rest-0.7';
import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GeocodeGlib from './GeocodeGlib-1.0';
import type Json from './Json-1.0';
import type Champlain from './Champlain-0.12';
import type Clutter from './Clutter-1.0';
import type cairo from './cairo-1.0';
import type GL from './GL-1.0';
import type CoglPango from './CoglPango-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type Cogl from './Cogl-1.0';
import type Atk from './Atk-1.0';

export namespace GnomeMaps {

enum ContactStoreState {
    INITIAL,
    LOADING,
    LOADED,
}
function osmFinalize(): void
function osmInit(): void
function osmParse(content: string, length: number): OSMObject
interface ContactGeocodeCallback {
    (contact: Contact): void
}
interface ContactStoreLookupCallback {
    (contact: Contact): void
}
interface Contact_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GnomeMaps-1.0.GnomeMaps.Contact */
    icon?: Gio.Icon
    id?: string
    name?: string
}
class Contact {
    /* Properties of GnomeMaps-1.0.GnomeMaps.Contact */
    readonly boundingBox: Champlain.BoundingBox
    icon: Gio.Icon
    id: string
    name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeMaps-1.0.GnomeMaps.Contact */
    addPlace(place: GeocodeGlib.Place): void
    geocode(callback: ContactGeocodeCallback): void
    getPlaces(): GeocodeGlib.Place[]
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::bounding-box", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bounding-box", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bounding-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bounding-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bounding-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Contact_ConstructProps)
    _init (config?: Contact_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Contact
    static $gtype: GObject.Type
}
interface ContactStore_ConstructProps extends GObject.Object_ConstructProps {
}
class ContactStore {
    /* Properties of GnomeMaps-1.0.GnomeMaps.ContactStore */
    readonly state: ContactStoreState
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeMaps-1.0.GnomeMaps.ContactStore */
    getContacts(): Contact[]
    load(): void
    lookup(id: string, callback: ContactStoreLookupCallback): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ContactStore_ConstructProps)
    _init (config?: ContactStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ContactStore
    static $gtype: GObject.Type
}
interface FileTileSource_ConstructProps extends Champlain.TileSource_ConstructProps {
    /* Constructor properties of GnomeMaps-1.0.GnomeMaps.FileTileSource */
    path?: string
}
class FileTileSource {
    /* Properties of GnomeMaps-1.0.GnomeMaps.FileTileSource */
    readonly maxZoom: number
    readonly minZoom: number
    path: string
    readonly world: Champlain.BoundingBox
    /* Properties of Champlain-0.12.Champlain.TileSource */
    cache: Champlain.TileCache
    id: string
    license: string
    licenseUri: string
    maxZoomLevel: number
    minZoomLevel: number
    name: string
    projection: Champlain.MapProjection
    tileSize: number
    /* Properties of Champlain-0.12.Champlain.MapSource */
    nextSource: Champlain.MapSource
    renderer: Champlain.Renderer
    /* Fields of Champlain-0.12.Champlain.TileSource */
    readonly parentInstance: Champlain.MapSource
    readonly priv: Champlain.TileSourcePrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeMaps-1.0.GnomeMaps.FileTileSource */
    prepare(): boolean
    /* Methods of Champlain-0.12.Champlain.TileSource */
    getCache(): Champlain.TileCache
    setCache(cache: Champlain.TileCache): void
    setId(id: string): void
    setLicense(license: string): void
    setLicenseUri(licenseUri: string): void
    setMaxZoomLevel(zoomLevel: number): void
    setMinZoomLevel(zoomLevel: number): void
    setName(name: string): void
    setProjection(projection: Champlain.MapProjection): void
    setTileSize(tileSize: number): void
    /* Methods of Champlain-0.12.Champlain.MapSource */
    fillTile(tile: Champlain.Tile): void
    getColumnCount(zoomLevel: number): number
    getId(): string
    getLatitude(zoomLevel: number, y: number): number
    getLicense(): string
    getLicenseUri(): string
    getLongitude(zoomLevel: number, x: number): number
    getMaxZoomLevel(): number
    getMetersPerPixel(zoomLevel: number, latitude: number, longitude: number): number
    getMinZoomLevel(): number
    getName(): string
    getNextSource(): Champlain.MapSource
    getProjection(): Champlain.MapProjection
    getRenderer(): Champlain.Renderer
    getRowCount(zoomLevel: number): number
    getTileSize(): number
    getX(zoomLevel: number, longitude: number): number
    getY(zoomLevel: number, latitude: number): number
    setNextSource(nextSource: Champlain.MapSource): void
    setRenderer(renderer: Champlain.Renderer): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::max-zoom", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-zoom", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-zoom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-zoom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-zoom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-zoom", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-zoom", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-zoom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-zoom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-zoom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::world", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::world", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::world", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::world", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::world", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cache", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::license", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::license-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::license-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::license-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::license-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-zoom-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-zoom-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-zoom-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-zoom-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::projection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::projection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::projection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::projection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::projection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::renderer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::renderer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FileTileSource_ConstructProps)
    _init (config?: FileTileSource_ConstructProps): void
    static $gtype: GObject.Type
}
interface OSMChangeset_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GnomeMaps-1.0.GnomeMaps.OSMChangeset */
    comment?: string
    createdBy?: string
}
class OSMChangeset {
    /* Properties of GnomeMaps-1.0.GnomeMaps.OSMChangeset */
    comment: string
    createdBy: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeMaps-1.0.GnomeMaps.OSMChangeset */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::comment", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::comment", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::created-by", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-by", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::created-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::created-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::created-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OSMChangeset_ConstructProps)
    _init (config?: OSMChangeset_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(comment?: string | null, createdBy?: string | null): OSMChangeset
    static $gtype: GObject.Type
}
interface OSMNode_ConstructProps extends OSMObject_ConstructProps {
    /* Constructor properties of GnomeMaps-1.0.GnomeMaps.OSMNode */
    latitude?: number
    longitude?: number
}
class OSMNode {
    /* Properties of GnomeMaps-1.0.GnomeMaps.OSMNode */
    latitude: number
    longitude: number
    /* Properties of GnomeMaps-1.0.GnomeMaps.OSMObject */
    changeset: number
    id: number
    version: number
    /* Fields of GnomeMaps-1.0.GnomeMaps.OSMObject */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeMaps-1.0.GnomeMaps.OSMObject */
    deleteTag(key: string): void
    getTag(key: string): string
    serialize(): string
    setTag(key: string, value: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::latitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::longitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::changeset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::changeset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::changeset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::changeset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::changeset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OSMNode_ConstructProps)
    _init (config?: OSMNode_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: number, version: number, changeset: number, longitude: number, latitude: number): OSMNode
    static $gtype: GObject.Type
}
interface OSMOAuthProxyCall_ConstructProps extends Rest.OAuthProxyCall_ConstructProps {
}
class OSMOAuthProxyCall {
    /* Fields of Rest-0.7.Rest.OAuthProxyCall */
    readonly parent: Rest.ProxyCall
    /* Fields of Rest-0.7.Rest.ProxyCall */
    readonly priv: Rest.ProxyCallPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Rest-0.7.Rest.OAuthProxyCall */
    parseTokenReponse(): void
    parseTokenResponse(): void
    /* Methods of Rest-0.7.Rest.ProxyCall */
    addHeader(header: string, value: string): void
    addParam(name: string, value: string): void
    addParamFull(param: Rest.Param): void
    getFunction(): string
    getMethod(): string
    getParams(): Rest.Params
    getPayload(): string
    getPayloadLength(): number
    getResponseHeaders(): GLib.HashTable
    getStatusCode(): number
    getStatusMessage(): string
    invokeAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    invokeFinish(result: Gio.AsyncResult): boolean
    lookupHeader(header: string): string
    lookupParam(name: string): Rest.Param
    lookupResponseHeader(header: string): string
    removeHeader(header: string): void
    removeParam(name: string): void
    run(loop: GLib.MainLoop): boolean
    serializeParams(): [ /* returnType */ boolean, /* contentType */ string, /* content */ string, /* contentLen */ number ]
    setFunction(function_: string): void
    setMethod(method: string): void
    sync(): boolean
    upload(callback: Rest.ProxyCallUploadCallback, weakObject: GObject.Object): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: OSMOAuthProxyCall_ConstructProps)
    _init (config?: OSMOAuthProxyCall_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(proxy: Rest.OAuthProxy, content: string): OSMOAuthProxyCall
    static $gtype: GObject.Type
}
interface OSMObject_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GnomeMaps-1.0.GnomeMaps.OSMObject */
    changeset?: number
    id?: number
    version?: number
}
class OSMObject {
    /* Properties of GnomeMaps-1.0.GnomeMaps.OSMObject */
    changeset: number
    id: number
    version: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeMaps-1.0.GnomeMaps.OSMObject */
    deleteTag(key: string): void
    getTag(key: string): string
    serialize(): string
    setTag(key: string, value: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::changeset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::changeset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::changeset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::changeset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::changeset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OSMObject_ConstructProps)
    _init (config?: OSMObject_ConstructProps): void
    static $gtype: GObject.Type
}
interface OSMRelation_ConstructProps extends OSMObject_ConstructProps {
}
class OSMRelation {
    /* Properties of GnomeMaps-1.0.GnomeMaps.OSMObject */
    changeset: number
    id: number
    version: number
    /* Fields of GnomeMaps-1.0.GnomeMaps.OSMObject */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeMaps-1.0.GnomeMaps.OSMRelation */
    addMember(role: string, type: number, ref: number): void
    /* Methods of GnomeMaps-1.0.GnomeMaps.OSMObject */
    deleteTag(key: string): void
    getTag(key: string): string
    serialize(): string
    setTag(key: string, value: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::changeset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::changeset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::changeset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::changeset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::changeset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OSMRelation_ConstructProps)
    _init (config?: OSMRelation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: number, version: number, changeset: number): OSMRelation
    static $gtype: GObject.Type
}
interface OSMWay_ConstructProps extends OSMObject_ConstructProps {
}
class OSMWay {
    /* Properties of GnomeMaps-1.0.GnomeMaps.OSMObject */
    changeset: number
    id: number
    version: number
    /* Fields of GnomeMaps-1.0.GnomeMaps.OSMObject */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GnomeMaps-1.0.GnomeMaps.OSMWay */
    addNodeId(id: number): void
    /* Methods of GnomeMaps-1.0.GnomeMaps.OSMObject */
    deleteTag(key: string): void
    getTag(key: string): string
    serialize(): string
    setTag(key: string, value: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::changeset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::changeset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::changeset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::changeset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::changeset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OSMWay_ConstructProps)
    _init (config?: OSMWay_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: number, version: number, changeset: number): OSMWay
    static $gtype: GObject.Type
}
abstract class ContactClass {
    /* Fields of GnomeMaps-1.0.GnomeMaps.ContactClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class ContactPrivate {
    static name: string
}
abstract class ContactStoreClass {
    /* Fields of GnomeMaps-1.0.GnomeMaps.ContactStoreClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class ContactStorePrivate {
    static name: string
}
abstract class FileTileSourceClass {
    /* Fields of GnomeMaps-1.0.GnomeMaps.FileTileSourceClass */
    readonly parentClass: Champlain.TileSourceClass
    static name: string
}
class FileTileSourcePrivate {
    static name: string
}
abstract class OSMChangesetClass {
    /* Fields of GnomeMaps-1.0.GnomeMaps.OSMChangesetClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class OSMChangesetPrivate {
    static name: string
}
abstract class OSMNodeClass {
    /* Fields of GnomeMaps-1.0.GnomeMaps.OSMNodeClass */
    readonly parentClass: OSMObjectClass
    static name: string
}
class OSMNodePrivate {
    static name: string
}
abstract class OSMOAuthProxyCallClass {
    /* Fields of GnomeMaps-1.0.GnomeMaps.OSMOAuthProxyCallClass */
    readonly parentClass: Rest.OAuthProxyCallClass
    static name: string
}
class OSMOAuthProxyCallPrivate {
    static name: string
}
abstract class OSMObjectClass {
    /* Fields of GnomeMaps-1.0.GnomeMaps.OSMObjectClass */
    readonly parentClass: GObject.ObjectClass
    readonly getXmlTagName: () => string
    static name: string
}
class OSMObjectPrivate {
    static name: string
}
abstract class OSMRelationClass {
    /* Fields of GnomeMaps-1.0.GnomeMaps.OSMRelationClass */
    readonly parentClass: OSMObjectClass
    static name: string
}
class OSMRelationPrivate {
    static name: string
}
abstract class OSMWayClass {
    /* Fields of GnomeMaps-1.0.GnomeMaps.OSMWayClass */
    readonly parentClass: OSMObjectClass
    static name: string
}
class OSMWayPrivate {
    static name: string
}
class _ContactClass {
    /* Fields of GnomeMaps-1.0.GnomeMaps._ContactClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class _ContactStoreClass {
    /* Fields of GnomeMaps-1.0.GnomeMaps._ContactStoreClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class _OSMChangesetClass {
    /* Fields of GnomeMaps-1.0.GnomeMaps._OSMChangesetClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class _OSMNodeClass {
    /* Fields of GnomeMaps-1.0.GnomeMaps._OSMNodeClass */
    readonly parentClass: OSMObjectClass
    static name: string
}
class _OSMRelationClass {
    /* Fields of GnomeMaps-1.0.GnomeMaps._OSMRelationClass */
    readonly parentClass: OSMObjectClass
    static name: string
}
class _OSMWayClass {
    /* Fields of GnomeMaps-1.0.GnomeMaps._OSMWayClass */
    readonly parentClass: OSMObjectClass
    static name: string
}
}
export default GnomeMaps;