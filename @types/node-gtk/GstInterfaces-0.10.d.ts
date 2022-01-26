/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstInterfaces-0.10
 */

import type libxml2 from './libxml2-2.0';
import type Gst from './Gst-0.10';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstInterfaces {

enum ColorBalanceType {
    HARDWARE,
    SOFTWARE,
}
enum MixerMessageType {
    INVALID,
    MUTE_TOGGLED,
    RECORD_TOGGLED,
    VOLUME_CHANGED,
    OPTION_CHANGED,
    OPTIONS_LIST_CHANGED,
    MIXER_CHANGED,
}
enum MixerType {
    HARDWARE,
    SOFTWARE,
}
enum NavigationCommand {
    INVALID,
    MENU1,
    MENU2,
    MENU3,
    MENU4,
    MENU5,
    MENU6,
    MENU7,
    LEFT,
    RIGHT,
    UP,
    DOWN,
    ACTIVATE,
    PREV_ANGLE,
    NEXT_ANGLE,
}
enum NavigationEventType {
    INVALID,
    KEY_PRESS,
    KEY_RELEASE,
    MOUSE_BUTTON_PRESS,
    MOUSE_BUTTON_RELEASE,
    MOUSE_MOVE,
    COMMAND,
}
enum NavigationMessageType {
    INVALID,
    MOUSE_OVER,
    COMMANDS_CHANGED,
    ANGLES_CHANGED,
}
enum NavigationQueryType {
    INVALID,
    COMMANDS,
    ANGLES,
}
enum StreamVolumeFormat {
    LINEAR,
    CUBIC,
    DB,
}
enum MixerFlags {
    NONE,
    AUTO_NOTIFICATIONS,
    HAS_WHITELIST,
    GROUPING,
}
enum MixerTrackFlags {
    INPUT,
    OUTPUT,
    MUTE,
    RECORD,
    MASTER,
    SOFTWARE,
    NO_RECORD,
    NO_MUTE,
    WHITELIST,
    READONLY,
    WRITEONLY,
}
enum TunerChannelFlags {
    INPUT,
    OUTPUT,
    FREQUENCY,
    AUDIO,
}
function interfacesMarshalVOIDOBJECTBOOLEAN(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
function interfacesMarshalVOIDOBJECTINT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
function interfacesMarshalVOIDOBJECTPOINTER(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
function interfacesMarshalVOIDOBJECTSTRING(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
function interfacesMarshalVOIDOBJECTULONG(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object): void
function mixerMessageGetType(message: Gst.Message): MixerMessageType
function mixerMessageParseMuteToggled(message: Gst.Message, track: MixerTrack, mute: boolean): void
function mixerMessageParseOptionChanged(message: Gst.Message, options: MixerOptions, value: string): void
function mixerMessageParseOptionsListChanged(message: Gst.Message, options: MixerOptions): void
function mixerMessageParseRecordToggled(message: Gst.Message, track: MixerTrack, record: boolean): void
function mixerMessageParseVolumeChanged(message: Gst.Message, track: MixerTrack, volumes: number, numChannels: number): void
function navigationEventGetType(event: Gst.Event): NavigationEventType
function navigationEventParseCommand(event: Gst.Event, command: NavigationCommand): boolean
function navigationEventParseKeyEvent(event: Gst.Event, key: string): boolean
function navigationEventParseMouseButtonEvent(event: Gst.Event, button: number, x: number, y: number): boolean
function navigationEventParseMouseMoveEvent(event: Gst.Event, x: number, y: number): boolean
function navigationMessageGetType(message: Gst.Message): NavigationMessageType
function navigationMessageParseAnglesChanged(message: Gst.Message, curAngle: number, nAngles: number): boolean
function navigationMessageParseMouseOver(message: Gst.Message, active: boolean): boolean
function navigationQueryGetType(query: Gst.Query): NavigationQueryType
function navigationQueryParseAngles(query: Gst.Query, curAngle: number, nAngles: number): boolean
function navigationQueryParseCommandsLength(query: Gst.Query, nCmds: number): boolean
function navigationQueryParseCommandsNth(query: Gst.Query, nth: number, cmd: NavigationCommand): boolean
function navigationQuerySetAngles(query: Gst.Query, curAngle: number, nAngles: number): void
function navigationQuerySetCommandsv(query: Gst.Query, nCmds: number, cmds: NavigationCommand): void
function streamVolumeConvertVolume(from: StreamVolumeFormat, to: StreamVolumeFormat, val: number): number
interface ColorBalance_ConstructProps extends Gst.Element_ConstructProps {
}
class ColorBalance {
    /* Fields of Gst-0.10.Gst.Element */
    readonly object: Gst.Object
    readonly stateLock: any
    readonly stateCond: GLib.Cond
    readonly stateCookie: number
    readonly currentState: Gst.State
    readonly nextState: Gst.State
    readonly pendingState: Gst.State
    readonly lastReturn: Gst.StateChangeReturn
    readonly bus: Gst.Bus
    readonly clock: Gst.Clock
    readonly baseTime: Gst.ClockTimeDiff
    readonly numpads: number
    readonly pads: object[]
    readonly numsrcpads: number
    readonly srcpads: object[]
    readonly numsinkpads: number
    readonly sinkpads: object[]
    readonly padsCookie: number
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly namePrefix: string
    readonly parent: Gst.Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstInterfaces-0.10.GstInterfaces.ColorBalance */
    getBalanceType(): ColorBalanceType
    getValue(channel: ColorBalanceChannel): number
    listChannels(): object[]
    setValue(channel: ColorBalanceChannel, value: number): void
    valueChanged(channel: ColorBalanceChannel, value: number): void
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): boolean
    providesClock(): boolean
    provideClock(): Gst.Clock
    getClock(): Gst.Clock
    setClock(clock: Gst.Clock): boolean
    setBaseTime(time: Gst.ClockTime): void
    getBaseTime(): Gst.ClockTime
    setStartTime(time: Gst.ClockTime): void
    getStartTime(): Gst.ClockTime
    isIndexable(): boolean
    setIndex(index: Gst.Index): void
    getIndex(): Gst.Index
    setBus(bus: Gst.Bus): void
    getBus(): Gst.Bus
    addPad(pad: Gst.Pad): boolean
    removePad(pad: Gst.Pad): boolean
    noMorePads(): void
    getPad(name: string): Gst.Pad
    getStaticPad(name: string): Gst.Pad
    getRequestPad(name: string): Gst.Pad
    releaseRequestPad(pad: Gst.Pad): void
    iteratePads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    sendEvent(event: Gst.Event): boolean
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, curType: Gst.SeekType, cur: number, stopType: Gst.SeekType, stop: number): boolean
    getQueryTypes(): Gst.QueryType
    query(query: Gst.Query): boolean
    postMessage(message: Gst.Message): boolean
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    isLockedState(): boolean
    setLockedState(lockedState: boolean): boolean
    syncStateWithParent(): boolean
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State, /* pending */ Gst.State ]
    setState(state: Gst.State): Gst.StateChangeReturn
    abortState(): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: boolean): void
    getFactory(): Gst.ElementFactory
    implementsInterface(ifaceType: GObject.Type): boolean
    createAllPads(): void
    getCompatiblePad(pad: Gst.Pad, caps: Gst.Caps): Gst.Pad
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate
    link(dest: Gst.Element): boolean
    linkFiltered(dest: Gst.Element, filter: Gst.Caps): boolean
    unlink(dest: Gst.Element): void
    linkPads(srcpadname: string, dest: Gst.Element, destpadname: string): boolean
    linkPadsFull(srcpadname: string, dest: Gst.Element, destpadname: string, flags: Gst.PadLinkCheck): boolean
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Gst.Element, destpadname: string, filter: Gst.Caps): boolean
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number ]
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number ]
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    foundTagsForPad(pad: Gst.Pad, list: Gst.TagList): void
    foundTags(list: Gst.TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Gst.Object): boolean
    getParent(): Gst.Object
    unparent(): void
    hasAncestor(ancestor: Gst.Object): boolean
    replace(newobj: Gst.Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of GstInterfaces-0.10.GstInterfaces.ColorBalance */
    connect(sigName: "value-changed", callback: ((object: ColorBalanceChannel, p0: number) => void)): number
    on(sigName: "value-changed", callback: (object: ColorBalanceChannel, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (object: ColorBalanceChannel, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (object: ColorBalanceChannel, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "value-changed", object: ColorBalanceChannel, p0: number): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: ((object: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: ((object: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Gst.Object) => void)): number
    on(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: ((object: Gst.Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Gst.Object): void
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
    constructor (config?: ColorBalance_ConstructProps)
    _init (config?: ColorBalance_ConstructProps): void
    static $gtype: GObject.Type
}
interface Mixer_ConstructProps extends Gst.Element_ConstructProps {
}
class Mixer {
    /* Fields of Gst-0.10.Gst.Element */
    readonly object: Gst.Object
    readonly stateLock: any
    readonly stateCond: GLib.Cond
    readonly stateCookie: number
    readonly currentState: Gst.State
    readonly nextState: Gst.State
    readonly pendingState: Gst.State
    readonly lastReturn: Gst.StateChangeReturn
    readonly bus: Gst.Bus
    readonly clock: Gst.Clock
    readonly baseTime: Gst.ClockTimeDiff
    readonly numpads: number
    readonly pads: object[]
    readonly numsrcpads: number
    readonly srcpads: object[]
    readonly numsinkpads: number
    readonly sinkpads: object[]
    readonly padsCookie: number
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly namePrefix: string
    readonly parent: Gst.Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstInterfaces-0.10.GstInterfaces.Mixer */
    getMixerFlags(): MixerFlags
    getMixerType(): MixerType
    getOption(opts: MixerOptions): string
    getVolume(track: MixerTrack, volumes: number): void
    listTracks(): object[]
    mixerChanged(): void
    muteToggled(track: MixerTrack, mute: boolean): void
    optionChanged(opts: MixerOptions, value: string): void
    optionsListChanged(opts: MixerOptions): void
    recordToggled(track: MixerTrack, record: boolean): void
    setMute(track: MixerTrack, mute: boolean): void
    setOption(opts: MixerOptions, value: string): void
    setRecord(track: MixerTrack, record: boolean): void
    setVolume(track: MixerTrack, volumes: number): void
    volumeChanged(track: MixerTrack, volumes: number): void
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): boolean
    providesClock(): boolean
    provideClock(): Gst.Clock
    getClock(): Gst.Clock
    setClock(clock: Gst.Clock): boolean
    setBaseTime(time: Gst.ClockTime): void
    getBaseTime(): Gst.ClockTime
    setStartTime(time: Gst.ClockTime): void
    getStartTime(): Gst.ClockTime
    isIndexable(): boolean
    setIndex(index: Gst.Index): void
    getIndex(): Gst.Index
    setBus(bus: Gst.Bus): void
    getBus(): Gst.Bus
    addPad(pad: Gst.Pad): boolean
    removePad(pad: Gst.Pad): boolean
    noMorePads(): void
    getPad(name: string): Gst.Pad
    getStaticPad(name: string): Gst.Pad
    getRequestPad(name: string): Gst.Pad
    releaseRequestPad(pad: Gst.Pad): void
    iteratePads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    sendEvent(event: Gst.Event): boolean
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, curType: Gst.SeekType, cur: number, stopType: Gst.SeekType, stop: number): boolean
    getQueryTypes(): Gst.QueryType
    query(query: Gst.Query): boolean
    postMessage(message: Gst.Message): boolean
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    isLockedState(): boolean
    setLockedState(lockedState: boolean): boolean
    syncStateWithParent(): boolean
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State, /* pending */ Gst.State ]
    setState(state: Gst.State): Gst.StateChangeReturn
    abortState(): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: boolean): void
    getFactory(): Gst.ElementFactory
    implementsInterface(ifaceType: GObject.Type): boolean
    createAllPads(): void
    getCompatiblePad(pad: Gst.Pad, caps: Gst.Caps): Gst.Pad
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate
    link(dest: Gst.Element): boolean
    linkFiltered(dest: Gst.Element, filter: Gst.Caps): boolean
    unlink(dest: Gst.Element): void
    linkPads(srcpadname: string, dest: Gst.Element, destpadname: string): boolean
    linkPadsFull(srcpadname: string, dest: Gst.Element, destpadname: string, flags: Gst.PadLinkCheck): boolean
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Gst.Element, destpadname: string, filter: Gst.Caps): boolean
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number ]
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number ]
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    foundTagsForPad(pad: Gst.Pad, list: Gst.TagList): void
    foundTags(list: Gst.TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Gst.Object): boolean
    getParent(): Gst.Object
    unparent(): void
    hasAncestor(ancestor: Gst.Object): boolean
    replace(newobj: Gst.Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of GstInterfaces-0.10.GstInterfaces.Mixer */
    connect(sigName: "mute-toggled", callback: ((object: MixerTrack, p0: boolean) => void)): number
    on(sigName: "mute-toggled", callback: (object: MixerTrack, p0: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mute-toggled", callback: (object: MixerTrack, p0: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mute-toggled", callback: (object: MixerTrack, p0: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mute-toggled", object: MixerTrack, p0: boolean): void
    connect(sigName: "option-changed", callback: ((object: MixerOptions, p0: string) => void)): number
    on(sigName: "option-changed", callback: (object: MixerOptions, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "option-changed", callback: (object: MixerOptions, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "option-changed", callback: (object: MixerOptions, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "option-changed", object: MixerOptions, p0: string): void
    connect(sigName: "record-toggled", callback: ((object: MixerTrack, p0: boolean) => void)): number
    on(sigName: "record-toggled", callback: (object: MixerTrack, p0: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "record-toggled", callback: (object: MixerTrack, p0: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "record-toggled", callback: (object: MixerTrack, p0: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "record-toggled", object: MixerTrack, p0: boolean): void
    connect(sigName: "volume-changed", callback: ((object: MixerTrack, p0: object) => void)): number
    on(sigName: "volume-changed", callback: (object: MixerTrack, p0: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "volume-changed", callback: (object: MixerTrack, p0: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "volume-changed", callback: (object: MixerTrack, p0: object) => void): NodeJS.EventEmitter
    emit(sigName: "volume-changed", object: MixerTrack, p0: object): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: ((object: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: ((object: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Gst.Object) => void)): number
    on(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: ((object: Gst.Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Gst.Object): void
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
    constructor (config?: Mixer_ConstructProps)
    _init (config?: Mixer_ConstructProps): void
    static $gtype: GObject.Type
}
class Navigation {
    /* Methods of GstInterfaces-0.10.GstInterfaces.Navigation */
    sendCommand(command: NavigationCommand): void
    sendEvent(structure: Gst.Structure): void
    sendKeyEvent(event: string, key: string): void
    sendMouseEvent(event: string, button: number, x: number, y: number): void
    static name: string
}
class PropertyProbe {
    /* Methods of GstInterfaces-0.10.GstInterfaces.PropertyProbe */
    getProperties(): object[]
    getProperty(name: string): GObject.ParamSpec
    getValues(pspec: GObject.ParamSpec): GObject.ValueArray
    getValuesName(name: string): GObject.ValueArray
    needsProbe(pspec: GObject.ParamSpec): boolean
    needsProbeName(name: string): boolean
    probeAndGetValues(pspec: GObject.ParamSpec): GObject.ValueArray
    probeAndGetValuesName(name: string): GObject.ValueArray
    probeProperty(pspec: GObject.ParamSpec): void
    probePropertyName(name: string): void
    /* Signals of GstInterfaces-0.10.GstInterfaces.PropertyProbe */
    connect(sigName: "probe-needed", callback: ((object: object) => void)): number
    on(sigName: "probe-needed", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "probe-needed", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "probe-needed", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "probe-needed", object: object): void
    static name: string
}
class StreamVolume {
    /* Properties of GstInterfaces-0.10.GstInterfaces.StreamVolume */
    mute: boolean
    volume: number
    /* Methods of GstInterfaces-0.10.GstInterfaces.StreamVolume */
    getMute(): boolean
    getVolume(format: StreamVolumeFormat): number
    setMute(mute: boolean): void
    setVolume(format: StreamVolumeFormat, val: number): void
    static name: string
}
interface Tuner_ConstructProps extends Gst.Element_ConstructProps {
}
class Tuner {
    /* Fields of Gst-0.10.Gst.Element */
    readonly object: Gst.Object
    readonly stateLock: any
    readonly stateCond: GLib.Cond
    readonly stateCookie: number
    readonly currentState: Gst.State
    readonly nextState: Gst.State
    readonly pendingState: Gst.State
    readonly lastReturn: Gst.StateChangeReturn
    readonly bus: Gst.Bus
    readonly clock: Gst.Clock
    readonly baseTime: Gst.ClockTimeDiff
    readonly numpads: number
    readonly pads: object[]
    readonly numsrcpads: number
    readonly srcpads: object[]
    readonly numsinkpads: number
    readonly sinkpads: object[]
    readonly padsCookie: number
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly namePrefix: string
    readonly parent: Gst.Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstInterfaces-0.10.GstInterfaces.Tuner */
    channelChanged(channel: TunerChannel): void
    frequencyChanged(channel: TunerChannel, frequency: number): void
    getFrequency(channel: TunerChannel): number
    listChannels(): object[]
    listNorms(): object[]
    normChanged(norm: TunerNorm): void
    setChannel(channel: TunerChannel): void
    setFrequency(channel: TunerChannel, frequency: number): void
    setNorm(norm: TunerNorm): void
    signalChanged(channel: TunerChannel, signal: number): void
    signalStrength(channel: TunerChannel): number
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): boolean
    providesClock(): boolean
    provideClock(): Gst.Clock
    getClock(): Gst.Clock
    setClock(clock: Gst.Clock): boolean
    setBaseTime(time: Gst.ClockTime): void
    getBaseTime(): Gst.ClockTime
    setStartTime(time: Gst.ClockTime): void
    getStartTime(): Gst.ClockTime
    isIndexable(): boolean
    setIndex(index: Gst.Index): void
    getIndex(): Gst.Index
    setBus(bus: Gst.Bus): void
    getBus(): Gst.Bus
    addPad(pad: Gst.Pad): boolean
    removePad(pad: Gst.Pad): boolean
    noMorePads(): void
    getPad(name: string): Gst.Pad
    getStaticPad(name: string): Gst.Pad
    getRequestPad(name: string): Gst.Pad
    releaseRequestPad(pad: Gst.Pad): void
    iteratePads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    sendEvent(event: Gst.Event): boolean
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, curType: Gst.SeekType, cur: number, stopType: Gst.SeekType, stop: number): boolean
    getQueryTypes(): Gst.QueryType
    query(query: Gst.Query): boolean
    postMessage(message: Gst.Message): boolean
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    isLockedState(): boolean
    setLockedState(lockedState: boolean): boolean
    syncStateWithParent(): boolean
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State, /* pending */ Gst.State ]
    setState(state: Gst.State): Gst.StateChangeReturn
    abortState(): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: boolean): void
    getFactory(): Gst.ElementFactory
    implementsInterface(ifaceType: GObject.Type): boolean
    createAllPads(): void
    getCompatiblePad(pad: Gst.Pad, caps: Gst.Caps): Gst.Pad
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate
    link(dest: Gst.Element): boolean
    linkFiltered(dest: Gst.Element, filter: Gst.Caps): boolean
    unlink(dest: Gst.Element): void
    linkPads(srcpadname: string, dest: Gst.Element, destpadname: string): boolean
    linkPadsFull(srcpadname: string, dest: Gst.Element, destpadname: string, flags: Gst.PadLinkCheck): boolean
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Gst.Element, destpadname: string, filter: Gst.Caps): boolean
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number ]
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number ]
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    foundTagsForPad(pad: Gst.Pad, list: Gst.TagList): void
    foundTags(list: Gst.TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Gst.Object): boolean
    getParent(): Gst.Object
    unparent(): void
    hasAncestor(ancestor: Gst.Object): boolean
    replace(newobj: Gst.Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of GstInterfaces-0.10.GstInterfaces.Tuner */
    connect(sigName: "channel-changed", callback: ((object: TunerChannel) => void)): number
    on(sigName: "channel-changed", callback: (object: TunerChannel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "channel-changed", callback: (object: TunerChannel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "channel-changed", callback: (object: TunerChannel) => void): NodeJS.EventEmitter
    emit(sigName: "channel-changed", object: TunerChannel): void
    connect(sigName: "frequency-changed", callback: ((object: TunerChannel, p0: number) => void)): number
    on(sigName: "frequency-changed", callback: (object: TunerChannel, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "frequency-changed", callback: (object: TunerChannel, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "frequency-changed", callback: (object: TunerChannel, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "frequency-changed", object: TunerChannel, p0: number): void
    connect(sigName: "norm-changed", callback: ((object: TunerNorm) => void)): number
    on(sigName: "norm-changed", callback: (object: TunerNorm) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "norm-changed", callback: (object: TunerNorm) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "norm-changed", callback: (object: TunerNorm) => void): NodeJS.EventEmitter
    emit(sigName: "norm-changed", object: TunerNorm): void
    connect(sigName: "signal-changed", callback: ((object: TunerChannel, p0: number) => void)): number
    on(sigName: "signal-changed", callback: (object: TunerChannel, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signal-changed", callback: (object: TunerChannel, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signal-changed", callback: (object: TunerChannel, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "signal-changed", object: TunerChannel, p0: number): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: ((object: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: ((object: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Gst.Object) => void)): number
    on(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: ((object: Gst.Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Gst.Object): void
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
    constructor (config?: Tuner_ConstructProps)
    _init (config?: Tuner_ConstructProps): void
    static $gtype: GObject.Type
}
interface VideoOrientation_ConstructProps extends Gst.Element_ConstructProps {
}
class VideoOrientation {
    /* Fields of Gst-0.10.Gst.Element */
    readonly object: Gst.Object
    readonly stateLock: any
    readonly stateCond: GLib.Cond
    readonly stateCookie: number
    readonly currentState: Gst.State
    readonly nextState: Gst.State
    readonly pendingState: Gst.State
    readonly lastReturn: Gst.StateChangeReturn
    readonly bus: Gst.Bus
    readonly clock: Gst.Clock
    readonly baseTime: Gst.ClockTimeDiff
    readonly numpads: number
    readonly pads: object[]
    readonly numsrcpads: number
    readonly srcpads: object[]
    readonly numsinkpads: number
    readonly sinkpads: object[]
    readonly padsCookie: number
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly namePrefix: string
    readonly parent: Gst.Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstInterfaces-0.10.GstInterfaces.VideoOrientation */
    getHcenter(center: number): boolean
    getHflip(flip: boolean): boolean
    getVcenter(center: number): boolean
    getVflip(flip: boolean): boolean
    setHcenter(center: number): boolean
    setHflip(flip: boolean): boolean
    setVcenter(center: number): boolean
    setVflip(flip: boolean): boolean
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): boolean
    providesClock(): boolean
    provideClock(): Gst.Clock
    getClock(): Gst.Clock
    setClock(clock: Gst.Clock): boolean
    setBaseTime(time: Gst.ClockTime): void
    getBaseTime(): Gst.ClockTime
    setStartTime(time: Gst.ClockTime): void
    getStartTime(): Gst.ClockTime
    isIndexable(): boolean
    setIndex(index: Gst.Index): void
    getIndex(): Gst.Index
    setBus(bus: Gst.Bus): void
    getBus(): Gst.Bus
    addPad(pad: Gst.Pad): boolean
    removePad(pad: Gst.Pad): boolean
    noMorePads(): void
    getPad(name: string): Gst.Pad
    getStaticPad(name: string): Gst.Pad
    getRequestPad(name: string): Gst.Pad
    releaseRequestPad(pad: Gst.Pad): void
    iteratePads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    sendEvent(event: Gst.Event): boolean
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, curType: Gst.SeekType, cur: number, stopType: Gst.SeekType, stop: number): boolean
    getQueryTypes(): Gst.QueryType
    query(query: Gst.Query): boolean
    postMessage(message: Gst.Message): boolean
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    isLockedState(): boolean
    setLockedState(lockedState: boolean): boolean
    syncStateWithParent(): boolean
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State, /* pending */ Gst.State ]
    setState(state: Gst.State): Gst.StateChangeReturn
    abortState(): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: boolean): void
    getFactory(): Gst.ElementFactory
    implementsInterface(ifaceType: GObject.Type): boolean
    createAllPads(): void
    getCompatiblePad(pad: Gst.Pad, caps: Gst.Caps): Gst.Pad
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate
    link(dest: Gst.Element): boolean
    linkFiltered(dest: Gst.Element, filter: Gst.Caps): boolean
    unlink(dest: Gst.Element): void
    linkPads(srcpadname: string, dest: Gst.Element, destpadname: string): boolean
    linkPadsFull(srcpadname: string, dest: Gst.Element, destpadname: string, flags: Gst.PadLinkCheck): boolean
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Gst.Element, destpadname: string, filter: Gst.Caps): boolean
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number ]
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number ]
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    foundTagsForPad(pad: Gst.Pad, list: Gst.TagList): void
    foundTags(list: Gst.TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Gst.Object): boolean
    getParent(): Gst.Object
    unparent(): void
    hasAncestor(ancestor: Gst.Object): boolean
    replace(newobj: Gst.Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: ((object: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: ((object: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Gst.Object) => void)): number
    on(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: ((object: Gst.Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Gst.Object): void
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
    constructor (config?: VideoOrientation_ConstructProps)
    _init (config?: VideoOrientation_ConstructProps): void
    static $gtype: GObject.Type
}
interface XOverlay_ConstructProps extends Gst.Element_ConstructProps {
}
class XOverlay {
    /* Fields of Gst-0.10.Gst.Element */
    readonly object: Gst.Object
    readonly stateLock: any
    readonly stateCond: GLib.Cond
    readonly stateCookie: number
    readonly currentState: Gst.State
    readonly nextState: Gst.State
    readonly pendingState: Gst.State
    readonly lastReturn: Gst.StateChangeReturn
    readonly bus: Gst.Bus
    readonly clock: Gst.Clock
    readonly baseTime: Gst.ClockTimeDiff
    readonly numpads: number
    readonly pads: object[]
    readonly numsrcpads: number
    readonly srcpads: object[]
    readonly numsinkpads: number
    readonly sinkpads: object[]
    readonly padsCookie: number
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly namePrefix: string
    readonly parent: Gst.Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstInterfaces-0.10.GstInterfaces.XOverlay */
    expose(): void
    gotXwindowId(xwindowId: number): void
    handleEvents(handleEvents: boolean): void
    prepareXwindowId(): void
    setRenderRectangle(x: number, y: number, width: number, height: number): boolean
    setXwindowId(xwindowId: number): void
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): boolean
    providesClock(): boolean
    provideClock(): Gst.Clock
    getClock(): Gst.Clock
    setClock(clock: Gst.Clock): boolean
    setBaseTime(time: Gst.ClockTime): void
    getBaseTime(): Gst.ClockTime
    setStartTime(time: Gst.ClockTime): void
    getStartTime(): Gst.ClockTime
    isIndexable(): boolean
    setIndex(index: Gst.Index): void
    getIndex(): Gst.Index
    setBus(bus: Gst.Bus): void
    getBus(): Gst.Bus
    addPad(pad: Gst.Pad): boolean
    removePad(pad: Gst.Pad): boolean
    noMorePads(): void
    getPad(name: string): Gst.Pad
    getStaticPad(name: string): Gst.Pad
    getRequestPad(name: string): Gst.Pad
    releaseRequestPad(pad: Gst.Pad): void
    iteratePads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    sendEvent(event: Gst.Event): boolean
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, curType: Gst.SeekType, cur: number, stopType: Gst.SeekType, stop: number): boolean
    getQueryTypes(): Gst.QueryType
    query(query: Gst.Query): boolean
    postMessage(message: Gst.Message): boolean
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    isLockedState(): boolean
    setLockedState(lockedState: boolean): boolean
    syncStateWithParent(): boolean
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State, /* pending */ Gst.State ]
    setState(state: Gst.State): Gst.StateChangeReturn
    abortState(): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: boolean): void
    getFactory(): Gst.ElementFactory
    implementsInterface(ifaceType: GObject.Type): boolean
    createAllPads(): void
    getCompatiblePad(pad: Gst.Pad, caps: Gst.Caps): Gst.Pad
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate
    link(dest: Gst.Element): boolean
    linkFiltered(dest: Gst.Element, filter: Gst.Caps): boolean
    unlink(dest: Gst.Element): void
    linkPads(srcpadname: string, dest: Gst.Element, destpadname: string): boolean
    linkPadsFull(srcpadname: string, dest: Gst.Element, destpadname: string, flags: Gst.PadLinkCheck): boolean
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Gst.Element, destpadname: string, filter: Gst.Caps): boolean
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number ]
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number ]
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    foundTagsForPad(pad: Gst.Pad, list: Gst.TagList): void
    foundTags(list: Gst.TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Gst.Object): boolean
    getParent(): Gst.Object
    unparent(): void
    hasAncestor(ancestor: Gst.Object): boolean
    replace(newobj: Gst.Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: ((object: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: ((object: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Gst.Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Gst.Object) => void)): number
    on(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: ((object: Gst.Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Gst.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Gst.Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Gst.Object): void
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
    constructor (config?: XOverlay_ConstructProps)
    _init (config?: XOverlay_ConstructProps): void
    static $gtype: GObject.Type
}
interface ColorBalanceChannel_ConstructProps extends GObject.Object_ConstructProps {
}
class ColorBalanceChannel {
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
    /* Signals of GstInterfaces-0.10.GstInterfaces.ColorBalanceChannel */
    connect(sigName: "value-changed", callback: ((object: number) => void)): number
    on(sigName: "value-changed", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "value-changed", object: number): void
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
    constructor (config?: ColorBalanceChannel_ConstructProps)
    _init (config?: ColorBalanceChannel_ConstructProps): void
    static $gtype: GObject.Type
}
interface MixerOptions_ConstructProps extends MixerTrack_ConstructProps {
}
class MixerOptions {
    /* Fields of GstInterfaces-0.10.GstInterfaces.MixerTrack */
    readonly parent: GObject.Object
    readonly label: string
    readonly flags: MixerTrackFlags
    readonly numChannels: number
    readonly minVolume: number
    readonly maxVolume: number
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
    constructor (config?: MixerOptions_ConstructProps)
    _init (config?: MixerOptions_ConstructProps): void
    static $gtype: GObject.Type
}
interface MixerTrack_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GstInterfaces-0.10.GstInterfaces.MixerTrack */
    index?: number
    untranslatedLabel?: string
}
class MixerTrack {
    /* Properties of GstInterfaces-0.10.GstInterfaces.MixerTrack */
    readonly flags: number
    readonly label: string
    readonly maxVolume: number
    readonly minVolume: number
    readonly numChannels: number
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
    connect(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-volume", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-volume", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-volume", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-volume", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-channels", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-channels", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MixerTrack_ConstructProps)
    _init (config?: MixerTrack_ConstructProps): void
    static $gtype: GObject.Type
}
interface TunerChannel_ConstructProps extends GObject.Object_ConstructProps {
}
class TunerChannel {
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
    /* Signals of GstInterfaces-0.10.GstInterfaces.TunerChannel */
    connect(sigName: "frequency-changed", callback: ((object: number) => void)): number
    on(sigName: "frequency-changed", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "frequency-changed", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "frequency-changed", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "frequency-changed", object: number): void
    connect(sigName: "signal-changed", callback: ((object: number) => void)): number
    on(sigName: "signal-changed", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "signal-changed", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "signal-changed", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "signal-changed", object: number): void
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
    constructor (config?: TunerChannel_ConstructProps)
    _init (config?: TunerChannel_ConstructProps): void
    static $gtype: GObject.Type
}
interface TunerNorm_ConstructProps extends GObject.Object_ConstructProps {
}
class TunerNorm {
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
    constructor (config?: TunerNorm_ConstructProps)
    _init (config?: TunerNorm_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class ColorBalanceChannelClass {
    /* Fields of GstInterfaces-0.10.GstInterfaces.ColorBalanceChannelClass */
    readonly parent: GObject.ObjectClass
    readonly valueChanged: (channel: ColorBalanceChannel, value: number) => void
    readonly gstReserved: object[]
    static name: string
}
class ColorBalanceClass {
    /* Fields of GstInterfaces-0.10.GstInterfaces.ColorBalanceClass */
    readonly klass: GObject.TypeInterface
    readonly balanceType: ColorBalanceType
    readonly listChannels: (balance: ColorBalance) => object[]
    readonly setValue: (balance: ColorBalance, channel: ColorBalanceChannel, value: number) => void
    readonly getValue: (balance: ColorBalance, channel: ColorBalanceChannel) => number
    readonly valueChanged: (balance: ColorBalance, channel: ColorBalanceChannel, value: number) => void
    readonly gstReserved: object[]
    static name: string
}
class MixerClass {
    /* Fields of GstInterfaces-0.10.GstInterfaces.MixerClass */
    readonly klass: GObject.TypeInterface
    readonly mixerType: MixerType
    readonly listTracks: (mixer: Mixer) => object[]
    readonly setVolume: (mixer: Mixer, track: MixerTrack, volumes: number) => void
    readonly getVolume: (mixer: Mixer, track: MixerTrack, volumes: number) => void
    readonly setMute: (mixer: Mixer, track: MixerTrack, mute: boolean) => void
    readonly setRecord: (mixer: Mixer, track: MixerTrack, record: boolean) => void
    readonly muteToggled: (mixer: Mixer, channel: MixerTrack, mute: boolean) => void
    readonly recordToggled: (mixer: Mixer, channel: MixerTrack, record: boolean) => void
    readonly volumeChanged: (mixer: Mixer, channel: MixerTrack, volumes: number) => void
    readonly setOption: (mixer: Mixer, opts: MixerOptions, value: string) => void
    readonly getOption: (mixer: Mixer, opts: MixerOptions) => string
    readonly optionChanged: (mixer: Mixer, opts: MixerOptions, option: string) => void
    readonly getMixerFlags: (mixer: Mixer) => MixerFlags
    readonly gstReserved: object[]
    static name: string
}
abstract class MixerOptionsClass {
    /* Fields of GstInterfaces-0.10.GstInterfaces.MixerOptionsClass */
    readonly parent: MixerTrackClass
    readonly gstReserved: object[]
    static name: string
}
abstract class MixerTrackClass {
    /* Fields of GstInterfaces-0.10.GstInterfaces.MixerTrackClass */
    readonly parent: GObject.ObjectClass
    readonly gstReserved: object[]
    static name: string
}
abstract class NavigationInterface {
    /* Fields of GstInterfaces-0.10.GstInterfaces.NavigationInterface */
    readonly gIface: GObject.TypeInterface
    readonly sendEvent: (navigation: Navigation, structure: Gst.Structure) => void
    readonly gstReserved: object[]
    static name: string
}
abstract class PropertyProbeInterface {
    /* Fields of GstInterfaces-0.10.GstInterfaces.PropertyProbeInterface */
    readonly klass: GObject.TypeInterface
    readonly probeNeeded: (probe: PropertyProbe, pspec: GObject.ParamSpec) => void
    readonly getProperties: (probe: PropertyProbe) => object[]
    readonly needsProbe: (probe: PropertyProbe, propId: number, pspec: GObject.ParamSpec) => boolean
    readonly probeProperty: (probe: PropertyProbe, propId: number, pspec: GObject.ParamSpec) => void
    readonly getValues: (probe: PropertyProbe, propId: number, pspec: GObject.ParamSpec) => GObject.ValueArray
    readonly gstReserved: object[]
    static name: string
}
abstract class StreamVolumeInterface {
    /* Fields of GstInterfaces-0.10.GstInterfaces.StreamVolumeInterface */
    readonly parent: GObject.TypeInterface
    readonly gstReserved: object[]
    static name: string
}
abstract class TunerChannelClass {
    /* Fields of GstInterfaces-0.10.GstInterfaces.TunerChannelClass */
    readonly parent: GObject.ObjectClass
    readonly frequencyChanged: (channel: TunerChannel, frequency: number) => void
    readonly signalChanged: (channel: TunerChannel, signal: number) => void
    readonly gstReserved: object[]
    static name: string
}
class TunerClass {
    /* Fields of GstInterfaces-0.10.GstInterfaces.TunerClass */
    readonly klass: GObject.TypeInterface
    readonly listChannels: (tuner: Tuner) => object[]
    readonly setChannel: (tuner: Tuner, channel: TunerChannel) => void
    readonly listNorms: (tuner: Tuner) => object[]
    readonly setNorm: (tuner: Tuner, norm: TunerNorm) => void
    readonly setFrequency: (tuner: Tuner, channel: TunerChannel, frequency: number) => void
    readonly getFrequency: (tuner: Tuner, channel: TunerChannel) => number
    readonly signalStrength: (tuner: Tuner, channel: TunerChannel) => number
    readonly channelChanged: (tuner: Tuner, channel: TunerChannel) => void
    readonly normChanged: (tuner: Tuner, norm: TunerNorm) => void
    readonly frequencyChanged: (tuner: Tuner, channel: TunerChannel, frequency: number) => void
    readonly signalChanged: (tuner: Tuner, channel: TunerChannel, signal: number) => void
    readonly gstReserved: object[]
    static name: string
}
abstract class TunerNormClass {
    /* Fields of GstInterfaces-0.10.GstInterfaces.TunerNormClass */
    readonly parent: GObject.ObjectClass
    readonly gstReserved: object[]
    static name: string
}
abstract class VideoOrientationInterface {
    /* Fields of GstInterfaces-0.10.GstInterfaces.VideoOrientationInterface */
    readonly parent: GObject.TypeInterface
    readonly getHflip: (videoOrientation: VideoOrientation, flip: boolean) => boolean
    readonly getVflip: (videoOrientation: VideoOrientation, flip: boolean) => boolean
    readonly getHcenter: (videoOrientation: VideoOrientation, center: number) => boolean
    readonly getVcenter: (videoOrientation: VideoOrientation, center: number) => boolean
    readonly setHflip: (videoOrientation: VideoOrientation, flip: boolean) => boolean
    readonly setVflip: (videoOrientation: VideoOrientation, flip: boolean) => boolean
    readonly setHcenter: (videoOrientation: VideoOrientation, center: number) => boolean
    readonly setVcenter: (videoOrientation: VideoOrientation, center: number) => boolean
    static name: string
}
class XOverlayClass {
    /* Fields of GstInterfaces-0.10.GstInterfaces.XOverlayClass */
    readonly klass: GObject.TypeInterface
    readonly setXwindowId: (overlay: XOverlay, xwindowId: number) => void
    readonly expose: (overlay: XOverlay) => void
    readonly handleEvents: (overlay: XOverlay, handleEvents: boolean) => void
    readonly setRenderRectangle: (overlay: XOverlay, x: number, y: number, width: number, height: number) => void
    readonly gstReserved: object[]
    static name: string
}
}
export default GstInterfaces;