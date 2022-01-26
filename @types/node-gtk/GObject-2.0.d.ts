/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GObject-2.0
 */

import type GLib from './GLib-2.0';

export namespace GObject {

enum BindingFlags {
    DEFAULT,
    BIDIRECTIONAL,
    SYNC_CREATE,
    INVERT_BOOLEAN,
}
enum ConnectFlags {
    AFTER,
    SWAPPED,
}
enum ParamFlags {
    READABLE,
    WRITABLE,
    READWRITE,
    CONSTRUCT,
    CONSTRUCT_ONLY,
    LAX_VALIDATION,
    STATIC_NAME,
    PRIVATE,
    STATIC_NICK,
    STATIC_BLURB,
    EXPLICIT_NOTIFY,
    DEPRECATED,
}
enum SignalFlags {
    RUN_FIRST,
    RUN_LAST,
    RUN_CLEANUP,
    NO_RECURSE,
    DETAILED,
    ACTION,
    NO_HOOKS,
    MUST_COLLECT,
    DEPRECATED,
    ACCUMULATOR_FIRST_RUN,
}
enum SignalMatchType {
    ID,
    DETAIL,
    CLOSURE,
    FUNC,
    DATA,
    UNBLOCKED,
}
enum TypeDebugFlags {
    NONE,
    OBJECTS,
    SIGNALS,
    INSTANCE_COUNT,
    MASK,
}
enum TypeFlags {
    ABSTRACT,
    VALUE_ABSTRACT,
    FINAL,
}
enum TypeFundamentalFlags {
    CLASSED,
    INSTANTIATABLE,
    DERIVABLE,
    DEEP_DERIVABLE,
}
const PARAM_MASK: number
const PARAM_STATIC_STRINGS: number
const PARAM_USER_SHIFT: number
const SIGNAL_FLAGS_MASK: number
const SIGNAL_MATCH_MASK: number
const TYPE_FLAG_RESERVED_ID_BIT: GLib.Type
const TYPE_FUNDAMENTAL_MAX: number
const TYPE_FUNDAMENTAL_SHIFT: number
const TYPE_RESERVED_BSE_FIRST: number
const TYPE_RESERVED_BSE_LAST: number
const TYPE_RESERVED_GLIB_FIRST: number
const TYPE_RESERVED_GLIB_LAST: number
const TYPE_RESERVED_USER_FIRST: number
const VALUE_INTERNED_STRING: number
const VALUE_NOCOPY_CONTENTS: number
function boxedCopy(boxedType: Type, srcBoxed: object): object
function boxedFree(boxedType: Type, boxed: object): void
function cclosureMarshalBOOLEANBOXEDBOXED(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalBOOLEANFLAGS(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalSTRINGOBJECTPOINTER(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDBOOLEAN(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDBOXED(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDCHAR(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDDOUBLE(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDENUM(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDFLAGS(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDFLOAT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDINT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDLONG(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDOBJECT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDPARAM(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDPOINTER(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDSTRING(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDUCHAR(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDUINT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDUINTPOINTER(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDULONG(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDVARIANT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalVOIDVOID(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function cclosureMarshalGeneric(closure: Function, returnGvalue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function clearSignalHandler(handlerIdPtr: number, instance: Object): void
function enumCompleteTypeInfo(gEnumType: Type, constValues: EnumValue): /* info */ TypeInfo
function enumGetValue(enumClass: EnumClass, value: number): EnumValue | null
function enumGetValueByName(enumClass: EnumClass, name: string): EnumValue | null
function enumGetValueByNick(enumClass: EnumClass, nick: string): EnumValue | null
function enumRegisterStatic(name: string, constStaticValues: EnumValue): Type
function enumToString(gEnumType: Type, value: number): string
function flagsCompleteTypeInfo(gFlagsType: Type, constValues: FlagsValue): /* info */ TypeInfo
function flagsGetFirstValue(flagsClass: FlagsClass, value: number): FlagsValue | null
function flagsGetValueByName(flagsClass: FlagsClass, name: string): FlagsValue | null
function flagsGetValueByNick(flagsClass: FlagsClass, nick: string): FlagsValue | null
function flagsRegisterStatic(name: string, constStaticValues: FlagsValue): Type
function flagsToString(flagsType: Type, value: number): string
function gtypeGetType(): Type
function paramSpecBoolean(name: string, nick: string, blurb: string, defaultValue: boolean, flags: ParamFlags): ParamSpec
function paramSpecBoxed(name: string, nick: string, blurb: string, boxedType: Type, flags: ParamFlags): ParamSpec
function paramSpecChar(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
function paramSpecDouble(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
function paramSpecEnum(name: string, nick: string, blurb: string, enumType: Type, defaultValue: number, flags: ParamFlags): ParamSpec
function paramSpecFlags(name: string, nick: string, blurb: string, flagsType: Type, defaultValue: number, flags: ParamFlags): ParamSpec
function paramSpecFloat(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
function paramSpecGtype(name: string, nick: string, blurb: string, isAType: Type, flags: ParamFlags): ParamSpec
function paramSpecInt(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
function paramSpecInt64(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
function paramSpecLong(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
function paramSpecObject(name: string, nick: string, blurb: string, objectType: Type, flags: ParamFlags): ParamSpec
function paramSpecParam(name: string, nick: string, blurb: string, paramType: Type, flags: ParamFlags): ParamSpec
function paramSpecPointer(name: string, nick: string, blurb: string, flags: ParamFlags): ParamSpec
function paramSpecString(name: string, nick: string, blurb: string, defaultValue: string | null, flags: ParamFlags): ParamSpec
function paramSpecUchar(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
function paramSpecUint(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
function paramSpecUint64(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
function paramSpecUlong(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
function paramSpecUnichar(name: string, nick: string, blurb: string, defaultValue: number, flags: ParamFlags): ParamSpec
function paramSpecVariant(name: string, nick: string, blurb: string, type: GLib.VariantType, defaultValue: GLib.Variant | null, flags: ParamFlags): ParamSpec
function paramTypeRegisterStatic(name: string, pspecInfo: ParamSpecTypeInfo): Type
function paramValueConvert(pspec: ParamSpec, srcValue: any, destValue: any, strictValidation: boolean): boolean
function paramValueDefaults(pspec: ParamSpec, value: any): boolean
function paramValueSetDefault(pspec: ParamSpec, value: any): void
function paramValueValidate(pspec: ParamSpec, value: any): boolean
function paramValuesCmp(pspec: ParamSpec, value1: any, value2: any): number
function pointerTypeRegisterStatic(name: string): Type
function signalAccumulatorFirstWins(ihint: SignalInvocationHint, returnAccu: any, handlerReturn: any, dummy?: object | null): boolean
function signalAccumulatorTrueHandled(ihint: SignalInvocationHint, returnAccu: any, handlerReturn: any, dummy?: object | null): boolean
function signalAddEmissionHook(signalId: number, detail: GLib.Quark): number
function signalChainFromOverridden(instanceAndParams: any[], returnValue: any): void
function signalConnectClosure(instance: Object, detailedSignal: string, closure: Function, after: boolean): number
function signalConnectClosureById(instance: Object, signalId: number, detail: GLib.Quark, closure: Function, after: boolean): number
function signalEmitv(instanceAndParams: any[], signalId: number, detail: GLib.Quark, returnValue?: any | null): /* returnValue */ any | null
function signalGetInvocationHint(instance: Object): SignalInvocationHint | null
function signalHandlerBlock(instance: Object, handlerId: number): void
function signalHandlerDisconnect(instance: Object, handlerId: number): void
function signalHandlerFind(instance: Object, mask: SignalMatchType, signalId: number, detail: GLib.Quark, func?: object | null, data?: object | null): number
function signalHandlerIsConnected(instance: Object, handlerId: number): boolean
function signalHandlerUnblock(instance: Object, handlerId: number): void
function signalHandlersBlockMatched(instance: Object, mask: SignalMatchType, signalId: number, detail: GLib.Quark, func?: object | null, data?: object | null): number
function signalHandlersDestroy(instance: Object): void
function signalHandlersDisconnectMatched(instance: Object, mask: SignalMatchType, signalId: number, detail: GLib.Quark, func?: object | null, data?: object | null): number
function signalHandlersUnblockMatched(instance: Object, mask: SignalMatchType, signalId: number, detail: GLib.Quark, func?: object | null, data?: object | null): number
function signalHasHandlerPending(instance: Object, signalId: number, detail: GLib.Quark, mayBeBlocked: boolean): boolean
function signalIsValidName(name: string): boolean
function signalListIds(itype: Type): number[]
function signalLookup(name: string, itype: Type): number
function signalName(signalId: number): string | null
function signalOverrideClassClosure(signalId: number, instanceType: Type, classClosure: Function): void
function signalParseName(detailedSignal: string, itype: Type, forceDetailQuark: boolean): [ /* returnType */ boolean, /* signalIdP */ number, /* detailP */ GLib.Quark ]
function signalQuery(signalId: number): /* query */ SignalQuery
function signalRemoveEmissionHook(signalId: number, hookId: number): void
function signalSetVaMarshaller(signalId: number, instanceType: Type, vaMarshaller: SignalCVaMarshaller): void
function signalStopEmission(instance: Object, signalId: number, detail: GLib.Quark): void
function signalStopEmissionByName(instance: Object, detailedSignal: string): void
function signalTypeCclosureNew(itype: Type, structOffset: number): Function
function sourceSetClosure(source: GLib.Source, closure: Function): void
function sourceSetDummyCallback(source: GLib.Source): void
function strdupValueContents(value: any): string
function typeAddClassPrivate(classType: Type, privateSize: number): void
function typeAddInstancePrivate(classType: Type, privateSize: number): number
function typeAddInterfaceDynamic(instanceType: Type, interfaceType: Type, plugin: TypePlugin): void
function typeAddInterfaceStatic(instanceType: Type, interfaceType: Type, info: InterfaceInfo): void
function typeCheckClassIsA(gClass: TypeClass, isAType: Type): boolean
function typeCheckInstance(instance: TypeInstance): boolean
function typeCheckInstanceIsA(instance: TypeInstance, ifaceType: Type): boolean
function typeCheckInstanceIsFundamentallyA(instance: TypeInstance, fundamentalType: Type): boolean
function typeCheckIsValueType(type: Type): boolean
function typeCheckValue(value: any): boolean
function typeCheckValueHolds(value: any, type: Type): boolean
function typeChildren(type: Type): Type[]
function typeClassAdjustPrivateOffset(gClass: object | null, privateSizeOrOffset: number): void
function typeClassPeek(type: Type): TypeClass
function typeClassPeekStatic(type: Type): TypeClass
function typeClassRef(type: Type): TypeClass
function typeDefaultInterfacePeek(gType: Type): TypeInterface
function typeDefaultInterfaceRef(gType: Type): TypeInterface
function typeDefaultInterfaceUnref(gIface: TypeInterface): void
function typeDepth(type: Type): number
function typeEnsure(type: Type): void
function typeFreeInstance(instance: TypeInstance): void
function typeFromName(name: string): Type
function typeFundamental(typeId: Type): Type
function typeFundamentalNext(): Type
function typeGetInstanceCount(type: Type): number
function typeGetPlugin(type: Type): TypePlugin
function typeGetQdata(type: Type, quark: GLib.Quark): object | null
function typeGetTypeRegistrationSerial(): number
function typeInit(): void
function typeInitWithDebugFlags(debugFlags: TypeDebugFlags): void
function typeInterfaceAddPrerequisite(interfaceType: Type, prerequisiteType: Type): void
function typeInterfaceGetPlugin(instanceType: Type, interfaceType: Type): TypePlugin
function typeInterfaceInstantiatablePrerequisite(interfaceType: Type): Type
function typeInterfacePeek(instanceClass: TypeClass, ifaceType: Type): TypeInterface
function typeInterfacePrerequisites(interfaceType: Type): Type[]
function typeInterfaces(type: Type): Type[]
function typeIsA(type: Type, isAType: Type): boolean
function typeName(type: Type): string
function typeNameFromClass(gClass: TypeClass): string
function typeNameFromInstance(instance: TypeInstance): string
function typeNextBase(leafType: Type, rootType: Type): Type
function typeParent(type: Type): Type
function typeQname(type: Type): GLib.Quark
function typeQuery(type: Type): /* query */ TypeQuery
function typeRegisterDynamic(parentType: Type, typeName: string, plugin: TypePlugin, flags: TypeFlags): Type
function typeRegisterFundamental(typeId: Type, typeName: string, info: TypeInfo, finfo: TypeFundamentalInfo, flags: TypeFlags): Type
function typeRegisterStatic(parentType: Type, typeName: string, info: TypeInfo, flags: TypeFlags): Type
function typeSetQdata(type: Type, quark: GLib.Quark, data?: object | null): void
function typeTestFlags(type: Type, flags: number): boolean
function valueTypeCompatible(srcType: Type, destType: Type): boolean
function valueTypeTransformable(srcType: Type, destType: Type): boolean
interface BaseFinalizeFunc {
    (gClass: TypeClass): void
}
interface BaseInitFunc {
    (gClass: TypeClass): void
}
interface BindingTransformFunc {
    (binding: Binding, fromValue: any, toValue: any): boolean
}
interface BoxedCopyFunc {
    (boxed: object): object
}
interface BoxedFreeFunc {
    (boxed: object): void
}
interface Callback {
    (): void
}
interface ClassFinalizeFunc {
    (gClass: TypeClass, classData?: object | null): void
}
interface ClassInitFunc {
    (gClass: TypeClass, classData?: object | null): void
}
interface ClosureMarshal {
    (closure: Function, returnValue: any | null, paramValues: any[], invocationHint?: object | null, marshalData?: object | null): void
}
interface ClosureNotify {
    (data: object | null, closure: Function): void
}
interface InstanceInitFunc {
    (instance: TypeInstance, gClass: TypeClass): void
}
interface InterfaceFinalizeFunc {
    (gIface: TypeInterface, ifaceData?: object | null): void
}
interface InterfaceInitFunc {
    (gIface: TypeInterface, ifaceData?: object | null): void
}
interface ObjectFinalizeFunc {
    (object: Object): void
}
interface ObjectGetPropertyFunc {
    (object: Object, propertyId: number, value: any, pspec: ParamSpec): void
}
interface ObjectSetPropertyFunc {
    (object: Object, propertyId: number, value: any, pspec: ParamSpec): void
}
interface SignalAccumulator {
    (ihint: SignalInvocationHint, returnAccu: any, handlerReturn: any, data?: object | null): boolean
}
interface SignalEmissionHook {
    (ihint: SignalInvocationHint, paramValues: any[], data?: object | null): boolean
}
interface ToggleNotify {
    (data: object | null, object: Object, isLastRef: boolean): void
}
interface TypeClassCacheFunc {
    (cacheData: object | null, gClass: TypeClass): boolean
}
interface TypeInterfaceCheckFunc {
    (checkData: object | null, gIface: TypeInterface): void
}
interface TypePluginCompleteInterfaceInfo {
    (plugin: TypePlugin, instanceType: Type, interfaceType: Type, info: InterfaceInfo): void
}
interface TypePluginCompleteTypeInfo {
    (plugin: TypePlugin, gType: Type, info: TypeInfo, valueTable: TypeValueTable): void
}
interface TypePluginUnuse {
    (plugin: TypePlugin): void
}
interface TypePluginUse {
    (plugin: TypePlugin): void
}
interface ValueTransform {
    (srcValue: any, destValue: any): void
}
interface WeakNotify {
    (data: object | null, whereTheObjectWas: Object): void
}
class TypePlugin {
    /* Methods of GObject-2.0.GObject.TypePlugin */
    completeInterfaceInfo(instanceType: Type, interfaceType: Type, info: InterfaceInfo): void
    completeTypeInfo(gType: Type, info: TypeInfo, valueTable: TypeValueTable): void
    unuse(): void
    use(): void
    static name: string
}
// Extra interfaces used to help define GObject classes in js; these
// aren't part of gi.
export interface SignalDefinition {
    flags?: SignalFlags
    accumulator: number
    return_type?: Type
    param_types?: Type[]
}

export interface MetaInfo {
    GTypeName: string
    GTypeFlags?: TypeFlags
    Implements?: Function[]
    Properties?: { [K: string]: ParamSpec }
    Signals?: { [K: string]: SignalDefinition }
    Requires?: Function[]
    CssName?: string
    Template?: string
    Children?: string[]
    InternalChildren?: string[]
}

export const GTypeName: symbol
export const requires: symbol
export const interfaces: symbol
export const properties: symbol
export const signals: symbol
export function registerClass(metaInfo: MetaInfo, cls: Function): Function
export function registerClass(cls: Function): Function
export function registerClass<T extends MetaInfo | Function>(a: T, b?: Function): Function

interface Binding_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of GObject-2.0.GObject.Binding */
    flags?: BindingFlags
    source?: Object
    sourceProperty?: string
    target?: Object
    targetProperty?: string
}
class Binding {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: TypeInstance
    /* Methods of GObject-2.0.GObject.Binding */
    dupSource(): Object | null
    dupTarget(): Object | null
    getFlags(): BindingFlags
    getSource(): Object | null
    getSourceProperty(): string
    getTarget(): Object | null
    getTargetProperty(): string
    unbind(): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags): Binding
    bindPropertyFull(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags, transformTo: Function, transformFrom: Function): Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: ParamSpec): void
    ref(): Object
    refSink(): Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Binding_ConstructProps)
    _init (config?: Binding_ConstructProps): void
    static $gtype: Type
}
interface InitiallyUnowned_ConstructProps extends Object_ConstructProps {
}
class InitiallyUnowned {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags): Binding
    bindPropertyFull(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags, transformTo: Function, transformFrom: Function): Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: ParamSpec): void
    ref(): Object
    refSink(): Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InitiallyUnowned_ConstructProps)
    _init (config?: InitiallyUnowned_ConstructProps): void
    static $gtype: Type
}
interface Object_ConstructProps  {
}
class Object {
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags): Binding
    bindPropertyFull(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags, transformTo: Function, transformFrom: Function): Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: ParamSpec): void
    ref(): Object
    refSink(): Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: ParamSpec): void
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
    static newv(objectType: Type, parameters: Parameter[]): Object
    static compatControl(what: number, data?: object | null): number
    static interfaceFindProperty(gIface: TypeInterface, propertyName: string): ParamSpec
    static interfaceInstallProperty(gIface: TypeInterface, pspec: ParamSpec): void
    static interfaceListProperties(gIface: TypeInterface): ParamSpec[]
    static $gtype: Type
}
class ParamSpec {
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
    /* Static methods and pseudo-constructors */
    static isValidName(name: string): boolean
}
class ParamSpecBoolean {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly valueType: Type
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecBoxed {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly valueType: Type
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecChar {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly valueType: Type
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecDouble {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly valueType: Type
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecEnum {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly valueType: Type
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecFlags {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly valueType: Type
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecFloat {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly valueType: Type
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecGType {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly valueType: Type
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecInt {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly valueType: Type
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecInt64 {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly valueType: Type
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecLong {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly valueType: Type
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecObject {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly valueType: Type
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecOverride {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly valueType: Type
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecParam {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly valueType: Type
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecPointer {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly valueType: Type
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecString {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly valueType: Type
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecUChar {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly valueType: Type
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecUInt {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly valueType: Type
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecUInt64 {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly valueType: Type
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecULong {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly valueType: Type
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecUnichar {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly valueType: Type
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecValueArray {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly valueType: Type
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamSpecVariant {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly valueType: Type
    readonly ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
interface TypeModule_ConstructProps extends Object_ConstructProps {
}
class TypeModule {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: TypeInstance
    /* Methods of GObject-2.0.GObject.TypeModule */
    addInterface(instanceType: Type, interfaceType: Type, interfaceInfo: InterfaceInfo): void
    registerEnum(name: string, constStaticValues: EnumValue): Type
    registerFlags(name: string, constStaticValues: FlagsValue): Type
    registerType(parentType: Type, typeName: string, typeInfo: TypeInfo, flags: TypeFlags): Type
    setName(name: string): void
    unuse(): void
    use(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags): Binding
    bindPropertyFull(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags, transformTo: Function, transformFrom: Function): Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: ParamSpec): void
    ref(): Object
    refSink(): Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TypeModule_ConstructProps)
    _init (config?: TypeModule_ConstructProps): void
    static $gtype: Type
}
class CClosure {
    /* Fields of GObject-2.0.GObject.CClosure */
    readonly closure: Function
    readonly callback: object
    static name: string
    /* Static methods and pseudo-constructors */
    static marshalBOOLEANBOXEDBOXED(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalBOOLEANFLAGS(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalSTRINGOBJECTPOINTER(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDBOOLEAN(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDBOXED(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDCHAR(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDDOUBLE(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDENUM(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDFLAGS(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDFLOAT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDINT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDLONG(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDOBJECT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDPARAM(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDPOINTER(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDSTRING(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDUCHAR(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDUINT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDUINTPOINTER(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDULONG(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDVARIANT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDVOID(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalGeneric(closure: Function, returnGvalue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
}
class Closure {
    /* Fields of GObject-2.0.GObject.Closure */
    readonly inMarshal: number
    readonly isInvalid: number
    readonly marshal: (closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object) => void
    /* Methods of GObject-2.0.GObject.Closure */
    invalidate(): void
    invoke(paramValues: any[], invocationHint?: object | null): /* returnValue */ any | null
    ref(): Function
    sink(): void
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newObject(sizeofClosure: number, object: Object): Closure
    static newSimple(sizeofClosure: number, data?: object | null): Closure
}
class ClosureNotifyData {
    /* Fields of GObject-2.0.GObject.ClosureNotifyData */
    readonly data: object
    readonly notify: ClosureNotify
    static name: string
}
class EnumClass {
    /* Fields of GObject-2.0.GObject.EnumClass */
    readonly gTypeClass: TypeClass
    readonly minimum: number
    readonly maximum: number
    readonly nValues: number
    readonly values: EnumValue
    static name: string
}
class EnumValue {
    /* Fields of GObject-2.0.GObject.EnumValue */
    readonly value: number
    readonly valueName: string
    readonly valueNick: string
    static name: string
}
class FlagsClass {
    /* Fields of GObject-2.0.GObject.FlagsClass */
    readonly gTypeClass: TypeClass
    readonly mask: number
    readonly nValues: number
    readonly values: FlagsValue
    static name: string
}
class FlagsValue {
    /* Fields of GObject-2.0.GObject.FlagsValue */
    readonly value: number
    readonly valueName: string
    readonly valueNick: string
    static name: string
}
abstract class InitiallyUnownedClass {
    /* Fields of GObject-2.0.GObject.InitiallyUnownedClass */
    readonly gTypeClass: TypeClass
    readonly setProperty: (object: Object, propertyId: number, value: any, pspec: ParamSpec) => void
    readonly getProperty: (object: Object, propertyId: number, value: any, pspec: ParamSpec) => void
    readonly dispose: (object: Object) => void
    readonly finalize: (object: Object) => void
    readonly dispatchPropertiesChanged: (object: Object, nPspecs: number, pspecs: ParamSpec) => void
    readonly notify: (object: Object, pspec: ParamSpec) => void
    readonly constructed: (object: Object) => void
    static name: string
}
class InterfaceInfo {
    /* Fields of GObject-2.0.GObject.InterfaceInfo */
    readonly interfaceInit: InterfaceInitFunc
    readonly interfaceFinalize: InterfaceFinalizeFunc
    readonly interfaceData: object
    static name: string
}
abstract class ObjectClass {
    /* Fields of GObject-2.0.GObject.ObjectClass */
    readonly gTypeClass: TypeClass
    readonly setProperty: (object: Object, propertyId: number, value: any, pspec: ParamSpec) => void
    readonly getProperty: (object: Object, propertyId: number, value: any, pspec: ParamSpec) => void
    readonly dispose: (object: Object) => void
    readonly finalize: (object: Object) => void
    readonly dispatchPropertiesChanged: (object: Object, nPspecs: number, pspecs: ParamSpec) => void
    readonly notify: (object: Object, pspec: ParamSpec) => void
    readonly constructed: (object: Object) => void
    /* Methods of GObject-2.0.GObject.ObjectClass */
    static findProperty(oclass: Object | Function | Type, propertyName: string): ParamSpec
    static installProperties(oclass: Object | Function | Type, pspecs: ParamSpec[]): void
    static installProperty(oclass: Object | Function | Type, propertyId: number, pspec: ParamSpec): void
    static listProperties(oclass: Object | Function | Type): ParamSpec[]
    static overrideProperty(oclass: Object | Function | Type, propertyId: number, name: string): void
    static name: string
}
class ObjectConstructParam {
    /* Fields of GObject-2.0.GObject.ObjectConstructParam */
    readonly pspec: ParamSpec
    readonly value: any
    static name: string
}
abstract class ParamSpecClass {
    /* Fields of GObject-2.0.GObject.ParamSpecClass */
    readonly gTypeClass: TypeClass
    readonly valueType: Type
    readonly finalize: (pspec: ParamSpec) => void
    readonly valueSetDefault: (pspec: ParamSpec, value: any) => void
    readonly valueValidate: (pspec: ParamSpec, value: any) => boolean
    readonly valuesCmp: (pspec: ParamSpec, value1: any, value2: any) => number
    static name: string
}
class ParamSpecPool {
    /* Methods of GObject-2.0.GObject.ParamSpecPool */
    insert(pspec: ParamSpec, ownerType: Type): void
    list(ownerType: Type): ParamSpec[]
    listOwned(ownerType: Type): ParamSpec[]
    lookup(paramName: string, ownerType: Type, walkAncestors: boolean): ParamSpec | null
    remove(pspec: ParamSpec): void
    static name: string
}
class ParamSpecTypeInfo {
    /* Fields of GObject-2.0.GObject.ParamSpecTypeInfo */
    readonly instanceSize: number
    readonly nPreallocs: number
    readonly instanceInit: (pspec: ParamSpec) => void
    readonly valueType: Type
    readonly finalize: (pspec: ParamSpec) => void
    readonly valueSetDefault: (pspec: ParamSpec, value: any) => void
    readonly valueValidate: (pspec: ParamSpec, value: any) => boolean
    readonly valuesCmp: (pspec: ParamSpec, value1: any, value2: any) => number
    static name: string
}
class Parameter {
    /* Fields of GObject-2.0.GObject.Parameter */
    readonly name: string
    readonly value: any
    static name: string
}
class SignalInvocationHint {
    /* Fields of GObject-2.0.GObject.SignalInvocationHint */
    readonly signalId: number
    readonly detail: GLib.Quark
    readonly runType: SignalFlags
    static name: string
}
class SignalQuery {
    /* Fields of GObject-2.0.GObject.SignalQuery */
    readonly signalId: number
    readonly signalName: string
    readonly itype: Type
    readonly signalFlags: SignalFlags
    readonly returnType: Type
    readonly nParams: number
    readonly paramTypes: Type[]
    static name: string
}
class TypeClass {
    /* Methods of GObject-2.0.GObject.TypeClass */
    addPrivate(privateSize: number): void
    getPrivate(privateType: Type): object | null
    peekParent(): TypeClass
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static adjustPrivateOffset(gClass: object | null, privateSizeOrOffset: number): void
    static peek(type: Type): TypeClass
    static peekStatic(type: Type): TypeClass
    static ref(type: Type): TypeClass
}
class TypeFundamentalInfo {
    /* Fields of GObject-2.0.GObject.TypeFundamentalInfo */
    readonly typeFlags: TypeFundamentalFlags
    static name: string
}
class TypeInfo {
    /* Fields of GObject-2.0.GObject.TypeInfo */
    readonly classSize: number
    readonly baseInit: BaseInitFunc
    readonly baseFinalize: BaseFinalizeFunc
    readonly classInit: ClassInitFunc
    readonly classFinalize: ClassFinalizeFunc
    readonly classData: object
    readonly instanceSize: number
    readonly nPreallocs: number
    readonly instanceInit: InstanceInitFunc
    readonly valueTable: TypeValueTable
    static name: string
}
class TypeInstance {
    /* Methods of GObject-2.0.GObject.TypeInstance */
    getPrivate(privateType: Type): object | null
    static name: string
}
class TypeInterface {
    /* Methods of GObject-2.0.GObject.TypeInterface */
    peekParent(): TypeInterface
    static name: string
    /* Static methods and pseudo-constructors */
    static addPrerequisite(interfaceType: Type, prerequisiteType: Type): void
    static getPlugin(instanceType: Type, interfaceType: Type): TypePlugin
    static instantiatablePrerequisite(interfaceType: Type): Type
    static peek(instanceClass: TypeClass, ifaceType: Type): TypeInterface
    static prerequisites(interfaceType: Type): Type[]
}
abstract class TypeModuleClass {
    /* Fields of GObject-2.0.GObject.TypeModuleClass */
    readonly parentClass: ObjectClass
    readonly load: (module: TypeModule) => boolean
    readonly unload: (module: TypeModule) => void
    readonly reserved1: () => void
    readonly reserved2: () => void
    readonly reserved3: () => void
    readonly reserved4: () => void
    static name: string
}
class TypePluginClass {
    /* Fields of GObject-2.0.GObject.TypePluginClass */
    readonly usePlugin: TypePluginUse
    readonly unusePlugin: TypePluginUnuse
    readonly completeTypeInfo: TypePluginCompleteTypeInfo
    readonly completeInterfaceInfo: TypePluginCompleteInterfaceInfo
    static name: string
}
class TypeQuery {
    /* Fields of GObject-2.0.GObject.TypeQuery */
    readonly type: Type
    readonly typeName: string
    readonly classSize: number
    readonly instanceSize: number
    static name: string
}
class TypeValueTable {
    /* Fields of GObject-2.0.GObject.TypeValueTable */
    readonly valueInit: (value: any) => void
    readonly valueFree: (value: any) => void
    readonly valueCopy: (srcValue: any, destValue: any) => void
    readonly valuePeekPointer: (value: any) => object
    readonly collectFormat: string
    readonly collectValue: (value: any, nCollectValues: number, collectValues: TypeCValue, collectFlags: number) => string
    readonly lcopyFormat: string
    readonly lcopyValue: (value: any, nCollectValues: number, collectValues: TypeCValue, collectFlags: number) => string
    static name: string
}
class Value {
    /* Fields of GObject-2.0.GObject.Value */
    readonly data: _Value__data__union[]
    /* Methods of GObject-2.0.GObject.Value */
    copy(destValue: any): void
    dupObject(): Object
    dupString(): string
    dupVariant(): GLib.Variant | null
    fitsPointer(): boolean
    getBoolean(): boolean
    getBoxed(): object | null
    getChar(): number
    getDouble(): number
    getEnum(): number
    getFlags(): number
    getFloat(): number
    getGtype(): Type
    getInt(): number
    getInt64(): number
    getLong(): number
    getObject(): Object
    getParam(): ParamSpec
    getPointer(): object | null
    getSchar(): number
    getString(): string
    getUchar(): number
    getUint(): number
    getUint64(): number
    getUlong(): number
    getVariant(): GLib.Variant | null
    init(gType: Type): any
    initFromInstance(instance: TypeInstance): void
    peekPointer(): object | null
    reset(): any
    setBoolean(vBoolean: boolean): void
    setBoxed(vBoxed?: object | null): void
    setBoxedTakeOwnership(vBoxed?: object | null): void
    setChar(vChar: number): void
    setDouble(vDouble: number): void
    setEnum(vEnum: number): void
    setFlags(vFlags: number): void
    setFloat(vFloat: number): void
    setGtype(vGtype: Type): void
    setInstance(instance?: object | null): void
    setInt(vInt: number): void
    setInt64(vInt64: number): void
    setInternedString(vString?: string | null): void
    setLong(vLong: number): void
    setObject(vObject?: Object | null): void
    setParam(param?: ParamSpec | null): void
    setPointer(vPointer?: object | null): void
    setSchar(vChar: number): void
    setStaticBoxed(vBoxed?: object | null): void
    setStaticString(vString?: string | null): void
    setString(vString?: string | null): void
    setStringTakeOwnership(vString?: string | null): void
    setUchar(vUchar: number): void
    setUint(vUint: number): void
    setUint64(vUint64: number): void
    setUlong(vUlong: number): void
    setVariant(variant?: GLib.Variant | null): void
    takeBoxed(vBoxed?: object | null): void
    takeString(vString?: string | null): void
    takeVariant(variant?: GLib.Variant | null): void
    transform(destValue: any): boolean
    unset(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static typeCompatible(srcType: Type, destType: Type): boolean
    static typeTransformable(srcType: Type, destType: Type): boolean
}
class ValueArray {
    /* Fields of GObject-2.0.GObject.ValueArray */
    readonly nValues: number
    readonly values: any
    /* Methods of GObject-2.0.GObject.ValueArray */
    append(value?: any | null): ValueArray
    copy(): ValueArray
    getNth(index: number): any
    insert(index: number, value?: any | null): ValueArray
    prepend(value?: any | null): ValueArray
    remove(index: number): ValueArray
    sort(compareFunc: GLib.CompareDataFunc): ValueArray
    static name: string
    static new(nPrealloced: number): ValueArray
    constructor(nPrealloced: number)
    /* Static methods and pseudo-constructors */
    static new(nPrealloced: number): ValueArray
}
class WeakRef {
    static name: string
}
class TypeCValue {
    static name: string
}
class _Value__data__union {
    static name: string
}
    type SignalCMarshaller = ClosureMarshal
    type SignalCVaMarshaller = any
export interface Type {
    name: string
}
}
export default GObject;