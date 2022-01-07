/**
 * LibvirtGObject-1.0
 */

import type * as Gjs from './Gjs';
import type LibvirtGLib from './LibvirtGLib-1.0';
import type GLib from './GLib-2.0';
import type LibvirtGConfig from './LibvirtGConfig-1.0';
import type libxml2 from './libxml2-2.0';
import type GObject from './GObject-2.0';
import type Gio from './Gio-2.0';

export namespace LibvirtGObject {

enum DomainDeleteFlags {
    NONE,
    SAVED_STATE,
    SNAPSHOTS_METADATA,
    REMOVE_NVRAM,
    KEEP_NVRAM,
}
enum DomainRebootFlags {
    NONE,
    ACPI_POWER_BTN,
    GUEST_AGENT,
}
enum DomainShutdownFlags {
    NONE,
    ACPI_POWER_BTN,
    GUEST_AGENT,
}
enum DomainSnapshotCreateFlags {
    NONE,
    REDEFINE,
    CURRENT,
    NO_METADATA,
    HALT,
    DISK_ONLY,
    REUSE_EXT,
    QUIESCE,
    ATOMIC,
}
enum DomainSnapshotDeleteFlags {
    CHILDREN,
    METADATA_ONLY,
    CHILDREN_ONLY,
}
enum DomainSnapshotListFlags {
    ALL,
    DESCENDANTS,
    ROOTS,
    METADATA,
    LEAVES,
    NO_LEAVES,
    NO_METADATA,
    INACTIVE,
    ACTIVE,
    DISK_ONLY,
    INTERNAL,
    EXTERNAL,
}
enum DomainSnapshotRevertFlags {
    RUNNING,
    PAUSED,
    FORCE,
}
enum DomainState {
    NONE,
    RUNNING,
    BLOCKED,
    PAUSED,
    SHUTDOWN,
    SHUTOFF,
    CRASHED,
    PMSUSPENDED,
}
enum DomainUpdateDeviceFlags {
    CURRENT,
    LIVE,
    CONFIG,
}
enum DomainXMLFlags {
    NONE,
    SECURE,
    INACTIVE,
    UPDATE_CPU,
}
enum IPAddrType {
    IPV4,
    IPV6,
}
enum StoragePoolState {
    INACTIVE,
    BUILDING,
    RUNNING,
    DEGRADED,
    INACCESSIBLE,
}
enum StorageVolResizeFlags {
    NONE,
    ALLOCATE,
    DELTA,
    SHRINK,
}
enum StorageVolType {
    FILE,
    BLOCK,
    DIR,
}
enum DomainStartFlags {
    NONE,
    PAUSED,
    AUTODESTROY,
    BYPASS_CACHE,
    FORCE_BOOT,
}
enum StreamIOCondition {
    READABLE,
    WRITABLE,
    HANGUP,
    ERROR,
}
function init_object(argv?: string[] | null): /* argv */ string[] | null
function init_object_check(argv?: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
interface StreamIOFunc {
    (stream: Stream, cond: StreamIOCondition, opaque?: object | null): boolean
}
interface StreamSinkFunc {
    (stream: Stream): number
}
interface StreamSourceFunc {
    (stream: Stream): number
}
export interface Connection_ConstructProps extends GObject.Object_ConstructProps {
    handle?: any
    uri?: string
}
class Connection {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.Connection */
    parent: GObject.Object
    priv: ConnectionPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.Connection */
    close(): void
    create_domain(conf: LibvirtGConfig.Domain): Domain
    create_storage_pool(conf: LibvirtGConfig.StoragePool, flags: number): StoragePool
    fetch_domains(cancellable?: Gio.Cancellable | null): boolean
    fetch_domains_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    fetch_domains_finish(result: Gio.AsyncResult): boolean
    fetch_interfaces(cancellable?: Gio.Cancellable | null): boolean
    fetch_interfaces_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    fetch_interfaces_finish(result: Gio.AsyncResult): boolean
    fetch_networks(cancellable?: Gio.Cancellable | null): boolean
    fetch_networks_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    fetch_networks_finish(result: Gio.AsyncResult): boolean
    fetch_storage_pools(cancellable?: Gio.Cancellable | null): boolean
    fetch_storage_pools_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    fetch_storage_pools_finish(result: Gio.AsyncResult): boolean
    find_domain_by_id(id: number): Domain
    find_domain_by_name(name: string): Domain
    find_interface_by_mac(macaddr: string): Interface
    find_network_by_name(name: string): Network
    find_storage_pool_by_name(name: string): StoragePool
    get_capabilities(): LibvirtGConfig.Capabilities
    get_capabilities_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_capabilities_finish(result: Gio.AsyncResult): LibvirtGConfig.Capabilities
    get_domain(uuid: string): Domain
    get_domain_capabilities(emulatorbin: string | null, arch: string | null, machine: string | null, virttype: string | null, flags: number): LibvirtGConfig.DomainCapabilities
    get_domain_capabilities_async(emulatorbin: string | null, arch: string | null, machine: string | null, virttype: string | null, flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_domain_capabilities_finish(result: Gio.AsyncResult): LibvirtGConfig.DomainCapabilities
    get_domains(): Domain[]
    get_hypervisor_name(): string
    get_interface(name: string): Interface
    get_interfaces(): Interface[]
    get_network(uuid: string): Network
    get_networks(): Network[]
    get_node_info(): NodeInfo
    get_storage_pool(uuid: string): StoragePool
    get_storage_pools(): StoragePool[]
    get_stream(flags: number): Stream
    get_uri(): string
    get_version(): number
    is_open(): boolean
    is_read_only(): boolean
    open(cancellable?: Gio.Cancellable | null): boolean
    open_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    open_finish(result: Gio.AsyncResult): boolean
    open_read_only(cancellable?: Gio.Cancellable | null): boolean
    open_read_only_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    open_read_only_finish(result: Gio.AsyncResult): boolean
    restore_domain_from_file(filename: string, custom_conf: LibvirtGConfig.Domain | null, flags: number): boolean
    restore_domain_from_file_async(filename: string, custom_conf: LibvirtGConfig.Domain | null, flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    restore_domain_from_file_finish(result: Gio.AsyncResult): boolean
    start_domain(conf: LibvirtGConfig.Domain, flags: number): Domain
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
    /* Virtual methods of LibvirtGObject-1.0.LibvirtGObject.Connection */
    vfunc_connection_closed(): void
    vfunc_connection_opened(): void
    vfunc_domain_added(dom: Domain): void
    vfunc_domain_removed(dom: Domain): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of LibvirtGObject-1.0.LibvirtGObject.Connection */
    connect(sigName: "connection-closed", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "connection-closed", callback: (($obj: Connection) => void)): number
    emit(sigName: "connection-closed"): void
    connect(sigName: "connection-opened", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "connection-opened", callback: (($obj: Connection) => void)): number
    emit(sigName: "connection-opened"): void
    connect(sigName: "domain-added", callback: (($obj: Connection, object: Domain) => void)): number
    connect_after(sigName: "domain-added", callback: (($obj: Connection, object: Domain) => void)): number
    emit(sigName: "domain-added", object: Domain): void
    connect(sigName: "domain-removed", callback: (($obj: Connection, object: Domain) => void)): number
    connect_after(sigName: "domain-removed", callback: (($obj: Connection, object: Domain) => void)): number
    emit(sigName: "domain-removed", object: Domain): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Connection_ConstructProps)
    _init (config?: Connection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(uri: string): Connection
    static $gtype: GObject.Type
}
export interface Domain_ConstructProps extends GObject.Object_ConstructProps {
    handle?: any
}
class Domain {
    /* Properties of LibvirtGObject-1.0.LibvirtGObject.Domain */
    readonly persistent: boolean
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.Domain */
    parent: GObject.Object
    priv: DomainPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.Domain */
    create_snapshot(custom_conf: LibvirtGConfig.DomainSnapshot | null, flags: number): DomainSnapshot
    create_snapshot_async(custom_conf: LibvirtGConfig.DomainSnapshot | null, flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_snapshot_finish(result: Gio.AsyncResult): DomainSnapshot
    delete(flags: number): boolean
    fetch_snapshots(list_flags: number, cancellable?: Gio.Cancellable | null): boolean
    fetch_snapshots_async(list_flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    fetch_snapshots_finish(res: Gio.AsyncResult): boolean
    get_config(flags: number): LibvirtGConfig.Domain
    get_devices(): DomainDevice[]
    get_has_current_snapshot(flags: number): [ /* returnType */ boolean, /* has_current_snapshot */ boolean ]
    get_id(): number
    get_info(): DomainInfo
    get_info_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_info_finish(result: Gio.AsyncResult): DomainInfo
    get_name(): string
    get_persistent(): boolean
    get_saved(): boolean
    get_snapshots(): DomainSnapshot[]
    get_uuid(): string
    open_console(stream: Stream, devname: string | null, flags: number): boolean
    open_graphics(idx: number, fd: number, flags: number): boolean
    open_graphics_fd(idx: number, flags: number): number
    reboot(flags: number): boolean
    resume(): boolean
    resume_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    resume_finish(result: Gio.AsyncResult): boolean
    save(flags: number): boolean
    save_async(flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    save_finish(result: Gio.AsyncResult): boolean
    save_to_file(filename: string, custom_conf: LibvirtGConfig.Domain | null, flags: number): boolean
    save_to_file_async(filename: string, custom_conf: LibvirtGConfig.Domain | null, flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    save_to_file_finish(result: Gio.AsyncResult): boolean
    screenshot(stream: Stream, monitor_id: number, flags: number): string
    set_config(conf: LibvirtGConfig.Domain): boolean
    set_time(date_time: GLib.DateTime | null, flags: number): boolean
    set_time_async(date_time: GLib.DateTime | null, flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_time_finish(result: Gio.AsyncResult): boolean
    shutdown(flags: number): boolean
    start(flags: number): boolean
    start_async(flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    start_finish(result: Gio.AsyncResult): boolean
    stop(flags: number): boolean
    suspend(): boolean
    update_device(device: LibvirtGConfig.DomainDevice, flags: number): boolean
    wakeup(flags: number): boolean
    wakeup_async(flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    wakeup_finish(result: Gio.AsyncResult): boolean
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
    /* Virtual methods of LibvirtGObject-1.0.LibvirtGObject.Domain */
    vfunc_pmsuspended(): void
    vfunc_resumed(): void
    vfunc_started(): void
    vfunc_stopped(): void
    vfunc_suspended(): void
    vfunc_updated(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of LibvirtGObject-1.0.LibvirtGObject.Domain */
    connect(sigName: "pmsuspended", callback: (($obj: Domain) => void)): number
    connect_after(sigName: "pmsuspended", callback: (($obj: Domain) => void)): number
    emit(sigName: "pmsuspended"): void
    connect(sigName: "resumed", callback: (($obj: Domain) => void)): number
    connect_after(sigName: "resumed", callback: (($obj: Domain) => void)): number
    emit(sigName: "resumed"): void
    connect(sigName: "started", callback: (($obj: Domain) => void)): number
    connect_after(sigName: "started", callback: (($obj: Domain) => void)): number
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (($obj: Domain) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: Domain) => void)): number
    emit(sigName: "stopped"): void
    connect(sigName: "suspended", callback: (($obj: Domain) => void)): number
    connect_after(sigName: "suspended", callback: (($obj: Domain) => void)): number
    emit(sigName: "suspended"): void
    connect(sigName: "updated", callback: (($obj: Domain) => void)): number
    connect_after(sigName: "updated", callback: (($obj: Domain) => void)): number
    emit(sigName: "updated"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::persistent", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::persistent", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Domain_ConstructProps)
    _init (config?: Domain_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DomainDevice_ConstructProps extends GObject.Object_ConstructProps {
    config?: LibvirtGConfig.DomainDevice
    domain?: Domain
}
class DomainDevice {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.DomainDevice */
    parent: GObject.Object
    priv: DomainDevicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.DomainDevice */
    get_config(): LibvirtGConfig.DomainDevice
    get_domain(): Domain
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
    connect(sigName: "notify", callback: (($obj: DomainDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainDevice_ConstructProps)
    _init (config?: DomainDevice_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DomainDisk_ConstructProps extends DomainDevice_ConstructProps {
}
class DomainDisk {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.DomainDisk */
    parent: DomainDevice
    priv: DomainDiskPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.DomainDisk */
    get_stats(): DomainDiskStats
    resize(size: number, flags: number): boolean
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.DomainDevice */
    get_config(): LibvirtGConfig.DomainDevice
    get_domain(): Domain
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
    connect(sigName: "notify", callback: (($obj: DomainDisk, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainDisk, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainDisk_ConstructProps)
    _init (config?: DomainDisk_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DomainInterface_ConstructProps extends DomainDevice_ConstructProps {
}
class DomainInterface {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.DomainInterface */
    parent: DomainDevice
    priv: DomainInterfacePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.DomainInterface */
    get_stats(): DomainInterfaceStats
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.DomainDevice */
    get_config(): LibvirtGConfig.DomainDevice
    get_domain(): Domain
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
    connect(sigName: "notify", callback: (($obj: DomainInterface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainInterface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainInterface_ConstructProps)
    _init (config?: DomainInterface_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DomainSnapshot_ConstructProps extends GObject.Object_ConstructProps {
    handle?: any
}
class DomainSnapshot {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.DomainSnapshot */
    parent: GObject.Object
    priv: DomainSnapshotPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.DomainSnapshot */
    delete(flags: number): boolean
    delete_async(flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_finish(res: Gio.AsyncResult): boolean
    get_config(flags: number): LibvirtGConfig.DomainSnapshot
    get_is_current(flags: number): [ /* returnType */ boolean, /* is_current */ boolean ]
    get_name(): string
    revert_to(flags: number): boolean
    revert_to_async(flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    revert_to_finish(result: Gio.AsyncResult): boolean
    set_config(conf: LibvirtGConfig.DomainSnapshot): boolean
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
    connect(sigName: "notify", callback: (($obj: DomainSnapshot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DomainSnapshot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DomainSnapshot_ConstructProps)
    _init (config?: DomainSnapshot_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Interface_ConstructProps extends GObject.Object_ConstructProps {
    handle?: any
}
class Interface {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.Interface */
    parent: GObject.Object
    priv: InterfacePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.Interface */
    get_config(flags: number): LibvirtGConfig.Interface
    get_mac(): string
    get_name(): string
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
    connect(sigName: "notify", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Interface_ConstructProps)
    _init (config?: Interface_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Manager_ConstructProps extends GObject.Object_ConstructProps {
}
class Manager {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.Manager */
    parent: GObject.Object
    priv: ManagerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.Manager */
    add_connection(conn: Connection): void
    find_connection_by_uri(uri: string): Connection | null
    get_connections(): Connection[]
    remove_connection(conn: Connection): void
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
    /* Virtual methods of LibvirtGObject-1.0.LibvirtGObject.Manager */
    vfunc_connection_added(conn: Connection): void
    vfunc_connection_removed(conn: Connection): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of LibvirtGObject-1.0.LibvirtGObject.Manager */
    connect(sigName: "connection-added", callback: (($obj: Manager, object: Connection) => void)): number
    connect_after(sigName: "connection-added", callback: (($obj: Manager, object: Connection) => void)): number
    emit(sigName: "connection-added", object: Connection): void
    connect(sigName: "connection-removed", callback: (($obj: Manager, object: Connection) => void)): number
    connect_after(sigName: "connection-removed", callback: (($obj: Manager, object: Connection) => void)): number
    emit(sigName: "connection-removed", object: Connection): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Manager_ConstructProps)
    _init (config?: Manager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Manager
    static $gtype: GObject.Type
}
export interface Network_ConstructProps extends GObject.Object_ConstructProps {
    handle?: any
}
class Network {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.Network */
    parent: GObject.Object
    priv: NetworkPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.Network */
    get_config(flags: number): LibvirtGConfig.Network
    get_dhcp_leases(mac: string | null, flags: number): NetworkDHCPLease[]
    get_name(): string
    get_uuid(): string
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
    /* Virtual methods of LibvirtGObject-1.0.LibvirtGObject.Network */
    vfunc_started(): void
    vfunc_stopped(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Network, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Network, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Network_ConstructProps)
    _init (config?: Network_ConstructProps): void
    static $gtype: GObject.Type
}
export interface NetworkDHCPLease_ConstructProps extends GObject.Object_ConstructProps {
    handle?: object
}
class NetworkDHCPLease {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.NetworkDHCPLease */
    parent: GObject.Object
    priv: NetworkDHCPLeasePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.NetworkDHCPLease */
    get_client_id(): string
    get_expiry_time(): number
    get_hostname(): string
    get_iaid(): string
    get_iface(): string
    get_ip(): string
    get_ip_type(): number
    get_mac(): string
    get_prefix(): number
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
    connect(sigName: "notify", callback: (($obj: NetworkDHCPLease, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NetworkDHCPLease, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NetworkDHCPLease_ConstructProps)
    _init (config?: NetworkDHCPLease_ConstructProps): void
    static $gtype: GObject.Type
}
export interface NetworkFilter_ConstructProps extends GObject.Object_ConstructProps {
    handle?: any
}
class NetworkFilter {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.NetworkFilter */
    parent: GObject.Object
    priv: NetworkFilterPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.NetworkFilter */
    get_config(flags: number): LibvirtGConfig.NetworkFilter
    get_name(): string
    get_uuid(): string
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
    connect(sigName: "notify", callback: (($obj: NetworkFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NetworkFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NetworkFilter_ConstructProps)
    _init (config?: NetworkFilter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface NodeDevice_ConstructProps extends GObject.Object_ConstructProps {
    handle?: any
}
class NodeDevice {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.NodeDevice */
    parent: GObject.Object
    priv: NodeDevicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.NodeDevice */
    get_config(flags: number): LibvirtGConfig.NodeDevice
    get_name(): string
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
    connect(sigName: "notify", callback: (($obj: NodeDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NodeDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NodeDevice_ConstructProps)
    _init (config?: NodeDevice_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Secret_ConstructProps extends GObject.Object_ConstructProps {
    handle?: any
}
class Secret {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.Secret */
    parent: GObject.Object
    priv: SecretPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.Secret */
    get_config(flags: number): LibvirtGConfig.Secret
    get_name(): string
    get_uuid(): string
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
    connect(sigName: "notify", callback: (($obj: Secret, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Secret, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Secret_ConstructProps)
    _init (config?: Secret_ConstructProps): void
    static $gtype: GObject.Type
}
export interface StoragePool_ConstructProps extends GObject.Object_ConstructProps {
    handle?: any
}
class StoragePool {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.StoragePool */
    parent: GObject.Object
    priv: StoragePoolPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.StoragePool */
    build(flags: number): boolean
    build_async(flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    build_finish(result: Gio.AsyncResult): boolean
    create_volume(conf: LibvirtGConfig.StorageVol): StorageVol
    delete(flags: number): boolean
    delete_async(flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_finish(result: Gio.AsyncResult): boolean
    get_active(): boolean
    get_autostart(): boolean
    get_config(flags: number): LibvirtGConfig.StoragePool
    get_info(): StoragePoolInfo
    get_name(): string
    get_persistent(): boolean
    get_uuid(): string
    get_volume(name: string): StorageVol
    get_volumes(): StorageVol[]
    refresh(cancellable?: Gio.Cancellable | null): boolean
    refresh_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_finish(result: Gio.AsyncResult): boolean
    set_autostart(autostart: boolean): boolean
    start(flags: number): boolean
    start_async(flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    start_finish(result: Gio.AsyncResult): boolean
    stop(): boolean
    stop_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    stop_finish(result: Gio.AsyncResult): boolean
    undefine(): boolean
    undefine_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    undefine_finish(result: Gio.AsyncResult): boolean
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
    connect(sigName: "notify", callback: (($obj: StoragePool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StoragePool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StoragePool_ConstructProps)
    _init (config?: StoragePool_ConstructProps): void
    static $gtype: GObject.Type
}
export interface StorageVol_ConstructProps extends GObject.Object_ConstructProps {
    handle?: any
    pool?: StoragePool
}
class StorageVol {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.StorageVol */
    parent: GObject.Object
    priv: StorageVolPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.StorageVol */
    delete(flags: number): boolean
    download(stream: Stream, offset: number, length: number, flags: number): boolean
    get_config(flags: number): LibvirtGConfig.StorageVol
    get_info(): StorageVolInfo
    get_name(): string
    get_path(): string
    resize(capacity: number, flags: StorageVolResizeFlags): boolean
    upload(stream: Stream, offset: number, length: number, flags: number): boolean
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
    connect(sigName: "notify", callback: (($obj: StorageVol, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StorageVol, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StorageVol_ConstructProps)
    _init (config?: StorageVol_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Stream_ConstructProps extends Gio.IOStream_ConstructProps {
    handle?: any
}
class Stream {
    /* Properties of Gio-2.0.Gio.IOStream */
    readonly closed: boolean
    readonly input_stream: Gio.InputStream
    readonly output_stream: Gio.OutputStream
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.Stream */
    parent_instance: Gio.IOStream
    priv: StreamPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.Stream */
    add_watch(priority: number, cond: StreamIOCondition, func: StreamIOFunc): number
    receive(buffer: Uint8Array[], cancellable?: Gio.Cancellable | null): number
    receive_all(cancellable: Gio.Cancellable | null, func: StreamSinkFunc): number
    send(buffer: string, size: number, cancellable?: Gio.Cancellable | null): number
    send_all(cancellable: Gio.Cancellable | null, func: StreamSourceFunc): number
    /* Methods of Gio-2.0.Gio.IOStream */
    clear_pending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_finish(result: Gio.AsyncResult): boolean
    get_input_stream(): Gio.InputStream
    get_output_stream(): Gio.OutputStream
    has_pending(): boolean
    is_closed(): boolean
    set_pending(): boolean
    splice_async(stream2: Gio.IOStream, flags: Gio.IOStreamSpliceFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    /* Virtual methods of Gio-2.0.Gio.IOStream */
    vfunc_close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_close_finish(result: Gio.AsyncResult): boolean
    vfunc_close_fn(cancellable?: Gio.Cancellable | null): boolean
    vfunc_get_input_stream(): Gio.InputStream
    vfunc_get_output_stream(): Gio.OutputStream
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::closed", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-stream", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::output-stream", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Stream_ConstructProps)
    _init (config?: Stream_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class ConnectionClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.ConnectionClass */
    parent_class: GObject.ObjectClass
    connection_opened: (conn: Connection) => void
    connection_closed: (conn: Connection) => void
    domain_added: (conn: Connection, dom: Domain) => void
    domain_removed: (conn: Connection, dom: Domain) => void
    padding: object[]
    static name: string
}
class ConnectionPrivate {
    static name: string
}
abstract class DomainClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.DomainClass */
    parent_class: GObject.ObjectClass
    started: (dom: Domain) => void
    stopped: (dom: Domain) => void
    resumed: (dom: Domain) => void
    updated: (dom: Domain) => void
    suspended: (dom: Domain) => void
    pmsuspended: (dom: Domain) => void
    padding: object[]
    static name: string
}
abstract class DomainDeviceClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.DomainDeviceClass */
    parent_class: GObject.ObjectClass
    padding: object[]
    static name: string
}
class DomainDevicePrivate {
    static name: string
}
abstract class DomainDiskClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.DomainDiskClass */
    parent_class: DomainDeviceClass
    padding: object[]
    static name: string
}
class DomainDiskPrivate {
    static name: string
}
class DomainDiskStats {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.DomainDiskStats */
    rd_req: number
    rd_bytes: number
    wr_req: number
    wr_bytes: number
    errs: number
    static name: string
}
class DomainInfo {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.DomainInfo */
    state: DomainState
    maxMem: number
    memory: number
    nrVirtCpu: number
    cpuTime: number
    static name: string
}
abstract class DomainInterfaceClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.DomainInterfaceClass */
    parent_class: DomainDeviceClass
    padding: object[]
    static name: string
}
class DomainInterfacePrivate {
    static name: string
}
class DomainInterfaceStats {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.DomainInterfaceStats */
    rx_bytes: number
    rx_packets: number
    rx_errs: number
    rx_drop: number
    tx_bytes: number
    tx_packets: number
    tx_errs: number
    tx_drop: number
    static name: string
}
class DomainPrivate {
    static name: string
}
abstract class DomainSnapshotClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.DomainSnapshotClass */
    parent_class: GObject.ObjectClass
    padding: object[]
    static name: string
}
class DomainSnapshotPrivate {
    static name: string
}
abstract class InterfaceClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.InterfaceClass */
    parent_class: GObject.ObjectClass
    padding: object[]
    static name: string
}
class InterfacePrivate {
    static name: string
}
abstract class ManagerClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.ManagerClass */
    parent_class: GObject.ObjectClass
    connection_added: (man: Manager, conn: Connection) => void
    connection_removed: (man: Manager, conn: Connection) => void
    padding: object[]
    static name: string
}
class ManagerPrivate {
    static name: string
}
abstract class NetworkClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.NetworkClass */
    parent_class: GObject.ObjectClass
    started: (net: Network) => void
    stopped: (net: Network) => void
    padding: object[]
    static name: string
}
abstract class NetworkDHCPLeaseClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.NetworkDHCPLeaseClass */
    parent_class: GObject.ObjectClass
    padding: object[]
    static name: string
}
class NetworkDHCPLeasePrivate {
    static name: string
}
abstract class NetworkFilterClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.NetworkFilterClass */
    parent_class: GObject.ObjectClass
    padding: object[]
    static name: string
}
class NetworkFilterPrivate {
    static name: string
}
class NetworkPrivate {
    static name: string
}
abstract class NodeDeviceClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.NodeDeviceClass */
    parent_class: GObject.ObjectClass
    padding: object[]
    static name: string
}
class NodeDevicePrivate {
    static name: string
}
class NodeInfo {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.NodeInfo */
    model: number[]
    memory: number
    cpus: number
    mhz: number
    nodes: number
    sockets: number
    cores: number
    threads: number
    static name: string
}
abstract class SecretClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.SecretClass */
    parent_class: GObject.ObjectClass
    padding: object[]
    static name: string
}
class SecretPrivate {
    static name: string
}
abstract class StoragePoolClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.StoragePoolClass */
    parent_class: GObject.ObjectClass
    padding: object[]
    static name: string
}
class StoragePoolInfo {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.StoragePoolInfo */
    state: StoragePoolState
    capacity: number
    allocation: number
    available: number
    static name: string
}
class StoragePoolPrivate {
    static name: string
}
abstract class StorageVolClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.StorageVolClass */
    parent_class: GObject.ObjectClass
    padding: object[]
    static name: string
}
class StorageVolInfo {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.StorageVolInfo */
    type: StorageVolType
    capacity: number
    allocation: number
    static name: string
}
class StorageVolPrivate {
    static name: string
}
abstract class StreamClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.StreamClass */
    parent_class: Gio.IOStreamClass
    padding: object[]
    static name: string
}
class StreamPrivate {
    static name: string
}
}
export default LibvirtGObject;