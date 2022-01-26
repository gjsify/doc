/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstController-1.0
 */

import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstController {

enum InterpolationMode {
    NONE,
    LINEAR,
    CUBIC,
    CUBIC_MONOTONIC,
}
enum LFOWaveform {
    SINE,
    SQUARE,
    SAW,
    REVERSE_SAW,
    TRIANGLE,
}
function timedValueControlInvalidateCache(self: TimedValueControlSource): void
interface DirectControlBindingConvertGValue {
    (self: DirectControlBinding, srcValue: number, destValue: any): void
}
interface DirectControlBindingConvertValue {
    (self: DirectControlBinding, srcValue: number, destValue?: object | null): void
}
interface ARGBControlBinding_ConstructProps extends Gst.ControlBinding_ConstructProps {
    /* Constructor properties of GstController-1.0.GstController.ARGBControlBinding */
    controlSourceA?: Gst.ControlSource
    controlSourceB?: Gst.ControlSource
    controlSourceG?: Gst.ControlSource
    controlSourceR?: Gst.ControlSource
}
class ARGBControlBinding {
    /* Properties of GstController-1.0.GstController.ARGBControlBinding */
    controlSourceA: Gst.ControlSource
    controlSourceB: Gst.ControlSource
    controlSourceG: Gst.ControlSource
    controlSourceR: Gst.ControlSource
    /* Fields of Gst-1.0.Gst.ControlBinding */
    readonly parent: Gst.Object
    readonly name: string
    readonly pspec: GObject.ParamSpec
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.ControlBinding */
    getGValueArray(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getValue(timestamp: Gst.ClockTime): any | null
    isDisabled(): boolean
    setDisabled(disabled: boolean): void
    syncValues(object: Gst.Object, timestamp: Gst.ClockTime, lastSync: Gst.ClockTime): boolean
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::control-source-a", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::control-source-a", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::control-source-a", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::control-source-a", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::control-source-a", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::control-source-b", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::control-source-b", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::control-source-b", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::control-source-b", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::control-source-b", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::control-source-g", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::control-source-g", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::control-source-g", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::control-source-g", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::control-source-g", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::control-source-r", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::control-source-r", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::control-source-r", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::control-source-r", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::control-source-r", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ARGBControlBinding_ConstructProps)
    _init (config?: ARGBControlBinding_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(object: Gst.Object, propertyName: string, csA: Gst.ControlSource, csR: Gst.ControlSource, csG: Gst.ControlSource, csB: Gst.ControlSource): ARGBControlBinding
    static $gtype: GObject.Type
}
interface DirectControlBinding_ConstructProps extends Gst.ControlBinding_ConstructProps {
    /* Constructor properties of GstController-1.0.GstController.DirectControlBinding */
    absolute?: boolean
    controlSource?: Gst.ControlSource
}
class DirectControlBinding {
    /* Properties of GstController-1.0.GstController.DirectControlBinding */
    controlSource: Gst.ControlSource
    /* Fields of Gst-1.0.Gst.ControlBinding */
    readonly parent: Gst.Object
    readonly name: string
    readonly pspec: GObject.ParamSpec
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.ControlBinding */
    getGValueArray(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getValue(timestamp: Gst.ClockTime): any | null
    isDisabled(): boolean
    setDisabled(disabled: boolean): void
    syncValues(object: Gst.Object, timestamp: Gst.ClockTime, lastSync: Gst.ClockTime): boolean
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::control-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::control-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::control-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::control-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::control-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DirectControlBinding_ConstructProps)
    _init (config?: DirectControlBinding_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(object: Gst.Object, propertyName: string, cs: Gst.ControlSource): DirectControlBinding
    static newAbsolute(object: Gst.Object, propertyName: string, cs: Gst.ControlSource): DirectControlBinding
    static $gtype: GObject.Type
}
interface InterpolationControlSource_ConstructProps extends TimedValueControlSource_ConstructProps {
    /* Constructor properties of GstController-1.0.GstController.InterpolationControlSource */
    mode?: InterpolationMode
}
class InterpolationControlSource {
    /* Properties of GstController-1.0.GstController.InterpolationControlSource */
    mode: InterpolationMode
    /* Fields of GstController-1.0.GstController.TimedValueControlSource */
    readonly parent: Gst.ControlSource
    readonly lock: GLib.Mutex
    readonly values: GLib.Sequence
    readonly nvalues: number
    readonly validCache: boolean
    /* Fields of Gst-1.0.Gst.ControlSource */
    readonly getValue: Gst.ControlSourceGetValue
    readonly getValueArray: Gst.ControlSourceGetValueArray
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly name: string
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstController-1.0.GstController.TimedValueControlSource */
    findControlPointIter(timestamp: Gst.ClockTime): GLib.SequenceIter
    getAll(): Gst.TimedValue[]
    getCount(): number
    set(timestamp: Gst.ClockTime, value: number): boolean
    setFromList(timedvalues: Gst.TimedValue[]): boolean
    unset(timestamp: Gst.ClockTime): boolean
    unsetAll(): void
    /* Methods of Gst-1.0.Gst.ControlSource */
    controlSourceGetValue(timestamp: Gst.ClockTime): [ /* returnType */ boolean, /* value */ number ]
    controlSourceGetValueArray(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: number[]): boolean
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of GstController-1.0.GstController.TimedValueControlSource */
    connect(sigName: "value-added", callback: ((timedValue: ControlPoint) => void)): number
    on(sigName: "value-added", callback: (timedValue: ControlPoint) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-added", callback: (timedValue: ControlPoint) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-added", callback: (timedValue: ControlPoint) => void): NodeJS.EventEmitter
    emit(sigName: "value-added", timedValue: ControlPoint): void
    connect(sigName: "value-changed", callback: ((timedValue: ControlPoint) => void)): number
    on(sigName: "value-changed", callback: (timedValue: ControlPoint) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (timedValue: ControlPoint) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (timedValue: ControlPoint) => void): NodeJS.EventEmitter
    emit(sigName: "value-changed", timedValue: ControlPoint): void
    connect(sigName: "value-removed", callback: ((timedValue: ControlPoint) => void)): number
    on(sigName: "value-removed", callback: (timedValue: ControlPoint) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-removed", callback: (timedValue: ControlPoint) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-removed", callback: (timedValue: ControlPoint) => void): NodeJS.EventEmitter
    emit(sigName: "value-removed", timedValue: ControlPoint): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InterpolationControlSource_ConstructProps)
    _init (config?: InterpolationControlSource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): InterpolationControlSource
    static $gtype: GObject.Type
}
interface LFOControlSource_ConstructProps extends Gst.ControlSource_ConstructProps {
    /* Constructor properties of GstController-1.0.GstController.LFOControlSource */
    amplitude?: number
    frequency?: number
    offset?: number
    timeshift?: number
    waveform?: LFOWaveform
}
class LFOControlSource {
    /* Properties of GstController-1.0.GstController.LFOControlSource */
    amplitude: number
    frequency: number
    offset: number
    timeshift: number
    waveform: LFOWaveform
    /* Fields of Gst-1.0.Gst.ControlSource */
    readonly parent: Gst.Object
    readonly getValue: Gst.ControlSourceGetValue
    readonly getValueArray: Gst.ControlSourceGetValueArray
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.ControlSource */
    controlSourceGetValue(timestamp: Gst.ClockTime): [ /* returnType */ boolean, /* value */ number ]
    controlSourceGetValueArray(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: number[]): boolean
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::amplitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::amplitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::amplitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::amplitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::amplitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::frequency", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frequency", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::frequency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::frequency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::frequency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeshift", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeshift", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeshift", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeshift", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeshift", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::waveform", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::waveform", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::waveform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::waveform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::waveform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LFOControlSource_ConstructProps)
    _init (config?: LFOControlSource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LFOControlSource
    static $gtype: GObject.Type
}
interface ProxyControlBinding_ConstructProps extends Gst.ControlBinding_ConstructProps {
}
class ProxyControlBinding {
    /* Fields of Gst-1.0.Gst.ControlBinding */
    readonly parent: Gst.Object
    readonly name: string
    readonly pspec: GObject.ParamSpec
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.ControlBinding */
    getGValueArray(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getValue(timestamp: Gst.ClockTime): any | null
    isDisabled(): boolean
    setDisabled(disabled: boolean): void
    syncValues(object: Gst.Object, timestamp: Gst.ClockTime, lastSync: Gst.ClockTime): boolean
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
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
    constructor (config?: ProxyControlBinding_ConstructProps)
    _init (config?: ProxyControlBinding_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(object: Gst.Object, propertyName: string, refObject: Gst.Object, refPropertyName: string): ProxyControlBinding
    static $gtype: GObject.Type
}
interface TimedValueControlSource_ConstructProps extends Gst.ControlSource_ConstructProps {
}
class TimedValueControlSource {
    /* Fields of Gst-1.0.Gst.ControlSource */
    readonly parent: Gst.Object
    readonly getValue: Gst.ControlSourceGetValue
    readonly getValueArray: Gst.ControlSourceGetValueArray
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstController-1.0.GstController.TimedValueControlSource */
    findControlPointIter(timestamp: Gst.ClockTime): GLib.SequenceIter
    getAll(): Gst.TimedValue[]
    getCount(): number
    set(timestamp: Gst.ClockTime, value: number): boolean
    setFromList(timedvalues: Gst.TimedValue[]): boolean
    unset(timestamp: Gst.ClockTime): boolean
    unsetAll(): void
    /* Methods of Gst-1.0.Gst.ControlSource */
    controlSourceGetValue(timestamp: Gst.ClockTime): [ /* returnType */ boolean, /* value */ number ]
    controlSourceGetValueArray(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: number[]): boolean
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of GstController-1.0.GstController.TimedValueControlSource */
    connect(sigName: "value-added", callback: ((timedValue: ControlPoint) => void)): number
    on(sigName: "value-added", callback: (timedValue: ControlPoint) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-added", callback: (timedValue: ControlPoint) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-added", callback: (timedValue: ControlPoint) => void): NodeJS.EventEmitter
    emit(sigName: "value-added", timedValue: ControlPoint): void
    connect(sigName: "value-changed", callback: ((timedValue: ControlPoint) => void)): number
    on(sigName: "value-changed", callback: (timedValue: ControlPoint) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (timedValue: ControlPoint) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (timedValue: ControlPoint) => void): NodeJS.EventEmitter
    emit(sigName: "value-changed", timedValue: ControlPoint): void
    connect(sigName: "value-removed", callback: ((timedValue: ControlPoint) => void)): number
    on(sigName: "value-removed", callback: (timedValue: ControlPoint) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-removed", callback: (timedValue: ControlPoint) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-removed", callback: (timedValue: ControlPoint) => void): NodeJS.EventEmitter
    emit(sigName: "value-removed", timedValue: ControlPoint): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
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
    constructor (config?: TimedValueControlSource_ConstructProps)
    _init (config?: TimedValueControlSource_ConstructProps): void
    static $gtype: GObject.Type
}
interface TriggerControlSource_ConstructProps extends TimedValueControlSource_ConstructProps {
    /* Constructor properties of GstController-1.0.GstController.TriggerControlSource */
    tolerance?: number
}
class TriggerControlSource {
    /* Properties of GstController-1.0.GstController.TriggerControlSource */
    tolerance: number
    /* Fields of GstController-1.0.GstController.TimedValueControlSource */
    readonly parent: Gst.ControlSource
    readonly lock: GLib.Mutex
    readonly values: GLib.Sequence
    readonly nvalues: number
    readonly validCache: boolean
    /* Fields of Gst-1.0.Gst.ControlSource */
    readonly getValue: Gst.ControlSourceGetValue
    readonly getValueArray: Gst.ControlSourceGetValueArray
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly name: string
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstController-1.0.GstController.TimedValueControlSource */
    findControlPointIter(timestamp: Gst.ClockTime): GLib.SequenceIter
    getAll(): Gst.TimedValue[]
    getCount(): number
    set(timestamp: Gst.ClockTime, value: number): boolean
    setFromList(timedvalues: Gst.TimedValue[]): boolean
    unset(timestamp: Gst.ClockTime): boolean
    unsetAll(): void
    /* Methods of Gst-1.0.Gst.ControlSource */
    controlSourceGetValue(timestamp: Gst.ClockTime): [ /* returnType */ boolean, /* value */ number ]
    controlSourceGetValueArray(timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: number[]): boolean
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of GstController-1.0.GstController.TimedValueControlSource */
    connect(sigName: "value-added", callback: ((timedValue: ControlPoint) => void)): number
    on(sigName: "value-added", callback: (timedValue: ControlPoint) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-added", callback: (timedValue: ControlPoint) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-added", callback: (timedValue: ControlPoint) => void): NodeJS.EventEmitter
    emit(sigName: "value-added", timedValue: ControlPoint): void
    connect(sigName: "value-changed", callback: ((timedValue: ControlPoint) => void)): number
    on(sigName: "value-changed", callback: (timedValue: ControlPoint) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (timedValue: ControlPoint) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (timedValue: ControlPoint) => void): NodeJS.EventEmitter
    emit(sigName: "value-changed", timedValue: ControlPoint): void
    connect(sigName: "value-removed", callback: ((timedValue: ControlPoint) => void)): number
    on(sigName: "value-removed", callback: (timedValue: ControlPoint) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-removed", callback: (timedValue: ControlPoint) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-removed", callback: (timedValue: ControlPoint) => void): NodeJS.EventEmitter
    emit(sigName: "value-removed", timedValue: ControlPoint): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::tolerance", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tolerance", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tolerance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tolerance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tolerance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TriggerControlSource_ConstructProps)
    _init (config?: TriggerControlSource_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TriggerControlSource
    static $gtype: GObject.Type
}
abstract class ARGBControlBindingClass {
    /* Fields of GstController-1.0.GstController.ARGBControlBindingClass */
    readonly parentClass: Gst.ControlBindingClass
    static name: string
}
class ControlPoint {
    /* Fields of GstController-1.0.GstController.ControlPoint */
    readonly timestamp: Gst.ClockTime
    readonly value: number
    /* Methods of GstController-1.0.GstController.ControlPoint */
    copy(): ControlPoint
    free(): void
    static name: string
}
abstract class DirectControlBindingClass {
    /* Fields of GstController-1.0.GstController.DirectControlBindingClass */
    readonly parentClass: Gst.ControlBindingClass
    static name: string
}
abstract class InterpolationControlSourceClass {
    /* Fields of GstController-1.0.GstController.InterpolationControlSourceClass */
    readonly parentClass: TimedValueControlSourceClass
    static name: string
}
class InterpolationControlSourcePrivate {
    static name: string
}
abstract class LFOControlSourceClass {
    /* Fields of GstController-1.0.GstController.LFOControlSourceClass */
    readonly parentClass: Gst.ControlSourceClass
    static name: string
}
class LFOControlSourcePrivate {
    static name: string
}
abstract class ProxyControlBindingClass {
    static name: string
}
abstract class TimedValueControlSourceClass {
    /* Fields of GstController-1.0.GstController.TimedValueControlSourceClass */
    readonly parentClass: Gst.ControlSourceClass
    static name: string
}
class TimedValueControlSourcePrivate {
    static name: string
}
abstract class TriggerControlSourceClass {
    /* Fields of GstController-1.0.GstController.TriggerControlSourceClass */
    readonly parentClass: TimedValueControlSourceClass
    static name: string
}
class TriggerControlSourcePrivate {
    static name: string
}
}
export default GstController;