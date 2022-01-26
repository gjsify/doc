/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * RygelRenderer-2.6
 */

import type RygelCore from './RygelCore-2.6';
import type GLib from './GLib-2.0';
import type Gee from './Gee-0.8';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GUPnP from './GUPnP-1.2';
import type libxml2 from './libxml2-2.0';
import type Soup from './Soup-2.4';
import type GSSDP from './GSSDP-1.2';
import type GUPnPAV from './GUPnPAV-1.0';

export namespace RygelRenderer {

interface MediaPlayer_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of RygelRenderer-2.6.RygelRenderer.MediaPlayer */
    playbackState?: string
    playbackSpeed?: string
    uri?: string
    volume?: number
    metadata?: string
    mimeType?: string
    contentFeatures?: string
    userAgent?: string
}
class MediaPlayer {
    /* Properties of RygelRenderer-2.6.RygelRenderer.MediaPlayer */
    playbackState: string
    readonly allowedPlaybackSpeeds: string[]
    playbackSpeed: string
    uri: string
    volume: number
    readonly duration: number
    readonly size: number
    metadata: string
    mimeType: string
    readonly canSeek: boolean
    readonly canSeekBytes: boolean
    contentFeatures: string
    readonly position: number
    readonly bytePosition: number
    userAgent: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of RygelRenderer-2.6.RygelRenderer.MediaPlayer */
    seek(time: number): boolean
    seekBytes(bytes: number): boolean
    getProtocols(): string[]
    getMimeTypes(): string[]
    playSpeedToDouble(speed: string): number
    getPlaybackState(): string
    setPlaybackState(value: string): void
    getAllowedPlaybackSpeeds(): string[]
    getPlaybackSpeed(): string
    setPlaybackSpeed(value: string): void
    getUri(): string | null
    setUri(value?: string | null): void
    getVolume(): number
    setVolume(value: number): void
    getDuration(): number
    getSize(): number
    getMetadata(): string | null
    setMetadata(value?: string | null): void
    getMimeType(): string | null
    setMimeType(value?: string | null): void
    getCanSeek(): boolean
    getCanSeekBytes(): boolean
    getContentFeatures(): string | null
    setContentFeatures(value?: string | null): void
    getDurationAsStr(): string
    getPosition(): number
    getBytePosition(): number
    getPositionAsStr(): string
    getUserAgent(): string | null
    setUserAgent(value?: string | null): void
    getProtocolInfo(): string
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
    connect(sigName: "notify::playback-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playback-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::playback-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::playback-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::playback-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allowed-playback-speeds", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed-playback-speeds", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allowed-playback-speeds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allowed-playback-speeds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allowed-playback-speeds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::playback-speed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playback-speed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::playback-speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::playback-speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::playback-speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::volume", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::metadata", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mime-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-seek", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-seek", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-seek-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-seek-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-seek-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-seek-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-seek-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-features", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-features", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::byte-position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::byte-position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::byte-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::byte-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::byte-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-agent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaPlayer_ConstructProps)
    _init (config?: MediaPlayer_ConstructProps): void
    static $gtype: GObject.Type
}
interface PlayerController_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of RygelRenderer-2.6.RygelRenderer.PlayerController */
    playbackState?: string
    nTracks?: number
    track?: number
    uri?: string
    metadata?: string
    trackUri?: string
    trackMetadata?: string
    nextUri?: string
    nextMetadata?: string
    playMode?: string
}
class PlayerController {
    /* Properties of RygelRenderer-2.6.RygelRenderer.PlayerController */
    playbackState: string
    nTracks: number
    track: number
    uri: string
    metadata: string
    trackUri: string
    trackMetadata: string
    nextUri: string
    nextMetadata: string
    readonly currentTransportActions: string
    playMode: string
    readonly canPause: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of RygelRenderer-2.6.RygelRenderer.PlayerController */
    next(): boolean
    previous(): boolean
    setSinglePlayUri(uri: string, metadata: string, mime?: string | null, features?: string | null): void
    setPlaylistUri(uri: string, metadata: string, collection: GUPnPAV.MediaCollection): void
    setNextSinglePlayUri(uri: string, metadata: string, mime?: string | null, features?: string | null): void
    setNextPlaylistUri(uri: string, metadata: string, collection: GUPnPAV.MediaCollection): void
    isPlayModeValid(playMode: string): boolean
    unescape(input: string): string
    getPlaybackState(): string
    setPlaybackState(value: string): void
    getNTracks(): number
    setNTracks(value: number): void
    getTrack(): number
    setTrack(value: number): void
    getUri(): string
    setUri(value: string): void
    getMetadata(): string
    setMetadata(value: string): void
    getTrackUri(): string
    setTrackUri(value: string): void
    getTrackMetadata(): string
    setTrackMetadata(value: string): void
    getNextUri(): string
    setNextUri(value: string): void
    getNextMetadata(): string
    setNextMetadata(value: string): void
    getCurrentTransportActions(): string
    getPlayMode(): string
    setPlayMode(value: string): void
    getCanPause(): boolean
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
    connect(sigName: "notify::playback-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playback-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::playback-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::playback-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::playback-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-tracks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-tracks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::metadata", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-metadata", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-metadata", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-metadata", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-metadata", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-transport-actions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-transport-actions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-transport-actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-transport-actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-transport-actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::play-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::play-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::play-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::play-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::play-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-pause", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-pause", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-pause", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-pause", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-pause", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PlayerController_ConstructProps)
    _init (config?: PlayerController_ConstructProps): void
    static $gtype: GObject.Type
}
interface MediaRendererPlugin_ConstructProps extends RygelCore.Plugin_ConstructProps {
    /* Constructor properties of RygelRenderer-2.6.RygelRenderer.MediaRendererPlugin */
    supportedProfiles?: RygelCore.DLNAProfile[]
}
class MediaRendererPlugin {
    /* Properties of RygelRenderer-2.6.RygelRenderer.MediaRendererPlugin */
    supportedProfiles: RygelCore.DLNAProfile[]
    /* Properties of RygelCore-2.6.RygelCore.Plugin */
    capabilities: RygelCore.PluginCapabilities
    title: string
    active: boolean
    resourceInfos: Gee.ArrayList
    iconInfos: Gee.ArrayList
    defaultIcons: Gee.ArrayList
    /* Fields of GUPnP-1.2.GUPnP.ResourceFactory */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of RygelRenderer-2.6.RygelRenderer.MediaRendererPlugin */
    getPlayer(): MediaPlayer | null
    getController(): PlayerController
    getProtocolInfo(): string
    getSupportedProfiles(): RygelCore.DLNAProfile[]
    setSupportedProfiles(value: RygelCore.DLNAProfile[]): void
    /* Methods of RygelCore-2.6.RygelCore.Plugin */
    addResource(resourceInfo: RygelCore.ResourceInfo): void
    addIcon(iconInfo: RygelCore.IconInfo): void
    applyHacks(device: RygelCore.RootDevice, descriptionPath: string): void
    getCapabilities(): RygelCore.PluginCapabilities
    setCapabilities(value: RygelCore.PluginCapabilities): void
    getName(): string
    getTitle(): string
    setTitle(value: string): void
    getDescription(): string
    getDescPath(): string
    getActive(): boolean
    setActive(value: boolean): void
    getResourceInfos(): Gee.ArrayList
    getIconInfos(): Gee.ArrayList
    getDefaultIcons(): Gee.ArrayList
    /* Methods of GUPnP-1.2.GUPnP.ResourceFactory */
    registerResourceProxyType(upnpType: string, type: GObject.Type): void
    registerResourceType(upnpType: string, type: GObject.Type): void
    unregisterResourceProxyType(upnpType: string): boolean
    unregisterResourceType(upnpType: string): boolean
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
    connect(sigName: "notify::supported-profiles", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-profiles", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::supported-profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::supported-profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::supported-profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-infos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-infos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-infos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-infos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-icons", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-icons", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-icons", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-icons", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-icons", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaRendererPlugin_ConstructProps)
    _init (config?: MediaRendererPlugin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, title: string | null, description: string | null, capabilities: RygelCore.PluginCapabilities): MediaRendererPlugin
    /* Function overloads */
    static new(descPath: string, name: string, title: string | null, description: string | null, capabilities: RygelCore.PluginCapabilities): MediaRendererPlugin
    static new(): MediaRendererPlugin
    static $gtype: GObject.Type
}
interface MediaRenderer_ConstructProps extends RygelCore.MediaDevice_ConstructProps {
    /* Constructor properties of RygelRenderer-2.6.RygelRenderer.MediaRenderer */
    player?: MediaPlayer
}
class MediaRenderer {
    /* Properties of RygelCore-2.6.RygelCore.MediaDevice */
    plugin: RygelCore.Plugin
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of RygelCore-2.6.RygelCore.MediaDevice */
    addInterface(iface: string): void
    removeInterface(iface: string): void
    getInterfaces(): string[]
    getPlugin(): RygelCore.Plugin
    setPlugin(value: RygelCore.Plugin): void
    getTitle(): string
    getCapabilities(): RygelCore.PluginCapabilities
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
    connect(sigName: "notify::plugin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaRenderer_ConstructProps)
    _init (config?: MediaRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string, player: MediaPlayer, capabilities: RygelCore.PluginCapabilities): MediaRenderer
    static $gtype: GObject.Type
}
abstract class MediaRendererPluginClass {
    /* Fields of RygelRenderer-2.6.RygelRenderer.MediaRendererPluginClass */
    readonly getPlayer: (self: MediaRendererPlugin) => MediaPlayer | null
    readonly getController: (self: MediaRendererPlugin) => PlayerController
    static name: string
}
class MediaRendererPluginPrivate {
    static name: string
}
abstract class MediaRendererClass {
    static name: string
}
class MediaRendererPrivate {
    static name: string
}
abstract class MediaPlayerIface {
    /* Fields of RygelRenderer-2.6.RygelRenderer.MediaPlayerIface */
    readonly seek: (self: MediaPlayer, time: number) => boolean
    readonly seekBytes: (self: MediaPlayer, bytes: number) => boolean
    readonly getProtocols: () => [ /* returnType */ string[], /* resultLength1 */ number ]
    readonly getMimeTypes: () => [ /* returnType */ string[], /* resultLength1 */ number ]
    readonly getPlaybackState: (self: MediaPlayer) => string
    readonly setPlaybackState: (self: MediaPlayer, value: string) => void
    readonly getAllowedPlaybackSpeeds: () => [ /* returnType */ string[], /* resultLength1 */ number ]
    readonly getPlaybackSpeed: (self: MediaPlayer) => string
    readonly setPlaybackSpeed: (self: MediaPlayer, value: string) => void
    readonly getUri: (self: MediaPlayer) => string | null
    readonly setUri: (self: MediaPlayer, value?: string | null) => void
    readonly getVolume: (self: MediaPlayer) => number
    readonly setVolume: (self: MediaPlayer, value: number) => void
    readonly getDuration: (self: MediaPlayer) => number
    readonly getSize: (self: MediaPlayer) => number
    readonly getMetadata: (self: MediaPlayer) => string | null
    readonly setMetadata: (self: MediaPlayer, value?: string | null) => void
    readonly getMimeType: (self: MediaPlayer) => string | null
    readonly setMimeType: (self: MediaPlayer, value?: string | null) => void
    readonly getCanSeek: (self: MediaPlayer) => boolean
    readonly getCanSeekBytes: (self: MediaPlayer) => boolean
    readonly getContentFeatures: (self: MediaPlayer) => string | null
    readonly setContentFeatures: (self: MediaPlayer, value?: string | null) => void
    readonly getPosition: (self: MediaPlayer) => number
    readonly getBytePosition: (self: MediaPlayer) => number
    readonly getUserAgent: (self: MediaPlayer) => string | null
    readonly setUserAgent: (self: MediaPlayer, value?: string | null) => void
    static name: string
}
abstract class PlayerControllerIface {
    /* Fields of RygelRenderer-2.6.RygelRenderer.PlayerControllerIface */
    readonly next: (self: PlayerController) => boolean
    readonly previous: (self: PlayerController) => boolean
    readonly setSinglePlayUri: (self: PlayerController, uri: string, metadata: string, mime?: string | null, features?: string | null) => void
    readonly setPlaylistUri: (self: PlayerController, uri: string, metadata: string, collection: GUPnPAV.MediaCollection) => void
    readonly setNextSinglePlayUri: (self: PlayerController, uri: string, metadata: string, mime?: string | null, features?: string | null) => void
    readonly setNextPlaylistUri: (self: PlayerController, uri: string, metadata: string, collection: GUPnPAV.MediaCollection) => void
    readonly isPlayModeValid: (self: PlayerController, playMode: string) => boolean
    readonly getPlaybackState: (self: PlayerController) => string
    readonly setPlaybackState: (self: PlayerController, value: string) => void
    readonly getNTracks: (self: PlayerController) => number
    readonly setNTracks: (self: PlayerController, value: number) => void
    readonly getTrack: (self: PlayerController) => number
    readonly setTrack: (self: PlayerController, value: number) => void
    readonly getUri: (self: PlayerController) => string
    readonly setUri: (self: PlayerController, value: string) => void
    readonly getMetadata: (self: PlayerController) => string
    readonly setMetadata: (self: PlayerController, value: string) => void
    readonly getTrackUri: (self: PlayerController) => string
    readonly setTrackUri: (self: PlayerController, value: string) => void
    readonly getTrackMetadata: (self: PlayerController) => string
    readonly setTrackMetadata: (self: PlayerController, value: string) => void
    readonly getNextUri: (self: PlayerController) => string
    readonly setNextUri: (self: PlayerController, value: string) => void
    readonly getNextMetadata: (self: PlayerController) => string
    readonly setNextMetadata: (self: PlayerController, value: string) => void
    readonly getCurrentTransportActions: (self: PlayerController) => string
    readonly getPlayMode: (self: PlayerController) => string
    readonly setPlayMode: (self: PlayerController, value: string) => void
    readonly getCanPause: (self: PlayerController) => boolean
    static name: string
}
}
export default RygelRenderer;