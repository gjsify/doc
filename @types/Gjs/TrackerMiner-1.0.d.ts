/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * TrackerMiner-1.0
 */

import type * as Gjs from './Gjs';
import type Tracker from './Tracker-1.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GModule from './GModule-2.0';

export namespace TrackerMiner {

enum DecoratorError {
    EMPTY,
    PAUSED,
}
enum FilterPolicy {
    DENY,
    ACCEPT,
}
enum FilterType {
    FILE,
    DIRECTORY,
    PARENT_DIRECTORY,
}
enum MinerError {
    NAME_MISSING,
    NAME_UNAVAILABLE,
    PAUSED,
    PAUSED_ALREADY,
    INVALID_COOKIE,
}
enum MinerFSError {
    MINER_FS_ERROR_INIT,
}
enum NetworkType {
    NONE,
    UNKNOWN,
    GPRS,
    EDGE,
    TODO_3G,
    LAN,
}
enum DirectoryFlags {
    NONE,
    RECURSE,
    CHECK_MTIME,
    MONITOR,
    IGNORE,
    PRESERVE,
    PRIORITY,
    NO_STAT,
    CHECK_DELETED,
}
const MINER_DBUS_INTERFACE: string
const MINER_DBUS_NAME_PREFIX: string
const MINER_DBUS_PATH_PREFIX: string
const MINER_ERROR_DOMAIN: string
class DataProvider {
    /* Methods of TrackerMiner-1.0.TrackerMiner.DataProvider */
    begin(url: Gio.File, attributes: string, flags: DirectoryFlags, cancellable?: Gio.Cancellable | null): Enumerator
    begin_async(url: Gio.File, attributes: string, flags: DirectoryFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    begin_finish(result: Gio.AsyncResult): Enumerator
    end(enumerator: Enumerator, cancellable?: Gio.Cancellable | null): boolean
    end_async(enumerator: Enumerator, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    end_finish(result: Gio.AsyncResult): boolean
    /* Virtual methods of TrackerMiner-1.0.TrackerMiner.DataProvider */
    vfunc_begin(url: Gio.File, attributes: string, flags: DirectoryFlags, cancellable?: Gio.Cancellable | null): Enumerator
    vfunc_begin_async(url: Gio.File, attributes: string, flags: DirectoryFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_begin_finish(result: Gio.AsyncResult): Enumerator
    vfunc_end(enumerator: Enumerator, cancellable?: Gio.Cancellable | null): boolean
    vfunc_end_async(enumerator: Enumerator, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_end_finish(result: Gio.AsyncResult): boolean
    static name: string
}
class Enumerator {
    /* Methods of TrackerMiner-1.0.TrackerMiner.Enumerator */
    next(cancellable?: Gio.Cancellable | null): object | null
    next_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    next_finish(result: Gio.AsyncResult): object | null
    /* Virtual methods of TrackerMiner-1.0.TrackerMiner.Enumerator */
    vfunc_next(cancellable?: Gio.Cancellable | null): object | null
    vfunc_next_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_next_finish(result: Gio.AsyncResult): object | null
    static name: string
}
interface Decorator_ConstructProps extends Miner_ConstructProps {
    /* Constructor properties of TrackerMiner-1.0.TrackerMiner.Decorator */
    class_names?: string[]
    commit_batch_size?: number
    data_source?: string
    priority_rdf_types?: string[]
}
class Decorator {
    /* Properties of TrackerMiner-1.0.TrackerMiner.Decorator */
    class_names: string[]
    commit_batch_size: number
    priority_rdf_types: string[]
    /* Properties of TrackerMiner-1.0.TrackerMiner.Miner */
    introspection_handler: object
    introspection_xml: string
    progress: number
    remaining_time: number
    status: string
    /* Fields of TrackerMiner-1.0.TrackerMiner.Miner */
    readonly parent_instance: GObject.Object
    readonly priv: MinerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of TrackerMiner-1.0.TrackerMiner.Decorator */
    delete_id(id: number): void
    get_class_names(): string[]
    get_data_source(): string
    get_n_items(): number
    next(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    next_finish(result: Gio.AsyncResult): DecoratorInfo
    prepend_id(id: number, class_name_id: number): void
    set_priority_rdf_types(rdf_types: string): void
    /* Methods of TrackerMiner-1.0.TrackerMiner.Miner */
    get_connection(): Tracker.SparqlConnection
    get_dbus_connection(): Gio.DBusConnection
    get_dbus_full_name(): string
    get_dbus_full_path(): string
    get_n_pause_reasons(): number
    ignore_next_update(urls: string[]): void
    is_paused(): boolean
    is_started(): boolean
    pause(reason: string): number
    resume(cookie: number): boolean
    start(): void
    stop(): void
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner-1.0.TrackerMiner.Decorator */
    vfunc_finished(): void
    vfunc_items_available(): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner-1.0.TrackerMiner.Miner */
    vfunc_ignore_next_update(urls: string[]): void
    vfunc_paused(): void
    vfunc_progress(status: string, progress: number): void
    vfunc_resumed(): void
    vfunc_started(): void
    vfunc_stopped(): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner-1.0.TrackerMiner.Decorator */
    connect(sigName: "finished", callback: (($obj: Decorator) => void)): number
    connect_after(sigName: "finished", callback: (($obj: Decorator) => void)): number
    emit(sigName: "finished"): void
    connect(sigName: "items-available", callback: (($obj: Decorator) => void)): number
    connect_after(sigName: "items-available", callback: (($obj: Decorator) => void)): number
    emit(sigName: "items-available"): void
    /* Signals of TrackerMiner-1.0.TrackerMiner.Miner */
    connect(sigName: "ignore-next-update", callback: (($obj: Decorator, urls: string[]) => void)): number
    connect_after(sigName: "ignore-next-update", callback: (($obj: Decorator, urls: string[]) => void)): number
    emit(sigName: "ignore-next-update", urls: string[]): void
    connect(sigName: "paused", callback: (($obj: Decorator) => void)): number
    connect_after(sigName: "paused", callback: (($obj: Decorator) => void)): number
    emit(sigName: "paused"): void
    connect(sigName: "progress", callback: (($obj: Decorator, status: string, progress: number, remaining_time: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: Decorator, status: string, progress: number, remaining_time: number) => void)): number
    emit(sigName: "progress", status: string, progress: number, remaining_time: number): void
    connect(sigName: "resumed", callback: (($obj: Decorator) => void)): number
    connect_after(sigName: "resumed", callback: (($obj: Decorator) => void)): number
    emit(sigName: "resumed"): void
    connect(sigName: "started", callback: (($obj: Decorator) => void)): number
    connect_after(sigName: "started", callback: (($obj: Decorator) => void)): number
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (($obj: Decorator) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: Decorator) => void)): number
    emit(sigName: "stopped"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::class-names", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-names", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::commit-batch-size", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::commit-batch-size", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority-rdf-types", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority-rdf-types", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::introspection-handler", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-handler", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::introspection-xml", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-xml", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining-time", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Decorator_ConstructProps)
    _init (config?: Decorator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface DecoratorFS_ConstructProps extends Decorator_ConstructProps {
}
class DecoratorFS {
    /* Properties of TrackerMiner-1.0.TrackerMiner.Decorator */
    class_names: string[]
    commit_batch_size: number
    priority_rdf_types: string[]
    /* Properties of TrackerMiner-1.0.TrackerMiner.Miner */
    introspection_handler: object
    introspection_xml: string
    progress: number
    remaining_time: number
    status: string
    /* Fields of TrackerMiner-1.0.TrackerMiner.Decorator */
    readonly parent_instance: Miner
    readonly priv: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of TrackerMiner-1.0.TrackerMiner.DecoratorFS */
    prepend_file(file: Gio.File): number
    /* Methods of TrackerMiner-1.0.TrackerMiner.Decorator */
    delete_id(id: number): void
    get_class_names(): string[]
    get_data_source(): string
    get_n_items(): number
    next(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    next_finish(result: Gio.AsyncResult): DecoratorInfo
    prepend_id(id: number, class_name_id: number): void
    set_priority_rdf_types(rdf_types: string): void
    /* Methods of TrackerMiner-1.0.TrackerMiner.Miner */
    get_connection(): Tracker.SparqlConnection
    get_dbus_connection(): Gio.DBusConnection
    get_dbus_full_name(): string
    get_dbus_full_path(): string
    get_n_pause_reasons(): number
    ignore_next_update(urls: string[]): void
    is_paused(): boolean
    is_started(): boolean
    pause(reason: string): number
    resume(cookie: number): boolean
    start(): void
    stop(): void
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner-1.0.TrackerMiner.DecoratorFS */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner-1.0.TrackerMiner.Decorator */
    vfunc_finished(): void
    vfunc_items_available(): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner-1.0.TrackerMiner.Miner */
    vfunc_ignore_next_update(urls: string[]): void
    vfunc_paused(): void
    vfunc_progress(status: string, progress: number): void
    vfunc_resumed(): void
    vfunc_started(): void
    vfunc_stopped(): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner-1.0.TrackerMiner.Decorator */
    connect(sigName: "finished", callback: (($obj: DecoratorFS) => void)): number
    connect_after(sigName: "finished", callback: (($obj: DecoratorFS) => void)): number
    emit(sigName: "finished"): void
    connect(sigName: "items-available", callback: (($obj: DecoratorFS) => void)): number
    connect_after(sigName: "items-available", callback: (($obj: DecoratorFS) => void)): number
    emit(sigName: "items-available"): void
    /* Signals of TrackerMiner-1.0.TrackerMiner.Miner */
    connect(sigName: "ignore-next-update", callback: (($obj: DecoratorFS, urls: string[]) => void)): number
    connect_after(sigName: "ignore-next-update", callback: (($obj: DecoratorFS, urls: string[]) => void)): number
    emit(sigName: "ignore-next-update", urls: string[]): void
    connect(sigName: "paused", callback: (($obj: DecoratorFS) => void)): number
    connect_after(sigName: "paused", callback: (($obj: DecoratorFS) => void)): number
    emit(sigName: "paused"): void
    connect(sigName: "progress", callback: (($obj: DecoratorFS, status: string, progress: number, remaining_time: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: DecoratorFS, status: string, progress: number, remaining_time: number) => void)): number
    emit(sigName: "progress", status: string, progress: number, remaining_time: number): void
    connect(sigName: "resumed", callback: (($obj: DecoratorFS) => void)): number
    connect_after(sigName: "resumed", callback: (($obj: DecoratorFS) => void)): number
    emit(sigName: "resumed"): void
    connect(sigName: "started", callback: (($obj: DecoratorFS) => void)): number
    connect_after(sigName: "started", callback: (($obj: DecoratorFS) => void)): number
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (($obj: DecoratorFS) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: DecoratorFS) => void)): number
    emit(sigName: "stopped"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::class-names", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-names", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::commit-batch-size", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::commit-batch-size", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority-rdf-types", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority-rdf-types", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::introspection-handler", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-handler", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::introspection-xml", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-xml", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining-time", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DecoratorFS_ConstructProps)
    _init (config?: DecoratorFS_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface IndexingTree_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of TrackerMiner-1.0.TrackerMiner.IndexingTree */
    filter_hidden?: boolean
    root?: Gio.File
}
class IndexingTree {
    /* Properties of TrackerMiner-1.0.TrackerMiner.IndexingTree */
    filter_hidden: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of TrackerMiner-1.0.TrackerMiner.IndexingTree */
    add(directory: Gio.File, flags: DirectoryFlags): void
    add_filter(filter: FilterType, glob_string: string): void
    clear_filters(type: FilterType): void
    file_is_indexable(file: Gio.File, file_type: Gio.FileType): boolean
    file_is_root(file: Gio.File): boolean
    file_matches_filter(type: FilterType, file: Gio.File): boolean
    get_default_policy(filter: FilterType): FilterPolicy
    get_filter_hidden(): boolean
    get_master_root(): Gio.File
    get_root(file: Gio.File): [ /* returnType */ Gio.File, /* directory_flags */ DirectoryFlags ]
    list_roots(): Gio.File[]
    notify_update(file: Gio.File, recursive: boolean): boolean
    parent_is_indexable(parent: Gio.File, children: Gio.File[]): boolean
    remove(directory: Gio.File): void
    set_default_policy(filter: FilterType, policy: FilterPolicy): void
    set_filter_hidden(filter_hidden: boolean): void
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
    /* Virtual methods of TrackerMiner-1.0.TrackerMiner.IndexingTree */
    vfunc_child_updated(root: Gio.File, child: Gio.File): void
    vfunc_directory_added(directory: Gio.File): void
    vfunc_directory_removed(directory: Gio.File): void
    vfunc_directory_updated(directory: Gio.File): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner-1.0.TrackerMiner.IndexingTree */
    connect(sigName: "child-updated", callback: (($obj: IndexingTree, root: Gio.File, child: Gio.File) => void)): number
    connect_after(sigName: "child-updated", callback: (($obj: IndexingTree, root: Gio.File, child: Gio.File) => void)): number
    emit(sigName: "child-updated", root: Gio.File, child: Gio.File): void
    connect(sigName: "directory-added", callback: (($obj: IndexingTree, directory: Gio.File) => void)): number
    connect_after(sigName: "directory-added", callback: (($obj: IndexingTree, directory: Gio.File) => void)): number
    emit(sigName: "directory-added", directory: Gio.File): void
    connect(sigName: "directory-removed", callback: (($obj: IndexingTree, directory: Gio.File) => void)): number
    connect_after(sigName: "directory-removed", callback: (($obj: IndexingTree, directory: Gio.File) => void)): number
    emit(sigName: "directory-removed", directory: Gio.File): void
    connect(sigName: "directory-updated", callback: (($obj: IndexingTree, directory: Gio.File) => void)): number
    connect_after(sigName: "directory-updated", callback: (($obj: IndexingTree, directory: Gio.File) => void)): number
    emit(sigName: "directory-updated", directory: Gio.File): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: IndexingTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IndexingTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::filter-hidden", callback: (($obj: IndexingTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-hidden", callback: (($obj: IndexingTree, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IndexingTree_ConstructProps)
    _init (config?: IndexingTree_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IndexingTree
    static new_with_root(root: Gio.File): IndexingTree
    static $gtype: GObject.Type
}
interface Miner_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of TrackerMiner-1.0.TrackerMiner.Miner */
    introspection_handler?: object
    introspection_xml?: string
    name?: string
    progress?: number
    remaining_time?: number
    status?: string
}
class Miner {
    /* Properties of TrackerMiner-1.0.TrackerMiner.Miner */
    introspection_handler: object
    introspection_xml: string
    progress: number
    remaining_time: number
    status: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of TrackerMiner-1.0.TrackerMiner.Miner */
    get_connection(): Tracker.SparqlConnection
    get_dbus_connection(): Gio.DBusConnection
    get_dbus_full_name(): string
    get_dbus_full_path(): string
    get_n_pause_reasons(): number
    ignore_next_update(urls: string[]): void
    is_paused(): boolean
    is_started(): boolean
    pause(reason: string): number
    resume(cookie: number): boolean
    start(): void
    stop(): void
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner-1.0.TrackerMiner.Miner */
    vfunc_ignore_next_update(urls: string[]): void
    vfunc_paused(): void
    vfunc_progress(status: string, progress: number): void
    vfunc_resumed(): void
    vfunc_started(): void
    vfunc_stopped(): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner-1.0.TrackerMiner.Miner */
    connect(sigName: "ignore-next-update", callback: (($obj: Miner, urls: string[]) => void)): number
    connect_after(sigName: "ignore-next-update", callback: (($obj: Miner, urls: string[]) => void)): number
    emit(sigName: "ignore-next-update", urls: string[]): void
    connect(sigName: "paused", callback: (($obj: Miner) => void)): number
    connect_after(sigName: "paused", callback: (($obj: Miner) => void)): number
    emit(sigName: "paused"): void
    connect(sigName: "progress", callback: (($obj: Miner, status: string, progress: number, remaining_time: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: Miner, status: string, progress: number, remaining_time: number) => void)): number
    emit(sigName: "progress", status: string, progress: number, remaining_time: number): void
    connect(sigName: "resumed", callback: (($obj: Miner) => void)): number
    connect_after(sigName: "resumed", callback: (($obj: Miner) => void)): number
    emit(sigName: "resumed"): void
    connect(sigName: "started", callback: (($obj: Miner) => void)): number
    connect_after(sigName: "started", callback: (($obj: Miner) => void)): number
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (($obj: Miner) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: Miner) => void)): number
    emit(sigName: "stopped"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::introspection-handler", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-handler", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::introspection-xml", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-xml", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining-time", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Miner_ConstructProps)
    _init (config?: Miner_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface MinerFS_ConstructProps extends Miner_ConstructProps {
    /* Constructor properties of TrackerMiner-1.0.TrackerMiner.MinerFS */
    data_provider?: DataProvider
    initial_crawling?: boolean
    mtime_checking?: boolean
    processing_pool_ready_limit?: number
    processing_pool_wait_limit?: number
    root?: Gio.File
    throttle?: number
}
class MinerFS {
    /* Properties of TrackerMiner-1.0.TrackerMiner.MinerFS */
    initial_crawling: boolean
    mtime_checking: boolean
    processing_pool_ready_limit: number
    processing_pool_wait_limit: number
    throttle: number
    /* Properties of TrackerMiner-1.0.TrackerMiner.Miner */
    introspection_handler: object
    introspection_xml: string
    progress: number
    remaining_time: number
    status: string
    /* Fields of TrackerMiner-1.0.TrackerMiner.Miner */
    readonly parent_instance: GObject.Object
    readonly priv: MinerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of TrackerMiner-1.0.TrackerMiner.MinerFS */
    add_directory_without_parent(file: Gio.File): void
    check_directory(file: Gio.File, check_parents: boolean): void
    check_directory_with_priority(file: Gio.File, priority: number, check_parents: boolean): void
    check_file(file: Gio.File, check_parents: boolean): void
    check_file_with_priority(file: Gio.File, priority: number, check_parents: boolean): void
    directory_add(file: Gio.File, recurse: boolean): void
    directory_remove(file: Gio.File): boolean
    directory_remove_full(file: Gio.File): boolean
    file_notify(file: Gio.File, error: GLib.Error): void
    force_mtime_checking(directory: Gio.File): void
    force_recheck(): void
    get_data_provider(): DataProvider
    get_indexing_tree(): IndexingTree
    get_initial_crawling(): boolean
    get_mtime_checking(): boolean
    get_parent_urn(file: Gio.File): string | null
    get_throttle(): number
    get_urn(file: Gio.File): string | null
    has_items_to_process(): boolean
    query_urn(file: Gio.File): string
    set_initial_crawling(do_initial_crawling: boolean): void
    set_mtime_checking(mtime_checking: boolean): void
    set_throttle(throttle: number): void
    writeback_file(file: Gio.File, rdf_types: string[], results: any[]): void
    writeback_notify(file: Gio.File, error: GLib.Error): void
    /* Methods of TrackerMiner-1.0.TrackerMiner.Miner */
    get_connection(): Tracker.SparqlConnection
    get_dbus_connection(): Gio.DBusConnection
    get_dbus_full_name(): string
    get_dbus_full_path(): string
    get_n_pause_reasons(): number
    ignore_next_update(urls: string[]): void
    is_paused(): boolean
    is_started(): boolean
    pause(reason: string): number
    resume(cookie: number): boolean
    start(): void
    stop(): void
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner-1.0.TrackerMiner.MinerFS */
    vfunc_finished(elapsed: number, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number): void
    vfunc_finished_root(root: Gio.File, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number): void
    vfunc_ignore_next_update_file(file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): boolean
    vfunc_process_file(file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): boolean
    vfunc_process_file_attributes(file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): boolean
    vfunc_remove_file(file: Gio.File, children_only: boolean, builder: Tracker.SparqlBuilder): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner-1.0.TrackerMiner.Miner */
    vfunc_ignore_next_update(urls: string[]): void
    vfunc_paused(): void
    vfunc_progress(status: string, progress: number): void
    vfunc_resumed(): void
    vfunc_started(): void
    vfunc_stopped(): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner-1.0.TrackerMiner.MinerFS */
    connect(sigName: "finished", callback: (($obj: MinerFS, elapsed: number, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number) => void)): number
    connect_after(sigName: "finished", callback: (($obj: MinerFS, elapsed: number, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number) => void)): number
    emit(sigName: "finished", elapsed: number, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number): void
    connect(sigName: "finished-root", callback: (($obj: MinerFS, file: Gio.File) => void)): number
    connect_after(sigName: "finished-root", callback: (($obj: MinerFS, file: Gio.File) => void)): number
    emit(sigName: "finished-root", file: Gio.File): void
    connect(sigName: "ignore-next-update-file", callback: (($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    connect_after(sigName: "ignore-next-update-file", callback: (($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    emit(sigName: "ignore-next-update-file", file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): void
    connect(sigName: "process-file", callback: (($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    connect_after(sigName: "process-file", callback: (($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    emit(sigName: "process-file", file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): void
    connect(sigName: "process-file-attributes", callback: (($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    connect_after(sigName: "process-file-attributes", callback: (($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    emit(sigName: "process-file-attributes", file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): void
    connect(sigName: "remove-file", callback: (($obj: MinerFS, file: Gio.File, children_only: boolean, builder: Tracker.SparqlBuilder) => boolean)): number
    connect_after(sigName: "remove-file", callback: (($obj: MinerFS, file: Gio.File, children_only: boolean, builder: Tracker.SparqlBuilder) => boolean)): number
    emit(sigName: "remove-file", file: Gio.File, children_only: boolean, builder: Tracker.SparqlBuilder): void
    connect(sigName: "writeback-file", callback: (($obj: MinerFS, file: Gio.File, rdf_types: string[], results: any[], cancellable?: Gio.Cancellable | null) => boolean)): number
    connect_after(sigName: "writeback-file", callback: (($obj: MinerFS, file: Gio.File, rdf_types: string[], results: any[], cancellable?: Gio.Cancellable | null) => boolean)): number
    emit(sigName: "writeback-file", file: Gio.File, rdf_types: string[], results: any[], cancellable?: Gio.Cancellable | null): void
    /* Signals of TrackerMiner-1.0.TrackerMiner.Miner */
    connect(sigName: "ignore-next-update", callback: (($obj: MinerFS, urls: string[]) => void)): number
    connect_after(sigName: "ignore-next-update", callback: (($obj: MinerFS, urls: string[]) => void)): number
    emit(sigName: "ignore-next-update", urls: string[]): void
    connect(sigName: "paused", callback: (($obj: MinerFS) => void)): number
    connect_after(sigName: "paused", callback: (($obj: MinerFS) => void)): number
    emit(sigName: "paused"): void
    connect(sigName: "progress", callback: (($obj: MinerFS, status: string, progress: number, remaining_time: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: MinerFS, status: string, progress: number, remaining_time: number) => void)): number
    emit(sigName: "progress", status: string, progress: number, remaining_time: number): void
    connect(sigName: "resumed", callback: (($obj: MinerFS) => void)): number
    connect_after(sigName: "resumed", callback: (($obj: MinerFS) => void)): number
    emit(sigName: "resumed"): void
    connect(sigName: "started", callback: (($obj: MinerFS) => void)): number
    connect_after(sigName: "started", callback: (($obj: MinerFS) => void)): number
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (($obj: MinerFS) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: MinerFS) => void)): number
    emit(sigName: "stopped"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::initial-crawling", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::initial-crawling", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mtime-checking", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtime-checking", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::processing-pool-ready-limit", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-pool-ready-limit", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::processing-pool-wait-limit", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-pool-wait-limit", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::throttle", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::introspection-handler", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-handler", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::introspection-xml", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-xml", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining-time", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MinerFS_ConstructProps)
    _init (config?: MinerFS_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface MinerOnline_ConstructProps extends Miner_ConstructProps {
}
class MinerOnline {
    /* Properties of TrackerMiner-1.0.TrackerMiner.MinerOnline */
    readonly network_type: NetworkType
    /* Properties of TrackerMiner-1.0.TrackerMiner.Miner */
    introspection_handler: object
    introspection_xml: string
    progress: number
    remaining_time: number
    status: string
    /* Fields of TrackerMiner-1.0.TrackerMiner.Miner */
    readonly parent_instance: GObject.Object
    readonly priv: MinerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of TrackerMiner-1.0.TrackerMiner.MinerOnline */
    get_network_type(): NetworkType
    /* Methods of TrackerMiner-1.0.TrackerMiner.Miner */
    get_connection(): Tracker.SparqlConnection
    get_dbus_connection(): Gio.DBusConnection
    get_dbus_full_name(): string
    get_dbus_full_path(): string
    get_n_pause_reasons(): number
    ignore_next_update(urls: string[]): void
    is_paused(): boolean
    is_started(): boolean
    pause(reason: string): number
    resume(cookie: number): boolean
    start(): void
    stop(): void
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner-1.0.TrackerMiner.MinerOnline */
    vfunc_connected(network: NetworkType): boolean
    vfunc_disconnected(): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner-1.0.TrackerMiner.Miner */
    vfunc_ignore_next_update(urls: string[]): void
    vfunc_paused(): void
    vfunc_progress(status: string, progress: number): void
    vfunc_resumed(): void
    vfunc_started(): void
    vfunc_stopped(): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner-1.0.TrackerMiner.MinerOnline */
    connect(sigName: "connected", callback: (($obj: MinerOnline, type: NetworkType) => boolean)): number
    connect_after(sigName: "connected", callback: (($obj: MinerOnline, type: NetworkType) => boolean)): number
    emit(sigName: "connected", type: NetworkType): void
    connect(sigName: "disconnected", callback: (($obj: MinerOnline) => void)): number
    connect_after(sigName: "disconnected", callback: (($obj: MinerOnline) => void)): number
    emit(sigName: "disconnected"): void
    /* Signals of TrackerMiner-1.0.TrackerMiner.Miner */
    connect(sigName: "ignore-next-update", callback: (($obj: MinerOnline, urls: string[]) => void)): number
    connect_after(sigName: "ignore-next-update", callback: (($obj: MinerOnline, urls: string[]) => void)): number
    emit(sigName: "ignore-next-update", urls: string[]): void
    connect(sigName: "paused", callback: (($obj: MinerOnline) => void)): number
    connect_after(sigName: "paused", callback: (($obj: MinerOnline) => void)): number
    emit(sigName: "paused"): void
    connect(sigName: "progress", callback: (($obj: MinerOnline, status: string, progress: number, remaining_time: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: MinerOnline, status: string, progress: number, remaining_time: number) => void)): number
    emit(sigName: "progress", status: string, progress: number, remaining_time: number): void
    connect(sigName: "resumed", callback: (($obj: MinerOnline) => void)): number
    connect_after(sigName: "resumed", callback: (($obj: MinerOnline) => void)): number
    emit(sigName: "resumed"): void
    connect(sigName: "started", callback: (($obj: MinerOnline) => void)): number
    connect_after(sigName: "started", callback: (($obj: MinerOnline) => void)): number
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (($obj: MinerOnline) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: MinerOnline) => void)): number
    emit(sigName: "stopped"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::network-type", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-type", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::introspection-handler", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-handler", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::introspection-xml", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-xml", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining-time", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MinerOnline_ConstructProps)
    _init (config?: MinerOnline_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
abstract class DataProviderIface {
    /* Fields of TrackerMiner-1.0.TrackerMiner.DataProviderIface */
    readonly g_iface: GObject.TypeInterface
    readonly begin: (data_provider: DataProvider, url: Gio.File, attributes: string, flags: DirectoryFlags, cancellable?: Gio.Cancellable | null) => Enumerator
    readonly begin_async: (data_provider: DataProvider, url: Gio.File, attributes: string, flags: DirectoryFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly begin_finish: (data_provider: DataProvider, result: Gio.AsyncResult) => Enumerator
    readonly end: (data_provider: DataProvider, enumerator: Enumerator, cancellable?: Gio.Cancellable | null) => boolean
    readonly end_async: (data_provider: DataProvider, enumerator: Enumerator, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly end_finish: (data_provider: DataProvider, result: Gio.AsyncResult) => boolean
    static name: string
}
abstract class DecoratorClass {
    /* Fields of TrackerMiner-1.0.TrackerMiner.DecoratorClass */
    readonly parent_class: MinerClass
    readonly items_available: (decorator: Decorator) => void
    readonly finished: (decorator: Decorator) => void
    readonly padding: object[]
    static name: string
}
abstract class DecoratorFSClass {
    /* Fields of TrackerMiner-1.0.TrackerMiner.DecoratorFSClass */
    readonly parent_class: DecoratorClass
    readonly padding: object[]
    static name: string
}
class DecoratorInfo {
    /* Methods of TrackerMiner-1.0.TrackerMiner.DecoratorInfo */
    get_mimetype(): string
    get_sparql(): Tracker.SparqlBuilder
    get_task(): Gio.Task
    get_url(): string
    get_urn(): string
    ref(): DecoratorInfo
    unref(): void
    static name: string
}
abstract class EnumeratorIface {
    /* Fields of TrackerMiner-1.0.TrackerMiner.EnumeratorIface */
    readonly g_iface: GObject.TypeInterface
    readonly next: (enumerator: Enumerator, cancellable?: Gio.Cancellable | null) => object | null
    readonly next_async: (enumerator: Enumerator, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly next_finish: (enumerator: Enumerator, result: Gio.AsyncResult) => object | null
    static name: string
}
abstract class IndexingTreeClass {
    /* Fields of TrackerMiner-1.0.TrackerMiner.IndexingTreeClass */
    readonly parent_class: GObject.ObjectClass
    readonly directory_added: (indexing_tree: IndexingTree, directory: Gio.File) => void
    readonly directory_removed: (indexing_tree: IndexingTree, directory: Gio.File) => void
    readonly directory_updated: (indexing_tree: IndexingTree, directory: Gio.File) => void
    readonly child_updated: (indexing_tree: IndexingTree, root: Gio.File, child: Gio.File) => void
    readonly padding: object[]
    static name: string
}
abstract class MinerClass {
    /* Fields of TrackerMiner-1.0.TrackerMiner.MinerClass */
    readonly parent_class: GObject.ObjectClass
    readonly started: (miner: Miner) => void
    readonly stopped: (miner: Miner) => void
    readonly paused: (miner: Miner) => void
    readonly resumed: (miner: Miner) => void
    readonly progress: (miner: Miner, status: string, progress: number) => void
    readonly ignore_next_update: (miner: Miner, urls: string[]) => void
    readonly padding: object[]
    static name: string
}
abstract class MinerFSClass {
    /* Fields of TrackerMiner-1.0.TrackerMiner.MinerFSClass */
    readonly parent: MinerClass
    readonly process_file: (fs: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean
    readonly ignore_next_update_file: (fs: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean
    readonly finished: (fs: MinerFS, elapsed: number, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number) => void
    readonly process_file_attributes: (fs: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean
    readonly finished_root: (fs: MinerFS, root: Gio.File, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number) => void
    readonly remove_file: (fs: MinerFS, file: Gio.File, children_only: boolean, builder: Tracker.SparqlBuilder) => boolean
    readonly padding: object[]
    static name: string
}
class MinerFSPrivate {
    static name: string
}
abstract class MinerOnlineClass {
    /* Fields of TrackerMiner-1.0.TrackerMiner.MinerOnlineClass */
    readonly parent_class: MinerClass
    readonly connected: (miner: MinerOnline, network: NetworkType) => boolean
    readonly disconnected: (miner: MinerOnline) => void
    readonly padding: object[]
    static name: string
}
class MinerPrivate {
    static name: string
}
}
export default TrackerMiner;