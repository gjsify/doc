/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Caribou-1.0
 */

import type Gdk from './Gdk-3.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';

export namespace Caribou {

enum ModifierState {
    NONE,
    LATCHED,
    LOCKED,
}
enum ScanGrouping {
    NONE,
    SUBGROUPS,
    ROWS,
    LINEAR,
}
interface KeyButtonCallback {
    (keybuttoncode: number, pressed: boolean): void
}
interface IScannableItem_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Caribou-1.0.Caribou.IScannableItem */
    scanStepping?: boolean
    scanSelected?: boolean
}
class IScannableItem {
    /* Properties of Caribou-1.0.Caribou.IScannableItem */
    scanStepping: boolean
    scanSelected: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.IScannableItem */
    getScanStepping(): boolean
    setScanStepping(value: boolean): void
    getScanSelected(): boolean
    setScanSelected(value: boolean): void
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
    connect(sigName: "notify::scan-stepping", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-stepping", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scan-selected", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-selected", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scan-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scan-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IScannableItem_ConstructProps)
    _init (config?: IScannableItem_ConstructProps): void
    static $gtype: GObject.Type
}
interface IScannableGroup_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Caribou-1.0.Caribou.IScannableGroup */
    scanGrouping?: ScanGrouping
}
class IScannableGroup {
    /* Properties of Caribou-1.0.Caribou.IScannableGroup */
    scanGrouping: ScanGrouping
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.IScannableGroup */
    childSelect(): IScannableItem | null
    scanReset(): void
    getScanChildren(): IScannableItem[]
    childStep(cycles: number): IScannableItem | null
    getStepPath(): IScannableItem[]
    getSelectedPath(): IScannableItem[]
    getScanGrouping(): ScanGrouping
    setScanGrouping(value: ScanGrouping): void
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
    /* Signals of Caribou-1.0.Caribou.IScannableGroup */
    connect(sigName: "selected-item-changed", callback: ((selectedItem?: IScannableItem | null) => void)): number
    on(sigName: "selected-item-changed", callback: (selectedItem?: IScannableItem | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selected-item-changed", callback: (selectedItem?: IScannableItem | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selected-item-changed", callback: (selectedItem?: IScannableItem | null) => void): NodeJS.EventEmitter
    emit(sigName: "selected-item-changed", selectedItem?: IScannableItem | null): void
    connect(sigName: "step-item-changed", callback: ((stepItem?: IScannableItem | null) => void)): number
    on(sigName: "step-item-changed", callback: (stepItem?: IScannableItem | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "step-item-changed", callback: (stepItem?: IScannableItem | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "step-item-changed", callback: (stepItem?: IScannableItem | null) => void): NodeJS.EventEmitter
    emit(sigName: "step-item-changed", stepItem?: IScannableItem | null): void
    connect(sigName: "scan-cleared", callback: (() => void)): number
    on(sigName: "scan-cleared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scan-cleared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scan-cleared", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "scan-cleared"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::scan-grouping", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-grouping", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-grouping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scan-grouping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scan-grouping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IScannableGroup_ConstructProps)
    _init (config?: IScannableGroup_ConstructProps): void
    static $gtype: GObject.Type
}
interface IKeyboardObject_ConstructProps extends GObject.Object_ConstructProps {
}
class IKeyboardObject {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.IKeyboardObject */
    getChildren(): IKeyboardObject[]
    getKeys(): KeyModel[]
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
    /* Signals of Caribou-1.0.Caribou.IKeyboardObject */
    connect(sigName: "key-clicked", callback: ((key: KeyModel) => void)): number
    on(sigName: "key-clicked", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-clicked", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-clicked", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-clicked", key: KeyModel): void
    connect(sigName: "key-pressed", callback: ((key: KeyModel) => void)): number
    on(sigName: "key-pressed", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-pressed", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-pressed", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-pressed", key: KeyModel): void
    connect(sigName: "key-released", callback: ((key: KeyModel) => void)): number
    on(sigName: "key-released", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-released", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-released", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-released", key: KeyModel): void
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
    constructor (config?: IKeyboardObject_ConstructProps)
    _init (config?: IKeyboardObject_ConstructProps): void
    static $gtype: GObject.Type
}
interface DisplayAdapter_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Caribou-1.0.Caribou.DisplayAdapter */
    display?: Gdk.Display
}
class DisplayAdapter {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.DisplayAdapter */
    keyvalPress(keyval: number): void
    keyvalRelease(keyval: number): void
    modLock(mask: number): void
    modUnlock(mask: number): void
    modLatch(mask: number): void
    modUnlatch(mask: number): void
    getCurrentGroup(): [ /* returnType */ number, /* groupName */ string, /* variantName */ string ]
    getGroups(): [ /* groupNames */ string[], /* variantNames */ string[] ]
    registerKeyFunc(keyval: number, func?: KeyButtonCallback | null): void
    registerButtonFunc(button: number, func?: KeyButtonCallback | null): void
    getDisplay(): Gdk.Display
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
    /* Signals of Caribou-1.0.Caribou.DisplayAdapter */
    connect(sigName: "modifiers-changed", callback: ((modifiers: number) => void)): number
    on(sigName: "modifiers-changed", callback: (modifiers: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "modifiers-changed", callback: (modifiers: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "modifiers-changed", callback: (modifiers: number) => void): NodeJS.EventEmitter
    emit(sigName: "modifiers-changed", modifiers: number): void
    connect(sigName: "group-changed", callback: ((gid: number, group: string, variant: string) => void)): number
    on(sigName: "group-changed", callback: (gid: number, group: string, variant: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "group-changed", callback: (gid: number, group: string, variant: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "group-changed", callback: (gid: number, group: string, variant: string) => void): NodeJS.EventEmitter
    emit(sigName: "group-changed", gid: number, group: string, variant: string): void
    connect(sigName: "config-changed", callback: (() => void)): number
    on(sigName: "config-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "config-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "config-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "config-changed"): void
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
    constructor (config?: DisplayAdapter_ConstructProps)
    _init (config?: DisplayAdapter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static setDefault(adapter: DisplayAdapter): boolean
    static getDefault(): DisplayAdapter
    static $gtype: GObject.Type
}
interface NullAdapter_ConstructProps extends DisplayAdapter_ConstructProps {
}
class NullAdapter {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.DisplayAdapter */
    keyvalPress(keyval: number): void
    keyvalRelease(keyval: number): void
    modLock(mask: number): void
    modUnlock(mask: number): void
    modLatch(mask: number): void
    modUnlatch(mask: number): void
    getCurrentGroup(): [ /* returnType */ number, /* groupName */ string, /* variantName */ string ]
    getGroups(): [ /* groupNames */ string[], /* variantNames */ string[] ]
    registerKeyFunc(keyval: number, func?: KeyButtonCallback | null): void
    registerButtonFunc(button: number, func?: KeyButtonCallback | null): void
    getDisplay(): Gdk.Display
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
    /* Signals of Caribou-1.0.Caribou.DisplayAdapter */
    connect(sigName: "modifiers-changed", callback: ((modifiers: number) => void)): number
    on(sigName: "modifiers-changed", callback: (modifiers: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "modifiers-changed", callback: (modifiers: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "modifiers-changed", callback: (modifiers: number) => void): NodeJS.EventEmitter
    emit(sigName: "modifiers-changed", modifiers: number): void
    connect(sigName: "group-changed", callback: ((gid: number, group: string, variant: string) => void)): number
    on(sigName: "group-changed", callback: (gid: number, group: string, variant: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "group-changed", callback: (gid: number, group: string, variant: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "group-changed", callback: (gid: number, group: string, variant: string) => void): NodeJS.EventEmitter
    emit(sigName: "group-changed", gid: number, group: string, variant: string): void
    connect(sigName: "config-changed", callback: (() => void)): number
    on(sigName: "config-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "config-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "config-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "config-changed"): void
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
    constructor (config?: NullAdapter_ConstructProps)
    _init (config?: NullAdapter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NullAdapter
    static $gtype: GObject.Type
}
interface XAdapter_ConstructProps extends DisplayAdapter_ConstructProps {
}
class XAdapter {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.DisplayAdapter */
    keyvalPress(keyval: number): void
    keyvalRelease(keyval: number): void
    modLock(mask: number): void
    modUnlock(mask: number): void
    modLatch(mask: number): void
    modUnlatch(mask: number): void
    getCurrentGroup(): [ /* returnType */ number, /* groupName */ string, /* variantName */ string ]
    getGroups(): [ /* groupNames */ string[], /* variantNames */ string[] ]
    registerKeyFunc(keyval: number, func?: KeyButtonCallback | null): void
    registerButtonFunc(button: number, func?: KeyButtonCallback | null): void
    getDisplay(): Gdk.Display
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
    /* Signals of Caribou-1.0.Caribou.DisplayAdapter */
    connect(sigName: "modifiers-changed", callback: ((modifiers: number) => void)): number
    on(sigName: "modifiers-changed", callback: (modifiers: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "modifiers-changed", callback: (modifiers: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "modifiers-changed", callback: (modifiers: number) => void): NodeJS.EventEmitter
    emit(sigName: "modifiers-changed", modifiers: number): void
    connect(sigName: "group-changed", callback: ((gid: number, group: string, variant: string) => void)): number
    on(sigName: "group-changed", callback: (gid: number, group: string, variant: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "group-changed", callback: (gid: number, group: string, variant: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "group-changed", callback: (gid: number, group: string, variant: string) => void): NodeJS.EventEmitter
    emit(sigName: "group-changed", gid: number, group: string, variant: string): void
    connect(sigName: "config-changed", callback: (() => void)): number
    on(sigName: "config-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "config-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "config-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "config-changed"): void
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
    constructor (config?: XAdapter_ConstructProps)
    _init (config?: XAdapter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): XAdapter
    static $gtype: GObject.Type
}
interface KeyboardModel_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Caribou-1.0.Caribou.KeyboardModel */
    activeGroup?: string
    keyboardType?: string
    keyboardFile?: string
}
class KeyboardModel {
    /* Properties of Caribou-1.0.Caribou.KeyboardModel */
    activeGroup: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.KeyboardModel */
    getGroups(): string[]
    getGroup(groupName: string): GroupModel
    getActiveGroup(): string
    getKeyboardType(): string
    getKeyboardFile(): string
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
    /* Methods of Caribou-1.0.Caribou.IKeyboardObject */
    getChildren(): IKeyboardObject[]
    getKeys(): KeyModel[]
    /* Signals of Caribou-1.0.Caribou.KeyboardModel */
    connect(sigName: "group-added", callback: ((name: string) => void)): number
    on(sigName: "group-added", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "group-added", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "group-added", callback: (name: string) => void): NodeJS.EventEmitter
    emit(sigName: "group-added", name: string): void
    connect(sigName: "group-removed", callback: ((name: string) => void)): number
    on(sigName: "group-removed", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "group-removed", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "group-removed", callback: (name: string) => void): NodeJS.EventEmitter
    emit(sigName: "group-removed", name: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Caribou-1.0.Caribou.IKeyboardObject */
    connect(sigName: "key-clicked", callback: ((key: KeyModel) => void)): number
    on(sigName: "key-clicked", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-clicked", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-clicked", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-clicked", key: KeyModel): void
    connect(sigName: "key-pressed", callback: ((key: KeyModel) => void)): number
    on(sigName: "key-pressed", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-pressed", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-pressed", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-pressed", key: KeyModel): void
    connect(sigName: "key-released", callback: ((key: KeyModel) => void)): number
    on(sigName: "key-released", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-released", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-released", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-released", key: KeyModel): void
    connect(sigName: "notify::active-group", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-group", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: KeyboardModel_ConstructProps)
    _init (config?: KeyboardModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): KeyboardModel
    static $gtype: GObject.Type
}
interface KeyboardService_ConstructProps extends GObject.Object_ConstructProps {
}
class KeyboardService {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.KeyboardService */
    setCursorLocation(x: number, y: number, w: number, h: number): void
    setEntryLocation(x: number, y: number, w: number, h: number): void
    show(timestamp: number): void
    hide(timestamp: number): void
    registerKeyboard(name: string): void
    nameLost(name: string): void
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
    constructor (config?: KeyboardService_ConstructProps)
    _init (config?: KeyboardService_ConstructProps): void
    static $gtype: GObject.Type
}
interface GroupModel_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Caribou-1.0.Caribou.GroupModel */
    activeLevel?: string
}
class GroupModel {
    /* Properties of Caribou-1.0.Caribou.GroupModel */
    activeLevel: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.GroupModel */
    getLevels(): string[]
    getLevel(levelName: string): LevelModel
    getActiveLevel(): string
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
    /* Methods of Caribou-1.0.Caribou.IKeyboardObject */
    getChildren(): IKeyboardObject[]
    getKeys(): KeyModel[]
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Caribou-1.0.Caribou.IKeyboardObject */
    connect(sigName: "key-clicked", callback: ((key: KeyModel) => void)): number
    on(sigName: "key-clicked", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-clicked", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-clicked", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-clicked", key: KeyModel): void
    connect(sigName: "key-pressed", callback: ((key: KeyModel) => void)): number
    on(sigName: "key-pressed", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-pressed", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-pressed", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-pressed", key: KeyModel): void
    connect(sigName: "key-released", callback: ((key: KeyModel) => void)): number
    on(sigName: "key-released", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-released", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-released", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-released", key: KeyModel): void
    connect(sigName: "notify::active-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GroupModel_ConstructProps)
    _init (config?: GroupModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(group: string, variant: string): GroupModel
    static createGroupName(group: string, variant: string): string
    static $gtype: GObject.Type
}
interface LevelModel_ConstructProps extends ScannableGroup_ConstructProps {
    /* Constructor properties of Caribou-1.0.Caribou.LevelModel */
    mode?: string
}
class LevelModel {
    /* Properties of Caribou-1.0.Caribou.LevelModel */
    mode: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.LevelModel */
    getRows(): RowModel[]
    getMode(): string
    /* Methods of Caribou-1.0.Caribou.ScannableGroup */
    getScanChildren(): IScannableItem[]
    childSelect(): IScannableItem | null
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
    /* Methods of Caribou-1.0.Caribou.IKeyboardObject */
    getChildren(): IKeyboardObject[]
    getKeys(): KeyModel[]
    /* Signals of Caribou-1.0.Caribou.LevelModel */
    connect(sigName: "level-toggled", callback: ((newLevel: string) => void)): number
    on(sigName: "level-toggled", callback: (newLevel: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "level-toggled", callback: (newLevel: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "level-toggled", callback: (newLevel: string) => void): NodeJS.EventEmitter
    emit(sigName: "level-toggled", newLevel: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Caribou-1.0.Caribou.IKeyboardObject */
    connect(sigName: "key-clicked", callback: ((key: KeyModel) => void)): number
    on(sigName: "key-clicked", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-clicked", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-clicked", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-clicked", key: KeyModel): void
    connect(sigName: "key-pressed", callback: ((key: KeyModel) => void)): number
    on(sigName: "key-pressed", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-pressed", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-pressed", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-pressed", key: KeyModel): void
    connect(sigName: "key-released", callback: ((key: KeyModel) => void)): number
    on(sigName: "key-released", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-released", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-released", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-released", key: KeyModel): void
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
    constructor (config?: LevelModel_ConstructProps)
    _init (config?: LevelModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(mode: string): LevelModel
    static $gtype: GObject.Type
}
interface RowModel_ConstructProps extends ScannableGroup_ConstructProps {
    /* Constructor properties of Caribou-1.0.Caribou.IScannableItem */
    scanStepping?: boolean
    scanSelected?: boolean
}
class RowModel {
    /* Properties of Caribou-1.0.Caribou.IScannableItem */
    scanStepping: boolean
    scanSelected: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.RowModel */
    getColumns(): ColumnModel[]
    /* Methods of Caribou-1.0.Caribou.ScannableGroup */
    getScanChildren(): IScannableItem[]
    childSelect(): IScannableItem | null
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
    /* Methods of Caribou-1.0.Caribou.IScannableItem */
    getScanStepping(): boolean
    setScanStepping(value: boolean): void
    getScanSelected(): boolean
    setScanSelected(value: boolean): void
    /* Methods of Caribou-1.0.Caribou.IKeyboardObject */
    getChildren(): IKeyboardObject[]
    getKeys(): KeyModel[]
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Caribou-1.0.Caribou.IKeyboardObject */
    connect(sigName: "key-clicked", callback: ((key: KeyModel) => void)): number
    on(sigName: "key-clicked", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-clicked", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-clicked", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-clicked", key: KeyModel): void
    connect(sigName: "key-pressed", callback: ((key: KeyModel) => void)): number
    on(sigName: "key-pressed", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-pressed", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-pressed", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-pressed", key: KeyModel): void
    connect(sigName: "key-released", callback: ((key: KeyModel) => void)): number
    on(sigName: "key-released", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-released", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-released", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-released", key: KeyModel): void
    connect(sigName: "notify::scan-stepping", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-stepping", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scan-selected", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-selected", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scan-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scan-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RowModel_ConstructProps)
    _init (config?: RowModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RowModel
    static $gtype: GObject.Type
}
interface KeyModel_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Caribou-1.0.Caribou.KeyModel */
    align?: string
    width?: number
    toggle?: string
    repeatable?: boolean
    isModifier?: boolean
    showSubkeys?: boolean
    name?: string
    keyval?: number
    text?: string
    label?: string
    /* Constructor properties of Caribou-1.0.Caribou.IScannableItem */
    scanStepping?: boolean
    scanSelected?: boolean
}
class KeyModel {
    /* Properties of Caribou-1.0.Caribou.KeyModel */
    align: string
    width: number
    toggle: string
    repeatable: boolean
    isModifier: boolean
    showSubkeys: boolean
    name: string
    keyval: number
    text: string
    label: string
    /* Properties of Caribou-1.0.Caribou.IScannableItem */
    scanStepping: boolean
    scanSelected: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.KeyModel */
    press(): void
    release(): void
    getExtendedKeys(): KeyModel[]
    activate(): void
    getAlign(): string
    setAlign(value: string): void
    getWidth(): number
    setWidth(value: number): void
    getToggle(): string
    setToggle(value: string): void
    getRepeatable(): boolean
    setRepeatable(value: boolean): void
    getIsModifier(): boolean
    setIsModifier(value: boolean): void
    getShowSubkeys(): boolean
    getName(): string
    getKeyval(): number
    getText(): string | null
    getLabel(): string
    setLabel(value: string): void
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
    /* Methods of Caribou-1.0.Caribou.IScannableItem */
    getScanStepping(): boolean
    setScanStepping(value: boolean): void
    getScanSelected(): boolean
    setScanSelected(value: boolean): void
    /* Methods of Caribou-1.0.Caribou.IKeyboardObject */
    getChildren(): IKeyboardObject[]
    getKeys(): KeyModel[]
    /* Signals of Caribou-1.0.Caribou.KeyModel */
    connect(sigName: "key-hold-end", callback: (() => void)): number
    on(sigName: "key-hold-end", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-hold-end", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-hold-end", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "key-hold-end"): void
    connect(sigName: "key-hold", callback: (() => void)): number
    on(sigName: "key-hold", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-hold", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-hold", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "key-hold"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Caribou-1.0.Caribou.IKeyboardObject */
    connect(sigName: "key-clicked", callback: ((key: KeyModel) => void)): number
    on(sigName: "key-clicked", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-clicked", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-clicked", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-clicked", key: KeyModel): void
    connect(sigName: "key-pressed", callback: ((key: KeyModel) => void)): number
    on(sigName: "key-pressed", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-pressed", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-pressed", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-pressed", key: KeyModel): void
    connect(sigName: "key-released", callback: ((key: KeyModel) => void)): number
    on(sigName: "key-released", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-released", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-released", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-released", key: KeyModel): void
    connect(sigName: "notify::align", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::align", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::toggle", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::toggle", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::toggle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::toggle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::toggle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::repeatable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeatable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::repeatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::repeatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::repeatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-modifier", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-modifier", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-modifier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-modifier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-modifier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-subkeys", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-subkeys", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-subkeys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-subkeys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-subkeys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keyval", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keyval", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keyval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keyval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keyval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scan-stepping", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-stepping", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scan-selected", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-selected", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scan-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scan-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: KeyModel_ConstructProps)
    _init (config?: KeyModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, text?: string | null): KeyModel
    static $gtype: GObject.Type
}
interface ColumnModel_ConstructProps extends ScannableGroup_ConstructProps {
    /* Constructor properties of Caribou-1.0.Caribou.IScannableItem */
    scanStepping?: boolean
    scanSelected?: boolean
}
class ColumnModel {
    /* Properties of Caribou-1.0.Caribou.IScannableItem */
    scanStepping: boolean
    scanSelected: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.ColumnModel */
    getKey(index: number): KeyModel
    firstKey(): KeyModel
    /* Methods of Caribou-1.0.Caribou.ScannableGroup */
    getScanChildren(): IScannableItem[]
    childSelect(): IScannableItem | null
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
    /* Methods of Caribou-1.0.Caribou.IScannableItem */
    getScanStepping(): boolean
    setScanStepping(value: boolean): void
    getScanSelected(): boolean
    setScanSelected(value: boolean): void
    /* Methods of Caribou-1.0.Caribou.IKeyboardObject */
    getChildren(): IKeyboardObject[]
    getKeys(): KeyModel[]
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Caribou-1.0.Caribou.IKeyboardObject */
    connect(sigName: "key-clicked", callback: ((key: KeyModel) => void)): number
    on(sigName: "key-clicked", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-clicked", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-clicked", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-clicked", key: KeyModel): void
    connect(sigName: "key-pressed", callback: ((key: KeyModel) => void)): number
    on(sigName: "key-pressed", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-pressed", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-pressed", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-pressed", key: KeyModel): void
    connect(sigName: "key-released", callback: ((key: KeyModel) => void)): number
    on(sigName: "key-released", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-released", callback: (key: KeyModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-released", callback: (key: KeyModel) => void): NodeJS.EventEmitter
    emit(sigName: "key-released", key: KeyModel): void
    connect(sigName: "notify::scan-stepping", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-stepping", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scan-stepping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scan-selected", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-selected", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scan-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scan-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ColumnModel_ConstructProps)
    _init (config?: ColumnModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ColumnModel
    static $gtype: GObject.Type
}
interface Scanner_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Caribou-1.0.Caribou.Scanner */
    bindSettings?: boolean
    scanGrouping?: number
    scanEnabled?: boolean
    stepTime?: number
    switchDevice?: string
    keyboardKey?: string
    mouseButton?: number
    scanCycles?: number
    autorestart?: boolean
    inverseScanning?: boolean
}
class Scanner {
    /* Properties of Caribou-1.0.Caribou.Scanner */
    scanGrouping: number
    scanEnabled: boolean
    stepTime: number
    switchDevice: string
    keyboardKey: string
    mouseButton: number
    scanCycles: number
    autorestart: boolean
    inverseScanning: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.Scanner */
    setKeyboard(keyboard: KeyboardModel): void
    reset(): void
    getBindSettings(): boolean
    getScanGrouping(): number
    setScanGrouping(value: number): void
    getScanEnabled(): boolean
    setScanEnabled(value: boolean): void
    getStepTime(): number
    setStepTime(value: number): void
    getSwitchDevice(): string
    setSwitchDevice(value: string): void
    getKeyboardKey(): string
    setKeyboardKey(value: string): void
    getMouseButton(): number
    setMouseButton(value: number): void
    getScanCycles(): number
    setScanCycles(value: number): void
    getAutorestart(): boolean
    setAutorestart(value: boolean): void
    getInverseScanning(): boolean
    setInverseScanning(value: boolean): void
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
    connect(sigName: "notify::scan-grouping", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-grouping", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-grouping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scan-grouping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scan-grouping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scan-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scan-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scan-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::step-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::step-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::step-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::step-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::step-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::switch-device", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::switch-device", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::switch-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::switch-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::switch-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keyboard-key", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keyboard-key", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keyboard-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keyboard-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keyboard-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mouse-button", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mouse-button", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mouse-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mouse-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mouse-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scan-cycles", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-cycles", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-cycles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scan-cycles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scan-cycles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::autorestart", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autorestart", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autorestart", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autorestart", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autorestart", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::inverse-scanning", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inverse-scanning", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::inverse-scanning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::inverse-scanning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::inverse-scanning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Scanner_ConstructProps)
    _init (config?: Scanner_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Scanner
    static $gtype: GObject.Type
}
interface ScannableGroup_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Caribou-1.0.Caribou.IScannableGroup */
    scanGrouping?: ScanGrouping
}
class ScannableGroup {
    /* Properties of Caribou-1.0.Caribou.IScannableGroup */
    scanGrouping: ScanGrouping
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Caribou-1.0.Caribou.ScannableGroup */
    getScanChildren(): IScannableItem[]
    childSelect(): IScannableItem | null
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
    /* Methods of Caribou-1.0.Caribou.IScannableGroup */
    scanReset(): void
    childStep(cycles: number): IScannableItem | null
    getStepPath(): IScannableItem[]
    getSelectedPath(): IScannableItem[]
    getScanGrouping(): ScanGrouping
    setScanGrouping(value: ScanGrouping): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Caribou-1.0.Caribou.IScannableGroup */
    connect(sigName: "selected-item-changed", callback: ((selectedItem?: IScannableItem | null) => void)): number
    on(sigName: "selected-item-changed", callback: (selectedItem?: IScannableItem | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selected-item-changed", callback: (selectedItem?: IScannableItem | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selected-item-changed", callback: (selectedItem?: IScannableItem | null) => void): NodeJS.EventEmitter
    emit(sigName: "selected-item-changed", selectedItem?: IScannableItem | null): void
    connect(sigName: "step-item-changed", callback: ((stepItem?: IScannableItem | null) => void)): number
    on(sigName: "step-item-changed", callback: (stepItem?: IScannableItem | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "step-item-changed", callback: (stepItem?: IScannableItem | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "step-item-changed", callback: (stepItem?: IScannableItem | null) => void): NodeJS.EventEmitter
    emit(sigName: "step-item-changed", stepItem?: IScannableItem | null): void
    connect(sigName: "scan-cleared", callback: (() => void)): number
    on(sigName: "scan-cleared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scan-cleared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scan-cleared", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "scan-cleared"): void
    connect(sigName: "notify::scan-grouping", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-grouping", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-grouping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scan-grouping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scan-grouping", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ScannableGroup_ConstructProps)
    _init (config?: ScannableGroup_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class DisplayAdapterClass {
    /* Fields of Caribou-1.0.Caribou.DisplayAdapterClass */
    readonly keyvalPress: (keyval: number) => void
    readonly keyvalRelease: (keyval: number) => void
    readonly modLock: (mask: number) => void
    readonly modUnlock: (mask: number) => void
    readonly modLatch: (mask: number) => void
    readonly modUnlatch: (mask: number) => void
    readonly getCurrentGroup: () => [ /* returnType */ number, /* groupName */ string, /* variantName */ string ]
    readonly getGroups: () => [ /* groupNames */ string[], /* variantNames */ string[] ]
    readonly registerKeyFunc: (keyval: number, func?: KeyButtonCallback | null) => void
    readonly registerButtonFunc: (button: number, func?: KeyButtonCallback | null) => void
    static name: string
}
class DisplayAdapterPrivate {
    static name: string
}
abstract class NullAdapterClass {
    static name: string
}
class NullAdapterPrivate {
    static name: string
}
abstract class XAdapterClass {
    static name: string
}
class XAdapterPrivate {
    static name: string
}
abstract class KeyboardModelClass {
    static name: string
}
class KeyboardModelPrivate {
    static name: string
}
abstract class KeyboardServiceClass {
    /* Fields of Caribou-1.0.Caribou.KeyboardServiceClass */
    readonly setCursorLocation: (x: number, y: number, w: number, h: number) => void
    readonly setEntryLocation: (x: number, y: number, w: number, h: number) => void
    readonly show: (timestamp: number) => void
    readonly hide: (timestamp: number) => void
    readonly nameLost: (name: string) => void
    static name: string
}
class KeyboardServicePrivate {
    static name: string
}
abstract class GroupModelClass {
    static name: string
}
class GroupModelPrivate {
    static name: string
}
abstract class LevelModelClass {
    static name: string
}
class LevelModelPrivate {
    static name: string
}
abstract class RowModelClass {
    static name: string
}
class RowModelPrivate {
    static name: string
}
abstract class KeyModelClass {
    static name: string
}
class KeyModelPrivate {
    static name: string
}
abstract class ColumnModelClass {
    static name: string
}
class ColumnModelPrivate {
    static name: string
}
abstract class ScannerClass {
    static name: string
}
class ScannerPrivate {
    static name: string
}
abstract class ScannableGroupClass {
    /* Fields of Caribou-1.0.Caribou.ScannableGroupClass */
    readonly getScanChildren: () => IScannableItem[]
    readonly childSelect: () => IScannableItem | null
    static name: string
}
class ScannableGroupPrivate {
    static name: string
}
abstract class IScannableItemIface {
    /* Fields of Caribou-1.0.Caribou.IScannableItemIface */
    readonly getScanStepping: () => boolean
    readonly setScanStepping: (value: boolean) => void
    readonly getScanSelected: () => boolean
    readonly setScanSelected: (value: boolean) => void
    static name: string
}
abstract class IScannableGroupIface {
    /* Fields of Caribou-1.0.Caribou.IScannableGroupIface */
    readonly childSelect: () => IScannableItem | null
    readonly scanReset: () => void
    readonly getScanChildren: () => IScannableItem[]
    readonly childStep: (cycles: number) => IScannableItem | null
    readonly getStepPath: () => IScannableItem[]
    readonly getSelectedPath: () => IScannableItem[]
    readonly getScanGrouping: () => ScanGrouping
    readonly setScanGrouping: (value: ScanGrouping) => void
    static name: string
}
abstract class IKeyboardObjectIface {
    /* Fields of Caribou-1.0.Caribou.IKeyboardObjectIface */
    readonly getChildren: () => IKeyboardObject[]
    readonly getKeys: () => KeyModel[]
    static name: string
}
}
export default Caribou;