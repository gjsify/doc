/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GitgExt-1.0
 */

import type Gitg from './Gitg-1.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gee from './Gee-0.8';
import type Gio from './Gio-2.0';
import type Gdk from './Gdk-3.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Ggit from './Ggit-1.0';
import type Gtk from './Gtk-3.0';
import type xlib from './xlib-2.0';
import type Atk from './Atk-1.0';

export namespace GitgExt {

enum SelectionMode {
    NORMAL,
    SELECTION,
}
enum ExternalChangeHint {
    NONE,
    REFS,
    INDEX,
}
interface ForeachCommitSelectionFunc {
    (object: Ggit.Commit): boolean
}
interface MessageCallback {
    (message: Message): void
}
interface RefNameEditingDone {
    (newName: string, cancelled: boolean): void
}
interface Action_ConstructProps extends UIElement_ConstructProps {
    /* Constructor properties of GitgExt-1.0.GitgExt.UIElement */
    application?: Application
}
class Action {
    /* Properties of GitgExt-1.0.GitgExt.UIElement */
    application: Application
    readonly id: string
    readonly displayName: string
    readonly description: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.Action */
    populateMenu(menu: Gtk.Menu): void
    /* Methods of GitgExt-1.0.GitgExt.UIElement */
    negotiateOrder(other: UIElement): number
    getApplication(): Application | null
    setApplication(value?: Application | null): void
    getId(): string
    getDisplayName(): string
    getDescription(): string
    getIcon(): string | null
    getWidget(): Gtk.Widget | null
    getShortcut(): number | null
    getAvailable(): boolean
    getEnabled(): boolean
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
    /* Signals of GitgExt-1.0.GitgExt.UIElement */
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
    /* Signals of GitgExt-1.0.GitgExt.UIElement */
    connect(sigName: "activate", callback: (() => void)): number
    on(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate"): void
    connect(sigName: "notify::application", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Action_ConstructProps)
    _init (config?: Action_ConstructProps): void
    static $gtype: GObject.Type
}
interface Activity_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GitgExt-1.0.GitgExt.UIElement */
    application?: Application
}
class Activity {
    /* Properties of GitgExt-1.0.GitgExt.UIElement */
    application: Application
    readonly id: string
    readonly displayName: string
    readonly description: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.Activity */
    isDefaultFor(action: string): boolean
    onKeyPressed(event: Gdk.EventKey): boolean
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
    /* Methods of GitgExt-1.0.GitgExt.UIElement */
    negotiateOrder(other: UIElement): number
    getApplication(): Application | null
    setApplication(value?: Application | null): void
    getId(): string
    getDisplayName(): string
    getDescription(): string
    getIcon(): string | null
    getWidget(): Gtk.Widget | null
    getShortcut(): number | null
    getAvailable(): boolean
    getEnabled(): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GitgExt-1.0.GitgExt.UIElement */
    connect(sigName: "activate", callback: (() => void)): number
    on(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate"): void
    connect(sigName: "notify::application", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Activity_ConstructProps)
    _init (config?: Activity_ConstructProps): void
    static $gtype: GObject.Type
}
interface Application_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GitgExt-1.0.GitgExt.Application */
    repository?: Gitg.Repository
    busy?: boolean
}
class Application {
    /* Properties of GitgExt-1.0.GitgExt.Application */
    repository: Gitg.Repository
    readonly messageBus: MessageBus
    readonly currentActivity: Activity
    readonly environment: Gee.Map
    readonly notifications: Notifications
    busy: boolean
    readonly remoteLookup: RemoteLookup
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.Application */
    getVerifiedCommitter(): Ggit.Signature | null
    getActivityById(id: string): Activity | null
    setActivityById(id: string): Activity | null
    userQuery(query: UserQuery): void
    userQueryAsync(query: UserQuery, callback?: Gio.AsyncReadyCallback | null): void
    userQueryFinish(res: Gio.AsyncResult): Gtk.ResponseType
    showInfobar(primaryMsg: string, secondaryMsg: string, type: Gtk.MessageType): void
    openNew(repository: Ggit.Repository, hint?: string | null): Application
    openRepository(path: Gio.File): void
    getRepository(): Gitg.Repository | null
    setRepository(value?: Gitg.Repository | null): void
    getMessageBus(): MessageBus
    getCurrentActivity(): Activity | null
    getEnvironment(): Gee.Map
    getNotifications(): Notifications
    getBusy(): boolean
    setBusy(value: boolean): void
    getRemoteLookup(): RemoteLookup
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
    /* Signals of GitgExt-1.0.GitgExt.Application */
    connect(sigName: "repository-changed-externally", callback: ((hint: ExternalChangeHint) => void)): number
    on(sigName: "repository-changed-externally", callback: (hint: ExternalChangeHint) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "repository-changed-externally", callback: (hint: ExternalChangeHint) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "repository-changed-externally", callback: (hint: ExternalChangeHint) => void): NodeJS.EventEmitter
    emit(sigName: "repository-changed-externally", hint: ExternalChangeHint): void
    connect(sigName: "repository-commits-changed", callback: (() => void)): number
    on(sigName: "repository-commits-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "repository-commits-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "repository-commits-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "repository-commits-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::repository", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repository", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::repository", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::repository", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::repository", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message-bus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-bus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-activity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-activity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-activity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-activity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-activity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::environment", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::environment", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::environment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::environment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::environment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::notifications", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notifications", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::notifications", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::notifications", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::notifications", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::busy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::busy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remote-lookup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-lookup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remote-lookup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remote-lookup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remote-lookup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Application_ConstructProps)
    _init (config?: Application_ConstructProps): void
    static $gtype: GObject.Type
}
interface CommandLine_ConstructProps extends GObject.Object_ConstructProps {
}
class CommandLine {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.CommandLine */
    getOptionGroup(): GLib.OptionGroup
    parseFinished(): void
    apply(application: Application): void
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
    constructor (config?: CommandLine_ConstructProps)
    _init (config?: CommandLine_ConstructProps): void
    static $gtype: GObject.Type
}
interface CommitAction_ConstructProps extends Action_ConstructProps {
    /* Constructor properties of GitgExt-1.0.GitgExt.CommitAction */
    actionInterface?: RefActionInterface
    commit?: Gitg.Commit
    /* Constructor properties of GitgExt-1.0.GitgExt.UIElement */
    application?: Application
}
class CommitAction {
    /* Properties of GitgExt-1.0.GitgExt.CommitAction */
    actionInterface: RefActionInterface
    commit: Gitg.Commit
    /* Properties of GitgExt-1.0.GitgExt.UIElement */
    application: Application
    readonly id: string
    readonly displayName: string
    readonly description: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.CommitAction */
    getActionInterface(): RefActionInterface
    setActionInterface(value: RefActionInterface): void
    getCommit(): Gitg.Commit
    setCommit(value: Gitg.Commit): void
    /* Methods of GitgExt-1.0.GitgExt.Action */
    populateMenu(menu: Gtk.Menu): void
    /* Methods of GitgExt-1.0.GitgExt.UIElement */
    negotiateOrder(other: UIElement): number
    getApplication(): Application | null
    setApplication(value?: Application | null): void
    getId(): string
    getDisplayName(): string
    getDescription(): string
    getIcon(): string | null
    getWidget(): Gtk.Widget | null
    getShortcut(): number | null
    getAvailable(): boolean
    getEnabled(): boolean
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
    /* Signals of GitgExt-1.0.GitgExt.CommitAction */
    connect(sigName: "finished", callback: (() => void)): number
    on(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "finished"): void
    /* Signals of GitgExt-1.0.GitgExt.UIElement */
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
    /* Signals of GitgExt-1.0.GitgExt.UIElement */
    connect(sigName: "activate", callback: (() => void)): number
    on(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate"): void
    connect(sigName: "notify::action-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::action-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::action-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::action-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::commit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::commit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CommitAction_ConstructProps)
    _init (config?: CommitAction_ConstructProps): void
    static $gtype: GObject.Type
}
interface HistoryPanel_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GitgExt-1.0.GitgExt.HistoryPanel */
    history?: History
    /* Constructor properties of GitgExt-1.0.GitgExt.UIElement */
    application?: Application
}
class HistoryPanel {
    /* Properties of GitgExt-1.0.GitgExt.HistoryPanel */
    history: History
    /* Properties of GitgExt-1.0.GitgExt.UIElement */
    application: Application
    readonly id: string
    readonly displayName: string
    readonly description: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.HistoryPanel */
    getHistory(): History | null
    setHistory(value?: History | null): void
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
    /* Methods of GitgExt-1.0.GitgExt.UIElement */
    negotiateOrder(other: UIElement): number
    getApplication(): Application | null
    setApplication(value?: Application | null): void
    getId(): string
    getDisplayName(): string
    getDescription(): string
    getIcon(): string | null
    getWidget(): Gtk.Widget | null
    getShortcut(): number | null
    getAvailable(): boolean
    getEnabled(): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GitgExt-1.0.GitgExt.UIElement */
    connect(sigName: "activate", callback: (() => void)): number
    on(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate"): void
    connect(sigName: "notify::history", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::history", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HistoryPanel_ConstructProps)
    _init (config?: HistoryPanel_ConstructProps): void
    static $gtype: GObject.Type
}
interface History_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GitgExt-1.0.GitgExt.UIElement */
    application?: Application
}
class History {
    /* Properties of GitgExt-1.0.GitgExt.UIElement */
    application: Application
    readonly id: string
    readonly displayName: string
    readonly description: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.History */
    foreachSelected(func: ForeachCommitSelectionFunc): void
    select(commit: Gitg.Commit): void
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
    /* Methods of GitgExt-1.0.GitgExt.Activity */
    isDefaultFor(action: string): boolean
    onKeyPressed(event: Gdk.EventKey): boolean
    /* Methods of GitgExt-1.0.GitgExt.UIElement */
    negotiateOrder(other: UIElement): number
    getApplication(): Application | null
    setApplication(value?: Application | null): void
    getId(): string
    getDisplayName(): string
    getDescription(): string
    getIcon(): string | null
    getWidget(): Gtk.Widget | null
    getShortcut(): number | null
    getAvailable(): boolean
    getEnabled(): boolean
    /* Signals of GitgExt-1.0.GitgExt.History */
    connect(sigName: "selection-changed", callback: (() => void)): number
    on(sigName: "selection-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "selection-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GitgExt-1.0.GitgExt.UIElement */
    connect(sigName: "activate", callback: (() => void)): number
    on(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate"): void
    connect(sigName: "notify::application", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: History_ConstructProps)
    _init (config?: History_ConstructProps): void
    static $gtype: GObject.Type
}
interface Notification_ConstructProps extends GObject.Object_ConstructProps {
}
class Notification {
    /* Properties of GitgExt-1.0.GitgExt.Notification */
    readonly widget: Gtk.Widget
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.Notification */
    getWidget(): Gtk.Widget | null
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
    /* Signals of GitgExt-1.0.GitgExt.Notification */
    connect(sigName: "close", callback: ((delay: number) => void)): number
    on(sigName: "close", callback: (delay: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "close", callback: (delay: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "close", callback: (delay: number) => void): NodeJS.EventEmitter
    emit(sigName: "close", delay: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::widget", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::widget", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Notification_ConstructProps)
    _init (config?: Notification_ConstructProps): void
    static $gtype: GObject.Type
}
interface Notifications_ConstructProps extends GObject.Object_ConstructProps {
}
class Notifications {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.Notifications */
    add(notification: Notification): void
    remove(notification: Notification, delay: number): void
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
    constructor (config?: Notifications_ConstructProps)
    _init (config?: Notifications_ConstructProps): void
    static $gtype: GObject.Type
}
interface Preferences_ConstructProps extends GObject.Object_ConstructProps {
}
class Preferences {
    /* Properties of GitgExt-1.0.GitgExt.Preferences */
    readonly id: string
    readonly displayName: string
    readonly widget: Gtk.Widget
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.Preferences */
    getId(): string
    getDisplayName(): string
    getWidget(): Gtk.Widget
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
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::widget", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::widget", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Preferences_ConstructProps)
    _init (config?: Preferences_ConstructProps): void
    static $gtype: GObject.Type
}
interface RefActionInterface_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GitgExt-1.0.GitgExt.RefActionInterface */
    application?: Application
}
class RefActionInterface {
    /* Properties of GitgExt-1.0.GitgExt.RefActionInterface */
    application: Application
    readonly references: Gee.List
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.RefActionInterface */
    addRef(reference: Gitg.Ref): void
    removeRef(reference: Gitg.Ref): void
    replaceRef(oldRef: Gitg.Ref, newRef: Gitg.Ref): void
    setBusy(reference: Gitg.Ref, busy: boolean): void
    editRefName(reference: Gitg.Ref, callback: RefNameEditingDone): void
    refresh(): void
    getApplication(): Application
    setApplication(value: Application): void
    getReferences(): Gee.List
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
    connect(sigName: "notify::application", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::references", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::references", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::references", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::references", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::references", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RefActionInterface_ConstructProps)
    _init (config?: RefActionInterface_ConstructProps): void
    static $gtype: GObject.Type
}
interface RefAction_ConstructProps extends Action_ConstructProps {
    /* Constructor properties of GitgExt-1.0.GitgExt.RefAction */
    actionInterface?: RefActionInterface
    reference?: Gitg.Ref
    /* Constructor properties of GitgExt-1.0.GitgExt.UIElement */
    application?: Application
}
class RefAction {
    /* Properties of GitgExt-1.0.GitgExt.RefAction */
    actionInterface: RefActionInterface
    reference: Gitg.Ref
    /* Properties of GitgExt-1.0.GitgExt.UIElement */
    application: Application
    readonly id: string
    readonly displayName: string
    readonly description: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.RefAction */
    getActionInterface(): RefActionInterface
    setActionInterface(value: RefActionInterface): void
    getReference(): Gitg.Ref
    setReference(value: Gitg.Ref): void
    /* Methods of GitgExt-1.0.GitgExt.Action */
    populateMenu(menu: Gtk.Menu): void
    /* Methods of GitgExt-1.0.GitgExt.UIElement */
    negotiateOrder(other: UIElement): number
    getApplication(): Application | null
    setApplication(value?: Application | null): void
    getId(): string
    getDisplayName(): string
    getDescription(): string
    getIcon(): string | null
    getWidget(): Gtk.Widget | null
    getShortcut(): number | null
    getAvailable(): boolean
    getEnabled(): boolean
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
    /* Signals of GitgExt-1.0.GitgExt.UIElement */
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
    /* Signals of GitgExt-1.0.GitgExt.UIElement */
    connect(sigName: "activate", callback: (() => void)): number
    on(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate"): void
    connect(sigName: "notify::action-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-interface", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::action-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::action-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::action-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reference", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reference", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reference", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reference", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reference", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RefAction_ConstructProps)
    _init (config?: RefAction_ConstructProps): void
    static $gtype: GObject.Type
}
interface RemoteLookup_ConstructProps extends GObject.Object_ConstructProps {
}
class RemoteLookup {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.RemoteLookup */
    lookup(name: string): Gitg.Remote | null
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
    constructor (config?: RemoteLookup_ConstructProps)
    _init (config?: RemoteLookup_ConstructProps): void
    static $gtype: GObject.Type
}
interface Searchable_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GitgExt-1.0.GitgExt.Searchable */
    searchText?: string
    searchVisible?: boolean
    searchEntry?: Gtk.Entry
    /* Constructor properties of GitgExt-1.0.GitgExt.UIElement */
    application?: Application
}
class Searchable {
    /* Properties of GitgExt-1.0.GitgExt.Searchable */
    searchText: string
    searchVisible: boolean
    readonly searchAvailable: boolean
    searchEntry: Gtk.Entry
    /* Properties of GitgExt-1.0.GitgExt.UIElement */
    application: Application
    readonly id: string
    readonly displayName: string
    readonly description: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.Searchable */
    getSearchText(): string
    setSearchText(value: string): void
    getSearchVisible(): boolean
    setSearchVisible(value: boolean): void
    getSearchAvailable(): boolean
    setSearchEntry(value?: Gtk.Entry | null): void
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
    /* Methods of GitgExt-1.0.GitgExt.Activity */
    isDefaultFor(action: string): boolean
    onKeyPressed(event: Gdk.EventKey): boolean
    /* Methods of GitgExt-1.0.GitgExt.UIElement */
    negotiateOrder(other: UIElement): number
    getApplication(): Application | null
    setApplication(value?: Application | null): void
    getId(): string
    getDisplayName(): string
    getDescription(): string
    getIcon(): string | null
    getWidget(): Gtk.Widget | null
    getShortcut(): number | null
    getAvailable(): boolean
    getEnabled(): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GitgExt-1.0.GitgExt.UIElement */
    connect(sigName: "activate", callback: (() => void)): number
    on(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate"): void
    connect(sigName: "notify::search-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-available", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-available", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-entry", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-entry", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-entry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-entry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-entry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Searchable_ConstructProps)
    _init (config?: Searchable_ConstructProps): void
    static $gtype: GObject.Type
}
interface Selectable_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GitgExt-1.0.GitgExt.Selectable */
    selectableMode?: SelectionMode
    /* Constructor properties of GitgExt-1.0.GitgExt.UIElement */
    application?: Application
}
class Selectable {
    /* Properties of GitgExt-1.0.GitgExt.Selectable */
    selectableMode: SelectionMode
    readonly selectableAvailable: boolean
    readonly selectableModeTooltip: string
    readonly actionWidget: Gtk.Widget
    /* Properties of GitgExt-1.0.GitgExt.UIElement */
    application: Application
    readonly id: string
    readonly displayName: string
    readonly description: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.Selectable */
    getSelectableMode(): SelectionMode
    setSelectableMode(value: SelectionMode): void
    getSelectableAvailable(): boolean
    getSelectableModeTooltip(): string
    getActionWidget(): Gtk.Widget | null
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
    /* Methods of GitgExt-1.0.GitgExt.Activity */
    isDefaultFor(action: string): boolean
    onKeyPressed(event: Gdk.EventKey): boolean
    /* Methods of GitgExt-1.0.GitgExt.UIElement */
    negotiateOrder(other: UIElement): number
    getApplication(): Application | null
    setApplication(value?: Application | null): void
    getId(): string
    getDisplayName(): string
    getDescription(): string
    getIcon(): string | null
    getWidget(): Gtk.Widget | null
    getShortcut(): number | null
    getAvailable(): boolean
    getEnabled(): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GitgExt-1.0.GitgExt.UIElement */
    connect(sigName: "activate", callback: (() => void)): number
    on(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate"): void
    connect(sigName: "notify::selectable-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::selectable-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::selectable-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::selectable-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::selectable-available", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable-available", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::selectable-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::selectable-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::selectable-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::selectable-mode-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable-mode-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::selectable-mode-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::selectable-mode-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::selectable-mode-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::action-widget", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-widget", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::action-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::action-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::action-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Selectable_ConstructProps)
    _init (config?: Selectable_ConstructProps): void
    static $gtype: GObject.Type
}
interface UIElement_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GitgExt-1.0.GitgExt.UIElement */
    application?: Application
}
class UIElement {
    /* Properties of GitgExt-1.0.GitgExt.UIElement */
    application: Application
    readonly id: string
    readonly displayName: string
    readonly description: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.UIElement */
    negotiateOrder(other: UIElement): number
    getApplication(): Application | null
    setApplication(value?: Application | null): void
    getId(): string
    getDisplayName(): string
    getDescription(): string
    getIcon(): string | null
    getWidget(): Gtk.Widget | null
    getShortcut(): number | null
    getAvailable(): boolean
    getEnabled(): boolean
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
    /* Signals of GitgExt-1.0.GitgExt.UIElement */
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
    connect(sigName: "notify::application", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UIElement_ConstructProps)
    _init (config?: UIElement_ConstructProps): void
    static $gtype: GObject.Type
}
interface CommandLines_ConstructProps extends GObject.Object_ConstructProps {
}
class CommandLines {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.CommandLines */
    getFor(tType: GObject.Type, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify): object | null
    parseFinished(): void
    apply(application: Application): void
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
    constructor (config?: CommandLines_ConstructProps)
    _init (config?: CommandLines_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(commandLines: CommandLine[]): CommandLines
    static $gtype: GObject.Type
}
interface MessageBus_ConstructProps extends GObject.Object_ConstructProps {
}
class MessageBus {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.MessageBus */
    lookup(id: MessageId): GObject.Type
    register(messageType: GObject.Type, id: MessageId): void
    unregister(id: MessageId): void
    unregisterAll(objectPath: string): void
    isRegistered(id: MessageId): boolean
    connect(id: MessageId, callback: MessageCallback): number
    disconnect(id: number): void
    block(id: number): void
    unblock(id: number): void
    sendMessage(message: Message): Message
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
    /* Signals of GitgExt-1.0.GitgExt.MessageBus */
    connect(sigName: "registered", callback: ((id: MessageId) => void)): number
    on(sigName: "registered", callback: (id: MessageId) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "registered", callback: (id: MessageId) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "registered", callback: (id: MessageId) => void): NodeJS.EventEmitter
    emit(sigName: "registered", id: MessageId): void
    connect(sigName: "unregistered", callback: ((id: MessageId) => void)): number
    on(sigName: "unregistered", callback: (id: MessageId) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unregistered", callback: (id: MessageId) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unregistered", callback: (id: MessageId) => void): NodeJS.EventEmitter
    emit(sigName: "unregistered", id: MessageId): void
    connect(sigName: "dispatch", callback: ((message: Message) => void)): number
    on(sigName: "dispatch", callback: (message: Message) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dispatch", callback: (message: Message) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dispatch", callback: (message: Message) => void): NodeJS.EventEmitter
    emit(sigName: "dispatch", message: Message): void
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
    constructor (config?: MessageBus_ConstructProps)
    _init (config?: MessageBus_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MessageBus
    static getDefault(): MessageBus
    static $gtype: GObject.Type
}
interface MessageId_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GitgExt-1.0.GitgExt.MessageId */
    objectPath?: string
    method?: string
}
class MessageId {
    /* Properties of GitgExt-1.0.GitgExt.MessageId */
    objectPath: string
    method: string
    readonly id: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.MessageId */
    hash(): number
    equal(other: MessageId): boolean
    copy(): MessageId
    getObjectPath(): string
    setObjectPath(value: string): void
    getMethod(): string
    setMethod(value: string): void
    getId(): string
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
    connect(sigName: "notify::object-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::method", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MessageId_ConstructProps)
    _init (config?: MessageId_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(objectPath: string, method: string): MessageId
    static validObjectPath(path: string): boolean
    static $gtype: GObject.Type
}
interface Message_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GitgExt-1.0.GitgExt.Message */
    id?: MessageId
}
class Message {
    /* Properties of GitgExt-1.0.GitgExt.Message */
    id: MessageId
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.Message */
    has(propname: string): boolean
    getId(): MessageId
    setId(value: MessageId): void
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
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Message_ConstructProps)
    _init (config?: Message_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static typeHas(type: GObject.Type, propname: string): boolean
    static typeCheck(type: GObject.Type, propname: string, valueType: GObject.Type): boolean
    static $gtype: GObject.Type
}
class UI {
    static name: string
    static new(): UI
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): UI
}
interface UserQueryResponse_ConstructProps extends GObject.Object_ConstructProps {
}
class UserQueryResponse {
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
    constructor (config?: UserQueryResponse_ConstructProps)
    _init (config?: UserQueryResponse_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(text: string, responseType: Gtk.ResponseType): UserQueryResponse
    static $gtype: GObject.Type
}
interface UserQuery_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GitgExt-1.0.GitgExt.UserQuery */
    title?: string
    message?: string
    messageType?: Gtk.MessageType
    defaultResponse?: Gtk.ResponseType
    defaultIsDestructive?: boolean
    messageUseMarkup?: boolean
}
class UserQuery {
    /* Properties of GitgExt-1.0.GitgExt.UserQuery */
    title: string
    message: string
    messageType: Gtk.MessageType
    defaultResponse: Gtk.ResponseType
    defaultIsDestructive: boolean
    messageUseMarkup: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GitgExt-1.0.GitgExt.UserQuery */
    getResponses(): UserQueryResponse[]
    setResponses(value: UserQueryResponse[]): void
    getTitle(): string
    setTitle(value: string): void
    getMessage(): string
    setMessage(value: string): void
    getMessageType(): Gtk.MessageType
    setMessageType(value: Gtk.MessageType): void
    getDefaultResponse(): Gtk.ResponseType
    setDefaultResponse(value: Gtk.ResponseType): void
    getDefaultIsDestructive(): boolean
    setDefaultIsDestructive(value: boolean): void
    getMessageUseMarkup(): boolean
    setMessageUseMarkup(value: boolean): void
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
    /* Signals of GitgExt-1.0.GitgExt.UserQuery */
    connect(sigName: "quit", callback: (() => void)): number
    on(sigName: "quit", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "quit", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "quit", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "quit"): void
    connect(sigName: "response", callback: ((responseType: Gtk.ResponseType) => boolean)): number
    on(sigName: "response", callback: (responseType: Gtk.ResponseType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "response", callback: (responseType: Gtk.ResponseType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "response", callback: (responseType: Gtk.ResponseType) => void): NodeJS.EventEmitter
    emit(sigName: "response", responseType: Gtk.ResponseType): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-response", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-response", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-is-destructive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-is-destructive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-is-destructive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-is-destructive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-is-destructive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message-use-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-use-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message-use-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message-use-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message-use-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UserQuery_ConstructProps)
    _init (config?: UserQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UserQuery
    static $gtype: GObject.Type
}
abstract class CommandLinesClass {
    static name: string
}
class CommandLinesPrivate {
    static name: string
}
abstract class MessageBusClass {
    /* Fields of GitgExt-1.0.GitgExt.MessageBusClass */
    readonly dispatch: (self: MessageBus, message: Message) => void
    static name: string
}
class MessageBusPrivate {
    static name: string
}
abstract class MessageIdClass {
    static name: string
}
class MessageIdPrivate {
    static name: string
}
abstract class MessageClass {
    static name: string
}
class MessagePrivate {
    static name: string
}
abstract class UIClass {
    static name: string
}
class UIPrivate {
    static name: string
}
abstract class UserQueryResponseClass {
    static name: string
}
class UserQueryResponsePrivate {
    static name: string
}
abstract class UserQueryClass {
    static name: string
}
class UserQueryPrivate {
    static name: string
}
abstract class ActionIface {
    /* Fields of GitgExt-1.0.GitgExt.ActionIface */
    readonly populateMenu: (self: Action, menu: Gtk.Menu) => void
    static name: string
}
abstract class ActivityIface {
    /* Fields of GitgExt-1.0.GitgExt.ActivityIface */
    readonly isDefaultFor: (self: Activity, action: string) => boolean
    readonly onKeyPressed: (self: Activity, event: Gdk.EventKey) => boolean
    static name: string
}
abstract class ApplicationIface {
    /* Fields of GitgExt-1.0.GitgExt.ApplicationIface */
    readonly getVerifiedCommitter: (self: Application) => Ggit.Signature | null
    readonly getActivityById: (self: Application, id: string) => Activity | null
    readonly setActivityById: (self: Application, id: string) => Activity | null
    readonly userQuery: (self: Application, query: UserQuery) => void
    readonly userQueryAsync: (self: Application, query: UserQuery, callback?: Gio.AsyncReadyCallback | null) => void
    readonly userQueryFinish: (self: Application, res: Gio.AsyncResult) => Gtk.ResponseType
    readonly showInfobar: (self: Application, primaryMsg: string, secondaryMsg: string, type: Gtk.MessageType) => void
    readonly openNew: (self: Application, repository: Ggit.Repository, hint?: string | null) => Application
    readonly openRepository: (self: Application, path: Gio.File) => void
    readonly getRepository: (self: Application) => Gitg.Repository | null
    readonly setRepository: (self: Application, value?: Gitg.Repository | null) => void
    readonly getMessageBus: (self: Application) => MessageBus
    readonly getCurrentActivity: (self: Application) => Activity | null
    readonly getEnvironment: (self: Application) => Gee.Map
    readonly getNotifications: (self: Application) => Notifications
    readonly getBusy: (self: Application) => boolean
    readonly setBusy: (self: Application, value: boolean) => void
    readonly getRemoteLookup: (self: Application) => RemoteLookup
    static name: string
}
abstract class CommandLineIface {
    /* Fields of GitgExt-1.0.GitgExt.CommandLineIface */
    readonly getOptionGroup: (self: CommandLine) => GLib.OptionGroup
    readonly parseFinished: (self: CommandLine) => void
    readonly apply: (self: CommandLine, application: Application) => void
    static name: string
}
abstract class CommitActionIface {
    /* Fields of GitgExt-1.0.GitgExt.CommitActionIface */
    readonly getActionInterface: (self: CommitAction) => RefActionInterface
    readonly setActionInterface: (self: CommitAction, value: RefActionInterface) => void
    readonly getCommit: (self: CommitAction) => Gitg.Commit
    readonly setCommit: (self: CommitAction, value: Gitg.Commit) => void
    static name: string
}
abstract class HistoryPanelIface {
    /* Fields of GitgExt-1.0.GitgExt.HistoryPanelIface */
    readonly getHistory: (self: HistoryPanel) => History | null
    readonly setHistory: (self: HistoryPanel, value?: History | null) => void
    static name: string
}
abstract class HistoryIface {
    /* Fields of GitgExt-1.0.GitgExt.HistoryIface */
    readonly foreachSelected: (self: History, func: ForeachCommitSelectionFunc) => void
    readonly select: (self: History, commit: Gitg.Commit) => void
    static name: string
}
abstract class NotificationIface {
    /* Fields of GitgExt-1.0.GitgExt.NotificationIface */
    readonly getWidget: (self: Notification) => Gtk.Widget | null
    static name: string
}
abstract class NotificationsIface {
    /* Fields of GitgExt-1.0.GitgExt.NotificationsIface */
    readonly add: (self: Notifications, notification: Notification) => void
    readonly remove: (self: Notifications, notification: Notification, delay: number) => void
    static name: string
}
abstract class PreferencesIface {
    /* Fields of GitgExt-1.0.GitgExt.PreferencesIface */
    readonly getId: (self: Preferences) => string
    readonly getDisplayName: (self: Preferences) => string
    readonly getWidget: (self: Preferences) => Gtk.Widget
    static name: string
}
abstract class RefActionInterfaceIface {
    /* Fields of GitgExt-1.0.GitgExt.RefActionInterfaceIface */
    readonly addRef: (self: RefActionInterface, reference: Gitg.Ref) => void
    readonly removeRef: (self: RefActionInterface, reference: Gitg.Ref) => void
    readonly replaceRef: (self: RefActionInterface, oldRef: Gitg.Ref, newRef: Gitg.Ref) => void
    readonly setBusy: (self: RefActionInterface, reference: Gitg.Ref, busy: boolean) => void
    readonly editRefName: (self: RefActionInterface, reference: Gitg.Ref, callback: RefNameEditingDone) => void
    readonly refresh: (self: RefActionInterface) => void
    readonly getApplication: (self: RefActionInterface) => Application
    readonly setApplication: (self: RefActionInterface, value: Application) => void
    readonly getReferences: (self: RefActionInterface) => Gee.List
    static name: string
}
abstract class RefActionIface {
    /* Fields of GitgExt-1.0.GitgExt.RefActionIface */
    readonly getActionInterface: (self: RefAction) => RefActionInterface
    readonly setActionInterface: (self: RefAction, value: RefActionInterface) => void
    readonly getReference: (self: RefAction) => Gitg.Ref
    readonly setReference: (self: RefAction, value: Gitg.Ref) => void
    static name: string
}
abstract class RemoteLookupIface {
    /* Fields of GitgExt-1.0.GitgExt.RemoteLookupIface */
    readonly lookup: (self: RemoteLookup, name: string) => Gitg.Remote | null
    static name: string
}
abstract class SearchableIface {
    /* Fields of GitgExt-1.0.GitgExt.SearchableIface */
    readonly getSearchText: (self: Searchable) => string
    readonly setSearchText: (self: Searchable, value: string) => void
    readonly getSearchVisible: (self: Searchable) => boolean
    readonly setSearchVisible: (self: Searchable, value: boolean) => void
    readonly getSearchAvailable: (self: Searchable) => boolean
    readonly setSearchEntry: (self: Searchable, value?: Gtk.Entry | null) => void
    static name: string
}
abstract class SelectableIface {
    /* Fields of GitgExt-1.0.GitgExt.SelectableIface */
    readonly getSelectableMode: (self: Selectable) => SelectionMode
    readonly setSelectableMode: (self: Selectable, value: SelectionMode) => void
    readonly getSelectableAvailable: (self: Selectable) => boolean
    readonly getSelectableModeTooltip: (self: Selectable) => string
    readonly getActionWidget: (self: Selectable) => Gtk.Widget | null
    static name: string
}
abstract class UIElementIface {
    /* Fields of GitgExt-1.0.GitgExt.UIElementIface */
    readonly negotiateOrder: (self: UIElement, other: UIElement) => number
    readonly getApplication: (self: UIElement) => Application | null
    readonly setApplication: (self: UIElement, value?: Application | null) => void
    readonly getId: (self: UIElement) => string
    readonly getDisplayName: (self: UIElement) => string
    readonly getDescription: (self: UIElement) => string
    readonly getIcon: (self: UIElement) => string | null
    readonly getWidget: (self: UIElement) => Gtk.Widget | null
    readonly getShortcut: (self: UIElement) => number | null
    readonly getAvailable: (self: UIElement) => boolean
    readonly getEnabled: (self: UIElement) => boolean
    static name: string
}
}
export default GitgExt;