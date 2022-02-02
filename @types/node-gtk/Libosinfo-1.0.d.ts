/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Libosinfo-1.0
 */

import type libxml2 from './libxml2-2.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Libosinfo {

enum DeviceDriverSigningReq {
    NONE,
    STRICT,
    WARN,
}
enum Error {
    GENERIC,
}
enum InstallConfigParamPolicy {
    NONE,
    REQUIRED,
    OPTIONAL,
}
enum InstallScriptInstallationSource {
    MEDIA,
    NETWORK,
}
enum MediaError {
    NO_DESCRIPTORS,
    NO_PVD,
    NO_SVD,
    INSUFFICIENT_METADATA,
    NOT_BOOTABLE,
    NO_DIRECTORY_RECORD_EXTENT,
}
enum PathFormat {
    UNIX,
    DOS,
}
enum ProductRelationship {
    DERIVES_FROM,
    UPGRADES,
    CLONES,
}
enum ReleaseStatus {
    RELEASED,
    SNAPSHOT,
    PRERELEASE,
    ROLLING,
}
enum TreeError {
    NO_TREEINFO,
    NOT_SUPPORTED_PROTOCOL,
}
enum InstallScriptInjectionMethod {
    CDROM,
    DISK,
    FLOPPY,
    INITRD,
    WEB,
}
enum MediaDetectFlags {
    BOOTABLE,
}
const ARCHITECTURE_ALL: string
const AVATAR_FORMAT_PROP_ALPHA: string
const AVATAR_FORMAT_PROP_HEIGHT: string
const AVATAR_FORMAT_PROP_MIME_TYPE: string
const AVATAR_FORMAT_PROP_WIDTH: string
const DEVICELINK_PROP_DRIVER: string
const DEVICELINK_PROP_SUPPORTED: string
const DEVICE_DRIVER_DEFAULT_PRIORITY: number
const DEVICE_DRIVER_PROP_ARCHITECTURE: string
const DEVICE_DRIVER_PROP_DEVICE: string
const DEVICE_DRIVER_PROP_FILE: string
const DEVICE_DRIVER_PROP_LOCATION: string
const DEVICE_DRIVER_PROP_PRE_INSTALLABLE: string
const DEVICE_DRIVER_PROP_PRIORITY: string
const DEVICE_DRIVER_PROP_SIGNED: string
const DEVICE_PROP_BUS_TYPE: string
const DEVICE_PROP_CLASS: string
const DEVICE_PROP_NAME: string
const DEVICE_PROP_PRODUCT: string
const DEVICE_PROP_PRODUCT_ID: string
const DEVICE_PROP_SUBSYSTEM: string
const DEVICE_PROP_VENDOR: string
const DEVICE_PROP_VENDOR_ID: string
const ENTITY_PROP_ID: string
const FIRMWARE_PROP_ARCHITECTURE: string
const FIRMWARE_PROP_SUPPORTED: string
const FIRMWARE_PROP_TYPE: string
const GIBIBYTES: number
const IMAGE_PROP_ARCHITECTURE: string
const IMAGE_PROP_CLOUD_INIT: string
const IMAGE_PROP_FORMAT: string
const IMAGE_PROP_URL: string
const IMAGE_PROP_VARIANT: string
const INSTALL_CONFIG_PARAM_PROP_DATAMAP: string
const INSTALL_CONFIG_PARAM_PROP_NAME: string
const INSTALL_CONFIG_PARAM_PROP_POLICY: string
const INSTALL_CONFIG_PROP_ADMIN_PASSWORD: string
const INSTALL_CONFIG_PROP_AVATAR_DISK: string
const INSTALL_CONFIG_PROP_AVATAR_LOCATION: string
const INSTALL_CONFIG_PROP_DRIVER_SIGNING: string
const INSTALL_CONFIG_PROP_HARDWARE_ARCH: string
const INSTALL_CONFIG_PROP_HOSTNAME: string
const INSTALL_CONFIG_PROP_INSTALLATION_URL: string
const INSTALL_CONFIG_PROP_L10N_KEYBOARD: string
const INSTALL_CONFIG_PROP_L10N_LANGUAGE: string
const INSTALL_CONFIG_PROP_L10N_TIMEZONE: string
const INSTALL_CONFIG_PROP_POST_INSTALL_DRIVERS_DISK: string
const INSTALL_CONFIG_PROP_POST_INSTALL_DRIVERS_LOCATION: string
const INSTALL_CONFIG_PROP_PRE_INSTALL_DRIVERS_DISK: string
const INSTALL_CONFIG_PROP_PRE_INSTALL_DRIVERS_LOCATION: string
const INSTALL_CONFIG_PROP_REG_LOGIN: string
const INSTALL_CONFIG_PROP_REG_PASSWORD: string
const INSTALL_CONFIG_PROP_REG_PRODUCTKEY: string
const INSTALL_CONFIG_PROP_SCRIPT_DISK: string
const INSTALL_CONFIG_PROP_TARGET_DISK: string
const INSTALL_CONFIG_PROP_USER_ADMIN: string
const INSTALL_CONFIG_PROP_USER_AUTOLOGIN: string
const INSTALL_CONFIG_PROP_USER_LOGIN: string
const INSTALL_CONFIG_PROP_USER_PASSWORD: string
const INSTALL_CONFIG_PROP_USER_REALNAME: string
const INSTALL_SCRIPT_PROFILE_DESKTOP: string
const INSTALL_SCRIPT_PROFILE_JEOS: string
const INSTALL_SCRIPT_PROP_CAN_POST_INSTALL_DRIVERS: string
const INSTALL_SCRIPT_PROP_CAN_PRE_INSTALL_DRIVERS: string
const INSTALL_SCRIPT_PROP_EXPECTED_FILENAME: string
const INSTALL_SCRIPT_PROP_INJECTION_METHOD: string
const INSTALL_SCRIPT_PROP_INSTALLATION_SOURCE: string
const INSTALL_SCRIPT_PROP_NEEDS_INTERNET: string
const INSTALL_SCRIPT_PROP_PATH_FORMAT: string
const INSTALL_SCRIPT_PROP_POST_INSTALL_DRIVERS_SIGNING_REQ: string
const INSTALL_SCRIPT_PROP_PREFERRED_INJECTION_METHOD: string
const INSTALL_SCRIPT_PROP_PRE_INSTALL_DRIVERS_SIGNING_REQ: string
const INSTALL_SCRIPT_PROP_PRODUCT_KEY_FORMAT: string
const INSTALL_SCRIPT_PROP_PROFILE: string
const INSTALL_SCRIPT_PROP_TEMPLATE_DATA: string
const INSTALL_SCRIPT_PROP_TEMPLATE_URI: string
const KIBIBYTES: number
const MAJOR_VERSION: number
const MEBIBYTES: number
const MEDIA_PROP_APPLICATION_ID: string
const MEDIA_PROP_ARCHITECTURE: string
const MEDIA_PROP_BOOTABLE: string
const MEDIA_PROP_EJECT_AFTER_INSTALL: string
const MEDIA_PROP_INITRD: string
const MEDIA_PROP_INSTALLER: string
const MEDIA_PROP_INSTALLER_REBOOTS: string
const MEDIA_PROP_INSTALLER_SCRIPT: string
const MEDIA_PROP_KERNEL: string
const MEDIA_PROP_LANG: string
const MEDIA_PROP_LANG_MAP: string
const MEDIA_PROP_LANG_REGEX: string
const MEDIA_PROP_LIVE: string
const MEDIA_PROP_PUBLISHER_ID: string
const MEDIA_PROP_SYSTEM_ID: string
const MEDIA_PROP_URL: string
const MEDIA_PROP_VARIANT: string
const MEDIA_PROP_VOLUME_ID: string
const MEDIA_PROP_VOLUME_SIZE: string
const MEGAHERTZ: number
const MICRO_VERSION: number
const MINOR_VERSION: number
const OS_PROP_CLOUD_IMAGE_USERNAME: string
const OS_PROP_DISTRO: string
const OS_PROP_FAMILY: string
const OS_PROP_KERNEL_URL_ARGUMENT: string
const OS_PROP_RELEASE_STATUS: string
const OS_VARIANT_PROP_NAME: string
const PRODUCT_PROP_CODENAME: string
const PRODUCT_PROP_EOL_DATE: string
const PRODUCT_PROP_LOGO: string
const PRODUCT_PROP_NAME: string
const PRODUCT_PROP_RELEASE_DATE: string
const PRODUCT_PROP_SHORT_ID: string
const PRODUCT_PROP_VENDOR: string
const PRODUCT_PROP_VERSION: string
const RESOURCES_PROP_ARCHITECTURE: string
const RESOURCES_PROP_CPU: string
const RESOURCES_PROP_N_CPUS: string
const RESOURCES_PROP_RAM: string
const RESOURCES_PROP_STORAGE: string
const TREE_PROP_ARCHITECTURE: string
const TREE_PROP_BOOT_ISO: string
const TREE_PROP_HAS_TREEINFO: string
const TREE_PROP_INITRD: string
const TREE_PROP_KERNEL: string
const TREE_PROP_TREEINFO_ARCH: string
const TREE_PROP_TREEINFO_FAMILY: string
const TREE_PROP_TREEINFO_VARIANT: string
const TREE_PROP_TREEINFO_VERSION: string
const TREE_PROP_URL: string
const TREE_PROP_VARIANT: string
function errorQuark(): GLib.Quark
function mediaErrorQuark(): GLib.Quark
function treeErrorQuark(): GLib.Quark
interface AvatarFormat_ConstructProps extends Entity_ConstructProps {
}
class AvatarFormat {
    /* Properties of Libosinfo-1.0.Libosinfo.AvatarFormat */
    readonly alpha: boolean
    readonly height: number
    readonly mimeTypes: string[]
    readonly width: number
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Entity */
    readonly parentInstance: GObject.Object
    readonly priv: EntityPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.AvatarFormat */
    getAlpha(): boolean
    getHeight(): number
    getMimeTypes(): string[]
    getWidth(): number
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
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
    connect(sigName: "notify::alpha", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alpha", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mime-types", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-types", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mime-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mime-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mime-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AvatarFormat_ConstructProps)
    _init (config?: AvatarFormat_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AvatarFormat
    static $gtype: GObject.Type
}
interface Datamap_ConstructProps extends Entity_ConstructProps {
}
class Datamap {
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Entity */
    readonly parentInstance: GObject.Object
    readonly priv: EntityPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Datamap */
    insert(inval: string, outval: string): void
    lookup(inval: string): string
    reverseLookup(outval: string): string
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
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
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Datamap_ConstructProps)
    _init (config?: Datamap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): Datamap
    static $gtype: GObject.Type
}
interface DatamapList_ConstructProps extends List_ConstructProps {
}
class DatamapList {
    /* Fields of Libosinfo-1.0.Libosinfo.List */
    readonly parentInstance: GObject.Object
    readonly priv: ListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
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
    constructor (config?: DatamapList_ConstructProps)
    _init (config?: DatamapList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DatamapList
    static $gtype: GObject.Type
}
interface Db_ConstructProps extends GObject.Object_ConstructProps {
}
class Db {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Db */
    addDatamap(datamap: Datamap): void
    addDeployment(deployment: Deployment): void
    addDevice(device: Device): void
    addInstallScript(script: InstallScript): void
    addOs(os: Os): void
    addPlatform(platform: Platform): void
    findDeployment(os: Os, platform: Platform): Deployment
    getDatamap(id: string): Datamap
    getDatamapList(): DatamapList
    getDeployment(id: string): Deployment
    getDeploymentList(): DeploymentList
    getDevice(id: string): Device
    getDeviceList(): DeviceList
    getInstallScript(id: string): InstallScript
    getInstallScriptList(): InstallScriptList
    getOs(id: string): Os
    getOsList(): OsList
    getPlatform(id: string): Platform
    getPlatformList(): PlatformList
    guessOsFromMedia(media: Media): [ /* returnType */ Os, /* matchedMedia */ Media | null ]
    guessOsFromTree(tree: Tree): [ /* returnType */ Os, /* matchedTree */ Tree | null ]
    identifyMedia(media: Media): boolean
    identifyTree(tree: Tree): boolean
    uniqueValuesForOsRelationship(relshp: ProductRelationship): OsList
    uniqueValuesForPlatformRelationship(relshp: ProductRelationship): PlatformList
    uniqueValuesForPropertyInDeployment(propName: string): string[]
    uniqueValuesForPropertyInDevice(propName: string): string[]
    uniqueValuesForPropertyInOs(propName: string): string[]
    uniqueValuesForPropertyInPlatform(propName: string): string[]
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
    constructor (config?: Db_ConstructProps)
    _init (config?: Db_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Db
    static $gtype: GObject.Type
}
interface Deployment_ConstructProps extends Entity_ConstructProps {
    /* Constructor properties of Libosinfo-1.0.Libosinfo.Deployment */
    os?: Os
    platform?: Platform
}
class Deployment {
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Entity */
    readonly parentInstance: GObject.Object
    readonly priv: EntityPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Deployment */
    addDevice(dev: Device): DeviceLink
    getDeviceLinks(filter?: Filter | null): DeviceLinkList
    getDevices(filter?: Filter | null): DeviceList
    getOs(): Os
    getPlatform(): Platform
    getPreferredDevice(filter?: Filter | null): Device
    getPreferredDeviceLink(filter?: Filter | null): DeviceLink
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
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
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Deployment_ConstructProps)
    _init (config?: Deployment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, os: Os, platform: Platform): Deployment
    static $gtype: GObject.Type
}
interface DeploymentList_ConstructProps extends List_ConstructProps {
}
class DeploymentList {
    /* Fields of Libosinfo-1.0.Libosinfo.List */
    readonly parentInstance: GObject.Object
    readonly priv: ListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.DeploymentList */
    newCopy(): DeploymentList
    newFiltered(filter: Filter): DeploymentList
    newIntersection(sourceTwo: DeploymentList): DeploymentList
    newUnion(sourceTwo: DeploymentList): DeploymentList
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
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
    constructor (config?: DeploymentList_ConstructProps)
    _init (config?: DeploymentList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DeploymentList
    static $gtype: GObject.Type
}
interface Device_ConstructProps extends Entity_ConstructProps {
}
class Device {
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Entity */
    readonly parentInstance: GObject.Object
    readonly priv: EntityPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Device */
    getBusType(): string
    getClass(): string
    getName(): string
    getProduct(): string
    getProductId(): string
    getSubsystem(): string
    getVendor(): string
    getVendorId(): string
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
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
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): Device
    static $gtype: GObject.Type
}
interface DeviceDriver_ConstructProps extends Entity_ConstructProps {
}
class DeviceDriver {
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Entity */
    readonly parentInstance: GObject.Object
    readonly priv: EntityPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.DeviceDriver */
    getArchitecture(): string
    getDevices(): DeviceList
    getFiles(): string[]
    getLocation(): string
    getPreInstallable(): boolean
    getPriority(): number
    getSigned(): boolean
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
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
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceDriver_ConstructProps)
    _init (config?: DeviceDriver_ConstructProps): void
    static $gtype: GObject.Type
}
interface DeviceDriverList_ConstructProps extends List_ConstructProps {
}
class DeviceDriverList {
    /* Fields of Libosinfo-1.0.Libosinfo.List */
    readonly parentInstance: GObject.Object
    readonly priv: ListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
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
    constructor (config?: DeviceDriverList_ConstructProps)
    _init (config?: DeviceDriverList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DeviceDriverList
    static $gtype: GObject.Type
}
interface DeviceLink_ConstructProps extends Entity_ConstructProps {
    /* Constructor properties of Libosinfo-1.0.Libosinfo.DeviceLink */
    target?: Device
}
class DeviceLink {
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Entity */
    readonly parentInstance: GObject.Object
    readonly priv: EntityPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.DeviceLink */
    getDriver(): string
    getTarget(): Device
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
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
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceLink_ConstructProps)
    _init (config?: DeviceLink_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(target: Device): DeviceLink
    static $gtype: GObject.Type
}
interface DeviceLinkFilter_ConstructProps extends Filter_ConstructProps {
    /* Constructor properties of Libosinfo-1.0.Libosinfo.DeviceLinkFilter */
    targetFilter?: Filter
}
class DeviceLinkFilter {
    /* Fields of Libosinfo-1.0.Libosinfo.Filter */
    readonly parentInstance: GObject.Object
    readonly priv: FilterPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.DeviceLinkFilter */
    getTargetFilter(): Filter
    /* Methods of Libosinfo-1.0.Libosinfo.Filter */
    addConstraint(propName: string, propVal: string): void
    clearConstraint(propName: string): void
    clearConstraints(): void
    getConstraintKeys(): string[]
    getConstraintValues(propName: string): string[]
    matches(entity: Entity): boolean
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
    constructor (config?: DeviceLinkFilter_ConstructProps)
    _init (config?: DeviceLinkFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filter: Filter): DeviceLinkFilter
    /* Function overloads */
    static new(): DeviceLinkFilter
    static $gtype: GObject.Type
}
interface DeviceLinkList_ConstructProps extends List_ConstructProps {
}
class DeviceLinkList {
    /* Fields of Libosinfo-1.0.Libosinfo.List */
    readonly parentInstance: GObject.Object
    readonly priv: ListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.DeviceLinkList */
    getDevices(filter?: Filter | null): DeviceList
    newCopy(): DeviceLinkList
    newFiltered(filter: Filter): DeviceLinkList
    newIntersection(sourceTwo: DeviceLinkList): DeviceLinkList
    newUnion(sourceTwo: DeviceLinkList): DeviceLinkList
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
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
    constructor (config?: DeviceLinkList_ConstructProps)
    _init (config?: DeviceLinkList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DeviceLinkList
    static $gtype: GObject.Type
}
interface DeviceList_ConstructProps extends List_ConstructProps {
}
class DeviceList {
    /* Fields of Libosinfo-1.0.Libosinfo.List */
    readonly parentInstance: GObject.Object
    readonly priv: ListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.DeviceList */
    newCopy(): DeviceList
    newFiltered(filter: Filter): DeviceList
    newIntersection(sourceTwo: DeviceList): DeviceList
    newUnion(sourceTwo: DeviceList): DeviceList
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
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
    constructor (config?: DeviceList_ConstructProps)
    _init (config?: DeviceList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DeviceList
    static $gtype: GObject.Type
}
interface Entity_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Libosinfo-1.0.Libosinfo.Entity */
    id?: string
}
class Entity {
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
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
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Entity_ConstructProps)
    _init (config?: Entity_ConstructProps): void
    static $gtype: GObject.Type
}
interface Filter_ConstructProps extends GObject.Object_ConstructProps {
}
class Filter {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Filter */
    addConstraint(propName: string, propVal: string): void
    clearConstraint(propName: string): void
    clearConstraints(): void
    getConstraintKeys(): string[]
    getConstraintValues(propName: string): string[]
    matches(entity: Entity): boolean
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
    constructor (config?: Filter_ConstructProps)
    _init (config?: Filter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Filter
    static $gtype: GObject.Type
}
interface Firmware_ConstructProps extends Entity_ConstructProps {
    /* Constructor properties of Libosinfo-1.0.Libosinfo.Firmware */
    architecture?: string
    type?: string
}
class Firmware {
    /* Properties of Libosinfo-1.0.Libosinfo.Firmware */
    architecture: string
    type: string
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Entity */
    readonly parentInstance: GObject.Object
    readonly priv: EntityPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Firmware */
    getArchitecture(): string
    getFirmwareType(): string
    isSupported(): boolean
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
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
    connect(sigName: "notify::architecture", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::architecture", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::architecture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::architecture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::architecture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Firmware_ConstructProps)
    _init (config?: Firmware_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, architecture: string, type: string): Firmware
    static $gtype: GObject.Type
}
interface FirmwareList_ConstructProps extends List_ConstructProps {
}
class FirmwareList {
    /* Fields of Libosinfo-1.0.Libosinfo.List */
    readonly parentInstance: GObject.Object
    readonly priv: ListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
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
    constructor (config?: FirmwareList_ConstructProps)
    _init (config?: FirmwareList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FirmwareList
    static $gtype: GObject.Type
}
interface Image_ConstructProps extends Entity_ConstructProps {
    /* Constructor properties of Libosinfo-1.0.Libosinfo.Image */
    architecture?: string
    cloudInit?: string
    format?: string
    url?: string
}
class Image {
    /* Properties of Libosinfo-1.0.Libosinfo.Image */
    architecture: string
    cloudInit: string
    format: string
    url: string
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Entity */
    readonly parentInstance: GObject.Object
    readonly priv: EntityPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Image */
    getArchitecture(): string
    getCloudInit(): boolean
    getFormat(): string
    getOs(): Os
    getOsVariants(): OsVariantList
    getUrl(): string
    setOs(os: Os): void
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
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
    connect(sigName: "notify::architecture", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::architecture", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::architecture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::architecture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::architecture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cloud-init", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cloud-init", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cloud-init", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cloud-init", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cloud-init", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::format", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Image_ConstructProps)
    _init (config?: Image_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, architecture: string, format: string): Image
    static $gtype: GObject.Type
}
interface ImageList_ConstructProps extends List_ConstructProps {
}
class ImageList {
    /* Fields of Libosinfo-1.0.Libosinfo.List */
    readonly parentInstance: GObject.Object
    readonly priv: ListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
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
    constructor (config?: ImageList_ConstructProps)
    _init (config?: ImageList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ImageList
    static $gtype: GObject.Type
}
interface InstallConfig_ConstructProps extends Entity_ConstructProps {
}
class InstallConfig {
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Entity */
    readonly parentInstance: GObject.Object
    readonly priv: EntityPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.InstallConfig */
    getAdminPassword(): string
    getAvatarDisk(): string
    getAvatarLocation(): string
    getDriverSigning(): boolean
    getHardwareArch(): string
    getHostname(): string
    getInstallationUrl(): string
    getL10nKeyboard(): string
    getL10nLanguage(): string
    getL10nTimezone(): string
    getPostInstallDriversDisk(): string
    getPostInstallDriversLocation(): string
    getPreInstallDriversDisk(): string
    getPreInstallDriversLocation(): string
    getRegLogin(): string
    getRegPassword(): string
    getRegProductKey(): string
    getScriptDisk(): string
    getTargetDisk(): string
    getUserAdministrator(): boolean
    getUserAutologin(): boolean
    getUserLogin(): string
    getUserPassword(): string
    getUserRealname(): string
    setAdminPassword(password: string): void
    setAvatarDisk(disk: string): void
    setAvatarLocation(location: string): void
    setDriverSigning(signing: boolean): void
    setHardwareArch(arch: string): void
    setHostname(hostname: string): void
    setInstallationUrl(url: string): void
    setL10nKeyboard(keyboard: string): void
    setL10nLanguage(language: string): void
    setL10nTimezone(tz: string): void
    setPostInstallDriversDisk(disk: string): void
    setPostInstallDriversLocation(location: string): void
    setPreInstallDriversDisk(disk: string): void
    setPreInstallDriversLocation(location: string): void
    setRegLogin(name: string): void
    setRegPassword(password: string): void
    setRegProductKey(key: string): void
    setScriptDisk(disk: string): void
    setTargetDisk(disk: string): void
    setUserAdministrator(admin: boolean): void
    setUserAutologin(autologin: boolean): void
    setUserLogin(username: string): void
    setUserPassword(password: string): void
    setUserRealname(name: string): void
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
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
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InstallConfig_ConstructProps)
    _init (config?: InstallConfig_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): InstallConfig
    static $gtype: GObject.Type
}
interface InstallConfigParam_ConstructProps extends Entity_ConstructProps {
    /* Constructor properties of Libosinfo-1.0.Libosinfo.InstallConfigParam */
    name?: string
    valueMap?: Datamap
}
class InstallConfigParam {
    /* Properties of Libosinfo-1.0.Libosinfo.InstallConfigParam */
    readonly policy: InstallConfigParamPolicy
    valueMap: Datamap
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Entity */
    readonly parentInstance: GObject.Object
    readonly priv: EntityPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.InstallConfigParam */
    getName(): string
    getPolicy(): InstallConfigParamPolicy
    getValueMap(): Datamap
    isOptional(): boolean
    isRequired(): boolean
    setValueMap(datamap: Datamap): void
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
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
    connect(sigName: "notify::policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-map", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-map", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InstallConfigParam_ConstructProps)
    _init (config?: InstallConfigParam_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): InstallConfigParam
    static $gtype: GObject.Type
}
interface InstallConfigParamList_ConstructProps extends List_ConstructProps {
}
class InstallConfigParamList {
    /* Fields of Libosinfo-1.0.Libosinfo.List */
    readonly parentInstance: GObject.Object
    readonly priv: ListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
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
    constructor (config?: InstallConfigParamList_ConstructProps)
    _init (config?: InstallConfigParamList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): InstallConfigParamList
    static $gtype: GObject.Type
}
interface InstallScript_ConstructProps extends Entity_ConstructProps {
    /* Constructor properties of Libosinfo-1.0.Libosinfo.InstallScript */
    preferredInjectionMethod?: InstallScriptInjectionMethod
    profile?: string
    templateData?: string
    templateUri?: string
}
class InstallScript {
    /* Properties of Libosinfo-1.0.Libosinfo.InstallScript */
    readonly avatarFormat: AvatarFormat
    readonly installationSource: InstallScriptInstallationSource
    readonly pathFormat: PathFormat
    preferredInjectionMethod: InstallScriptInjectionMethod
    readonly productKeyFormat: string
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Entity */
    readonly parentInstance: GObject.Object
    readonly priv: EntityPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.InstallScript */
    generate(os: Os, config: InstallConfig, cancellable?: Gio.Cancellable | null): string
    generateAsync(os: Os, config: InstallConfig, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    generateCommandLine(os: Os, config: InstallConfig): string
    generateCommandLineForMedia(media: Media, config: InstallConfig): string
    generateCommandLineForTree(tree: Tree, config: InstallConfig): string
    generateFinish(res: Gio.AsyncResult): string
    generateForMedia(media: Media, config: InstallConfig, cancellable?: Gio.Cancellable | null): string
    generateForMediaAsync(media: Media, config: InstallConfig, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    generateForMediaFinish(res: Gio.AsyncResult): string
    generateForTree(tree: Tree, config: InstallConfig, cancellable?: Gio.Cancellable | null): string
    generateForTreeAsync(tree: Tree, config: InstallConfig, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    generateForTreeFinish(res: Gio.AsyncResult): string
    generateOutput(os: Os, config: InstallConfig, outputDir: Gio.File, cancellable?: Gio.Cancellable | null): Gio.File
    generateOutputAsync(os: Os, config: InstallConfig, outputDir: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    generateOutputFinish(res: Gio.AsyncResult): Gio.File
    generateOutputForMedia(media: Media, config: InstallConfig, outputDir: Gio.File, cancellable?: Gio.Cancellable | null): Gio.File
    generateOutputForMediaAsync(media: Media, config: InstallConfig, outputDir: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    generateOutputForMediaFinish(res: Gio.AsyncResult): Gio.File
    generateOutputForTree(tree: Tree, config: InstallConfig, outputDir: Gio.File, cancellable?: Gio.Cancellable | null): Gio.File
    generateOutputForTreeAsync(tree: Tree, config: InstallConfig, outputDir: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    generateOutputForTreeFinish(res: Gio.AsyncResult): Gio.File
    getAvatarFormat(): AvatarFormat
    getCanPostInstallDrivers(): boolean
    getCanPreInstallDrivers(): boolean
    getConfigParam(name: string): InstallConfigParam
    getConfigParamList(): InstallScript[]
    getConfigParams(): InstallConfigParamList
    getExpectedFilename(): string
    getInjectionMethods(): InstallScriptInjectionMethod
    getInstallationSource(): InstallScriptInstallationSource
    getNeedsInternet(): boolean
    getOutputFilename(): string
    getOutputPrefix(): string
    getPathFormat(): PathFormat
    getPostInstallDriversSigningReq(): DeviceDriverSigningReq
    getPreInstallDriversSigningReq(): DeviceDriverSigningReq
    getPreferredInjectionMethod(): InstallScriptInjectionMethod
    getProductKeyFormat(): string
    getProfile(): string
    getTemplateData(): string
    getTemplateUri(): string
    hasConfigParam(configParam: InstallConfigParam): boolean
    hasConfigParamName(name: string): boolean
    setInstallationSource(source: InstallScriptInstallationSource): void
    setOutputPrefix(prefix: string): void
    setPreferredInjectionMethod(method: InstallScriptInjectionMethod): void
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
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
    connect(sigName: "notify::avatar-format", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avatar-format", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::avatar-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::avatar-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::avatar-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::installation-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::installation-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::installation-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::installation-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::installation-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::path-format", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path-format", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::preferred-injection-method", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preferred-injection-method", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::preferred-injection-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::preferred-injection-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::preferred-injection-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::product-key-format", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product-key-format", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::product-key-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::product-key-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::product-key-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InstallScript_ConstructProps)
    _init (config?: InstallScript_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): InstallScript
    static newData(id: string, profile: string, templateData: string): InstallScript
    static newUri(id: string, profile: string, templateUri: string): InstallScript
    static $gtype: GObject.Type
}
interface InstallScriptList_ConstructProps extends List_ConstructProps {
}
class InstallScriptList {
    /* Fields of Libosinfo-1.0.Libosinfo.List */
    readonly parentInstance: GObject.Object
    readonly priv: ListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.InstallScriptList */
    newCopy(): InstallScriptList
    newFiltered(filter: Filter): InstallScriptList
    newIntersection(sourceTwo: InstallScriptList): InstallScriptList
    newUnion(sourceTwo: InstallScriptList): InstallScriptList
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
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
    constructor (config?: InstallScriptList_ConstructProps)
    _init (config?: InstallScriptList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): InstallScriptList
    static $gtype: GObject.Type
}
interface List_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Libosinfo-1.0.Libosinfo.List */
    elementType?: GObject.Type
}
class List {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
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
    constructor (config?: List_ConstructProps)
    _init (config?: List_ConstructProps): void
    static $gtype: GObject.Type
}
interface Loader_ConstructProps extends GObject.Object_ConstructProps {
}
class Loader {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Loader */
    getDb(): Db
    processDefaultPath(): void
    processLocalPath(): void
    processPath(path: string): void
    processSystemPath(): void
    processUri(uri: string): void
    processUserPath(): void
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
    constructor (config?: Loader_ConstructProps)
    _init (config?: Loader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Loader
    static $gtype: GObject.Type
}
interface Media_ConstructProps extends Entity_ConstructProps {
    /* Constructor properties of Libosinfo-1.0.Libosinfo.Media */
    applicationId?: string
    architecture?: string
    ejectAfterInstall?: boolean
    initrdPath?: string
    installer?: boolean
    installerReboots?: number
    installerScript?: boolean
    kernelPath?: string
    live?: boolean
    os?: Os
    publisherId?: string
    systemId?: string
    url?: string
    volumeId?: string
    volumeSize?: number
}
class Media {
    /* Properties of Libosinfo-1.0.Libosinfo.Media */
    applicationId: string
    architecture: string
    ejectAfterInstall: boolean
    initrdPath: string
    installer: boolean
    installerReboots: number
    installerScript: boolean
    kernelPath: string
    readonly languages: string[]
    live: boolean
    os: Os
    publisherId: string
    systemId: string
    url: string
    volumeId: string
    volumeSize: number
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Entity */
    readonly parentInstance: GObject.Object
    readonly priv: EntityPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Media */
    addInstallScript(script: InstallScript): void
    getApplicationId(): string
    getArchitecture(): string
    getEjectAfterInstall(): boolean
    getInitrdPath(): string
    getInstallScriptList(): InstallScriptList
    getInstaller(): boolean
    getInstallerReboots(): number
    getKernelPath(): string
    getLanguages(): string[]
    getLive(): boolean
    getOs(): Os
    getOsVariants(): OsVariantList
    getPublisherId(): string
    getSystemId(): string
    getUrl(): string
    getVolumeId(): string
    getVolumeSize(): number
    isBootable(): boolean
    supportsInstallerScript(): boolean
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
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
    connect(sigName: "notify::application-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::architecture", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::architecture", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::architecture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::architecture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::architecture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::eject-after-install", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eject-after-install", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::eject-after-install", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::eject-after-install", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::eject-after-install", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::initrd-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::initrd-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::initrd-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::initrd-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::initrd-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::installer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::installer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::installer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::installer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::installer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::installer-reboots", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::installer-reboots", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::installer-reboots", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::installer-reboots", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::installer-reboots", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::installer-script", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::installer-script", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::installer-script", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::installer-script", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::installer-script", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::kernel-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kernel-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::kernel-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::kernel-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::kernel-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::languages", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::languages", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::languages", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::languages", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::languages", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::live", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::live", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::live", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::live", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::live", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::os", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::os", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::os", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::os", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::os", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::publisher-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::publisher-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::publisher-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::publisher-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::publisher-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::system-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::system-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::system-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::system-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::volume-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::volume-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::volume-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::volume-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::volume-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::volume-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::volume-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::volume-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(id: string, architecture: string): Media
    static createFromLocation(location: string, cancellable?: Gio.Cancellable | null): Media
    static createFromLocationAsync(location: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static createFromLocationFinish(res: Gio.AsyncResult): Media
    static createFromLocationWithFlags(location: string, cancellable: Gio.Cancellable | null, flags: number): Media
    static createFromLocationWithFlagsAsync(location: string, priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, flags: number): void
    static createFromLocationWithFlagsFinish(res: Gio.AsyncResult): Media
    static $gtype: GObject.Type
}
interface MediaList_ConstructProps extends List_ConstructProps {
}
class MediaList {
    /* Fields of Libosinfo-1.0.Libosinfo.List */
    readonly parentInstance: GObject.Object
    readonly priv: ListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.MediaList */
    newCopy(): MediaList
    newFiltered(filter: Filter): MediaList
    newIntersection(sourceTwo: MediaList): MediaList
    newUnion(sourceTwo: MediaList): MediaList
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
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
    constructor (config?: MediaList_ConstructProps)
    _init (config?: MediaList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MediaList
    static $gtype: GObject.Type
}
interface Os_ConstructProps extends Product_ConstructProps {
}
class Os {
    /* Properties of Libosinfo-1.0.Libosinfo.Os */
    readonly cloudImageUsername: string
    readonly distro: string
    readonly family: string
    readonly kernelUrlArgument: string
    /* Properties of Libosinfo-1.0.Libosinfo.Product */
    readonly codename: string
    readonly logo: string
    readonly name: string
    readonly shortId: string
    readonly vendor: string
    readonly version: string
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Product */
    readonly parentInstance: Entity
    readonly priv: ProductPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Os */
    addDevice(dev: Device): DeviceLink
    addDeviceDriver(driver: DeviceDriver): void
    addFirmware(firmware: Firmware): void
    addImage(image: Image): void
    addInstallScript(script: InstallScript): void
    addMaximumResources(resources: Resources): void
    addMedia(media: Media): void
    addMinimumResources(resources: Resources): void
    addNetworkInstallResources(resources: Resources): void
    addRecommendedResources(resources: Resources): void
    addTree(tree: Tree): void
    addVariant(variant: OsVariant): void
    findInstallScript(profile: string): InstallScript
    getAllDeviceLinks(filter?: Filter | null): DeviceLinkList
    getAllDevices(filter?: Filter | null): DeviceList
    getCloudImageUsername(): string
    getCompleteFirmwareList(filter?: Filter | null): FirmwareList
    getDeviceDrivers(): DeviceDriverList
    getDeviceDriversPrioritized(): DeviceDriverList
    getDeviceLinks(filter?: Filter | null): DeviceLinkList
    getDevices(filter?: Filter | null): DeviceList
    getDevicesByProperty(property: string, value: string, inherited: boolean): DeviceList
    getDistro(): string
    getFamily(): string
    getFirmwareList(filter?: Filter | null): FirmwareList
    getImageList(): ImageList
    getInstallScriptList(): InstallScriptList
    getKernelUrlArgument(): string
    getMaximumResources(): ResourcesList
    getMediaList(): MediaList
    getMinimumResources(): ResourcesList
    getNetworkInstallResources(): ResourcesList
    getRecommendedResources(): ResourcesList
    getReleaseStatus(): ReleaseStatus
    getTreeList(): TreeList
    getVariantList(): OsVariantList
    /* Methods of Libosinfo-1.0.Libosinfo.Product */
    addRelated(relshp: ProductRelationship, otherproduct: Product): void
    getCodename(): string
    getEolDate(): GLib.Date
    getEolDateString(): string
    getLogo(): string
    getName(): string
    getRelated(relshp: ProductRelationship): ProductList
    getReleaseDate(): GLib.Date
    getReleaseDateString(): string
    getShortId(): string
    getShortIdList(): string[]
    getVendor(): string
    getVersion(): string
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
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
    connect(sigName: "notify::cloud-image-username", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cloud-image-username", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cloud-image-username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cloud-image-username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cloud-image-username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::distro", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::distro", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::distro", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::distro", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::distro", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::family", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::kernel-url-argument", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kernel-url-argument", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::kernel-url-argument", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::kernel-url-argument", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::kernel-url-argument", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::codename", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codename", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::codename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::codename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::codename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::logo", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::short-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::short-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::short-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::short-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::short-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Os_ConstructProps)
    _init (config?: Os_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): Os
    static $gtype: GObject.Type
}
interface OsList_ConstructProps extends ProductList_ConstructProps {
}
class OsList {
    /* Fields of Libosinfo-1.0.Libosinfo.ProductList */
    readonly parentInstance: List
    readonly priv: ProductListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.OsList */
    newCopy(): OsList
    newFiltered(filter: Filter): OsList
    newIntersection(sourceTwo: OsList): OsList
    newUnion(sourceTwo: OsList): OsList
    /* Methods of Libosinfo-1.0.Libosinfo.ProductList */
    newCopy(): ProductList
    newFiltered(filter: Filter): ProductList
    newIntersection(sourceTwo: ProductList): ProductList
    newUnion(sourceTwo: ProductList): ProductList
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
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
    constructor (config?: OsList_ConstructProps)
    _init (config?: OsList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): OsList
    /* Function overloads */
    static new(): OsList
    static $gtype: GObject.Type
}
interface OsVariant_ConstructProps extends Entity_ConstructProps {
    /* Constructor properties of Libosinfo-1.0.Libosinfo.OsVariant */
    name?: string
}
class OsVariant {
    /* Properties of Libosinfo-1.0.Libosinfo.OsVariant */
    name: string
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Entity */
    readonly parentInstance: GObject.Object
    readonly priv: EntityPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.OsVariant */
    getName(): string
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
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
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OsVariant_ConstructProps)
    _init (config?: OsVariant_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): OsVariant
    static $gtype: GObject.Type
}
interface OsVariantList_ConstructProps extends List_ConstructProps {
}
class OsVariantList {
    /* Fields of Libosinfo-1.0.Libosinfo.List */
    readonly parentInstance: GObject.Object
    readonly priv: ListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
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
    constructor (config?: OsVariantList_ConstructProps)
    _init (config?: OsVariantList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): OsVariantList
    static $gtype: GObject.Type
}
interface Platform_ConstructProps extends Product_ConstructProps {
}
class Platform {
    /* Properties of Libosinfo-1.0.Libosinfo.Product */
    readonly codename: string
    readonly logo: string
    readonly name: string
    readonly shortId: string
    readonly vendor: string
    readonly version: string
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Product */
    readonly parentInstance: Entity
    readonly priv: ProductPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Platform */
    addDevice(dev: Device): DeviceLink
    getAllDevices(filter?: Filter | null): DeviceList
    getDeviceLinks(filter?: Filter | null): DeviceLinkList
    getDevices(filter?: Filter | null): DeviceList
    /* Methods of Libosinfo-1.0.Libosinfo.Product */
    addRelated(relshp: ProductRelationship, otherproduct: Product): void
    getCodename(): string
    getEolDate(): GLib.Date
    getEolDateString(): string
    getLogo(): string
    getName(): string
    getRelated(relshp: ProductRelationship): ProductList
    getReleaseDate(): GLib.Date
    getReleaseDateString(): string
    getShortId(): string
    getShortIdList(): string[]
    getVendor(): string
    getVersion(): string
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
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
    connect(sigName: "notify::codename", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codename", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::codename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::codename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::codename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::logo", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::short-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::short-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::short-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::short-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::short-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Platform_ConstructProps)
    _init (config?: Platform_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): Platform
    static $gtype: GObject.Type
}
interface PlatformList_ConstructProps extends ProductList_ConstructProps {
}
class PlatformList {
    /* Fields of Libosinfo-1.0.Libosinfo.ProductList */
    readonly parentInstance: List
    readonly priv: ProductListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.PlatformList */
    newCopy(): PlatformList
    newFiltered(filter: Filter): PlatformList
    newIntersection(sourceTwo: PlatformList): PlatformList
    newUnion(sourceTwo: PlatformList): PlatformList
    /* Methods of Libosinfo-1.0.Libosinfo.ProductList */
    newCopy(): ProductList
    newFiltered(filter: Filter): ProductList
    newIntersection(sourceTwo: ProductList): ProductList
    newUnion(sourceTwo: ProductList): ProductList
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
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
    constructor (config?: PlatformList_ConstructProps)
    _init (config?: PlatformList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PlatformList
    /* Function overloads */
    static new(): PlatformList
    static $gtype: GObject.Type
}
interface Product_ConstructProps extends Entity_ConstructProps {
}
class Product {
    /* Properties of Libosinfo-1.0.Libosinfo.Product */
    readonly codename: string
    readonly logo: string
    readonly name: string
    readonly shortId: string
    readonly vendor: string
    readonly version: string
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Entity */
    readonly parentInstance: GObject.Object
    readonly priv: EntityPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Product */
    addRelated(relshp: ProductRelationship, otherproduct: Product): void
    getCodename(): string
    getEolDate(): GLib.Date
    getEolDateString(): string
    getLogo(): string
    getName(): string
    getRelated(relshp: ProductRelationship): ProductList
    getReleaseDate(): GLib.Date
    getReleaseDateString(): string
    getShortId(): string
    getShortIdList(): string[]
    getVendor(): string
    getVersion(): string
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
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
    connect(sigName: "notify::codename", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codename", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::codename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::codename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::codename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::logo", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::short-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::short-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::short-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::short-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::short-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Product_ConstructProps)
    _init (config?: Product_ConstructProps): void
    static $gtype: GObject.Type
}
interface ProductFilter_ConstructProps extends Filter_ConstructProps {
}
class ProductFilter {
    /* Fields of Libosinfo-1.0.Libosinfo.Filter */
    readonly parentInstance: GObject.Object
    readonly priv: FilterPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.ProductFilter */
    addProductConstraint(relshp: ProductRelationship, product: Product): number
    addSupportDateConstraint(when: GLib.Date): void
    clearProductConstraint(relshp: ProductRelationship): void
    clearProductConstraints(): void
    getProductConstraintValues(relshp: ProductRelationship): Product[]
    /* Methods of Libosinfo-1.0.Libosinfo.Filter */
    addConstraint(propName: string, propVal: string): void
    clearConstraint(propName: string): void
    clearConstraints(): void
    getConstraintKeys(): string[]
    getConstraintValues(propName: string): string[]
    matches(entity: Entity): boolean
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
    constructor (config?: ProductFilter_ConstructProps)
    _init (config?: ProductFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ProductFilter
    /* Function overloads */
    static new(): ProductFilter
    static $gtype: GObject.Type
}
interface ProductList_ConstructProps extends List_ConstructProps {
}
class ProductList {
    /* Fields of Libosinfo-1.0.Libosinfo.List */
    readonly parentInstance: GObject.Object
    readonly priv: ListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.ProductList */
    newCopy(): ProductList
    newFiltered(filter: Filter): ProductList
    newIntersection(sourceTwo: ProductList): ProductList
    newUnion(sourceTwo: ProductList): ProductList
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
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
    constructor (config?: ProductList_ConstructProps)
    _init (config?: ProductList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ProductList
    static $gtype: GObject.Type
}
interface Resources_ConstructProps extends Entity_ConstructProps {
    /* Constructor properties of Libosinfo-1.0.Libosinfo.Resources */
    architecture?: string
    cpu?: number
    nCpus?: number
    ram?: number
    storage?: number
}
class Resources {
    /* Properties of Libosinfo-1.0.Libosinfo.Resources */
    cpu: number
    nCpus: number
    ram: number
    storage: number
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Entity */
    readonly parentInstance: GObject.Object
    readonly priv: EntityPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Resources */
    getArchitecture(): string
    getCpu(): number
    getNCpus(): number
    getRam(): number
    getStorage(): number
    setCpu(cpu: number): void
    setNCpus(nCpus: number): void
    setRam(ram: number): void
    setStorage(storage: number): void
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
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
    connect(sigName: "notify::cpu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cpu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cpu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cpu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cpu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-cpus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-cpus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-cpus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-cpus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-cpus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ram", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ram", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ram", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ram", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ram", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::storage", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::storage", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::storage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::storage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::storage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Resources_ConstructProps)
    _init (config?: Resources_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, architecture: string): Resources
    static $gtype: GObject.Type
}
interface ResourcesList_ConstructProps extends List_ConstructProps {
}
class ResourcesList {
    /* Fields of Libosinfo-1.0.Libosinfo.List */
    readonly parentInstance: GObject.Object
    readonly priv: ListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.ResourcesList */
    newCopy(): ResourcesList
    newFiltered(filter: Filter): ResourcesList
    newIntersection(sourceTwo: ResourcesList): ResourcesList
    newUnion(sourceTwo: ResourcesList): ResourcesList
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
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
    constructor (config?: ResourcesList_ConstructProps)
    _init (config?: ResourcesList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ResourcesList
    static $gtype: GObject.Type
}
interface Tree_ConstructProps extends Entity_ConstructProps {
    /* Constructor properties of Libosinfo-1.0.Libosinfo.Tree */
    architecture?: string
    bootIsoPath?: string
    hasTreeinfo?: boolean
    initrdPath?: string
    kernelPath?: string
    os?: Os
    treeinfoArch?: string
    treeinfoFamily?: string
    treeinfoVariant?: string
    treeinfoVersion?: string
    url?: string
}
class Tree {
    /* Properties of Libosinfo-1.0.Libosinfo.Tree */
    architecture: string
    bootIsoPath: string
    hasTreeinfo: boolean
    initrdPath: string
    kernelPath: string
    os: Os
    treeinfoArch: string
    treeinfoFamily: string
    treeinfoVariant: string
    treeinfoVersion: string
    url: string
    /* Properties of Libosinfo-1.0.Libosinfo.Entity */
    id: string
    /* Fields of Libosinfo-1.0.Libosinfo.Entity */
    readonly parentInstance: GObject.Object
    readonly priv: EntityPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.Tree */
    getArchitecture(): string
    getBootIsoPath(): string
    getInitrdPath(): string
    getKernelPath(): string
    getOs(): Os
    getOsVariants(): OsVariantList
    getTreeinfoArch(): string
    getTreeinfoFamily(): string
    getTreeinfoVariant(): string
    getTreeinfoVersion(): string
    getUrl(): string
    setOs(os: Os): void
    /* Methods of Libosinfo-1.0.Libosinfo.Entity */
    addParam(key: string, value: string): void
    clearParam(key: string): void
    getId(): string
    getParamKeys(): string[]
    getParamValue(key: string): string
    getParamValueBoolean(key: string): boolean
    getParamValueBooleanWithDefault(key: string, defaultValue: boolean): boolean
    getParamValueEnum(key: string, enumType: GObject.Type, defaultValue: number): number
    getParamValueInt64(key: string): number
    getParamValueInt64WithDefault(key: string, defaultValue: number): number
    getParamValueList(key: string): string[]
    setParam(key: string, value: string): void
    setParamBoolean(key: string, value: boolean): void
    setParamEnum(key: string, value: number, enumType: GObject.Type): void
    setParamInt64(key: string, value: number): void
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
    connect(sigName: "notify::architecture", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::architecture", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::architecture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::architecture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::architecture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::boot-iso-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::boot-iso-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::boot-iso-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::boot-iso-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::boot-iso-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-treeinfo", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-treeinfo", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-treeinfo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-treeinfo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-treeinfo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::initrd-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::initrd-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::initrd-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::initrd-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::initrd-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::kernel-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kernel-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::kernel-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::kernel-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::kernel-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::os", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::os", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::os", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::os", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::os", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::treeinfo-arch", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::treeinfo-arch", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::treeinfo-arch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::treeinfo-arch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::treeinfo-arch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::treeinfo-family", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::treeinfo-family", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::treeinfo-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::treeinfo-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::treeinfo-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::treeinfo-variant", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::treeinfo-variant", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::treeinfo-variant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::treeinfo-variant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::treeinfo-variant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::treeinfo-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::treeinfo-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::treeinfo-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::treeinfo-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::treeinfo-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::url", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Tree_ConstructProps)
    _init (config?: Tree_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, architecture: string): Tree
    static createFromLocation(location: string, cancellable?: Gio.Cancellable | null): Tree
    static createFromLocationAsync(location: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static createFromLocationFinish(res: Gio.AsyncResult): Tree
    static createFromTreeinfo(treeinfo: string, location: string): Tree
    static $gtype: GObject.Type
}
interface TreeList_ConstructProps extends List_ConstructProps {
}
class TreeList {
    /* Fields of Libosinfo-1.0.Libosinfo.List */
    readonly parentInstance: GObject.Object
    readonly priv: ListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Libosinfo-1.0.Libosinfo.TreeList */
    newCopy(): TreeList
    newFiltered(filter: Filter): TreeList
    newIntersection(sourceTwo: TreeList): TreeList
    newUnion(sourceTwo: TreeList): TreeList
    /* Methods of Libosinfo-1.0.Libosinfo.List */
    add(entity: Entity): void
    addAll(source: List): void
    addFiltered(source: List, filter: Filter): void
    addIntersection(sourceOne: List, sourceTwo: List): void
    addUnion(sourceOne: List, sourceTwo: List): void
    findById(id: string): Entity
    getElementType(): GObject.Type
    getElements(): Entity[]
    getLength(): number
    getNth(idx: number): Entity
    newCopy(): List
    newFiltered(filter: Filter): List
    newIntersection(sourceTwo: List): List
    newUnion(sourceTwo: List): List
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
    constructor (config?: TreeList_ConstructProps)
    _init (config?: TreeList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TreeList
    static $gtype: GObject.Type
}
abstract class AvatarFormatClass {
    /* Fields of Libosinfo-1.0.Libosinfo.AvatarFormatClass */
    readonly parentClass: EntityClass
    static name: string
}
class AvatarFormatPrivate {
    static name: string
}
abstract class DatamapClass {
    /* Fields of Libosinfo-1.0.Libosinfo.DatamapClass */
    readonly parentClass: EntityClass
    static name: string
}
abstract class DatamapListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.DatamapListClass */
    readonly parentClass: ListClass
    static name: string
}
class DatamapListPrivate {
    static name: string
}
class DatamapPrivate {
    static name: string
}
abstract class DbClass {
    /* Fields of Libosinfo-1.0.Libosinfo.DbClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class DbPrivate {
    static name: string
}
abstract class DeploymentClass {
    /* Fields of Libosinfo-1.0.Libosinfo.DeploymentClass */
    readonly parentClass: EntityClass
    static name: string
}
abstract class DeploymentListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.DeploymentListClass */
    readonly parentClass: ListClass
    static name: string
}
class DeploymentListPrivate {
    static name: string
}
class DeploymentPrivate {
    static name: string
}
abstract class DeviceClass {
    /* Fields of Libosinfo-1.0.Libosinfo.DeviceClass */
    readonly parentClass: EntityClass
    static name: string
}
abstract class DeviceDriverClass {
    /* Fields of Libosinfo-1.0.Libosinfo.DeviceDriverClass */
    readonly parentClass: EntityClass
    static name: string
}
abstract class DeviceDriverListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.DeviceDriverListClass */
    readonly parentClass: ListClass
    static name: string
}
class DeviceDriverListPrivate {
    static name: string
}
class DeviceDriverPrivate {
    static name: string
}
abstract class DeviceLinkClass {
    /* Fields of Libosinfo-1.0.Libosinfo.DeviceLinkClass */
    readonly parentClass: EntityClass
    static name: string
}
abstract class DeviceLinkFilterClass {
    /* Fields of Libosinfo-1.0.Libosinfo.DeviceLinkFilterClass */
    readonly parentClass: FilterClass
    static name: string
}
class DeviceLinkFilterPrivate {
    static name: string
}
abstract class DeviceLinkListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.DeviceLinkListClass */
    readonly parentClass: ListClass
    static name: string
}
class DeviceLinkListPrivate {
    static name: string
}
class DeviceLinkPrivate {
    static name: string
}
abstract class DeviceListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.DeviceListClass */
    readonly parentClass: ListClass
    static name: string
}
class DeviceListPrivate {
    static name: string
}
class DevicePrivate {
    static name: string
}
abstract class EntityClass {
    /* Fields of Libosinfo-1.0.Libosinfo.EntityClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class EntityPrivate {
    static name: string
}
abstract class FilterClass {
    /* Fields of Libosinfo-1.0.Libosinfo.FilterClass */
    readonly parentClass: GObject.ObjectClass
    readonly matches: (filter: Filter, entity: Entity) => boolean
    static name: string
}
class FilterPrivate {
    static name: string
}
abstract class FirmwareClass {
    /* Fields of Libosinfo-1.0.Libosinfo.FirmwareClass */
    readonly parentClass: EntityClass
    static name: string
}
abstract class FirmwareListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.FirmwareListClass */
    readonly parentClass: ListClass
    static name: string
}
class FirmwareListPrivate {
    static name: string
}
class FirmwarePrivate {
    static name: string
}
abstract class ImageClass {
    /* Fields of Libosinfo-1.0.Libosinfo.ImageClass */
    readonly parentClass: EntityClass
    static name: string
}
abstract class ImageListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.ImageListClass */
    readonly parentClass: ListClass
    static name: string
}
class ImageListPrivate {
    static name: string
}
class ImagePrivate {
    static name: string
}
abstract class InstallConfigClass {
    /* Fields of Libosinfo-1.0.Libosinfo.InstallConfigClass */
    readonly parentClass: EntityClass
    static name: string
}
abstract class InstallConfigParamClass {
    /* Fields of Libosinfo-1.0.Libosinfo.InstallConfigParamClass */
    readonly parentClass: EntityClass
    static name: string
}
abstract class InstallConfigParamListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.InstallConfigParamListClass */
    readonly parentClass: ListClass
    static name: string
}
class InstallConfigParamListPrivate {
    static name: string
}
class InstallConfigParamPrivate {
    static name: string
}
class InstallConfigPrivate {
    static name: string
}
abstract class InstallScriptClass {
    /* Fields of Libosinfo-1.0.Libosinfo.InstallScriptClass */
    readonly parentClass: EntityClass
    static name: string
}
abstract class InstallScriptListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.InstallScriptListClass */
    readonly parentClass: ListClass
    static name: string
}
class InstallScriptListPrivate {
    static name: string
}
class InstallScriptPrivate {
    static name: string
}
abstract class ListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.ListClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class ListPrivate {
    static name: string
}
abstract class LoaderClass {
    /* Fields of Libosinfo-1.0.Libosinfo.LoaderClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class LoaderPrivate {
    static name: string
}
abstract class MediaClass {
    /* Fields of Libosinfo-1.0.Libosinfo.MediaClass */
    readonly parentClass: EntityClass
    static name: string
}
abstract class MediaListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.MediaListClass */
    readonly parentClass: ListClass
    static name: string
}
class MediaListPrivate {
    static name: string
}
class MediaPrivate {
    static name: string
}
abstract class OsClass {
    /* Fields of Libosinfo-1.0.Libosinfo.OsClass */
    readonly parentClass: ProductClass
    static name: string
}
abstract class OsListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.OsListClass */
    readonly parentClass: ProductListClass
    static name: string
}
class OsListPrivate {
    static name: string
}
class OsPrivate {
    static name: string
}
abstract class OsVariantClass {
    /* Fields of Libosinfo-1.0.Libosinfo.OsVariantClass */
    readonly parentClass: EntityClass
    static name: string
}
abstract class OsVariantListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.OsVariantListClass */
    readonly parentClass: ListClass
    static name: string
}
class OsVariantListPrivate {
    static name: string
}
class OsVariantPrivate {
    static name: string
}
abstract class PlatformClass {
    /* Fields of Libosinfo-1.0.Libosinfo.PlatformClass */
    readonly parentClass: ProductClass
    static name: string
}
abstract class PlatformListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.PlatformListClass */
    readonly parentClass: ProductListClass
    static name: string
}
class PlatformListPrivate {
    static name: string
}
class PlatformPrivate {
    static name: string
}
abstract class ProductClass {
    /* Fields of Libosinfo-1.0.Libosinfo.ProductClass */
    readonly parentClass: EntityClass
    static name: string
}
abstract class ProductFilterClass {
    /* Fields of Libosinfo-1.0.Libosinfo.ProductFilterClass */
    readonly parentClass: FilterClass
    static name: string
}
class ProductFilterPrivate {
    static name: string
}
abstract class ProductListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.ProductListClass */
    readonly parentClass: ListClass
    static name: string
}
class ProductListPrivate {
    static name: string
}
class ProductPrivate {
    static name: string
}
abstract class ResourcesClass {
    /* Fields of Libosinfo-1.0.Libosinfo.ResourcesClass */
    readonly parentClass: EntityClass
    static name: string
}
abstract class ResourcesListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.ResourcesListClass */
    readonly parentClass: ListClass
    static name: string
}
class ResourcesListPrivate {
    static name: string
}
class ResourcesPrivate {
    static name: string
}
abstract class TreeClass {
    /* Fields of Libosinfo-1.0.Libosinfo.TreeClass */
    readonly parentClass: EntityClass
    static name: string
}
abstract class TreeListClass {
    /* Fields of Libosinfo-1.0.Libosinfo.TreeListClass */
    readonly parentClass: ListClass
    static name: string
}
class TreeListPrivate {
    static name: string
}
class TreePrivate {
    static name: string
}
}
export default Libosinfo;