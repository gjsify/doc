/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * TelepathyLogger-0.2
 */

import type TelepathyGLib from './TelepathyGLib-0.12';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace TelepathyLogger {

enum EntityType {
    UNKNOWN,
    CONTACT,
    ROOM,
    SELF,
}
enum LogManagerError {
    LOG_MANAGER_ERROR_ADD_EVENT,
}
enum EventTypeMask {
    TEXT,
    CALL,
    ANY,
}
interface LogEventFilter {
    (event: Event): boolean
}
interface CallEvent_ConstructProps extends Event_ConstructProps {
    /* Constructor properties of TelepathyLogger-0.2.TelepathyLogger.CallEvent */
    detailedEndReason?: string
    duration?: number
    endActor?: Entity
    endReason?: number
}
class CallEvent {
    /* Properties of TelepathyLogger-0.2.TelepathyLogger.Event */
    readonly accountPath: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of TelepathyLogger-0.2.TelepathyLogger.CallEvent */
    getDetailedEndReason(): string
    getDuration(): GLib.TimeSpan
    getEndActor(): Entity
    getEndReason(): TelepathyGLib.CallStateChangeReason
    /* Methods of TelepathyLogger-0.2.TelepathyLogger.Event */
    equal(data: Event): boolean
    getAccount(): TelepathyGLib.Account
    getAccountPath(): string
    getReceiver(): Entity
    getSender(): Entity
    getTimestamp(): number
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
    connect(sigName: "notify::account-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::account-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::account-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::account-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CallEvent_ConstructProps)
    _init (config?: CallEvent_ConstructProps): void
    static $gtype: GObject.Type
}
interface Entity_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of TelepathyLogger-0.2.TelepathyLogger.Entity */
    alias?: string
    avatarToken?: string
    identifier?: string
    type?: number
}
class Entity {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of TelepathyLogger-0.2.TelepathyLogger.Entity */
    getAlias(): string
    getAvatarToken(): string
    getEntityType(): EntityType
    getIdentifier(): string
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
    constructor (config?: Entity_ConstructProps)
    _init (config?: Entity_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, type: EntityType, alias: string, avatarToken: string): Entity
    static newFromRoomId(roomId: string): Entity
    static newFromTpContact(contact: TelepathyGLib.Contact, type: EntityType): Entity
    static $gtype: GObject.Type
}
interface Event_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of TelepathyLogger-0.2.TelepathyLogger.Event */
    account?: TelepathyGLib.Account
    channelPath?: string
    receiver?: Entity
    sender?: Entity
    timestamp?: number
}
class Event {
    /* Properties of TelepathyLogger-0.2.TelepathyLogger.Event */
    readonly accountPath: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of TelepathyLogger-0.2.TelepathyLogger.Event */
    equal(data: Event): boolean
    getAccount(): TelepathyGLib.Account
    getAccountPath(): string
    getReceiver(): Entity
    getSender(): Entity
    getTimestamp(): number
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
    connect(sigName: "notify::account-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::account-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::account-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::account-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Event_ConstructProps)
    _init (config?: Event_ConstructProps): void
    static $gtype: GObject.Type
}
interface LogManager_ConstructProps extends GObject.Object_ConstructProps {
}
class LogManager {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of TelepathyLogger-0.2.TelepathyLogger.LogManager */
    disableForEntity(account: TelepathyGLib.Account, entity: Entity): void
    enableForEntity(account: TelepathyGLib.Account, entity: Entity): void
    exists(account: TelepathyGLib.Account, target: Entity, typeMask: number): boolean
    getDatesAsync(account: TelepathyGLib.Account, target: Entity, typeMask: number, callback?: Gio.AsyncReadyCallback | null): void
    getDatesFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* dates */ GLib.Date[] ]
    getEntitiesAsync(account: TelepathyGLib.Account, callback?: Gio.AsyncReadyCallback | null): void
    getEntitiesFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* entities */ Entity[] ]
    getEventsForDateAsync(account: TelepathyGLib.Account, target: Entity, typeMask: number, date: GLib.Date, callback?: Gio.AsyncReadyCallback | null): void
    getEventsForDateFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* events */ Event[] ]
    getFilteredEventsAsync(account: TelepathyGLib.Account, target: Entity, typeMask: number, numEvents: number, filter?: LogEventFilter | null, callback?: Gio.AsyncReadyCallback | null): void
    getFilteredEventsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* events */ Event[] ]
    isDisabledForEntity(account: TelepathyGLib.Account, entity: Entity): boolean
    searchAsync(text: string, typeMask: number, callback?: Gio.AsyncReadyCallback | null): void
    searchFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* hits */ LogSearchHit[] ]
    walkFilteredEvents(account: TelepathyGLib.Account, target: Entity, typeMask: number, filter?: LogEventFilter | null): LogWalker
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
    constructor (config?: LogManager_ConstructProps)
    _init (config?: LogManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static dupSingleton(): LogManager
    static errorsQuark(): GLib.Quark
    static $gtype: GObject.Type
}
interface LogWalker_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of TelepathyLogger-0.2.TelepathyLogger.LogWalker */
    filter?: object
    filterData?: object
}
class LogWalker {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of TelepathyLogger-0.2.TelepathyLogger.LogWalker */
    getEventsAsync(numEvents: number, callback?: Gio.AsyncReadyCallback | null): void
    getEventsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* events */ Event[] ]
    isEnd(): boolean
    isStart(): boolean
    rewindAsync(numEvents: number, callback?: Gio.AsyncReadyCallback | null): void
    rewindFinish(result: Gio.AsyncResult): boolean
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
    constructor (config?: LogWalker_ConstructProps)
    _init (config?: LogWalker_ConstructProps): void
    static $gtype: GObject.Type
}
interface TextEvent_ConstructProps extends Event_ConstructProps {
    /* Constructor properties of TelepathyLogger-0.2.TelepathyLogger.TextEvent */
    editTimestamp?: number
    message?: string
    messageToken?: string
    messageType?: number
    supersedesToken?: string
}
class TextEvent {
    /* Properties of TelepathyLogger-0.2.TelepathyLogger.Event */
    readonly accountPath: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of TelepathyLogger-0.2.TelepathyLogger.TextEvent */
    getEditTimestamp(): number
    getMessage(): string
    getMessageToken(): string
    getMessageType(): TelepathyGLib.ChannelTextMessageType
    getSupersedes(): TextEvent[]
    getSupersedesToken(): string
    /* Methods of TelepathyLogger-0.2.TelepathyLogger.Event */
    equal(data: Event): boolean
    getAccount(): TelepathyGLib.Account
    getAccountPath(): string
    getReceiver(): Entity
    getSender(): Entity
    getTimestamp(): number
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
    connect(sigName: "notify::account-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::account-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::account-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::account-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TextEvent_ConstructProps)
    _init (config?: TextEvent_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class CallEventClass {
    static name: string
}
class CallEventPriv {
    static name: string
}
class EntityPriv {
    static name: string
}
abstract class EventClass {
    static name: string
}
class EventPriv {
    static name: string
}
abstract class LogManagerClass {
    /* Fields of TelepathyLogger-0.2.TelepathyLogger.LogManagerClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class LogSearchHit {
    /* Fields of TelepathyLogger-0.2.TelepathyLogger.LogSearchHit */
    readonly account: TelepathyGLib.Account
    readonly target: Entity
    readonly date: GLib.Date
    static name: string
}
abstract class LogWalkerClass {
    static name: string
}
class LogWalkerPriv {
    static name: string
}
abstract class TextEventClass {
    static name: string
}
class TextEventPriv {
    static name: string
}
}
export default TelepathyLogger;