/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GCalc-2
 */

import type * as Gjs from './Gjs';
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Hashable */
    hash(): number
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
    /* Virtual methods of GCalc-2.GCalc.Hashable */
    vfunc_hash(): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Hashable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Hashable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathAssign */
    evaluate(): MathExpression
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    to_string(): string
    solve(): MathResult
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.MathAssign */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MathAssign, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MathAssign, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: MathAssign, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MathAssign, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: MathAssign, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: MathAssign, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    to_string(): string
    solve(): MathResult
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.MathBinaryOperator */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MathBinaryOperator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MathBinaryOperator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: MathBinaryOperator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MathBinaryOperator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: MathBinaryOperator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: MathBinaryOperator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathConstant */
    add(c: MathConstant): MathConstant
    subtract(c: MathConstant): MathConstant
    multiply(c: MathConstant): MathConstant
    divide(c: MathConstant): MathConstant
    neg(): MathConstant
    pow(c: MathConstant): MathConstant
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    to_string(): string
    solve(): MathResult
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.MathConstant */
    vfunc_add(c: MathConstant): MathConstant
    vfunc_subtract(c: MathConstant): MathConstant
    vfunc_multiply(c: MathConstant): MathConstant
    vfunc_divide(c: MathConstant): MathConstant
    vfunc_neg(): MathConstant
    vfunc_pow(c: MathConstant): MathConstant
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MathConstant, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MathConstant, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: MathConstant, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MathConstant, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: MathConstant, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: MathConstant, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathConstantComplex */
    real(): number
    imag(): number
    zero(): void
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    to_string(): string
    solve(): MathResult
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Methods of GCalc-2.GCalc.MathConstant */
    add(c: MathConstant): MathConstant
    subtract(c: MathConstant): MathConstant
    multiply(c: MathConstant): MathConstant
    divide(c: MathConstant): MathConstant
    neg(): MathConstant
    pow(c: MathConstant): MathConstant
    /* Virtual methods of GCalc-2.GCalc.MathConstantComplex */
    vfunc_real(): number
    vfunc_imag(): number
    vfunc_zero(): void
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    vfunc_add(c: MathConstant): MathConstant
    vfunc_subtract(c: MathConstant): MathConstant
    vfunc_multiply(c: MathConstant): MathConstant
    vfunc_divide(c: MathConstant): MathConstant
    vfunc_neg(): MathConstant
    vfunc_pow(c: MathConstant): MathConstant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MathConstantComplex, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MathConstantComplex, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: MathConstantComplex, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MathConstantComplex, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: MathConstantComplex, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: MathConstantComplex, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathConstantNumber */
    value(): number
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    to_string(): string
    solve(): MathResult
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Methods of GCalc-2.GCalc.MathConstant */
    add(c: MathConstant): MathConstant
    subtract(c: MathConstant): MathConstant
    multiply(c: MathConstant): MathConstant
    divide(c: MathConstant): MathConstant
    neg(): MathConstant
    pow(c: MathConstant): MathConstant
    /* Virtual methods of GCalc-2.GCalc.MathConstantNumber */
    vfunc_value(): number
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    vfunc_add(c: MathConstant): MathConstant
    vfunc_subtract(c: MathConstant): MathConstant
    vfunc_multiply(c: MathConstant): MathConstant
    vfunc_divide(c: MathConstant): MathConstant
    vfunc_neg(): MathConstant
    vfunc_pow(c: MathConstant): MathConstant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MathConstantNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MathConstantNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: MathConstantNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MathConstantNumber, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: MathConstantNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: MathConstantNumber, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    to_string(): string
    solve(): MathResult
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.MathDivision */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MathDivision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MathDivision, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: MathDivision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MathDivision, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: MathDivision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: MathDivision, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathEquation */
    get_variables(): ExpressionHashMap
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    to_string(): string
    solve(): MathResult
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.MathEquation */
    vfunc_get_variables(): ExpressionHashMap
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MathEquation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MathEquation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::variables", callback: (($obj: MathEquation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variables", callback: (($obj: MathEquation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: MathEquation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MathEquation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: MathEquation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: MathEquation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathEquationManager */
    find_variable(name: string): MathVariable
    get_equations(): ExpressionContainer
    get_functions(): ExpressionContainer
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
    /* Virtual methods of GCalc-2.GCalc.MathEquationManager */
    vfunc_find_variable(name: string): MathVariable
    vfunc_get_equations(): ExpressionContainer
    vfunc_get_functions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MathEquationManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MathEquationManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::equations", callback: (($obj: MathEquationManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equations", callback: (($obj: MathEquationManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::functions", callback: (($obj: MathEquationManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::functions", callback: (($obj: MathEquationManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathErrorResult */
    get_message(): string
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
    /* Methods of GCalc-2.GCalc.MathResult */
    to_string(): string
    get_expression(): MathExpression
    /* Virtual methods of GCalc-2.GCalc.MathErrorResult */
    vfunc_get_message(): string
    vfunc_to_string(): string
    vfunc_get_expression(): MathExpression
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MathErrorResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MathErrorResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::message", callback: (($obj: MathErrorResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: (($obj: MathErrorResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expression", callback: (($obj: MathErrorResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expression", callback: (($obj: MathErrorResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathExpression */
    to_string(): string
    solve(): MathResult
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
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
    /* Virtual methods of GCalc-2.GCalc.MathExpression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MathExpression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MathExpression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: MathExpression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MathExpression, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: MathExpression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: MathExpression, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MathExpression_ConstructProps)
    _init (config?: MathExpression_ConstructProps): void
    static $gtype: GObject.Type
}
interface MathFunction_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathFunction */
    name?: string
    n_params?: number
    closed?: boolean
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class MathFunction {
    /* Properties of GCalc-2.GCalc.MathFunction */
    readonly param_types: ExpressionContainer
    name: string
    n_params: number
    closed: boolean
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathFunction */
    evaluate(): MathExpression
    verify_params(): boolean
    get_param_types(): ExpressionContainer
    get_name(): string
    set_name(value: string): void
    get_n_params(): number
    set_n_params(value: number): void
    get_closed(): boolean
    set_closed(value: boolean): void
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    to_string(): string
    solve(): MathResult
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.MathFunction */
    vfunc_evaluate(): MathExpression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MathFunction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MathFunction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::param-types", callback: (($obj: MathFunction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::param-types", callback: (($obj: MathFunction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: MathFunction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MathFunction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-params", callback: (($obj: MathFunction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-params", callback: (($obj: MathFunction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::closed", callback: (($obj: MathFunction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: MathFunction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: MathFunction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MathFunction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: MathFunction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: MathFunction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathGroup */
    evaluate(): MathExpression
    get_level(): MathGroupLevel
    set_level(value: MathGroupLevel): void
    get_closed(): boolean
    set_closed(value: boolean): void
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    to_string(): string
    solve(): MathResult
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.MathGroup */
    vfunc_evaluate(): MathExpression
    vfunc_get_level(): MathGroupLevel
    vfunc_set_level(value: MathGroupLevel): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MathGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MathGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::level", callback: (($obj: MathGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: (($obj: MathGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::closed", callback: (($obj: MathGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: MathGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: MathGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MathGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: MathGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: MathGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    to_string(): string
    solve(): MathResult
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.MathMinus */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MathMinus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MathMinus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: MathMinus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MathMinus, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: MathMinus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: MathMinus, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    to_string(): string
    solve(): MathResult
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.MathMultiply */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MathMultiply, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MathMultiply, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: MathMultiply, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MathMultiply, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: MathMultiply, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: MathMultiply, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    to_string(): string
    solve(): MathResult
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.MathOperator */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MathOperator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MathOperator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: MathOperator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MathOperator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: MathOperator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: MathOperator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathParameter */
    set_value(val?: any | null): void
    get_value(): any | null
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    to_string(): string
    solve(): MathResult
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Methods of GCalc-2.GCalc.MathVariable */
    evaluate(): MathExpression
    get_name(): string
    set_name(value: string): void
    get_value(): MathConstant
    set_value(value: MathConstant): void
    get_bind(): MathVariable
    set_bind(value: MathVariable): void
    get_binded(): boolean
    /* Virtual methods of GCalc-2.GCalc.MathParameter */
    vfunc_set_value(val?: any | null): void
    /* Function overloads */
    vfunc_set_value(value: MathConstant): void
    vfunc_get_value(): any | null
    /* Function overloads */
    vfunc_get_value(): MathConstant
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    vfunc_evaluate(): MathExpression
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_bind(): MathVariable
    vfunc_set_bind(value: MathVariable): void
    vfunc_get_binded(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MathParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MathParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: MathParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MathParameter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: MathParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: MathParameter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: MathParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MathParameter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: MathParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: MathParameter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bind", callback: (($obj: MathParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind", callback: (($obj: MathParameter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    to_string(): string
    solve(): MathResult
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.MathPlus */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MathPlus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MathPlus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: MathPlus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MathPlus, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: MathPlus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: MathPlus, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathPolynomial */
    evaluate(): MathExpression
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    to_string(): string
    solve(): MathResult
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.MathPolynomial */
    vfunc_evaluate(): MathExpression
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MathPolynomial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MathPolynomial, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: MathPolynomial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MathPolynomial, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: MathPolynomial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: MathPolynomial, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    to_string(): string
    solve(): MathResult
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.MathPow */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MathPow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MathPow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: MathPow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MathPow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: MathPow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: MathPow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathResult */
    to_string(): string
    get_expression(): MathExpression
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
    /* Virtual methods of GCalc-2.GCalc.MathResult */
    vfunc_to_string(): string
    vfunc_get_expression(): MathExpression
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MathResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MathResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::expression", callback: (($obj: MathResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expression", callback: (($obj: MathResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathTerm */
    add(t: MathTerm): MathExpression
    evaluate(): MathExpression
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    to_string(): string
    solve(): MathResult
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.MathTerm */
    vfunc_add(t: MathTerm): MathExpression
    vfunc_evaluate(): MathExpression
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MathTerm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MathTerm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: MathTerm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MathTerm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: MathTerm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: MathTerm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MathTerm_ConstructProps)
    _init (config?: MathTerm_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static evaluate_constants(c1: MathConstant, c2: MathConstant, op: MathOperator): MathExpression
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.MathVariable */
    evaluate(): MathExpression
    get_name(): string
    set_name(value: string): void
    get_value(): MathConstant
    set_value(value: MathConstant): void
    get_bind(): MathVariable
    set_bind(value: MathVariable): void
    get_binded(): boolean
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    to_string(): string
    solve(): MathResult
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.MathVariable */
    vfunc_evaluate(): MathExpression
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_value(): MathConstant
    vfunc_set_value(value: MathConstant): void
    vfunc_get_bind(): MathVariable
    vfunc_set_bind(value: MathVariable): void
    vfunc_get_binded(): boolean
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MathVariable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MathVariable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: MathVariable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MathVariable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: MathVariable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: MathVariable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bind", callback: (($obj: MathVariable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind", callback: (($obj: MathVariable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: MathVariable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MathVariable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: MathVariable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: MathVariable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Methods of GCalc-2.GCalc.MathAssign */
    evaluate(): MathExpression
    /* Virtual methods of GCalc-2.GCalc.Assign */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Assign, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Assign, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: Assign, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Assign, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: Assign, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Assign, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathConstant */
    add(c: MathConstant): MathConstant
    subtract(c: MathConstant): MathConstant
    multiply(c: MathConstant): MathConstant
    divide(c: MathConstant): MathConstant
    neg(): MathConstant
    pow(c: MathConstant): MathConstant
    /* Methods of GCalc-2.GCalc.MathExpression */
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Methods of GCalc-2.GCalc.MathConstantNumber */
    value(): number
    /* Methods of GCalc-2.GCalc.MathConstantComplex */
    real(): number
    imag(): number
    zero(): void
    /* Virtual methods of GCalc-2.GCalc.Constant */
    vfunc_add(c: MathConstant): MathConstant
    vfunc_subtract(c: MathConstant): MathConstant
    vfunc_multiply(c: MathConstant): MathConstant
    vfunc_divide(c: MathConstant): MathConstant
    vfunc_neg(): MathConstant
    vfunc_pow(c: MathConstant): MathConstant
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    vfunc_value(): number
    vfunc_real(): number
    vfunc_imag(): number
    vfunc_zero(): void
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Constant, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Constant, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: Constant, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Constant, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: Constant, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Constant, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Constant_ConstructProps)
    _init (config?: Constant_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static integer(val: number): Constant
    static unsigned_integer(val: number): Constant
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.Division */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Division, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Division, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: Division, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Division, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: Division, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Division, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathEquation */
    get_variables(): ExpressionHashMap
    /* Methods of GCalc-2.GCalc.MathExpression */
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.Equation */
    vfunc_get_variables(): ExpressionHashMap
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Equation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Equation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::variables", callback: (($obj: Equation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variables", callback: (($obj: Equation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Equation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Equation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: Equation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Equation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
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
    /* Methods of GCalc-2.GCalc.MathEquationManager */
    find_variable(name: string): MathVariable
    get_equations(): ExpressionContainer
    get_functions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.EquationManager */
    vfunc_find_variable(name: string): MathVariable
    vfunc_get_equations(): ExpressionContainer
    vfunc_get_functions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: EquationManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EquationManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::equations", callback: (($obj: EquationManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equations", callback: (($obj: EquationManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::functions", callback: (($obj: EquationManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::functions", callback: (($obj: EquationManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
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
    /* Methods of GCalc-2.GCalc.MathResult */
    to_string(): string
    get_expression(): MathExpression
    /* Methods of GCalc-2.GCalc.MathErrorResult */
    get_message(): string
    /* Virtual methods of GCalc-2.GCalc.ErrorResult */
    vfunc_to_string(): string
    vfunc_get_expression(): MathExpression
    vfunc_get_message(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ErrorResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ErrorResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::expression", callback: (($obj: ErrorResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expression", callback: (($obj: ErrorResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::message", callback: (($obj: ErrorResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: (($obj: ErrorResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ErrorExpression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ErrorExpression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly read_only_view: Gee.BidirList
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    /* Fields of Gee-0.8.Gee.ArrayList */
    readonly _items: object[]
    readonly _items_length1: number
    readonly _size: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.ExpressionContainer */
    get_object(position: number): GObject.Object | null
    find(exp: MathExpression): MathExpression | null
    find_named(name: string): MathExpression | null
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    /* Methods of Gee-0.8.Gee.ArrayList */
    add_all(collection: Gee.Collection): boolean
    get_equal_func(): [ /* returnType */ Gee.EqualDataFunc, /* result_target */ object | null ]
    /* Methods of Gee-0.8.Gee.AbstractBidirList */
    bidir_list_iterator(): Gee.BidirListIterator
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
    get_read_only_view(): Gee.BidirList
    /* Methods of Gee-0.8.Gee.AbstractList */
    list_iterator(): Gee.ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    index_of(item?: object | null): number
    insert(index: number, item?: object | null): void
    remove_at(index: number): object | null
    slice(start: number, stop: number): Gee.List | null
    get_read_only_view(): Gee.List
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Gee.Collection
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
    /* Methods of Gio-2.0.Gio.ListModel */
    get_item_type(): GObject.Type
    get_n_items(): number
    get_item(position: number): GObject.Object | null
    items_changed(position: number, removed: number, added: number): void
    /* Virtual methods of GCalc-2.GCalc.ExpressionContainer */
    vfunc_get_item(position: number): GObject.Object | null
    vfunc_get_item_type(): GObject.Type
    vfunc_get_n_items(): number
    vfunc_get_read_only_view(): Gee.BidirList
    /* Function overloads */
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List
    /* Function overloads */
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    /* Virtual methods of Gee-0.8.Gee.ArrayList */
    vfunc_get_read_only_view(): Gee.BidirList
    /* Function overloads */
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List
    /* Function overloads */
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractBidirList */
    vfunc_bidir_list_iterator(): Gee.BidirListIterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): Gee.BidirList
    /* Function overloads */
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.List
    /* Function overloads */
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_list_iterator(): Gee.ListIterator
    vfunc_get(index: number): object | null
    vfunc_set(index: number, item?: object | null): void
    vfunc_index_of(item?: object | null): number
    vfunc_insert(index: number, item?: object | null): void
    vfunc_remove_at(index: number): object | null
    vfunc_slice(start: number, stop: number): Gee.List | null
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_insert_all(index: number, collection: Gee.Collection): void
    vfunc_sort(compare_func: GLib.CompareDataFunc | null): void
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Gee.Collection): boolean
    vfunc_contains_all(collection: Gee.Collection): boolean
    vfunc_remove_all(collection: Gee.Collection): boolean
    vfunc_retain_all(collection: Gee.Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Gee.Iterator): boolean
    vfunc_contains_all_iterator(iter: Gee.Iterator): boolean
    vfunc_remove_all_iterator(iter: Gee.Iterator): boolean
    vfunc_get_size(): number
    vfunc_get_is_empty(): boolean
    vfunc_get_read_only(): boolean
    vfunc_iterator(): Gee.Iterator
    vfunc_foreach(f: Gee.ForallFunc): boolean
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfunc_filter(pred: Gee.Predicate): Gee.Iterator
    vfunc_chop(offset: number, length: number): Gee.Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfunc_tee(forks: number): Gee.Iterator[]
    vfunc_first_match(pred: Gee.Predicate): object | null
    vfunc_any_match(pred: Gee.Predicate): boolean
    vfunc_all_match(pred: Gee.Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfunc_get_element_type(): GObject.Type
    /* Virtual methods of Gee-0.8.Gee.AbstractList */
    vfunc_list_iterator(): Gee.ListIterator
    vfunc_get(index: number): object | null
    /* Function overloads */
    vfunc_get(index: number): object | null
    vfunc_set(index: number, item?: object | null): void
    /* Function overloads */
    vfunc_set(index: number, item?: object | null): void
    vfunc_index_of(item?: object | null): number
    /* Function overloads */
    vfunc_index_of(item?: object | null): number
    vfunc_insert(index: number, item?: object | null): void
    /* Function overloads */
    vfunc_insert(index: number, item?: object | null): void
    vfunc_remove_at(index: number): object | null
    /* Function overloads */
    vfunc_remove_at(index: number): object | null
    vfunc_slice(start: number, stop: number): Gee.List | null
    /* Function overloads */
    vfunc_slice(start: number, stop: number): Gee.List | null
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): Gee.List
    /* Function overloads */
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_insert_all(index: number, collection: Gee.Collection): void
    vfunc_sort(compare_func: GLib.CompareDataFunc | null): void
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_add_all(collection: Gee.Collection): boolean
    vfunc_contains_all(collection: Gee.Collection): boolean
    vfunc_remove_all(collection: Gee.Collection): boolean
    vfunc_retain_all(collection: Gee.Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Gee.Iterator): boolean
    vfunc_contains_all_iterator(iter: Gee.Iterator): boolean
    vfunc_remove_all_iterator(iter: Gee.Iterator): boolean
    vfunc_get_size(): number
    vfunc_get_is_empty(): boolean
    vfunc_get_read_only(): boolean
    vfunc_iterator(): Gee.Iterator
    vfunc_foreach(f: Gee.ForallFunc): boolean
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfunc_filter(pred: Gee.Predicate): Gee.Iterator
    vfunc_chop(offset: number, length: number): Gee.Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfunc_tee(forks: number): Gee.Iterator[]
    vfunc_first_match(pred: Gee.Predicate): object | null
    vfunc_any_match(pred: Gee.Predicate): boolean
    vfunc_all_match(pred: Gee.Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfunc_get_element_type(): GObject.Type
    /* Virtual methods of Gee-0.8.Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    /* Function overloads */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    /* Function overloads */
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    /* Function overloads */
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_iterator(): Gee.Iterator
    vfunc_foreach(f: Gee.ForallFunc): boolean
    /* Function overloads */
    vfunc_foreach(f: Gee.ForallFunc): boolean
    vfunc_foreach(f: Gee.ForallFunc): boolean
    vfunc_foreach(f: Gee.ForallFunc): boolean
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfunc_filter(pred: Gee.Predicate): Gee.Iterator
    vfunc_chop(offset: number, length: number): Gee.Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfunc_tee(forks: number): Gee.Iterator[]
    vfunc_first_match(pred: Gee.Predicate): object | null
    vfunc_any_match(pred: Gee.Predicate): boolean
    vfunc_all_match(pred: Gee.Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_add_all(collection: Gee.Collection): boolean
    vfunc_contains_all(collection: Gee.Collection): boolean
    vfunc_remove_all(collection: Gee.Collection): boolean
    vfunc_retain_all(collection: Gee.Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Gee.Iterator): boolean
    vfunc_contains_all_iterator(iter: Gee.Iterator): boolean
    vfunc_remove_all_iterator(iter: Gee.Iterator): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.ListModel */
    connect(sigName: "items-changed", callback: (($obj: ExpressionContainer, position: number, removed: number, added: number) => void)): number
    connect_after(sigName: "items-changed", callback: (($obj: ExpressionContainer, position: number, removed: number, added: number) => void)): number
    emit(sigName: "items-changed", position: number, removed: number, added: number): void
    connect(sigName: "notify::parent", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ExpressionContainer_ConstructProps)
    _init (config?: ExpressionContainer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ExpressionContainer
    /* Function overloads */
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): ExpressionContainer
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
    readonly read_only: boolean
    readonly keys: Gee.Set
    readonly values: Gee.Collection
    readonly entries: Gee.Set
    readonly read_only_view: Gee.Map
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.ExpressionHashMap */
    add(exp: MathExpression): void
    remove(exp: MathExpression): void
    find_named(name: string): MathExpression | null
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    /* Methods of Gee-0.8.Gee.HashMap */
    get_key_hash_func(): [ /* returnType */ Gee.HashDataFunc, /* result_target */ object | null ]
    get_key_equal_func(): [ /* returnType */ Gee.EqualDataFunc, /* result_target */ object | null ]
    get_value_equal_func(): [ /* returnType */ Gee.EqualDataFunc, /* result_target */ object | null ]
    /* Methods of Gee-0.8.Gee.AbstractMap */
    has_key(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    map_iterator(): Gee.MapIterator
    clear(): void
    foreach(f: Gee.ForallFunc): boolean
    stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
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
    get_size(): number
    get_read_only(): boolean
    get_keys(): Gee.Set
    get_values(): Gee.Collection
    get_entries(): Gee.Set
    get_read_only_view(): Gee.Map
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
    /* Virtual methods of Gee-0.8.Gee.AbstractMap */
    vfunc_has_key(key?: object | null): boolean
    /* Function overloads */
    vfunc_has_key(key?: object | null): boolean
    vfunc_has(key?: object | null, value?: object | null): boolean
    /* Function overloads */
    vfunc_has(key?: object | null, value?: object | null): boolean
    vfunc_get(key?: object | null): object | null
    /* Function overloads */
    vfunc_get(key?: object | null): object | null
    vfunc_set(key?: object | null, value?: object | null): void
    /* Function overloads */
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    /* Function overloads */
    vfunc_unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_map_iterator(): Gee.MapIterator
    vfunc_clear(): void
    vfunc_foreach(f: Gee.ForallFunc): boolean
    /* Function overloads */
    vfunc_foreach(f: Gee.ForallFunc): boolean
    vfunc_foreach(f: Gee.ForallFunc): boolean
    vfunc_foreach(f: Gee.ForallFunc): boolean
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    /* Function overloads */
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_keys(): Gee.Set
    vfunc_get_values(): Gee.Collection
    vfunc_get_entries(): Gee.Set
    vfunc_get_read_only_view(): Gee.Map
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfunc_filter(pred: Gee.Predicate): Gee.Iterator
    vfunc_chop(offset: number, length: number): Gee.Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfunc_tee(forks: number): Gee.Iterator[]
    vfunc_first_match(pred: Gee.Predicate): object | null
    vfunc_any_match(pred: Gee.Predicate): boolean
    vfunc_all_match(pred: Gee.Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_iterator(): Gee.Iterator
    vfunc_set_all(map: Gee.Map): void
    vfunc_unset_all(map: Gee.Map): boolean
    vfunc_has_all(map: Gee.Map): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keys", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::values", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::entries", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ExpressionHashMap_ConstructProps)
    _init (config?: ExpressionHashMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ExpressionHashMap
    /* Function overloads */
    static new(k_type: GObject.Type, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.Type, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, key_hash_func: Gee.HashDataFunc | null, key_equal_func: Gee.EqualDataFunc | null, value_equal_func: Gee.EqualDataFunc | null): ExpressionHashMap
    static $gtype: GObject.Type
}
interface Function_ConstructProps extends Expression_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.MathFunction */
    name?: string
    n_params?: number
    closed?: boolean
    /* Constructor properties of GCalc-2.GCalc.MathExpression */
    parent?: MathExpression
}
class Function {
    /* Properties of GCalc-2.GCalc.MathFunction */
    readonly param_types: ExpressionContainer
    name: string
    n_params: number
    closed: boolean
    /* Properties of GCalc-2.GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathFunction */
    verify_params(): boolean
    get_param_types(): ExpressionContainer
    get_name(): string
    set_name(value: string): void
    get_n_params(): number
    set_n_params(value: number): void
    get_closed(): boolean
    set_closed(value: boolean): void
    /* Methods of GCalc-2.GCalc.MathExpression */
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Methods of GCalc-2.GCalc.Hashable */
    hash(): number
    /* Virtual methods of GCalc-2.GCalc.Function */
    vfunc_evaluate(): MathExpression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    vfunc_hash(): number
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::param-types", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::param-types", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-params", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-params", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::closed", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Function_ConstructProps)
    _init (config?: Function_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static with_name(name: string, nparams: number): Function
    static new(): Function
    /* Function overloads */
    static new(): Function
    static $gtype: GObject.Type
}
interface FunctionAcos_ConstructProps extends Function_ConstructProps {
}
class FunctionAcos {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Virtual methods of GCalc-2.GCalc.Function */
    vfunc_evaluate(): MathExpression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    vfunc_hash(): number
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FunctionAcos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FunctionAcos, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Virtual methods of GCalc-2.GCalc.Function */
    vfunc_evaluate(): MathExpression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    vfunc_hash(): number
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FunctionAcosh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FunctionAcosh, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Virtual methods of GCalc-2.GCalc.Function */
    vfunc_evaluate(): MathExpression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    vfunc_hash(): number
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FunctionAsin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FunctionAsin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Virtual methods of GCalc-2.GCalc.Function */
    vfunc_evaluate(): MathExpression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    vfunc_hash(): number
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FunctionAsinh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FunctionAsinh, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Virtual methods of GCalc-2.GCalc.Function */
    vfunc_evaluate(): MathExpression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    vfunc_hash(): number
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FunctionAtan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FunctionAtan, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Virtual methods of GCalc-2.GCalc.Function */
    vfunc_evaluate(): MathExpression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    vfunc_hash(): number
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FunctionAtanh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FunctionAtanh, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Virtual methods of GCalc-2.GCalc.Function */
    vfunc_evaluate(): MathExpression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    vfunc_hash(): number
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FunctionCos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FunctionCos, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Virtual methods of GCalc-2.GCalc.Function */
    vfunc_evaluate(): MathExpression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    vfunc_hash(): number
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FunctionCosh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FunctionCosh, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Virtual methods of GCalc-2.GCalc.Function */
    vfunc_evaluate(): MathExpression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    vfunc_hash(): number
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FunctionExp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FunctionExp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Virtual methods of GCalc-2.GCalc.Function */
    vfunc_evaluate(): MathExpression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    vfunc_hash(): number
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FunctionLog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FunctionLog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Virtual methods of GCalc-2.GCalc.Function */
    vfunc_evaluate(): MathExpression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    vfunc_hash(): number
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FunctionSin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FunctionSin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Virtual methods of GCalc-2.GCalc.Function */
    vfunc_evaluate(): MathExpression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    vfunc_hash(): number
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FunctionSinh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FunctionSinh, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Virtual methods of GCalc-2.GCalc.Function */
    vfunc_evaluate(): MathExpression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    vfunc_hash(): number
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FunctionSqrt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FunctionSqrt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Virtual methods of GCalc-2.GCalc.Function */
    vfunc_evaluate(): MathExpression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    vfunc_hash(): number
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FunctionTan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FunctionTan, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Virtual methods of GCalc-2.GCalc.Function */
    vfunc_evaluate(): MathExpression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    vfunc_hash(): number
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FunctionTanh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FunctionTanh, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathGroup */
    evaluate(): MathExpression
    get_level(): MathGroupLevel
    set_level(value: MathGroupLevel): void
    get_closed(): boolean
    set_closed(value: boolean): void
    /* Methods of GCalc-2.GCalc.MathExpression */
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.Group */
    vfunc_evaluate(): MathExpression
    vfunc_get_level(): MathGroupLevel
    vfunc_set_level(value: MathGroupLevel): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::level", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::closed", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.Minus */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Minus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Minus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: Minus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Minus, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: Minus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Minus, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.Multiply */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Multiply, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Multiply, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: Multiply, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Multiply, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: Multiply, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Multiply, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathParameter */
    set_value(val?: any | null): void
    get_value(): any | null
    /* Methods of GCalc-2.GCalc.MathExpression */
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Methods of GCalc-2.GCalc.MathVariable */
    evaluate(): MathExpression
    get_name(): string
    set_name(value: string): void
    get_value(): MathConstant
    set_value(value: MathConstant): void
    get_bind(): MathVariable
    set_bind(value: MathVariable): void
    get_binded(): boolean
    /* Virtual methods of GCalc-2.GCalc.Parameter */
    vfunc_set_value(val?: any | null): void
    /* Function overloads */
    vfunc_set_value(value: MathConstant): void
    vfunc_get_value(): any | null
    /* Function overloads */
    vfunc_get_value(): MathConstant
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    vfunc_evaluate(): MathExpression
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_bind(): MathVariable
    vfunc_set_bind(value: MathVariable): void
    vfunc_get_binded(): boolean
    /* Virtual methods of GCalc-2.GCalc.Variable */
    vfunc_evaluate(): MathExpression
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_value(): MathConstant
    vfunc_set_value(value: MathConstant): void
    vfunc_get_bind(): MathVariable
    vfunc_set_bind(value: MathVariable): void
    vfunc_get_binded(): boolean
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    vfunc_hash(): number
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bind", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind", callback: (($obj: Parameter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Parser */
    parse(str: string, eqman: MathEquationManager): void
    read_token(): ParserTokenType
    token_to_string(): string
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
    connect(sigName: "notify", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.Plus */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Plus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Plus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: Plus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Plus, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: Plus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Plus, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathPolynomial */
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.MathExpression */
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.Polynomial */
    vfunc_evaluate(): MathExpression
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Polynomial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Polynomial, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: Polynomial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Polynomial, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: Polynomial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Polynomial, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathExpression */
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.Pow */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Pow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: Pow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Pow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: Pow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Pow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
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
    /* Methods of GCalc-2.GCalc.MathResult */
    to_string(): string
    get_expression(): MathExpression
    /* Virtual methods of GCalc-2.GCalc.Result */
    vfunc_to_string(): string
    vfunc_get_expression(): MathExpression
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Result, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Result, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::expression", callback: (($obj: Result, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expression", callback: (($obj: Result, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Result_ConstructProps)
    _init (config?: Result_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(exp: MathExpression): Result
    static $gtype: GObject.Type
}
interface Solver_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GCalc-2.GCalc.Solver */
    equation_manager?: MathEquationManager
}
class Solver {
    /* Properties of GCalc-2.GCalc.Solver */
    equation_manager: MathEquationManager
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Solver */
    add_expression(exp: string): void
    solve(str: string): MathResult
    get_equation_manager(): MathEquationManager
    set_equation_manager(value: MathEquationManager): void
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
    connect(sigName: "notify", callback: (($obj: Solver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Solver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::equation-manager", callback: (($obj: Solver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equation-manager", callback: (($obj: Solver, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathTerm */
    add(t: MathTerm): MathExpression
    evaluate(): MathExpression
    /* Methods of GCalc-2.GCalc.MathExpression */
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.Term */
    vfunc_add(t: MathTerm): MathExpression
    vfunc_evaluate(): MathExpression
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Term, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Term, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: Term, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Term, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: Term, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Term, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Term_ConstructProps)
    _init (config?: Term_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Term
    /* Function overloads */
    static new(): Term
    static evaluate_constants(c1: MathConstant, c2: MathConstant, op: MathOperator): MathExpression
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GCalc-2.GCalc.Expression */
    to_string(): string
    solve(): MathResult
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
    /* Methods of GCalc-2.GCalc.MathVariable */
    evaluate(): MathExpression
    get_name(): string
    set_name(value: string): void
    get_value(): MathConstant
    set_value(value: MathConstant): void
    get_bind(): MathVariable
    set_bind(value: MathVariable): void
    get_binded(): boolean
    /* Methods of GCalc-2.GCalc.MathExpression */
    get_parent(): MathExpression
    set_parent(value: MathExpression): void
    get_expressions(): ExpressionContainer
    /* Methods of GCalc-2.GCalc.Hashable */
    hash(): number
    /* Virtual methods of GCalc-2.GCalc.Variable */
    vfunc_evaluate(): MathExpression
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_value(): MathConstant
    vfunc_set_value(value: MathConstant): void
    vfunc_get_bind(): MathVariable
    vfunc_set_bind(value: MathVariable): void
    vfunc_get_binded(): boolean
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    vfunc_hash(): number
    /* Virtual methods of GCalc-2.GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): MathResult
    vfunc_get_parent(): MathExpression
    vfunc_set_parent(value: MathExpression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bind", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly to_string: (self: Expression) => string
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
    readonly get_variables: (self: MathEquation) => ExpressionHashMap
    static name: string
}
abstract class MathEquationManagerIface {
    /* Fields of GCalc-2.GCalc.MathEquationManagerIface */
    readonly find_variable: (self: MathEquationManager, name: string) => MathVariable
    readonly get_equations: (self: MathEquationManager) => ExpressionContainer
    readonly get_functions: (self: MathEquationManager) => ExpressionContainer
    static name: string
}
abstract class MathErrorResultIface {
    /* Fields of GCalc-2.GCalc.MathErrorResultIface */
    readonly get_message: (self: MathErrorResult) => string
    static name: string
}
abstract class MathExpressionIface {
    /* Fields of GCalc-2.GCalc.MathExpressionIface */
    readonly to_string: (self: MathExpression) => string
    readonly solve: (self: MathExpression) => MathResult
    readonly get_parent: (self: MathExpression) => MathExpression
    readonly set_parent: (self: MathExpression, value: MathExpression) => void
    readonly get_expressions: (self: MathExpression) => ExpressionContainer
    static name: string
}
abstract class MathFunctionIface {
    /* Fields of GCalc-2.GCalc.MathFunctionIface */
    readonly evaluate: (self: MathFunction) => MathExpression
    readonly verify_params: (self: MathFunction) => boolean
    readonly get_param_types: (self: MathFunction) => ExpressionContainer
    readonly get_name: (self: MathFunction) => string
    readonly set_name: (self: MathFunction, value: string) => void
    readonly get_n_params: (self: MathFunction) => number
    readonly set_n_params: (self: MathFunction, value: number) => void
    readonly get_closed: (self: MathFunction) => boolean
    readonly set_closed: (self: MathFunction, value: boolean) => void
    static name: string
}
abstract class MathGroupIface {
    /* Fields of GCalc-2.GCalc.MathGroupIface */
    readonly evaluate: (self: MathGroup) => MathExpression
    readonly get_level: (self: MathGroup) => MathGroupLevel
    readonly set_level: (self: MathGroup, value: MathGroupLevel) => void
    readonly get_closed: (self: MathGroup) => boolean
    readonly set_closed: (self: MathGroup, value: boolean) => void
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
    readonly set_value: (self: MathParameter, val?: any | null) => void
    readonly get_value: (self: MathParameter) => any | null
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
    readonly to_string: (self: MathResult) => string
    readonly get_expression: (self: MathResult) => MathExpression
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
    readonly get_name: (self: MathVariable) => string
    readonly set_name: (self: MathVariable, value: string) => void
    readonly get_value: (self: MathVariable) => MathConstant
    readonly set_value: (self: MathVariable, value: MathConstant) => void
    readonly get_bind: (self: MathVariable) => MathVariable
    readonly set_bind: (self: MathVariable, value: MathVariable) => void
    readonly get_binded: (self: MathVariable) => boolean
    static name: string
}
}
export default GCalc;