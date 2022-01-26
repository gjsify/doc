/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GUPnPDLNA-2.0
 */

import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GUPnPDLNA {

enum ValueState {
    SET,
    UNSET,
    UNSUPPORTED,
}
interface AudioInformation_ConstructProps extends GObject.Object_ConstructProps {
}
class AudioInformation {
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
    constructor (config?: AudioInformation_ConstructProps)
    _init (config?: AudioInformation_ConstructProps): void
    static $gtype: GObject.Type
}
interface ContainerInformation_ConstructProps extends GObject.Object_ConstructProps {
}
class ContainerInformation {
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
    constructor (config?: ContainerInformation_ConstructProps)
    _init (config?: ContainerInformation_ConstructProps): void
    static $gtype: GObject.Type
}
interface ImageInformation_ConstructProps extends GObject.Object_ConstructProps {
}
class ImageInformation {
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
    constructor (config?: ImageInformation_ConstructProps)
    _init (config?: ImageInformation_ConstructProps): void
    static $gtype: GObject.Type
}
interface Information_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GUPnPDLNA-2.0.GUPnPDLNA.Information */
    uri?: string
}
class Information {
    /* Properties of GUPnPDLNA-2.0.GUPnPDLNA.Information */
    readonly audioInformation: AudioInformation
    readonly containerInformation: ContainerInformation
    readonly imageInformation: ImageInformation
    readonly videoInformation: VideoInformation
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPDLNA-2.0.GUPnPDLNA.Information */
    getAudioInformation(): AudioInformation
    getContainerInformation(): ContainerInformation
    getImageInformation(): ImageInformation
    getProfileName(): string
    getUri(): string
    getVideoInformation(): VideoInformation
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
    connect(sigName: "notify::audio-information", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-information", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::audio-information", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::audio-information", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::audio-information", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::container-information", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container-information", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::container-information", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::container-information", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::container-information", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image-information", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-information", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image-information", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image-information", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image-information", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::video-information", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-information", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::video-information", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::video-information", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::video-information", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Information_ConstructProps)
    _init (config?: Information_ConstructProps): void
    static $gtype: GObject.Type
}
interface Profile_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GUPnPDLNA-2.0.GUPnPDLNA.Profile */
    audioRestrictions?: object
    containerRestrictions?: object
    extended?: boolean
    imageRestrictions?: object
    mime?: string
    name?: string
    videoRestrictions?: object
}
class Profile {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPDLNA-2.0.GUPnPDLNA.Profile */
    getAudioRestrictions(): Restriction[]
    getContainerRestrictions(): Restriction[]
    getExtended(): boolean
    getImageRestrictions(): Restriction[]
    getMime(): string
    getName(): string
    getVideoRestrictions(): Restriction[]
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
    constructor (config?: Profile_ConstructProps)
    _init (config?: Profile_ConstructProps): void
    static $gtype: GObject.Type
}
interface ProfileGuesser_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesser */
    extendedMode?: boolean
    relaxedMode?: boolean
}
class ProfileGuesser {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesser */
    getExtendedMode(): boolean
    getProfile(name: string): Profile
    getRelaxedMode(): boolean
    guessProfileAsync(uri: string, timeoutInMs: number): boolean
    guessProfileFromInfo(info: Information): Profile
    guessProfileSync(uri: string, timeoutInMs: number): [ /* returnType */ Profile, /* dlnaInfo */ Information | null ]
    listProfiles(): Profile[]
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
    /* Signals of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesser */
    connect(sigName: "done", callback: ((info: Information, dlna?: Profile | null, error?: GLib.Error | null) => void)): number
    on(sigName: "done", callback: (info: Information, dlna?: Profile | null, error?: GLib.Error | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "done", callback: (info: Information, dlna?: Profile | null, error?: GLib.Error | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "done", callback: (info: Information, dlna?: Profile | null, error?: GLib.Error | null) => void): NodeJS.EventEmitter
    emit(sigName: "done", info: Information, dlna?: Profile | null, error?: GLib.Error | null): void
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
    constructor (config?: ProfileGuesser_ConstructProps)
    _init (config?: ProfileGuesser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(relaxedMode: boolean, extendedMode: boolean): ProfileGuesser
    static cleanup(): void
    static $gtype: GObject.Type
}
interface VideoInformation_ConstructProps extends GObject.Object_ConstructProps {
}
class VideoInformation {
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
    constructor (config?: VideoInformation_ConstructProps)
    _init (config?: VideoInformation_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class AudioInformationClass {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.AudioInformationClass */
    readonly parentClass: GObject.ObjectClass
    readonly reserved: object[]
    static name: string
}
class BoolValue {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.BoolValue */
    readonly value: boolean
    readonly state: ValueState
    static name: string
}
abstract class ContainerInformationClass {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.ContainerInformationClass */
    readonly parentClass: GObject.ObjectClass
    readonly reserved: object[]
    static name: string
}
class Fraction {
    /* Methods of GUPnPDLNA-2.0.GUPnPDLNA.Fraction */
    copy(): Fraction
    free(): void
    getDenominator(): number
    getNumerator(): number
    static name: string
}
class FractionRange {
    /* Methods of GUPnPDLNA-2.0.GUPnPDLNA.FractionRange */
    copy(): FractionRange
    free(): void
    getMax(): Fraction
    getMin(): Fraction
    static name: string
}
class FractionValue {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.FractionValue */
    readonly numerator: number
    readonly denominator: number
    readonly state: ValueState
    static name: string
}
abstract class ImageInformationClass {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.ImageInformationClass */
    readonly parentClass: GObject.ObjectClass
    readonly reserved: object[]
    static name: string
}
abstract class InformationClass {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.InformationClass */
    readonly parentClass: GObject.ObjectClass
    readonly getAudioInformation: (info: Information) => AudioInformation
    readonly getContainerInformation: (info: Information) => ContainerInformation
    readonly getImageInformation: (info: Information) => ImageInformation
    readonly getVideoInformation: (info: Information) => VideoInformation
    readonly getProfileName: (info: Information) => string
    readonly reserved: object[]
    static name: string
}
class IntRange {
    /* Methods of GUPnPDLNA-2.0.GUPnPDLNA.IntRange */
    copy(): IntRange
    free(): void
    getMax(): number
    getMin(): number
    static name: string
}
class IntValue {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.IntValue */
    readonly value: number
    readonly state: ValueState
    static name: string
}
abstract class ProfileClass {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.ProfileClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class ProfileGuesserClass {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.ProfileGuesserClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class Restriction {
    /* Methods of GUPnPDLNA-2.0.GUPnPDLNA.Restriction */
    copy(): Restriction
    free(): void
    getEntries(): GLib.HashTable
    getMime(): string
    isEmpty(): boolean
    toString(): string
    static name: string
}
class StringValue {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.StringValue */
    readonly value: string
    readonly state: ValueState
    static name: string
}
class ValueList {
    /* Methods of GUPnPDLNA-2.0.GUPnPDLNA.ValueList */
    copy(): ValueList
    free(): void
    getGValues(): any[]
    isEmpty(): boolean
    toString(): string
    static name: string
}
abstract class VideoInformationClass {
    /* Fields of GUPnPDLNA-2.0.GUPnPDLNA.VideoInformationClass */
    readonly parentClass: GObject.ObjectClass
    readonly reserved: object[]
    static name: string
}
}
export default GUPnPDLNA;