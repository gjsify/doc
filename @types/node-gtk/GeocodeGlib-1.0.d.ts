/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GeocodeGlib-1.0
 */

import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Json from './Json-1.0';

export namespace GeocodeGlib {

enum Error {
    PARSE,
    NOT_SUPPORTED,
    NO_MATCHES,
    INVALID_ARGUMENTS,
    INTERNAL_SERVER,
}
enum LocationCRS {
    WGS84,
}
enum LocationURIScheme {
    GEO,
}
enum PlaceOsmType {
    UNKNOWN,
    NODE,
    RELATION,
    WAY,
}
enum PlaceType {
    UNKNOWN,
    BUILDING,
    STREET,
    TOWN,
    STATE,
    COUNTY,
    LOCAL_ADMINISTRATIVE_AREA,
    POSTAL_CODE,
    COUNTRY,
    ISLAND,
    AIRPORT,
    RAILWAY_STATION,
    BUS_STOP,
    MOTORWAY,
    DRAINAGE,
    LAND_FEATURE,
    MISCELLANEOUS,
    SUPERNAME,
    POINT_OF_INTEREST,
    SUBURB,
    COLLOQUIAL,
    ZONE,
    HISTORICAL_STATE,
    HISTORICAL_COUNTY,
    CONTINENT,
    TIME_ZONE,
    ESTATE,
    HISTORICAL_TOWN,
    OCEAN,
    SEA,
    SCHOOL,
    PLACE_OF_WORSHIP,
    RESTAURANT,
    BAR,
    LIGHT_RAIL_STATION,
}
const LOCATION_ACCURACY_CITY: number
const LOCATION_ACCURACY_CONTINENT: number
const LOCATION_ACCURACY_COUNTRY: number
const LOCATION_ACCURACY_REGION: number
const LOCATION_ACCURACY_STREET: number
const LOCATION_ACCURACY_UNKNOWN: number
function errorQuark(): GLib.Quark
class Backend {
    /* Methods of GeocodeGlib-1.0.GeocodeGlib.Backend */
    forwardSearch(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
    forwardSearchAsync(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    forwardSearchFinish(result: Gio.AsyncResult): Place[]
    reverseResolve(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
    reverseResolveAsync(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reverseResolveFinish(result: Gio.AsyncResult): Place[]
    static name: string
}
interface BoundingBox_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GeocodeGlib-1.0.GeocodeGlib.BoundingBox */
    bottom?: number
    left?: number
    right?: number
    top?: number
}
class BoundingBox {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GeocodeGlib-1.0.GeocodeGlib.BoundingBox */
    equal(b: BoundingBox): boolean
    getBottom(): number
    getLeft(): number
    getRight(): number
    getTop(): number
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
    constructor (config?: BoundingBox_ConstructProps)
    _init (config?: BoundingBox_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(top: number, bottom: number, left: number, right: number): BoundingBox
    static $gtype: GObject.Type
}
interface Forward_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GeocodeGlib-1.0.GeocodeGlib.Forward */
    answerCount?: number
    bounded?: boolean
    searchArea?: BoundingBox
}
class Forward {
    /* Properties of GeocodeGlib-1.0.GeocodeGlib.Forward */
    answerCount: number
    bounded: boolean
    searchArea: BoundingBox
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GeocodeGlib-1.0.GeocodeGlib.Forward */
    getAnswerCount(): number
    getBounded(): boolean
    getSearchArea(): BoundingBox | null
    search(): Place[]
    searchAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    searchFinish(res: Gio.AsyncResult): Place[]
    setAnswerCount(count: number): void
    setBackend(backend?: Backend | null): void
    setBounded(bounded: boolean): void
    setSearchArea(box: BoundingBox): void
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
    connect(sigName: "notify::answer-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::answer-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::answer-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::answer-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::answer-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bounded", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bounded", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bounded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bounded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bounded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-area", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-area", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Forward_ConstructProps)
    _init (config?: Forward_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForParams(params: GLib.HashTable): Forward
    static newForString(str: string): Forward
    static $gtype: GObject.Type
}
interface Location_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GeocodeGlib-1.0.GeocodeGlib.Location */
    accuracy?: number
    altitude?: number
    crs?: LocationCRS
    description?: string
    latitude?: number
    longitude?: number
    timestamp?: number
}
class Location {
    /* Properties of GeocodeGlib-1.0.GeocodeGlib.Location */
    accuracy: number
    altitude: number
    description: string
    latitude: number
    longitude: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GeocodeGlib-1.0.GeocodeGlib.Location */
    equal(b: Location): boolean
    getAccuracy(): number
    getAltitude(): number
    getCrs(): LocationCRS
    getDescription(): string
    getDistanceFrom(locb: Location): number
    getLatitude(): number
    getLongitude(): number
    getTimestamp(): number
    setDescription(description: string): void
    setFromUri(uri: string): boolean
    toUri(scheme: LocationURIScheme): string
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
    connect(sigName: "notify::accuracy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accuracy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::altitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::altitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::altitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::altitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::altitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Location_ConstructProps)
    _init (config?: Location_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(latitude: number, longitude: number, accuracy: number): Location
    static newWithDescription(latitude: number, longitude: number, accuracy: number, description: string): Location
    static $gtype: GObject.Type
}
interface MockBackend_ConstructProps extends GObject.Object_ConstructProps {
}
class MockBackend {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GeocodeGlib-1.0.GeocodeGlib.MockBackend */
    addForwardResult(params: GLib.HashTable, results?: Place[] | null, error?: GLib.Error | null): void
    addReverseResult(params: GLib.HashTable, results?: Place[] | null, error?: GLib.Error | null): void
    clear(): void
    getQueryLog(): MockBackendQuery[]
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
    /* Methods of GeocodeGlib-1.0.GeocodeGlib.Backend */
    forwardSearch(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
    forwardSearchAsync(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    forwardSearchFinish(result: Gio.AsyncResult): Place[]
    reverseResolve(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
    reverseResolveAsync(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reverseResolveFinish(result: Gio.AsyncResult): Place[]
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
    constructor (config?: MockBackend_ConstructProps)
    _init (config?: MockBackend_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MockBackend
    static $gtype: GObject.Type
}
interface Nominatim_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GeocodeGlib-1.0.GeocodeGlib.Nominatim */
    baseUrl?: string
    maintainerEmailAddress?: string
    userAgent?: string
}
class Nominatim {
    /* Properties of GeocodeGlib-1.0.GeocodeGlib.Nominatim */
    userAgent: string
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
    /* Methods of GeocodeGlib-1.0.GeocodeGlib.Backend */
    forwardSearch(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
    forwardSearchAsync(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    forwardSearchFinish(result: Gio.AsyncResult): Place[]
    reverseResolve(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
    reverseResolveAsync(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reverseResolveFinish(result: Gio.AsyncResult): Place[]
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::user-agent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Nominatim_ConstructProps)
    _init (config?: Nominatim_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(baseUrl: string, maintainerEmailAddress: string): Nominatim
    static getGnome(): Nominatim
    static $gtype: GObject.Type
}
interface Place_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GeocodeGlib-1.0.GeocodeGlib.Place */
    administrativeArea?: string
    area?: string
    boundingBox?: BoundingBox
    building?: string
    continent?: string
    country?: string
    countryCode?: string
    county?: string
    location?: Location
    name?: string
    osmId?: string
    osmType?: PlaceOsmType
    placeType?: PlaceType
    postalCode?: string
    state?: string
    street?: string
    streetAddress?: string
    town?: string
}
class Place {
    /* Properties of GeocodeGlib-1.0.GeocodeGlib.Place */
    administrativeArea: string
    area: string
    boundingBox: BoundingBox
    building: string
    continent: string
    country: string
    countryCode: string
    county: string
    readonly icon: Gio.Icon
    location: Location
    name: string
    osmId: string
    osmType: PlaceOsmType
    postalCode: string
    state: string
    street: string
    streetAddress: string
    town: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GeocodeGlib-1.0.GeocodeGlib.Place */
    equal(b: Place): boolean
    getAdministrativeArea(): string
    getArea(): string
    getBoundingBox(): BoundingBox
    getBuilding(): string
    getContinent(): string
    getCountry(): string
    getCountryCode(): string
    getCounty(): string
    getIcon(): Gio.Icon
    getLocation(): Location
    getName(): string
    getOsmId(): string
    getOsmType(): PlaceOsmType
    getPlaceType(): PlaceType
    getPostalCode(): string
    getState(): string
    getStreet(): string
    getStreetAddress(): string
    getTown(): string
    setAdministrativeArea(adminArea: string): void
    setArea(area: string): void
    setBoundingBox(bbox: BoundingBox): void
    setBuilding(building: string): void
    setContinent(continent: string): void
    setCountry(country: string): void
    setCountryCode(countryCode: string): void
    setCounty(county: string): void
    setLocation(location: Location): void
    setName(name: string): void
    setPostalCode(postalCode: string): void
    setState(state: string): void
    setStreet(street: string): void
    setStreetAddress(streetAddress: string): void
    setTown(town: string): void
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
    connect(sigName: "notify::administrative-area", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::administrative-area", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::administrative-area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::administrative-area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::administrative-area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::area", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bounding-box", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bounding-box", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bounding-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bounding-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bounding-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::building", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::building", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::building", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::building", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::building", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::continent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::continent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::continent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::continent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::continent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::country", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::country", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::country", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::country", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::country", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::country-code", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::country-code", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::country-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::country-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::country-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::county", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::county", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::county", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::county", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::county", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::osm-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::osm-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::osm-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::osm-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::osm-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::osm-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::osm-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::osm-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::osm-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::osm-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::postal-code", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::postal-code", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::postal-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::postal-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::postal-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::street", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::street", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::street", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::street", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::street", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::street-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::street-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::street-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::street-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::street-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::town", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::town", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::town", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::town", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::town", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Place_ConstructProps)
    _init (config?: Place_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, placeType: PlaceType): Place
    static newWithLocation(name: string, placeType: PlaceType, location: Location): Place
    static $gtype: GObject.Type
}
interface Reverse_ConstructProps extends GObject.Object_ConstructProps {
}
class Reverse {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GeocodeGlib-1.0.GeocodeGlib.Reverse */
    resolve(): Place
    resolveAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    resolveFinish(res: Gio.AsyncResult): Place
    setBackend(backend?: Backend | null): void
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
    constructor (config?: Reverse_ConstructProps)
    _init (config?: Reverse_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForLocation(location: Location): Reverse
    static $gtype: GObject.Type
}
abstract class BackendInterface {
    /* Fields of GeocodeGlib-1.0.GeocodeGlib.BackendInterface */
    readonly forwardSearch: (backend: Backend, params: GLib.HashTable, cancellable?: Gio.Cancellable | null) => Place[]
    readonly forwardSearchAsync: (backend: Backend, params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly forwardSearchFinish: (backend: Backend, result: Gio.AsyncResult) => Place[]
    readonly reverseResolve: (backend: Backend, params: GLib.HashTable, cancellable?: Gio.Cancellable | null) => Place[]
    readonly reverseResolveAsync: (backend: Backend, params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly reverseResolveFinish: (backend: Backend, result: Gio.AsyncResult) => Place[]
    static name: string
}
abstract class BoundingBoxClass {
    static name: string
}
class BoundingBoxPrivate {
    static name: string
}
abstract class ForwardClass {
    static name: string
}
class ForwardPrivate {
    static name: string
}
abstract class LocationClass {
    static name: string
}
class LocationPrivate {
    static name: string
}
abstract class MockBackendClass {
    /* Fields of GeocodeGlib-1.0.GeocodeGlib.MockBackendClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class MockBackendQuery {
    /* Fields of GeocodeGlib-1.0.GeocodeGlib.MockBackendQuery */
    readonly params: GLib.HashTable
    readonly isForward: boolean
    readonly results: Place[]
    readonly error: GLib.Error
    static name: string
}
abstract class NominatimClass {
    /* Fields of GeocodeGlib-1.0.GeocodeGlib.NominatimClass */
    readonly parentClass: GObject.ObjectClass
    readonly query: (self: Nominatim, uri: string, cancellable?: Gio.Cancellable | null) => string
    readonly queryAsync: (self: Nominatim, uri: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly queryFinish: (self: Nominatim, res: Gio.AsyncResult) => string
    static name: string
}
abstract class PlaceClass {
    static name: string
}
class PlacePrivate {
    static name: string
}
abstract class ReverseClass {
    static name: string
}
class ReversePrivate {
    static name: string
}
}
export default GeocodeGlib;