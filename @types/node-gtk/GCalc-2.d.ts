/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GCalc-2
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gee from './Gee-0.8';

export namespace GCalc {

enum AssigError {
    INVALID_STRUCTURE_ERROR,
}
enum FunctionError {
    INVALID_PARAMETERS_ERROR,
    INVOCATION_ERROR,
}
enum GroupError {
    INVALID_POLYNOMIAL,
    INVALID_INTERNAL_TERM,
}
enum TermError {
    INVALID_OPERATOR,
    EVALUATION_FAIL,
}
enum VariableError {
    INVALID_PARENT,
    INVALID_EXPRESSION_DEFINITION,
    EVALUATION_FAIL,
}
enum ParserError {
    INVALID_TOKEN_ERROR,
    INVALID_EXPRESSION_ERROR,
}
enum SolverError {
    EXPRESSION_ERROR,
}
enum ParserTokenType {
    NONE,
    EOF,
    IDENTIFIER,
    INTEGER_LITERAL,
    REAL_LITERAL,
    STAR,
    PLUS,
    DIV,
    MINUS,
    ASSIGN,
    OPEN_PARENS,
    CLOSE_PARENS,
    CARRET,
    CLOSE_BRACE,
    CLOSE_BRACKET,
    OPEN_BRACE,
    OPEN_BRACKET,
    STRING_LITERAL,
    OP_AND,
    OP_COALESCING,
    OP_DEC,
    OP_EQ,
    OP_GE,
    OP_GT,
    OP_INC,
    OP_LE,
    OP_LT,
    OP_NE,
    OP_NEG,
    OP_OR,
    OP_PTR,
    OP_SHIFT_LEFT,
    SEMICOLON,
    TILDE,
    COLON,
    COMMA,
    DOUBLE_COLON,
    DOT,
    ELLIPSIS,
    INTERR,
    HASH,
    CURRENCY_SYMBOL,
}
enum MathGroupLevel {
    ONE,
    TWO,
    THREE,
}
interface Hashable_ConstructProps extends GObject.Object_ConstructProps {
}
class Hashable {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Hashable */
    hash(): number
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
    constructor (config?: Hashable_ConstructProps)
    _init (config?: Hashable_ConstructProps): void
    static $gtype: GObject.Type
}
interface MathAssign_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class MathAssign {
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathAssign */
    evaluate(): MathExpression
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    toString(): string
    solve(): MathResult
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MathAssign_ConstructProps)
    _init (config?: MathAssign_ConstructProps): void
    static $gtype: GObject.Type
}
interface MathBinaryOperator_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class MathBinaryOperator {
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    toString(): string
    solve(): MathResult
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MathBinaryOperator_ConstructProps)
    _init (config?: MathBinaryOperator_ConstructProps): void
    static $gtype: GObject.Type
}
interface MathConstant_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class MathConstant {
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathConstant */
    add(c: MathConstant): MathConstant
    subtract(c: MathConstant): MathConstant
    multiply(c: MathConstant): MathConstant
    divide(c: MathConstant): MathConstant
    neg(): MathConstant
    pow(c: MathConstant): MathConstant
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    toString(): string
    solve(): MathResult
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MathConstant_ConstructProps)
    _init (config?: MathConstant_ConstructProps): void
    static $gtype: GObject.Type
}
interface MathConstantComplex_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class MathConstantComplex {
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathConstantComplex */
    real(): number
    imag(): number
    zero(): void
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    toString(): string
    solve(): MathResult
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Methods of GCalc-2.GCalc.MathConstant */
    add(c: MathConstant): MathConstant
    subtract(c: MathConstant): MathConstant
    multiply(c: MathConstant): MathConstant
    divide(c: MathConstant): MathConstant
    neg(): MathConstant
    pow(c: MathConstant): MathConstant
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MathConstantComplex_ConstructProps)
    _init (config?: MathConstantComplex_ConstructProps): void
    static $gtype: GObject.Type
}
interface MathConstantNumber_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class MathConstantNumber {
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathConstantNumber */
    value(): number
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    toString(): string
    solve(): MathResult
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Methods of GCalc-2.GCalc.MathConstant */
    add(c: MathConstant): MathConstant
    subtract(c: MathConstant): MathConstant
    multiply(c: MathConstant): MathConstant
    divide(c: MathConstant): MathConstant
    neg(): MathConstant
    pow(c: MathConstant): MathConstant
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MathConstantNumber_ConstructProps)
    _init (config?: MathConstantNumber_ConstructProps): void
    static $gtype: GObject.Type
}
interface MathDivision_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class MathDivision {
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    toString(): string
    solve(): MathResult
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MathDivision_ConstructProps)
    _init (config?: MathDivision_ConstructProps): void
    static $gtype: GObject.Type
}
interface MathEquation_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class MathEquation {
    /* Properties of GCalc-2.GCalc.MathEquation */
    readonly variables: ExpressionHashMap
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathEquation */
    getVariables(): ExpressionHashMap
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    toString(): string
    solve(): MathResult
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::variables", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variables", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::variables", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::variables", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::variables", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MathEquation_ConstructProps)
    _init (config?: MathEquation_ConstructProps): void
    static $gtype: GObject.Type
}
interface MathEquationManager_ConstructProps extends GObject.Object_ConstructProps {
}
class MathEquationManager {
    /* Properties of GCalc-2.GCalc.MathEquationManager */
    readonly equations: ExpressionContainer
    readonly functions: ExpressionContainer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathEquationManager */
    findVariable(name: string): MathVariable
    getEquations(): ExpressionContainer
    getFunctions(): ExpressionContainer
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
    connect(sigName: "notify::equations", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equations", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::equations", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::equations", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::equations", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::functions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::functions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::functions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::functions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::functions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MathEquationManager_ConstructProps)
    _init (config?: MathEquationManager_ConstructProps): void
    static $gtype: GObject.Type
}
interface MathErrorResult_ConstructProps extends GObject.Object_ConstructProps {
}
class MathErrorResult {
    /* Properties of GCalc-2.GCalc.MathErrorResult */
    readonly message: string
    /* Properties of GCalc-2.GCalc.MathResult */
    readonly expression: MathExpression
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathErrorResult */
    getMessage(): string
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
    /* Methods of GCalc-2.GCalc.MathResult */
    toString(): string
    getExpression(): MathExpression
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::message", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expression", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expression", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MathErrorResult_ConstructProps)
    _init (config?: MathErrorResult_ConstructProps): void
    static $gtype: GObject.Type
}
interface MathExpression_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class MathExpression {
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathExpression */
    toString(): string
    solve(): MathResult
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
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
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MathExpression_ConstructProps)
    _init (config?: MathExpression_ConstructProps): void
    static $gtype: GObject.Type
}
interface MathFunction_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathFunction */
    name?: string
    nParams?: number
    closed?: boolean
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class MathFunction {
    /* Properties of GCalc-2.GCalc.MathFunction */
    readonly paramTypes: ExpressionContainer
    name: string
    nParams: number
    closed: boolean
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathFunction */
    evaluate(): MathExpression
    verifyParams(): boolean
    getParamTypes(): ExpressionContainer
    getName(): string
    setName(value: string): void
    getNParams(): number
    setNParams(value: number): void
    getClosed(): boolean
    setClosed(value: boolean): void
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    toString(): string
    solve(): MathResult
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::param-types", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::param-types", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::param-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::param-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::param-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-params", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-params", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-params", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-params", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-params", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MathFunction_ConstructProps)
    _init (config?: MathFunction_ConstructProps): void
    static $gtype: GObject.Type
}
interface MathGroup_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathGroup */
    level?: MathGroupLevel
    closed?: boolean
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class MathGroup {
    /* Properties of GCalc-2.GCalc.MathGroup */
    level: MathGroupLevel
    closed: boolean
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathGroup */
    evaluate(): MathExpression
    getLevel(): MathGroupLevel
    setLevel(value: MathGroupLevel): void
    getClosed(): boolean
    setClosed(value: boolean): void
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    toString(): string
    solve(): MathResult
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::level", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MathGroup_ConstructProps)
    _init (config?: MathGroup_ConstructProps): void
    static $gtype: GObject.Type
}
interface MathMinus_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class MathMinus {
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    toString(): string
    solve(): MathResult
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MathMinus_ConstructProps)
    _init (config?: MathMinus_ConstructProps): void
    static $gtype: GObject.Type
}
interface MathMultiply_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class MathMultiply {
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    toString(): string
    solve(): MathResult
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MathMultiply_ConstructProps)
    _init (config?: MathMultiply_ConstructProps): void
    static $gtype: GObject.Type
}
interface MathOperator_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class MathOperator {
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    toString(): string
    solve(): MathResult
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MathOperator_ConstructProps)
    _init (config?: MathOperator_ConstructProps): void
    static $gtype: GObject.Type
}
interface MathParameter_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
    /* Constructor properties of GCalc-2.GCalc.MathVariable */
    name?: string
    value?: MathConstant
    bind?: MathVariable
}
class MathParameter {
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Properties of GCalc-2.GCalc.MathVariable */
    name: string
    value: MathConstant
    bind: MathVariable
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathParameter */
    setValue(val?: any | null): void
    getValue(): any | null
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    toString(): string
    solve(): MathResult
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Methods of GCalc-2.GCalc.MathVariable */
    evaluate(): MathExpression
    getName(): string
    setName(value: string): void
    getValue(): MathConstant
    setValue(value: MathConstant): void
    getBind(): MathVariable
    setBind(value: MathVariable): void
    getBinded(): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bind", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MathParameter_ConstructProps)
    _init (config?: MathParameter_ConstructProps): void
    static $gtype: GObject.Type
}
interface MathPlus_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class MathPlus {
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    toString(): string
    solve(): MathResult
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MathPlus_ConstructProps)
    _init (config?: MathPlus_ConstructProps): void
    static $gtype: GObject.Type
}
interface MathPolynomial_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class MathPolynomial {
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathPolynomial */
    evaluate(): MathExpression
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    toString(): string
    solve(): MathResult
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MathPolynomial_ConstructProps)
    _init (config?: MathPolynomial_ConstructProps): void
    static $gtype: GObject.Type
}
interface MathPow_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class MathPow {
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    toString(): string
    solve(): MathResult
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MathPow_ConstructProps)
    _init (config?: MathPow_ConstructProps): void
    static $gtype: GObject.Type
}
interface MathResult_ConstructProps extends GObject.Object_ConstructProps {
}
class MathResult {
    /* Properties of GCalc-2.GCalc.MathResult */
    readonly expression: MathExpression
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathResult */
    toString(): string
    getExpression(): MathExpression
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
    connect(sigName: "notify::expression", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expression", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MathResult_ConstructProps)
    _init (config?: MathResult_ConstructProps): void
    static $gtype: GObject.Type
}
interface MathTerm_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class MathTerm {
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathTerm */
    add(t: MathTerm): MathExpression
    evaluate(): MathExpression
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    toString(): string
    solve(): MathResult
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MathTerm_ConstructProps)
    _init (config?: MathTerm_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static evaluateConstants(c1: MathConstant, c2: MathConstant, op: MathOperator): MathExpression
    static $gtype: GObject.Type
}
interface MathVariable_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathVariable */
    name?: string
    value?: MathConstant
    bind?: MathVariable
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class MathVariable {
    /* Properties of GCalc-2.GCalc.MathVariable */
    name: string
    value: MathConstant
    bind: MathVariable
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathVariable */
    evaluate(): MathExpression
    getName(): string
    setName(value: string): void
    getValue(): MathConstant
    setValue(value: MathConstant): void
    getBind(): MathVariable
    setBind(value: MathVariable): void
    getBinded(): boolean
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    toString(): string
    solve(): MathResult
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
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
    connect(sigName: "notify::value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bind", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MathVariable_ConstructProps)
    _init (config?: MathVariable_ConstructProps): void
    static $gtype: GObject.Type
}
interface Assign_ConstructProps extends Expression_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class Assign {
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Methods of GCalc-2.GCalc.MathAssign */
    evaluate(): MathExpression
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Assign_ConstructProps)
    _init (config?: Assign_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Assign
    /* Function overloads */
    static new(): Assign
    static $gtype: GObject.Type
}
interface Constant_ConstructProps extends Expression_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class Constant {
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathConstant */
    add(c: MathConstant): MathConstant
    subtract(c: MathConstant): MathConstant
    multiply(c: MathConstant): MathConstant
    divide(c: MathConstant): MathConstant
    neg(): MathConstant
    pow(c: MathConstant): MathConstant
    /* Methods of GCalc-2.GCalc.MathExpression */
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Methods of GCalc-2.GCalc.MathConstantNumber */
    value(): number
    /* Methods of GCalc-2.GCalc.MathConstantComplex */
    real(): number
    imag(): number
    zero(): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Constant_ConstructProps)
    _init (config?: Constant_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static integer(val: number): Constant
    static unsignedInteger(val: number): Constant
    static double(val: number): Constant
    static complex(real: number, imag: number): Constant
    static new(): Constant
    /* Function overloads */
    static new(): Constant
    static $gtype: GObject.Type
}
interface Division_ConstructProps extends Expression_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class Division {
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Division_ConstructProps)
    _init (config?: Division_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Division
    /* Function overloads */
    static new(): Division
    static $gtype: GObject.Type
}
interface Equation_ConstructProps extends Expression_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class Equation {
    /* Properties of GCalc-2.GCalc.MathEquation */
    readonly variables: ExpressionHashMap
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathEquation */
    getVariables(): ExpressionHashMap
    /* Methods of GCalc-2.GCalc.MathExpression */
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::variables", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variables", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::variables", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::variables", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::variables", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Equation_ConstructProps)
    _init (config?: Equation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Equation
    /* Function overloads */
    static new(): Equation
    static $gtype: GObject.Type
}
interface EquationManager_ConstructProps extends GObject.Object_ConstructProps {
}
class EquationManager {
    /* Properties of GCalc-2.GCalc.MathEquationManager */
    readonly equations: ExpressionContainer
    readonly functions: ExpressionContainer
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
    /* Methods of GCalc-2.GCalc.MathEquationManager */
    findVariable(name: string): MathVariable
    getEquations(): ExpressionContainer
    getFunctions(): ExpressionContainer
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::equations", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equations", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::equations", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::equations", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::equations", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::functions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::functions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::functions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::functions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::functions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: EquationManager_ConstructProps)
    _init (config?: EquationManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): EquationManager
    static $gtype: GObject.Type
}
interface ErrorResult_ConstructProps extends GObject.Object_ConstructProps {
}
class ErrorResult {
    /* Properties of GCalc-2.GCalc.MathResult */
    readonly expression: MathExpression
    /* Properties of GCalc-2.GCalc.MathErrorResult */
    readonly message: string
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
    /* Methods of GCalc-2.GCalc.MathResult */
    toString(): string
    getExpression(): MathExpression
    /* Methods of GCalc-2.GCalc.MathErrorResult */
    getMessage(): string
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::expression", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expression", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ErrorResult_ConstructProps)
    _init (config?: ErrorResult_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(msg: string): ErrorResult
    static $gtype: GObject.Type
}
interface Expression_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class Expression {
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Expression_ConstructProps)
    _init (config?: Expression_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Expression
    static $gtype: GObject.Type
}
interface ErrorExpression_ConstructProps extends Expression_ConstructProps {
}
class ErrorExpression {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    constructor (config?: ErrorExpression_ConstructProps)
    _init (config?: ErrorExpression_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ErrorExpression
    /* Function overloads */
    static new(): ErrorExpression
    static $gtype: GObject.Type
}
interface ExpressionContainer_ConstructProps extends Gee.ArrayList_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.ExpressionContainer */
    parent?: MathExpression
}
class ExpressionContainer {
    /* Properties of GCalc-2.GCalc.ExpressionContainer */
    parent: MathExpression
    /* Properties of Gee-0.8.Gee.AbstractBidirList */
    readonly readOnlyView: Gee.BidirList
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly readOnly: boolean
    /* Fields of Gee-0.8.Gee.ArrayList */
    readonly items: object[]
    readonly itemsLength1: number
    readonly size: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.ExpressionContainer */
    getObject(position: number): GObject.Object | null
    find(exp: MathExpression): MathExpression | null
    findNamed(name: string): MathExpression | null
    getParent(): MathExpression
    setParent(value: MathExpression): void
    /* Methods of Gee-0.8.Gee.ArrayList */
    addAll(collection: Gee.Collection): boolean
    getEqualFunc(): [ /* returnType */ Gee.EqualDataFunc, /* resultTarget */ object | null ]
    /* Methods of Gee-0.8.Gee.AbstractBidirList */
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList
    /* Methods of Gee-0.8.Gee.AbstractList */
    listIterator(): Gee.ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null
    getReadOnlyView(): Gee.List
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Gee.Collection
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
    /* Methods of Gio-2.0.Gio.ListModel */
    getItemType(): GObject.Type
    getNItems(): number
    getItem(position: number): GObject.Object | null
    itemsChanged(position: number, removed: number, added: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.ListModel */
    connect(sigName: "items-changed", callback: ((position: number, removed: number, added: number) => void)): number
    on(sigName: "items-changed", callback: (position: number, removed: number, added: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "items-changed", callback: (position: number, removed: number, added: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "items-changed", callback: (position: number, removed: number, added: number) => void): NodeJS.EventEmitter
    emit(sigName: "items-changed", position: number, removed: number, added: number): void
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ExpressionContainer_ConstructProps)
    _init (config?: ExpressionContainer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ExpressionContainer
    /* Function overloads */
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): ExpressionContainer
    static $gtype: GObject.Type
}
interface ExpressionHashMap_ConstructProps extends Gee.HashMap_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.ExpressionHashMap */
    parent?: MathExpression
}
class ExpressionHashMap {
    /* Properties of GCalc-2.GCalc.ExpressionHashMap */
    parent: MathExpression
    /* Properties of Gee-0.8.Gee.AbstractMap */
    readonly size: number
    readonly readOnly: boolean
    readonly keys: Gee.Set
    readonly values: Gee.Collection
    readonly entries: Gee.Set
    readonly readOnlyView: Gee.Map
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.ExpressionHashMap */
    add(exp: MathExpression): void
    remove(exp: MathExpression): void
    findNamed(name: string): MathExpression | null
    getParent(): MathExpression
    setParent(value: MathExpression): void
    /* Methods of Gee-0.8.Gee.HashMap */
    getKeyHashFunc(): [ /* returnType */ Gee.HashDataFunc, /* resultTarget */ object | null ]
    getKeyEqualFunc(): [ /* returnType */ Gee.EqualDataFunc, /* resultTarget */ object | null ]
    getValueEqualFunc(): [ /* returnType */ Gee.EqualDataFunc, /* resultTarget */ object | null ]
    /* Methods of Gee-0.8.Gee.AbstractMap */
    hasKey(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    mapIterator(): Gee.MapIterator
    clear(): void
    foreach(f: Gee.ForallFunc): boolean
    stream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    reserved9(): void
    getSize(): number
    getReadOnly(): boolean
    getKeys(): Gee.Set
    getValues(): Gee.Collection
    getEntries(): Gee.Set
    getReadOnlyView(): Gee.Map
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
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keys", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::values", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::entries", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ExpressionHashMap_ConstructProps)
    _init (config?: ExpressionHashMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ExpressionHashMap
    /* Function overloads */
    static new(kType: GObject.Type, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.Type, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyHashFunc: Gee.HashDataFunc | null, keyEqualFunc: Gee.EqualDataFunc | null, valueEqualFunc: Gee.EqualDataFunc | null): ExpressionHashMap
    static $gtype: GObject.Type
}
interface Function_ConstructProps extends Expression_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathFunction */
    name?: string
    nParams?: number
    closed?: boolean
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class Function {
    /* Properties of GCalc-2.GCalc.MathFunction */
    readonly paramTypes: ExpressionContainer
    name: string
    nParams: number
    closed: boolean
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathFunction */
    verifyParams(): boolean
    getParamTypes(): ExpressionContainer
    getName(): string
    setName(value: string): void
    getNParams(): number
    setNParams(value: number): void
    getClosed(): boolean
    setClosed(value: boolean): void
    /* Methods of GCalc-2.GCalc.MathExpression */
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Methods of GCalc-2.GCalc.Hashable */
    hash(): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::param-types", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::param-types", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::param-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::param-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::param-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-params", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-params", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-params", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-params", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-params", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Function_ConstructProps)
    _init (config?: Function_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static withName(name: string, nparams: number): Function
    static new(): Function
    /* Function overloads */
    static new(): Function
    static $gtype: GObject.Type
}
interface FunctionAcos_ConstructProps extends Function_ConstructProps {
}
class FunctionAcos {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    constructor (config?: FunctionAcos_ConstructProps)
    _init (config?: FunctionAcos_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FunctionAcos
    /* Function overloads */
    static new(): FunctionAcos
    static new(): FunctionAcos
    static $gtype: GObject.Type
}
interface FunctionAcosh_ConstructProps extends Function_ConstructProps {
}
class FunctionAcosh {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    constructor (config?: FunctionAcosh_ConstructProps)
    _init (config?: FunctionAcosh_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FunctionAcosh
    /* Function overloads */
    static new(): FunctionAcosh
    static new(): FunctionAcosh
    static $gtype: GObject.Type
}
interface FunctionAsin_ConstructProps extends Function_ConstructProps {
}
class FunctionAsin {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    constructor (config?: FunctionAsin_ConstructProps)
    _init (config?: FunctionAsin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FunctionAsin
    /* Function overloads */
    static new(): FunctionAsin
    static new(): FunctionAsin
    static $gtype: GObject.Type
}
interface FunctionAsinh_ConstructProps extends Function_ConstructProps {
}
class FunctionAsinh {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    constructor (config?: FunctionAsinh_ConstructProps)
    _init (config?: FunctionAsinh_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FunctionAsinh
    /* Function overloads */
    static new(): FunctionAsinh
    static new(): FunctionAsinh
    static $gtype: GObject.Type
}
interface FunctionAtan_ConstructProps extends Function_ConstructProps {
}
class FunctionAtan {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    constructor (config?: FunctionAtan_ConstructProps)
    _init (config?: FunctionAtan_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FunctionAtan
    /* Function overloads */
    static new(): FunctionAtan
    static new(): FunctionAtan
    static $gtype: GObject.Type
}
interface FunctionAtanh_ConstructProps extends Function_ConstructProps {
}
class FunctionAtanh {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    constructor (config?: FunctionAtanh_ConstructProps)
    _init (config?: FunctionAtanh_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FunctionAtanh
    /* Function overloads */
    static new(): FunctionAtanh
    static new(): FunctionAtanh
    static $gtype: GObject.Type
}
interface FunctionCos_ConstructProps extends Function_ConstructProps {
}
class FunctionCos {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    constructor (config?: FunctionCos_ConstructProps)
    _init (config?: FunctionCos_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FunctionCos
    /* Function overloads */
    static new(): FunctionCos
    static new(): FunctionCos
    static $gtype: GObject.Type
}
interface FunctionCosh_ConstructProps extends Function_ConstructProps {
}
class FunctionCosh {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    constructor (config?: FunctionCosh_ConstructProps)
    _init (config?: FunctionCosh_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FunctionCosh
    /* Function overloads */
    static new(): FunctionCosh
    static new(): FunctionCosh
    static $gtype: GObject.Type
}
interface FunctionExp_ConstructProps extends Function_ConstructProps {
}
class FunctionExp {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    constructor (config?: FunctionExp_ConstructProps)
    _init (config?: FunctionExp_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FunctionExp
    /* Function overloads */
    static new(): FunctionExp
    static new(): FunctionExp
    static $gtype: GObject.Type
}
interface FunctionLog_ConstructProps extends Function_ConstructProps {
}
class FunctionLog {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    constructor (config?: FunctionLog_ConstructProps)
    _init (config?: FunctionLog_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FunctionLog
    /* Function overloads */
    static new(): FunctionLog
    static new(): FunctionLog
    static $gtype: GObject.Type
}
interface FunctionSin_ConstructProps extends Function_ConstructProps {
}
class FunctionSin {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    constructor (config?: FunctionSin_ConstructProps)
    _init (config?: FunctionSin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FunctionSin
    /* Function overloads */
    static new(): FunctionSin
    static new(): FunctionSin
    static $gtype: GObject.Type
}
interface FunctionSinh_ConstructProps extends Function_ConstructProps {
}
class FunctionSinh {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    constructor (config?: FunctionSinh_ConstructProps)
    _init (config?: FunctionSinh_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FunctionSinh
    /* Function overloads */
    static new(): FunctionSinh
    static new(): FunctionSinh
    static $gtype: GObject.Type
}
interface FunctionSqrt_ConstructProps extends Function_ConstructProps {
}
class FunctionSqrt {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    constructor (config?: FunctionSqrt_ConstructProps)
    _init (config?: FunctionSqrt_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FunctionSqrt
    /* Function overloads */
    static new(): FunctionSqrt
    static new(): FunctionSqrt
    static $gtype: GObject.Type
}
interface FunctionTan_ConstructProps extends Function_ConstructProps {
}
class FunctionTan {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    constructor (config?: FunctionTan_ConstructProps)
    _init (config?: FunctionTan_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FunctionTan
    /* Function overloads */
    static new(): FunctionTan
    static new(): FunctionTan
    static $gtype: GObject.Type
}
interface FunctionTanh_ConstructProps extends Function_ConstructProps {
}
class FunctionTanh {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    constructor (config?: FunctionTanh_ConstructProps)
    _init (config?: FunctionTanh_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FunctionTanh
    /* Function overloads */
    static new(): FunctionTanh
    static new(): FunctionTanh
    static $gtype: GObject.Type
}
interface Group_ConstructProps extends Expression_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathGroup */
    level?: MathGroupLevel
    closed?: boolean
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class Group {
    /* Properties of GCalc-2.GCalc.MathGroup */
    level: MathGroupLevel
    closed: boolean
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathGroup */
    evaluate(): MathExpression
    getLevel(): MathGroupLevel
    setLevel(value: MathGroupLevel): void
    getClosed(): boolean
    setClosed(value: boolean): void
    /* Methods of GCalc-2.GCalc.MathExpression */
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::level", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Group_ConstructProps)
    _init (config?: Group_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Group
    /* Function overloads */
    static new(): Group
    static $gtype: GObject.Type
}
interface Minus_ConstructProps extends Expression_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class Minus {
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Minus_ConstructProps)
    _init (config?: Minus_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Minus
    /* Function overloads */
    static new(): Minus
    static $gtype: GObject.Type
}
interface Multiply_ConstructProps extends Expression_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class Multiply {
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Multiply_ConstructProps)
    _init (config?: Multiply_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Multiply
    /* Function overloads */
    static new(): Multiply
    static $gtype: GObject.Type
}
interface Parameter_ConstructProps extends Variable_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
    /* Constructor properties of GCalc-2.GCalc.MathVariable */
    name?: string
    value?: MathConstant
    bind?: MathVariable
}
class Parameter {
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Properties of GCalc-2.GCalc.MathVariable */
    name: string
    value: MathConstant
    bind: MathVariable
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathParameter */
    setValue(val?: any | null): void
    getValue(): any | null
    /* Methods of GCalc-2.GCalc.MathExpression */
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Methods of GCalc-2.GCalc.MathVariable */
    evaluate(): MathExpression
    getName(): string
    setName(value: string): void
    getValue(): MathConstant
    setValue(value: MathConstant): void
    getBind(): MathVariable
    setBind(value: MathVariable): void
    getBinded(): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bind", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Parameter_ConstructProps)
    _init (config?: Parameter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): Parameter
    /* Function overloads */
    static new(): Parameter
    static $gtype: GObject.Type
}
interface Parser_ConstructProps extends GObject.Object_ConstructProps {
}
class Parser {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Parser */
    parse(str: string, eqman: MathEquationManager): void
    readToken(): ParserTokenType
    tokenToString(): string
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
    constructor (config?: Parser_ConstructProps)
    _init (config?: Parser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Parser
    static $gtype: GObject.Type
}
interface Plus_ConstructProps extends Expression_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class Plus {
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Plus_ConstructProps)
    _init (config?: Plus_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Plus
    /* Function overloads */
    static new(): Plus
    static $gtype: GObject.Type
}
interface Polynomial_ConstructProps extends Expression_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class Polynomial {
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathPolynomial */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.MathExpression */
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Polynomial_ConstructProps)
    _init (config?: Polynomial_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Polynomial
    /* Function overloads */
    static new(): Polynomial
    static $gtype: GObject.Type
}
interface Pow_ConstructProps extends Expression_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class Pow {
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Pow_ConstructProps)
    _init (config?: Pow_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Pow
    /* Function overloads */
    static new(): Pow
    static $gtype: GObject.Type
}
interface Result_ConstructProps extends GObject.Object_ConstructProps {
}
class Result {
    /* Properties of GCalc-2.GCalc.MathResult */
    readonly expression: MathExpression
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
    /* Methods of GCalc-2.GCalc.MathResult */
    toString(): string
    getExpression(): MathExpression
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::expression", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expression", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Result_ConstructProps)
    _init (config?: Result_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(exp: MathExpression): Result
    static $gtype: GObject.Type
}
interface Solver_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.Solver */
    equationManager?: MathEquationManager
}
class Solver {
    /* Properties of GCalc-2.GCalc.Solver */
    equationManager: MathEquationManager
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Solver */
    addExpression(exp: string): void
    solve(str: string): MathResult
    getEquationManager(): MathEquationManager
    setEquationManager(value: MathEquationManager): void
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
    connect(sigName: "notify::equation-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equation-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::equation-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::equation-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::equation-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Solver_ConstructProps)
    _init (config?: Solver_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Solver
    static $gtype: GObject.Type
}
interface Term_ConstructProps extends Expression_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class Term {
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathTerm */
    add(t: MathTerm): MathExpression
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.MathExpression */
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Term_ConstructProps)
    _init (config?: Term_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Term
    /* Function overloads */
    static new(): Term
    static evaluateConstants(c1: MathConstant, c2: MathConstant, op: MathOperator): MathExpression
    static $gtype: GObject.Type
}
interface Variable_ConstructProps extends Expression_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathVariable */
    name?: string
    value?: MathConstant
    bind?: MathVariable
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class Variable {
    /* Properties of GCalc-2.GCalc.MathVariable */
    name: string
    value: MathConstant
    bind: MathVariable
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    toString(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathVariable */
    evaluate(): MathExpression
    getName(): string
    setName(value: string): void
    getValue(): MathConstant
    setValue(value: MathConstant): void
    getBind(): MathVariable
    setBind(value: MathVariable): void
    getBinded(): boolean
    /* Methods of GCalc-2.GCalc.MathExpression */
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Methods of GCalc-2.GCalc.Hashable */
    hash(): number
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
    connect(sigName: "notify::value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bind", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Variable_ConstructProps)
    _init (config?: Variable_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class AssignClass {
    static name: string
}
class AssignPrivate {
    static name: string
}
abstract class ConstantClass {
    static name: string
}
class ConstantPrivate {
    static name: string
}
abstract class DivisionClass {
    static name: string
}
class DivisionPrivate {
    static name: string
}
abstract class EquationClass {
    static name: string
}
class EquationPrivate {
    static name: string
}
abstract class EquationManagerClass {
    static name: string
}
class EquationManagerPrivate {
    static name: string
}
abstract class ErrorResultClass {
    static name: string
}
class ErrorResultPrivate {
    static name: string
}
abstract class ExpressionClass {
    /* Fields of GCalc-2.GCalc.ExpressionClass */
    readonly toString: (self: Expression) => string
    readonly solve: (self: Expression) => MathResult
    static name: string
}
class ExpressionPrivate {
    static name: string
}
abstract class ErrorExpressionClass {
    static name: string
}
class ErrorExpressionPrivate {
    static name: string
}
abstract class ExpressionContainerClass {
    static name: string
}
class ExpressionContainerPrivate {
    static name: string
}
abstract class ExpressionHashMapClass {
    static name: string
}
class ExpressionHashMapPrivate {
    static name: string
}
abstract class FunctionClass {
    /* Fields of GCalc-2.GCalc.FunctionClass */
    readonly evaluate: (self: Function) => MathExpression
    static name: string
}
class FunctionPrivate {
    static name: string
}
abstract class FunctionAcosClass {
    static name: string
}
class FunctionAcosPrivate {
    static name: string
}
abstract class FunctionAcoshClass {
    static name: string
}
class FunctionAcoshPrivate {
    static name: string
}
abstract class FunctionAsinClass {
    static name: string
}
class FunctionAsinPrivate {
    static name: string
}
abstract class FunctionAsinhClass {
    static name: string
}
class FunctionAsinhPrivate {
    static name: string
}
abstract class FunctionAtanClass {
    static name: string
}
class FunctionAtanPrivate {
    static name: string
}
abstract class FunctionAtanhClass {
    static name: string
}
class FunctionAtanhPrivate {
    static name: string
}
abstract class FunctionCosClass {
    static name: string
}
class FunctionCosPrivate {
    static name: string
}
abstract class FunctionCoshClass {
    static name: string
}
class FunctionCoshPrivate {
    static name: string
}
abstract class FunctionExpClass {
    static name: string
}
class FunctionExpPrivate {
    static name: string
}
abstract class FunctionLogClass {
    static name: string
}
class FunctionLogPrivate {
    static name: string
}
abstract class FunctionSinClass {
    static name: string
}
class FunctionSinPrivate {
    static name: string
}
abstract class FunctionSinhClass {
    static name: string
}
class FunctionSinhPrivate {
    static name: string
}
abstract class FunctionSqrtClass {
    static name: string
}
class FunctionSqrtPrivate {
    static name: string
}
abstract class FunctionTanClass {
    static name: string
}
class FunctionTanPrivate {
    static name: string
}
abstract class FunctionTanhClass {
    static name: string
}
class FunctionTanhPrivate {
    static name: string
}
abstract class GroupClass {
    static name: string
}
class GroupPrivate {
    static name: string
}
abstract class MinusClass {
    static name: string
}
class MinusPrivate {
    static name: string
}
abstract class MultiplyClass {
    static name: string
}
class MultiplyPrivate {
    static name: string
}
abstract class ParameterClass {
    static name: string
}
class ParameterPrivate {
    static name: string
}
abstract class ParserClass {
    static name: string
}
class ParserPrivate {
    static name: string
}
abstract class PlusClass {
    static name: string
}
class PlusPrivate {
    static name: string
}
abstract class PolynomialClass {
    static name: string
}
class PolynomialPrivate {
    static name: string
}
abstract class PowClass {
    static name: string
}
class PowPrivate {
    static name: string
}
abstract class ResultClass {
    static name: string
}
class ResultPrivate {
    static name: string
}
abstract class SolverClass {
    static name: string
}
class SolverPrivate {
    static name: string
}
abstract class TermClass {
    static name: string
}
class TermPrivate {
    static name: string
}
abstract class VariableClass {
    static name: string
}
class VariablePrivate {
    static name: string
}
abstract class HashableIface {
    /* Fields of GCalc-2.GCalc.HashableIface */
    readonly hash: (self: Hashable) => number
    static name: string
}
abstract class MathAssignIface {
    static name: string
}
abstract class MathBinaryOperatorIface {
    static name: string
}
abstract class MathConstantIface {
    /* Fields of GCalc-2.GCalc.MathConstantIface */
    readonly add: (self: MathConstant, c: MathConstant) => MathConstant
    readonly subtract: (self: MathConstant, c: MathConstant) => MathConstant
    readonly multiply: (self: MathConstant, c: MathConstant) => MathConstant
    readonly divide: (self: MathConstant, c: MathConstant) => MathConstant
    readonly neg: (self: MathConstant) => MathConstant
    readonly pow: (self: MathConstant, c: MathConstant) => MathConstant
    static name: string
}
abstract class MathConstantComplexIface {
    /* Fields of GCalc-2.GCalc.MathConstantComplexIface */
    readonly real: (self: MathConstantComplex) => number
    readonly imag: (self: MathConstantComplex) => number
    readonly zero: (self: MathConstantComplex) => void
    static name: string
}
abstract class MathConstantNumberIface {
    /* Fields of GCalc-2.GCalc.MathConstantNumberIface */
    readonly value: (self: MathConstantNumber) => number
    static name: string
}
abstract class MathDivisionIface {
    static name: string
}
abstract class MathEquationIface {
    /* Fields of GCalc-2.GCalc.MathEquationIface */
    readonly getVariables: (self: MathEquation) => ExpressionHashMap
    static name: string
}
abstract class MathEquationManagerIface {
    /* Fields of GCalc-2.GCalc.MathEquationManagerIface */
    readonly findVariable: (self: MathEquationManager, name: string) => MathVariable
    readonly getEquations: (self: MathEquationManager) => ExpressionContainer
    readonly getFunctions: (self: MathEquationManager) => ExpressionContainer
    static name: string
}
abstract class MathErrorResultIface {
    /* Fields of GCalc-2.GCalc.MathErrorResultIface */
    readonly getMessage: (self: MathErrorResult) => string
    static name: string
}
abstract class MathExpressionIface {
    /* Fields of GCalc-2.GCalc.MathExpressionIface */
    readonly toString: (self: MathExpression) => string
    readonly solve: (self: MathExpression) => MathResult
    readonly getParent: (self: MathExpression) => MathExpression
    readonly setParent: (self: MathExpression, value: MathExpression) => void
    readonly getExpressions: (self: MathExpression) => ExpressionContainer
    static name: string
}
abstract class MathFunctionIface {
    /* Fields of GCalc-2.GCalc.MathFunctionIface */
    readonly evaluate: (self: MathFunction) => MathExpression
    readonly verifyParams: (self: MathFunction) => boolean
    readonly getParamTypes: (self: MathFunction) => ExpressionContainer
    readonly getName: (self: MathFunction) => string
    readonly setName: (self: MathFunction, value: string) => void
    readonly getNParams: (self: MathFunction) => number
    readonly setNParams: (self: MathFunction, value: number) => void
    readonly getClosed: (self: MathFunction) => boolean
    readonly setClosed: (self: MathFunction, value: boolean) => void
    static name: string
}
abstract class MathGroupIface {
    /* Fields of GCalc-2.GCalc.MathGroupIface */
    readonly evaluate: (self: MathGroup) => MathExpression
    readonly getLevel: (self: MathGroup) => MathGroupLevel
    readonly setLevel: (self: MathGroup, value: MathGroupLevel) => void
    readonly getClosed: (self: MathGroup) => boolean
    readonly setClosed: (self: MathGroup, value: boolean) => void
    static name: string
}
abstract class MathMinusIface {
    static name: string
}
abstract class MathMultiplyIface {
    static name: string
}
abstract class MathOperatorIface {
    static name: string
}
abstract class MathParameterIface {
    /* Fields of GCalc-2.GCalc.MathParameterIface */
    readonly setValue: (self: MathParameter, val?: any | null) => void
    readonly getValue: (self: MathParameter) => any | null
    static name: string
}
abstract class MathPlusIface {
    static name: string
}
abstract class MathPolynomialIface {
    /* Fields of GCalc-2.GCalc.MathPolynomialIface */
    readonly evaluate: (self: MathPolynomial) => MathExpression
    static name: string
}
abstract class MathPowIface {
    static name: string
}
abstract class MathResultIface {
    /* Fields of GCalc-2.GCalc.MathResultIface */
    readonly toString: (self: MathResult) => string
    readonly getExpression: (self: MathResult) => MathExpression
    static name: string
}
abstract class MathTermIface {
    /* Fields of GCalc-2.GCalc.MathTermIface */
    readonly add: (self: MathTerm, t: MathTerm) => MathExpression
    readonly evaluate: (self: MathTerm) => MathExpression
    static name: string
}
abstract class MathVariableIface {
    /* Fields of GCalc-2.GCalc.MathVariableIface */
    readonly evaluate: (self: MathVariable) => MathExpression
    readonly getName: (self: MathVariable) => string
    readonly setName: (self: MathVariable, value: string) => void
    readonly getValue: (self: MathVariable) => MathConstant
    readonly setValue: (self: MathVariable, value: MathConstant) => void
    readonly getBind: (self: MathVariable) => MathVariable
    readonly setBind: (self: MathVariable, value: MathVariable) => void
    readonly getBinded: (self: MathVariable) => boolean
    static name: string
}
}
export default GCalc;