/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Guestfs-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Guestfs {

enum SessionEvent {
    CLOSE,
    SUBPROCESS_QUIT,
    LAUNCH_DONE,
    PROGRESS,
    APPLIANCE,
    LIBRARY,
    TRACE,
    ENTER,
    LIBVIRT_AUTH,
    WARNING,
}
enum Tristate {
    FALSE,
    TRUE,
    NONE,
}
interface AddDomain_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.AddDomain */
    allowuuid?: Tristate
    cachemode?: string
    copyonread?: Tristate
    discard?: string
    iface?: string
    libvirturi?: string
    live?: Tristate
    readonly?: Tristate
    readonlydisk?: string
}
class AddDomain {
    /* Properties of Guestfs-1.0.Guestfs.AddDomain */
    allowuuid: Tristate
    cachemode: string
    copyonread: Tristate
    discard: string
    iface: string
    libvirturi: string
    live: Tristate
    readonly: Tristate
    readonlydisk: string
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
    connect(sigName: "notify::allowuuid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowuuid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allowuuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allowuuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allowuuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cachemode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cachemode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cachemode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cachemode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cachemode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::copyonread", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copyonread", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::copyonread", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::copyonread", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::copyonread", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::discard", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::discard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::discard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::discard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::iface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::iface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::iface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::iface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::libvirturi", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::libvirturi", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::libvirturi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::libvirturi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::libvirturi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::live", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::live", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::live", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::live", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::live", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::readonly", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::readonlydisk", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonlydisk", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::readonlydisk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::readonlydisk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::readonlydisk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AddDomain_ConstructProps)
    _init (config?: AddDomain_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AddDomain
    static $gtype: GObject.Type
}
interface AddDrive_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.AddDrive */
    cachemode?: string
    copyonread?: Tristate
    discard?: string
    format?: string
    iface?: string
    label?: string
    name?: string
    protocol?: string
    readonly?: Tristate
    secret?: string
    username?: string
}
class AddDrive {
    /* Properties of Guestfs-1.0.Guestfs.AddDrive */
    cachemode: string
    copyonread: Tristate
    discard: string
    format: string
    iface: string
    label: string
    name: string
    protocol: string
    readonly: Tristate
    secret: string
    username: string
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
    connect(sigName: "notify::cachemode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cachemode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cachemode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cachemode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cachemode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::copyonread", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copyonread", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::copyonread", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::copyonread", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::copyonread", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::discard", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::discard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::discard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::discard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::format", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::iface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::iface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::iface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::iface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocol", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::readonly", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::secret", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secret", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::username", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AddDrive_ConstructProps)
    _init (config?: AddDrive_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AddDrive
    static $gtype: GObject.Type
}
interface AddDriveScratch_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.AddDriveScratch */
    label?: string
    name?: string
}
class AddDriveScratch {
    /* Properties of Guestfs-1.0.Guestfs.AddDriveScratch */
    label: string
    name: string
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
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AddDriveScratch_ConstructProps)
    _init (config?: AddDriveScratch_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AddDriveScratch
    static $gtype: GObject.Type
}
interface AddLibvirtDom_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.AddLibvirtDom */
    cachemode?: string
    copyonread?: Tristate
    discard?: string
    iface?: string
    live?: Tristate
    readonly?: Tristate
    readonlydisk?: string
}
class AddLibvirtDom {
    /* Properties of Guestfs-1.0.Guestfs.AddLibvirtDom */
    cachemode: string
    copyonread: Tristate
    discard: string
    iface: string
    live: Tristate
    readonly: Tristate
    readonlydisk: string
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
    connect(sigName: "notify::cachemode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cachemode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cachemode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cachemode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cachemode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::copyonread", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copyonread", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::copyonread", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::copyonread", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::copyonread", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::discard", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::discard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::discard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::discard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::iface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::iface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::iface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::iface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::live", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::live", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::live", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::live", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::live", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::readonly", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::readonlydisk", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonlydisk", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::readonlydisk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::readonlydisk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::readonlydisk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AddLibvirtDom_ConstructProps)
    _init (config?: AddLibvirtDom_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AddLibvirtDom
    static $gtype: GObject.Type
}
interface AugTransform_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.AugTransform */
    remove?: Tristate
}
class AugTransform {
    /* Properties of Guestfs-1.0.Guestfs.AugTransform */
    remove: Tristate
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
    connect(sigName: "notify::remove", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remove", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remove", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AugTransform_ConstructProps)
    _init (config?: AugTransform_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AugTransform
    static $gtype: GObject.Type
}
interface BTRFSFilesystemDefragment_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.BTRFSFilesystemDefragment */
    compress?: string
    flush?: Tristate
}
class BTRFSFilesystemDefragment {
    /* Properties of Guestfs-1.0.Guestfs.BTRFSFilesystemDefragment */
    compress: string
    flush: Tristate
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
    connect(sigName: "notify::compress", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compress", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flush", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flush", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flush", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flush", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flush", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BTRFSFilesystemDefragment_ConstructProps)
    _init (config?: BTRFSFilesystemDefragment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BTRFSFilesystemDefragment
    static $gtype: GObject.Type
}
interface BTRFSFilesystemResize_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.BTRFSFilesystemResize */
    size?: number
}
class BTRFSFilesystemResize {
    /* Properties of Guestfs-1.0.Guestfs.BTRFSFilesystemResize */
    size: number
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
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BTRFSFilesystemResize_ConstructProps)
    _init (config?: BTRFSFilesystemResize_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BTRFSFilesystemResize
    static $gtype: GObject.Type
}
interface BTRFSImage_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.BTRFSImage */
    compresslevel?: number
}
class BTRFSImage {
    /* Properties of Guestfs-1.0.Guestfs.BTRFSImage */
    compresslevel: number
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
    connect(sigName: "notify::compresslevel", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compresslevel", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compresslevel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compresslevel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compresslevel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BTRFSImage_ConstructProps)
    _init (config?: BTRFSImage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BTRFSImage
    static $gtype: GObject.Type
}
interface BTRFSSubvolumeCreate_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.BTRFSSubvolumeCreate */
    qgroupid?: string
}
class BTRFSSubvolumeCreate {
    /* Properties of Guestfs-1.0.Guestfs.BTRFSSubvolumeCreate */
    qgroupid: string
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
    connect(sigName: "notify::qgroupid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qgroupid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qgroupid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qgroupid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qgroupid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BTRFSSubvolumeCreate_ConstructProps)
    _init (config?: BTRFSSubvolumeCreate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BTRFSSubvolumeCreate
    static $gtype: GObject.Type
}
interface BTRFSSubvolumeSnapshot_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.BTRFSSubvolumeSnapshot */
    qgroupid?: string
    ro?: Tristate
}
class BTRFSSubvolumeSnapshot {
    /* Properties of Guestfs-1.0.Guestfs.BTRFSSubvolumeSnapshot */
    qgroupid: string
    ro: Tristate
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
    connect(sigName: "notify::qgroupid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qgroupid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qgroupid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qgroupid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qgroupid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ro", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ro", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ro", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ro", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ro", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BTRFSSubvolumeSnapshot_ConstructProps)
    _init (config?: BTRFSSubvolumeSnapshot_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BTRFSSubvolumeSnapshot
    static $gtype: GObject.Type
}
interface BtrfsFsck_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.BtrfsFsck */
    repair?: Tristate
    superblock?: number
}
class BtrfsFsck {
    /* Properties of Guestfs-1.0.Guestfs.BtrfsFsck */
    repair: Tristate
    superblock: number
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
    connect(sigName: "notify::repair", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repair", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::repair", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::repair", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::repair", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::superblock", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::superblock", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::superblock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::superblock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::superblock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BtrfsFsck_ConstructProps)
    _init (config?: BtrfsFsck_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BtrfsFsck
    static $gtype: GObject.Type
}
interface CompressDeviceOut_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.CompressDeviceOut */
    level?: number
}
class CompressDeviceOut {
    /* Properties of Guestfs-1.0.Guestfs.CompressDeviceOut */
    level: number
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
    connect(sigName: "notify::level", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CompressDeviceOut_ConstructProps)
    _init (config?: CompressDeviceOut_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CompressDeviceOut
    static $gtype: GObject.Type
}
interface CompressOut_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.CompressOut */
    level?: number
}
class CompressOut {
    /* Properties of Guestfs-1.0.Guestfs.CompressOut */
    level: number
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
    connect(sigName: "notify::level", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CompressOut_ConstructProps)
    _init (config?: CompressOut_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CompressOut
    static $gtype: GObject.Type
}
interface CopyAttributes_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.CopyAttributes */
    all?: Tristate
    mode?: Tristate
    ownership?: Tristate
    xattributes?: Tristate
}
class CopyAttributes {
    /* Properties of Guestfs-1.0.Guestfs.CopyAttributes */
    all: Tristate
    mode: Tristate
    ownership: Tristate
    xattributes: Tristate
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
    connect(sigName: "notify::all", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::all", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ownership", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ownership", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ownership", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ownership", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ownership", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xattributes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xattributes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xattributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xattributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xattributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CopyAttributes_ConstructProps)
    _init (config?: CopyAttributes_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CopyAttributes
    static $gtype: GObject.Type
}
interface CopyDeviceToDevice_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.CopyDeviceToDevice */
    append?: Tristate
    destoffset?: number
    size?: number
    sparse?: Tristate
    srcoffset?: number
}
class CopyDeviceToDevice {
    /* Properties of Guestfs-1.0.Guestfs.CopyDeviceToDevice */
    append: Tristate
    destoffset: number
    size: number
    sparse: Tristate
    srcoffset: number
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
    connect(sigName: "notify::append", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::append", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::append", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::append", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::append", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::destoffset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destoffset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::destoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::destoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::destoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sparse", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sparse", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sparse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sparse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sparse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::srcoffset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::srcoffset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::srcoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::srcoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::srcoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CopyDeviceToDevice_ConstructProps)
    _init (config?: CopyDeviceToDevice_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CopyDeviceToDevice
    static $gtype: GObject.Type
}
interface CopyDeviceToFile_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.CopyDeviceToFile */
    append?: Tristate
    destoffset?: number
    size?: number
    sparse?: Tristate
    srcoffset?: number
}
class CopyDeviceToFile {
    /* Properties of Guestfs-1.0.Guestfs.CopyDeviceToFile */
    append: Tristate
    destoffset: number
    size: number
    sparse: Tristate
    srcoffset: number
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
    connect(sigName: "notify::append", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::append", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::append", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::append", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::append", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::destoffset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destoffset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::destoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::destoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::destoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sparse", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sparse", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sparse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sparse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sparse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::srcoffset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::srcoffset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::srcoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::srcoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::srcoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CopyDeviceToFile_ConstructProps)
    _init (config?: CopyDeviceToFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CopyDeviceToFile
    static $gtype: GObject.Type
}
interface CopyFileToDevice_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.CopyFileToDevice */
    append?: Tristate
    destoffset?: number
    size?: number
    sparse?: Tristate
    srcoffset?: number
}
class CopyFileToDevice {
    /* Properties of Guestfs-1.0.Guestfs.CopyFileToDevice */
    append: Tristate
    destoffset: number
    size: number
    sparse: Tristate
    srcoffset: number
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
    connect(sigName: "notify::append", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::append", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::append", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::append", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::append", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::destoffset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destoffset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::destoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::destoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::destoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sparse", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sparse", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sparse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sparse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sparse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::srcoffset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::srcoffset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::srcoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::srcoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::srcoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CopyFileToDevice_ConstructProps)
    _init (config?: CopyFileToDevice_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CopyFileToDevice
    static $gtype: GObject.Type
}
interface CopyFileToFile_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.CopyFileToFile */
    append?: Tristate
    destoffset?: number
    size?: number
    sparse?: Tristate
    srcoffset?: number
}
class CopyFileToFile {
    /* Properties of Guestfs-1.0.Guestfs.CopyFileToFile */
    append: Tristate
    destoffset: number
    size: number
    sparse: Tristate
    srcoffset: number
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
    connect(sigName: "notify::append", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::append", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::append", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::append", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::append", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::destoffset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destoffset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::destoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::destoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::destoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sparse", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sparse", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sparse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sparse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sparse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::srcoffset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::srcoffset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::srcoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::srcoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::srcoffset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CopyFileToFile_ConstructProps)
    _init (config?: CopyFileToFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CopyFileToFile
    static $gtype: GObject.Type
}
interface CpioOut_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.CpioOut */
    format?: string
}
class CpioOut {
    /* Properties of Guestfs-1.0.Guestfs.CpioOut */
    format: string
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
    connect(sigName: "notify::format", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CpioOut_ConstructProps)
    _init (config?: CpioOut_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CpioOut
    static $gtype: GObject.Type
}
interface DiskCreate_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.DiskCreate */
    backingfile?: string
    backingformat?: string
    clustersize?: number
    compat?: string
    preallocation?: string
}
class DiskCreate {
    /* Properties of Guestfs-1.0.Guestfs.DiskCreate */
    backingfile: string
    backingformat: string
    clustersize: number
    compat: string
    preallocation: string
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
    connect(sigName: "notify::backingfile", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backingfile", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backingfile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backingfile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backingfile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::backingformat", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backingformat", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backingformat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backingformat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backingformat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clustersize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clustersize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clustersize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clustersize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clustersize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::compat", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compat", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::preallocation", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preallocation", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::preallocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::preallocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::preallocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DiskCreate_ConstructProps)
    _init (config?: DiskCreate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DiskCreate
    static $gtype: GObject.Type
}
interface DownloadBlocks_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.DownloadBlocks */
    unallocated?: Tristate
}
class DownloadBlocks {
    /* Properties of Guestfs-1.0.Guestfs.DownloadBlocks */
    unallocated: Tristate
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
    connect(sigName: "notify::unallocated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unallocated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unallocated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unallocated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unallocated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DownloadBlocks_ConstructProps)
    _init (config?: DownloadBlocks_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DownloadBlocks
    static $gtype: GObject.Type
}
interface E2fsck_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.E2fsck */
    correct?: Tristate
    forceall?: Tristate
}
class E2fsck {
    /* Properties of Guestfs-1.0.Guestfs.E2fsck */
    correct: Tristate
    forceall: Tristate
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
    connect(sigName: "notify::correct", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::correct", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::correct", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::correct", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::correct", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::forceall", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::forceall", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::forceall", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::forceall", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::forceall", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: E2fsck_ConstructProps)
    _init (config?: E2fsck_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): E2fsck
    static $gtype: GObject.Type
}
interface Fstrim_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.Fstrim */
    length?: number
    minimumfreeextent?: number
    offset?: number
}
class Fstrim {
    /* Properties of Guestfs-1.0.Guestfs.Fstrim */
    length: number
    minimumfreeextent: number
    offset: number
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
    connect(sigName: "notify::length", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::minimumfreeextent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimumfreeextent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::minimumfreeextent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::minimumfreeextent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::minimumfreeextent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Fstrim_ConstructProps)
    _init (config?: Fstrim_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Fstrim
    static $gtype: GObject.Type
}
interface GlobExpand_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.GlobExpand */
    directoryslash?: Tristate
}
class GlobExpand {
    /* Properties of Guestfs-1.0.Guestfs.GlobExpand */
    directoryslash: Tristate
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
    connect(sigName: "notify::directoryslash", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::directoryslash", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::directoryslash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::directoryslash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::directoryslash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GlobExpand_ConstructProps)
    _init (config?: GlobExpand_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GlobExpand
    static $gtype: GObject.Type
}
interface Grep_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.Grep */
    compressed?: Tristate
    extended?: Tristate
    fixed?: Tristate
    insensitive?: Tristate
}
class Grep {
    /* Properties of Guestfs-1.0.Guestfs.Grep */
    compressed: Tristate
    extended: Tristate
    fixed: Tristate
    insensitive: Tristate
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
    connect(sigName: "notify::compressed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compressed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::extended", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extended", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::extended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::extended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::extended", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::insensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::insensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::insensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::insensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::insensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Grep_ConstructProps)
    _init (config?: Grep_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Grep
    static $gtype: GObject.Type
}
interface HivexOpen_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.HivexOpen */
    debug?: Tristate
    unsafe?: Tristate
    verbose?: Tristate
    write?: Tristate
}
class HivexOpen {
    /* Properties of Guestfs-1.0.Guestfs.HivexOpen */
    debug: Tristate
    unsafe: Tristate
    verbose: Tristate
    write: Tristate
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
    connect(sigName: "notify::debug", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::debug", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::debug", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::debug", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::debug", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unsafe", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unsafe", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unsafe", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unsafe", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unsafe", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::verbose", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::verbose", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::verbose", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::verbose", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::verbose", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::write", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::write", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::write", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::write", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HivexOpen_ConstructProps)
    _init (config?: HivexOpen_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): HivexOpen
    static $gtype: GObject.Type
}
interface InspectGetIcon_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.InspectGetIcon */
    favicon?: Tristate
    highquality?: Tristate
}
class InspectGetIcon {
    /* Properties of Guestfs-1.0.Guestfs.InspectGetIcon */
    favicon: Tristate
    highquality: Tristate
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
    connect(sigName: "notify::favicon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::favicon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::favicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::favicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::favicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::highquality", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highquality", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::highquality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::highquality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::highquality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InspectGetIcon_ConstructProps)
    _init (config?: InspectGetIcon_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): InspectGetIcon
    static $gtype: GObject.Type
}
interface InternalTest_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.InternalTest */
    obool?: Tristate
    oint?: number
    oint64?: number
    ostring?: string
}
class InternalTest {
    /* Properties of Guestfs-1.0.Guestfs.InternalTest */
    obool: Tristate
    oint: number
    oint64: number
    ostring: string
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
    connect(sigName: "notify::obool", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::obool", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::obool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::obool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::obool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::oint", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oint", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::oint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::oint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::oint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::oint64", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oint64", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::oint64", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::oint64", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::oint64", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ostring", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ostring", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ostring", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ostring", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ostring", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InternalTest_ConstructProps)
    _init (config?: InternalTest_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): InternalTest
    static $gtype: GObject.Type
}
interface InternalTest63Optargs_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.InternalTest63Optargs */
    opt1?: number
    opt10?: number
    opt11?: number
    opt12?: number
    opt13?: number
    opt14?: number
    opt15?: number
    opt16?: number
    opt17?: number
    opt18?: number
    opt19?: number
    opt2?: number
    opt20?: number
    opt21?: number
    opt22?: number
    opt23?: number
    opt24?: number
    opt25?: number
    opt26?: number
    opt27?: number
    opt28?: number
    opt29?: number
    opt3?: number
    opt30?: number
    opt31?: number
    opt32?: number
    opt33?: number
    opt34?: number
    opt35?: number
    opt36?: number
    opt37?: number
    opt38?: number
    opt39?: number
    opt4?: number
    opt40?: number
    opt41?: number
    opt42?: number
    opt43?: number
    opt44?: number
    opt45?: number
    opt46?: number
    opt47?: number
    opt48?: number
    opt49?: number
    opt5?: number
    opt50?: number
    opt51?: number
    opt52?: number
    opt53?: number
    opt54?: number
    opt55?: number
    opt56?: number
    opt57?: number
    opt58?: number
    opt59?: number
    opt6?: number
    opt60?: number
    opt61?: number
    opt62?: number
    opt63?: number
    opt7?: number
    opt8?: number
    opt9?: number
}
class InternalTest63Optargs {
    /* Properties of Guestfs-1.0.Guestfs.InternalTest63Optargs */
    opt1: number
    opt10: number
    opt11: number
    opt12: number
    opt13: number
    opt14: number
    opt15: number
    opt16: number
    opt17: number
    opt18: number
    opt19: number
    opt2: number
    opt20: number
    opt21: number
    opt22: number
    opt23: number
    opt24: number
    opt25: number
    opt26: number
    opt27: number
    opt28: number
    opt29: number
    opt3: number
    opt30: number
    opt31: number
    opt32: number
    opt33: number
    opt34: number
    opt35: number
    opt36: number
    opt37: number
    opt38: number
    opt39: number
    opt4: number
    opt40: number
    opt41: number
    opt42: number
    opt43: number
    opt44: number
    opt45: number
    opt46: number
    opt47: number
    opt48: number
    opt49: number
    opt5: number
    opt50: number
    opt51: number
    opt52: number
    opt53: number
    opt54: number
    opt55: number
    opt56: number
    opt57: number
    opt58: number
    opt59: number
    opt6: number
    opt60: number
    opt61: number
    opt62: number
    opt63: number
    opt7: number
    opt8: number
    opt9: number
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
    connect(sigName: "notify::opt1", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt1", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt10", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt10", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt10", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt10", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt10", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt11", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt11", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt11", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt11", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt11", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt12", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt12", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt12", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt12", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt12", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt13", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt13", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt13", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt13", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt13", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt14", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt14", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt14", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt14", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt14", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt15", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt15", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt15", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt15", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt15", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt16", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt16", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt16", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt16", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt16", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt17", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt17", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt17", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt17", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt17", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt18", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt18", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt18", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt18", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt18", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt19", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt19", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt19", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt19", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt19", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt20", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt20", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt20", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt20", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt20", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt21", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt21", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt21", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt21", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt21", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt22", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt22", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt22", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt22", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt22", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt23", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt23", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt23", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt23", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt23", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt24", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt24", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt24", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt24", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt24", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt25", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt25", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt25", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt25", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt25", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt26", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt26", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt26", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt26", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt26", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt27", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt27", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt27", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt27", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt27", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt28", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt28", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt28", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt28", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt28", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt29", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt29", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt29", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt29", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt29", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt3", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt3", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt30", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt30", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt30", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt30", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt30", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt31", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt31", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt31", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt31", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt31", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt32", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt32", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt32", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt32", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt32", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt33", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt33", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt33", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt33", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt33", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt34", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt34", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt34", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt34", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt34", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt35", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt35", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt35", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt35", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt35", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt36", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt36", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt36", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt36", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt36", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt37", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt37", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt37", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt37", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt37", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt38", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt38", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt38", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt38", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt38", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt39", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt39", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt39", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt39", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt39", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt4", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt4", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt4", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt4", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt4", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt40", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt40", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt40", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt40", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt40", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt41", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt41", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt41", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt41", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt41", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt42", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt42", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt42", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt42", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt42", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt43", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt43", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt43", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt43", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt43", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt44", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt44", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt44", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt44", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt44", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt45", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt45", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt45", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt45", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt45", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt46", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt46", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt46", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt46", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt46", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt47", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt47", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt47", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt47", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt47", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt48", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt48", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt48", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt48", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt48", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt49", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt49", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt49", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt49", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt49", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt5", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt5", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt5", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt5", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt5", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt50", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt50", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt50", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt50", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt50", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt51", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt51", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt51", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt51", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt51", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt52", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt52", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt52", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt52", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt52", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt53", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt53", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt53", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt53", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt53", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt54", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt54", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt54", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt54", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt54", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt55", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt55", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt55", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt55", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt55", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt56", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt56", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt56", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt56", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt56", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt57", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt57", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt57", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt57", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt57", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt58", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt58", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt58", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt58", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt58", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt59", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt59", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt59", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt59", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt59", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt6", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt6", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt6", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt6", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt6", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt60", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt60", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt60", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt60", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt60", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt61", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt61", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt61", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt61", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt61", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt62", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt62", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt62", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt62", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt62", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt63", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt63", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt63", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt63", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt63", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt7", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt7", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt7", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt7", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt7", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt8", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt8", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt8", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt8", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt8", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opt9", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt9", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opt9", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opt9", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opt9", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InternalTest63Optargs_ConstructProps)
    _init (config?: InternalTest63Optargs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): InternalTest63Optargs
    static $gtype: GObject.Type
}
interface InternalTestOnlyOptargs_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.InternalTestOnlyOptargs */
    test?: number
}
class InternalTestOnlyOptargs {
    /* Properties of Guestfs-1.0.Guestfs.InternalTestOnlyOptargs */
    test: number
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
    connect(sigName: "notify::test", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::test", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::test", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::test", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::test", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InternalTestOnlyOptargs_ConstructProps)
    _init (config?: InternalTestOnlyOptargs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): InternalTestOnlyOptargs
    static $gtype: GObject.Type
}
interface IsBlockdev_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.IsBlockdev */
    followsymlinks?: Tristate
}
class IsBlockdev {
    /* Properties of Guestfs-1.0.Guestfs.IsBlockdev */
    followsymlinks: Tristate
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
    connect(sigName: "notify::followsymlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::followsymlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IsBlockdev_ConstructProps)
    _init (config?: IsBlockdev_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IsBlockdev
    static $gtype: GObject.Type
}
interface IsChardev_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.IsChardev */
    followsymlinks?: Tristate
}
class IsChardev {
    /* Properties of Guestfs-1.0.Guestfs.IsChardev */
    followsymlinks: Tristate
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
    connect(sigName: "notify::followsymlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::followsymlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IsChardev_ConstructProps)
    _init (config?: IsChardev_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IsChardev
    static $gtype: GObject.Type
}
interface IsDir_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.IsDir */
    followsymlinks?: Tristate
}
class IsDir {
    /* Properties of Guestfs-1.0.Guestfs.IsDir */
    followsymlinks: Tristate
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
    connect(sigName: "notify::followsymlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::followsymlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IsDir_ConstructProps)
    _init (config?: IsDir_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IsDir
    static $gtype: GObject.Type
}
interface IsFifo_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.IsFifo */
    followsymlinks?: Tristate
}
class IsFifo {
    /* Properties of Guestfs-1.0.Guestfs.IsFifo */
    followsymlinks: Tristate
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
    connect(sigName: "notify::followsymlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::followsymlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IsFifo_ConstructProps)
    _init (config?: IsFifo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IsFifo
    static $gtype: GObject.Type
}
interface IsFile_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.IsFile */
    followsymlinks?: Tristate
}
class IsFile {
    /* Properties of Guestfs-1.0.Guestfs.IsFile */
    followsymlinks: Tristate
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
    connect(sigName: "notify::followsymlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::followsymlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IsFile_ConstructProps)
    _init (config?: IsFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IsFile
    static $gtype: GObject.Type
}
interface IsSocket_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.IsSocket */
    followsymlinks?: Tristate
}
class IsSocket {
    /* Properties of Guestfs-1.0.Guestfs.IsSocket */
    followsymlinks: Tristate
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
    connect(sigName: "notify::followsymlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::followsymlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::followsymlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IsSocket_ConstructProps)
    _init (config?: IsSocket_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IsSocket
    static $gtype: GObject.Type
}
interface MDCreate_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.MDCreate */
    chunk?: number
    level?: string
    missingbitmap?: number
    nrdevices?: number
    spare?: number
}
class MDCreate {
    /* Properties of Guestfs-1.0.Guestfs.MDCreate */
    chunk: number
    level: string
    missingbitmap: number
    nrdevices: number
    spare: number
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
    connect(sigName: "notify::chunk", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chunk", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::chunk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::chunk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::chunk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::level", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::missingbitmap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::missingbitmap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::missingbitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::missingbitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::missingbitmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nrdevices", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nrdevices", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nrdevices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nrdevices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nrdevices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::spare", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spare", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::spare", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::spare", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::spare", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MDCreate_ConstructProps)
    _init (config?: MDCreate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MDCreate
    static $gtype: GObject.Type
}
interface Mke2fs_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.Mke2fs */
    blockscount?: number
    blocksize?: number
    blockspergroup?: number
    bytesperinode?: number
    creatoros?: string
    discard?: Tristate
    extent?: Tristate
    filetype?: Tristate
    flexbg?: Tristate
    forcecreate?: Tristate
    fragsize?: number
    fstype?: string
    hasjournal?: Tristate
    inodesize?: number
    journaldev?: Tristate
    journaldevice?: string
    journalsize?: number
    label?: string
    largefile?: Tristate
    lastmounteddir?: string
    lazyitableinit?: Tristate
    lazyjournalinit?: Tristate
    maxonlineresize?: number
    mmpupdateinterval?: number
    numberofgroups?: number
    numberofinodes?: number
    quota?: Tristate
    quotatype?: Tristate
    reservedblockspercentage?: number
    resizeinode?: Tristate
    sparsesuper?: Tristate
    stridesize?: number
    stripewidth?: number
    testfs?: Tristate
    uninitbg?: Tristate
    usagetype?: string
    uuid?: string
    writesbandgrouponly?: Tristate
}
class Mke2fs {
    /* Properties of Guestfs-1.0.Guestfs.Mke2fs */
    blockscount: number
    blocksize: number
    blockspergroup: number
    bytesperinode: number
    creatoros: string
    discard: Tristate
    extent: Tristate
    filetype: Tristate
    flexbg: Tristate
    forcecreate: Tristate
    fragsize: number
    fstype: string
    hasjournal: Tristate
    inodesize: number
    journaldev: Tristate
    journaldevice: string
    journalsize: number
    label: string
    largefile: Tristate
    lastmounteddir: string
    lazyitableinit: Tristate
    lazyjournalinit: Tristate
    maxonlineresize: number
    mmpupdateinterval: number
    numberofgroups: number
    numberofinodes: number
    quota: Tristate
    quotatype: Tristate
    reservedblockspercentage: number
    resizeinode: Tristate
    sparsesuper: Tristate
    stridesize: number
    stripewidth: number
    testfs: Tristate
    uninitbg: Tristate
    usagetype: string
    uuid: string
    writesbandgrouponly: Tristate
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
    connect(sigName: "notify::blockscount", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blockscount", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blockscount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blockscount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blockscount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::blocksize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::blockspergroup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blockspergroup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blockspergroup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blockspergroup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blockspergroup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bytesperinode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bytesperinode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bytesperinode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bytesperinode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bytesperinode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creatoros", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creatoros", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creatoros", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creatoros", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creatoros", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::discard", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::discard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::discard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::discard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::extent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::extent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::extent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::extent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filetype", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filetype", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filetype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filetype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filetype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flexbg", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flexbg", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flexbg", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flexbg", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flexbg", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::forcecreate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::forcecreate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::forcecreate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::forcecreate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::forcecreate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fragsize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fragsize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fragsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fragsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fragsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fstype", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fstype", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fstype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fstype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fstype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hasjournal", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hasjournal", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hasjournal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hasjournal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hasjournal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::inodesize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inodesize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::inodesize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::inodesize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::inodesize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::journaldev", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::journaldev", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::journaldev", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::journaldev", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::journaldev", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::journaldevice", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::journaldevice", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::journaldevice", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::journaldevice", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::journaldevice", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::journalsize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::journalsize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::journalsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::journalsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::journalsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::largefile", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::largefile", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::largefile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::largefile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::largefile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lastmounteddir", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lastmounteddir", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lastmounteddir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lastmounteddir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lastmounteddir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lazyitableinit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lazyitableinit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lazyitableinit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lazyitableinit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lazyitableinit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lazyjournalinit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lazyjournalinit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lazyjournalinit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lazyjournalinit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lazyjournalinit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::maxonlineresize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maxonlineresize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::maxonlineresize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::maxonlineresize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::maxonlineresize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mmpupdateinterval", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mmpupdateinterval", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mmpupdateinterval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mmpupdateinterval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mmpupdateinterval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::numberofgroups", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::numberofgroups", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::numberofgroups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::numberofgroups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::numberofgroups", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::numberofinodes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::numberofinodes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::numberofinodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::numberofinodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::numberofinodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quota", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quota", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quota", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quota", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quotatype", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quotatype", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quotatype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quotatype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quotatype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reservedblockspercentage", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reservedblockspercentage", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reservedblockspercentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reservedblockspercentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reservedblockspercentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resizeinode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizeinode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resizeinode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resizeinode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resizeinode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sparsesuper", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sparsesuper", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sparsesuper", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sparsesuper", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sparsesuper", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stridesize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stridesize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stridesize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stridesize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stridesize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stripewidth", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stripewidth", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stripewidth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stripewidth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stripewidth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::testfs", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::testfs", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::testfs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::testfs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::testfs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uninitbg", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uninitbg", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uninitbg", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uninitbg", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uninitbg", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::usagetype", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::usagetype", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::usagetype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::usagetype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::usagetype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uuid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writesbandgrouponly", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writesbandgrouponly", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writesbandgrouponly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writesbandgrouponly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writesbandgrouponly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Mke2fs_ConstructProps)
    _init (config?: Mke2fs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Mke2fs
    static $gtype: GObject.Type
}
interface Mkfs_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.Mkfs */
    blocksize?: number
    features?: string
    inode?: number
    label?: string
    sectorsize?: number
}
class Mkfs {
    /* Properties of Guestfs-1.0.Guestfs.Mkfs */
    blocksize: number
    features: string
    inode: number
    label: string
    sectorsize: number
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
    connect(sigName: "notify::blocksize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::features", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::features", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::inode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::inode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::inode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::inode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sectorsize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sectorsize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sectorsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sectorsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sectorsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Mkfs_ConstructProps)
    _init (config?: Mkfs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Mkfs
    static $gtype: GObject.Type
}
interface MkfsBtrfs_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.MkfsBtrfs */
    allocstart?: number
    bytecount?: number
    datatype?: string
    label?: string
    leafsize?: number
    metadata?: string
    nodesize?: number
    sectorsize?: number
}
class MkfsBtrfs {
    /* Properties of Guestfs-1.0.Guestfs.MkfsBtrfs */
    allocstart: number
    bytecount: number
    datatype: string
    label: string
    leafsize: number
    metadata: string
    nodesize: number
    sectorsize: number
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
    connect(sigName: "notify::allocstart", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocstart", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allocstart", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allocstart", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allocstart", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bytecount", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bytecount", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bytecount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bytecount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bytecount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::datatype", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::datatype", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::datatype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::datatype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::datatype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::leafsize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::leafsize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::leafsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::leafsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::leafsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::metadata", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nodesize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodesize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nodesize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nodesize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nodesize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sectorsize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sectorsize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sectorsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sectorsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sectorsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MkfsBtrfs_ConstructProps)
    _init (config?: MkfsBtrfs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MkfsBtrfs
    static $gtype: GObject.Type
}
interface Mksquashfs_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.Mksquashfs */
    compress?: string
}
class Mksquashfs {
    /* Properties of Guestfs-1.0.Guestfs.Mksquashfs */
    compress: string
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
    connect(sigName: "notify::compress", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compress", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Mksquashfs_ConstructProps)
    _init (config?: Mksquashfs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Mksquashfs
    static $gtype: GObject.Type
}
interface Mkswap_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.Mkswap */
    label?: string
    uuid?: string
}
class Mkswap {
    /* Properties of Guestfs-1.0.Guestfs.Mkswap */
    label: string
    uuid: string
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
    connect(sigName: "notify::uuid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Mkswap_ConstructProps)
    _init (config?: Mkswap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Mkswap
    static $gtype: GObject.Type
}
interface Mktemp_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.Mktemp */
    suffix?: string
}
class Mktemp {
    /* Properties of Guestfs-1.0.Guestfs.Mktemp */
    suffix: string
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
    connect(sigName: "notify::suffix", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suffix", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::suffix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::suffix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::suffix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Mktemp_ConstructProps)
    _init (config?: Mktemp_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Mktemp
    static $gtype: GObject.Type
}
interface Mount9P_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.Mount9P */
    options?: string
}
class Mount9P {
    /* Properties of Guestfs-1.0.Guestfs.Mount9P */
    options: string
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
    connect(sigName: "notify::options", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Mount9P_ConstructProps)
    _init (config?: Mount9P_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Mount9P
    static $gtype: GObject.Type
}
interface MountLocal_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.MountLocal */
    cachetimeout?: number
    debugcalls?: Tristate
    options?: string
    readonly?: Tristate
}
class MountLocal {
    /* Properties of Guestfs-1.0.Guestfs.MountLocal */
    cachetimeout: number
    debugcalls: Tristate
    options: string
    readonly: Tristate
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
    connect(sigName: "notify::cachetimeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cachetimeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cachetimeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cachetimeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cachetimeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::debugcalls", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::debugcalls", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::debugcalls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::debugcalls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::debugcalls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::options", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::readonly", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MountLocal_ConstructProps)
    _init (config?: MountLocal_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MountLocal
    static $gtype: GObject.Type
}
interface NTFSResizeOpts_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.NTFSResizeOpts */
    force?: Tristate
    size?: number
}
class NTFSResizeOpts {
    /* Properties of Guestfs-1.0.Guestfs.NTFSResizeOpts */
    force: Tristate
    size: number
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
    connect(sigName: "notify::force", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NTFSResizeOpts_ConstructProps)
    _init (config?: NTFSResizeOpts_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NTFSResizeOpts
    static $gtype: GObject.Type
}
interface NtfscloneOut_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.NtfscloneOut */
    force?: Tristate
    ignorefscheck?: Tristate
    metadataonly?: Tristate
    preservetimestamps?: Tristate
    rescue?: Tristate
}
class NtfscloneOut {
    /* Properties of Guestfs-1.0.Guestfs.NtfscloneOut */
    force: Tristate
    ignorefscheck: Tristate
    metadataonly: Tristate
    preservetimestamps: Tristate
    rescue: Tristate
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
    connect(sigName: "notify::force", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ignorefscheck", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignorefscheck", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ignorefscheck", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ignorefscheck", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ignorefscheck", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::metadataonly", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadataonly", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::metadataonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::metadataonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::metadataonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::preservetimestamps", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preservetimestamps", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::preservetimestamps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::preservetimestamps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::preservetimestamps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rescue", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rescue", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rescue", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rescue", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rescue", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NtfscloneOut_ConstructProps)
    _init (config?: NtfscloneOut_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NtfscloneOut
    static $gtype: GObject.Type
}
interface Ntfsfix_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.Ntfsfix */
    clearbadsectors?: Tristate
}
class Ntfsfix {
    /* Properties of Guestfs-1.0.Guestfs.Ntfsfix */
    clearbadsectors: Tristate
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
    connect(sigName: "notify::clearbadsectors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clearbadsectors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clearbadsectors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clearbadsectors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clearbadsectors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Ntfsfix_ConstructProps)
    _init (config?: Ntfsfix_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Ntfsfix
    static $gtype: GObject.Type
}
interface Remount_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.Remount */
    rw?: Tristate
}
class Remount {
    /* Properties of Guestfs-1.0.Guestfs.Remount */
    rw: Tristate
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
    connect(sigName: "notify::rw", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rw", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rw", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Remount_ConstructProps)
    _init (config?: Remount_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Remount
    static $gtype: GObject.Type
}
interface Rsync_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.Rsync */
    archive?: Tristate
    deletedest?: Tristate
}
class Rsync {
    /* Properties of Guestfs-1.0.Guestfs.Rsync */
    archive: Tristate
    deletedest: Tristate
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
    connect(sigName: "notify::archive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::archive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::archive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::archive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::archive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::deletedest", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletedest", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::deletedest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::deletedest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::deletedest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Rsync_ConstructProps)
    _init (config?: Rsync_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Rsync
    static $gtype: GObject.Type
}
interface RsyncIn_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.RsyncIn */
    archive?: Tristate
    deletedest?: Tristate
}
class RsyncIn {
    /* Properties of Guestfs-1.0.Guestfs.RsyncIn */
    archive: Tristate
    deletedest: Tristate
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
    connect(sigName: "notify::archive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::archive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::archive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::archive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::archive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::deletedest", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletedest", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::deletedest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::deletedest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::deletedest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RsyncIn_ConstructProps)
    _init (config?: RsyncIn_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RsyncIn
    static $gtype: GObject.Type
}
interface RsyncOut_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.RsyncOut */
    archive?: Tristate
    deletedest?: Tristate
}
class RsyncOut {
    /* Properties of Guestfs-1.0.Guestfs.RsyncOut */
    archive: Tristate
    deletedest: Tristate
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
    connect(sigName: "notify::archive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::archive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::archive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::archive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::archive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::deletedest", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletedest", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::deletedest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::deletedest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::deletedest", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RsyncOut_ConstructProps)
    _init (config?: RsyncOut_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RsyncOut
    static $gtype: GObject.Type
}
interface SelinuxRelabel_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.SelinuxRelabel */
    force?: Tristate
}
class SelinuxRelabel {
    /* Properties of Guestfs-1.0.Guestfs.SelinuxRelabel */
    force: Tristate
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
    connect(sigName: "notify::force", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SelinuxRelabel_ConstructProps)
    _init (config?: SelinuxRelabel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SelinuxRelabel
    static $gtype: GObject.Type
}
interface Session_ConstructProps extends GObject.Object_ConstructProps {
}
class Session {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Guestfs-1.0.Guestfs.Session */
    aclDeleteDefFile(dir: string): boolean
    aclGetFile(path: string, acltype: string): string
    aclSetFile(path: string, acltype: string, acl: string): boolean
    addCdrom(filename: string): boolean
    addDomain(dom: string, optargs?: AddDomain | null): number
    addDrive(filename: string, optargs?: AddDrive | null): boolean
    addDriveRo(filename: string): boolean
    addDriveRoWithIf(filename: string, iface: string): boolean
    addDriveScratch(size: number, optargs?: AddDriveScratch | null): boolean
    addDriveWithIf(filename: string, iface: string): boolean
    addLibvirtDom(dom?: object | null, optargs?: AddLibvirtDom | null): number
    augClear(augpath: string): boolean
    augClose(): boolean
    augDefnode(name: string, expr: string, val: string): IntBool
    augDefvar(name: string, expr?: string | null): number
    augGet(augpath: string): string
    augInit(root: string, flags: number): boolean
    augInsert(augpath: string, label: string, before: boolean): boolean
    augLabel(augpath: string): string
    augLoad(): boolean
    augLs(augpath: string): string[]
    augMatch(augpath: string): string[]
    augMv(src: string, dest: string): boolean
    augRm(augpath: string): number
    augSave(): boolean
    augSet(augpath: string, val: string): boolean
    augSetm(base: string, sub: string | null, val: string): number
    augTransform(lens: string, file: string, optargs?: AugTransform | null): boolean
    available(groups: string[]): boolean
    availableAllGroups(): string[]
    base64In(base64file: string, filename: string, cancellable?: Gio.Cancellable | null): boolean
    base64Out(filename: string, base64file: string, cancellable?: Gio.Cancellable | null): boolean
    blkdiscard(device: string): boolean
    blkdiscardzeroes(device: string): number
    blkid(device: string): GLib.HashTable
    blockdevFlushbufs(device: string): boolean
    blockdevGetbsz(device: string): number
    blockdevGetro(device: string): number
    blockdevGetsize64(device: string): number
    blockdevGetss(device: string): number
    blockdevGetsz(device: string): number
    blockdevRereadpt(device: string): boolean
    blockdevSetbsz(device: string, blocksize: number): boolean
    blockdevSetra(device: string, sectors: number): boolean
    blockdevSetro(device: string): boolean
    blockdevSetrw(device: string): boolean
    btrfsBalanceCancel(path: string): boolean
    btrfsBalancePause(path: string): boolean
    btrfsBalanceResume(path: string): boolean
    btrfsBalanceStatus(path: string): BTRFSBalance
    btrfsDeviceAdd(devices: string[], fs: string): boolean
    btrfsDeviceDelete(devices: string[], fs: string): boolean
    btrfsFilesystemBalance(fs: string): boolean
    btrfsFilesystemDefragment(path: string, optargs?: BTRFSFilesystemDefragment | null): boolean
    btrfsFilesystemResize(mountpoint: string, optargs?: BTRFSFilesystemResize | null): boolean
    btrfsFilesystemShow(device: string): string[]
    btrfsFilesystemSync(fs: string): boolean
    btrfsFsck(device: string, optargs?: BtrfsFsck | null): boolean
    btrfsImage(source: string[], image: string, optargs?: BTRFSImage | null): boolean
    btrfsQgroupAssign(src: string, dst: string, path: string): boolean
    btrfsQgroupCreate(qgroupid: string, subvolume: string): boolean
    btrfsQgroupDestroy(qgroupid: string, subvolume: string): boolean
    btrfsQgroupLimit(subvolume: string, size: number): boolean
    btrfsQgroupRemove(src: string, dst: string, path: string): boolean
    btrfsQgroupShow(path: string): BTRFSQgroup[]
    btrfsQuotaEnable(fs: string, enable: boolean): boolean
    btrfsQuotaRescan(fs: string): boolean
    btrfsReplace(srcdev: string, targetdev: string, mntpoint: string): boolean
    btrfsRescueChunkRecover(device: string): boolean
    btrfsRescueSuperRecover(device: string): boolean
    btrfsScrubCancel(path: string): boolean
    btrfsScrubResume(path: string): boolean
    btrfsScrubStart(path: string): boolean
    btrfsScrubStatus(path: string): BTRFSScrub
    btrfsSetSeeding(device: string, seeding: boolean): boolean
    btrfsSubvolumeCreate(dest: string, optargs?: BTRFSSubvolumeCreate | null): boolean
    btrfsSubvolumeDelete(subvolume: string): boolean
    btrfsSubvolumeGetDefault(fs: string): number
    btrfsSubvolumeList(fs: string): BTRFSSubvolume[]
    btrfsSubvolumeSetDefault(id: number, fs: string): boolean
    btrfsSubvolumeShow(subvolume: string): GLib.HashTable
    btrfsSubvolumeSnapshot(source: string, dest: string, optargs?: BTRFSSubvolumeSnapshot | null): boolean
    btrfstuneEnableExtendedInodeRefs(device: string): boolean
    btrfstuneEnableSkinnyMetadataExtentRefs(device: string): boolean
    btrfstuneSeeding(device: string, seeding: boolean): boolean
    cPointer(): number
    canonicalDeviceName(device: string): string
    capGetFile(path: string): string
    capSetFile(path: string, cap: string): boolean
    caseSensitivePath(path: string): string
    cat(path: string): string
    checksum(csumtype: string, path: string): string
    checksumDevice(csumtype: string, device: string): string
    checksumsOut(csumtype: string, directory: string, sumsfile: string, cancellable?: Gio.Cancellable | null): boolean
    chmod(mode: number, path: string): boolean
    chown(owner: number, group: number, path: string): boolean
    clearBackendSetting(name: string): number
    close(): boolean
    command(arguments_: string[]): string
    commandLines(arguments_: string[]): string[]
    compressDeviceOut(ctype: string, device: string, zdevice: string, optargs?: CompressDeviceOut | null, cancellable?: Gio.Cancellable | null): boolean
    compressOut(ctype: string, file: string, zfile: string, optargs?: CompressOut | null, cancellable?: Gio.Cancellable | null): boolean
    config(hvparam: string, hvvalue?: string | null): boolean
    copyAttributes(src: string, dest: string, optargs?: CopyAttributes | null): boolean
    copyDeviceToDevice(src: string, dest: string, optargs?: CopyDeviceToDevice | null): boolean
    copyDeviceToFile(src: string, dest: string, optargs?: CopyDeviceToFile | null): boolean
    copyFileToDevice(src: string, dest: string, optargs?: CopyFileToDevice | null): boolean
    copyFileToFile(src: string, dest: string, optargs?: CopyFileToFile | null): boolean
    copyIn(localpath: string, remotedir: string): boolean
    copyOut(remotepath: string, localdir: string): boolean
    copySize(src: string, dest: string, size: number): boolean
    cp(src: string, dest: string): boolean
    cpA(src: string, dest: string): boolean
    cpR(src: string, dest: string): boolean
    cpioOut(directory: string, cpiofile: string, optargs?: CpioOut | null, cancellable?: Gio.Cancellable | null): boolean
    dd(src: string, dest: string): boolean
    debug(subcmd: string, extraargs: string[]): string
    debugDrives(): string[]
    debugUpload(filename: string, tmpname: string, mode: number, cancellable?: Gio.Cancellable | null): boolean
    deviceIndex(device: string): number
    df(): string
    dfH(): string
    diskCreate(filename: string, format: string, size: number, optargs?: DiskCreate | null): boolean
    diskFormat(filename: string): string
    diskHasBackingFile(filename: string): number
    diskVirtualSize(filename: string): number
    dmesg(): string
    download(remotefilename: string, filename: string, cancellable?: Gio.Cancellable | null): boolean
    downloadBlocks(device: string, start: number, stop: number, filename: string, optargs?: DownloadBlocks | null, cancellable?: Gio.Cancellable | null): boolean
    downloadInode(device: string, inode: number, filename: string, cancellable?: Gio.Cancellable | null): boolean
    downloadOffset(remotefilename: string, filename: string, offset: number, size: number, cancellable?: Gio.Cancellable | null): boolean
    dropCaches(whattodrop: number): boolean
    du(path: string): number
    e2fsck(device: string, optargs?: E2fsck | null): boolean
    e2fsckF(device: string): boolean
    echoDaemon(words: string[]): string
    egrep(regex: string, path: string): string[]
    egrepi(regex: string, path: string): string[]
    equal(file1: string, file2: string): number
    exists(path: string): number
    extlinux(directory: string): boolean
    f2fsExpand(device: string): boolean
    fallocate(path: string, len: number): boolean
    fallocate64(path: string, len: number): boolean
    featureAvailable(groups: string[]): number
    fgrep(pattern: string, path: string): string[]
    fgrepi(pattern: string, path: string): string[]
    file(path: string): string
    fileArchitecture(filename: string): string
    filesize(file: string): number
    filesystemAvailable(filesystem: string): number
    filesystemWalk(device: string, cancellable?: Gio.Cancellable | null): TSKDirent[]
    fill(c: number, len: number, path: string): boolean
    fillDir(dir: string, nr: number): boolean
    fillPattern(pattern: string, len: number, path: string): boolean
    find(directory: string): string[]
    find0(directory: string, files: string, cancellable?: Gio.Cancellable | null): boolean
    findInode(device: string, inode: number, cancellable?: Gio.Cancellable | null): TSKDirent[]
    findfsLabel(label: string): string
    findfsUuid(uuid: string): string
    fsck(fstype: string, device: string): number
    fstrim(mountpoint: string, optargs?: Fstrim | null): boolean
    getAppend(): string
    getAttachMethod(): string
    getAutosync(): number
    getBackend(): string
    getBackendSetting(name: string): string
    getBackendSettings(): string[]
    getCachedir(): string
    getDirect(): number
    getE2attrs(file: string): string
    getE2generation(file: string): number
    getE2label(device: string): string
    getE2uuid(device: string): string
    getHv(): string
    getIdentifier(): string
    getLibvirtRequestedCredentialChallenge(index: number): string
    getLibvirtRequestedCredentialDefresult(index: number): string
    getLibvirtRequestedCredentialPrompt(index: number): string
    getLibvirtRequestedCredentials(): string[]
    getMemsize(): number
    getNetwork(): number
    getPath(): string
    getPgroup(): number
    getPid(): number
    getProgram(): string
    getQemu(): string
    getRecoveryProc(): number
    getSelinux(): number
    getSmp(): number
    getSockdir(): string
    getState(): number
    getTmpdir(): string
    getTrace(): number
    getUmask(): number
    getVerbose(): number
    getcon(): string
    getxattr(path: string, name: string): Uint8Array
    getxattrs(path: string): XAttr[]
    globExpand(pattern: string, optargs?: GlobExpand | null): string[]
    grep(regex: string, path: string, optargs?: Grep | null): string[]
    grepi(regex: string, path: string): string[]
    grubInstall(root: string, device: string): boolean
    head(path: string): string[]
    headN(nrlines: number, path: string): string[]
    hexdump(path: string): string
    hivexClose(): boolean
    hivexCommit(filename?: string | null): boolean
    hivexNodeAddChild(parent: number, name: string): number
    hivexNodeChildren(nodeh: number): HivexNode[]
    hivexNodeDeleteChild(nodeh: number): boolean
    hivexNodeGetChild(nodeh: number, name: string): number
    hivexNodeGetValue(nodeh: number, key: string): number
    hivexNodeName(nodeh: number): string
    hivexNodeParent(nodeh: number): number
    hivexNodeSetValue(nodeh: number, key: string, t: number, val: Uint8Array): boolean
    hivexNodeValues(nodeh: number): HivexValue[]
    hivexOpen(filename: string, optargs?: HivexOpen | null): boolean
    hivexRoot(): number
    hivexValueKey(valueh: number): string
    hivexValueString(valueh: number): string
    hivexValueType(valueh: number): number
    hivexValueUtf8(valueh: number): string
    hivexValueValue(valueh: number): Uint8Array
    initrdCat(initrdpath: string, filename: string): Uint8Array
    initrdList(path: string): string[]
    inotifyAddWatch(path: string, mask: number): number
    inotifyClose(): boolean
    inotifyFiles(): string[]
    inotifyInit(maxevents: number): boolean
    inotifyRead(): INotifyEvent[]
    inotifyRmWatch(wd: number): boolean
    inspectGetArch(root: string): string
    inspectGetDistro(root: string): string
    inspectGetDriveMappings(root: string): GLib.HashTable
    inspectGetFilesystems(root: string): string[]
    inspectGetFormat(root: string): string
    inspectGetHostname(root: string): string
    inspectGetIcon(root: string, optargs?: InspectGetIcon | null): Uint8Array
    inspectGetMajorVersion(root: string): number
    inspectGetMinorVersion(root: string): number
    inspectGetMountpoints(root: string): GLib.HashTable
    inspectGetOsinfo(root: string): string
    inspectGetPackageFormat(root: string): string
    inspectGetPackageManagement(root: string): string
    inspectGetProductName(root: string): string
    inspectGetProductVariant(root: string): string
    inspectGetRoots(): string[]
    inspectGetType(root: string): string
    inspectGetWindowsCurrentControlSet(root: string): string
    inspectGetWindowsSoftwareHive(root: string): string
    inspectGetWindowsSystemHive(root: string): string
    inspectGetWindowsSystemroot(root: string): string
    inspectIsLive(root: string): number
    inspectIsMultipart(root: string): number
    inspectIsNetinst(root: string): number
    inspectListApplications(root: string): Application[]
    inspectListApplications2(root: string): Application2[]
    inspectOs(): string[]
    internalExit(cancellable?: Gio.Cancellable | null): boolean
    internalTest(str: string, optstr: string | null, strlist: string[], b: boolean, integer: number, integer64: number, filein: string, fileout: string, bufferin: Uint8Array, optargs?: InternalTest | null, cancellable?: Gio.Cancellable | null): boolean
    internalTest63Optargs(optargs?: InternalTest63Optargs | null, cancellable?: Gio.Cancellable | null): boolean
    internalTestCloseOutput(): boolean
    internalTestOnlyOptargs(optargs?: InternalTestOnlyOptargs | null, cancellable?: Gio.Cancellable | null): boolean
    internalTestRbool(val: string): number
    internalTestRboolerr(): number
    internalTestRbufferout(val: string): Uint8Array
    internalTestRbufferouterr(): Uint8Array
    internalTestRconstoptstring(val: string): string
    internalTestRconstoptstringerr(): string
    internalTestRconststring(val: string): string
    internalTestRconststringerr(): string
    internalTestRhashtable(val: string): GLib.HashTable
    internalTestRhashtableerr(): GLib.HashTable
    internalTestRint(val: string): number
    internalTestRint64(val: string): number
    internalTestRint64err(): number
    internalTestRinterr(): number
    internalTestRstring(val: string): string
    internalTestRstringerr(): string
    internalTestRstringlist(val: string): string[]
    internalTestRstringlisterr(): string[]
    internalTestRstruct(val: string): PV
    internalTestRstructerr(): PV
    internalTestRstructlist(val: string): PV[]
    internalTestRstructlisterr(): PV[]
    internalTestSetOutput(filename: string): boolean
    isBlockdev(path: string, optargs?: IsBlockdev | null): number
    isBusy(): number
    isChardev(path: string, optargs?: IsChardev | null): number
    isConfig(): number
    isDir(path: string, optargs?: IsDir | null): number
    isFifo(path: string, optargs?: IsFifo | null): number
    isFile(path: string, optargs?: IsFile | null): number
    isLaunching(): number
    isLv(mountable: string): number
    isReady(): number
    isSocket(path: string, optargs?: IsSocket | null): number
    isSymlink(path: string): number
    isWholeDevice(device: string): number
    isZero(path: string): number
    isZeroDevice(device: string): number
    isoinfo(isofile: string): ISOInfo
    isoinfoDevice(device: string): ISOInfo
    journalClose(): boolean
    journalGet(): XAttr[]
    journalGetDataThreshold(): number
    journalGetRealtimeUsec(): number
    journalNext(): number
    journalOpen(directory: string): boolean
    journalSetDataThreshold(threshold: number): boolean
    journalSkip(skip: number): number
    killSubprocess(): boolean
    launch(): boolean
    lchown(owner: number, group: number, path: string): boolean
    ldmtoolCreateAll(): boolean
    ldmtoolDiskgroupDisks(diskgroup: string): string[]
    ldmtoolDiskgroupName(diskgroup: string): string
    ldmtoolDiskgroupVolumes(diskgroup: string): string[]
    ldmtoolRemoveAll(): boolean
    ldmtoolScan(): string[]
    ldmtoolScanDevices(devices: string[]): string[]
    ldmtoolVolumeHint(diskgroup: string, volume: string): string
    ldmtoolVolumePartitions(diskgroup: string, volume: string): string[]
    ldmtoolVolumeType(diskgroup: string, volume: string): string
    lgetxattr(path: string, name: string): Uint8Array
    lgetxattrs(path: string): XAttr[]
    list9p(): string[]
    listDevices(): string[]
    listDiskLabels(): GLib.HashTable
    listDmDevices(): string[]
    listFilesystems(): GLib.HashTable
    listLdmPartitions(): string[]
    listLdmVolumes(): string[]
    listMdDevices(): string[]
    listPartitions(): string[]
    ll(directory: string): string
    llz(directory: string): string
    ln(target: string, linkname: string): boolean
    lnF(target: string, linkname: string): boolean
    lnS(target: string, linkname: string): boolean
    lnSf(target: string, linkname: string): boolean
    lremovexattr(xattr: string, path: string): boolean
    ls(directory: string): string[]
    ls0(dir: string, filenames: string): boolean
    lsetxattr(xattr: string, val: string, vallen: number, path: string): boolean
    lstat(path: string): Stat
    lstatlist(path: string, names: string[]): Stat[]
    lstatns(path: string): StatNS
    lstatnslist(path: string, names: string[]): StatNS[]
    luksAddKey(device: string, key: string, newkey: string, keyslot: number): boolean
    luksClose(device: string): boolean
    luksFormat(device: string, key: string, keyslot: number): boolean
    luksFormatCipher(device: string, key: string, keyslot: number, cipher: string): boolean
    luksKillSlot(device: string, key: string, keyslot: number): boolean
    luksOpen(device: string, key: string, mapname: string): boolean
    luksOpenRo(device: string, key: string, mapname: string): boolean
    lvcreate(logvol: string, volgroup: string, mbytes: number): boolean
    lvcreateFree(logvol: string, volgroup: string, percent: number): boolean
    lvmCanonicalLvName(lvname: string): string
    lvmClearFilter(): boolean
    lvmRemoveAll(): boolean
    lvmScan(activate: boolean): boolean
    lvmSetFilter(devices: string[]): boolean
    lvremove(device: string): boolean
    lvrename(logvol: string, newlogvol: string): boolean
    lvresize(device: string, mbytes: number): boolean
    lvresizeFree(lv: string, percent: number): boolean
    lvs(): string[]
    lvsFull(): LV[]
    lvuuid(device: string): string
    lxattrlist(path: string, names: string[]): XAttr[]
    maxDisks(): number
    mdCreate(name: string, devices: string[], optargs?: MDCreate | null): boolean
    mdDetail(md: string): GLib.HashTable
    mdStat(md: string): MDStat[]
    mdStop(md: string): boolean
    mkdir(path: string): boolean
    mkdirMode(path: string, mode: number): boolean
    mkdirP(path: string): boolean
    mkdtemp(tmpl: string): string
    mke2fs(device: string, optargs?: Mke2fs | null): boolean
    mke2fsJ(fstype: string, blocksize: number, device: string, journal: string): boolean
    mke2fsJL(fstype: string, blocksize: number, device: string, label: string): boolean
    mke2fsJU(fstype: string, blocksize: number, device: string, uuid: string): boolean
    mke2journal(blocksize: number, device: string): boolean
    mke2journalL(blocksize: number, label: string, device: string): boolean
    mke2journalU(blocksize: number, uuid: string, device: string): boolean
    mkfifo(mode: number, path: string): boolean
    mkfs(fstype: string, device: string, optargs?: Mkfs | null): boolean
    mkfsB(fstype: string, blocksize: number, device: string): boolean
    mkfsBtrfs(devices: string[], optargs?: MkfsBtrfs | null): boolean
    mklostAndFound(mountpoint: string): boolean
    mkmountpoint(exemptpath: string): boolean
    mknod(mode: number, devmajor: number, devminor: number, path: string): boolean
    mknodB(mode: number, devmajor: number, devminor: number, path: string): boolean
    mknodC(mode: number, devmajor: number, devminor: number, path: string): boolean
    mksquashfs(path: string, filename: string, optargs?: Mksquashfs | null, cancellable?: Gio.Cancellable | null): boolean
    mkswap(device: string, optargs?: Mkswap | null): boolean
    mkswapL(label: string, device: string): boolean
    mkswapU(uuid: string, device: string): boolean
    mkswapFile(path: string): boolean
    mktemp(tmpl: string, optargs?: Mktemp | null): string
    modprobe(modulename: string): boolean
    mount(mountable: string, mountpoint: string): boolean
    mount9p(mounttag: string, mountpoint: string, optargs?: Mount9P | null): boolean
    mountLocal(localmountpoint: string, optargs?: MountLocal | null): boolean
    mountLocalRun(cancellable?: Gio.Cancellable | null): boolean
    mountLoop(file: string, mountpoint: string): boolean
    mountOptions(options: string, mountable: string, mountpoint: string): boolean
    mountRo(mountable: string, mountpoint: string): boolean
    mountVfs(options: string, vfstype: string, mountable: string, mountpoint: string): boolean
    mountableDevice(mountable: string): string
    mountableSubvolume(mountable: string): string
    mountpoints(): GLib.HashTable
    mounts(): string[]
    mv(src: string, dest: string): boolean
    nrDevices(): number
    ntfs3gProbe(rw: boolean, device: string): number
    ntfscatI(device: string, inode: number, filename: string, cancellable?: Gio.Cancellable | null): boolean
    ntfscloneIn(backupfile: string, device: string, cancellable?: Gio.Cancellable | null): boolean
    ntfscloneOut(device: string, backupfile: string, optargs?: NtfscloneOut | null, cancellable?: Gio.Cancellable | null): boolean
    ntfsfix(device: string, optargs?: Ntfsfix | null): boolean
    ntfsresize(device: string, optargs?: NTFSResizeOpts | null): boolean
    ntfsresizeSize(device: string, size: number): boolean
    parseEnvironment(): boolean
    parseEnvironmentList(environment: string[]): boolean
    partAdd(device: string, prlogex: string, startsect: number, endsect: number): boolean
    partDel(device: string, partnum: number): boolean
    partDisk(device: string, parttype: string): boolean
    partExpandGpt(device: string): boolean
    partGetBootable(device: string, partnum: number): number
    partGetDiskGuid(device: string): string
    partGetGptAttributes(device: string, partnum: number): number
    partGetGptGuid(device: string, partnum: number): string
    partGetGptType(device: string, partnum: number): string
    partGetMbrId(device: string, partnum: number): number
    partGetMbrPartType(device: string, partnum: number): string
    partGetName(device: string, partnum: number): string
    partGetParttype(device: string): string
    partInit(device: string, parttype: string): boolean
    partList(device: string): Partition[]
    partResize(device: string, partnum: number, endsect: number): boolean
    partSetBootable(device: string, partnum: number, bootable: boolean): boolean
    partSetDiskGuid(device: string, guid: string): boolean
    partSetDiskGuidRandom(device: string): boolean
    partSetGptAttributes(device: string, partnum: number, attributes: number): boolean
    partSetGptGuid(device: string, partnum: number, guid: string): boolean
    partSetGptType(device: string, partnum: number, guid: string): boolean
    partSetMbrId(device: string, partnum: number, idbyte: number): boolean
    partSetName(device: string, partnum: number, name: string): boolean
    partToDev(partition: string): string
    partToPartnum(partition: string): number
    pingDaemon(): boolean
    pread(path: string, count: number, offset: number): Uint8Array
    preadDevice(device: string, count: number, offset: number): Uint8Array
    pvchangeUuid(device: string): boolean
    pvchangeUuidAll(): boolean
    pvcreate(device: string): boolean
    pvremove(device: string): boolean
    pvresize(device: string): boolean
    pvresizeSize(device: string, size: number): boolean
    pvs(): string[]
    pvsFull(): PV[]
    pvuuid(device: string): string
    pwrite(path: string, content: Uint8Array, offset: number): number
    pwriteDevice(device: string, content: Uint8Array, offset: number): number
    readFile(path: string): Uint8Array
    readLines(path: string): string[]
    readdir(dir: string): Dirent[]
    readlink(path: string): string
    readlinklist(path: string, names: string[]): string[]
    realpath(path: string): string
    remount(mountpoint: string, optargs?: Remount | null): boolean
    removeDrive(label: string): boolean
    removexattr(xattr: string, path: string): boolean
    rename(oldpath: string, newpath: string): boolean
    resize2fs(device: string): boolean
    resize2fsM(device: string): boolean
    resize2fsSize(device: string, size: number): boolean
    rm(path: string): boolean
    rmF(path: string): boolean
    rmRf(path: string): boolean
    rmdir(path: string): boolean
    rmmountpoint(exemptpath: string): boolean
    rsync(src: string, dest: string, optargs?: Rsync | null): boolean
    rsyncIn(remote: string, dest: string, optargs?: RsyncIn | null): boolean
    rsyncOut(src: string, remote: string, optargs?: RsyncOut | null): boolean
    scrubDevice(device: string): boolean
    scrubFile(file: string): boolean
    scrubFreespace(dir: string): boolean
    selinuxRelabel(specfile: string, path: string, optargs?: SelinuxRelabel | null): boolean
    setAppend(append?: string | null): boolean
    setAttachMethod(backend: string): boolean
    setAutosync(autosync: boolean): boolean
    setBackend(backend: string): boolean
    setBackendSetting(name: string, val: string): boolean
    setBackendSettings(settings: string[]): boolean
    setCachedir(cachedir?: string | null): boolean
    setDirect(direct: boolean): boolean
    setE2attrs(file: string, attrs: string, optargs?: SetE2attrs | null): boolean
    setE2generation(file: string, generation: number): boolean
    setE2label(device: string, label: string): boolean
    setE2uuid(device: string, uuid: string): boolean
    setHv(hv: string): boolean
    setIdentifier(identifier: string): boolean
    setLabel(mountable: string, label: string): boolean
    setLibvirtRequestedCredential(index: number, cred: Uint8Array): boolean
    setLibvirtSupportedCredentials(creds: string[]): boolean
    setMemsize(memsize: number): boolean
    setNetwork(network: boolean): boolean
    setPath(searchpath?: string | null): boolean
    setPgroup(pgroup: boolean): boolean
    setProgram(program: string): boolean
    setQemu(hv?: string | null): boolean
    setRecoveryProc(recoveryproc: boolean): boolean
    setSelinux(selinux: boolean): boolean
    setSmp(smp: number): boolean
    setTmpdir(tmpdir?: string | null): boolean
    setTrace(trace: boolean): boolean
    setUuid(device: string, uuid: string): boolean
    setUuidRandom(device: string): boolean
    setVerbose(verbose: boolean): boolean
    setcon(context: string): boolean
    setxattr(xattr: string, val: string, vallen: number, path: string): boolean
    sfdisk(device: string, cyls: number, heads: number, sectors: number, lines: string[]): boolean
    sfdiskM(device: string, lines: string[]): boolean
    sfdiskN(device: string, partnum: number, cyls: number, heads: number, sectors: number, line: string): boolean
    sfdiskDiskGeometry(device: string): string
    sfdiskKernelGeometry(device: string): string
    sfdiskL(device: string): string
    sh(command: string): string
    shLines(command: string): string[]
    shutdown(): boolean
    sleep(secs: number): boolean
    stat(path: string): Stat
    statns(path: string): StatNS
    statvfs(path: string): StatVFS
    strings(path: string): string[]
    stringsE(encoding: string, path: string): string[]
    swapoffDevice(device: string): boolean
    swapoffFile(file: string): boolean
    swapoffLabel(label: string): boolean
    swapoffUuid(uuid: string): boolean
    swaponDevice(device: string): boolean
    swaponFile(file: string): boolean
    swaponLabel(label: string): boolean
    swaponUuid(uuid: string): boolean
    sync(): boolean
    syslinux(device: string, optargs?: Syslinux | null): boolean
    tail(path: string): string[]
    tailN(nrlines: number, path: string): string[]
    tarIn(tarfile: string, directory: string, optargs?: TarIn | null, cancellable?: Gio.Cancellable | null): boolean
    tarOut(directory: string, tarfile: string, optargs?: TarOut | null, cancellable?: Gio.Cancellable | null): boolean
    tgzIn(tarball: string, directory: string, cancellable?: Gio.Cancellable | null): boolean
    tgzOut(directory: string, tarball: string, cancellable?: Gio.Cancellable | null): boolean
    touch(path: string): boolean
    truncate(path: string): boolean
    truncateSize(path: string, size: number): boolean
    tune2fs(device: string, optargs?: Tune2FS | null): boolean
    tune2fsL(device: string): GLib.HashTable
    txzIn(tarball: string, directory: string, cancellable?: Gio.Cancellable | null): boolean
    txzOut(directory: string, tarball: string, cancellable?: Gio.Cancellable | null): boolean
    umask(mask: number): number
    umount(pathordevice: string, optargs?: Umount | null): boolean
    umountAll(): boolean
    umountLocal(optargs?: UmountLocal | null): boolean
    upload(filename: string, remotefilename: string, cancellable?: Gio.Cancellable | null): boolean
    uploadOffset(filename: string, remotefilename: string, offset: number, cancellable?: Gio.Cancellable | null): boolean
    userCancel(): boolean
    utimens(path: string, atsecs: number, atnsecs: number, mtsecs: number, mtnsecs: number): boolean
    utsname(): UTSName
    version(): Version
    vfsLabel(mountable: string): string
    vfsMinimumSize(mountable: string): number
    vfsType(mountable: string): string
    vfsUuid(mountable: string): string
    vgActivate(activate: boolean, volgroups: string[]): boolean
    vgActivateAll(activate: boolean): boolean
    vgchangeUuid(vg: string): boolean
    vgchangeUuidAll(): boolean
    vgcreate(volgroup: string, physvols: string[]): boolean
    vglvuuids(vgname: string): string[]
    vgmeta(vgname: string): Uint8Array
    vgpvuuids(vgname: string): string[]
    vgremove(vgname: string): boolean
    vgrename(volgroup: string, newvolgroup: string): boolean
    vgs(): string[]
    vgsFull(): VG[]
    vgscan(): boolean
    vguuid(vgname: string): string
    waitReady(): boolean
    wcC(path: string): number
    wcL(path: string): number
    wcW(path: string): number
    wipefs(device: string): boolean
    write(path: string, content: Uint8Array): boolean
    writeAppend(path: string, content: Uint8Array): boolean
    writeFile(path: string, content: string, size: number): boolean
    xfsAdmin(device: string, optargs?: XfsAdmin | null): boolean
    xfsGrowfs(path: string, optargs?: XfsGrowfs | null): boolean
    xfsInfo(pathordevice: string): XFSInfo
    xfsRepair(device: string, optargs?: XfsRepair | null): number
    yaraDestroy(): boolean
    yaraLoad(filename: string, cancellable?: Gio.Cancellable | null): boolean
    yaraScan(path: string, cancellable?: Gio.Cancellable | null): YaraDetection[]
    zegrep(regex: string, path: string): string[]
    zegrepi(regex: string, path: string): string[]
    zero(device: string): boolean
    zeroDevice(device: string): boolean
    zeroFreeSpace(directory: string): boolean
    zerofree(device: string): boolean
    zfgrep(pattern: string, path: string): string[]
    zfgrepi(pattern: string, path: string): string[]
    zfile(meth: string, path: string): string
    zgrep(regex: string, path: string): string[]
    zgrepi(regex: string, path: string): string[]
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
    /* Signals of Guestfs-1.0.Guestfs.Session */
    connect(sigName: "appliance", callback: ((params: SessionEventParams) => void)): number
    on(sigName: "appliance", callback: (params: SessionEventParams) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "appliance", callback: (params: SessionEventParams) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "appliance", callback: (params: SessionEventParams) => void): NodeJS.EventEmitter
    emit(sigName: "appliance", params: SessionEventParams): void
    connect(sigName: "close", callback: ((params: SessionEventParams) => void)): number
    on(sigName: "close", callback: (params: SessionEventParams) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "close", callback: (params: SessionEventParams) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "close", callback: (params: SessionEventParams) => void): NodeJS.EventEmitter
    emit(sigName: "close", params: SessionEventParams): void
    connect(sigName: "enter", callback: ((params: SessionEventParams) => void)): number
    on(sigName: "enter", callback: (params: SessionEventParams) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter", callback: (params: SessionEventParams) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter", callback: (params: SessionEventParams) => void): NodeJS.EventEmitter
    emit(sigName: "enter", params: SessionEventParams): void
    connect(sigName: "launch-done", callback: ((object: SessionEventParams) => void)): number
    on(sigName: "launch-done", callback: (object: SessionEventParams) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "launch-done", callback: (object: SessionEventParams) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "launch-done", callback: (object: SessionEventParams) => void): NodeJS.EventEmitter
    emit(sigName: "launch-done", object: SessionEventParams): void
    connect(sigName: "library", callback: ((params: SessionEventParams) => void)): number
    on(sigName: "library", callback: (params: SessionEventParams) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "library", callback: (params: SessionEventParams) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "library", callback: (params: SessionEventParams) => void): NodeJS.EventEmitter
    emit(sigName: "library", params: SessionEventParams): void
    connect(sigName: "libvirt-auth", callback: ((object: SessionEventParams) => void)): number
    on(sigName: "libvirt-auth", callback: (object: SessionEventParams) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "libvirt-auth", callback: (object: SessionEventParams) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "libvirt-auth", callback: (object: SessionEventParams) => void): NodeJS.EventEmitter
    emit(sigName: "libvirt-auth", object: SessionEventParams): void
    connect(sigName: "progress", callback: ((params: SessionEventParams) => void)): number
    on(sigName: "progress", callback: (params: SessionEventParams) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (params: SessionEventParams) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (params: SessionEventParams) => void): NodeJS.EventEmitter
    emit(sigName: "progress", params: SessionEventParams): void
    connect(sigName: "subprocess-quit", callback: ((object: SessionEventParams) => void)): number
    on(sigName: "subprocess-quit", callback: (object: SessionEventParams) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "subprocess-quit", callback: (object: SessionEventParams) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "subprocess-quit", callback: (object: SessionEventParams) => void): NodeJS.EventEmitter
    emit(sigName: "subprocess-quit", object: SessionEventParams): void
    connect(sigName: "trace", callback: ((params: SessionEventParams) => void)): number
    on(sigName: "trace", callback: (params: SessionEventParams) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "trace", callback: (params: SessionEventParams) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "trace", callback: (params: SessionEventParams) => void): NodeJS.EventEmitter
    emit(sigName: "trace", params: SessionEventParams): void
    connect(sigName: "warning", callback: ((params: SessionEventParams) => void)): number
    on(sigName: "warning", callback: (params: SessionEventParams) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "warning", callback: (params: SessionEventParams) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "warning", callback: (params: SessionEventParams) => void): NodeJS.EventEmitter
    emit(sigName: "warning", params: SessionEventParams): void
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
    constructor (config?: Session_ConstructProps)
    _init (config?: Session_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Session
    static $gtype: GObject.Type
}
interface SetE2attrs_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.SetE2attrs */
    clear?: Tristate
}
class SetE2attrs {
    /* Properties of Guestfs-1.0.Guestfs.SetE2attrs */
    clear: Tristate
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
    connect(sigName: "notify::clear", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clear", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clear", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clear", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clear", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SetE2attrs_ConstructProps)
    _init (config?: SetE2attrs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SetE2attrs
    static $gtype: GObject.Type
}
interface Syslinux_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.Syslinux */
    directory?: string
}
class Syslinux {
    /* Properties of Guestfs-1.0.Guestfs.Syslinux */
    directory: string
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
    connect(sigName: "notify::directory", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::directory", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Syslinux_ConstructProps)
    _init (config?: Syslinux_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Syslinux
    static $gtype: GObject.Type
}
interface TarIn_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.TarIn */
    acls?: Tristate
    compress?: string
    selinux?: Tristate
    xattrs?: Tristate
}
class TarIn {
    /* Properties of Guestfs-1.0.Guestfs.TarIn */
    acls: Tristate
    compress: string
    selinux: Tristate
    xattrs: Tristate
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
    connect(sigName: "notify::acls", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::acls", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::acls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::acls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::acls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::compress", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compress", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::selinux", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selinux", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::selinux", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::selinux", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::selinux", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xattrs", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xattrs", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xattrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xattrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xattrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TarIn_ConstructProps)
    _init (config?: TarIn_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TarIn
    static $gtype: GObject.Type
}
interface TarOut_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.TarOut */
    acls?: Tristate
    compress?: string
    numericowner?: Tristate
    selinux?: Tristate
    xattrs?: Tristate
}
class TarOut {
    /* Properties of Guestfs-1.0.Guestfs.TarOut */
    acls: Tristate
    compress: string
    numericowner: Tristate
    selinux: Tristate
    xattrs: Tristate
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
    connect(sigName: "notify::acls", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::acls", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::acls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::acls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::acls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::compress", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compress", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::numericowner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::numericowner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::numericowner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::numericowner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::numericowner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::selinux", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selinux", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::selinux", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::selinux", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::selinux", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xattrs", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xattrs", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xattrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xattrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xattrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TarOut_ConstructProps)
    _init (config?: TarOut_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TarOut
    static $gtype: GObject.Type
}
interface Tune2FS_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.Tune2FS */
    errorbehavior?: string
    force?: Tristate
    group?: number
    intervalbetweenchecks?: number
    lastmounteddirectory?: string
    maxmountcount?: number
    mountcount?: number
    reservedblockscount?: number
    reservedblockspercentage?: number
    user?: number
}
class Tune2FS {
    /* Properties of Guestfs-1.0.Guestfs.Tune2FS */
    errorbehavior: string
    force: Tristate
    group: number
    intervalbetweenchecks: number
    lastmounteddirectory: string
    maxmountcount: number
    mountcount: number
    reservedblockscount: number
    reservedblockspercentage: number
    user: number
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
    connect(sigName: "notify::errorbehavior", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::errorbehavior", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::errorbehavior", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::errorbehavior", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::errorbehavior", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::force", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::group", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::intervalbetweenchecks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::intervalbetweenchecks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::intervalbetweenchecks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::intervalbetweenchecks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::intervalbetweenchecks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lastmounteddirectory", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lastmounteddirectory", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lastmounteddirectory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lastmounteddirectory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lastmounteddirectory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::maxmountcount", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maxmountcount", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::maxmountcount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::maxmountcount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::maxmountcount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mountcount", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mountcount", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mountcount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mountcount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mountcount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reservedblockscount", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reservedblockscount", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reservedblockscount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reservedblockscount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reservedblockscount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reservedblockspercentage", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reservedblockspercentage", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reservedblockspercentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reservedblockspercentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reservedblockspercentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Tune2FS_ConstructProps)
    _init (config?: Tune2FS_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Tune2FS
    static $gtype: GObject.Type
}
interface Umount_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.Umount */
    force?: Tristate
    lazyunmount?: Tristate
}
class Umount {
    /* Properties of Guestfs-1.0.Guestfs.Umount */
    force: Tristate
    lazyunmount: Tristate
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
    connect(sigName: "notify::force", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::force", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lazyunmount", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lazyunmount", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lazyunmount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lazyunmount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lazyunmount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Umount_ConstructProps)
    _init (config?: Umount_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Umount
    static $gtype: GObject.Type
}
interface UmountLocal_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.UmountLocal */
    retry?: Tristate
}
class UmountLocal {
    /* Properties of Guestfs-1.0.Guestfs.UmountLocal */
    retry: Tristate
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
    connect(sigName: "notify::retry", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::retry", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::retry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::retry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::retry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UmountLocal_ConstructProps)
    _init (config?: UmountLocal_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UmountLocal
    static $gtype: GObject.Type
}
interface XfsAdmin_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.XfsAdmin */
    extunwritten?: Tristate
    imgfile?: Tristate
    label?: string
    lazycounter?: Tristate
    projid32bit?: Tristate
    uuid?: string
    v2log?: Tristate
}
class XfsAdmin {
    /* Properties of Guestfs-1.0.Guestfs.XfsAdmin */
    extunwritten: Tristate
    imgfile: Tristate
    label: string
    lazycounter: Tristate
    projid32bit: Tristate
    uuid: string
    v2log: Tristate
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
    connect(sigName: "notify::extunwritten", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extunwritten", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::extunwritten", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::extunwritten", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::extunwritten", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::imgfile", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imgfile", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::imgfile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::imgfile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::imgfile", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lazycounter", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lazycounter", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lazycounter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lazycounter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lazycounter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::projid32bit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::projid32bit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::projid32bit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::projid32bit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::projid32bit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uuid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::v2log", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v2log", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::v2log", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::v2log", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::v2log", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: XfsAdmin_ConstructProps)
    _init (config?: XfsAdmin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): XfsAdmin
    static $gtype: GObject.Type
}
interface XfsGrowfs_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.XfsGrowfs */
    datasec?: Tristate
    datasize?: number
    logsec?: Tristate
    logsize?: number
    maxpct?: number
    rtextsize?: number
    rtsec?: Tristate
    rtsize?: number
}
class XfsGrowfs {
    /* Properties of Guestfs-1.0.Guestfs.XfsGrowfs */
    datasec: Tristate
    datasize: number
    logsec: Tristate
    logsize: number
    maxpct: number
    rtextsize: number
    rtsec: Tristate
    rtsize: number
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
    connect(sigName: "notify::datasec", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::datasec", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::datasec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::datasec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::datasec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::datasize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::datasize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::datasize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::datasize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::datasize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::logsec", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logsec", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::logsec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::logsec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::logsec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::logsize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logsize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::logsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::logsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::logsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::maxpct", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maxpct", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::maxpct", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::maxpct", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::maxpct", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rtextsize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rtextsize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rtextsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rtextsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rtextsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rtsec", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rtsec", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rtsec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rtsec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rtsec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rtsize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rtsize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rtsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rtsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rtsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: XfsGrowfs_ConstructProps)
    _init (config?: XfsGrowfs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): XfsGrowfs
    static $gtype: GObject.Type
}
interface XfsRepair_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Guestfs-1.0.Guestfs.XfsRepair */
    agstride?: number
    bhashsize?: number
    forcegeometry?: Tristate
    forcelogzero?: Tristate
    ihashsize?: number
    logdev?: string
    maxmem?: number
    nomodify?: Tristate
    noprefetch?: Tristate
    rtdev?: string
}
class XfsRepair {
    /* Properties of Guestfs-1.0.Guestfs.XfsRepair */
    agstride: number
    bhashsize: number
    forcegeometry: Tristate
    forcelogzero: Tristate
    ihashsize: number
    logdev: string
    maxmem: number
    nomodify: Tristate
    noprefetch: Tristate
    rtdev: string
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
    connect(sigName: "notify::agstride", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::agstride", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::agstride", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::agstride", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::agstride", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bhashsize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bhashsize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bhashsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bhashsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bhashsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::forcegeometry", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::forcegeometry", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::forcegeometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::forcegeometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::forcegeometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::forcelogzero", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::forcelogzero", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::forcelogzero", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::forcelogzero", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::forcelogzero", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ihashsize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ihashsize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ihashsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ihashsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ihashsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::logdev", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logdev", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::logdev", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::logdev", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::logdev", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::maxmem", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maxmem", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::maxmem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::maxmem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::maxmem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nomodify", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nomodify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nomodify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nomodify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nomodify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::noprefetch", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::noprefetch", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::noprefetch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::noprefetch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::noprefetch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rtdev", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rtdev", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rtdev", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rtdev", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rtdev", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: XfsRepair_ConstructProps)
    _init (config?: XfsRepair_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): XfsRepair
    static $gtype: GObject.Type
}
abstract class AddDomainClass {
    /* Fields of Guestfs-1.0.Guestfs.AddDomainClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class AddDomainPrivate {
    static name: string
}
abstract class AddDriveClass {
    /* Fields of Guestfs-1.0.Guestfs.AddDriveClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class AddDrivePrivate {
    static name: string
}
abstract class AddDriveScratchClass {
    /* Fields of Guestfs-1.0.Guestfs.AddDriveScratchClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class AddDriveScratchPrivate {
    static name: string
}
abstract class AddLibvirtDomClass {
    /* Fields of Guestfs-1.0.Guestfs.AddLibvirtDomClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class AddLibvirtDomPrivate {
    static name: string
}
class Application {
    /* Fields of Guestfs-1.0.Guestfs.Application */
    readonly appName: string
    readonly appDisplayName: string
    readonly appEpoch: number
    readonly appVersion: string
    readonly appRelease: string
    readonly appInstallPath: string
    readonly appTransPath: string
    readonly appPublisher: string
    readonly appUrl: string
    readonly appSourcePackage: string
    readonly appSummary: string
    readonly appDescription: string
    static name: string
}
class Application2 {
    /* Fields of Guestfs-1.0.Guestfs.Application2 */
    readonly app2Name: string
    readonly app2DisplayName: string
    readonly app2Epoch: number
    readonly app2Version: string
    readonly app2Release: string
    readonly app2Arch: string
    readonly app2InstallPath: string
    readonly app2TransPath: string
    readonly app2Publisher: string
    readonly app2Url: string
    readonly app2SourcePackage: string
    readonly app2Summary: string
    readonly app2Description: string
    readonly app2Spare1: string
    readonly app2Spare2: string
    readonly app2Spare3: string
    readonly app2Spare4: string
    static name: string
}
abstract class AugTransformClass {
    /* Fields of Guestfs-1.0.Guestfs.AugTransformClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class AugTransformPrivate {
    static name: string
}
class BTRFSBalance {
    /* Fields of Guestfs-1.0.Guestfs.BTRFSBalance */
    readonly btrfsbalanceStatus: string
    readonly btrfsbalanceTotal: number
    readonly btrfsbalanceBalanced: number
    readonly btrfsbalanceConsidered: number
    readonly btrfsbalanceLeft: number
    static name: string
}
abstract class BTRFSFilesystemDefragmentClass {
    /* Fields of Guestfs-1.0.Guestfs.BTRFSFilesystemDefragmentClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class BTRFSFilesystemDefragmentPrivate {
    static name: string
}
abstract class BTRFSFilesystemResizeClass {
    /* Fields of Guestfs-1.0.Guestfs.BTRFSFilesystemResizeClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class BTRFSFilesystemResizePrivate {
    static name: string
}
abstract class BTRFSImageClass {
    /* Fields of Guestfs-1.0.Guestfs.BTRFSImageClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class BTRFSImagePrivate {
    static name: string
}
class BTRFSQgroup {
    /* Fields of Guestfs-1.0.Guestfs.BTRFSQgroup */
    readonly btrfsqgroupId: string
    readonly btrfsqgroupRfer: number
    readonly btrfsqgroupExcl: number
    static name: string
}
class BTRFSScrub {
    /* Fields of Guestfs-1.0.Guestfs.BTRFSScrub */
    readonly btrfsscrubDataExtentsScrubbed: number
    readonly btrfsscrubTreeExtentsScrubbed: number
    readonly btrfsscrubDataBytesScrubbed: number
    readonly btrfsscrubTreeBytesScrubbed: number
    readonly btrfsscrubReadErrors: number
    readonly btrfsscrubCsumErrors: number
    readonly btrfsscrubVerifyErrors: number
    readonly btrfsscrubNoCsum: number
    readonly btrfsscrubCsumDiscards: number
    readonly btrfsscrubSuperErrors: number
    readonly btrfsscrubMallocErrors: number
    readonly btrfsscrubUncorrectableErrors: number
    readonly btrfsscrubUnverifiedErrors: number
    readonly btrfsscrubCorrectedErrors: number
    readonly btrfsscrubLastPhysical: number
    static name: string
}
class BTRFSSubvolume {
    /* Fields of Guestfs-1.0.Guestfs.BTRFSSubvolume */
    readonly btrfssubvolumeId: number
    readonly btrfssubvolumeTopLevelId: number
    readonly btrfssubvolumePath: string
    static name: string
}
abstract class BTRFSSubvolumeCreateClass {
    /* Fields of Guestfs-1.0.Guestfs.BTRFSSubvolumeCreateClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class BTRFSSubvolumeCreatePrivate {
    static name: string
}
abstract class BTRFSSubvolumeSnapshotClass {
    /* Fields of Guestfs-1.0.Guestfs.BTRFSSubvolumeSnapshotClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class BTRFSSubvolumeSnapshotPrivate {
    static name: string
}
abstract class BtrfsFsckClass {
    /* Fields of Guestfs-1.0.Guestfs.BtrfsFsckClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class BtrfsFsckPrivate {
    static name: string
}
abstract class CompressDeviceOutClass {
    /* Fields of Guestfs-1.0.Guestfs.CompressDeviceOutClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class CompressDeviceOutPrivate {
    static name: string
}
abstract class CompressOutClass {
    /* Fields of Guestfs-1.0.Guestfs.CompressOutClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class CompressOutPrivate {
    static name: string
}
abstract class CopyAttributesClass {
    /* Fields of Guestfs-1.0.Guestfs.CopyAttributesClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class CopyAttributesPrivate {
    static name: string
}
abstract class CopyDeviceToDeviceClass {
    /* Fields of Guestfs-1.0.Guestfs.CopyDeviceToDeviceClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class CopyDeviceToDevicePrivate {
    static name: string
}
abstract class CopyDeviceToFileClass {
    /* Fields of Guestfs-1.0.Guestfs.CopyDeviceToFileClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class CopyDeviceToFilePrivate {
    static name: string
}
abstract class CopyFileToDeviceClass {
    /* Fields of Guestfs-1.0.Guestfs.CopyFileToDeviceClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class CopyFileToDevicePrivate {
    static name: string
}
abstract class CopyFileToFileClass {
    /* Fields of Guestfs-1.0.Guestfs.CopyFileToFileClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class CopyFileToFilePrivate {
    static name: string
}
abstract class CpioOutClass {
    /* Fields of Guestfs-1.0.Guestfs.CpioOutClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class CpioOutPrivate {
    static name: string
}
class Dirent {
    /* Fields of Guestfs-1.0.Guestfs.Dirent */
    readonly ino: number
    readonly ftyp: number
    readonly name: string
    static name: string
}
abstract class DiskCreateClass {
    /* Fields of Guestfs-1.0.Guestfs.DiskCreateClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class DiskCreatePrivate {
    static name: string
}
abstract class DownloadBlocksClass {
    /* Fields of Guestfs-1.0.Guestfs.DownloadBlocksClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class DownloadBlocksPrivate {
    static name: string
}
abstract class E2fsckClass {
    /* Fields of Guestfs-1.0.Guestfs.E2fsckClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class E2fsckPrivate {
    static name: string
}
abstract class FstrimClass {
    /* Fields of Guestfs-1.0.Guestfs.FstrimClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class FstrimPrivate {
    static name: string
}
abstract class GlobExpandClass {
    /* Fields of Guestfs-1.0.Guestfs.GlobExpandClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class GlobExpandPrivate {
    static name: string
}
abstract class GrepClass {
    /* Fields of Guestfs-1.0.Guestfs.GrepClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class GrepPrivate {
    static name: string
}
class HivexNode {
    /* Fields of Guestfs-1.0.Guestfs.HivexNode */
    readonly hivexNodeH: number
    static name: string
}
abstract class HivexOpenClass {
    /* Fields of Guestfs-1.0.Guestfs.HivexOpenClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class HivexOpenPrivate {
    static name: string
}
class HivexValue {
    /* Fields of Guestfs-1.0.Guestfs.HivexValue */
    readonly hivexValueH: number
    static name: string
}
class INotifyEvent {
    /* Fields of Guestfs-1.0.Guestfs.INotifyEvent */
    readonly inWd: number
    readonly inMask: number
    readonly inCookie: number
    readonly inName: string
    static name: string
}
class ISOInfo {
    /* Fields of Guestfs-1.0.Guestfs.ISOInfo */
    readonly isoSystemId: string
    readonly isoVolumeId: string
    readonly isoVolumeSpaceSize: number
    readonly isoVolumeSetSize: number
    readonly isoVolumeSequenceNumber: number
    readonly isoLogicalBlockSize: number
    readonly isoVolumeSetId: string
    readonly isoPublisherId: string
    readonly isoDataPreparerId: string
    readonly isoApplicationId: string
    readonly isoCopyrightFileId: string
    readonly isoAbstractFileId: string
    readonly isoBibliographicFileId: string
    readonly isoVolumeCreationT: number
    readonly isoVolumeModificationT: number
    readonly isoVolumeExpirationT: number
    readonly isoVolumeEffectiveT: number
    static name: string
}
abstract class InspectGetIconClass {
    /* Fields of Guestfs-1.0.Guestfs.InspectGetIconClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class InspectGetIconPrivate {
    static name: string
}
class IntBool {
    /* Fields of Guestfs-1.0.Guestfs.IntBool */
    readonly i: number
    readonly b: number
    static name: string
}
abstract class InternalTest63OptargsClass {
    /* Fields of Guestfs-1.0.Guestfs.InternalTest63OptargsClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class InternalTest63OptargsPrivate {
    static name: string
}
abstract class InternalTestClass {
    /* Fields of Guestfs-1.0.Guestfs.InternalTestClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class InternalTestOnlyOptargsClass {
    /* Fields of Guestfs-1.0.Guestfs.InternalTestOnlyOptargsClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class InternalTestOnlyOptargsPrivate {
    static name: string
}
class InternalTestPrivate {
    static name: string
}
abstract class IsBlockdevClass {
    /* Fields of Guestfs-1.0.Guestfs.IsBlockdevClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class IsBlockdevPrivate {
    static name: string
}
abstract class IsChardevClass {
    /* Fields of Guestfs-1.0.Guestfs.IsChardevClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class IsChardevPrivate {
    static name: string
}
abstract class IsDirClass {
    /* Fields of Guestfs-1.0.Guestfs.IsDirClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class IsDirPrivate {
    static name: string
}
abstract class IsFifoClass {
    /* Fields of Guestfs-1.0.Guestfs.IsFifoClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class IsFifoPrivate {
    static name: string
}
abstract class IsFileClass {
    /* Fields of Guestfs-1.0.Guestfs.IsFileClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class IsFilePrivate {
    static name: string
}
abstract class IsSocketClass {
    /* Fields of Guestfs-1.0.Guestfs.IsSocketClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class IsSocketPrivate {
    static name: string
}
class LV {
    /* Fields of Guestfs-1.0.Guestfs.LV */
    readonly lvName: string
    readonly lvUuid: number[]
    readonly lvAttr: string
    readonly lvMajor: number
    readonly lvMinor: number
    readonly lvKernelMajor: number
    readonly lvKernelMinor: number
    readonly lvSize: number
    readonly segCount: number
    readonly origin: string
    readonly snapPercent: number
    readonly copyPercent: number
    readonly movePv: string
    readonly lvTags: string
    readonly mirrorLog: string
    readonly modules: string
    static name: string
}
abstract class MDCreateClass {
    /* Fields of Guestfs-1.0.Guestfs.MDCreateClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class MDCreatePrivate {
    static name: string
}
class MDStat {
    /* Fields of Guestfs-1.0.Guestfs.MDStat */
    readonly mdstatDevice: string
    readonly mdstatIndex: number
    readonly mdstatFlags: string
    static name: string
}
abstract class Mke2fsClass {
    /* Fields of Guestfs-1.0.Guestfs.Mke2fsClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class Mke2fsPrivate {
    static name: string
}
abstract class MkfsBtrfsClass {
    /* Fields of Guestfs-1.0.Guestfs.MkfsBtrfsClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class MkfsBtrfsPrivate {
    static name: string
}
abstract class MkfsClass {
    /* Fields of Guestfs-1.0.Guestfs.MkfsClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class MkfsPrivate {
    static name: string
}
abstract class MksquashfsClass {
    /* Fields of Guestfs-1.0.Guestfs.MksquashfsClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class MksquashfsPrivate {
    static name: string
}
abstract class MkswapClass {
    /* Fields of Guestfs-1.0.Guestfs.MkswapClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class MkswapPrivate {
    static name: string
}
abstract class MktempClass {
    /* Fields of Guestfs-1.0.Guestfs.MktempClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class MktempPrivate {
    static name: string
}
abstract class Mount9PClass {
    /* Fields of Guestfs-1.0.Guestfs.Mount9PClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class Mount9PPrivate {
    static name: string
}
abstract class MountLocalClass {
    /* Fields of Guestfs-1.0.Guestfs.MountLocalClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class MountLocalPrivate {
    static name: string
}
abstract class NTFSResizeOptsClass {
    /* Fields of Guestfs-1.0.Guestfs.NTFSResizeOptsClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class NTFSResizeOptsPrivate {
    static name: string
}
abstract class NtfscloneOutClass {
    /* Fields of Guestfs-1.0.Guestfs.NtfscloneOutClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class NtfscloneOutPrivate {
    static name: string
}
abstract class NtfsfixClass {
    /* Fields of Guestfs-1.0.Guestfs.NtfsfixClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class NtfsfixPrivate {
    static name: string
}
class PV {
    /* Fields of Guestfs-1.0.Guestfs.PV */
    readonly pvName: string
    readonly pvUuid: number[]
    readonly pvFmt: string
    readonly pvSize: number
    readonly devSize: number
    readonly pvFree: number
    readonly pvUsed: number
    readonly pvAttr: string
    readonly pvPeCount: number
    readonly pvPeAllocCount: number
    readonly pvTags: string
    readonly peStart: number
    readonly pvMdaCount: number
    readonly pvMdaFree: number
    static name: string
}
class Partition {
    /* Fields of Guestfs-1.0.Guestfs.Partition */
    readonly partNum: number
    readonly partStart: number
    readonly partEnd: number
    readonly partSize: number
    static name: string
}
abstract class RemountClass {
    /* Fields of Guestfs-1.0.Guestfs.RemountClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class RemountPrivate {
    static name: string
}
abstract class RsyncClass {
    /* Fields of Guestfs-1.0.Guestfs.RsyncClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class RsyncInClass {
    /* Fields of Guestfs-1.0.Guestfs.RsyncInClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class RsyncInPrivate {
    static name: string
}
abstract class RsyncOutClass {
    /* Fields of Guestfs-1.0.Guestfs.RsyncOutClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class RsyncOutPrivate {
    static name: string
}
class RsyncPrivate {
    static name: string
}
abstract class SelinuxRelabelClass {
    /* Fields of Guestfs-1.0.Guestfs.SelinuxRelabelClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class SelinuxRelabelPrivate {
    static name: string
}
abstract class SessionClass {
    /* Fields of Guestfs-1.0.Guestfs.SessionClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class SessionEventParams {
    /* Fields of Guestfs-1.0.Guestfs.SessionEventParams */
    readonly event: SessionEvent
    readonly flags: number
    readonly buf: Uint8Array
    readonly array: number[]
    readonly arrayLen: number
    static name: string
}
class SessionPrivate {
    static name: string
}
abstract class SetE2attrsClass {
    /* Fields of Guestfs-1.0.Guestfs.SetE2attrsClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class SetE2attrsPrivate {
    static name: string
}
class Stat {
    /* Fields of Guestfs-1.0.Guestfs.Stat */
    readonly dev: number
    readonly ino: number
    readonly mode: number
    readonly nlink: number
    readonly uid: number
    readonly gid: number
    readonly rdev: number
    readonly size: number
    readonly blksize: number
    readonly blocks: number
    readonly atime: number
    readonly mtime: number
    readonly ctime: number
    static name: string
}
class StatNS {
    /* Fields of Guestfs-1.0.Guestfs.StatNS */
    readonly stDev: number
    readonly stIno: number
    readonly stMode: number
    readonly stNlink: number
    readonly stUid: number
    readonly stGid: number
    readonly stRdev: number
    readonly stSize: number
    readonly stBlksize: number
    readonly stBlocks: number
    readonly stAtimeSec: number
    readonly stAtimeNsec: number
    readonly stMtimeSec: number
    readonly stMtimeNsec: number
    readonly stCtimeSec: number
    readonly stCtimeNsec: number
    readonly stSpare1: number
    readonly stSpare2: number
    readonly stSpare3: number
    readonly stSpare4: number
    readonly stSpare5: number
    readonly stSpare6: number
    static name: string
}
class StatVFS {
    /* Fields of Guestfs-1.0.Guestfs.StatVFS */
    readonly bsize: number
    readonly frsize: number
    readonly blocks: number
    readonly bfree: number
    readonly bavail: number
    readonly files: number
    readonly ffree: number
    readonly favail: number
    readonly fsid: number
    readonly flag: number
    readonly namemax: number
    static name: string
}
abstract class SyslinuxClass {
    /* Fields of Guestfs-1.0.Guestfs.SyslinuxClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class SyslinuxPrivate {
    static name: string
}
class TSKDirent {
    /* Fields of Guestfs-1.0.Guestfs.TSKDirent */
    readonly tskInode: number
    readonly tskType: number
    readonly tskSize: number
    readonly tskName: string
    readonly tskFlags: number
    readonly tskAtimeSec: number
    readonly tskAtimeNsec: number
    readonly tskMtimeSec: number
    readonly tskMtimeNsec: number
    readonly tskCtimeSec: number
    readonly tskCtimeNsec: number
    readonly tskCrtimeSec: number
    readonly tskCrtimeNsec: number
    readonly tskNlink: number
    readonly tskLink: string
    readonly tskSpare1: number
    static name: string
}
abstract class TarInClass {
    /* Fields of Guestfs-1.0.Guestfs.TarInClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class TarInPrivate {
    static name: string
}
abstract class TarOutClass {
    /* Fields of Guestfs-1.0.Guestfs.TarOutClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class TarOutPrivate {
    static name: string
}
abstract class Tune2FSClass {
    /* Fields of Guestfs-1.0.Guestfs.Tune2FSClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class Tune2FSPrivate {
    static name: string
}
class UTSName {
    /* Fields of Guestfs-1.0.Guestfs.UTSName */
    readonly utsSysname: string
    readonly utsRelease: string
    readonly utsVersion: string
    readonly utsMachine: string
    static name: string
}
abstract class UmountClass {
    /* Fields of Guestfs-1.0.Guestfs.UmountClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class UmountLocalClass {
    /* Fields of Guestfs-1.0.Guestfs.UmountLocalClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class UmountLocalPrivate {
    static name: string
}
class UmountPrivate {
    static name: string
}
class VG {
    /* Fields of Guestfs-1.0.Guestfs.VG */
    readonly vgName: string
    readonly vgUuid: number[]
    readonly vgFmt: string
    readonly vgAttr: string
    readonly vgSize: number
    readonly vgFree: number
    readonly vgSysid: string
    readonly vgExtentSize: number
    readonly vgExtentCount: number
    readonly vgFreeCount: number
    readonly maxLv: number
    readonly maxPv: number
    readonly pvCount: number
    readonly lvCount: number
    readonly snapCount: number
    readonly vgSeqno: number
    readonly vgTags: string
    readonly vgMdaCount: number
    readonly vgMdaFree: number
    static name: string
}
class Version {
    /* Fields of Guestfs-1.0.Guestfs.Version */
    readonly major: number
    readonly minor: number
    readonly release: number
    readonly extra: string
    static name: string
}
class XAttr {
    /* Fields of Guestfs-1.0.Guestfs.XAttr */
    readonly attrname: string
    readonly attrval: Uint8Array
    static name: string
}
class XFSInfo {
    /* Fields of Guestfs-1.0.Guestfs.XFSInfo */
    readonly xfsMntpoint: string
    readonly xfsInodesize: number
    readonly xfsAgcount: number
    readonly xfsAgsize: number
    readonly xfsSectsize: number
    readonly xfsAttr: number
    readonly xfsBlocksize: number
    readonly xfsDatablocks: number
    readonly xfsImaxpct: number
    readonly xfsSunit: number
    readonly xfsSwidth: number
    readonly xfsDirversion: number
    readonly xfsDirblocksize: number
    readonly xfsCimode: number
    readonly xfsLogname: string
    readonly xfsLogblocksize: number
    readonly xfsLogblocks: number
    readonly xfsLogversion: number
    readonly xfsLogsectsize: number
    readonly xfsLogsunit: number
    readonly xfsLazycount: number
    readonly xfsRtname: string
    readonly xfsRtextsize: number
    readonly xfsRtblocks: number
    readonly xfsRtextents: number
    static name: string
}
abstract class XfsAdminClass {
    /* Fields of Guestfs-1.0.Guestfs.XfsAdminClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class XfsAdminPrivate {
    static name: string
}
abstract class XfsGrowfsClass {
    /* Fields of Guestfs-1.0.Guestfs.XfsGrowfsClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class XfsGrowfsPrivate {
    static name: string
}
abstract class XfsRepairClass {
    /* Fields of Guestfs-1.0.Guestfs.XfsRepairClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class XfsRepairPrivate {
    static name: string
}
class YaraDetection {
    /* Fields of Guestfs-1.0.Guestfs.YaraDetection */
    readonly yaraName: string
    readonly yaraRule: string
    static name: string
}
}
export default Guestfs;