/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * PangoOT-1.0
 */

import type freetype2 from './freetype2-2.0';
import type PangoFc from './PangoFc-1.0';
import type fontconfig from './fontconfig-2.0';
import type Pango from './Pango-1.0';
import type cairo from './cairo-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace PangoOT {

enum TableType {
    GSUB,
    GPOS,
}
const ALL_GLYPHS: number
const DEFAULT_LANGUAGE: number
const NO_FEATURE: number
const NO_SCRIPT: number
function tagFromLanguage(language?: Pango.Language | null): Tag
function tagFromScript(script: Pango.Script): Tag
function tagToLanguage(languageTag: Tag): Pango.Language
function tagToScript(scriptTag: Tag): Pango.Script
interface Info_ConstructProps extends GObject.Object_ConstructProps {
}
class Info {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of PangoOT-1.0.PangoOT.Info */
    findFeature(tableType: TableType, featureTag: Tag, scriptIndex: number, languageIndex: number): [ /* returnType */ boolean, /* featureIndex */ number | null ]
    findLanguage(tableType: TableType, scriptIndex: number, languageTag: Tag): [ /* returnType */ boolean, /* languageIndex */ number | null, /* requiredFeatureIndex */ number | null ]
    findScript(tableType: TableType, scriptTag: Tag): [ /* returnType */ boolean, /* scriptIndex */ number | null ]
    listFeatures(tableType: TableType, tag: Tag, scriptIndex: number, languageIndex: number): Tag
    listLanguages(tableType: TableType, scriptIndex: number, languageTag: Tag): Tag
    listScripts(tableType: TableType): Tag
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
    constructor (config?: Info_ConstructProps)
    _init (config?: Info_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(face: freetype2.Face): Info
    static $gtype: GObject.Type
}
interface Ruleset_ConstructProps extends GObject.Object_ConstructProps {
}
class Ruleset {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of PangoOT-1.0.PangoOT.Ruleset */
    addFeature(tableType: TableType, featureIndex: number, propertyBit: number): void
    getFeatureCount(): [ /* returnType */ number, /* nGsubFeatures */ number | null, /* nGposFeatures */ number | null ]
    maybeAddFeature(tableType: TableType, featureTag: Tag, propertyBit: number): boolean
    maybeAddFeatures(tableType: TableType, features: FeatureMap, nFeatures: number): number
    position(buffer: Buffer): void
    substitute(buffer: Buffer): void
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
    constructor (config?: Ruleset_ConstructProps)
    _init (config?: Ruleset_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(info: Info): Ruleset
    static newFor(info: Info, script: Pango.Script, language: Pango.Language): Ruleset
    static newFromDescription(info: Info, desc: RulesetDescription): Ruleset
    static getForDescription(info: Info, desc: RulesetDescription): Ruleset
    static $gtype: GObject.Type
}
class Buffer {
    /* Methods of PangoOT-1.0.PangoOT.Buffer */
    addGlyph(glyph: number, properties: number, cluster: number): void
    clear(): void
    destroy(): void
    getGlyphs(): /* glyphs */ Glyph[] | null
    output(glyphs: Pango.GlyphString): void
    setRtl(rtl: boolean): void
    setZeroWidthMarks(zeroWidthMarks: boolean): void
    static name: string
    static new(font: PangoFc.Font): Buffer
    constructor(font: PangoFc.Font)
    /* Static methods and pseudo-constructors */
    static new(font: PangoFc.Font): Buffer
}
class FeatureMap {
    /* Fields of PangoOT-1.0.PangoOT.FeatureMap */
    readonly featureName: number[]
    readonly propertyBit: number
    static name: string
}
class Glyph {
    /* Fields of PangoOT-1.0.PangoOT.Glyph */
    readonly glyph: number
    readonly properties: number
    readonly cluster: number
    readonly component: number
    readonly ligID: number
    readonly internal: number
    static name: string
}
class RulesetDescription {
    /* Fields of PangoOT-1.0.PangoOT.RulesetDescription */
    readonly script: Pango.Script
    readonly language: Pango.Language
    readonly staticGsubFeatures: FeatureMap
    readonly nStaticGsubFeatures: number
    readonly staticGposFeatures: FeatureMap
    readonly nStaticGposFeatures: number
    readonly otherFeatures: FeatureMap
    readonly nOtherFeatures: number
    /* Methods of PangoOT-1.0.PangoOT.RulesetDescription */
    copy(): RulesetDescription
    equal(desc2: RulesetDescription): boolean
    free(): void
    hash(): number
    static name: string
}
    type Tag = number
}
export default PangoOT;