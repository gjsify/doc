/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Peas-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GIRepository from './GIRepository-2.0';

export namespace Peas {

enum PluginInfoError {
    LOADING_FAILED,
    LOADER_NOT_FOUND,
    DEP_NOT_FOUND,
    DEP_LOADING_FAILED,
}
function cclosureMarshalVOIDBOXEDOBJECT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function pluginInfoErrorQuark(): GLib.Quark
interface ExtensionSetForeachFunc {
    (set: ExtensionSet, info: PluginInfo, exten: Extension, data?: object | null): void
}
interface FactoryFunc {
    (parameters: GObject.Parameter[]): GObject.Object
}
class Activatable {
    /* Methods of Peas-1.0.Peas.Activatable */
    activate(): void
    deactivate(): void
    updateState(): void
    static name: string
}
interface Engine_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Peas-1.0.Peas.Engine */
    loadedPlugins?: string[]
    nonglobalLoaders?: boolean
}
class Engine {
    /* Properties of Peas-1.0.Peas.Engine */
    loadedPlugins: string[]
    readonly pluginList: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Peas-1.0.Peas.Engine */
    addSearchPath(moduleDir: string, dataDir?: string | null): void
    createExtension(info: PluginInfo, extensionType: GObject.Type, propNames: string[], propValues: any[]): Extension
    enableLoader(loaderName: string): void
    garbageCollect(): void
    getLoadedPlugins(): string[]
    getPluginInfo(pluginName: string): PluginInfo
    getPluginList(): PluginInfo[]
    loadPlugin(info: PluginInfo): boolean
    prependSearchPath(moduleDir: string, dataDir?: string | null): void
    providesExtension(info: PluginInfo, extensionType: GObject.Type): boolean
    rescanPlugins(): void
    setLoadedPlugins(pluginNames?: string[] | null): void
    unloadPlugin(info: PluginInfo): boolean
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
    /* Signals of Peas-1.0.Peas.Engine */
    connect(sigName: "load-plugin", callback: ((info: PluginInfo) => void)): number
    on(sigName: "load-plugin", callback: (info: PluginInfo) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-plugin", callback: (info: PluginInfo) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-plugin", callback: (info: PluginInfo) => void): NodeJS.EventEmitter
    emit(sigName: "load-plugin", info: PluginInfo): void
    connect(sigName: "unload-plugin", callback: ((info: PluginInfo) => void)): number
    on(sigName: "unload-plugin", callback: (info: PluginInfo) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unload-plugin", callback: (info: PluginInfo) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unload-plugin", callback: (info: PluginInfo) => void): NodeJS.EventEmitter
    emit(sigName: "unload-plugin", info: PluginInfo): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::loaded-plugins", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loaded-plugins", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::loaded-plugins", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::loaded-plugins", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::loaded-plugins", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::plugin-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::plugin-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::plugin-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::plugin-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Engine_ConstructProps)
    _init (config?: Engine_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Engine
    static newWithNonglobalLoaders(): Engine
    static getDefault(): Engine
    static $gtype: GObject.Type
}
interface ExtensionBase_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Peas-1.0.Peas.ExtensionBase */
    pluginInfo?: PluginInfo
}
class ExtensionBase {
    /* Properties of Peas-1.0.Peas.ExtensionBase */
    readonly dataDir: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Peas-1.0.Peas.ExtensionBase */
    getDataDir(): string
    getPluginInfo(): PluginInfo
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
    connect(sigName: "notify::data-dir", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-dir", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ExtensionBase_ConstructProps)
    _init (config?: ExtensionBase_ConstructProps): void
    static $gtype: GObject.Type
}
interface ExtensionSet_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Peas-1.0.Peas.ExtensionSet */
    constructProperties?: object
    engine?: Engine
    extensionType?: GObject.Type
}
class ExtensionSet {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Peas-1.0.Peas.ExtensionSet */
    foreach(func: ExtensionSetForeachFunc): void
    getExtension(info: PluginInfo): Extension
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
    /* Signals of Peas-1.0.Peas.ExtensionSet */
    connect(sigName: "extension-added", callback: ((info: PluginInfo, exten: GObject.Object) => void)): number
    on(sigName: "extension-added", callback: (info: PluginInfo, exten: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "extension-added", callback: (info: PluginInfo, exten: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "extension-added", callback: (info: PluginInfo, exten: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "extension-added", info: PluginInfo, exten: GObject.Object): void
    connect(sigName: "extension-removed", callback: ((info: PluginInfo, exten: GObject.Object) => void)): number
    on(sigName: "extension-removed", callback: (info: PluginInfo, exten: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "extension-removed", callback: (info: PluginInfo, exten: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "extension-removed", callback: (info: PluginInfo, exten: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "extension-removed", info: PluginInfo, exten: GObject.Object): void
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
    constructor (config?: ExtensionSet_ConstructProps)
    _init (config?: ExtensionSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(engine: Engine | null, extenType: GObject.Type, propNames: string[], propValues: any[]): ExtensionSet
    static $gtype: GObject.Type
}
interface ObjectModule_ConstructProps extends GObject.TypeModule_ConstructProps {
    /* Constructor properties of Peas-1.0.Peas.ObjectModule */
    localLinkage?: boolean
    moduleName?: string
    path?: string
    resident?: boolean
    symbol?: string
}
class ObjectModule {
    /* Fields of GObject-2.0.GObject.TypeModule */
    readonly parentInstance: GObject.Object
    readonly useCount: number
    readonly typeInfos: object[]
    readonly interfaceInfos: object[]
    readonly name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Peas-1.0.Peas.ObjectModule */
    registerExtensionFactory(extenType: GObject.Type, factoryFunc: FactoryFunc): void
    registerExtensionType(extenType: GObject.Type, implType: GObject.Type): void
    /* Methods of GObject-2.0.GObject.TypeModule */
    addInterface(instanceType: GObject.Type, interfaceType: GObject.Type, interfaceInfo: GObject.InterfaceInfo): void
    registerEnum(name: string, constStaticValues: GObject.EnumValue): GObject.Type
    registerFlags(name: string, constStaticValues: GObject.FlagsValue): GObject.Type
    registerType(parentType: GObject.Type, typeName: string, typeInfo: GObject.TypeInfo, flags: GObject.TypeFlags): GObject.Type
    setName(name: string): void
    unuse(): void
    use(): boolean
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
    /* Methods of GObject-2.0.GObject.TypePlugin */
    completeInterfaceInfo(instanceType: GObject.Type, interfaceType: GObject.Type, info: GObject.InterfaceInfo): void
    completeTypeInfo(gType: GObject.Type, info: GObject.TypeInfo, valueTable: GObject.TypeValueTable): void
    use(): void
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
    constructor (config?: ObjectModule_ConstructProps)
    _init (config?: ObjectModule_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class ActivatableInterface {
    /* Fields of Peas-1.0.Peas.ActivatableInterface */
    readonly gIface: GObject.TypeInterface
    readonly activate: (activatable: Activatable) => void
    readonly deactivate: (activatable: Activatable) => void
    readonly updateState: (activatable: Activatable) => void
    static name: string
}
abstract class EngineClass {
    /* Fields of Peas-1.0.Peas.EngineClass */
    readonly parentClass: GObject.ObjectClass
    readonly loadPlugin: (engine: Engine, info: PluginInfo) => void
    readonly unloadPlugin: (engine: Engine, info: PluginInfo) => void
    static name: string
}
class EnginePrivate {
    static name: string
}
abstract class ExtensionBaseClass {
    /* Fields of Peas-1.0.Peas.ExtensionBaseClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class ExtensionBasePrivate {
    static name: string
}
abstract class ExtensionSetClass {
    /* Fields of Peas-1.0.Peas.ExtensionSetClass */
    readonly parentClass: GObject.ObjectClass
    readonly call: (set: ExtensionSet, methodName: string, args: GIRepository.Argument) => boolean
    readonly extensionAdded: (set: ExtensionSet, info: PluginInfo, exten: Extension) => void
    readonly extensionRemoved: (set: ExtensionSet, info: PluginInfo, exten: Extension) => void
    static name: string
}
class ExtensionSetPrivate {
    static name: string
}
abstract class ObjectModuleClass {
    /* Fields of Peas-1.0.Peas.ObjectModuleClass */
    readonly parentClass: GObject.TypeModuleClass
    static name: string
}
class ObjectModulePrivate {
    static name: string
}
class PluginInfo {
    /* Methods of Peas-1.0.Peas.PluginInfo */
    getAuthors(): string[]
    getCopyright(): string
    getDataDir(): string
    getDependencies(): string[]
    getDescription(): string
    getExternalData(key: string): string
    getHelpUri(): string
    getIconName(): string
    getModuleDir(): string
    getModuleName(): string
    getName(): string
    getSettings(schemaId?: string | null): Gio.Settings
    getVersion(): string
    getWebsite(): string
    hasDependency(moduleName: string): boolean
    isAvailable(): boolean
    isBuiltin(): boolean
    isHidden(): boolean
    isLoaded(): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): GLib.Quark
}
    type Extension = GObject.Object
}
export default Peas;