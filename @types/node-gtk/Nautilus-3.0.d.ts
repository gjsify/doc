/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Nautilus-3.0
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

export namespace Nautilus {

enum OperationResult {
    COMPLETE,
    FAILED,
    IN_PROGRESS,
}
function fileInfoCreate(location: Gio.File): FileInfo
function fileInfoCreateForUri(uri: string): FileInfo
function fileInfoListCopy(files: FileInfo[]): FileInfo[]
function fileInfoListFree(files: FileInfo[]): void
function fileInfoLookup(location: Gio.File): FileInfo | null
function fileInfoLookupForUri(uri: string): FileInfo | null
function infoProviderUpdateCompleteInvoke(updateComplete: Function, provider: InfoProvider, handle: OperationHandle, result: OperationResult): void
class ColumnProvider {
    /* Methods of Nautilus-3.0.Nautilus.ColumnProvider */
    getColumns(): Column[] | null
    static name: string
}
class FileInfo {
    /* Methods of Nautilus-3.0.Nautilus.FileInfo */
    addEmblem(emblemName: string): void
    addStringAttribute(attributeName: string, value: string): void
    canWrite(): boolean
    getActivationUri(): string
    getFileType(): Gio.FileType
    getLocation(): Gio.File
    getMimeType(): string
    getMount(): Gio.Mount | null
    getName(): string
    getParentInfo(): FileInfo | null
    getParentLocation(): Gio.File | null
    getParentUri(): string
    getStringAttribute(attributeName: string): string
    getUri(): string
    getUriScheme(): string
    invalidateExtensionInfo(): void
    isDirectory(): boolean
    isGone(): boolean
    isMimeType(mimeType: string): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static create(location: Gio.File): FileInfo
    static createForUri(uri: string): FileInfo
    static listCopy(files: FileInfo[]): FileInfo[]
    static listFree(files: FileInfo[]): void
    static lookup(location: Gio.File): FileInfo | null
    static lookupForUri(uri: string): FileInfo | null
}
class InfoProvider {
    /* Methods of Nautilus-3.0.Nautilus.InfoProvider */
    cancelUpdate(handle: OperationHandle): void
    updateFileInfo(file: FileInfo, updateComplete: Function, handle: OperationHandle): OperationResult
    static name: string
    /* Static methods and pseudo-constructors */
    static updateCompleteInvoke(updateComplete: Function, provider: InfoProvider, handle: OperationHandle, result: OperationResult): void
}
class LocationWidgetProvider {
    /* Methods of Nautilus-3.0.Nautilus.LocationWidgetProvider */
    getWidget(uri: string, window: Gtk.Widget): Gtk.Widget | null
    static name: string
}
class MenuProvider {
    /* Methods of Nautilus-3.0.Nautilus.MenuProvider */
    emitItemsUpdatedSignal(): void
    getBackgroundItems(window: Gtk.Widget, currentFolder: FileInfo): MenuItem[] | null
    getFileItems(window: Gtk.Widget, files: FileInfo[]): MenuItem[] | null
    /* Signals of Nautilus-3.0.Nautilus.MenuProvider */
    connect(sigName: "items-updated", callback: (() => void)): number
    on(sigName: "items-updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "items-updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "items-updated", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "items-updated"): void
    static name: string
}
class PropertyPageProvider {
    /* Methods of Nautilus-3.0.Nautilus.PropertyPageProvider */
    getPages(files: FileInfo[]): PropertyPage[] | null
    static name: string
}
interface Column_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Nautilus-3.0.Nautilus.Column */
    attribute?: string
    defaultSortOrder?: Gtk.SortType
    description?: string
    label?: string
    name?: string
    xalign?: number
}
class Column {
    /* Properties of Nautilus-3.0.Nautilus.Column */
    attribute: string
    readonly attributeQ: number
    defaultSortOrder: Gtk.SortType
    description: string
    label: string
    xalign: number
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
    connect(sigName: "notify::attribute", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attribute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attribute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attribute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attribute-q", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-q", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attribute-q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attribute-q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attribute-q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-sort-order", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-sort-order", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-sort-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-sort-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-sort-order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xalign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Column_ConstructProps)
    _init (config?: Column_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, attribute: string, label: string, description: string): Column
    static $gtype: GObject.Type
}
interface Menu_ConstructProps extends GObject.Object_ConstructProps {
}
class Menu {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Nautilus-3.0.Nautilus.Menu */
    appendItem(item: MenuItem): void
    getItems(): MenuItem[] | null
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
    constructor (config?: Menu_ConstructProps)
    _init (config?: Menu_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Menu
    static $gtype: GObject.Type
}
interface MenuItem_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Nautilus-3.0.Nautilus.MenuItem */
    icon?: string
    label?: string
    menu?: Menu
    name?: string
    priority?: boolean
    sensitive?: boolean
    tip?: string
}
class MenuItem {
    /* Properties of Nautilus-3.0.Nautilus.MenuItem */
    icon: string
    label: string
    menu: Menu
    priority: boolean
    sensitive: boolean
    tip: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Nautilus-3.0.Nautilus.MenuItem */
    activate(): void
    setSubmenu(menu: Menu): void
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
    /* Signals of Nautilus-3.0.Nautilus.MenuItem */
    connect(sigName: "activate", callback: (() => void)): number
    on(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::menu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MenuItem_ConstructProps)
    _init (config?: MenuItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, label: string, tip?: string | null, icon?: string | null): MenuItem
    static listFree(itemList: MenuItem[]): void
    static $gtype: GObject.Type
}
interface PropertyPage_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Nautilus-3.0.Nautilus.PropertyPage */
    label?: Gtk.Widget
    name?: string
    page?: Gtk.Widget
}
class PropertyPage {
    /* Properties of Nautilus-3.0.Nautilus.PropertyPage */
    label: Gtk.Widget
    page: Gtk.Widget
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
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::page", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PropertyPage_ConstructProps)
    _init (config?: PropertyPage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, label: Gtk.Widget, page: Gtk.Widget): PropertyPage
    static $gtype: GObject.Type
}
abstract class ColumnClass {
    /* Fields of Nautilus-3.0.Nautilus.ColumnClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class ColumnProviderInterface {
    /* Fields of Nautilus-3.0.Nautilus.ColumnProviderInterface */
    readonly gIface: GObject.TypeInterface
    static name: string
}
class File {
    static name: string
}
abstract class FileInfoInterface {
    /* Fields of Nautilus-3.0.Nautilus.FileInfoInterface */
    readonly gIface: GObject.TypeInterface
    readonly isGone: (fileInfo: FileInfo) => boolean
    readonly getName: (fileInfo: FileInfo) => string
    readonly getUri: (fileInfo: FileInfo) => string
    readonly getParentUri: (fileInfo: FileInfo) => string
    readonly getUriScheme: (fileInfo: FileInfo) => string
    readonly getMimeType: (fileInfo: FileInfo) => string
    readonly isMimeType: (fileInfo: FileInfo, mimeType: string) => boolean
    readonly isDirectory: (fileInfo: FileInfo) => boolean
    readonly addEmblem: (fileInfo: FileInfo, emblemName: string) => void
    readonly getStringAttribute: (fileInfo: FileInfo, attributeName: string) => string
    readonly addStringAttribute: (fileInfo: FileInfo, attributeName: string, value: string) => void
    readonly invalidateExtensionInfo: (fileInfo: FileInfo) => void
    readonly getActivationUri: (fileInfo: FileInfo) => string
    readonly getFileType: (fileInfo: FileInfo) => Gio.FileType
    readonly getLocation: (fileInfo: FileInfo) => Gio.File
    readonly getParentLocation: (fileInfo: FileInfo) => Gio.File | null
    readonly getParentInfo: (fileInfo: FileInfo) => FileInfo | null
    readonly getMount: (fileInfo: FileInfo) => Gio.Mount | null
    readonly canWrite: (fileInfo: FileInfo) => boolean
    static name: string
}
class InfoProviderInterface {
    /* Fields of Nautilus-3.0.Nautilus.InfoProviderInterface */
    readonly gIface: GObject.TypeInterface
    readonly updateFileInfo: (provider: InfoProvider, file: FileInfo, updateComplete: Function, handle: OperationHandle) => OperationResult
    readonly cancelUpdate: (provider: InfoProvider, handle: OperationHandle) => void
    static name: string
}
class LocationWidgetProviderInterface {
    /* Fields of Nautilus-3.0.Nautilus.LocationWidgetProviderInterface */
    readonly gIface: GObject.TypeInterface
    static name: string
}
abstract class MenuClass {
    /* Fields of Nautilus-3.0.Nautilus.MenuClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class MenuItemClass {
    /* Fields of Nautilus-3.0.Nautilus.MenuItemClass */
    readonly parent: GObject.ObjectClass
    readonly activate: (item: MenuItem) => void
    static name: string
}
class MenuProviderInterface {
    /* Fields of Nautilus-3.0.Nautilus.MenuProviderInterface */
    readonly gIface: GObject.TypeInterface
    static name: string
}
class OperationHandle {
    static name: string
}
abstract class PropertyPageClass {
    /* Fields of Nautilus-3.0.Nautilus.PropertyPageClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class PropertyPageProviderInterface {
    /* Fields of Nautilus-3.0.Nautilus.PropertyPageProviderInterface */
    readonly gIface: GObject.TypeInterface
    static name: string
}
}
export default Nautilus;