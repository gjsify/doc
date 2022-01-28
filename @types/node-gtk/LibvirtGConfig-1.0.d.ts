/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * LibvirtGConfig-1.0
 */

import type libxml2 from './libxml2-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace LibvirtGConfig {

enum DomainChannelTargetType {
    GUESTFWD,
    VIRTIO,
    SPICEPORT,
}
enum DomainClockOffset {
    UTC,
    LOCALTIME,
    TIMEZONE,
    VARIABLE,
}
enum DomainConsoleTargetType {
    XEN,
    SERIAL,
    UML,
    VIRTIO,
    LXC,
    OPENVZ,
}
enum DomainControllerUsbModel {
    PIIX3_UHCI,
    PIIX4_UHCI,
    EHCI,
    ICH9_EHCI1,
    ICH9_UHCI1,
    ICH9_UHCI2,
    ICH9_UHCI3,
    VT82C686B_UHCI,
    PCI_OHCI,
    QEMU_XHCI,
}
enum DomainCpuFeaturePolicy {
    FORCE,
    REQUIRE,
    OPTIONAL,
    DISABLE,
    FORBID,
}
enum DomainCpuMatchPolicy {
    MINIMUM,
    EXACT,
    STRICT,
}
enum DomainCpuMode {
    CUSTOM,
    HOST_MODEL,
    HOST_PASSTHROUGH,
}
enum DomainDiskBus {
    IDE,
    FDC,
    SCSI,
    VIRTIO,
    XEN,
    USB,
    UML,
    SATA,
}
enum DomainDiskCacheType {
    DEFAULT,
    NONE,
    WRITETHROUGH,
    WRITEBACK,
    DIRECTSYNC,
    UNSAFE,
}
enum DomainDiskDriverDiscard {
    UNMAP,
    IGNORE,
}
enum DomainDiskDriverErrorPolicy {
    STOP,
    REPORT,
    IGNORE,
    ENOSPACE,
}
enum DomainDiskDriverIoPolicy {
    THREADS,
    NATIVE,
}
enum DomainDiskFormat {
    RAW,
    DIR,
    BOCHS,
    CLOOP,
    COW,
    DMG,
    ISO,
    QCOW,
    QCOW2,
    QED,
    VMDK,
    VPC,
    FAT,
    VHD,
}
enum DomainDiskGuestDeviceType {
    DISK,
    FLOPPY,
    CDROM,
}
enum DomainDiskSnapshotType {
    NO,
    INTERNAL,
    EXTERNAL,
}
enum DomainDiskStartupPolicy {
    MANDATORY,
    REQUISITE,
    OPTIONAL,
}
enum DomainDiskType {
    FILE,
    BLOCK,
    DIR,
    NETWORK,
}
enum DomainFilesysAccessType {
    PASSTHROUGH,
    MAPPED,
    SQUASH,
}
enum DomainFilesysDriverType {
    DEFAULT,
    PATH,
    HANDLE,
    LOOP,
    NBD,
    PLOOP,
}
enum DomainFilesysType {
    MOUNT,
    BLOCK,
    FILE,
    TEMPLATE,
    RAM,
    BIND,
}
enum DomainGraphicsSpiceImageCompression {
    AUTO_GLZ,
    AUTO_LZ,
    QUIC,
    GLZ,
    LZ,
    OFF,
}
enum DomainInputBus {
    PS2,
    USB,
    XEN,
}
enum DomainInputDeviceType {
    MOUSE,
    TABLET,
    KEYBOARD,
}
enum DomainInterfaceLinkState {
    DEFAULT,
    UP,
    DOWN,
}
enum DomainLifecycleAction {
    DESTROY,
    RESTART,
    PRESERVE,
    RENAME_RESTART,
    COREDUMP_DESTROY,
    COREDUMP_RESTART,
}
enum DomainLifecycleEvent {
    ON_POWEROFF,
    ON_REBOOT,
    ON_CRASH,
}
enum DomainMemballoonModel {
    NONE,
    VIRTIO,
}
enum DomainOsBootDevice {
    FD,
    HD,
    CDROM,
    NETWORK,
}
enum DomainOsFirmware {
    BIOS,
    EFI,
}
enum DomainOsSmBiosMode {
    EMULATE,
    HOST,
    SYSINFO,
}
enum DomainOsType {
    HVM,
    LINUX,
    EXE,
    XEN,
    UML,
}
enum DomainRedirdevBus {
    USB,
}
enum DomainSeclabelType {
    DYNAMIC,
    STATIC,
}
enum DomainSnapshotDomainState {
    NOSTATE,
    RUNNING,
    BLOCKED,
    PAUSED,
    SHUTDOWN,
    SHUTOFF,
    CRASHED,
    PMSUSPENDED,
    DISK_SNAPSHOT,
}
enum DomainSnapshotMemoryState {
    NONE,
    INTERNAL,
    EXTERNAL,
}
enum DomainSoundModel {
    SB16,
    ES1370,
    PCSPK,
    AC97,
    ICH6,
    ICH9,
}
enum DomainTimerTickPolicy {
    DELAY,
    CATCHUP,
    MERGE,
    DISCARD,
}
enum DomainVideoModel {
    VGA,
    CIRRUS,
    VMVGA,
    XEN,
    VBOX,
    QXL,
    VIRTIO,
    BOCHS,
}
enum DomainVirtType {
    QEMU,
    KQEMU,
    KVM,
    XEN,
    LXC,
    UML,
    OPENVZ,
    VSERVER,
    LDOM,
    TEST,
    VMWARE,
    HYPERV,
    VBOX,
    ONE,
    PHYP,
}
enum StoragePoolType {
    DIR,
    FS,
    NETFS,
    LOGICAL,
    DISK,
    ISCSI,
    SCSI,
    MPATH,
}
enum StorageVolTargetFeatures {
    REFCOUNT,
}
function init(argv?: string[] | null): /* argv */ string[] | null
function initCheck(argv?: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
interface Capabilities_ConstructProps extends Object_ConstructProps {
}
class Capabilities {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Capabilities */
    getGuests(): CapabilitiesGuest[]
    getHost(): CapabilitiesHost
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: Capabilities_ConstructProps)
    _init (config?: Capabilities_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Capabilities
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): Capabilities
    static newFromXml(xml: string): Capabilities
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): Capabilities
    static $gtype: GObject.Type
}
interface CapabilitiesCpu_ConstructProps extends Object_ConstructProps {
}
class CapabilitiesCpu {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpu */
    addFeature(feature: CapabilitiesCpuFeature): void
    getArch(): string
    getFeatures(): CapabilitiesCpuFeature[]
    getModel(): CapabilitiesCpuModel
    getTopology(): CapabilitiesCpuTopology
    setTopology(topology: CapabilitiesCpuTopology): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: CapabilitiesCpu_ConstructProps)
    _init (config?: CapabilitiesCpu_ConstructProps): void
    static $gtype: GObject.Type
}
interface CapabilitiesCpuFeature_ConstructProps extends Object_ConstructProps {
}
class CapabilitiesCpuFeature {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeature */
    getName(): string
    setName(name: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: CapabilitiesCpuFeature_ConstructProps)
    _init (config?: CapabilitiesCpuFeature_ConstructProps): void
    static $gtype: GObject.Type
}
interface CapabilitiesCpuModel_ConstructProps extends Object_ConstructProps {
}
class CapabilitiesCpuModel {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModel */
    getName(): string
    setName(name: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: CapabilitiesCpuModel_ConstructProps)
    _init (config?: CapabilitiesCpuModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CapabilitiesCpuModel
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): CapabilitiesCpuModel
    static newFromXml(xml: string): CapabilitiesCpuModel
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): CapabilitiesCpuModel
    static $gtype: GObject.Type
}
interface CapabilitiesCpuTopology_ConstructProps extends Object_ConstructProps {
}
class CapabilitiesCpuTopology {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuTopology */
    getCores(): number
    getSockets(): number
    getThreads(): number
    setCores(cores: number): void
    setSockets(sockets: number): void
    setThreads(threads: number): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: CapabilitiesCpuTopology_ConstructProps)
    _init (config?: CapabilitiesCpuTopology_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CapabilitiesCpuTopology
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): CapabilitiesCpuTopology
    static newFromXml(xml: string): CapabilitiesCpuTopology
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): CapabilitiesCpuTopology
    static $gtype: GObject.Type
}
interface CapabilitiesGuest_ConstructProps extends Object_ConstructProps {
}
class CapabilitiesGuest {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuest */
    getArch(): CapabilitiesGuestArch
    getFeatures(): CapabilitiesGuestFeature[]
    getOsType(): DomainOsType
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: CapabilitiesGuest_ConstructProps)
    _init (config?: CapabilitiesGuest_ConstructProps): void
    static $gtype: GObject.Type
}
interface CapabilitiesGuestArch_ConstructProps extends Object_ConstructProps {
}
class CapabilitiesGuestArch {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestArch */
    getDomains(): CapabilitiesGuestDomain[]
    getEmulator(): string
    getName(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: CapabilitiesGuestArch_ConstructProps)
    _init (config?: CapabilitiesGuestArch_ConstructProps): void
    static $gtype: GObject.Type
}
interface CapabilitiesGuestDomain_ConstructProps extends Object_ConstructProps {
}
class CapabilitiesGuestDomain {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestDomain */
    getEmulator(): string
    getVirtType(): DomainVirtType
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: CapabilitiesGuestDomain_ConstructProps)
    _init (config?: CapabilitiesGuestDomain_ConstructProps): void
    static $gtype: GObject.Type
}
interface CapabilitiesGuestFeature_ConstructProps extends Object_ConstructProps {
}
class CapabilitiesGuestFeature {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestFeature */
    getName(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: CapabilitiesGuestFeature_ConstructProps)
    _init (config?: CapabilitiesGuestFeature_ConstructProps): void
    static $gtype: GObject.Type
}
interface CapabilitiesHost_ConstructProps extends Object_ConstructProps {
}
class CapabilitiesHost {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHost */
    getCpu(): CapabilitiesCpu
    getSecmodels(): CapabilitiesHostSecModel[]
    getUuid(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: CapabilitiesHost_ConstructProps)
    _init (config?: CapabilitiesHost_ConstructProps): void
    static $gtype: GObject.Type
}
interface CapabilitiesHostSecModel_ConstructProps extends Object_ConstructProps {
}
class CapabilitiesHostSecModel {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostSecModel */
    getDoi(): string
    getModel(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: CapabilitiesHostSecModel_ConstructProps)
    _init (config?: CapabilitiesHostSecModel_ConstructProps): void
    static $gtype: GObject.Type
}
interface Domain_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of LibvirtGConfig-1.0.LibvirtGConfig.Domain */
    currentMemory?: number
    description?: string
    features?: string[]
    memory?: number
    name?: string
    title?: string
    uuid?: string
    vcpu?: number
}
class Domain {
    /* Properties of LibvirtGConfig-1.0.LibvirtGConfig.Domain */
    currentMemory: number
    description: string
    features: string[]
    memory: number
    name: string
    title: string
    uuid: string
    vcpu: number
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Domain */
    addDevice(device: DomainDevice): void
    getClock(): DomainClock
    getCpu(): DomainCpu
    getCurrentMemory(): number
    getCustomXml(nsUri: string): string
    getDescription(): string
    getDevices(): DomainDevice[]
    getFeatures(): string[]
    getMemory(): number
    getName(): string
    getOs(): DomainOs
    getTitle(): string
    getUuid(): string
    getVcpus(): number
    getVirtType(): DomainVirtType
    setClock(klock?: DomainClock | null): void
    setCpu(cpu?: DomainCpu | null): void
    setCurrentMemory(memory: number): void
    setCustomXml(xml: string, ns: string, nsUri: string): boolean
    setCustomXmlNsChildren(xml: string, ns: string, nsUri: string): boolean
    setDescription(description?: string | null): void
    setDevices(devices: DomainDevice[]): void
    setFeatures(features: string[]): void
    setLifecycle(event: DomainLifecycleEvent, action: DomainLifecycleAction): void
    setMemory(memory: number): void
    setName(name?: string | null): void
    setOs(os?: DomainOs | null): void
    setPowerManagement(pm?: DomainPowerManagement | null): void
    setSeclabel(seclabel?: DomainSeclabel | null): void
    setTitle(title?: string | null): void
    setUuid(uuid?: string | null): void
    setVcpus(vcpuCount: number): void
    setVirtType(type: DomainVirtType): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    connect(sigName: "notify::current-memory", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-memory", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::features", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::features", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::memory", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::memory", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uuid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vcpu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vcpu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vcpu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vcpu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vcpu", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Static methods and pseudo-constructors */
    static new(): Domain
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): Domain
    static newFromXml(xml: string): Domain
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): Domain
    static $gtype: GObject.Type
}
interface DomainAddress_ConstructProps extends Object_ConstructProps {
}
class DomainAddress {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainAddress_ConstructProps)
    _init (config?: DomainAddress_ConstructProps): void
    static $gtype: GObject.Type
}
interface DomainAddressPci_ConstructProps extends DomainAddress_ConstructProps {
}
class DomainAddressPci {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddress */
    readonly parent: Object
    readonly priv: DomainAddressPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressPci */
    getBus(): number
    getDomain(): number
    getFunction(): number
    getMultifunction(): boolean
    getSlot(): number
    setBus(bus: number): void
    setDomain(pciDomain: number): void
    setFunction(function_: number): void
    setMultifunction(multifunction: boolean): void
    setSlot(slot: number): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainAddressPci_ConstructProps)
    _init (config?: DomainAddressPci_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainAddressPci
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainAddressPci
    static newFromXml(xml: string): DomainAddressPci
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainAddressPci
    static $gtype: GObject.Type
}
interface DomainAddressUsb_ConstructProps extends DomainAddress_ConstructProps {
}
class DomainAddressUsb {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddress */
    readonly parent: Object
    readonly priv: DomainAddressPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressUsb */
    setBus(bus: number): void
    setPort(port: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainAddressUsb_ConstructProps)
    _init (config?: DomainAddressUsb_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainAddressUsb
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainAddressUsb
    static newFromXml(xml: string): DomainAddressUsb
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainAddressUsb
    static $gtype: GObject.Type
}
interface DomainCapabilities_ConstructProps extends Object_ConstructProps {
}
class DomainCapabilities {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilities */
    getOs(): DomainCapabilitiesOs
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainCapabilities_ConstructProps)
    _init (config?: DomainCapabilities_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainCapabilities
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainCapabilities
    static newFromXml(xml: string): DomainCapabilities
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainCapabilities
    static $gtype: GObject.Type
}
interface DomainCapabilitiesOs_ConstructProps extends Object_ConstructProps {
}
class DomainCapabilitiesOs {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOs */
    getFirmwares(): DomainOsFirmware[]
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainCapabilitiesOs_ConstructProps)
    _init (config?: DomainCapabilitiesOs_ConstructProps): void
    static $gtype: GObject.Type
}
interface DomainChannel_ConstructProps extends DomainChardev_ConstructProps {
}
class DomainChannel {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev */
    readonly parent: DomainDevice
    readonly priv: DomainChardevPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChannel */
    getTargetName(): string
    getTargetType(): DomainChannelTargetType
    setTargetName(name: string): void
    setTargetType(type: DomainChannelTargetType): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev */
    getSource(): DomainChardevSource
    setSource(source: DomainChardevSource): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainChannel_ConstructProps)
    _init (config?: DomainChannel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainChannel
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainChannel
    static newFromXml(xml: string): DomainChannel
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainChannel
    static $gtype: GObject.Type
}
interface DomainChardev_ConstructProps extends DomainDevice_ConstructProps {
}
class DomainChardev {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    readonly parent: Object
    readonly priv: DomainDevicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev */
    getSource(): DomainChardevSource
    setSource(source: DomainChardevSource): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainChardev_ConstructProps)
    _init (config?: DomainChardev_ConstructProps): void
    static $gtype: GObject.Type
}
interface DomainChardevSource_ConstructProps extends Object_ConstructProps {
}
class DomainChardevSource {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainChardevSource_ConstructProps)
    _init (config?: DomainChardevSource_ConstructProps): void
    static $gtype: GObject.Type
}
interface DomainChardevSourcePty_ConstructProps extends DomainChardevSource_ConstructProps {
}
class DomainChardevSourcePty {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSource */
    readonly parent: Object
    readonly priv: DomainChardevSourcePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourcePty */
    getPath(): string
    setPath(path: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainChardevSourcePty_ConstructProps)
    _init (config?: DomainChardevSourcePty_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainChardevSourcePty
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainChardevSourcePty
    static newFromXml(xml: string): DomainChardevSourcePty
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainChardevSourcePty
    static $gtype: GObject.Type
}
interface DomainChardevSourceSpicePort_ConstructProps extends DomainChardevSource_ConstructProps {
}
class DomainChardevSourceSpicePort {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSource */
    readonly parent: Object
    readonly priv: DomainChardevSourcePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpicePort */
    getChannel(): string
    setChannel(channel: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainChardevSourceSpicePort_ConstructProps)
    _init (config?: DomainChardevSourceSpicePort_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainChardevSourceSpicePort
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainChardevSourceSpicePort
    static newFromXml(xml: string): DomainChardevSourceSpicePort
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainChardevSourceSpicePort
    static $gtype: GObject.Type
}
interface DomainChardevSourceSpiceVmc_ConstructProps extends DomainChardevSource_ConstructProps {
}
class DomainChardevSourceSpiceVmc {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSource */
    readonly parent: Object
    readonly priv: DomainChardevSourcePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainChardevSourceSpiceVmc_ConstructProps)
    _init (config?: DomainChardevSourceSpiceVmc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainChardevSourceSpiceVmc
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainChardevSourceSpiceVmc
    static newFromXml(xml: string): DomainChardevSourceSpiceVmc
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainChardevSourceSpiceVmc
    static $gtype: GObject.Type
}
interface DomainChardevSourceUnix_ConstructProps extends DomainChardevSource_ConstructProps {
}
class DomainChardevSourceUnix {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSource */
    readonly parent: Object
    readonly priv: DomainChardevSourcePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainChardevSourceUnix_ConstructProps)
    _init (config?: DomainChardevSourceUnix_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainChardevSourceUnix
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainChardevSourceUnix
    static newFromXml(xml: string): DomainChardevSourceUnix
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainChardevSourceUnix
    static $gtype: GObject.Type
}
interface DomainClock_ConstructProps extends Object_ConstructProps {
}
class DomainClock {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainClock */
    addTimer(timer: DomainTimer): void
    getOffset(): DomainClockOffset
    getTimezone(): string
    getVariableOffset(): number
    setOffset(offset: DomainClockOffset): void
    setTimezone(tz: string): void
    setVariableOffset(seconds: number): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainClock_ConstructProps)
    _init (config?: DomainClock_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainClock
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainClock
    static newFromXml(xml: string): DomainClock
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainClock
    static $gtype: GObject.Type
}
interface DomainConsole_ConstructProps extends DomainChardev_ConstructProps {
}
class DomainConsole {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev */
    readonly parent: DomainDevice
    readonly priv: DomainChardevPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainConsole */
    setTargetType(type: DomainConsoleTargetType): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev */
    getSource(): DomainChardevSource
    setSource(source: DomainChardevSource): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainConsole_ConstructProps)
    _init (config?: DomainConsole_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainConsole
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainConsole
    static newFromXml(xml: string): DomainConsole
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainConsole
    static $gtype: GObject.Type
}
interface DomainController_ConstructProps extends DomainDevice_ConstructProps {
}
class DomainController {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    readonly parent: Object
    readonly priv: DomainDevicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainController */
    getIndex(): number
    getPorts(): number
    setAddress(address?: DomainAddress | null): void
    setIndex(index: number): void
    setPorts(ports: number): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainController_ConstructProps)
    _init (config?: DomainController_ConstructProps): void
    static $gtype: GObject.Type
}
interface DomainControllerUsb_ConstructProps extends DomainController_ConstructProps {
}
class DomainControllerUsb {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainController */
    readonly parent: DomainDevice
    readonly priv: DomainControllerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainControllerUsb */
    setMaster(master: DomainControllerUsb, startport: number): void
    setModel(model: DomainControllerUsbModel): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainController */
    getIndex(): number
    getPorts(): number
    setAddress(address?: DomainAddress | null): void
    setIndex(index: number): void
    setPorts(ports: number): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainControllerUsb_ConstructProps)
    _init (config?: DomainControllerUsb_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainControllerUsb
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainControllerUsb
    static newFromXml(xml: string): DomainControllerUsb
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainControllerUsb
    static $gtype: GObject.Type
}
interface DomainCpu_ConstructProps extends CapabilitiesCpu_ConstructProps {
}
class DomainCpu {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpu */
    readonly parent: Object
    readonly priv: CapabilitiesCpuPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpu */
    getMatchPolicy(): DomainCpuMatchPolicy
    getMode(): DomainCpuMode
    setMatchPolicy(policy: DomainCpuMatchPolicy): void
    setMode(mode: DomainCpuMode): void
    setModel(model: DomainCpuModel): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpu */
    addFeature(feature: CapabilitiesCpuFeature): void
    getArch(): string
    getFeatures(): CapabilitiesCpuFeature[]
    getModel(): CapabilitiesCpuModel
    getTopology(): CapabilitiesCpuTopology
    setTopology(topology: CapabilitiesCpuTopology): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainCpu_ConstructProps)
    _init (config?: DomainCpu_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainCpu
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainCpu
    static newFromXml(xml: string): DomainCpu
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainCpu
    static $gtype: GObject.Type
}
interface DomainCpuFeature_ConstructProps extends CapabilitiesCpuFeature_ConstructProps {
}
class DomainCpuFeature {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeature */
    readonly parent: Object
    readonly priv: CapabilitiesCpuFeaturePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeature */
    getPolicy(): DomainCpuFeaturePolicy
    setPolicy(policy: DomainCpuFeaturePolicy): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeature */
    getName(): string
    setName(name: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainCpuFeature_ConstructProps)
    _init (config?: DomainCpuFeature_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainCpuFeature
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainCpuFeature
    static newFromXml(xml: string): DomainCpuFeature
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainCpuFeature
    static $gtype: GObject.Type
}
interface DomainCpuModel_ConstructProps extends CapabilitiesCpuModel_ConstructProps {
}
class DomainCpuModel {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModel */
    readonly parent: Object
    readonly priv: CapabilitiesCpuModelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModel */
    getName(): string
    setName(name: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainCpuModel_ConstructProps)
    _init (config?: DomainCpuModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainCpuModel
    /* Function overloads */
    static new(): DomainCpuModel
    static new(type: GObject.Type, rootName: string, schema: string): DomainCpuModel
    static newFromXml(xml: string): DomainCpuModel
    /* Function overloads */
    static newFromXml(xml: string): DomainCpuModel
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainCpuModel
    static $gtype: GObject.Type
}
interface DomainDevice_ConstructProps extends Object_ConstructProps {
}
class DomainDevice {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    readonly parent: Object
    readonly priv: DomainDevicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDisk */
    getDiskType(): DomainDiskType
    getDriver(): DomainDiskDriver
    getDriverCache(): DomainDiskCacheType
    getDriverFormat(): DomainDiskFormat
    getDriverName(): string
    getDriverType(): string
    getGuestDeviceType(): DomainDiskGuestDeviceType
    getSnapshotType(): DomainDiskSnapshotType
    getSource(): string
    getStartupPolicy(): DomainDiskStartupPolicy
    getTargetBus(): DomainDiskBus
    getTargetDev(): string
    setDriver(driver?: DomainDiskDriver | null): void
    setDriverCache(cacheType: DomainDiskCacheType): void
    setDriverFormat(format: DomainDiskFormat): void
    setDriverName(driverName: string): void
    setDriverType(driverType: string): void
    setGuestDeviceType(type: DomainDiskGuestDeviceType): void
    setReadonly(readonly: boolean): void
    setSnapshotType(type: DomainDiskSnapshotType): void
    setSource(source: string): void
    setStartupPolicy(policy: DomainDiskStartupPolicy): void
    setTargetBus(bus: DomainDiskBus): void
    setTargetDev(dev: string): void
    setType(type: DomainDiskType): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    /* Static methods and pseudo-constructors */
    static new(): DomainDisk
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainDisk
    static newFromXml(xml: string): DomainDisk
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainDisk
    static $gtype: GObject.Type
}
interface DomainDiskDriver_ConstructProps extends Object_ConstructProps {
}
class DomainDiskDriver {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriver */
    getCache(): DomainDiskCacheType
    getCopyOnRead(): boolean
    getDiscard(): DomainDiskDriverDiscard
    getErrorPolicy(): DomainDiskDriverErrorPolicy
    getFormat(): DomainDiskFormat
    getIoPolicy(): DomainDiskDriverIoPolicy
    getName(): string
    setCache(cacheType: DomainDiskCacheType): void
    setCopyOnRead(copyOnRead: boolean): void
    setDiscard(discard: DomainDiskDriverDiscard): void
    setErrorPolicy(policy: DomainDiskDriverErrorPolicy): void
    setFormat(format: DomainDiskFormat): void
    setIoPolicy(policy: DomainDiskDriverIoPolicy): void
    setName(name: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainDiskDriver_ConstructProps)
    _init (config?: DomainDiskDriver_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainDiskDriver
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainDiskDriver
    static newFromXml(xml: string): DomainDiskDriver
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainDiskDriver
    static $gtype: GObject.Type
}
interface DomainFilesys_ConstructProps extends DomainDevice_ConstructProps {
}
class DomainFilesys {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    readonly parent: Object
    readonly priv: DomainDevicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainFilesys */
    setAccessType(type: DomainFilesysAccessType): void
    setDriverFormat(format: DomainDiskFormat): void
    setDriverType(type: DomainFilesysDriverType): void
    setRamUsage(bytes: number): void
    setReadonly(readonly: boolean): void
    setSource(source: string): void
    setTarget(target: string): void
    setType(type: DomainFilesysType): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainFilesys_ConstructProps)
    _init (config?: DomainFilesys_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainFilesys
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainFilesys
    static newFromXml(xml: string): DomainFilesys
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainFilesys
    static $gtype: GObject.Type
}
interface DomainGraphics_ConstructProps extends DomainDevice_ConstructProps {
}
class DomainGraphics {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    readonly parent: Object
    readonly priv: DomainDevicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainGraphics_ConstructProps)
    _init (config?: DomainGraphics_ConstructProps): void
    static $gtype: GObject.Type
}
interface DomainGraphicsDesktop_ConstructProps extends DomainGraphics_ConstructProps {
}
class DomainGraphicsDesktop {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphics */
    readonly parent: DomainDevice
    readonly priv: DomainGraphicsPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktop */
    getDisplay(): string
    getFullscreen(): boolean
    setDisplay(disp: string): void
    setFullscreen(fullscreen: boolean): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainGraphicsDesktop_ConstructProps)
    _init (config?: DomainGraphicsDesktop_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainGraphicsDesktop
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainGraphicsDesktop
    static newFromXml(xml: string): DomainGraphicsDesktop
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainGraphicsDesktop
    static $gtype: GObject.Type
}
interface DomainGraphicsRdp_ConstructProps extends DomainGraphics_ConstructProps {
}
class DomainGraphicsRdp {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphics */
    readonly parent: DomainDevice
    readonly priv: DomainGraphicsPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsRdp */
    getMultiUser(): boolean
    getPort(): number
    getReplaceUser(): boolean
    setAutoport(autoport: boolean): void
    setMultiUser(multiUser: boolean): void
    setPort(port: number): void
    setReplaceUser(replaceUser: boolean): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainGraphicsRdp_ConstructProps)
    _init (config?: DomainGraphicsRdp_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainGraphicsRdp
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainGraphicsRdp
    static newFromXml(xml: string): DomainGraphicsRdp
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainGraphicsRdp
    static $gtype: GObject.Type
}
interface DomainGraphicsSdl_ConstructProps extends DomainGraphics_ConstructProps {
}
class DomainGraphicsSdl {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphics */
    readonly parent: DomainDevice
    readonly priv: DomainGraphicsPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSdl */
    setDisplay(disp: string): void
    setFullscreen(fullscreen: boolean): void
    setXauthority(path: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainGraphicsSdl_ConstructProps)
    _init (config?: DomainGraphicsSdl_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainGraphicsSdl
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainGraphicsSdl
    static newFromXml(xml: string): DomainGraphicsSdl
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainGraphicsSdl
    static $gtype: GObject.Type
}
interface DomainGraphicsSpice_ConstructProps extends DomainGraphics_ConstructProps {
}
class DomainGraphicsSpice {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphics */
    readonly parent: DomainDevice
    readonly priv: DomainGraphicsPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSpice */
    getImageCompression(): DomainGraphicsSpiceImageCompression
    getPort(): number
    setAutoport(autoport: boolean): void
    setGl(gl: boolean): void
    setImageCompression(compression: DomainGraphicsSpiceImageCompression): void
    setPassword(password: string): void
    setPort(port: number): void
    setTlsPort(port: number): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainGraphicsSpice_ConstructProps)
    _init (config?: DomainGraphicsSpice_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainGraphicsSpice
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainGraphicsSpice
    static newFromXml(xml: string): DomainGraphicsSpice
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainGraphicsSpice
    static $gtype: GObject.Type
}
interface DomainGraphicsVnc_ConstructProps extends DomainGraphics_ConstructProps {
}
class DomainGraphicsVnc {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphics */
    readonly parent: DomainDevice
    readonly priv: DomainGraphicsPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsVnc */
    getPort(): number
    getSocket(): string
    setAutoport(autoport: boolean): void
    setPassword(password: string): void
    setPort(port: number): void
    setSocket(socket: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainGraphicsVnc_ConstructProps)
    _init (config?: DomainGraphicsVnc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainGraphicsVnc
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainGraphicsVnc
    static newFromXml(xml: string): DomainGraphicsVnc
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainGraphicsVnc
    static $gtype: GObject.Type
}
interface DomainHostdev_ConstructProps extends DomainDevice_ConstructProps {
}
class DomainHostdev {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    readonly parent: Object
    readonly priv: DomainDevicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdev */
    getBootOrder(): number
    getReadonly(): boolean
    getShareable(): boolean
    setBootOrder(order: number): void
    setReadonly(readonly: boolean): void
    setShareable(shareable: boolean): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainHostdev_ConstructProps)
    _init (config?: DomainHostdev_ConstructProps): void
    static $gtype: GObject.Type
}
interface DomainHostdevPci_ConstructProps extends DomainHostdev_ConstructProps {
}
class DomainHostdevPci {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdev */
    readonly parent: DomainDevice
    readonly priv: DomainHostdevPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPci */
    getAddress(): DomainAddressPci
    getManaged(): boolean
    getRomBar(): boolean
    getRomFile(): string
    setAddress(address: DomainAddressPci): void
    setManaged(managed: boolean): void
    setRomBar(bar: boolean): void
    setRomFile(file: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdev */
    getBootOrder(): number
    getReadonly(): boolean
    getShareable(): boolean
    setBootOrder(order: number): void
    setReadonly(readonly: boolean): void
    setShareable(shareable: boolean): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainHostdevPci_ConstructProps)
    _init (config?: DomainHostdevPci_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainHostdevPci
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainHostdevPci
    static newFromXml(xml: string): DomainHostdevPci
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainHostdevPci
    static $gtype: GObject.Type
}
interface DomainInput_ConstructProps extends DomainDevice_ConstructProps {
}
class DomainInput {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    readonly parent: Object
    readonly priv: DomainDevicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInput */
    getBus(): DomainInputBus
    getDeviceType(): DomainInputDeviceType
    setBus(bus: DomainInputBus): void
    setDeviceType(type: DomainInputDeviceType): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainInput_ConstructProps)
    _init (config?: DomainInput_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainInput
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainInput
    static newFromXml(xml: string): DomainInput
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainInput
    static $gtype: GObject.Type
}
interface DomainInterface_ConstructProps extends DomainDevice_ConstructProps {
}
class DomainInterface {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    readonly parent: Object
    readonly priv: DomainDevicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface */
    getFilterref(): DomainInterfaceFilterref
    getIfname(): string
    getLinkState(): DomainInterfaceLinkState
    getMac(): string
    getModel(): string
    setFilterref(filterref?: DomainInterfaceFilterref | null): void
    setIfname(ifname: string): void
    setLinkState(state: DomainInterfaceLinkState): void
    setMac(macAddress: string): void
    setModel(model: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
interface DomainInterfaceBridge_ConstructProps extends DomainInterface_ConstructProps {
}
class DomainInterfaceBridge {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface */
    readonly parent: DomainDevice
    readonly priv: DomainInterfacePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceBridge */
    setSource(brname: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface */
    getFilterref(): DomainInterfaceFilterref
    getIfname(): string
    getLinkState(): DomainInterfaceLinkState
    getMac(): string
    getModel(): string
    setFilterref(filterref?: DomainInterfaceFilterref | null): void
    setIfname(ifname: string): void
    setLinkState(state: DomainInterfaceLinkState): void
    setMac(macAddress: string): void
    setModel(model: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainInterfaceBridge_ConstructProps)
    _init (config?: DomainInterfaceBridge_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainInterfaceBridge
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainInterfaceBridge
    static newFromXml(xml: string): DomainInterfaceBridge
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainInterfaceBridge
    static $gtype: GObject.Type
}
interface DomainInterfaceFilterref_ConstructProps extends Object_ConstructProps {
}
class DomainInterfaceFilterref {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterref */
    addParameter(parameter: DomainInterfaceFilterrefParameter): void
    getName(): string
    getParameters(): DomainInterfaceFilterrefParameter[]
    setName(filter: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainInterfaceFilterref_ConstructProps)
    _init (config?: DomainInterfaceFilterref_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainInterfaceFilterref
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainInterfaceFilterref
    static newFromXml(xml: string): DomainInterfaceFilterref
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainInterfaceFilterref
    static $gtype: GObject.Type
}
interface DomainInterfaceFilterrefParameter_ConstructProps extends Object_ConstructProps {
}
class DomainInterfaceFilterrefParameter {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameter */
    getName(): string
    getValue(): string
    setName(name: string): void
    setValue(value: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainInterfaceFilterrefParameter_ConstructProps)
    _init (config?: DomainInterfaceFilterrefParameter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainInterfaceFilterrefParameter
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainInterfaceFilterrefParameter
    static newFromXml(xml: string): DomainInterfaceFilterrefParameter
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainInterfaceFilterrefParameter
    static $gtype: GObject.Type
}
interface DomainInterfaceNetwork_ConstructProps extends DomainInterface_ConstructProps {
}
class DomainInterfaceNetwork {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface */
    readonly parent: DomainDevice
    readonly priv: DomainInterfacePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceNetwork */
    setSource(source: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface */
    getFilterref(): DomainInterfaceFilterref
    getIfname(): string
    getLinkState(): DomainInterfaceLinkState
    getMac(): string
    getModel(): string
    setFilterref(filterref?: DomainInterfaceFilterref | null): void
    setIfname(ifname: string): void
    setLinkState(state: DomainInterfaceLinkState): void
    setMac(macAddress: string): void
    setModel(model: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainInterfaceNetwork_ConstructProps)
    _init (config?: DomainInterfaceNetwork_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainInterfaceNetwork
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainInterfaceNetwork
    static newFromXml(xml: string): DomainInterfaceNetwork
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainInterfaceNetwork
    static $gtype: GObject.Type
}
interface DomainInterfaceUser_ConstructProps extends DomainInterface_ConstructProps {
}
class DomainInterfaceUser {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface */
    readonly parent: DomainDevice
    readonly priv: DomainInterfacePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface */
    getFilterref(): DomainInterfaceFilterref
    getIfname(): string
    getLinkState(): DomainInterfaceLinkState
    getMac(): string
    getModel(): string
    setFilterref(filterref?: DomainInterfaceFilterref | null): void
    setIfname(ifname: string): void
    setLinkState(state: DomainInterfaceLinkState): void
    setMac(macAddress: string): void
    setModel(model: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainInterfaceUser_ConstructProps)
    _init (config?: DomainInterfaceUser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainInterfaceUser
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainInterfaceUser
    static newFromXml(xml: string): DomainInterfaceUser
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainInterfaceUser
    static $gtype: GObject.Type
}
interface DomainMemballoon_ConstructProps extends DomainDevice_ConstructProps {
}
class DomainMemballoon {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    readonly parent: Object
    readonly priv: DomainDevicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainMemballoon */
    setModel(model: DomainMemballoonModel): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainMemballoon_ConstructProps)
    _init (config?: DomainMemballoon_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainMemballoon
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainMemballoon
    static newFromXml(xml: string): DomainMemballoon
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainMemballoon
    static $gtype: GObject.Type
}
interface DomainOs_ConstructProps extends Object_ConstructProps {
}
class DomainOs {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainOs */
    biosEnableSerial(enable: boolean): void
    enableBootMenu(enable: boolean): void
    getArch(): string
    getBootDevices(): DomainOsBootDevice[]
    getFirmware(): DomainOsFirmware
    getMachine(): string
    getOsType(): DomainOsType
    setArch(arch: string): void
    setBootDevices(bootDevices: DomainOsBootDevice[]): void
    setCmdline(cmdline?: string | null): void
    setFirmware(firmware: DomainOsFirmware): void
    setInit(init?: string | null): void
    setKernel(kernel?: string | null): void
    setLoader(loader?: string | null): void
    setMachine(machine: string): void
    setOsType(type: DomainOsType): void
    setRamdisk(ramdisk?: string | null): void
    setSmbiosMode(mode: DomainOsSmBiosMode): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainOs_ConstructProps)
    _init (config?: DomainOs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainOs
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainOs
    static newFromXml(xml: string): DomainOs
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainOs
    static $gtype: GObject.Type
}
interface DomainParallel_ConstructProps extends DomainChardev_ConstructProps {
}
class DomainParallel {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev */
    readonly parent: DomainDevice
    readonly priv: DomainChardevPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev */
    getSource(): DomainChardevSource
    setSource(source: DomainChardevSource): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainParallel_ConstructProps)
    _init (config?: DomainParallel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainParallel
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainParallel
    static newFromXml(xml: string): DomainParallel
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainParallel
    static $gtype: GObject.Type
}
interface DomainPowerManagement_ConstructProps extends Object_ConstructProps {
}
class DomainPowerManagement {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainPowerManagement */
    setDiskSuspendEnabled(enabled: boolean): void
    setMemSuspendEnabled(enabled: boolean): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainPowerManagement_ConstructProps)
    _init (config?: DomainPowerManagement_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainPowerManagement
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainPowerManagement
    static newFromXml(xml: string): DomainPowerManagement
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainPowerManagement
    static $gtype: GObject.Type
}
interface DomainRedirdev_ConstructProps extends DomainChardev_ConstructProps {
}
class DomainRedirdev {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev */
    readonly parent: DomainDevice
    readonly priv: DomainChardevPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainRedirdev */
    setAddress(address?: DomainAddress | null): void
    setBus(bus: DomainRedirdevBus): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev */
    getSource(): DomainChardevSource
    setSource(source: DomainChardevSource): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainRedirdev_ConstructProps)
    _init (config?: DomainRedirdev_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainRedirdev
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainRedirdev
    static newFromXml(xml: string): DomainRedirdev
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainRedirdev
    static $gtype: GObject.Type
}
interface DomainSeclabel_ConstructProps extends Object_ConstructProps {
}
class DomainSeclabel {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSeclabel */
    setBaselabel(label?: string | null): void
    setLabel(label?: string | null): void
    setModel(model: string): void
    setType(type: DomainSeclabelType): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainSeclabel_ConstructProps)
    _init (config?: DomainSeclabel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainSeclabel
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainSeclabel
    static newFromXml(xml: string): DomainSeclabel
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainSeclabel
    static $gtype: GObject.Type
}
interface DomainSerial_ConstructProps extends DomainChardev_ConstructProps {
}
class DomainSerial {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev */
    readonly parent: DomainDevice
    readonly priv: DomainChardevPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev */
    getSource(): DomainChardevSource
    setSource(source: DomainChardevSource): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainSerial_ConstructProps)
    _init (config?: DomainSerial_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainSerial
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainSerial
    static newFromXml(xml: string): DomainSerial
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainSerial
    static $gtype: GObject.Type
}
interface DomainSmartcard_ConstructProps extends DomainDevice_ConstructProps {
}
class DomainSmartcard {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    readonly parent: Object
    readonly priv: DomainDevicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainSmartcard_ConstructProps)
    _init (config?: DomainSmartcard_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static setAddress(redirdev: DomainRedirdev, address?: DomainAddress | null): void
    static $gtype: GObject.Type
}
interface DomainSmartcardHost_ConstructProps extends DomainSmartcard_ConstructProps {
}
class DomainSmartcardHost {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcard */
    readonly parent: DomainDevice
    readonly priv: DomainSmartcardPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainSmartcardHost_ConstructProps)
    _init (config?: DomainSmartcardHost_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainSmartcardHost
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainSmartcardHost
    static newFromXml(xml: string): DomainSmartcardHost
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainSmartcardHost
    static $gtype: GObject.Type
}
interface DomainSmartcardHostCertificates_ConstructProps extends DomainSmartcard_ConstructProps {
}
class DomainSmartcardHostCertificates {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcard */
    readonly parent: DomainDevice
    readonly priv: DomainSmartcardPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificates */
    setCertificates(cert1?: string | null, cert2?: string | null, cert3?: string | null): void
    setDatabase(path?: string | null): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainSmartcardHostCertificates_ConstructProps)
    _init (config?: DomainSmartcardHostCertificates_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainSmartcardHostCertificates
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainSmartcardHostCertificates
    static newFromXml(xml: string): DomainSmartcardHostCertificates
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainSmartcardHostCertificates
    static $gtype: GObject.Type
}
interface DomainSmartcardPassthrough_ConstructProps extends DomainSmartcard_ConstructProps {
}
class DomainSmartcardPassthrough {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcard */
    readonly parent: DomainDevice
    readonly priv: DomainSmartcardPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardPassthrough */
    setSource(source: DomainChardevSource): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainSmartcardPassthrough_ConstructProps)
    _init (config?: DomainSmartcardPassthrough_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainSmartcardPassthrough
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainSmartcardPassthrough
    static newFromXml(xml: string): DomainSmartcardPassthrough
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainSmartcardPassthrough
    static $gtype: GObject.Type
}
interface DomainSnapshot_ConstructProps extends Object_ConstructProps {
}
class DomainSnapshot {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshot */
    addDisk(disk: DomainSnapshotDisk): void
    getCreationTime(): number
    getDescription(): string
    getDisks(): DomainSnapshotDisk[]
    getDomain(): Domain
    getMemoryFile(): string
    getMemoryState(): DomainSnapshotMemoryState
    getName(): string
    getParent(): string
    getState(): DomainSnapshotDomainState
    setDescription(description: string): void
    setDisks(disks: DomainSnapshotDisk[]): void
    setMemoryFile(filename: string): void
    setMemoryState(state: DomainSnapshotMemoryState): void
    setName(name: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    /* Static methods and pseudo-constructors */
    static new(): DomainSnapshot
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainSnapshot
    static newFromXml(xml: string): DomainSnapshot
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainSnapshot
    static $gtype: GObject.Type
}
interface DomainSnapshotDisk_ConstructProps extends Object_ConstructProps {
}
class DomainSnapshotDisk {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDisk */
    getDriverFormat(): DomainDiskFormat
    getName(): string
    getSnapshotType(): DomainDiskSnapshotType
    getSourceFile(): string
    setDriverFormat(format: DomainDiskFormat): void
    setName(name: string): void
    setSnapshotType(type: DomainDiskSnapshotType): void
    setSourceFile(filename: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainSnapshotDisk_ConstructProps)
    _init (config?: DomainSnapshotDisk_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainSnapshotDisk
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainSnapshotDisk
    static newFromXml(xml: string): DomainSnapshotDisk
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainSnapshotDisk
    static $gtype: GObject.Type
}
interface DomainSound_ConstructProps extends DomainDevice_ConstructProps {
}
class DomainSound {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    readonly parent: Object
    readonly priv: DomainDevicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSound */
    setModel(model: DomainSoundModel): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainSound_ConstructProps)
    _init (config?: DomainSound_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainSound
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainSound
    static newFromXml(xml: string): DomainSound
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainSound
    static $gtype: GObject.Type
}
interface DomainTimer_ConstructProps extends Object_ConstructProps {
}
class DomainTimer {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer */
    getPresent(): boolean
    getTickPolicy(): DomainTimerTickPolicy
    setPresent(present: boolean): void
    setTickPolicy(policy: DomainTimerTickPolicy): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainTimer_ConstructProps)
    _init (config?: DomainTimer_ConstructProps): void
    static $gtype: GObject.Type
}
interface DomainTimerHpet_ConstructProps extends DomainTimer_ConstructProps {
}
class DomainTimerHpet {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer */
    readonly parent: Object
    readonly priv: DomainTimerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer */
    getPresent(): boolean
    getTickPolicy(): DomainTimerTickPolicy
    setPresent(present: boolean): void
    setTickPolicy(policy: DomainTimerTickPolicy): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainTimerHpet_ConstructProps)
    _init (config?: DomainTimerHpet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainTimerHpet
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainTimerHpet
    static newFromXml(xml: string): DomainTimerHpet
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainTimerHpet
    static $gtype: GObject.Type
}
interface DomainTimerPit_ConstructProps extends DomainTimer_ConstructProps {
}
class DomainTimerPit {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer */
    readonly parent: Object
    readonly priv: DomainTimerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer */
    getPresent(): boolean
    getTickPolicy(): DomainTimerTickPolicy
    setPresent(present: boolean): void
    setTickPolicy(policy: DomainTimerTickPolicy): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainTimerPit_ConstructProps)
    _init (config?: DomainTimerPit_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainTimerPit
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainTimerPit
    static newFromXml(xml: string): DomainTimerPit
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainTimerPit
    static $gtype: GObject.Type
}
interface DomainTimerRtc_ConstructProps extends DomainTimer_ConstructProps {
}
class DomainTimerRtc {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer */
    readonly parent: Object
    readonly priv: DomainTimerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer */
    getPresent(): boolean
    getTickPolicy(): DomainTimerTickPolicy
    setPresent(present: boolean): void
    setTickPolicy(policy: DomainTimerTickPolicy): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainTimerRtc_ConstructProps)
    _init (config?: DomainTimerRtc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainTimerRtc
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainTimerRtc
    static newFromXml(xml: string): DomainTimerRtc
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainTimerRtc
    static $gtype: GObject.Type
}
interface DomainVideo_ConstructProps extends DomainDevice_ConstructProps {
}
class DomainVideo {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    readonly parent: Object
    readonly priv: DomainDevicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainVideo */
    getModel(): DomainVideoModel
    setAccel3d(accel3d: boolean): void
    setHeads(headCount: number): void
    setModel(model: DomainVideoModel): void
    setRam(kbytes: number): void
    setVgamem(kbytes: number): void
    setVram(kbytes: number): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice */
    getAlias(): string
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: DomainVideo_ConstructProps)
    _init (config?: DomainVideo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DomainVideo
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): DomainVideo
    static newFromXml(xml: string): DomainVideo
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): DomainVideo
    static $gtype: GObject.Type
}
interface Interface_ConstructProps extends Object_ConstructProps {
}
class Interface {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    /* Static methods and pseudo-constructors */
    static new(): Interface
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): Interface
    static newFromXml(xml: string): Interface
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): Interface
    static $gtype: GObject.Type
}
interface Network_ConstructProps extends Object_ConstructProps {
}
class Network {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    /* Static methods and pseudo-constructors */
    static new(): Network
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): Network
    static newFromXml(xml: string): Network
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): Network
    static $gtype: GObject.Type
}
interface NetworkFilter_ConstructProps extends Object_ConstructProps {
}
class NetworkFilter {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    /* Static methods and pseudo-constructors */
    static new(): NetworkFilter
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): NetworkFilter
    static newFromXml(xml: string): NetworkFilter
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): NetworkFilter
    static $gtype: GObject.Type
}
interface NodeDevice_ConstructProps extends Object_ConstructProps {
}
class NodeDevice {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    /* Static methods and pseudo-constructors */
    static new(): NodeDevice
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): NodeDevice
    static newFromXml(xml: string): NodeDevice
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): NodeDevice
    static $gtype: GObject.Type
}
interface Object_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    node?: object
    schema?: string
}
class Object {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: GObject.Type, rootName: string, schema: string): Object
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): Object
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
interface Secret_ConstructProps extends Object_ConstructProps {
}
class Secret {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    /* Static methods and pseudo-constructors */
    static new(): Secret
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): Secret
    static newFromXml(xml: string): Secret
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): Secret
    static $gtype: GObject.Type
}
interface StoragePermissions_ConstructProps extends Object_ConstructProps {
}
class StoragePermissions {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.StoragePermissions */
    getGroup(): number
    getLabel(): string
    getMode(): number
    getOwner(): number
    setGroup(group: number): void
    setLabel(label?: string | null): void
    setMode(mode: number): void
    setOwner(owner: number): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: StoragePermissions_ConstructProps)
    _init (config?: StoragePermissions_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StoragePermissions
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): StoragePermissions
    static newFromXml(xml: string): StoragePermissions
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): StoragePermissions
    static $gtype: GObject.Type
}
interface StoragePool_ConstructProps extends Object_ConstructProps {
}
class StoragePool {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.StoragePool */
    getAllocation(): number
    getAvailable(): number
    getCapacity(): number
    getName(): string
    getPoolType(): StoragePoolType
    getSource(): StoragePoolSource
    getTarget(): StoragePoolTarget
    getUuid(): string
    setAllocation(allocation: number): void
    setAvailable(available: number): void
    setCapacity(capacity: number): void
    setName(name?: string | null): void
    setPoolType(type: StoragePoolType): void
    setSource(source?: StoragePoolSource | null): void
    setTarget(target?: StoragePoolTarget | null): void
    setUuid(uuid?: string | null): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    /* Static methods and pseudo-constructors */
    static new(): StoragePool
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): StoragePool
    static newFromXml(xml: string): StoragePool
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): StoragePool
    static $gtype: GObject.Type
}
interface StoragePoolSource_ConstructProps extends Object_ConstructProps {
}
class StoragePoolSource {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolSource */
    getAdapter(): string
    getDevicePath(): string
    getDirectory(): string
    getFormat(): string
    getHost(): string
    getName(): string
    getProduct(): string
    getVendor(): string
    setAdapter(adapter: string): void
    setDevicePath(devicePath: string): void
    setDirectory(directory: string): void
    setFormat(format: string): void
    setHost(host: string): void
    setName(name?: string | null): void
    setProduct(product: string): void
    setVendor(vendor: string): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: StoragePoolSource_ConstructProps)
    _init (config?: StoragePoolSource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StoragePoolSource
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): StoragePoolSource
    static newFromXml(xml: string): StoragePoolSource
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): StoragePoolSource
    static $gtype: GObject.Type
}
interface StoragePoolTarget_ConstructProps extends Object_ConstructProps {
}
class StoragePoolTarget {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolTarget */
    getPath(): string
    getPermissions(): StoragePermissions
    setPath(path?: string | null): void
    setPermissions(perms: StoragePermissions): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: StoragePoolTarget_ConstructProps)
    _init (config?: StoragePoolTarget_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StoragePoolTarget
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): StoragePoolTarget
    static newFromXml(xml: string): StoragePoolTarget
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): StoragePoolTarget
    static $gtype: GObject.Type
}
interface StorageVol_ConstructProps extends Object_ConstructProps {
}
class StorageVol {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.StorageVol */
    setAllocation(allocation: number): void
    setBackingStore(backingStore?: StorageVolBackingStore | null): void
    setCapacity(capacity: number): void
    setName(name?: string | null): void
    setTarget(target?: StorageVolTarget | null): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    /* Static methods and pseudo-constructors */
    static new(): StorageVol
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): StorageVol
    static newFromXml(xml: string): StorageVol
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): StorageVol
    static $gtype: GObject.Type
}
interface StorageVolBackingStore_ConstructProps extends Object_ConstructProps {
}
class StorageVolBackingStore {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolBackingStore */
    setFormat(format: string): void
    setPath(path?: string | null): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: StorageVolBackingStore_ConstructProps)
    _init (config?: StorageVolBackingStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StorageVolBackingStore
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): StorageVolBackingStore
    static newFromXml(xml: string): StorageVolBackingStore
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): StorageVolBackingStore
    static $gtype: GObject.Type
}
interface StorageVolTarget_ConstructProps extends Object_ConstructProps {
}
class StorageVolTarget {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolTarget */
    setCompat(compat?: string | null): void
    setFeatures(features: number): void
    setFormat(format: string): void
    setPermissions(perms?: StoragePermissions | null): void
    /* Methods of LibvirtGConfig-1.0.LibvirtGConfig.Object */
    getSchema(): string
    toXml(): string
    validate(): void
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
    constructor (config?: StorageVolTarget_ConstructProps)
    _init (config?: StorageVolTarget_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StorageVolTarget
    /* Function overloads */
    static new(type: GObject.Type, rootName: string, schema: string): StorageVolTarget
    static newFromXml(xml: string): StorageVolTarget
    /* Function overloads */
    static newFromXml(type: GObject.Type, rootName: string, schema: string, xml: string): StorageVolTarget
    static $gtype: GObject.Type
}
abstract class CapabilitiesClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
abstract class CapabilitiesCpuClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuClass */
    readonly parentClass: ObjectClass
    readonly getFeatures: (cpu: CapabilitiesCpu) => CapabilitiesCpuFeature[]
    readonly padding: object[]
    static name: string
}
abstract class CapabilitiesCpuFeatureClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeatureClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
class CapabilitiesCpuFeaturePrivate {
    static name: string
}
abstract class CapabilitiesCpuModelClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModelClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
class CapabilitiesCpuModelPrivate {
    static name: string
}
class CapabilitiesCpuPrivate {
    static name: string
}
abstract class CapabilitiesCpuTopologyClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuTopologyClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
class CapabilitiesCpuTopologyPrivate {
    static name: string
}
abstract class CapabilitiesGuestArchClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestArchClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
class CapabilitiesGuestArchPrivate {
    static name: string
}
abstract class CapabilitiesGuestClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
abstract class CapabilitiesGuestDomainClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestDomainClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
class CapabilitiesGuestDomainPrivate {
    static name: string
}
abstract class CapabilitiesGuestFeatureClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestFeatureClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
class CapabilitiesGuestFeaturePrivate {
    static name: string
}
class CapabilitiesGuestPrivate {
    static name: string
}
abstract class CapabilitiesHostClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
class CapabilitiesHostPrivate {
    static name: string
}
abstract class CapabilitiesHostSecModelClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostSecModelClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
class CapabilitiesHostSecModelPrivate {
    static name: string
}
class CapabilitiesPrivate {
    static name: string
}
abstract class DomainAddressClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
abstract class DomainAddressPciClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressPciClass */
    readonly parentClass: DomainAddressClass
    readonly padding: object[]
    static name: string
}
class DomainAddressPciPrivate {
    static name: string
}
class DomainAddressPrivate {
    static name: string
}
abstract class DomainAddressUsbClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressUsbClass */
    readonly parentClass: DomainAddressClass
    readonly padding: object[]
    static name: string
}
class DomainAddressUsbPrivate {
    static name: string
}
abstract class DomainCapabilitiesClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
abstract class DomainCapabilitiesOsClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOsClass */
    readonly parentClass: ObjectClass
    readonly getFirmwares: (os: DomainCapabilitiesOs) => DomainOsFirmware[]
    readonly padding: object[]
    static name: string
}
class DomainCapabilitiesOsPrivate {
    static name: string
}
class DomainCapabilitiesPrivate {
    static name: string
}
abstract class DomainChannelClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChannelClass */
    readonly parentClass: DomainChardevClass
    readonly padding: object[]
    static name: string
}
class DomainChannelPrivate {
    static name: string
}
abstract class DomainChardevClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevClass */
    readonly parentClass: DomainDeviceClass
    readonly padding: object[]
    static name: string
}
class DomainChardevPrivate {
    static name: string
}
abstract class DomainChardevSourceClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
class DomainChardevSourcePrivate {
    static name: string
}
abstract class DomainChardevSourcePtyClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourcePtyClass */
    readonly parentClass: DomainChardevSourceClass
    readonly padding: object[]
    static name: string
}
class DomainChardevSourcePtyPrivate {
    static name: string
}
abstract class DomainChardevSourceSpicePortClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpicePortClass */
    readonly parentClass: DomainChardevSourceClass
    readonly padding: object[]
    static name: string
}
class DomainChardevSourceSpicePortPrivate {
    static name: string
}
abstract class DomainChardevSourceSpiceVmcClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpiceVmcClass */
    readonly parentClass: DomainChardevSourceClass
    readonly padding: object[]
    static name: string
}
class DomainChardevSourceSpiceVmcPrivate {
    static name: string
}
abstract class DomainChardevSourceUnixClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceUnixClass */
    readonly parentClass: DomainChardevSourceClass
    readonly padding: object[]
    static name: string
}
class DomainChardevSourceUnixPrivate {
    static name: string
}
abstract class DomainClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
abstract class DomainClockClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainClockClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
class DomainClockPrivate {
    static name: string
}
abstract class DomainConsoleClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainConsoleClass */
    readonly parentClass: DomainChardevClass
    readonly padding: object[]
    static name: string
}
class DomainConsolePrivate {
    static name: string
}
abstract class DomainControllerClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainControllerClass */
    readonly parentClass: DomainDeviceClass
    readonly padding: object[]
    static name: string
}
class DomainControllerPrivate {
    static name: string
}
abstract class DomainControllerUsbClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainControllerUsbClass */
    readonly parentClass: DomainControllerClass
    readonly padding: object[]
    static name: string
}
class DomainControllerUsbPrivate {
    static name: string
}
abstract class DomainCpuClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuClass */
    readonly parentClass: CapabilitiesCpuClass
    readonly padding: object[]
    static name: string
}
abstract class DomainCpuFeatureClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeatureClass */
    readonly parentClass: CapabilitiesCpuClass
    readonly padding: object[]
    static name: string
}
class DomainCpuFeaturePrivate {
    static name: string
}
abstract class DomainCpuModelClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuModelClass */
    readonly parentClass: CapabilitiesCpuModelClass
    readonly padding: object[]
    static name: string
}
class DomainCpuModelPrivate {
    static name: string
}
class DomainCpuPrivate {
    static name: string
}
abstract class DomainDeviceClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDeviceClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
class DomainDevicePrivate {
    static name: string
}
abstract class DomainDiskClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskClass */
    readonly parentClass: DomainDeviceClass
    readonly padding: object[]
    static name: string
}
abstract class DomainDiskDriverClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriverClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
class DomainDiskDriverPrivate {
    static name: string
}
class DomainDiskPrivate {
    static name: string
}
abstract class DomainFilesysClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainFilesysClass */
    readonly parentClass: DomainDeviceClass
    readonly padding: object[]
    static name: string
}
class DomainFilesysPrivate {
    static name: string
}
abstract class DomainGraphicsClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsClass */
    readonly parentClass: DomainDeviceClass
    readonly padding: object[]
    static name: string
}
abstract class DomainGraphicsDesktopClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktopClass */
    readonly parentClass: DomainGraphicsClass
    readonly padding: object[]
    static name: string
}
class DomainGraphicsDesktopPrivate {
    static name: string
}
class DomainGraphicsPrivate {
    static name: string
}
abstract class DomainGraphicsRdpClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsRdpClass */
    readonly parentClass: DomainGraphicsClass
    readonly padding: object[]
    static name: string
}
class DomainGraphicsRdpPrivate {
    static name: string
}
abstract class DomainGraphicsSdlClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSdlClass */
    readonly parentClass: DomainGraphicsClass
    readonly padding: object[]
    static name: string
}
class DomainGraphicsSdlPrivate {
    static name: string
}
abstract class DomainGraphicsSpiceClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSpiceClass */
    readonly parentClass: DomainGraphicsClass
    readonly padding: object[]
    static name: string
}
class DomainGraphicsSpicePrivate {
    static name: string
}
abstract class DomainGraphicsVncClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsVncClass */
    readonly parentClass: DomainGraphicsClass
    readonly padding: object[]
    static name: string
}
class DomainGraphicsVncPrivate {
    static name: string
}
abstract class DomainHostdevClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevClass */
    readonly parentClass: DomainDeviceClass
    readonly padding: object[]
    static name: string
}
abstract class DomainHostdevPciClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPciClass */
    readonly parentClass: DomainHostdevClass
    readonly padding: object[]
    static name: string
}
class DomainHostdevPciPrivate {
    static name: string
}
class DomainHostdevPrivate {
    static name: string
}
abstract class DomainInputClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInputClass */
    readonly parentClass: DomainDeviceClass
    readonly padding: object[]
    static name: string
}
class DomainInputPrivate {
    static name: string
}
abstract class DomainInterfaceBridgeClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceBridgeClass */
    readonly parentClass: DomainInterfaceClass
    readonly padding: object[]
    static name: string
}
class DomainInterfaceBridgePrivate {
    static name: string
}
abstract class DomainInterfaceClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceClass */
    readonly parentClass: DomainDeviceClass
    readonly padding: object[]
    static name: string
}
abstract class DomainInterfaceFilterrefClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
abstract class DomainInterfaceFilterrefParameterClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameterClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
class DomainInterfaceFilterrefParameterPrivate {
    static name: string
}
class DomainInterfaceFilterrefPrivate {
    static name: string
}
abstract class DomainInterfaceNetworkClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceNetworkClass */
    readonly parentClass: DomainInterfaceClass
    readonly padding: object[]
    static name: string
}
class DomainInterfaceNetworkPrivate {
    static name: string
}
class DomainInterfacePrivate {
    static name: string
}
abstract class DomainInterfaceUserClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceUserClass */
    readonly parentClass: DomainInterfaceClass
    readonly padding: object[]
    static name: string
}
class DomainInterfaceUserPrivate {
    static name: string
}
abstract class DomainMemballoonClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainMemballoonClass */
    readonly parentClass: DomainDeviceClass
    readonly padding: object[]
    static name: string
}
class DomainMemballoonPrivate {
    static name: string
}
abstract class DomainOsClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainOsClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
class DomainOsPrivate {
    static name: string
}
abstract class DomainParallelClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainParallelClass */
    readonly parentClass: DomainChardevClass
    readonly padding: object[]
    static name: string
}
class DomainParallelPrivate {
    static name: string
}
abstract class DomainPowerManagementClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainPowerManagementClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
class DomainPowerManagementPrivate {
    static name: string
}
class DomainPrivate {
    static name: string
}
abstract class DomainRedirdevClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainRedirdevClass */
    readonly parentClass: DomainChardevClass
    readonly padding: object[]
    static name: string
}
class DomainRedirdevPrivate {
    static name: string
}
abstract class DomainSeclabelClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSeclabelClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
class DomainSeclabelPrivate {
    static name: string
}
abstract class DomainSerialClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSerialClass */
    readonly parentClass: DomainChardevClass
    readonly padding: object[]
    static name: string
}
class DomainSerialPrivate {
    static name: string
}
abstract class DomainSmartcardClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardClass */
    readonly parentClass: DomainDeviceClass
    readonly padding: object[]
    static name: string
}
abstract class DomainSmartcardHostCertificatesClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificatesClass */
    readonly parentClass: DomainSmartcardClass
    readonly padding: object[]
    static name: string
}
class DomainSmartcardHostCertificatesPrivate {
    static name: string
}
abstract class DomainSmartcardHostClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostClass */
    readonly parentClass: DomainSmartcardClass
    readonly padding: object[]
    static name: string
}
class DomainSmartcardHostPrivate {
    static name: string
}
abstract class DomainSmartcardPassthroughClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardPassthroughClass */
    readonly parentClass: DomainSmartcardClass
    readonly padding: object[]
    static name: string
}
class DomainSmartcardPassthroughPrivate {
    static name: string
}
class DomainSmartcardPrivate {
    static name: string
}
abstract class DomainSnapshotClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
abstract class DomainSnapshotDiskClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDiskClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
class DomainSnapshotDiskPrivate {
    static name: string
}
class DomainSnapshotPrivate {
    static name: string
}
abstract class DomainSoundClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSoundClass */
    readonly parentClass: DomainDeviceClass
    readonly padding: object[]
    static name: string
}
class DomainSoundPrivate {
    static name: string
}
abstract class DomainTimerClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
abstract class DomainTimerHpetClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerHpetClass */
    readonly parentClass: DomainTimerClass
    readonly padding: object[]
    static name: string
}
class DomainTimerHpetPrivate {
    static name: string
}
abstract class DomainTimerPitClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerPitClass */
    readonly parentClass: DomainTimerClass
    readonly padding: object[]
    static name: string
}
class DomainTimerPitPrivate {
    static name: string
}
class DomainTimerPrivate {
    static name: string
}
abstract class DomainTimerRtcClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerRtcClass */
    readonly parentClass: DomainTimerClass
    readonly padding: object[]
    static name: string
}
class DomainTimerRtcPrivate {
    static name: string
}
abstract class DomainVideoClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainVideoClass */
    readonly parentClass: DomainDeviceClass
    readonly padding: object[]
    static name: string
}
class DomainVideoPrivate {
    static name: string
}
abstract class InterfaceClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.InterfaceClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
class InterfacePrivate {
    static name: string
}
abstract class NetworkClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.NetworkClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
abstract class NetworkFilterClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.NetworkFilterClass */
    readonly parentClass: ObjectClass
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
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.NodeDeviceClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
class NodeDevicePrivate {
    static name: string
}
abstract class ObjectClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.ObjectClass */
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class ObjectPrivate {
    static name: string
}
abstract class SecretClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.SecretClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
class SecretPrivate {
    static name: string
}
abstract class StoragePermissionsClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePermissionsClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
class StoragePermissionsPrivate {
    static name: string
}
abstract class StoragePoolClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
class StoragePoolPrivate {
    static name: string
}
abstract class StoragePoolSourceClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolSourceClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
class StoragePoolSourcePrivate {
    static name: string
}
abstract class StoragePoolTargetClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolTargetClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
class StoragePoolTargetPrivate {
    static name: string
}
abstract class StorageVolBackingStoreClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolBackingStoreClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
class StorageVolBackingStorePrivate {
    static name: string
}
abstract class StorageVolClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
class StorageVolPrivate {
    static name: string
}
abstract class StorageVolTargetClass {
    /* Fields of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolTargetClass */
    readonly parentClass: ObjectClass
    readonly padding: object[]
    static name: string
}
class StorageVolTargetPrivate {
    static name: string
}
}
export default LibvirtGConfig;