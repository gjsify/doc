/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GVncPulse-1.0
 */

import type GVnc from './GVnc-1.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GVncPulse {

interface AudioPulse_ConstructProps extends GVnc.BaseAudio_ConstructProps {
}
class AudioPulse {
    /* Fields of GVnc-1.0.GVnc.BaseAudio */
    readonly parent: GObject.Object
    readonly priv: GVnc.BaseAudioPrivate
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
    /* Methods of GVnc-1.0.GVnc.Audio */
    playbackData(sample: GVnc.AudioSample): void
    playbackStart(format: GVnc.AudioFormat): void
    playbackStop(): void
    /* Signals of GVnc-1.0.GVnc.BaseAudio */
    connect(sigName: "vnc-audio-playback-data", callback: ((object: GVnc.AudioSample) => void)): number
    on(sigName: "vnc-audio-playback-data", callback: (object: GVnc.AudioSample) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-audio-playback-data", callback: (object: GVnc.AudioSample) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-audio-playback-data", callback: (object: GVnc.AudioSample) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-audio-playback-data", object: GVnc.AudioSample): void
    connect(sigName: "vnc-audio-playback-start", callback: ((object: GVnc.AudioFormat) => void)): number
    on(sigName: "vnc-audio-playback-start", callback: (object: GVnc.AudioFormat) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-audio-playback-start", callback: (object: GVnc.AudioFormat) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-audio-playback-start", callback: (object: GVnc.AudioFormat) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-audio-playback-start", object: GVnc.AudioFormat): void
    connect(sigName: "vnc-audio-playback-stop", callback: (() => void)): number
    on(sigName: "vnc-audio-playback-stop", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-audio-playback-stop", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-audio-playback-stop", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "vnc-audio-playback-stop"): void
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
    constructor (config?: AudioPulse_ConstructProps)
    _init (config?: AudioPulse_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AudioPulse
    /* Function overloads */
    static new(): AudioPulse
    static $gtype: GObject.Type
}
abstract class AudioPulseClass {
    /* Fields of GVncPulse-1.0.GVncPulse.AudioPulseClass */
    readonly parentClass: GVnc.BaseAudioClass
    static name: string
}
class AudioPulsePrivate {
    static name: string
}
}
export default GVncPulse;