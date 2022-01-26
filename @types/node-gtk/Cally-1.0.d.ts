/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Cally-1.0
 */

import type Clutter from './Clutter-1.0';
import type cairo from './cairo-1.0';
import type Json from './Json-1.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GL from './GL-1.0';
import type CoglPango from './CoglPango-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type Cogl from './Cogl-1.0';
import type Atk from './Atk-1.0';

export namespace Cally {

function accessibilityInit(): boolean
function getCallyInitialized(): boolean
interface ActionCallback {
    (callyActor: Actor): void
}
interface ActionFunc {
    (callyActor: Actor): void
}
interface Actor_ConstructProps extends Atk.GObjectAccessible_ConstructProps {
}
class Actor {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleRole: Atk.Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Atk.Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Atk.Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Atk.Object
    accessibleTableSummary: Atk.Object
    accessibleValue: number
    /* Fields of Atk-1.0.Atk.GObjectAccessible */
    readonly parent: Atk.Object
    /* Fields of Atk-1.0.Atk.Object */
    readonly description: string
    readonly name: string
    readonly accessibleParent: Atk.Object
    readonly role: Atk.Role
    readonly relationSet: Atk.RelationSet
    readonly layer: Atk.Layer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Cally-1.0.Cally.Actor */
    addAction(actionName: string, actionDescription: string, actionKeybinding: string, callback: ActionCallback): number
    removeAction(actionId: number): boolean
    removeActionByName(actionName: string): boolean
    /* Methods of Atk-1.0.Atk.GObjectAccessible */
    getObject(): GObject.Object
    /* Methods of Atk-1.0.Atk.Object */
    addRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    getAccessibleId(): string
    getAttributes(): Atk.AttributeSet
    getDescription(): string
    getIndexInParent(): number
    getLayer(): Atk.Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    getName(): string
    getObjectLocale(): string
    getParent(): Atk.Object
    getRole(): Atk.Role
    initialize(data?: object | null): void
    notifyStateChange(state: Atk.State, value: boolean): void
    peekParent(): Atk.Object
    refAccessibleChild(i: number): Atk.Object
    refRelationSet(): Atk.RelationSet
    refStateSet(): Atk.StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    setAccessibleId(name: string): void
    setDescription(description: string): void
    setName(name: string): void
    setParent(parent: Atk.Object): void
    setRole(role: Atk.Role): void
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
    /* Methods of Atk-1.0.Atk.Action */
    doAction(i: number): boolean
    getDescription(i: number): string | null
    getKeybinding(i: number): string | null
    getLocalizedName(i: number): string | null
    getNActions(): number
    getName(i: number): string | null
    setDescription(i: number, desc: string): boolean
    /* Methods of Atk-1.0.Atk.Component */
    contains(x: number, y: number, coordType: Atk.CoordType): boolean
    getAlpha(): number
    getExtents(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getPosition(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    grabFocus(): boolean
    refAccessibleAtPoint(x: number, y: number, coordType: Atk.CoordType): Atk.Object | null
    removeFocusHandler(handlerId: number): void
    scrollTo(type: Atk.ScrollType): boolean
    scrollToPoint(coords: Atk.CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, coordType: Atk.CoordType): boolean
    setPosition(x: number, y: number, coordType: Atk.CoordType): boolean
    setSize(width: number, height: number): boolean
    /* Signals of Atk-1.0.Atk.Object */
    connect(sigName: "active-descendant-changed", callback: ((arg1: Atk.Object) => void)): number
    on(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void): NodeJS.EventEmitter
    emit(sigName: "active-descendant-changed", arg1: Atk.Object): void
    connect(sigName: "children-changed", callback: ((arg1: number, arg2: Atk.Object) => void)): number
    on(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void): NodeJS.EventEmitter
    emit(sigName: "children-changed", arg1: number, arg2: Atk.Object): void
    connect(sigName: "focus-event", callback: ((arg1: boolean) => void)): number
    on(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (arg1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "focus-event", arg1: boolean): void
    connect(sigName: "property-change", callback: ((arg1: Atk.PropertyValues) => void)): number
    on(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void): NodeJS.EventEmitter
    emit(sigName: "property-change", arg1: Atk.PropertyValues): void
    connect(sigName: "state-change", callback: ((arg1: string, arg2: boolean) => void)): number
    on(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    connect(sigName: "visible-data-changed", callback: (() => void)): number
    on(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Component */
    connect(sigName: "bounds-changed", callback: ((arg1: Atk.Rectangle) => void)): number
    on(sigName: "bounds-changed", callback: (arg1: Atk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (arg1: Atk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (arg1: Atk.Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "bounds-changed", arg1: Atk.Rectangle): void
    connect(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Actor_ConstructProps)
    _init (config?: Actor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(actor: Clutter.Actor): Actor
    static $gtype: GObject.Type
}
interface Clone_ConstructProps extends Actor_ConstructProps {
}
class Clone {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleRole: Atk.Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Atk.Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Atk.Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Atk.Object
    accessibleTableSummary: Atk.Object
    accessibleValue: number
    /* Fields of Atk-1.0.Atk.GObjectAccessible */
    readonly parent: Atk.Object
    /* Fields of Atk-1.0.Atk.Object */
    readonly description: string
    readonly name: string
    readonly accessibleParent: Atk.Object
    readonly role: Atk.Role
    readonly relationSet: Atk.RelationSet
    readonly layer: Atk.Layer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Cally-1.0.Cally.Actor */
    addAction(actionName: string, actionDescription: string, actionKeybinding: string, callback: ActionCallback): number
    removeAction(actionId: number): boolean
    removeActionByName(actionName: string): boolean
    /* Methods of Atk-1.0.Atk.GObjectAccessible */
    getObject(): GObject.Object
    /* Methods of Atk-1.0.Atk.Object */
    addRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    getAccessibleId(): string
    getAttributes(): Atk.AttributeSet
    getDescription(): string
    getIndexInParent(): number
    getLayer(): Atk.Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    getName(): string
    getObjectLocale(): string
    getParent(): Atk.Object
    getRole(): Atk.Role
    initialize(data?: object | null): void
    notifyStateChange(state: Atk.State, value: boolean): void
    peekParent(): Atk.Object
    refAccessibleChild(i: number): Atk.Object
    refRelationSet(): Atk.RelationSet
    refStateSet(): Atk.StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    setAccessibleId(name: string): void
    setDescription(description: string): void
    setName(name: string): void
    setParent(parent: Atk.Object): void
    setRole(role: Atk.Role): void
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
    /* Methods of Atk-1.0.Atk.Action */
    doAction(i: number): boolean
    getDescription(i: number): string | null
    getKeybinding(i: number): string | null
    getLocalizedName(i: number): string | null
    getNActions(): number
    getName(i: number): string | null
    setDescription(i: number, desc: string): boolean
    /* Methods of Atk-1.0.Atk.Component */
    contains(x: number, y: number, coordType: Atk.CoordType): boolean
    getAlpha(): number
    getExtents(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getPosition(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    grabFocus(): boolean
    refAccessibleAtPoint(x: number, y: number, coordType: Atk.CoordType): Atk.Object | null
    removeFocusHandler(handlerId: number): void
    scrollTo(type: Atk.ScrollType): boolean
    scrollToPoint(coords: Atk.CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, coordType: Atk.CoordType): boolean
    setPosition(x: number, y: number, coordType: Atk.CoordType): boolean
    setSize(width: number, height: number): boolean
    /* Signals of Atk-1.0.Atk.Object */
    connect(sigName: "active-descendant-changed", callback: ((arg1: Atk.Object) => void)): number
    on(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void): NodeJS.EventEmitter
    emit(sigName: "active-descendant-changed", arg1: Atk.Object): void
    connect(sigName: "children-changed", callback: ((arg1: number, arg2: Atk.Object) => void)): number
    on(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void): NodeJS.EventEmitter
    emit(sigName: "children-changed", arg1: number, arg2: Atk.Object): void
    connect(sigName: "focus-event", callback: ((arg1: boolean) => void)): number
    on(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (arg1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "focus-event", arg1: boolean): void
    connect(sigName: "property-change", callback: ((arg1: Atk.PropertyValues) => void)): number
    on(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void): NodeJS.EventEmitter
    emit(sigName: "property-change", arg1: Atk.PropertyValues): void
    connect(sigName: "state-change", callback: ((arg1: string, arg2: boolean) => void)): number
    on(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    connect(sigName: "visible-data-changed", callback: (() => void)): number
    on(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Component */
    connect(sigName: "bounds-changed", callback: ((arg1: Atk.Rectangle) => void)): number
    on(sigName: "bounds-changed", callback: (arg1: Atk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (arg1: Atk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (arg1: Atk.Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "bounds-changed", arg1: Atk.Rectangle): void
    connect(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Clone_ConstructProps)
    _init (config?: Clone_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(actor: Clutter.Actor): Clone
    /* Function overloads */
    static new(actor: Clutter.Actor): Clone
    static $gtype: GObject.Type
}
interface Group_ConstructProps extends Actor_ConstructProps {
}
class Group {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleRole: Atk.Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Atk.Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Atk.Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Atk.Object
    accessibleTableSummary: Atk.Object
    accessibleValue: number
    /* Fields of Atk-1.0.Atk.GObjectAccessible */
    readonly parent: Atk.Object
    /* Fields of Atk-1.0.Atk.Object */
    readonly description: string
    readonly name: string
    readonly accessibleParent: Atk.Object
    readonly role: Atk.Role
    readonly relationSet: Atk.RelationSet
    readonly layer: Atk.Layer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Cally-1.0.Cally.Actor */
    addAction(actionName: string, actionDescription: string, actionKeybinding: string, callback: ActionCallback): number
    removeAction(actionId: number): boolean
    removeActionByName(actionName: string): boolean
    /* Methods of Atk-1.0.Atk.GObjectAccessible */
    getObject(): GObject.Object
    /* Methods of Atk-1.0.Atk.Object */
    addRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    getAccessibleId(): string
    getAttributes(): Atk.AttributeSet
    getDescription(): string
    getIndexInParent(): number
    getLayer(): Atk.Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    getName(): string
    getObjectLocale(): string
    getParent(): Atk.Object
    getRole(): Atk.Role
    initialize(data?: object | null): void
    notifyStateChange(state: Atk.State, value: boolean): void
    peekParent(): Atk.Object
    refAccessibleChild(i: number): Atk.Object
    refRelationSet(): Atk.RelationSet
    refStateSet(): Atk.StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    setAccessibleId(name: string): void
    setDescription(description: string): void
    setName(name: string): void
    setParent(parent: Atk.Object): void
    setRole(role: Atk.Role): void
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
    /* Methods of Atk-1.0.Atk.Action */
    doAction(i: number): boolean
    getDescription(i: number): string | null
    getKeybinding(i: number): string | null
    getLocalizedName(i: number): string | null
    getNActions(): number
    getName(i: number): string | null
    setDescription(i: number, desc: string): boolean
    /* Methods of Atk-1.0.Atk.Component */
    contains(x: number, y: number, coordType: Atk.CoordType): boolean
    getAlpha(): number
    getExtents(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getPosition(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    grabFocus(): boolean
    refAccessibleAtPoint(x: number, y: number, coordType: Atk.CoordType): Atk.Object | null
    removeFocusHandler(handlerId: number): void
    scrollTo(type: Atk.ScrollType): boolean
    scrollToPoint(coords: Atk.CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, coordType: Atk.CoordType): boolean
    setPosition(x: number, y: number, coordType: Atk.CoordType): boolean
    setSize(width: number, height: number): boolean
    /* Signals of Atk-1.0.Atk.Object */
    connect(sigName: "active-descendant-changed", callback: ((arg1: Atk.Object) => void)): number
    on(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void): NodeJS.EventEmitter
    emit(sigName: "active-descendant-changed", arg1: Atk.Object): void
    connect(sigName: "children-changed", callback: ((arg1: number, arg2: Atk.Object) => void)): number
    on(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void): NodeJS.EventEmitter
    emit(sigName: "children-changed", arg1: number, arg2: Atk.Object): void
    connect(sigName: "focus-event", callback: ((arg1: boolean) => void)): number
    on(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (arg1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "focus-event", arg1: boolean): void
    connect(sigName: "property-change", callback: ((arg1: Atk.PropertyValues) => void)): number
    on(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void): NodeJS.EventEmitter
    emit(sigName: "property-change", arg1: Atk.PropertyValues): void
    connect(sigName: "state-change", callback: ((arg1: string, arg2: boolean) => void)): number
    on(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    connect(sigName: "visible-data-changed", callback: (() => void)): number
    on(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Component */
    connect(sigName: "bounds-changed", callback: ((arg1: Atk.Rectangle) => void)): number
    on(sigName: "bounds-changed", callback: (arg1: Atk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (arg1: Atk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (arg1: Atk.Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "bounds-changed", arg1: Atk.Rectangle): void
    connect(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(actor: Clutter.Actor): Group
    /* Function overloads */
    static new(actor: Clutter.Actor): Group
    static $gtype: GObject.Type
}
interface Rectangle_ConstructProps extends Actor_ConstructProps {
}
class Rectangle {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleRole: Atk.Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Atk.Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Atk.Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Atk.Object
    accessibleTableSummary: Atk.Object
    accessibleValue: number
    /* Fields of Atk-1.0.Atk.GObjectAccessible */
    readonly parent: Atk.Object
    /* Fields of Atk-1.0.Atk.Object */
    readonly description: string
    readonly name: string
    readonly accessibleParent: Atk.Object
    readonly role: Atk.Role
    readonly relationSet: Atk.RelationSet
    readonly layer: Atk.Layer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Cally-1.0.Cally.Actor */
    addAction(actionName: string, actionDescription: string, actionKeybinding: string, callback: ActionCallback): number
    removeAction(actionId: number): boolean
    removeActionByName(actionName: string): boolean
    /* Methods of Atk-1.0.Atk.GObjectAccessible */
    getObject(): GObject.Object
    /* Methods of Atk-1.0.Atk.Object */
    addRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    getAccessibleId(): string
    getAttributes(): Atk.AttributeSet
    getDescription(): string
    getIndexInParent(): number
    getLayer(): Atk.Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    getName(): string
    getObjectLocale(): string
    getParent(): Atk.Object
    getRole(): Atk.Role
    initialize(data?: object | null): void
    notifyStateChange(state: Atk.State, value: boolean): void
    peekParent(): Atk.Object
    refAccessibleChild(i: number): Atk.Object
    refRelationSet(): Atk.RelationSet
    refStateSet(): Atk.StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    setAccessibleId(name: string): void
    setDescription(description: string): void
    setName(name: string): void
    setParent(parent: Atk.Object): void
    setRole(role: Atk.Role): void
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
    /* Methods of Atk-1.0.Atk.Action */
    doAction(i: number): boolean
    getDescription(i: number): string | null
    getKeybinding(i: number): string | null
    getLocalizedName(i: number): string | null
    getNActions(): number
    getName(i: number): string | null
    setDescription(i: number, desc: string): boolean
    /* Methods of Atk-1.0.Atk.Component */
    contains(x: number, y: number, coordType: Atk.CoordType): boolean
    getAlpha(): number
    getExtents(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getPosition(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    grabFocus(): boolean
    refAccessibleAtPoint(x: number, y: number, coordType: Atk.CoordType): Atk.Object | null
    removeFocusHandler(handlerId: number): void
    scrollTo(type: Atk.ScrollType): boolean
    scrollToPoint(coords: Atk.CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, coordType: Atk.CoordType): boolean
    setPosition(x: number, y: number, coordType: Atk.CoordType): boolean
    setSize(width: number, height: number): boolean
    /* Signals of Atk-1.0.Atk.Object */
    connect(sigName: "active-descendant-changed", callback: ((arg1: Atk.Object) => void)): number
    on(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void): NodeJS.EventEmitter
    emit(sigName: "active-descendant-changed", arg1: Atk.Object): void
    connect(sigName: "children-changed", callback: ((arg1: number, arg2: Atk.Object) => void)): number
    on(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void): NodeJS.EventEmitter
    emit(sigName: "children-changed", arg1: number, arg2: Atk.Object): void
    connect(sigName: "focus-event", callback: ((arg1: boolean) => void)): number
    on(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (arg1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "focus-event", arg1: boolean): void
    connect(sigName: "property-change", callback: ((arg1: Atk.PropertyValues) => void)): number
    on(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void): NodeJS.EventEmitter
    emit(sigName: "property-change", arg1: Atk.PropertyValues): void
    connect(sigName: "state-change", callback: ((arg1: string, arg2: boolean) => void)): number
    on(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    connect(sigName: "visible-data-changed", callback: (() => void)): number
    on(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Component */
    connect(sigName: "bounds-changed", callback: ((arg1: Atk.Rectangle) => void)): number
    on(sigName: "bounds-changed", callback: (arg1: Atk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (arg1: Atk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (arg1: Atk.Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "bounds-changed", arg1: Atk.Rectangle): void
    connect(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Rectangle_ConstructProps)
    _init (config?: Rectangle_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(actor: Clutter.Actor): Rectangle
    /* Function overloads */
    static new(actor: Clutter.Actor): Rectangle
    static $gtype: GObject.Type
}
interface Root_ConstructProps extends Atk.GObjectAccessible_ConstructProps {
}
class Root {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleRole: Atk.Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Atk.Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Atk.Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Atk.Object
    accessibleTableSummary: Atk.Object
    accessibleValue: number
    /* Fields of Atk-1.0.Atk.GObjectAccessible */
    readonly parent: Atk.Object
    /* Fields of Atk-1.0.Atk.Object */
    readonly description: string
    readonly name: string
    readonly accessibleParent: Atk.Object
    readonly role: Atk.Role
    readonly relationSet: Atk.RelationSet
    readonly layer: Atk.Layer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.GObjectAccessible */
    getObject(): GObject.Object
    /* Methods of Atk-1.0.Atk.Object */
    addRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    getAccessibleId(): string
    getAttributes(): Atk.AttributeSet
    getDescription(): string
    getIndexInParent(): number
    getLayer(): Atk.Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    getName(): string
    getObjectLocale(): string
    getParent(): Atk.Object
    getRole(): Atk.Role
    initialize(data?: object | null): void
    notifyStateChange(state: Atk.State, value: boolean): void
    peekParent(): Atk.Object
    refAccessibleChild(i: number): Atk.Object
    refRelationSet(): Atk.RelationSet
    refStateSet(): Atk.StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    setAccessibleId(name: string): void
    setDescription(description: string): void
    setName(name: string): void
    setParent(parent: Atk.Object): void
    setRole(role: Atk.Role): void
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
    /* Signals of Atk-1.0.Atk.Object */
    connect(sigName: "active-descendant-changed", callback: ((arg1: Atk.Object) => void)): number
    on(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void): NodeJS.EventEmitter
    emit(sigName: "active-descendant-changed", arg1: Atk.Object): void
    connect(sigName: "children-changed", callback: ((arg1: number, arg2: Atk.Object) => void)): number
    on(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void): NodeJS.EventEmitter
    emit(sigName: "children-changed", arg1: number, arg2: Atk.Object): void
    connect(sigName: "focus-event", callback: ((arg1: boolean) => void)): number
    on(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (arg1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "focus-event", arg1: boolean): void
    connect(sigName: "property-change", callback: ((arg1: Atk.PropertyValues) => void)): number
    on(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void): NodeJS.EventEmitter
    emit(sigName: "property-change", arg1: Atk.PropertyValues): void
    connect(sigName: "state-change", callback: ((arg1: string, arg2: boolean) => void)): number
    on(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    connect(sigName: "visible-data-changed", callback: (() => void)): number
    on(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Root_ConstructProps)
    _init (config?: Root_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Root
    static $gtype: GObject.Type
}
interface Stage_ConstructProps extends Group_ConstructProps {
}
class Stage {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleRole: Atk.Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Atk.Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Atk.Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Atk.Object
    accessibleTableSummary: Atk.Object
    accessibleValue: number
    /* Fields of Atk-1.0.Atk.GObjectAccessible */
    readonly parent: Atk.Object
    /* Fields of Atk-1.0.Atk.Object */
    readonly description: string
    readonly name: string
    readonly accessibleParent: Atk.Object
    readonly role: Atk.Role
    readonly relationSet: Atk.RelationSet
    readonly layer: Atk.Layer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Cally-1.0.Cally.Actor */
    addAction(actionName: string, actionDescription: string, actionKeybinding: string, callback: ActionCallback): number
    removeAction(actionId: number): boolean
    removeActionByName(actionName: string): boolean
    /* Methods of Atk-1.0.Atk.GObjectAccessible */
    getObject(): GObject.Object
    /* Methods of Atk-1.0.Atk.Object */
    addRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    getAccessibleId(): string
    getAttributes(): Atk.AttributeSet
    getDescription(): string
    getIndexInParent(): number
    getLayer(): Atk.Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    getName(): string
    getObjectLocale(): string
    getParent(): Atk.Object
    getRole(): Atk.Role
    initialize(data?: object | null): void
    notifyStateChange(state: Atk.State, value: boolean): void
    peekParent(): Atk.Object
    refAccessibleChild(i: number): Atk.Object
    refRelationSet(): Atk.RelationSet
    refStateSet(): Atk.StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    setAccessibleId(name: string): void
    setDescription(description: string): void
    setName(name: string): void
    setParent(parent: Atk.Object): void
    setRole(role: Atk.Role): void
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
    /* Methods of Atk-1.0.Atk.Action */
    doAction(i: number): boolean
    getDescription(i: number): string | null
    getKeybinding(i: number): string | null
    getLocalizedName(i: number): string | null
    getNActions(): number
    getName(i: number): string | null
    setDescription(i: number, desc: string): boolean
    /* Methods of Atk-1.0.Atk.Component */
    contains(x: number, y: number, coordType: Atk.CoordType): boolean
    getAlpha(): number
    getExtents(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getPosition(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    grabFocus(): boolean
    refAccessibleAtPoint(x: number, y: number, coordType: Atk.CoordType): Atk.Object | null
    removeFocusHandler(handlerId: number): void
    scrollTo(type: Atk.ScrollType): boolean
    scrollToPoint(coords: Atk.CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, coordType: Atk.CoordType): boolean
    setPosition(x: number, y: number, coordType: Atk.CoordType): boolean
    setSize(width: number, height: number): boolean
    /* Signals of Atk-1.0.Atk.Object */
    connect(sigName: "active-descendant-changed", callback: ((arg1: Atk.Object) => void)): number
    on(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void): NodeJS.EventEmitter
    emit(sigName: "active-descendant-changed", arg1: Atk.Object): void
    connect(sigName: "children-changed", callback: ((arg1: number, arg2: Atk.Object) => void)): number
    on(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void): NodeJS.EventEmitter
    emit(sigName: "children-changed", arg1: number, arg2: Atk.Object): void
    connect(sigName: "focus-event", callback: ((arg1: boolean) => void)): number
    on(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (arg1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "focus-event", arg1: boolean): void
    connect(sigName: "property-change", callback: ((arg1: Atk.PropertyValues) => void)): number
    on(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void): NodeJS.EventEmitter
    emit(sigName: "property-change", arg1: Atk.PropertyValues): void
    connect(sigName: "state-change", callback: ((arg1: string, arg2: boolean) => void)): number
    on(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    connect(sigName: "visible-data-changed", callback: (() => void)): number
    on(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Component */
    connect(sigName: "bounds-changed", callback: ((arg1: Atk.Rectangle) => void)): number
    on(sigName: "bounds-changed", callback: (arg1: Atk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (arg1: Atk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (arg1: Atk.Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "bounds-changed", arg1: Atk.Rectangle): void
    /* Signals of Atk-1.0.Atk.Window */
    connect(sigName: "activate", callback: (() => void)): number
    on(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate"): void
    connect(sigName: "create", callback: (() => void)): number
    on(sigName: "create", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "create", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "create", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "create"): void
    connect(sigName: "deactivate", callback: (() => void)): number
    on(sigName: "deactivate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deactivate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deactivate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "deactivate"): void
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    connect(sigName: "maximize", callback: (() => void)): number
    on(sigName: "maximize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "maximize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "maximize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "maximize"): void
    connect(sigName: "minimize", callback: (() => void)): number
    on(sigName: "minimize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "minimize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "minimize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "minimize"): void
    connect(sigName: "move", callback: (() => void)): number
    on(sigName: "move", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "move"): void
    connect(sigName: "resize", callback: (() => void)): number
    on(sigName: "resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "resize"): void
    connect(sigName: "restore", callback: (() => void)): number
    on(sigName: "restore", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "restore", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "restore", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "restore"): void
    connect(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Stage_ConstructProps)
    _init (config?: Stage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(actor: Clutter.Actor): Stage
    /* Function overloads */
    static new(actor: Clutter.Actor): Stage
    static new(actor: Clutter.Actor): Stage
    static $gtype: GObject.Type
}
interface Text_ConstructProps extends Actor_ConstructProps {
}
class Text {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleRole: Atk.Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Atk.Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Atk.Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Atk.Object
    accessibleTableSummary: Atk.Object
    accessibleValue: number
    /* Fields of Atk-1.0.Atk.GObjectAccessible */
    readonly parent: Atk.Object
    /* Fields of Atk-1.0.Atk.Object */
    readonly description: string
    readonly name: string
    readonly accessibleParent: Atk.Object
    readonly role: Atk.Role
    readonly relationSet: Atk.RelationSet
    readonly layer: Atk.Layer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Cally-1.0.Cally.Actor */
    addAction(actionName: string, actionDescription: string, actionKeybinding: string, callback: ActionCallback): number
    removeAction(actionId: number): boolean
    removeActionByName(actionName: string): boolean
    /* Methods of Atk-1.0.Atk.GObjectAccessible */
    getObject(): GObject.Object
    /* Methods of Atk-1.0.Atk.Object */
    addRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    getAccessibleId(): string
    getAttributes(): Atk.AttributeSet
    getDescription(): string
    getIndexInParent(): number
    getLayer(): Atk.Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    getName(): string
    getObjectLocale(): string
    getParent(): Atk.Object
    getRole(): Atk.Role
    initialize(data?: object | null): void
    notifyStateChange(state: Atk.State, value: boolean): void
    peekParent(): Atk.Object
    refAccessibleChild(i: number): Atk.Object
    refRelationSet(): Atk.RelationSet
    refStateSet(): Atk.StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    setAccessibleId(name: string): void
    setDescription(description: string): void
    setName(name: string): void
    setParent(parent: Atk.Object): void
    setRole(role: Atk.Role): void
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
    /* Methods of Atk-1.0.Atk.Action */
    doAction(i: number): boolean
    getDescription(i: number): string | null
    getKeybinding(i: number): string | null
    getLocalizedName(i: number): string | null
    getNActions(): number
    getName(i: number): string | null
    setDescription(i: number, desc: string): boolean
    /* Methods of Atk-1.0.Atk.Component */
    contains(x: number, y: number, coordType: Atk.CoordType): boolean
    getAlpha(): number
    getExtents(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getPosition(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    grabFocus(): boolean
    refAccessibleAtPoint(x: number, y: number, coordType: Atk.CoordType): Atk.Object | null
    removeFocusHandler(handlerId: number): void
    scrollTo(type: Atk.ScrollType): boolean
    scrollToPoint(coords: Atk.CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, coordType: Atk.CoordType): boolean
    setPosition(x: number, y: number, coordType: Atk.CoordType): boolean
    setSize(width: number, height: number): boolean
    /* Methods of Atk-1.0.Atk.EditableText */
    copyText(startPos: number, endPos: number): void
    cutText(startPos: number, endPos: number): void
    deleteText(startPos: number, endPos: number): void
    insertText(string: string, length: number, position: number): void
    pasteText(position: number): void
    setRunAttributes(attribSet: Atk.AttributeSet, startOffset: number, endOffset: number): boolean
    setTextContents(string: string): void
    /* Methods of Atk-1.0.Atk.Text */
    addSelection(startOffset: number, endOffset: number): boolean
    getBoundedRanges(rect: Atk.TextRectangle, coordType: Atk.CoordType, xClipType: Atk.TextClipType, yClipType: Atk.TextClipType): Atk.TextRange[]
    getCaretOffset(): number
    getCharacterAtOffset(offset: number): number
    getCharacterCount(): number
    getCharacterExtents(offset: number, coords: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getDefaultAttributes(): Atk.AttributeSet
    getNSelections(): number
    getOffsetAtPoint(x: number, y: number, coords: Atk.CoordType): number
    getRangeExtents(startOffset: number, endOffset: number, coordType: Atk.CoordType): /* rect */ Atk.TextRectangle
    getRunAttributes(offset: number): [ /* returnType */ Atk.AttributeSet, /* startOffset */ number, /* endOffset */ number ]
    getSelection(selectionNum: number): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    getStringAtOffset(offset: number, granularity: Atk.TextGranularity): [ /* returnType */ string | null, /* startOffset */ number, /* endOffset */ number ]
    getText(startOffset: number, endOffset: number): string
    getTextAfterOffset(offset: number, boundaryType: Atk.TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    getTextAtOffset(offset: number, boundaryType: Atk.TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    getTextBeforeOffset(offset: number, boundaryType: Atk.TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    removeSelection(selectionNum: number): boolean
    scrollSubstringTo(startOffset: number, endOffset: number, type: Atk.ScrollType): boolean
    scrollSubstringToPoint(startOffset: number, endOffset: number, coords: Atk.CoordType, x: number, y: number): boolean
    setCaretOffset(offset: number): boolean
    setSelection(selectionNum: number, startOffset: number, endOffset: number): boolean
    /* Signals of Atk-1.0.Atk.Object */
    connect(sigName: "active-descendant-changed", callback: ((arg1: Atk.Object) => void)): number
    on(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void): NodeJS.EventEmitter
    emit(sigName: "active-descendant-changed", arg1: Atk.Object): void
    connect(sigName: "children-changed", callback: ((arg1: number, arg2: Atk.Object) => void)): number
    on(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void): NodeJS.EventEmitter
    emit(sigName: "children-changed", arg1: number, arg2: Atk.Object): void
    connect(sigName: "focus-event", callback: ((arg1: boolean) => void)): number
    on(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (arg1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "focus-event", arg1: boolean): void
    connect(sigName: "property-change", callback: ((arg1: Atk.PropertyValues) => void)): number
    on(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void): NodeJS.EventEmitter
    emit(sigName: "property-change", arg1: Atk.PropertyValues): void
    connect(sigName: "state-change", callback: ((arg1: string, arg2: boolean) => void)): number
    on(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    connect(sigName: "visible-data-changed", callback: (() => void)): number
    on(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Component */
    connect(sigName: "bounds-changed", callback: ((arg1: Atk.Rectangle) => void)): number
    on(sigName: "bounds-changed", callback: (arg1: Atk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (arg1: Atk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (arg1: Atk.Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "bounds-changed", arg1: Atk.Rectangle): void
    /* Signals of Atk-1.0.Atk.Text */
    connect(sigName: "text-attributes-changed", callback: (() => void)): number
    on(sigName: "text-attributes-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-attributes-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-attributes-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "text-attributes-changed"): void
    connect(sigName: "text-caret-moved", callback: ((arg1: number) => void)): number
    on(sigName: "text-caret-moved", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-caret-moved", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-caret-moved", callback: (arg1: number) => void): NodeJS.EventEmitter
    emit(sigName: "text-caret-moved", arg1: number): void
    connect(sigName: "text-changed", callback: ((arg1: number, arg2: number) => void)): number
    on(sigName: "text-changed", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-changed", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-changed", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "text-changed", arg1: number, arg2: number): void
    connect(sigName: "text-insert", callback: ((arg1: number, arg2: number, arg3: string) => void)): number
    on(sigName: "text-insert", callback: (arg1: number, arg2: number, arg3: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-insert", callback: (arg1: number, arg2: number, arg3: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-insert", callback: (arg1: number, arg2: number, arg3: string) => void): NodeJS.EventEmitter
    emit(sigName: "text-insert", arg1: number, arg2: number, arg3: string): void
    connect(sigName: "text-remove", callback: ((arg1: number, arg2: number, arg3: string) => void)): number
    on(sigName: "text-remove", callback: (arg1: number, arg2: number, arg3: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-remove", callback: (arg1: number, arg2: number, arg3: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-remove", callback: (arg1: number, arg2: number, arg3: string) => void): NodeJS.EventEmitter
    emit(sigName: "text-remove", arg1: number, arg2: number, arg3: string): void
    connect(sigName: "text-selection-changed", callback: (() => void)): number
    on(sigName: "text-selection-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-selection-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-selection-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "text-selection-changed"): void
    connect(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Text_ConstructProps)
    _init (config?: Text_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(actor: Clutter.Actor): Text
    /* Function overloads */
    static new(actor: Clutter.Actor): Text
    static freeRanges(ranges: Atk.TextRange[]): void
    static $gtype: GObject.Type
}
interface Texture_ConstructProps extends Actor_ConstructProps {
}
class Texture {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleRole: Atk.Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Atk.Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Atk.Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Atk.Object
    accessibleTableSummary: Atk.Object
    accessibleValue: number
    /* Fields of Atk-1.0.Atk.GObjectAccessible */
    readonly parent: Atk.Object
    /* Fields of Atk-1.0.Atk.Object */
    readonly description: string
    readonly name: string
    readonly accessibleParent: Atk.Object
    readonly role: Atk.Role
    readonly relationSet: Atk.RelationSet
    readonly layer: Atk.Layer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Cally-1.0.Cally.Actor */
    addAction(actionName: string, actionDescription: string, actionKeybinding: string, callback: ActionCallback): number
    removeAction(actionId: number): boolean
    removeActionByName(actionName: string): boolean
    /* Methods of Atk-1.0.Atk.GObjectAccessible */
    getObject(): GObject.Object
    /* Methods of Atk-1.0.Atk.Object */
    addRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    getAccessibleId(): string
    getAttributes(): Atk.AttributeSet
    getDescription(): string
    getIndexInParent(): number
    getLayer(): Atk.Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    getName(): string
    getObjectLocale(): string
    getParent(): Atk.Object
    getRole(): Atk.Role
    initialize(data?: object | null): void
    notifyStateChange(state: Atk.State, value: boolean): void
    peekParent(): Atk.Object
    refAccessibleChild(i: number): Atk.Object
    refRelationSet(): Atk.RelationSet
    refStateSet(): Atk.StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: Atk.RelationType, target: Atk.Object): boolean
    setAccessibleId(name: string): void
    setDescription(description: string): void
    setName(name: string): void
    setParent(parent: Atk.Object): void
    setRole(role: Atk.Role): void
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
    /* Methods of Atk-1.0.Atk.Action */
    doAction(i: number): boolean
    getDescription(i: number): string | null
    getKeybinding(i: number): string | null
    getLocalizedName(i: number): string | null
    getNActions(): number
    getName(i: number): string | null
    setDescription(i: number, desc: string): boolean
    /* Methods of Atk-1.0.Atk.Component */
    contains(x: number, y: number, coordType: Atk.CoordType): boolean
    getAlpha(): number
    getExtents(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getPosition(coordType: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    grabFocus(): boolean
    refAccessibleAtPoint(x: number, y: number, coordType: Atk.CoordType): Atk.Object | null
    removeFocusHandler(handlerId: number): void
    scrollTo(type: Atk.ScrollType): boolean
    scrollToPoint(coords: Atk.CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, coordType: Atk.CoordType): boolean
    setPosition(x: number, y: number, coordType: Atk.CoordType): boolean
    setSize(width: number, height: number): boolean
    /* Signals of Atk-1.0.Atk.Object */
    connect(sigName: "active-descendant-changed", callback: ((arg1: Atk.Object) => void)): number
    on(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (arg1: Atk.Object) => void): NodeJS.EventEmitter
    emit(sigName: "active-descendant-changed", arg1: Atk.Object): void
    connect(sigName: "children-changed", callback: ((arg1: number, arg2: Atk.Object) => void)): number
    on(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (arg1: number, arg2: Atk.Object) => void): NodeJS.EventEmitter
    emit(sigName: "children-changed", arg1: number, arg2: Atk.Object): void
    connect(sigName: "focus-event", callback: ((arg1: boolean) => void)): number
    on(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (arg1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "focus-event", arg1: boolean): void
    connect(sigName: "property-change", callback: ((arg1: Atk.PropertyValues) => void)): number
    on(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (arg1: Atk.PropertyValues) => void): NodeJS.EventEmitter
    emit(sigName: "property-change", arg1: Atk.PropertyValues): void
    connect(sigName: "state-change", callback: ((arg1: string, arg2: boolean) => void)): number
    on(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    connect(sigName: "visible-data-changed", callback: (() => void)): number
    on(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Component */
    connect(sigName: "bounds-changed", callback: ((arg1: Atk.Rectangle) => void)): number
    on(sigName: "bounds-changed", callback: (arg1: Atk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (arg1: Atk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (arg1: Atk.Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "bounds-changed", arg1: Atk.Rectangle): void
    connect(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Texture_ConstructProps)
    _init (config?: Texture_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(actor: Clutter.Actor): Texture
    /* Function overloads */
    static new(actor: Clutter.Actor): Texture
    static $gtype: GObject.Type
}
interface Util_ConstructProps extends Atk.Util_ConstructProps {
}
class Util {
    /* Fields of Atk-1.0.Atk.Util */
    readonly parent: GObject.Object
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
    constructor (config?: Util_ConstructProps)
    _init (config?: Util_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class ActorClass {
    /* Fields of Cally-1.0.Cally.ActorClass */
    readonly notifyClutter: (object: GObject.Object, pspec: GObject.ParamSpec) => void
    readonly focusClutter: (actor: Clutter.Actor, data: object) => boolean
    readonly addActor: (container: Clutter.Actor, actor: Clutter.Actor, data: object) => number
    readonly removeActor: (container: Clutter.Actor, actor: Clutter.Actor, data: object) => number
    static name: string
}
class ActorPrivate {
    static name: string
}
abstract class CloneClass {
    static name: string
}
class ClonePrivate {
    static name: string
}
abstract class GroupClass {
    static name: string
}
class GroupPrivate {
    static name: string
}
abstract class RectangleClass {
    static name: string
}
class RectanglePrivate {
    static name: string
}
abstract class RootClass {
    static name: string
}
class RootPrivate {
    static name: string
}
abstract class StageClass {
    static name: string
}
class StagePrivate {
    static name: string
}
abstract class TextClass {
    static name: string
}
class TextPrivate {
    static name: string
}
abstract class TextureClass {
    static name: string
}
class TexturePrivate {
    static name: string
}
abstract class UtilClass {
    static name: string
}
class UtilPrivate {
    static name: string
}
}
export default Cally;