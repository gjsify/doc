/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstRtp-1.0
 */

import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstRtp {

enum RTCPFBType {
    FB_TYPE_INVALID,
    RTPFB_TYPE_NACK,
    RTPFB_TYPE_TMMBR,
    RTPFB_TYPE_TMMBN,
    RTPFB_TYPE_RTCP_SR_REQ,
    RTPFB_TYPE_TWCC,
    PSFB_TYPE_PLI,
    PSFB_TYPE_SLI,
    PSFB_TYPE_RPSI,
    PSFB_TYPE_AFB,
    PSFB_TYPE_FIR,
    PSFB_TYPE_TSTR,
    PSFB_TYPE_TSTN,
    PSFB_TYPE_VBCN,
}
enum RTCPSDESType {
    INVALID,
    END,
    CNAME,
    NAME,
    EMAIL,
    PHONE,
    LOC,
    TOOL,
    NOTE,
    PRIV,
    H323_CADDR,
    APSI,
    RGRP,
    RTP_STREAM_ID,
    REPAIRED_RTP_STREAM_ID,
    CCID,
    MID,
}
enum RTCPType {
    INVALID,
    SR,
    RR,
    SDES,
    BYE,
    APP,
    RTPFB,
    PSFB,
    XR,
}
enum RTCPXRType {
    INVALID,
    LRLE,
    DRLE,
    PRT,
    RRT,
    DLRR,
    SSUMM,
    VOIP_METRICS,
}
enum RTPPayload {
    PCMU,
    TODO_1016,
    G721,
    GSM,
    G723,
    DVI4_8000,
    DVI4_16000,
    LPC,
    PCMA,
    G722,
    L16_STEREO,
    L16_MONO,
    QCELP,
    CN,
    MPA,
    G728,
    DVI4_11025,
    DVI4_22050,
    G729,
    CELLB,
    JPEG,
    NV,
    H261,
    MPV,
    MP2T,
    H263,
}
enum RTPProfile {
    UNKNOWN,
    AVP,
    SAVP,
    AVPF,
    SAVPF,
}
enum RTPBufferFlags {
    RETRANSMISSION,
    REDUNDANT,
    LAST,
}
enum RTPBufferMapFlags {
    SKIP_PADDING,
    LAST,
}
enum RTPHeaderExtensionDirection {
    INACTIVE,
    SENDONLY,
    RECVONLY,
    SENDRECV,
    INHERITED,
}
enum RTPHeaderExtensionFlags {
    ONE_BYTE,
    TWO_BYTE,
}
const RTCP_MAX_BYE_SSRC_COUNT: number
const RTCP_MAX_RB_COUNT: number
const RTCP_MAX_SDES: number
const RTCP_MAX_SDES_ITEM_COUNT: number
const RTCP_REDUCED_SIZE_VALID_MASK: number
const RTCP_VALID_MASK: number
const RTCP_VALID_VALUE: number
const RTCP_VERSION: number
const RTP_HDREXT_BASE: string
const RTP_HDREXT_ELEMENT_CLASS: string
const RTP_HDREXT_NTP_56: string
const RTP_HDREXT_NTP_56_SIZE: number
const RTP_HDREXT_NTP_64: string
const RTP_HDREXT_NTP_64_SIZE: number
const RTP_HEADER_EXTENSION_URI_METADATA_KEY: string
const RTP_PAYLOAD_1016_STRING: string
const RTP_PAYLOAD_CELLB_STRING: string
const RTP_PAYLOAD_CN_STRING: string
const RTP_PAYLOAD_DVI4_11025_STRING: string
const RTP_PAYLOAD_DVI4_16000_STRING: string
const RTP_PAYLOAD_DVI4_22050_STRING: string
const RTP_PAYLOAD_DVI4_8000_STRING: string
const RTP_PAYLOAD_DYNAMIC_STRING: string
const RTP_PAYLOAD_G721_STRING: string
const RTP_PAYLOAD_G722_STRING: string
const RTP_PAYLOAD_G723_53: number
const RTP_PAYLOAD_G723_53_STRING: string
const RTP_PAYLOAD_G723_63: number
const RTP_PAYLOAD_G723_63_STRING: string
const RTP_PAYLOAD_G723_STRING: string
const RTP_PAYLOAD_G728_STRING: string
const RTP_PAYLOAD_G729_STRING: string
const RTP_PAYLOAD_GSM_STRING: string
const RTP_PAYLOAD_H261_STRING: string
const RTP_PAYLOAD_H263_STRING: string
const RTP_PAYLOAD_JPEG_STRING: string
const RTP_PAYLOAD_L16_MONO_STRING: string
const RTP_PAYLOAD_L16_STEREO_STRING: string
const RTP_PAYLOAD_LPC_STRING: string
const RTP_PAYLOAD_MP2T_STRING: string
const RTP_PAYLOAD_MPA_STRING: string
const RTP_PAYLOAD_MPV_STRING: string
const RTP_PAYLOAD_NV_STRING: string
const RTP_PAYLOAD_PCMA_STRING: string
const RTP_PAYLOAD_PCMU_STRING: string
const RTP_PAYLOAD_QCELP_STRING: string
const RTP_PAYLOAD_TS41: number
const RTP_PAYLOAD_TS41_STRING: string
const RTP_PAYLOAD_TS48: number
const RTP_PAYLOAD_TS48_STRING: string
const RTP_SOURCE_META_MAX_CSRC_COUNT: number
const RTP_VERSION: number
function bufferAddRtpSourceMeta(buffer: Gst.Buffer, ssrc: number | null, csrc: number | null, csrcCount: number): RTPSourceMeta
function bufferGetRtpSourceMeta(buffer: Gst.Buffer): RTPSourceMeta
function rtcpBufferMap(buffer: Gst.Buffer, flags: Gst.MapFlags, rtcp: RTCPBuffer): boolean
function rtcpBufferNew(mtu: number): Gst.Buffer
function rtcpBufferNewCopyData(data: Uint8Array): Gst.Buffer
function rtcpBufferNewTakeData(data: Uint8Array): Gst.Buffer
function rtcpBufferValidate(buffer: Gst.Buffer): boolean
function rtcpBufferValidateData(data: Uint8Array): boolean
function rtcpBufferValidateDataReduced(data: Uint8Array): boolean
function rtcpBufferValidateReduced(buffer: Gst.Buffer): boolean
function rtcpNtpToUnix(ntptime: number): number
function rtcpSdesNameToType(name: string): RTCPSDESType
function rtcpSdesTypeToName(type: RTCPSDESType): string
function rtcpUnixToNtp(unixtime: number): number
function rtpBufferAllocateData(buffer: Gst.Buffer, payloadLen: number, padLen: number, csrcCount: number): void
function rtpBufferCalcHeaderLen(csrcCount: number): number
function rtpBufferCalcPacketLen(payloadLen: number, padLen: number, csrcCount: number): number
function rtpBufferCalcPayloadLen(packetLen: number, padLen: number, csrcCount: number): number
function rtpBufferCompareSeqnum(seqnum1: number, seqnum2: number): number
function rtpBufferDefaultClockRate(payloadType: number): number
function rtpBufferExtTimestamp(exttimestamp: number, timestamp: number): [ /* returnType */ number, /* exttimestamp */ number ]
function rtpBufferGetExtensionOnebyteHeaderFromBytes(bytes: any, bitPattern: number, id: number, nth: number): [ /* returnType */ boolean, /* data */ Uint8Array ]
function rtpBufferMap(buffer: Gst.Buffer, flags: Gst.MapFlags): [ /* returnType */ boolean, /* rtp */ RTPBuffer ]
function rtpBufferNewAllocate(payloadLen: number, padLen: number, csrcCount: number): Gst.Buffer
function rtpBufferNewAllocateLen(packetLen: number, padLen: number, csrcCount: number): Gst.Buffer
function rtpBufferNewCopyData(data: Uint8Array): Gst.Buffer
function rtpBufferNewTakeData(data: Uint8Array): Gst.Buffer
function rtpGetHeaderExtensionList(): Gst.ElementFactory[]
function rtpHdrextGetNtp56(data: Uint8Array): [ /* returnType */ boolean, /* ntptime */ number ]
function rtpHdrextGetNtp64(data: Uint8Array): [ /* returnType */ boolean, /* ntptime */ number ]
function rtpHdrextSetNtp56(data: object | null, size: number, ntptime: number): boolean
function rtpHdrextSetNtp64(data: object | null, size: number, ntptime: number): boolean
function rtpPayloadInfoForName(media: string, encodingName: string): RTPPayloadInfo
function rtpPayloadInfoForPt(payloadType: number): RTPPayloadInfo
function rtpSourceMetaApiGetType(): GObject.Type
function rtpSourceMetaGetInfo(): Gst.MetaInfo
interface RTPBaseAudioPayload_ConstructProps extends RTPBasePayload_ConstructProps {
    /* Constructor properties of GstRtp-1.0.GstRtp.RTPBaseAudioPayload */
    bufferList?: boolean
}
class RTPBaseAudioPayload {
    /* Properties of GstRtp-1.0.GstRtp.RTPBaseAudioPayload */
    bufferList: boolean
    /* Properties of GstRtp-1.0.GstRtp.RTPBasePayload */
    autoHeaderExtension: boolean
    maxPtime: number
    minPtime: number
    mtu: number
    onvifNoRateControl: boolean
    perfectRtptime: boolean
    pt: number
    ptimeMultiple: number
    scaleRtptime: boolean
    readonly seqnum: number
    seqnumOffset: number
    sourceInfo: boolean
    ssrc: number
    readonly stats: Gst.Structure
    readonly timestamp: number
    timestampOffset: number
    /* Fields of GstRtp-1.0.GstRtp.RTPBasePayload */
    readonly element: Gst.Element
    /* Fields of Gst-1.0.Gst.Element */
    readonly object: Gst.Object
    readonly stateLock: GLib.RecMutex
    readonly stateCond: GLib.Cond
    readonly stateCookie: number
    readonly targetState: Gst.State
    readonly currentState: Gst.State
    readonly nextState: Gst.State
    readonly pendingState: Gst.State
    readonly lastReturn: Gst.StateChangeReturn
    readonly bus: Gst.Bus
    readonly clock: Gst.Clock
    readonly baseTime: Gst.ClockTimeDiff
    readonly startTime: Gst.ClockTime
    readonly numpads: number
    readonly pads: Gst.Pad[]
    readonly numsrcpads: number
    readonly srcpads: Gst.Pad[]
    readonly numsinkpads: number
    readonly sinkpads: Gst.Pad[]
    readonly padsCookie: number
    readonly contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstRtp-1.0.GstRtp.RTPBaseAudioPayload */
    flush(payloadLen: number, timestamp: Gst.ClockTime): Gst.FlowReturn
    getAdapter(): GstBase.Adapter
    push(data: Uint8Array, timestamp: Gst.ClockTime): Gst.FlowReturn
    setFrameBased(): void
    setFrameOptions(frameDuration: number, frameSize: number): void
    setSampleBased(): void
    setSampleOptions(sampleSize: number): void
    setSamplebitsOptions(sampleSize: number): void
    /* Methods of GstRtp-1.0.GstRtp.RTPBasePayload */
    allocateOutputBuffer(payloadLen: number, padLen: number, csrcCount: number): Gst.Buffer
    getSourceCount(buffer: Gst.Buffer): number
    isFilled(size: number, duration: Gst.ClockTime): boolean
    isSourceInfoEnabled(): boolean
    push(buffer: Gst.Buffer): Gst.FlowReturn
    pushList(list: Gst.BufferList): Gst.FlowReturn
    setOptions(media: string, dynamic: boolean, encodingName: string, clockRate: number): void
    setOutcapsStructure(s?: Gst.Structure | null): boolean
    setSourceInfoEnabled(enable: boolean): void
    /* Methods of Gst-1.0.Gst.Element */
    abortState(): void
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: Gst.ElementCallAsyncFunc): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    createAllPads(): void
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    getBaseTime(): Gst.ClockTime
    getBus(): Gst.Bus | null
    getClock(): Gst.Clock | null
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    getContext(contextType: string): Gst.Context | null
    getContextUnlocked(contextType: string): Gst.Context | null
    getContexts(): Gst.Context[]
    getCurrentClockTime(): Gst.ClockTime
    getCurrentRunningTime(): Gst.ClockTime
    getFactory(): Gst.ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): Gst.PadTemplate | null
    getPadTemplateList(): Gst.PadTemplate[]
    getRequestPad(name: string): Gst.Pad | null
    getStartTime(): Gst.ClockTime
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    getStaticPad(name: string): Gst.Pad | null
    isLockedState(): boolean
    iteratePads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lostState(): void
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    noMorePads(): void
    postMessage(message: Gst.Message): boolean
    provideClock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    releaseRequestPad(pad: Gst.Pad): void
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    requestPadSimple(name: string): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    sendEvent(event: Gst.Event): boolean
    setBaseTime(time: Gst.ClockTime): void
    setBus(bus?: Gst.Bus | null): void
    setClock(clock?: Gst.Clock | null): boolean
    setContext(context: Gst.Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: Gst.ClockTime): void
    setState(state: Gst.State): Gst.StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Gst.Element): void
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of GstRtp-1.0.GstRtp.RTPBasePayload */
    connect(sigName: "add-extension", callback: ((ext: RTPHeaderExtension) => void)): number
    on(sigName: "add-extension", callback: (ext: RTPHeaderExtension) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "add-extension", callback: (ext: RTPHeaderExtension) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "add-extension", callback: (ext: RTPHeaderExtension) => void): NodeJS.EventEmitter
    emit(sigName: "add-extension", ext: RTPHeaderExtension): void
    connect(sigName: "clear-extensions", callback: (() => void)): number
    on(sigName: "clear-extensions", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "clear-extensions", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "clear-extensions", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "clear-extensions"): void
    connect(sigName: "request-extension", callback: ((extId: number, extUri: string) => RTPHeaderExtension)): number
    on(sigName: "request-extension", callback: (extId: number, extUri: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-extension", callback: (extId: number, extUri: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-extension", callback: (extId: number, extUri: string) => void): NodeJS.EventEmitter
    emit(sigName: "request-extension", extId: number, extUri: string): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: ((newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: ((oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::buffer-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-header-extension", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-header-extension", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-ptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-ptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-ptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-ptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::onvif-no-rate-control", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::onvif-no-rate-control", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::onvif-no-rate-control", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::onvif-no-rate-control", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::onvif-no-rate-control", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::perfect-rtptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::perfect-rtptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::perfect-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::perfect-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::perfect-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pt", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pt", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ptime-multiple", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ptime-multiple", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ptime-multiple", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ptime-multiple", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ptime-multiple", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-rtptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-rtptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seqnum", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seqnum", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seqnum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seqnum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seqnum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seqnum-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seqnum-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seqnum-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seqnum-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seqnum-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssrc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssrc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssrc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssrc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssrc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RTPBaseAudioPayload_ConstructProps)
    _init (config?: RTPBaseAudioPayload_ConstructProps): void
    static $gtype: GObject.Type
}
interface RTPBaseDepayload_ConstructProps extends Gst.Element_ConstructProps {
    /* Constructor properties of GstRtp-1.0.GstRtp.RTPBaseDepayload */
    autoHeaderExtension?: boolean
    maxReorder?: number
    sourceInfo?: boolean
}
class RTPBaseDepayload {
    /* Properties of GstRtp-1.0.GstRtp.RTPBaseDepayload */
    autoHeaderExtension: boolean
    maxReorder: number
    sourceInfo: boolean
    readonly stats: Gst.Structure
    /* Fields of Gst-1.0.Gst.Element */
    readonly object: Gst.Object
    readonly stateLock: GLib.RecMutex
    readonly stateCond: GLib.Cond
    readonly stateCookie: number
    readonly targetState: Gst.State
    readonly currentState: Gst.State
    readonly nextState: Gst.State
    readonly pendingState: Gst.State
    readonly lastReturn: Gst.StateChangeReturn
    readonly bus: Gst.Bus
    readonly clock: Gst.Clock
    readonly baseTime: Gst.ClockTimeDiff
    readonly startTime: Gst.ClockTime
    readonly numpads: number
    readonly pads: Gst.Pad[]
    readonly numsrcpads: number
    readonly srcpads: Gst.Pad[]
    readonly numsinkpads: number
    readonly sinkpads: Gst.Pad[]
    readonly padsCookie: number
    readonly contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstRtp-1.0.GstRtp.RTPBaseDepayload */
    isSourceInfoEnabled(): boolean
    push(outBuf: Gst.Buffer): Gst.FlowReturn
    pushList(outList: Gst.BufferList): Gst.FlowReturn
    setSourceInfoEnabled(enable: boolean): void
    /* Methods of Gst-1.0.Gst.Element */
    abortState(): void
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: Gst.ElementCallAsyncFunc): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    createAllPads(): void
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    getBaseTime(): Gst.ClockTime
    getBus(): Gst.Bus | null
    getClock(): Gst.Clock | null
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    getContext(contextType: string): Gst.Context | null
    getContextUnlocked(contextType: string): Gst.Context | null
    getContexts(): Gst.Context[]
    getCurrentClockTime(): Gst.ClockTime
    getCurrentRunningTime(): Gst.ClockTime
    getFactory(): Gst.ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): Gst.PadTemplate | null
    getPadTemplateList(): Gst.PadTemplate[]
    getRequestPad(name: string): Gst.Pad | null
    getStartTime(): Gst.ClockTime
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    getStaticPad(name: string): Gst.Pad | null
    isLockedState(): boolean
    iteratePads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lostState(): void
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    noMorePads(): void
    postMessage(message: Gst.Message): boolean
    provideClock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    releaseRequestPad(pad: Gst.Pad): void
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    requestPadSimple(name: string): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    sendEvent(event: Gst.Event): boolean
    setBaseTime(time: Gst.ClockTime): void
    setBus(bus?: Gst.Bus | null): void
    setClock(clock?: Gst.Clock | null): boolean
    setContext(context: Gst.Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: Gst.ClockTime): void
    setState(state: Gst.State): Gst.StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Gst.Element): void
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of GstRtp-1.0.GstRtp.RTPBaseDepayload */
    connect(sigName: "add-extension", callback: ((ext: RTPHeaderExtension) => void)): number
    on(sigName: "add-extension", callback: (ext: RTPHeaderExtension) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "add-extension", callback: (ext: RTPHeaderExtension) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "add-extension", callback: (ext: RTPHeaderExtension) => void): NodeJS.EventEmitter
    emit(sigName: "add-extension", ext: RTPHeaderExtension): void
    connect(sigName: "clear-extensions", callback: (() => void)): number
    on(sigName: "clear-extensions", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "clear-extensions", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "clear-extensions", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "clear-extensions"): void
    connect(sigName: "request-extension", callback: ((extId: number, extUri?: string | null) => RTPHeaderExtension)): number
    on(sigName: "request-extension", callback: (extId: number, extUri?: string | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-extension", callback: (extId: number, extUri?: string | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-extension", callback: (extId: number, extUri?: string | null) => void): NodeJS.EventEmitter
    emit(sigName: "request-extension", extId: number, extUri?: string | null): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: ((newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: ((oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-header-extension", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-header-extension", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-reorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-reorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-reorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-reorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-reorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RTPBaseDepayload_ConstructProps)
    _init (config?: RTPBaseDepayload_ConstructProps): void
    static $gtype: GObject.Type
}
interface RTPBasePayload_ConstructProps extends Gst.Element_ConstructProps {
    /* Constructor properties of GstRtp-1.0.GstRtp.RTPBasePayload */
    autoHeaderExtension?: boolean
    maxPtime?: number
    minPtime?: number
    mtu?: number
    onvifNoRateControl?: boolean
    perfectRtptime?: boolean
    pt?: number
    ptimeMultiple?: number
    scaleRtptime?: boolean
    seqnumOffset?: number
    sourceInfo?: boolean
    ssrc?: number
    timestampOffset?: number
}
class RTPBasePayload {
    /* Properties of GstRtp-1.0.GstRtp.RTPBasePayload */
    autoHeaderExtension: boolean
    maxPtime: number
    minPtime: number
    mtu: number
    onvifNoRateControl: boolean
    perfectRtptime: boolean
    pt: number
    ptimeMultiple: number
    scaleRtptime: boolean
    readonly seqnum: number
    seqnumOffset: number
    sourceInfo: boolean
    ssrc: number
    readonly stats: Gst.Structure
    readonly timestamp: number
    timestampOffset: number
    /* Fields of Gst-1.0.Gst.Element */
    readonly object: Gst.Object
    readonly stateLock: GLib.RecMutex
    readonly stateCond: GLib.Cond
    readonly stateCookie: number
    readonly targetState: Gst.State
    readonly currentState: Gst.State
    readonly nextState: Gst.State
    readonly pendingState: Gst.State
    readonly lastReturn: Gst.StateChangeReturn
    readonly bus: Gst.Bus
    readonly clock: Gst.Clock
    readonly baseTime: Gst.ClockTimeDiff
    readonly startTime: Gst.ClockTime
    readonly numpads: number
    readonly pads: Gst.Pad[]
    readonly numsrcpads: number
    readonly srcpads: Gst.Pad[]
    readonly numsinkpads: number
    readonly sinkpads: Gst.Pad[]
    readonly padsCookie: number
    readonly contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstRtp-1.0.GstRtp.RTPBasePayload */
    allocateOutputBuffer(payloadLen: number, padLen: number, csrcCount: number): Gst.Buffer
    getSourceCount(buffer: Gst.Buffer): number
    isFilled(size: number, duration: Gst.ClockTime): boolean
    isSourceInfoEnabled(): boolean
    push(buffer: Gst.Buffer): Gst.FlowReturn
    pushList(list: Gst.BufferList): Gst.FlowReturn
    setOptions(media: string, dynamic: boolean, encodingName: string, clockRate: number): void
    setOutcapsStructure(s?: Gst.Structure | null): boolean
    setSourceInfoEnabled(enable: boolean): void
    /* Methods of Gst-1.0.Gst.Element */
    abortState(): void
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: Gst.ElementCallAsyncFunc): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    createAllPads(): void
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    getBaseTime(): Gst.ClockTime
    getBus(): Gst.Bus | null
    getClock(): Gst.Clock | null
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    getContext(contextType: string): Gst.Context | null
    getContextUnlocked(contextType: string): Gst.Context | null
    getContexts(): Gst.Context[]
    getCurrentClockTime(): Gst.ClockTime
    getCurrentRunningTime(): Gst.ClockTime
    getFactory(): Gst.ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): Gst.PadTemplate | null
    getPadTemplateList(): Gst.PadTemplate[]
    getRequestPad(name: string): Gst.Pad | null
    getStartTime(): Gst.ClockTime
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    getStaticPad(name: string): Gst.Pad | null
    isLockedState(): boolean
    iteratePads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lostState(): void
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    noMorePads(): void
    postMessage(message: Gst.Message): boolean
    provideClock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    releaseRequestPad(pad: Gst.Pad): void
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    requestPadSimple(name: string): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    sendEvent(event: Gst.Event): boolean
    setBaseTime(time: Gst.ClockTime): void
    setBus(bus?: Gst.Bus | null): void
    setClock(clock?: Gst.Clock | null): boolean
    setContext(context: Gst.Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: Gst.ClockTime): void
    setState(state: Gst.State): Gst.StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Gst.Element): void
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of GstRtp-1.0.GstRtp.RTPBasePayload */
    connect(sigName: "add-extension", callback: ((ext: RTPHeaderExtension) => void)): number
    on(sigName: "add-extension", callback: (ext: RTPHeaderExtension) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "add-extension", callback: (ext: RTPHeaderExtension) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "add-extension", callback: (ext: RTPHeaderExtension) => void): NodeJS.EventEmitter
    emit(sigName: "add-extension", ext: RTPHeaderExtension): void
    connect(sigName: "clear-extensions", callback: (() => void)): number
    on(sigName: "clear-extensions", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "clear-extensions", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "clear-extensions", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "clear-extensions"): void
    connect(sigName: "request-extension", callback: ((extId: number, extUri: string) => RTPHeaderExtension)): number
    on(sigName: "request-extension", callback: (extId: number, extUri: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-extension", callback: (extId: number, extUri: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-extension", callback: (extId: number, extUri: string) => void): NodeJS.EventEmitter
    emit(sigName: "request-extension", extId: number, extUri: string): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: ((newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: ((oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-header-extension", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-header-extension", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-ptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-ptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-ptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-ptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::onvif-no-rate-control", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::onvif-no-rate-control", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::onvif-no-rate-control", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::onvif-no-rate-control", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::onvif-no-rate-control", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::perfect-rtptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::perfect-rtptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::perfect-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::perfect-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::perfect-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pt", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pt", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ptime-multiple", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ptime-multiple", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ptime-multiple", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ptime-multiple", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ptime-multiple", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-rtptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-rtptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seqnum", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seqnum", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seqnum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seqnum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seqnum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seqnum-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seqnum-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seqnum-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seqnum-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seqnum-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssrc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssrc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssrc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssrc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssrc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RTPBasePayload_ConstructProps)
    _init (config?: RTPBasePayload_ConstructProps): void
    static $gtype: GObject.Type
}
interface RTPHeaderExtension_ConstructProps extends Gst.Element_ConstructProps {
}
class RTPHeaderExtension {
    /* Fields of Gst-1.0.Gst.Element */
    readonly object: Gst.Object
    readonly stateLock: GLib.RecMutex
    readonly stateCond: GLib.Cond
    readonly stateCookie: number
    readonly targetState: Gst.State
    readonly currentState: Gst.State
    readonly nextState: Gst.State
    readonly pendingState: Gst.State
    readonly lastReturn: Gst.StateChangeReturn
    readonly bus: Gst.Bus
    readonly clock: Gst.Clock
    readonly baseTime: Gst.ClockTimeDiff
    readonly startTime: Gst.ClockTime
    readonly numpads: number
    readonly pads: Gst.Pad[]
    readonly numsrcpads: number
    readonly srcpads: Gst.Pad[]
    readonly numsinkpads: number
    readonly sinkpads: Gst.Pad[]
    readonly padsCookie: number
    readonly contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstRtp-1.0.GstRtp.RTPHeaderExtension */
    getDirection(): RTPHeaderExtensionDirection
    getId(): number
    getMaxSize(inputMeta: Gst.Buffer): number
    getSdpCapsFieldName(): string
    getSupportedFlags(): RTPHeaderExtensionFlags
    getUri(): string
    read(readFlags: RTPHeaderExtensionFlags, data: Uint8Array, buffer: Gst.Buffer): boolean
    setAttributesFromCaps(caps: Gst.Caps): boolean
    setCapsFromAttributes(caps: Gst.Caps): boolean
    setCapsFromAttributesHelper(caps: Gst.Caps, attributes: string): boolean
    setDirection(direction: RTPHeaderExtensionDirection): void
    setId(extId: number): void
    setNonRtpSinkCaps(caps: Gst.Caps): boolean
    setWantsUpdateNonRtpSrcCaps(state: boolean): void
    updateNonRtpSrcCaps(caps: Gst.Caps): boolean
    wantsUpdateNonRtpSrcCaps(): boolean
    write(inputMeta: Gst.Buffer, writeFlags: RTPHeaderExtensionFlags, output: Gst.Buffer, data: Uint8Array): number
    /* Methods of Gst-1.0.Gst.Element */
    abortState(): void
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: Gst.ElementCallAsyncFunc): void
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    createAllPads(): void
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    getBaseTime(): Gst.ClockTime
    getBus(): Gst.Bus | null
    getClock(): Gst.Clock | null
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    getContext(contextType: string): Gst.Context | null
    getContextUnlocked(contextType: string): Gst.Context | null
    getContexts(): Gst.Context[]
    getCurrentClockTime(): Gst.ClockTime
    getCurrentRunningTime(): Gst.ClockTime
    getFactory(): Gst.ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): Gst.PadTemplate | null
    getPadTemplateList(): Gst.PadTemplate[]
    getRequestPad(name: string): Gst.Pad | null
    getStartTime(): Gst.ClockTime
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    getStaticPad(name: string): Gst.Pad | null
    isLockedState(): boolean
    iteratePads(): Gst.Iterator
    iterateSinkPads(): Gst.Iterator
    iterateSrcPads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lostState(): void
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    noMorePads(): void
    postMessage(message: Gst.Message): boolean
    provideClock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    releaseRequestPad(pad: Gst.Pad): void
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    requestPadSimple(name: string): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    sendEvent(event: Gst.Event): boolean
    setBaseTime(time: Gst.ClockTime): void
    setBus(bus?: Gst.Bus | null): void
    setClock(clock?: Gst.Clock | null): boolean
    setContext(context: Gst.Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: Gst.ClockTime): void
    setState(state: Gst.State): Gst.StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Gst.Element): void
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: Gst.ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    getControlRate(): Gst.ClockTime
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Gst.Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Gst.Object): boolean
    hasAsAncestor(ancestor: Gst.Object): boolean
    hasAsParent(parent: Gst.Object): boolean
    ref(): Gst.Object
    removeControlBinding(binding: Gst.ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: Gst.ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Gst.Object): boolean
    suggestNextSync(): Gst.ClockTime
    syncValues(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: ((newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: ((oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
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
    constructor (config?: RTPHeaderExtension_ConstructProps)
    _init (config?: RTPHeaderExtension_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static createFromUri(uri: string): RTPHeaderExtension | null
    static setUri(klass: RTPHeaderExtension | Function | GObject.Type, uri: string): void
    static $gtype: GObject.Type
}
class RTCPBuffer {
    /* Fields of GstRtp-1.0.GstRtp.RTCPBuffer */
    readonly buffer: Gst.Buffer
    readonly map: Gst.MapInfo
    /* Methods of GstRtp-1.0.GstRtp.RTCPBuffer */
    addPacket(type: RTCPType, packet: RTCPPacket): boolean
    getFirstPacket(packet: RTCPPacket): boolean
    getPacketCount(): number
    unmap(): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static map(buffer: Gst.Buffer, flags: Gst.MapFlags, rtcp: RTCPBuffer): boolean
    static newCopyData(data: Uint8Array): Gst.Buffer
    static newTakeData(data: Uint8Array): Gst.Buffer
    static validate(buffer: Gst.Buffer): boolean
    static validateData(data: Uint8Array): boolean
    static validateDataReduced(data: Uint8Array): boolean
    static validateReduced(buffer: Gst.Buffer): boolean
}
class RTCPPacket {
    /* Fields of GstRtp-1.0.GstRtp.RTCPPacket */
    readonly rtcp: RTCPBuffer
    readonly offset: number
    /* Methods of GstRtp-1.0.GstRtp.RTCPPacket */
    addProfileSpecificExt(data: Uint8Array): boolean
    addRb(ssrc: number, fractionlost: number, packetslost: number, exthighestseq: number, jitter: number, lsr: number, dlsr: number): boolean
    appGetData(): number
    appGetDataLength(): number
    appGetName(): string
    appGetSsrc(): number
    appGetSubtype(): number
    appSetDataLength(wordlen: number): boolean
    appSetName(name: string): void
    appSetSsrc(ssrc: number): void
    appSetSubtype(subtype: number): void
    byeAddSsrc(ssrc: number): boolean
    byeAddSsrcs(ssrc: number[]): boolean
    byeGetNthSsrc(nth: number): number
    byeGetReason(): string
    byeGetReasonLen(): number
    byeGetSsrcCount(): number
    byeSetReason(reason: string): boolean
    copyProfileSpecificExt(): [ /* returnType */ boolean, /* data */ Uint8Array ]
    fbGetFci(): number
    fbGetFciLength(): number
    fbGetMediaSsrc(): number
    fbGetSenderSsrc(): number
    fbGetType(): RTCPFBType
    fbSetFciLength(wordlen: number): boolean
    fbSetMediaSsrc(ssrc: number): void
    fbSetSenderSsrc(ssrc: number): void
    fbSetType(type: RTCPFBType): void
    getCount(): number
    getLength(): number
    getPadding(): boolean
    getProfileSpecificExt(): [ /* returnType */ boolean, /* data */ Uint8Array ]
    getProfileSpecificExtLength(): number
    getRb(nth: number): [ /* ssrc */ number, /* fractionlost */ number, /* packetslost */ number, /* exthighestseq */ number, /* jitter */ number, /* lsr */ number, /* dlsr */ number ]
    getRbCount(): number
    getType(): RTCPType
    moveToNext(): boolean
    remove(): boolean
    rrGetSsrc(): number
    rrSetSsrc(ssrc: number): void
    sdesAddEntry(type: RTCPSDESType, data: Uint8Array): boolean
    sdesAddItem(ssrc: number): boolean
    sdesCopyEntry(type: RTCPSDESType): [ /* returnType */ boolean, /* data */ Uint8Array ]
    sdesFirstEntry(): boolean
    sdesFirstItem(): boolean
    sdesGetEntry(type: RTCPSDESType): [ /* returnType */ boolean, /* data */ Uint8Array ]
    sdesGetItemCount(): number
    sdesGetSsrc(): number
    sdesNextEntry(): boolean
    sdesNextItem(): boolean
    setRb(nth: number, ssrc: number, fractionlost: number, packetslost: number, exthighestseq: number, jitter: number, lsr: number, dlsr: number): void
    srGetSenderInfo(): [ /* ssrc */ number, /* ntptime */ number, /* rtptime */ number, /* packetCount */ number, /* octetCount */ number ]
    srSetSenderInfo(ssrc: number, ntptime: number, rtptime: number, packetCount: number, octetCount: number): void
    xrFirstRb(): boolean
    xrGetBlockLength(): number
    xrGetBlockType(): RTCPXRType
    xrGetDlrrBlock(nth: number, ssrc: number, lastRr: number, delay: number): boolean
    xrGetPrtBySeq(seq: number, receiptTime: number): boolean
    xrGetPrtInfo(ssrc: number, thinning: number, beginSeq: number, endSeq: number): boolean
    xrGetRleInfo(ssrc: number, thinning: number, beginSeq: number, endSeq: number, chunkCount: number): boolean
    xrGetRleNthChunk(nth: number, chunk: number): boolean
    xrGetRrt(timestamp: number): boolean
    xrGetSsrc(): number
    xrGetSummaryInfo(ssrc: number, beginSeq: number, endSeq: number): boolean
    xrGetSummaryJitter(minJitter: number, maxJitter: number, meanJitter: number, devJitter: number): boolean
    xrGetSummaryPkt(lostPackets: number, dupPackets: number): boolean
    xrGetSummaryTtl(isIpv4: boolean, minTtl: number, maxTtl: number, meanTtl: number, devTtl: number): boolean
    xrGetVoipBurstMetrics(burstDensity: number, gapDensity: number, burstDuration: number, gapDuration: number): boolean
    xrGetVoipConfigurationParams(gmin: number, rxConfig: number): boolean
    xrGetVoipDelayMetrics(roundtripDelay: number, endSystemDelay: number): boolean
    xrGetVoipJitterBufferParams(jbNominal: number, jbMaximum: number, jbAbsMax: number): boolean
    xrGetVoipMetricsSsrc(ssrc: number): boolean
    xrGetVoipPacketMetrics(lossRate: number, discardRate: number): boolean
    xrGetVoipQualityMetrics(rFactor: number, extRFactor: number, mosLq: number, mosCq: number): boolean
    xrGetVoipSignalMetrics(signalLevel: number, noiseLevel: number, rerl: number, gmin: number): boolean
    xrNextRb(): boolean
    static name: string
}
abstract class RTPBaseAudioPayloadClass {
    /* Fields of GstRtp-1.0.GstRtp.RTPBaseAudioPayloadClass */
    readonly parentClass: RTPBasePayloadClass
    static name: string
}
class RTPBaseAudioPayloadPrivate {
    static name: string
}
abstract class RTPBaseDepayloadClass {
    /* Fields of GstRtp-1.0.GstRtp.RTPBaseDepayloadClass */
    readonly parentClass: Gst.ElementClass
    readonly setCaps: (filter: RTPBaseDepayload, caps: Gst.Caps) => boolean
    readonly process: (base: RTPBaseDepayload, in_: Gst.Buffer) => Gst.Buffer
    readonly packetLost: (filter: RTPBaseDepayload, event: Gst.Event) => boolean
    readonly handleEvent: (filter: RTPBaseDepayload, event: Gst.Event) => boolean
    readonly processRtpPacket: (base: RTPBaseDepayload, rtpBuffer: RTPBuffer) => Gst.Buffer
    static name: string
}
class RTPBaseDepayloadPrivate {
    static name: string
}
abstract class RTPBasePayloadClass {
    /* Fields of GstRtp-1.0.GstRtp.RTPBasePayloadClass */
    readonly parentClass: Gst.ElementClass
    readonly getCaps: (payload: RTPBasePayload, pad: Gst.Pad, filter: Gst.Caps) => Gst.Caps
    readonly setCaps: (payload: RTPBasePayload, caps: Gst.Caps) => boolean
    readonly handleBuffer: (payload: RTPBasePayload, buffer: Gst.Buffer) => Gst.FlowReturn
    readonly sinkEvent: (payload: RTPBasePayload, event: Gst.Event) => boolean
    readonly srcEvent: (payload: RTPBasePayload, event: Gst.Event) => boolean
    readonly query: (payload: RTPBasePayload, pad: Gst.Pad, query: Gst.Query) => boolean
    static name: string
}
class RTPBasePayloadPrivate {
    static name: string
}
class RTPBuffer {
    /* Fields of GstRtp-1.0.GstRtp.RTPBuffer */
    readonly buffer: Gst.Buffer
    readonly state: number
    readonly data: object[]
    readonly size: number[]
    readonly map: Gst.MapInfo[]
    /* Methods of GstRtp-1.0.GstRtp.RTPBuffer */
    addExtensionOnebyteHeader(id: number, data: Uint8Array): boolean
    addExtensionTwobytesHeader(appbits: number, id: number, data: Uint8Array): boolean
    getCsrc(idx: number): number
    getCsrcCount(): number
    getExtension(): boolean
    getExtensionData(): [ /* returnType */ any, /* bits */ number ]
    getExtensionOnebyteHeader(id: number, nth: number): [ /* returnType */ boolean, /* data */ Uint8Array ]
    getExtensionTwobytesHeader(id: number, nth: number): [ /* returnType */ boolean, /* appbits */ number, /* data */ Uint8Array ]
    getHeaderLen(): number
    getMarker(): boolean
    getPacketLen(): number
    getPadding(): boolean
    getPayloadBuffer(): Gst.Buffer
    getPayload(): any
    getPayloadLen(): number
    getPayloadSubbuffer(offset: number, len: number): Gst.Buffer
    getPayloadType(): number
    getSeq(): number
    getSsrc(): number
    getTimestamp(): number
    getVersion(): number
    padTo(len: number): void
    removeExtensionData(): void
    setCsrc(idx: number, csrc: number): void
    setExtension(extension: boolean): void
    setExtensionData(bits: number, length: number): boolean
    setMarker(marker: boolean): void
    setPacketLen(len: number): void
    setPadding(padding: boolean): void
    setPayloadType(payloadType: number): void
    setSeq(seq: number): void
    setSsrc(ssrc: number): void
    setTimestamp(timestamp: number): void
    setVersion(version: number): void
    unmap(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static allocateData(buffer: Gst.Buffer, payloadLen: number, padLen: number, csrcCount: number): void
    static calcHeaderLen(csrcCount: number): number
    static calcPacketLen(payloadLen: number, padLen: number, csrcCount: number): number
    static calcPayloadLen(packetLen: number, padLen: number, csrcCount: number): number
    static compareSeqnum(seqnum1: number, seqnum2: number): number
    static defaultClockRate(payloadType: number): number
    static extTimestamp(exttimestamp: number, timestamp: number): [ /* returnType */ number, /* exttimestamp */ number ]
    static getExtensionOnebyteHeaderFromBytes(bytes: any, bitPattern: number, id: number, nth: number): [ /* returnType */ boolean, /* data */ Uint8Array ]
    static map(buffer: Gst.Buffer, flags: Gst.MapFlags): [ /* returnType */ boolean, /* rtp */ RTPBuffer ]
    static newAllocate(payloadLen: number, padLen: number, csrcCount: number): Gst.Buffer
    static newAllocateLen(packetLen: number, padLen: number, csrcCount: number): Gst.Buffer
    static newCopyData(data: Uint8Array): Gst.Buffer
    static newTakeData(data: Uint8Array): Gst.Buffer
}
abstract class RTPHeaderExtensionClass {
    /* Fields of GstRtp-1.0.GstRtp.RTPHeaderExtensionClass */
    readonly parentClass: Gst.ElementClass
    readonly getSupportedFlags: (ext: RTPHeaderExtension) => RTPHeaderExtensionFlags
    readonly getMaxSize: (ext: RTPHeaderExtension, inputMeta: Gst.Buffer) => number
    readonly write: (ext: RTPHeaderExtension, inputMeta: Gst.Buffer, writeFlags: RTPHeaderExtensionFlags, output: Gst.Buffer, data: Uint8Array) => number
    readonly read: (ext: RTPHeaderExtension, readFlags: RTPHeaderExtensionFlags, data: Uint8Array, buffer: Gst.Buffer) => boolean
    readonly setNonRtpSinkCaps: (ext: RTPHeaderExtension, caps: Gst.Caps) => boolean
    readonly updateNonRtpSrcCaps: (ext: RTPHeaderExtension, caps: Gst.Caps) => boolean
    readonly setAttributes: (ext: RTPHeaderExtension, direction: RTPHeaderExtensionDirection, attributes: string) => boolean
    readonly setCapsFromAttributes: (ext: RTPHeaderExtension, caps: Gst.Caps) => boolean
    /* Methods of GstRtp-1.0.GstRtp.RTPHeaderExtensionClass */
    static setUri(klass: RTPHeaderExtension | Function | GObject.Type, uri: string): void
    static name: string
}
class RTPPayloadInfo {
    /* Fields of GstRtp-1.0.GstRtp.RTPPayloadInfo */
    readonly payloadType: number
    readonly media: string
    readonly encodingName: string
    readonly clockRate: number
    readonly encodingParameters: string
    readonly bitrate: number
    static name: string
    /* Static methods and pseudo-constructors */
    static forName(media: string, encodingName: string): RTPPayloadInfo
    static forPt(payloadType: number): RTPPayloadInfo
}
class RTPSourceMeta {
    /* Fields of GstRtp-1.0.GstRtp.RTPSourceMeta */
    readonly meta: Gst.Meta
    readonly ssrc: number
    readonly ssrcValid: boolean
    readonly csrc: number[]
    readonly csrcCount: number
    /* Methods of GstRtp-1.0.GstRtp.RTPSourceMeta */
    appendCsrc(csrc: number, csrcCount: number): boolean
    getSourceCount(): number
    setSsrc(ssrc?: number | null): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
}
export default GstRtp;