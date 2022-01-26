/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Amtk-4
 */

import type Gtk from './Gtk-3.0';
import type xlib from './xlib-2.0';
import type Gdk from './Gdk-3.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';

export namespace Amtk {

enum FactoryFlags {
    FLAGS_NONE,
    IGNORE_GACTION,
    IGNORE_ICON,
    IGNORE_LABEL,
    IGNORE_TOOLTIP,
    IGNORE_ACCELS,
    IGNORE_ACCELS_FOR_DOC,
    IGNORE_ACCELS_FOR_APP,
}
function actionMapAddActionEntriesCheckDups(actionMap: Gio.ActionMap, entries: Gio.ActionEntry[], userData?: object | null): void
function finalize(): void
function init(): void
function menuItemGetLongDescription(menuItem: Gtk.MenuItem): string | null
function menuItemSetIconName(item: Gtk.MenuItem, iconName: string): void
function menuItemSetLongDescription(menuItem: Gtk.MenuItem, longDescription?: string | null): void
function utilsBindGActionToGtkAction(gActionMap: Gio.ActionMap, detailedGActionNameWithoutPrefix: string, gtkActionGroup: Gtk.ActionGroup, gtkActionName: string): void
function utilsCreateGtkAction(gActionMap: Gio.ActionMap, detailedGActionNameWithPrefix: string, gtkActionGroup: Gtk.ActionGroup, gtkActionName: string): void
function utilsRecentChooserMenuGetItemUri(menu: Gtk.RecentChooserMenu, item: Gtk.MenuItem): string
interface ActionInfoCentralStore_ConstructProps extends GObject.Object_ConstructProps {
}
class ActionInfoCentralStore {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Amtk-4.Amtk.ActionInfoCentralStore */
    lookup(actionName: string): ActionInfo
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
    constructor (config?: ActionInfoCentralStore_ConstructProps)
    _init (config?: ActionInfoCentralStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getSingleton(): ActionInfoCentralStore
    static $gtype: GObject.Type
}
interface ActionInfoStore_ConstructProps extends GObject.Object_ConstructProps {
}
class ActionInfoStore {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Amtk-4.Amtk.ActionInfoStore */
    add(info: ActionInfo): void
    addEntries(entries: ActionInfoEntry[], translationDomain?: string | null): void
    checkAllUsed(): void
    lookup(actionName: string): ActionInfo
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
    constructor (config?: ActionInfoStore_ConstructProps)
    _init (config?: ActionInfoStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ActionInfoStore
    static $gtype: GObject.Type
}
interface ApplicationWindow_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Amtk-4.Amtk.ApplicationWindow */
    applicationWindow?: Gtk.ApplicationWindow
    statusbar?: Gtk.Statusbar
}
class ApplicationWindow {
    /* Properties of Amtk-4.Amtk.ApplicationWindow */
    statusbar: Gtk.Statusbar
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Amtk-4.Amtk.ApplicationWindow */
    connectMenuToStatusbar(menuShell: Gtk.MenuShell): void
    connectRecentChooserMenuToStatusbar(menu: Gtk.RecentChooserMenu): void
    createOpenRecentMenu(): Gtk.Widget
    createOpenRecentMenuItem(): Gtk.Widget
    getApplicationWindow(): Gtk.ApplicationWindow
    getStatusbar(): Gtk.Statusbar | null
    setStatusbar(statusbar?: Gtk.Statusbar | null): void
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
    connect(sigName: "notify::statusbar", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::statusbar", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::statusbar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::statusbar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::statusbar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ApplicationWindow_ConstructProps)
    _init (config?: ApplicationWindow_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getFromGtkApplicationWindow(gtkWindow: Gtk.ApplicationWindow): ApplicationWindow
    static $gtype: GObject.Type
}
interface Factory_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Amtk-4.Amtk.Factory */
    application?: Gtk.Application
    defaultFlags?: FactoryFlags
}
class Factory {
    /* Properties of Amtk-4.Amtk.Factory */
    defaultFlags: FactoryFlags
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Amtk-4.Amtk.Factory */
    createCheckMenuItem(actionName: string): Gtk.Widget
    createCheckMenuItemFull(actionName: string, flags: FactoryFlags): Gtk.Widget
    createMenuItem(actionName: string): Gtk.Widget
    createMenuItemFull(actionName: string, flags: FactoryFlags): Gtk.Widget
    createMenuToolButton(actionName: string): Gtk.MenuToolButton
    createMenuToolButtonFull(actionName: string, flags: FactoryFlags): Gtk.MenuToolButton
    createToolButton(actionName: string): Gtk.ToolItem
    createToolButtonFull(actionName: string, flags: FactoryFlags): Gtk.ToolItem
    getApplication(): Gtk.Application | null
    getDefaultFlags(): FactoryFlags
    setDefaultFlags(defaultFlags: FactoryFlags): void
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
    connect(sigName: "notify::default-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Factory_ConstructProps)
    _init (config?: Factory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(application?: Gtk.Application | null): Factory
    static newWithDefaultApplication(): Factory
    static $gtype: GObject.Type
}
interface MenuShell_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Amtk-4.Amtk.MenuShell */
    menuShell?: Gtk.MenuShell
}
class MenuShell {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Amtk-4.Amtk.MenuShell */
    getMenuShell(): Gtk.MenuShell
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
    /* Signals of Amtk-4.Amtk.MenuShell */
    connect(sigName: "menu-item-deselected", callback: ((menuItem: Gtk.MenuItem) => void)): number
    on(sigName: "menu-item-deselected", callback: (menuItem: Gtk.MenuItem) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "menu-item-deselected", callback: (menuItem: Gtk.MenuItem) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "menu-item-deselected", callback: (menuItem: Gtk.MenuItem) => void): NodeJS.EventEmitter
    emit(sigName: "menu-item-deselected", menuItem: Gtk.MenuItem): void
    connect(sigName: "menu-item-selected", callback: ((menuItem: Gtk.MenuItem) => void)): number
    on(sigName: "menu-item-selected", callback: (menuItem: Gtk.MenuItem) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "menu-item-selected", callback: (menuItem: Gtk.MenuItem) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "menu-item-selected", callback: (menuItem: Gtk.MenuItem) => void): NodeJS.EventEmitter
    emit(sigName: "menu-item-selected", menuItem: Gtk.MenuItem): void
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
    constructor (config?: MenuShell_ConstructProps)
    _init (config?: MenuShell_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getFromGtkMenuShell(gtkMenuShell: Gtk.MenuShell): MenuShell
    static $gtype: GObject.Type
}
class ActionInfo {
    /* Methods of Amtk-4.Amtk.ActionInfo */
    copy(): ActionInfo
    getAccels(): string[]
    getActionName(): string | null
    getIconName(): string | null
    getLabel(): string | null
    getTooltip(): string | null
    hasBeenUsed(): boolean
    markAsUsed(): void
    ref(): ActionInfo
    setAccels(accels: string[]): void
    setActionName(actionName: string): void
    setIconName(iconName?: string | null): void
    setLabel(label?: string | null): void
    setTooltip(tooltip?: string | null): void
    unref(): void
    static name: string
    static new(): ActionInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ActionInfo
    static newFromEntry(infoEntry: ActionInfoEntry, translationDomain?: string | null): ActionInfo
}
abstract class ActionInfoCentralStoreClass {
    /* Fields of Amtk-4.Amtk.ActionInfoCentralStoreClass */
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class ActionInfoCentralStorePrivate {
    static name: string
}
class ActionInfoEntry {
    /* Fields of Amtk-4.Amtk.ActionInfoEntry */
    readonly actionName: string
    readonly iconName: string
    readonly label: string
    readonly accel: string
    readonly tooltip: string
    static name: string
}
abstract class ActionInfoStoreClass {
    /* Fields of Amtk-4.Amtk.ActionInfoStoreClass */
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class ActionInfoStorePrivate {
    static name: string
}
abstract class ApplicationWindowClass {
    /* Fields of Amtk-4.Amtk.ApplicationWindowClass */
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class ApplicationWindowPrivate {
    static name: string
}
abstract class FactoryClass {
    /* Fields of Amtk-4.Amtk.FactoryClass */
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class FactoryPrivate {
    static name: string
}
abstract class MenuShellClass {
    /* Fields of Amtk-4.Amtk.MenuShellClass */
    readonly parentClass: GObject.ObjectClass
    readonly menuItemSelected: (amtkMenuShell: MenuShell, menuItem: Gtk.MenuItem) => void
    readonly menuItemDeselected: (amtkMenuShell: MenuShell, menuItem: Gtk.MenuItem) => void
    readonly padding: object[]
    static name: string
}
class MenuShellPrivate {
    static name: string
}
}
export default Amtk;