/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * LibvirtGObject-1.0
 */

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
function initObject(argv?: string[] | null): /* argv */ string[] | null
function initObjectCheck(argv?: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
interface StreamIOFunc {
    (stream: Stream, cond: StreamIOCondition, opaque?: object | null): boolean
}
interface StreamSinkFunc {
    (stream: Stream): number
}
interface StreamSourceFunc {
    (stream: Stream): number
}
interface Connection_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of LibvirtGObject-1.0.LibvirtGObject.Connection */
    handle?: any
    uri?: string
}
class Connection {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.Connection */
    close(): void
    createDomain(conf: LibvirtGConfig.Domain): Domain
    createStoragePool(conf: LibvirtGConfig.StoragePool, flags: number): StoragePool
    fetchDomains(cancellable?: Gio.Cancellable | null): boolean
    fetchDomainsAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    fetchDomainsFinish(result: Gio.AsyncResult): boolean
    fetchInterfaces(cancellable?: Gio.Cancellable | null): boolean
    fetchInterfacesAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    fetchInterfacesFinish(result: Gio.AsyncResult): boolean
    fetchNetworks(cancellable?: Gio.Cancellable | null): boolean
    fetchNetworksAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    fetchNetworksFinish(result: Gio.AsyncResult): boolean
    fetchStoragePools(cancellable?: Gio.Cancellable | null): boolean
    fetchStoragePoolsAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    fetchStoragePoolsFinish(result: Gio.AsyncResult): boolean
    findDomainById(id: number): Domain
    findDomainByName(name: string): Domain
    findInterfaceByMac(macaddr: string): Interface
    findNetworkByName(name: string): Network
    findStoragePoolByName(name: string): StoragePool
    getCapabilities(): LibvirtGConfig.Capabilities
    getCapabilitiesAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getCapabilitiesFinish(result: Gio.AsyncResult): LibvirtGConfig.Capabilities
    getDomain(uuid: string): Domain
    getDomainCapabilities(emulatorbin: string | null, arch: string | null, machine: string | null, virttype: string | null, flags: number): LibvirtGConfig.DomainCapabilities
    getDomainCapabilitiesAsync(emulatorbin: string | null, arch: string | null, machine: string | null, virttype: string | null, flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDomainCapabilitiesFinish(result: Gio.AsyncResult): LibvirtGConfig.DomainCapabilities
    getDomains(): Domain[]
    getHypervisorName(): string
    getInterface(name: string): Interface
    getInterfaces(): Interface[]
    getNetwork(uuid: string): Network
    getNetworks(): Network[]
    getNodeInfo(): NodeInfo
    getStoragePool(uuid: string): StoragePool
    getStoragePools(): StoragePool[]
    getStream(flags: number): Stream
    getUri(): string
    getVersion(): number
    isOpen(): boolean
    isReadOnly(): boolean
    open(cancellable?: Gio.Cancellable | null): boolean
    openAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openFinish(result: Gio.AsyncResult): boolean
    openReadOnly(cancellable?: Gio.Cancellable | null): boolean
    openReadOnlyAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openReadOnlyFinish(result: Gio.AsyncResult): boolean
    restoreDomainFromFile(filename: string, customConf: LibvirtGConfig.Domain | null, flags: number): boolean
    restoreDomainFromFileAsync(filename: string, customConf: LibvirtGConfig.Domain | null, flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    restoreDomainFromFileFinish(result: Gio.AsyncResult): boolean
    startDomain(conf: LibvirtGConfig.Domain, flags: number): Domain
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
    /* Signals of LibvirtGObject-1.0.LibvirtGObject.Connection */
    connect(sigName: "connection-closed", callback: (() => void)): number
    on(sigName: "connection-closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "connection-closed"): void
    connect(sigName: "connection-opened", callback: (() => void)): number
    on(sigName: "connection-opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-opened", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "connection-opened"): void
    connect(sigName: "domain-added", callback: ((object: Domain) => void)): number
    on(sigName: "domain-added", callback: (object: Domain) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "domain-added", callback: (object: Domain) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "domain-added", callback: (object: Domain) => void): NodeJS.EventEmitter
    emit(sigName: "domain-added", object: Domain): void
    connect(sigName: "domain-removed", callback: ((object: Domain) => void)): number
    on(sigName: "domain-removed", callback: (object: Domain) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "domain-removed", callback: (object: Domain) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "domain-removed", callback: (object: Domain) => void): NodeJS.EventEmitter
    emit(sigName: "domain-removed", object: Domain): void
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
    constructor (config?: Connection_ConstructProps)
    _init (config?: Connection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(uri: string): Connection
    static $gtype: GObject.Type
}
interface Domain_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of LibvirtGObject-1.0.LibvirtGObject.Domain */
    handle?: any
}
class Domain {
    /* Properties of LibvirtGObject-1.0.LibvirtGObject.Domain */
    readonly persistent: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.Domain */
    createSnapshot(customConf: LibvirtGConfig.DomainSnapshot | null, flags: number): DomainSnapshot
    createSnapshotAsync(customConf: LibvirtGConfig.DomainSnapshot | null, flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createSnapshotFinish(result: Gio.AsyncResult): DomainSnapshot
    delete(flags: number): boolean
    fetchSnapshots(listFlags: number, cancellable?: Gio.Cancellable | null): boolean
    fetchSnapshotsAsync(listFlags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    fetchSnapshotsFinish(res: Gio.AsyncResult): boolean
    getConfig(flags: number): LibvirtGConfig.Domain
    getDevices(): DomainDevice[]
    getHasCurrentSnapshot(flags: number): [ /* returnType */ boolean, /* hasCurrentSnapshot */ boolean ]
    getId(): number
    getInfo(): DomainInfo
    getInfoAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getInfoFinish(result: Gio.AsyncResult): DomainInfo
    getName(): string
    getPersistent(): boolean
    getSaved(): boolean
    getSnapshots(): DomainSnapshot[]
    getUuid(): string
    openConsole(stream: Stream, devname: string | null, flags: number): boolean
    openGraphics(idx: number, fd: number, flags: number): boolean
    openGraphicsFd(idx: number, flags: number): number
    reboot(flags: number): boolean
    resume(): boolean
    resumeAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    resumeFinish(result: Gio.AsyncResult): boolean
    save(flags: number): boolean
    saveAsync(flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    saveFinish(result: Gio.AsyncResult): boolean
    saveToFile(filename: string, customConf: LibvirtGConfig.Domain | null, flags: number): boolean
    saveToFileAsync(filename: string, customConf: LibvirtGConfig.Domain | null, flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    saveToFileFinish(result: Gio.AsyncResult): boolean
    screenshot(stream: Stream, monitorId: number, flags: number): string
    setConfig(conf: LibvirtGConfig.Domain): boolean
    setTime(dateTime: GLib.DateTime | null, flags: number): boolean
    setTimeAsync(dateTime: GLib.DateTime | null, flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setTimeFinish(result: Gio.AsyncResult): boolean
    shutdown(flags: number): boolean
    start(flags: number): boolean
    startAsync(flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    startFinish(result: Gio.AsyncResult): boolean
    stop(flags: number): boolean
    suspend(): boolean
    updateDevice(device: LibvirtGConfig.DomainDevice, flags: number): boolean
    wakeup(flags: number): boolean
    wakeupAsync(flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    wakeupFinish(result: Gio.AsyncResult): boolean
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
    /* Signals of LibvirtGObject-1.0.LibvirtGObject.Domain */
    connect(sigName: "pmsuspended", callback: (() => void)): number
    on(sigName: "pmsuspended", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pmsuspended", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pmsuspended", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "pmsuspended"): void
    connect(sigName: "resumed", callback: (() => void)): number
    on(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resumed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "resumed"): void
    connect(sigName: "started", callback: (() => void)): number
    on(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "started"): void
    connect(sigName: "stopped", callback: (() => void)): number
    on(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "stopped"): void
    connect(sigName: "suspended", callback: (() => void)): number
    on(sigName: "suspended", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "suspended", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "suspended", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "suspended"): void
    connect(sigName: "updated", callback: (() => void)): number
    on(sigName: "updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "updated", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "updated"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::persistent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::persistent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::persistent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::persistent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::persistent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Domain_ConstructProps)
    _init (config?: Domain_ConstructProps): void
    static $gtype: GObject.Type
}
interface DomainDevice_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of LibvirtGObject-1.0.LibvirtGObject.DomainDevice */
    config?: LibvirtGConfig.DomainDevice
    domain?: Domain
}
class DomainDevice {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.DomainDevice */
    getConfig(): LibvirtGConfig.DomainDevice
    getDomain(): Domain
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
    constructor (config?: DomainDevice_ConstructProps)
    _init (config?: DomainDevice_ConstructProps): void
    static $gtype: GObject.Type
}
interface DomainDisk_ConstructProps extends DomainDevice_ConstructProps {
}
class DomainDisk {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.DomainDevice */
    readonly parent: GObject.Object
    readonly priv: DomainDevicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.DomainDisk */
    getStats(): DomainDiskStats
    resize(size: number, flags: number): boolean
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.DomainDevice */
    getConfig(): LibvirtGConfig.DomainDevice
    getDomain(): Domain
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
    constructor (config?: DomainDisk_ConstructProps)
    _init (config?: DomainDisk_ConstructProps): void
    static $gtype: GObject.Type
}
interface DomainInterface_ConstructProps extends DomainDevice_ConstructProps {
}
class DomainInterface {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.DomainDevice */
    readonly parent: GObject.Object
    readonly priv: DomainDevicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.DomainInterface */
    getStats(): DomainInterfaceStats
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.DomainDevice */
    getConfig(): LibvirtGConfig.DomainDevice
    getDomain(): Domain
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
    constructor (config?: DomainInterface_ConstructProps)
    _init (config?: DomainInterface_ConstructProps): void
    static $gtype: GObject.Type
}
interface DomainSnapshot_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of LibvirtGObject-1.0.LibvirtGObject.DomainSnapshot */
    handle?: any
}
class DomainSnapshot {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.DomainSnapshot */
    delete(flags: number): boolean
    deleteAsync(flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteFinish(res: Gio.AsyncResult): boolean
    getConfig(flags: number): LibvirtGConfig.DomainSnapshot
    getIsCurrent(flags: number): [ /* returnType */ boolean, /* isCurrent */ boolean ]
    getName(): string
    revertTo(flags: number): boolean
    revertToAsync(flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    revertToFinish(result: Gio.AsyncResult): boolean
    setConfig(conf: LibvirtGConfig.DomainSnapshot): boolean
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
    constructor (config?: DomainSnapshot_ConstructProps)
    _init (config?: DomainSnapshot_ConstructProps): void
    static $gtype: GObject.Type
}
interface Interface_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of LibvirtGObject-1.0.LibvirtGObject.Interface */
    handle?: any
}
class Interface {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.Interface */
    getConfig(flags: number): LibvirtGConfig.Interface
    getMac(): string
    getName(): string
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
    constructor (config?: Interface_ConstructProps)
    _init (config?: Interface_ConstructProps): void
    static $gtype: GObject.Type
}
interface Manager_ConstructProps extends GObject.Object_ConstructProps {
}
class Manager {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.Manager */
    addConnection(conn: Connection): void
    findConnectionByUri(uri: string): Connection | null
    getConnections(): Connection[]
    removeConnection(conn: Connection): void
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
    /* Signals of LibvirtGObject-1.0.LibvirtGObject.Manager */
    connect(sigName: "connection-added", callback: ((object: Connection) => void)): number
    on(sigName: "connection-added", callback: (object: Connection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-added", callback: (object: Connection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-added", callback: (object: Connection) => void): NodeJS.EventEmitter
    emit(sigName: "connection-added", object: Connection): void
    connect(sigName: "connection-removed", callback: ((object: Connection) => void)): number
    on(sigName: "connection-removed", callback: (object: Connection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-removed", callback: (object: Connection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-removed", callback: (object: Connection) => void): NodeJS.EventEmitter
    emit(sigName: "connection-removed", object: Connection): void
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
    constructor (config?: Manager_ConstructProps)
    _init (config?: Manager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Manager
    static $gtype: GObject.Type
}
interface Network_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of LibvirtGObject-1.0.LibvirtGObject.Network */
    handle?: any
}
class Network {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.Network */
    getConfig(flags: number): LibvirtGConfig.Network
    getDhcpLeases(mac: string | null, flags: number): NetworkDHCPLease[]
    getName(): string
    getUuid(): string
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
    constructor (config?: Network_ConstructProps)
    _init (config?: Network_ConstructProps): void
    static $gtype: GObject.Type
}
interface NetworkDHCPLease_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of LibvirtGObject-1.0.LibvirtGObject.NetworkDHCPLease */
    handle?: object
}
class NetworkDHCPLease {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.NetworkDHCPLease */
    getClientId(): string
    getExpiryTime(): number
    getHostname(): string
    getIaid(): string
    getIface(): string
    getIp(): string
    getIpType(): number
    getMac(): string
    getPrefix(): number
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
    constructor (config?: NetworkDHCPLease_ConstructProps)
    _init (config?: NetworkDHCPLease_ConstructProps): void
    static $gtype: GObject.Type
}
interface NetworkFilter_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of LibvirtGObject-1.0.LibvirtGObject.NetworkFilter */
    handle?: any
}
class NetworkFilter {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.NetworkFilter */
    getConfig(flags: number): LibvirtGConfig.NetworkFilter
    getName(): string
    getUuid(): string
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
    constructor (config?: NetworkFilter_ConstructProps)
    _init (config?: NetworkFilter_ConstructProps): void
    static $gtype: GObject.Type
}
interface NodeDevice_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of LibvirtGObject-1.0.LibvirtGObject.NodeDevice */
    handle?: any
}
class NodeDevice {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.NodeDevice */
    getConfig(flags: number): LibvirtGConfig.NodeDevice
    getName(): string
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
    constructor (config?: NodeDevice_ConstructProps)
    _init (config?: NodeDevice_ConstructProps): void
    static $gtype: GObject.Type
}
interface Secret_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of LibvirtGObject-1.0.LibvirtGObject.Secret */
    handle?: any
}
class Secret {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.Secret */
    getConfig(flags: number): LibvirtGConfig.Secret
    getName(): string
    getUuid(): string
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
    constructor (config?: Secret_ConstructProps)
    _init (config?: Secret_ConstructProps): void
    static $gtype: GObject.Type
}
interface StoragePool_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of LibvirtGObject-1.0.LibvirtGObject.StoragePool */
    handle?: any
}
class StoragePool {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.StoragePool */
    build(flags: number): boolean
    buildAsync(flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    buildFinish(result: Gio.AsyncResult): boolean
    createVolume(conf: LibvirtGConfig.StorageVol): StorageVol
    delete(flags: number): boolean
    deleteAsync(flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteFinish(result: Gio.AsyncResult): boolean
    getActive(): boolean
    getAutostart(): boolean
    getConfig(flags: number): LibvirtGConfig.StoragePool
    getInfo(): StoragePoolInfo
    getName(): string
    getPersistent(): boolean
    getUuid(): string
    getVolume(name: string): StorageVol
    getVolumes(): StorageVol[]
    refresh(cancellable?: Gio.Cancellable | null): boolean
    refreshAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshFinish(result: Gio.AsyncResult): boolean
    setAutostart(autostart: boolean): boolean
    start(flags: number): boolean
    startAsync(flags: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    startFinish(result: Gio.AsyncResult): boolean
    stop(): boolean
    stopAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    stopFinish(result: Gio.AsyncResult): boolean
    undefine(): boolean
    undefineAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    undefineFinish(result: Gio.AsyncResult): boolean
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
    constructor (config?: StoragePool_ConstructProps)
    _init (config?: StoragePool_ConstructProps): void
    static $gtype: GObject.Type
}
interface StorageVol_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of LibvirtGObject-1.0.LibvirtGObject.StorageVol */
    handle?: any
    pool?: StoragePool
}
class StorageVol {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.StorageVol */
    delete(flags: number): boolean
    download(stream: Stream, offset: number, length: number, flags: number): boolean
    getConfig(flags: number): LibvirtGConfig.StorageVol
    getInfo(): StorageVolInfo
    getName(): string
    getPath(): string
    resize(capacity: number, flags: StorageVolResizeFlags): boolean
    upload(stream: Stream, offset: number, length: number, flags: number): boolean
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
    constructor (config?: StorageVol_ConstructProps)
    _init (config?: StorageVol_ConstructProps): void
    static $gtype: GObject.Type
}
interface Stream_ConstructProps extends Gio.IOStream_ConstructProps {
    /* Constructor properties of LibvirtGObject-1.0.LibvirtGObject.Stream */
    handle?: any
}
class Stream {
    /* Properties of Gio-2.0.Gio.IOStream */
    readonly closed: boolean
    readonly inputStream: Gio.InputStream
    readonly outputStream: Gio.OutputStream
    /* Fields of Gio-2.0.Gio.IOStream */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGObject-1.0.LibvirtGObject.Stream */
    addWatch(priority: number, cond: StreamIOCondition, func: StreamIOFunc): number
    receive(buffer: Uint8Array, cancellable?: Gio.Cancellable | null): number
    receiveAll(cancellable: Gio.Cancellable | null, func: StreamSinkFunc): number
    send(buffer: string, size: number, cancellable?: Gio.Cancellable | null): number
    sendAll(cancellable: Gio.Cancellable | null, func: StreamSourceFunc): number
    /* Methods of Gio-2.0.Gio.IOStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    getInputStream(): Gio.InputStream
    getOutputStream(): Gio.OutputStream
    hasPending(): boolean
    isClosed(): boolean
    setPending(): boolean
    spliceAsync(stream2: Gio.IOStream, flags: Gio.IOStreamSpliceFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
    connect(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::output-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Stream_ConstructProps)
    _init (config?: Stream_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class ConnectionClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.ConnectionClass */
    readonly parentClass: GObject.ObjectClass
    readonly connectionOpened: (conn: Connection) => void
    readonly connectionClosed: (conn: Connection) => void
    readonly domainAdded: (conn: Connection, dom: Domain) => void
    readonly domainRemoved: (conn: Connection, dom: Domain) => void
    readonly padding: object[]
    static name: string
}
class ConnectionPrivate {
    static name: string
}
abstract class DomainClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.DomainClass */
    readonly parentClass: GObject.ObjectClass
    readonly started: (dom: Domain) => void
    readonly stopped: (dom: Domain) => void
    readonly resumed: (dom: Domain) => void
    readonly updated: (dom: Domain) => void
    readonly suspended: (dom: Domain) => void
    readonly pmsuspended: (dom: Domain) => void
    readonly padding: object[]
    static name: string
}
abstract class DomainDeviceClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.DomainDeviceClass */
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class DomainDevicePrivate {
    static name: string
}
abstract class DomainDiskClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.DomainDiskClass */
    readonly parentClass: DomainDeviceClass
    readonly padding: object[]
    static name: string
}
class DomainDiskPrivate {
    static name: string
}
class DomainDiskStats {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.DomainDiskStats */
    readonly rdReq: number
    readonly rdBytes: number
    readonly wrReq: number
    readonly wrBytes: number
    readonly errs: number
    static name: string
}
class DomainInfo {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.DomainInfo */
    readonly state: DomainState
    readonly maxMem: number
    readonly memory: number
    readonly nrVirtCpu: number
    readonly cpuTime: number
    static name: string
}
abstract class DomainInterfaceClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.DomainInterfaceClass */
    readonly parentClass: DomainDeviceClass
    readonly padding: object[]
    static name: string
}
class DomainInterfacePrivate {
    static name: string
}
class DomainInterfaceStats {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.DomainInterfaceStats */
    readonly rxBytes: number
    readonly rxPackets: number
    readonly rxErrs: number
    readonly rxDrop: number
    readonly txBytes: number
    readonly txPackets: number
    readonly txErrs: number
    readonly txDrop: number
    static name: string
}
class DomainPrivate {
    static name: string
}
abstract class DomainSnapshotClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.DomainSnapshotClass */
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class DomainSnapshotPrivate {
    static name: string
}
abstract class InterfaceClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.InterfaceClass */
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class InterfacePrivate {
    static name: string
}
abstract class ManagerClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.ManagerClass */
    readonly parentClass: GObject.ObjectClass
    readonly connectionAdded: (man: Manager, conn: Connection) => void
    readonly connectionRemoved: (man: Manager, conn: Connection) => void
    readonly padding: object[]
    static name: string
}
class ManagerPrivate {
    static name: string
}
abstract class NetworkClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.NetworkClass */
    readonly parentClass: GObject.ObjectClass
    readonly started: (net: Network) => void
    readonly stopped: (net: Network) => void
    readonly padding: object[]
    static name: string
}
abstract class NetworkDHCPLeaseClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.NetworkDHCPLeaseClass */
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class NetworkDHCPLeasePrivate {
    static name: string
}
abstract class NetworkFilterClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.NetworkFilterClass */
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
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
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class NodeDevicePrivate {
    static name: string
}
class NodeInfo {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.NodeInfo */
    readonly model: number[]
    readonly memory: number
    readonly cpus: number
    readonly mhz: number
    readonly nodes: number
    readonly sockets: number
    readonly cores: number
    readonly threads: number
    static name: string
}
abstract class SecretClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.SecretClass */
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class SecretPrivate {
    static name: string
}
abstract class StoragePoolClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.StoragePoolClass */
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class StoragePoolInfo {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.StoragePoolInfo */
    readonly state: StoragePoolState
    readonly capacity: number
    readonly allocation: number
    readonly available: number
    static name: string
}
class StoragePoolPrivate {
    static name: string
}
abstract class StorageVolClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.StorageVolClass */
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class StorageVolInfo {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.StorageVolInfo */
    readonly type: StorageVolType
    readonly capacity: number
    readonly allocation: number
    static name: string
}
class StorageVolPrivate {
    static name: string
}
abstract class StreamClass {
    /* Fields of LibvirtGObject-1.0.LibvirtGObject.StreamClass */
    readonly parentClass: Gio.IOStreamClass
    readonly padding: object[]
    static name: string
}
class StreamPrivate {
    static name: string
}
}
export default LibvirtGObject;