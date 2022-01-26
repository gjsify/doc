/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Nice-0.1
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Nice {

enum CandidateTransport {
    UDP,
    TCP_ACTIVE,
    TCP_PASSIVE,
    TCP_SO,
}
enum CandidateType {
    HOST,
    SERVER_REFLEXIVE,
    PEER_REFLEXIVE,
    RELAYED,
}
enum Compatibility {
    RFC5245,
    DRAFT19,
    GOOGLE,
    MSN,
    WLM2009,
    OC2007,
    OC2007R2,
    LAST,
}
enum ComponentState {
    DISCONNECTED,
    GATHERING,
    CONNECTING,
    CONNECTED,
    READY,
    FAILED,
    LAST,
}
enum ComponentType {
    RTP,
    RTCP,
}
enum NominationMode {
    REGULAR,
    AGGRESSIVE,
}
enum ProxyType {
    NONE,
    SOCKS5,
    HTTP,
    LAST,
}
enum PseudoTcpDebugLevel {
    NONE,
    NORMAL,
    VERBOSE,
}
enum PseudoTcpShutdown {
    RD,
    WR,
    RDWR,
}
enum PseudoTcpState {
    LISTEN,
    SYN_SENT,
    SYN_RECEIVED,
    ESTABLISHED,
    CLOSED,
    FIN_WAIT_1,
    FIN_WAIT_2,
    CLOSING,
    TIME_WAIT,
    CLOSE_WAIT,
    LAST_ACK,
}
enum PseudoTcpWriteResult {
    SUCCESS,
    TOO_LARGE,
    FAIL,
}
enum RelayType {
    UDP,
    TCP,
    TLS,
}
enum AgentOption {
    REGULAR_NOMINATION,
    RELIABLE,
    LITE_MODE,
    ICE_TRICKLE,
    SUPPORT_RENOMINATION,
    CONSENT_FRESHNESS,
}
const AGENT_MAX_REMOTE_CANDIDATES: number
const CANDIDATE_MAX_FOUNDATION: number
const CANDIDATE_MAX_LOCAL_ADDRESSES: number
const CANDIDATE_MAX_TURN_SERVERS: number
function candidateTransportToString(transport: CandidateTransport): string
function candidateTypeToString(type: CandidateType): string
function componentStateToString(state: ComponentState): string
function debugDisable(withStun: boolean): void
function debugEnable(withStun: boolean): void
function interfacesGetIpForInterface(interfaceName: string): string | null
function interfacesGetLocalInterfaces(): string[]
function interfacesGetLocalIps(includeLoopback: boolean): string[]
function pseudoTcpSetDebugLevel(level: PseudoTcpDebugLevel): void
interface AgentRecvFunc {
    (agent: Agent, streamId: number, componentId: number, len: number, buf: string): void
}
interface Agent_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Nice-0.1.Nice.Agent */
    compatibility?: number
    consentFreshness?: boolean
    controllingMode?: boolean
    forceRelay?: boolean
    fullMode?: boolean
    iceTcp?: boolean
    iceTrickle?: boolean
    iceUdp?: boolean
    idleTimeout?: number
    keepaliveConncheck?: boolean
    mainContext?: object
    maxConnectivityChecks?: number
    proxyIp?: string
    proxyPassword?: string
    proxyPort?: number
    proxyType?: number
    proxyUsername?: string
    reliable?: boolean
    stunInitialTimeout?: number
    stunMaxRetransmissions?: number
    stunPacingTimer?: number
    stunReliableTimeout?: number
    stunServer?: string
    stunServerPort?: number
    supportRenomination?: boolean
    upnp?: boolean
    upnpTimeout?: number
}
class Agent {
    /* Properties of Nice-0.1.Nice.Agent */
    readonly bytestreamTcp: boolean
    controllingMode: boolean
    forceRelay: boolean
    iceTcp: boolean
    iceTrickle: boolean
    iceUdp: boolean
    idleTimeout: number
    keepaliveConncheck: boolean
    maxConnectivityChecks: number
    proxyIp: string
    proxyPassword: string
    proxyPort: number
    proxyType: number
    proxyUsername: string
    stunInitialTimeout: number
    stunMaxRetransmissions: number
    stunPacingTimer: number
    stunReliableTimeout: number
    stunServer: string
    stunServerPort: number
    supportRenomination: boolean
    upnp: boolean
    upnpTimeout: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Nice-0.1.Nice.Agent */
    addLocalAddress(addr: Address): boolean
    addStream(nComponents: number): number
    closeAsync(callback?: Gio.AsyncReadyCallback | null): void
    consentLost(streamId: number, componentId: number): boolean
    forgetRelays(streamId: number, componentId: number): boolean
    gatherCandidates(streamId: number): boolean
    generateLocalCandidateSdp(candidate: Candidate): string
    generateLocalSdp(): string
    generateLocalStreamSdp(streamId: number, includeNonIce: boolean): string
    getComponentState(streamId: number, componentId: number): ComponentState
    getDefaultLocalCandidate(streamId: number, componentId: number): Candidate
    getIoStream(streamId: number, componentId: number): Gio.IOStream
    getLocalCandidates(streamId: number, componentId: number): Candidate[]
    getLocalCredentials(streamId: number): [ /* returnType */ boolean, /* ufrag */ string, /* pwd */ string ]
    getRemoteCandidates(streamId: number, componentId: number): Candidate[]
    getSelectedPair(streamId: number, componentId: number, local: Candidate, remote: Candidate): boolean
    getSelectedSocket(streamId: number, componentId: number): Gio.Socket | null
    getSockets(streamId: number, componentId: number): Gio.Socket[]
    getStreamName(streamId: number): string
    parseRemoteCandidateSdp(streamId: number, sdp: string): Candidate
    parseRemoteSdp(sdp: string): number
    parseRemoteStreamSdp(streamId: number, sdp: string, ufrag: string, pwd: string): Candidate[]
    peerCandidateGatheringDone(streamId: number): boolean
    recv(streamId: number, componentId: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buf */ Uint8Array ]
    recvMessages(streamId: number, componentId: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* messages */ InputMessage[] ]
    recvMessagesNonblocking(streamId: number, componentId: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* messages */ InputMessage[] ]
    recvNonblocking(streamId: number, componentId: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buf */ Uint8Array ]
    removeStream(streamId: number): void
    restart(): boolean
    restartStream(streamId: number): boolean
    send(streamId: number, componentId: number, len: number, buf: string): number
    sendMessagesNonblocking(streamId: number, componentId: number, messages: OutputMessage[], cancellable?: Gio.Cancellable | null): number
    setLocalCredentials(streamId: number, ufrag: string, pwd: string): boolean
    setPortRange(streamId: number, componentId: number, minPort: number, maxPort: number): void
    setRelayInfo(streamId: number, componentId: number, serverIp: string, serverPort: number, username: string, password: string, type: RelayType): boolean
    setRemoteCandidates(streamId: number, componentId: number, candidates: Candidate[]): number
    setRemoteCredentials(streamId: number, ufrag: string, pwd: string): boolean
    setSelectedPair(streamId: number, componentId: number, lfoundation: string, rfoundation: string): boolean
    setSelectedRemoteCandidate(streamId: number, componentId: number, candidate: Candidate): boolean
    setSoftware(software: string): void
    setStreamName(streamId: number, name: string): boolean
    setStreamTos(streamId: number, tos: number): void
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
    /* Signals of Nice-0.1.Nice.Agent */
    connect(sigName: "candidate-gathering-done", callback: ((streamId: number) => void)): number
    on(sigName: "candidate-gathering-done", callback: (streamId: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "candidate-gathering-done", callback: (streamId: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "candidate-gathering-done", callback: (streamId: number) => void): NodeJS.EventEmitter
    emit(sigName: "candidate-gathering-done", streamId: number): void
    connect(sigName: "component-state-changed", callback: ((streamId: number, componentId: number, state: number) => void)): number
    on(sigName: "component-state-changed", callback: (streamId: number, componentId: number, state: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "component-state-changed", callback: (streamId: number, componentId: number, state: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "component-state-changed", callback: (streamId: number, componentId: number, state: number) => void): NodeJS.EventEmitter
    emit(sigName: "component-state-changed", streamId: number, componentId: number, state: number): void
    connect(sigName: "initial-binding-request-received", callback: ((streamId: number) => void)): number
    on(sigName: "initial-binding-request-received", callback: (streamId: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "initial-binding-request-received", callback: (streamId: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "initial-binding-request-received", callback: (streamId: number) => void): NodeJS.EventEmitter
    emit(sigName: "initial-binding-request-received", streamId: number): void
    connect(sigName: "new-candidate", callback: ((streamId: number, componentId: number, foundation: string) => void)): number
    on(sigName: "new-candidate", callback: (streamId: number, componentId: number, foundation: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-candidate", callback: (streamId: number, componentId: number, foundation: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-candidate", callback: (streamId: number, componentId: number, foundation: string) => void): NodeJS.EventEmitter
    emit(sigName: "new-candidate", streamId: number, componentId: number, foundation: string): void
    connect(sigName: "new-candidate-full", callback: ((candidate: Candidate) => void)): number
    on(sigName: "new-candidate-full", callback: (candidate: Candidate) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-candidate-full", callback: (candidate: Candidate) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-candidate-full", callback: (candidate: Candidate) => void): NodeJS.EventEmitter
    emit(sigName: "new-candidate-full", candidate: Candidate): void
    connect(sigName: "new-remote-candidate", callback: ((streamId: number, componentId: number, foundation: string) => void)): number
    on(sigName: "new-remote-candidate", callback: (streamId: number, componentId: number, foundation: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-remote-candidate", callback: (streamId: number, componentId: number, foundation: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-remote-candidate", callback: (streamId: number, componentId: number, foundation: string) => void): NodeJS.EventEmitter
    emit(sigName: "new-remote-candidate", streamId: number, componentId: number, foundation: string): void
    connect(sigName: "new-remote-candidate-full", callback: ((candidate: Candidate) => void)): number
    on(sigName: "new-remote-candidate-full", callback: (candidate: Candidate) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-remote-candidate-full", callback: (candidate: Candidate) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-remote-candidate-full", callback: (candidate: Candidate) => void): NodeJS.EventEmitter
    emit(sigName: "new-remote-candidate-full", candidate: Candidate): void
    connect(sigName: "new-selected-pair", callback: ((streamId: number, componentId: number, lfoundation: string, rfoundation: string) => void)): number
    on(sigName: "new-selected-pair", callback: (streamId: number, componentId: number, lfoundation: string, rfoundation: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-selected-pair", callback: (streamId: number, componentId: number, lfoundation: string, rfoundation: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-selected-pair", callback: (streamId: number, componentId: number, lfoundation: string, rfoundation: string) => void): NodeJS.EventEmitter
    emit(sigName: "new-selected-pair", streamId: number, componentId: number, lfoundation: string, rfoundation: string): void
    connect(sigName: "new-selected-pair-full", callback: ((streamId: number, componentId: number, lcandidate: Candidate, rcandidate: Candidate) => void)): number
    on(sigName: "new-selected-pair-full", callback: (streamId: number, componentId: number, lcandidate: Candidate, rcandidate: Candidate) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-selected-pair-full", callback: (streamId: number, componentId: number, lcandidate: Candidate, rcandidate: Candidate) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-selected-pair-full", callback: (streamId: number, componentId: number, lcandidate: Candidate, rcandidate: Candidate) => void): NodeJS.EventEmitter
    emit(sigName: "new-selected-pair-full", streamId: number, componentId: number, lcandidate: Candidate, rcandidate: Candidate): void
    connect(sigName: "reliable-transport-writable", callback: ((streamId: number, componentId: number) => void)): number
    on(sigName: "reliable-transport-writable", callback: (streamId: number, componentId: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reliable-transport-writable", callback: (streamId: number, componentId: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reliable-transport-writable", callback: (streamId: number, componentId: number) => void): NodeJS.EventEmitter
    emit(sigName: "reliable-transport-writable", streamId: number, componentId: number): void
    connect(sigName: "streams-removed", callback: ((streamIds: number[]) => void)): number
    on(sigName: "streams-removed", callback: (streamIds: number[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "streams-removed", callback: (streamIds: number[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "streams-removed", callback: (streamIds: number[]) => void): NodeJS.EventEmitter
    emit(sigName: "streams-removed", streamIds: number[]): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bytestream-tcp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bytestream-tcp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bytestream-tcp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bytestream-tcp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bytestream-tcp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::controlling-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::controlling-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::controlling-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::controlling-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::controlling-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::force-relay", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force-relay", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::force-relay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::force-relay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::force-relay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ice-tcp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ice-tcp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ice-tcp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ice-tcp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ice-tcp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ice-trickle", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ice-trickle", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ice-trickle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ice-trickle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ice-trickle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ice-udp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ice-udp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ice-udp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ice-udp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ice-udp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::idle-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keepalive-conncheck", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keepalive-conncheck", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keepalive-conncheck", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keepalive-conncheck", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keepalive-conncheck", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-connectivity-checks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-connectivity-checks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-connectivity-checks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-connectivity-checks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-connectivity-checks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-ip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-ip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-ip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-ip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-ip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-port", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-port", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-username", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-username", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stun-initial-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stun-initial-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stun-initial-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stun-initial-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stun-initial-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stun-max-retransmissions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stun-max-retransmissions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stun-max-retransmissions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stun-max-retransmissions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stun-max-retransmissions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stun-pacing-timer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stun-pacing-timer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stun-pacing-timer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stun-pacing-timer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stun-pacing-timer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stun-reliable-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stun-reliable-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stun-reliable-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stun-reliable-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stun-reliable-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stun-server", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stun-server", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stun-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stun-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stun-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stun-server-port", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stun-server-port", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stun-server-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stun-server-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stun-server-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::support-renomination", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::support-renomination", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::support-renomination", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::support-renomination", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::support-renomination", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::upnp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::upnp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::upnp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::upnp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::upnp-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::upnp-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::upnp-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::upnp-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Agent_ConstructProps)
    _init (config?: Agent_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(ctx: GLib.MainContext, compat: Compatibility): Agent
    static newFull(ctx: GLib.MainContext, compat: Compatibility, flags: AgentOption): Agent
    static newReliable(ctx: GLib.MainContext, compat: Compatibility): Agent
    static $gtype: GObject.Type
}
interface PseudoTcpSocket_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Nice-0.1.Nice.PseudoTcpSocket */
    ackDelay?: number
    callbacks?: object
    conversation?: number
    noDelay?: boolean
    rcvBuf?: number
    sndBuf?: number
    supportFinAck?: boolean
}
class PseudoTcpSocket {
    /* Properties of Nice-0.1.Nice.PseudoTcpSocket */
    ackDelay: number
    callbacks: object
    noDelay: boolean
    rcvBuf: number
    sndBuf: number
    readonly state: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Nice-0.1.Nice.PseudoTcpSocket */
    canSend(): boolean
    close(force: boolean): void
    connect(): boolean
    getAvailableBytes(): number
    getAvailableSendSpace(): number
    getError(): number
    getNextClock(timeout: number): boolean
    isClosed(): boolean
    isClosedRemotely(): boolean
    notifyClock(): void
    notifyMessage(message: InputMessage): boolean
    notifyMtu(mtu: number): void
    notifyPacket(buffer: string, len: number): boolean
    recv(buffer: string, len: number): number
    send(buffer: string, len: number): number
    setTime(currentTime: number): void
    shutdown(how: PseudoTcpShutdown): void
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
    connect(sigName: "notify::ack-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ack-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ack-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ack-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ack-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::callbacks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::callbacks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::callbacks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::callbacks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::callbacks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::no-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::no-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::no-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::no-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rcv-buf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rcv-buf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rcv-buf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rcv-buf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rcv-buf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::snd-buf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snd-buf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::snd-buf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::snd-buf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::snd-buf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PseudoTcpSocket_ConstructProps)
    _init (config?: PseudoTcpSocket_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(conversation: number, callbacks: PseudoTcpCallbacks): PseudoTcpSocket
    static $gtype: GObject.Type
}
class Address {
    /* Methods of Nice-0.1.Nice.Address */
    copyToSockaddr(sin?: object | null): void
    equal(b: Address): boolean
    equalNoPort(b: Address): boolean
    free(): void
    getPort(): number
    init(): void
    ipVersion(): number
    isPrivate(): boolean
    isValid(): boolean
    setFromSockaddr(sin?: object | null): void
    setFromString(str: string): boolean
    setIpv4(addrIpv4: number): void
    setIpv6(addrIpv6: number): void
    setPort(port: number): void
    toString(dst: string): void
    static name: string
}
abstract class AgentClass {
    /* Fields of Nice-0.1.Nice.AgentClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class Candidate {
    /* Fields of Nice-0.1.Nice.Candidate */
    readonly type: CandidateType
    readonly transport: CandidateTransport
    readonly addr: Address
    readonly baseAddr: Address
    readonly priority: number
    readonly streamId: number
    readonly componentId: number
    readonly foundation: number[]
    readonly username: string
    readonly password: string
    /* Methods of Nice-0.1.Nice.Candidate */
    copy(): Candidate
    equalTarget(candidate2: Candidate): boolean
    free(): void
    static name: string
    static new(type: CandidateType): Candidate
    constructor(type: CandidateType)
    /* Static methods and pseudo-constructors */
    static new(type: CandidateType): Candidate
    static transportToString(transport: CandidateTransport): string
    static typeToString(type: CandidateType): string
}
class InputMessage {
    /* Fields of Nice-0.1.Nice.InputMessage */
    readonly buffers: Gio.InputVector[]
    readonly nBuffers: number
    readonly from: Address
    readonly length: number
    static name: string
}
class OutputMessage {
    /* Fields of Nice-0.1.Nice.OutputMessage */
    readonly buffers: Gio.OutputVector[]
    readonly nBuffers: number
    static name: string
}
class PseudoTcpCallbacks {
    /* Fields of Nice-0.1.Nice.PseudoTcpCallbacks */
    readonly userData: object
    readonly pseudoTcpOpened: (tcp: PseudoTcpSocket, data: object) => void
    readonly pseudoTcpReadable: (tcp: PseudoTcpSocket, data: object) => void
    readonly pseudoTcpWritable: (tcp: PseudoTcpSocket, data: object) => void
    readonly pseudoTcpClosed: (tcp: PseudoTcpSocket, error: number, data: object) => void
    readonly writePacket: (tcp: PseudoTcpSocket, buffer: string, len: number, data: object) => PseudoTcpWriteResult
    static name: string
}
abstract class PseudoTcpSocketClass {
    static name: string
}
}
export default Nice;