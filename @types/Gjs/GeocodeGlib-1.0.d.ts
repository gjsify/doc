/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GeocodeGlib-1.0
 */

import type * as Gjs from './Gjs';
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
function error_quark(): GLib.Quark
class Backend {
    /* Methods of GeocodeGlib-1.0.GeocodeGlib.Backend */
    forward_search(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
    forward_search_async(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    forward_search_finish(result: Gio.AsyncResult): Place[]
    reverse_resolve(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
    reverse_resolve_async(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reverse_resolve_finish(result: Gio.AsyncResult): Place[]
    /* Virtual methods of GeocodeGlib-1.0.GeocodeGlib.Backend */
    vfunc_forward_search(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
    vfunc_forward_search_async(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_forward_search_finish(result: Gio.AsyncResult): Place[]
    vfunc_reverse_resolve(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
    vfunc_reverse_resolve_async(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_reverse_resolve_finish(result: Gio.AsyncResult): Place[]
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GeocodeGlib-1.0.GeocodeGlib.BoundingBox */
    equal(b: BoundingBox): boolean
    get_bottom(): number
    get_left(): number
    get_right(): number
    get_top(): number
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
    connect(sigName: "notify", callback: (($obj: BoundingBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BoundingBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BoundingBox_ConstructProps)
    _init (config?: BoundingBox_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(top: number, bottom: number, left: number, right: number): BoundingBox
    static $gtype: GObject.Type
}
interface Forward_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GeocodeGlib-1.0.GeocodeGlib.Forward */
    answer_count?: number
    bounded?: boolean
    search_area?: BoundingBox
}
class Forward {
    /* Properties of GeocodeGlib-1.0.GeocodeGlib.Forward */
    answer_count: number
    bounded: boolean
    search_area: BoundingBox
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GeocodeGlib-1.0.GeocodeGlib.Forward */
    get_answer_count(): number
    get_bounded(): boolean
    get_search_area(): BoundingBox | null
    search(): Place[]
    search_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    search_finish(res: Gio.AsyncResult): Place[]
    set_answer_count(count: number): void
    set_backend(backend?: Backend | null): void
    set_bounded(bounded: boolean): void
    set_search_area(box: BoundingBox): void
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
    connect(sigName: "notify", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::answer-count", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::answer-count", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bounded", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bounded", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::search-area", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-area", callback: (($obj: Forward, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Forward_ConstructProps)
    _init (config?: Forward_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_params(params: GLib.HashTable): Forward
    static new_for_string(str: string): Forward
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GeocodeGlib-1.0.GeocodeGlib.Location */
    equal(b: Location): boolean
    get_accuracy(): number
    get_altitude(): number
    get_crs(): LocationCRS
    get_description(): string
    get_distance_from(locb: Location): number
    get_latitude(): number
    get_longitude(): number
    get_timestamp(): number
    set_description(description: string): void
    set_from_uri(uri: string): boolean
    to_uri(scheme: LocationURIScheme): string
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
    connect(sigName: "notify", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accuracy", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accuracy", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::altitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::altitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::longitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Location_ConstructProps)
    _init (config?: Location_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(latitude: number, longitude: number, accuracy: number): Location
    static new_with_description(latitude: number, longitude: number, accuracy: number, description: string): Location
    static $gtype: GObject.Type
}
interface MockBackend_ConstructProps extends GObject.Object_ConstructProps {
}
class MockBackend {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GeocodeGlib-1.0.GeocodeGlib.MockBackend */
    add_forward_result(params: GLib.HashTable, results?: Place[] | null, error?: GLib.Error | null): void
    add_reverse_result(params: GLib.HashTable, results?: Place[] | null, error?: GLib.Error | null): void
    clear(): void
    get_query_log(): MockBackendQuery[]
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
    /* Methods of GeocodeGlib-1.0.GeocodeGlib.Backend */
    forward_search(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
    forward_search_async(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    forward_search_finish(result: Gio.AsyncResult): Place[]
    reverse_resolve(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
    reverse_resolve_async(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reverse_resolve_finish(result: Gio.AsyncResult): Place[]
    /* Virtual methods of GeocodeGlib-1.0.GeocodeGlib.MockBackend */
    vfunc_forward_search(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
    vfunc_forward_search_async(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_forward_search_finish(result: Gio.AsyncResult): Place[]
    vfunc_reverse_resolve(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
    vfunc_reverse_resolve_async(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_reverse_resolve_finish(result: Gio.AsyncResult): Place[]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MockBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MockBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MockBackend_ConstructProps)
    _init (config?: MockBackend_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MockBackend
    static $gtype: GObject.Type
}
interface Nominatim_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GeocodeGlib-1.0.GeocodeGlib.Nominatim */
    base_url?: string
    maintainer_email_address?: string
    user_agent?: string
}
class Nominatim {
    /* Properties of GeocodeGlib-1.0.GeocodeGlib.Nominatim */
    user_agent: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
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
    /* Methods of GeocodeGlib-1.0.GeocodeGlib.Backend */
    forward_search(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
    forward_search_async(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    forward_search_finish(result: Gio.AsyncResult): Place[]
    reverse_resolve(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
    reverse_resolve_async(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    reverse_resolve_finish(result: Gio.AsyncResult): Place[]
    /* Virtual methods of GeocodeGlib-1.0.GeocodeGlib.Nominatim */
    vfunc_query(uri: string, cancellable?: Gio.Cancellable | null): string
    vfunc_query_async(uri: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_query_finish(res: Gio.AsyncResult): string
    vfunc_forward_search(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
    vfunc_forward_search_async(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_forward_search_finish(result: Gio.AsyncResult): Place[]
    vfunc_reverse_resolve(params: GLib.HashTable, cancellable?: Gio.Cancellable | null): Place[]
    vfunc_reverse_resolve_async(params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_reverse_resolve_finish(result: Gio.AsyncResult): Place[]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Nominatim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Nominatim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::user-agent", callback: (($obj: Nominatim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: Nominatim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Nominatim_ConstructProps)
    _init (config?: Nominatim_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(base_url: string, maintainer_email_address: string): Nominatim
    static get_gnome(): Nominatim
    static $gtype: GObject.Type
}
interface Place_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GeocodeGlib-1.0.GeocodeGlib.Place */
    administrative_area?: string
    area?: string
    bounding_box?: BoundingBox
    building?: string
    continent?: string
    country?: string
    country_code?: string
    county?: string
    location?: Location
    name?: string
    osm_id?: string
    osm_type?: PlaceOsmType
    place_type?: PlaceType
    postal_code?: string
    state?: string
    street?: string
    street_address?: string
    town?: string
}
class Place {
    /* Properties of GeocodeGlib-1.0.GeocodeGlib.Place */
    administrative_area: string
    area: string
    bounding_box: BoundingBox
    building: string
    continent: string
    country: string
    country_code: string
    county: string
    readonly icon: Gio.Icon
    location: Location
    name: string
    osm_id: string
    osm_type: PlaceOsmType
    postal_code: string
    state: string
    street: string
    street_address: string
    town: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GeocodeGlib-1.0.GeocodeGlib.Place */
    equal(b: Place): boolean
    get_administrative_area(): string
    get_area(): string
    get_bounding_box(): BoundingBox
    get_building(): string
    get_continent(): string
    get_country(): string
    get_country_code(): string
    get_county(): string
    get_icon(): Gio.Icon
    get_location(): Location
    get_name(): string
    get_osm_id(): string
    get_osm_type(): PlaceOsmType
    get_place_type(): PlaceType
    get_postal_code(): string
    get_state(): string
    get_street(): string
    get_street_address(): string
    get_town(): string
    set_administrative_area(admin_area: string): void
    set_area(area: string): void
    set_bounding_box(bbox: BoundingBox): void
    set_building(building: string): void
    set_continent(continent: string): void
    set_country(country: string): void
    set_country_code(country_code: string): void
    set_county(county: string): void
    set_location(location: Location): void
    set_name(name: string): void
    set_postal_code(postal_code: string): void
    set_state(state: string): void
    set_street(street: string): void
    set_street_address(street_address: string): void
    set_town(town: string): void
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
    connect(sigName: "notify", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::administrative-area", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::administrative-area", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::area", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bounding-box", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bounding-box", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::building", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::building", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::continent", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::continent", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::country", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::country", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::country-code", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::country-code", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::county", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::county", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::location", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::osm-id", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::osm-id", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::osm-type", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::osm-type", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::postal-code", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::postal-code", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::street", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::street", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::street-address", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::street-address", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::town", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::town", callback: (($obj: Place, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Place_ConstructProps)
    _init (config?: Place_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, place_type: PlaceType): Place
    static new_with_location(name: string, place_type: PlaceType, location: Location): Place
    static $gtype: GObject.Type
}
interface Reverse_ConstructProps extends GObject.Object_ConstructProps {
}
class Reverse {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GeocodeGlib-1.0.GeocodeGlib.Reverse */
    resolve(): Place
    resolve_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    resolve_finish(res: Gio.AsyncResult): Place
    set_backend(backend?: Backend | null): void
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
    connect(sigName: "notify", callback: (($obj: Reverse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Reverse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Reverse_ConstructProps)
    _init (config?: Reverse_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_location(location: Location): Reverse
    static $gtype: GObject.Type
}
abstract class BackendInterface {
    /* Fields of GeocodeGlib-1.0.GeocodeGlib.BackendInterface */
    readonly forward_search: (backend: Backend, params: GLib.HashTable, cancellable?: Gio.Cancellable | null) => Place[]
    readonly forward_search_async: (backend: Backend, params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly forward_search_finish: (backend: Backend, result: Gio.AsyncResult) => Place[]
    readonly reverse_resolve: (backend: Backend, params: GLib.HashTable, cancellable?: Gio.Cancellable | null) => Place[]
    readonly reverse_resolve_async: (backend: Backend, params: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly reverse_resolve_finish: (backend: Backend, result: Gio.AsyncResult) => Place[]
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
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class MockBackendQuery {
    /* Fields of GeocodeGlib-1.0.GeocodeGlib.MockBackendQuery */
    readonly params: GLib.HashTable
    readonly is_forward: boolean
    readonly results: Place[]
    readonly error: GLib.Error
    static name: string
}
abstract class NominatimClass {
    /* Fields of GeocodeGlib-1.0.GeocodeGlib.NominatimClass */
    readonly parent_class: GObject.ObjectClass
    readonly query: (self: Nominatim, uri: string, cancellable?: Gio.Cancellable | null) => string
    readonly query_async: (self: Nominatim, uri: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly query_finish: (self: Nominatim, res: Gio.AsyncResult) => string
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