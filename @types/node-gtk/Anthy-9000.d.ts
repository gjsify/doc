/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Anthy-9000
 */

import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Anthy {

const COMPILED_ENCODING: number
const EUC_JP_ENCODING: number
const NTH_HALFKANA_CANDIDATE: number
const NTH_HIRAGANA_CANDIDATE: number
const NTH_KATAKANA_CANDIDATE: number
const NTH_UNCONVERTED_CANDIDATE: number
const RECONVERT_ALWAYS: number
const RECONVERT_AUTO: number
const RECONVERT_DISABLE: number
const UTF8_ENCODING: number
function commitPrediction(arg0: anthy_context_t, arg1: number): number
function commitSegment(arg0: anthy_context_t, arg1: number, arg2: number): number
function confOverride(arg0: string, arg1: string): void
function contextSetEncoding(ac: anthy_context_t, encoding: number): number
function getPrediction(arg0: anthy_context_t, arg1: number, arg2: string, arg3: number): number
function getPredictionStat(arg0: anthy_context_t, arg1: object): number
function getSegment(arg0: anthy_context_t, arg1: number, arg2: number, arg3: string, arg4: number): number
function getSegmentStat(arg0: anthy_context_t, arg1: number, arg2: object): number
function getStat(arg0: anthy_context_t, arg1: object): number
function getVersionString(): string
function init(): number
function printContext(arg0: anthy_context_t): void
function quit(): void
function releaseContext(arg0: anthy_context_t): void
function resetContext(arg0: anthy_context_t): void
function resizeSegment(arg0: anthy_context_t, arg1: number, arg2: number): void
function setPersonality(arg0: string): number
function setPredictionString(arg0: anthy_context_t, arg1: string): number
function setReconversionMode(ac: anthy_context_t, mode: number): number
function setString(arg0: anthy_context_t, arg1: string): number
interface logger {
    (level: number, arg1: string): void
}
interface GContext_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
}
class GContext {
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Anthy-9000.Anthy.GContext */
    commitPrediction(nthSeg: number): number
    commitSegment(nthSeg: number, nthLookup: number): number
    doSetPersonality(dictName: string): number
    getNrCandidates(nthSeg: number): number
    getNrPredictions(): number
    getNrSegments(): number
    getPrediction(nthSeg: number): string
    getSegment(nthSeg: number, nthLookup: number): string
    initPersonality(): void
    resizeSegment(nth: number, resize: number): void
    setEncoding(encoding: number): number
    setPredictionString(string: string): number
    setString(string: string): number
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
    constructor (config?: GContext_ConstructProps)
    _init (config?: GContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GContext
    static $gtype: GObject.Type
}
abstract class GContextClass {
    /* Fields of Anthy-9000.Anthy.GContextClass */
    readonly parent: GObject.InitiallyUnownedClass
    static name: string
}
class GContextPrivate {
    static name: string
}
class anthy_context_t {
    static name: string
}
class anthy_conv_stat {
    /* Fields of Anthy-9000.Anthy.anthy_conv_stat */
    readonly nrSegment: number
    static name: string
}
class anthy_prediction_stat {
    /* Fields of Anthy-9000.Anthy.anthy_prediction_stat */
    readonly nrPrediction: number
    static name: string
}
class anthy_segment_stat {
    /* Fields of Anthy-9000.Anthy.anthy_segment_stat */
    readonly nrCandidate: number
    readonly segLen: number
    static name: string
}
}
export default Anthy;