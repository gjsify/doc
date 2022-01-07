/**
 * GFBGraph-0.3
 */

import type * as Gjs from './Gjs';
import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Rest from './Rest-0.7';
import type Json from './Json-1.0';

export namespace GFBGraph {

enum NodeError {
    CONNECTIONABLE,
    CONNECTABLE,
}
function new_rest_call(authorizer: Authorizer): Rest.ProxyCall
class Authorizer {
    /* Methods of GFBGraph-0.3.GFBGraph.Authorizer */
    process_call(call: Rest.ProxyCall): void
    process_message(message: Soup.Message): void
    refresh_authorization(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GFBGraph-0.3.GFBGraph.Authorizer */
    vfunc_process_call(call: Rest.ProxyCall): void
    vfunc_process_message(message: Soup.Message): void
    vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean
    static name: string
}
export interface Connectable_ConstructProps extends Node_ConstructProps {
}
class Connectable {
    /* Properties of GFBGraph-0.3.GFBGraph.Node */
    created_time: string
    id: string
    link: string
    updated_time: string
    /* Fields of GFBGraph-0.3.GFBGraph.Node */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GFBGraph-0.3.GFBGraph.Connectable */
    default_parse_connected_data(payload: string): Node[]
    get_connection_path(node_type: GObject.Type): string
    get_connection_post_params(node_type: GObject.Type): GLib.HashTable
    is_connectable_to(node_type: GObject.Type): boolean
    parse_connected_data(payload: string): Node[]
    /* Methods of GFBGraph-0.3.GFBGraph.Node */
    append_connection(connect_node: Node, authorizer: Authorizer): boolean
    get_connection_nodes(node_type: GObject.Type, authorizer: Authorizer): Node[]
    get_connection_nodes_async(node_type: GObject.Type, authorizer: Authorizer, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_connection_nodes_async_finish(result: Gio.AsyncResult): Node[]
    get_created_time(): string
    get_id(): string
    get_link(): string
    get_updated_time(): string
    set_id(id: string): void
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
    /* Virtual methods of GFBGraph-0.3.GFBGraph.Connectable */
    vfunc_get_connection_post_params(node_type: GObject.Type): GLib.HashTable
    vfunc_parse_connected_data(payload: string): Node[]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Connectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Connectable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::created-time", callback: (($obj: Connectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: Connectable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Connectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Connectable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::link", callback: (($obj: Connectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::link", callback: (($obj: Connectable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-time", callback: (($obj: Connectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: Connectable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Connectable_ConstructProps)
    _init (config?: Connectable_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Album_ConstructProps extends Node_ConstructProps {
    count?: number
    cover_photo?: string
    description?: string
    name?: string
}
class Album {
    /* Properties of GFBGraph-0.3.GFBGraph.Album */
    count: number
    cover_photo: string
    description: string
    name: string
    /* Properties of GFBGraph-0.3.GFBGraph.Node */
    created_time: string
    id: string
    link: string
    updated_time: string
    /* Fields of GFBGraph-0.3.GFBGraph.Album */
    parent: Node
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GFBGraph-0.3.GFBGraph.Album */
    get_count(): number
    get_cover_photo_id(): string
    get_description(): string
    get_name(): string
    set_description(description: string): void
    set_name(name: string): void
    /* Methods of GFBGraph-0.3.GFBGraph.Node */
    append_connection(connect_node: Node, authorizer: Authorizer): boolean
    get_connection_nodes(node_type: GObject.Type, authorizer: Authorizer): Node[]
    get_connection_nodes_async(node_type: GObject.Type, authorizer: Authorizer, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_connection_nodes_async_finish(result: Gio.AsyncResult): Node[]
    get_created_time(): string
    get_id(): string
    get_link(): string
    get_updated_time(): string
    set_id(id: string): void
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
    /* Methods of GFBGraph-0.3.GFBGraph.Connectable */
    default_parse_connected_data(payload: string): Node[]
    get_connection_path(node_type: GObject.Type): string
    get_connection_post_params(node_type: GObject.Type): GLib.HashTable
    is_connectable_to(node_type: GObject.Type): boolean
    parse_connected_data(payload: string): Node[]
    /* Virtual methods of GFBGraph-0.3.GFBGraph.Album */
    vfunc_get_connection_post_params(node_type: GObject.Type): GLib.HashTable
    vfunc_parse_connected_data(payload: string): Node[]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::count", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::count", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cover-photo", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cover-photo", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::created-time", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::link", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::link", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-time", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: Album, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Album_ConstructProps)
    _init (config?: Album_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Album
    static new_from_id(authorizer: Authorizer, id: string): Album
    static new_from_id(authorizer: Authorizer, id: string, node_type: GObject.Type): Album
    static $gtype: GObject.Type
}
export interface GoaAuthorizer_ConstructProps extends GObject.Object_ConstructProps {
}
class GoaAuthorizer {
    /* Fields of GFBGraph-0.3.GFBGraph.GoaAuthorizer */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of GFBGraph-0.3.GFBGraph.Authorizer */
    process_call(call: Rest.ProxyCall): void
    process_message(message: Soup.Message): void
    refresh_authorization(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GFBGraph-0.3.GFBGraph.GoaAuthorizer */
    vfunc_process_call(call: Rest.ProxyCall): void
    vfunc_process_message(message: Soup.Message): void
    vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GoaAuthorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GoaAuthorizer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GoaAuthorizer_ConstructProps)
    _init (config?: GoaAuthorizer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Node_ConstructProps extends GObject.Object_ConstructProps {
    created_time?: string
    id?: string
    link?: string
    updated_time?: string
}
class Node {
    /* Properties of GFBGraph-0.3.GFBGraph.Node */
    created_time: string
    id: string
    link: string
    updated_time: string
    /* Fields of GFBGraph-0.3.GFBGraph.Node */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GFBGraph-0.3.GFBGraph.Node */
    append_connection(connect_node: Node, authorizer: Authorizer): boolean
    get_connection_nodes(node_type: GObject.Type, authorizer: Authorizer): Node[]
    get_connection_nodes_async(node_type: GObject.Type, authorizer: Authorizer, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_connection_nodes_async_finish(result: Gio.AsyncResult): Node[]
    get_created_time(): string
    get_id(): string
    get_link(): string
    get_updated_time(): string
    set_id(id: string): void
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
    connect(sigName: "notify", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::created-time", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::link", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::link", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-time", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Node_ConstructProps)
    _init (config?: Node_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Node
    static new_from_id(authorizer: Authorizer, id: string, node_type: GObject.Type): Node
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface Photo_ConstructProps extends Node_ConstructProps {
    height?: number
    images?: object
    name?: string
    source?: string
    width?: number
}
class Photo {
    /* Properties of GFBGraph-0.3.GFBGraph.Photo */
    height: number
    images: object
    name: string
    source: string
    width: number
    /* Properties of GFBGraph-0.3.GFBGraph.Node */
    created_time: string
    id: string
    link: string
    updated_time: string
    /* Fields of GFBGraph-0.3.GFBGraph.Photo */
    parent: Node
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GFBGraph-0.3.GFBGraph.Photo */
    download_default_size(authorizer: Authorizer): Gio.InputStream
    get_default_height(): number
    get_default_source_uri(): string
    get_default_width(): number
    get_image_hires(): PhotoImage
    get_image_near_height(height: number): PhotoImage
    get_image_near_width(width: number): PhotoImage
    get_images(): PhotoImage[]
    get_name(): string
    /* Methods of GFBGraph-0.3.GFBGraph.Node */
    append_connection(connect_node: Node, authorizer: Authorizer): boolean
    get_connection_nodes(node_type: GObject.Type, authorizer: Authorizer): Node[]
    get_connection_nodes_async(node_type: GObject.Type, authorizer: Authorizer, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_connection_nodes_async_finish(result: Gio.AsyncResult): Node[]
    get_created_time(): string
    get_id(): string
    get_link(): string
    get_updated_time(): string
    set_id(id: string): void
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
    /* Methods of GFBGraph-0.3.GFBGraph.Connectable */
    default_parse_connected_data(payload: string): Node[]
    get_connection_path(node_type: GObject.Type): string
    get_connection_post_params(node_type: GObject.Type): GLib.HashTable
    is_connectable_to(node_type: GObject.Type): boolean
    parse_connected_data(payload: string): Node[]
    /* Methods of Json-1.0.Json.Serializable */
    default_deserialize_property(property_name: string, value: any, pspec: GObject.ParamSpec, property_node: Json.Node): boolean
    default_serialize_property(property_name: string, value: any, pspec: GObject.ParamSpec): Json.Node | null
    deserialize_property(property_name: string, pspec: GObject.ParamSpec, property_node: Json.Node): [ /* returnType */ boolean, /* value */ any ]
    find_property(name: string): GObject.ParamSpec | null
    get_property(pspec: GObject.ParamSpec): /* value */ any
    list_properties(): GObject.ParamSpec[]
    serialize_property(property_name: string, value: any, pspec: GObject.ParamSpec): Json.Node
    set_property(pspec: GObject.ParamSpec, value: any): void
    /* Virtual methods of GFBGraph-0.3.GFBGraph.Photo */
    vfunc_get_connection_post_params(node_type: GObject.Type): GLib.HashTable
    vfunc_parse_connected_data(payload: string): Node[]
    vfunc_deserialize_property(property_name: string, pspec: GObject.ParamSpec, property_node: Json.Node): [ /* returnType */ boolean, /* value */ any ]
    vfunc_find_property(name: string): GObject.ParamSpec | null
    vfunc_get_property(pspec: GObject.ParamSpec): /* value */ any
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_serialize_property(property_name: string, value: any, pspec: GObject.ParamSpec): Json.Node
    vfunc_set_property(pspec: GObject.ParamSpec, value: any): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::height", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::images", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::images", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::created-time", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::link", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::link", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-time", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: Photo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Photo_ConstructProps)
    _init (config?: Photo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Photo
    static new_from_id(authorizer: Authorizer, id: string): Photo
    static new_from_id(authorizer: Authorizer, id: string, node_type: GObject.Type): Photo
    static $gtype: GObject.Type
}
export interface SimpleAuthorizer_ConstructProps extends GObject.Object_ConstructProps {
    access_token?: string
}
class SimpleAuthorizer {
    /* Properties of GFBGraph-0.3.GFBGraph.SimpleAuthorizer */
    access_token: string
    /* Fields of GFBGraph-0.3.GFBGraph.SimpleAuthorizer */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of GFBGraph-0.3.GFBGraph.Authorizer */
    process_call(call: Rest.ProxyCall): void
    process_message(message: Soup.Message): void
    refresh_authorization(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GFBGraph-0.3.GFBGraph.SimpleAuthorizer */
    vfunc_process_call(call: Rest.ProxyCall): void
    vfunc_process_message(message: Soup.Message): void
    vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleAuthorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleAuthorizer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::access-token", callback: (($obj: SimpleAuthorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::access-token", callback: (($obj: SimpleAuthorizer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SimpleAuthorizer_ConstructProps)
    _init (config?: SimpleAuthorizer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(access_token: string): SimpleAuthorizer
    static $gtype: GObject.Type
}
export interface User_ConstructProps extends Node_ConstructProps {
    email?: string
    name?: string
}
class User {
    /* Properties of GFBGraph-0.3.GFBGraph.User */
    email: string
    name: string
    /* Properties of GFBGraph-0.3.GFBGraph.Node */
    created_time: string
    id: string
    link: string
    updated_time: string
    /* Fields of GFBGraph-0.3.GFBGraph.User */
    parent: Node
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GFBGraph-0.3.GFBGraph.User */
    get_albums(authorizer: Authorizer): Album[]
    get_albums_async(authorizer: Authorizer, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_albums_async_finish(result: Gio.AsyncResult): Album[]
    get_email(): string
    get_name(): string
    /* Methods of GFBGraph-0.3.GFBGraph.Node */
    append_connection(connect_node: Node, authorizer: Authorizer): boolean
    get_connection_nodes(node_type: GObject.Type, authorizer: Authorizer): Node[]
    get_connection_nodes_async(node_type: GObject.Type, authorizer: Authorizer, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_connection_nodes_async_finish(result: Gio.AsyncResult): Node[]
    get_created_time(): string
    get_id(): string
    get_link(): string
    get_updated_time(): string
    set_id(id: string): void
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
    connect(sigName: "notify", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::email", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::created-time", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created-time", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::link", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::link", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::updated-time", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-time", callback: (($obj: User, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: User_ConstructProps)
    _init (config?: User_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): User
    static new_from_id(authorizer: Authorizer, id: string): User
    static new_from_id(authorizer: Authorizer, id: string, node_type: GObject.Type): User
    static get_me(authorizer: Authorizer): User
    static get_me_async(authorizer: Authorizer, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static get_me_async_finish(authorizer: Authorizer, result: Gio.AsyncResult): User
    static $gtype: GObject.Type
}
abstract class AlbumClass {
    /* Fields of GFBGraph-0.3.GFBGraph.AlbumClass */
    parent_class: NodeClass
    static name: string
}
class AlbumPrivate {
    static name: string
}
abstract class AuthorizerInterface {
    /* Fields of GFBGraph-0.3.GFBGraph.AuthorizerInterface */
    parent: GObject.TypeInterface
    process_call: (iface: Authorizer, call: Rest.ProxyCall) => void
    process_message: (iface: Authorizer, message: Soup.Message) => void
    refresh_authorization: (iface: Authorizer, cancellable?: Gio.Cancellable | null) => boolean
    static name: string
}
abstract class ConnectableInterface {
    /* Fields of GFBGraph-0.3.GFBGraph.ConnectableInterface */
    parent: GObject.TypeInterface
    connections: GLib.HashTable
    get_connection_post_params: (self: Connectable, node_type: GObject.Type) => GLib.HashTable
    parse_connected_data: (self: Connectable, payload: string) => Node[]
    static name: string
}
abstract class GoaAuthorizerClass {
    /* Fields of GFBGraph-0.3.GFBGraph.GoaAuthorizerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class GoaAuthorizerPrivate {
    static name: string
}
abstract class NodeClass {
    /* Fields of GFBGraph-0.3.GFBGraph.NodeClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class NodePrivate {
    static name: string
}
abstract class PhotoClass {
    /* Fields of GFBGraph-0.3.GFBGraph.PhotoClass */
    parent_class: NodeClass
    static name: string
}
class PhotoImage {
    /* Fields of GFBGraph-0.3.GFBGraph.PhotoImage */
    width: number
    height: number
    source: string
    static name: string
}
class PhotoPrivate {
    static name: string
}
abstract class SimpleAuthorizerClass {
    /* Fields of GFBGraph-0.3.GFBGraph.SimpleAuthorizerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class SimpleAuthorizerPrivate {
    static name: string
}
abstract class UserClass {
    /* Fields of GFBGraph-0.3.GFBGraph.UserClass */
    parent_class: NodeClass
    static name: string
}
class UserPrivate {
    static name: string
}
}
export default GFBGraph;