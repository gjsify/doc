/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * JavaScriptCore-5.0
 */

import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace JavaScriptCore {

enum CheckSyntaxMode {
    SCRIPT,
    MODULE,
}
enum CheckSyntaxResult {
    SUCCESS,
    RECOVERABLE_ERROR,
    IRRECOVERABLE_ERROR,
    UNTERMINATED_LITERAL_ERROR,
    OUT_OF_MEMORY_ERROR,
    STACK_OVERFLOW_ERROR,
}
enum OptionType {
    BOOLEAN,
    INT,
    UINT,
    SIZE,
    DOUBLE,
    STRING,
    RANGE_STRING,
}
enum ValuePropertyFlags {
    CONFIGURABLE,
    ENUMERABLE,
    WRITABLE,
}
const MAJOR_VERSION: number
const MICRO_VERSION: number
const MINOR_VERSION: number
const OPTIONS_USE_DFG: string
const OPTIONS_USE_FTL: string
const OPTIONS_USE_JIT: string
const OPTIONS_USE_LLINT: string
function getMajorVersion(): number
function getMicroVersion(): number
function getMinorVersion(): number
function optionsForeach(function_: OptionsFunc): void
function optionsGetBoolean(option: string): [ /* returnType */ boolean, /* value */ boolean ]
function optionsGetDouble(option: string): [ /* returnType */ boolean, /* value */ number ]
function optionsGetInt(option: string): [ /* returnType */ boolean, /* value */ number ]
function optionsGetOptionGroup(): GLib.OptionGroup
function optionsGetRangeString(option: string): [ /* returnType */ boolean, /* value */ string ]
function optionsGetSize(option: string): [ /* returnType */ boolean, /* value */ number ]
function optionsGetString(option: string): [ /* returnType */ boolean, /* value */ string ]
function optionsGetUint(option: string): [ /* returnType */ boolean, /* value */ number ]
function optionsSetBoolean(option: string, value: boolean): boolean
function optionsSetDouble(option: string, value: number): boolean
function optionsSetInt(option: string, value: number): boolean
function optionsSetRangeString(option: string, value: string): boolean
function optionsSetSize(option: string, value: number): boolean
function optionsSetString(option: string, value: string): boolean
function optionsSetUint(option: string, value: number): boolean
interface ClassDeletePropertyFunction {
    (jscClass: Class, context: Context, instance: object | null, name: string): boolean
}
interface ClassEnumeratePropertiesFunction {
    (jscClass: Class, context: Context, instance?: object | null): string[] | null
}
interface ClassGetPropertyFunction {
    (jscClass: Class, context: Context, instance: object | null, name: string): Value | null
}
interface ClassHasPropertyFunction {
    (jscClass: Class, context: Context, instance: object | null, name: string): boolean
}
interface ClassSetPropertyFunction {
    (jscClass: Class, context: Context, instance: object | null, name: string, value: Value): boolean
}
interface ExceptionHandler {
    (context: Context, exception: Exception): void
}
interface OptionsFunc {
    (option: string, type: OptionType, description?: string | null): boolean
}
interface Class_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of JavaScriptCore-5.0.JavaScriptCore.Class */
    context?: Context
    name?: string
    parent?: Class
}
class Class {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of JavaScriptCore-5.0.JavaScriptCore.Class */
    addConstructorVariadic(name: string | null, callback: GObject.Callback, returnType: GObject.Type): Value
    addConstructor(name: string | null, callback: GObject.Callback, returnType: GObject.Type, parameterTypes?: GObject.Type[] | null): Value
    addMethodVariadic(name: string, callback: GObject.Callback, returnType: GObject.Type): void
    addMethod(name: string, callback: GObject.Callback, returnType: GObject.Type, parameterTypes?: GObject.Type[] | null): void
    addProperty(name: string, propertyType: GObject.Type, getter?: GObject.Callback | null, setter?: GObject.Callback | null): void
    getName(): string
    getParent(): Class
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
    constructor (config?: Class_ConstructProps)
    _init (config?: Class_ConstructProps): void
    static $gtype: GObject.Type
}
interface Context_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of JavaScriptCore-5.0.JavaScriptCore.Context */
    virtualMachine?: VirtualMachine
}
class Context {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of JavaScriptCore-5.0.JavaScriptCore.Context */
    checkSyntax(code: string, length: number, mode: CheckSyntaxMode, uri: string, lineNumber: number): [ /* returnType */ CheckSyntaxResult, /* exception */ Exception | null ]
    clearException(): void
    evaluate(code: string, length: number): Value
    evaluateInObject(code: string, length: number, objectInstance: object | null, objectClass: Class | null, uri: string, lineNumber: number): [ /* returnType */ Value, /* object */ Value ]
    evaluateWithSourceUri(code: string, length: number, uri: string, lineNumber: number): Value
    getException(): Exception | null
    getGlobalObject(): Value
    getValue(name: string): Value
    getVirtualMachine(): VirtualMachine
    popExceptionHandler(): void
    pushExceptionHandler(handler: ExceptionHandler): void
    registerClass(name: string, parentClass?: Class | null, vtable?: ClassVTable | null, destroyNotify?: GLib.DestroyNotify | null): Class
    setValue(name: string, value: Value): void
    throw(errorMessage: string): void
    throwException(exception: Exception): void
    throwWithName(errorName: string, errorMessage: string): void
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
    constructor (config?: Context_ConstructProps)
    _init (config?: Context_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Context
    static newWithVirtualMachine(vm: VirtualMachine): Context
    static getCurrent(): Context | null
    static $gtype: GObject.Type
}
interface Exception_ConstructProps extends GObject.Object_ConstructProps {
}
class Exception {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of JavaScriptCore-5.0.JavaScriptCore.Exception */
    getBacktraceString(): string | null
    getColumnNumber(): number
    getLineNumber(): number
    getMessage(): string
    getName(): string
    getSourceUri(): string | null
    report(): string
    toString(): string
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
    constructor (config?: Exception_ConstructProps)
    _init (config?: Exception_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: Context, message: string): Exception
    static newWithName(context: Context, name: string, message: string): Exception
    static $gtype: GObject.Type
}
interface Value_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of JavaScriptCore-5.0.JavaScriptCore.Value */
    context?: Context
}
class Value {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of JavaScriptCore-5.0.JavaScriptCore.Value */
    constructorCall(parameters?: Value[] | null): Value
    functionCall(parameters?: Value[] | null): Value
    getContext(): Context
    isArray(): boolean
    isBoolean(): boolean
    isConstructor(): boolean
    isFunction(): boolean
    isNull(): boolean
    isNumber(): boolean
    isObject(): boolean
    isString(): boolean
    isUndefined(): boolean
    objectDefinePropertyAccessor(propertyName: string, flags: ValuePropertyFlags, propertyType: GObject.Type, getter?: GObject.Callback | null, setter?: GObject.Callback | null): void
    objectDefinePropertyData(propertyName: string, flags: ValuePropertyFlags, propertyValue?: Value | null): void
    objectDeleteProperty(name: string): boolean
    objectEnumerateProperties(): string[] | null
    objectGetProperty(name: string): Value
    objectGetPropertyAtIndex(index: number): Value
    objectHasProperty(name: string): boolean
    objectInvokeMethod(name: string, parameters?: Value[] | null): Value
    objectIsInstanceOf(name: string): boolean
    objectSetProperty(name: string, property: Value): void
    objectSetPropertyAtIndex(index: number, property: Value): void
    toBoolean(): boolean
    toDouble(): number
    toInt32(): number
    toJson(indent: number): string
    toString(): string
    toStringAsBytes(): any
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
    constructor (config?: Value_ConstructProps)
    _init (config?: Value_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newArrayFromGarray(context: Context, array?: Value[] | null): Value
    static newArrayFromStrv(context: Context, strv: string[]): Value
    static newBoolean(context: Context, value: boolean): Value
    static newFromJson(context: Context, json: string): Value
    static newFunctionVariadic(context: Context, name: string | null, callback: GObject.Callback, returnType: GObject.Type): Value
    static newFunction(context: Context, name: string | null, callback: GObject.Callback, returnType: GObject.Type, parameterTypes?: GObject.Type[] | null): Value
    static newNull(context: Context): Value
    static newNumber(context: Context, number: number): Value
    static newObject(context: Context, instance?: object | null, jscClass?: Class | null): Value
    static newString(context: Context, string?: string | null): Value
    static newStringFromBytes(context: Context, bytes?: any | null): Value
    static newUndefined(context: Context): Value
    static $gtype: GObject.Type
}
interface VirtualMachine_ConstructProps extends GObject.Object_ConstructProps {
}
class VirtualMachine {
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
    constructor (config?: VirtualMachine_ConstructProps)
    _init (config?: VirtualMachine_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VirtualMachine
    static $gtype: GObject.Type
}
interface WeakValue_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of JavaScriptCore-5.0.JavaScriptCore.WeakValue */
    value?: Value
}
class WeakValue {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of JavaScriptCore-5.0.JavaScriptCore.WeakValue */
    getValue(): Value
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
    /* Signals of JavaScriptCore-5.0.JavaScriptCore.WeakValue */
    connect(sigName: "cleared", callback: (() => void)): number
    on(sigName: "cleared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cleared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cleared", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cleared"): void
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
    constructor (config?: WeakValue_ConstructProps)
    _init (config?: WeakValue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: Value): WeakValue
    static $gtype: GObject.Type
}
abstract class ClassClass {
    static name: string
}
class ClassVTable {
    /* Fields of JavaScriptCore-5.0.JavaScriptCore.ClassVTable */
    readonly getProperty: ClassGetPropertyFunction
    readonly setProperty: ClassSetPropertyFunction
    readonly hasProperty: ClassHasPropertyFunction
    readonly deleteProperty: ClassDeletePropertyFunction
    readonly enumerateProperties: ClassEnumeratePropertiesFunction
    static name: string
}
abstract class ContextClass {
    /* Fields of JavaScriptCore-5.0.JavaScriptCore.ContextClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class ContextPrivate {
    static name: string
}
abstract class ExceptionClass {
    /* Fields of JavaScriptCore-5.0.JavaScriptCore.ExceptionClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class ExceptionPrivate {
    static name: string
}
abstract class ValueClass {
    /* Fields of JavaScriptCore-5.0.JavaScriptCore.ValueClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class ValuePrivate {
    static name: string
}
abstract class VirtualMachineClass {
    /* Fields of JavaScriptCore-5.0.JavaScriptCore.VirtualMachineClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class VirtualMachinePrivate {
    static name: string
}
abstract class WeakValueClass {
    /* Fields of JavaScriptCore-5.0.JavaScriptCore.WeakValueClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class WeakValuePrivate {
    static name: string
}
}
export default JavaScriptCore;