/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ClutterGst-1.0
 */

import type GstVideo from './GstVideo-0.10';
import type libxml2 from './libxml2-2.0';
import type GstBase from './GstBase-0.10';
import type Gst from './Gst-0.10';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GstInterfaces from './GstInterfaces-0.10';
// WARN: Dependency not found: 'GstAudio-0.10'
import type Clutter from './Clutter-1.0';
import type cairo from './cairo-1.0';
import type Json from './Json-1.0';
import type Gio from './Gio-2.0';
import type GL from './GL-1.0';
import type CoglPango from './CoglPango-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type Cogl from './Cogl-1.0';
import type Atk from './Atk-1.0';

export namespace ClutterGst {

enum BufferingMode {
    STREAM,
    DOWNLOAD,
}
enum SeekFlags {
    NONE,
    ACCURATE,
}
const MAJOR_VERSION: number
const MICRO_VERSION: number
const MINOR_VERSION: number
const VERSION_HEX: number
const VERSION_S: string
function init(argv?: string[] | null): [ /* returnType */ Clutter.InitError, /* argv */ string[] | null ]
function initWithArgs(argv: string[] | null, parameterString: string, entries: GLib.OptionEntry, translationDomain: string): [ /* returnType */ Clutter.InitError, /* argv */ string[] | null ]
function playerClassInit(objectClass: GObject.ObjectClass): void
class Player {
    /* Properties of ClutterGst-1.0.ClutterGst.Player */
    audioStream: number
    readonly audioStreams: object
    readonly idle: boolean
    readonly inSeek: boolean
    seekFlags: SeekFlags
    subtitleTrack: number
    readonly subtitleTracks: object
    userAgent: string
    /* Properties of Clutter-1.0.Clutter.Media */
    audioVolume: number
    readonly bufferFill: number
    readonly canSeek: boolean
    readonly duration: number
    playing: boolean
    progress: number
    subtitleFontName: string
    subtitleUri: string
    uri: string
    /* Methods of ClutterGst-1.0.ClutterGst.Player */
    deinit(): void
    getAudioStream(): number
    getAudioStreams(): string[]
    getBufferingMode(): BufferingMode
    getIdle(): boolean
    getInSeek(): boolean
    getPipeline(): Gst.Element
    getSeekFlags(): SeekFlags
    getSubtitleTrack(): number
    getSubtitleTracks(): string[]
    getUserAgent(): string
    init(): boolean
    setAudioStream(index: number): void
    setBufferingMode(mode: BufferingMode): void
    setSeekFlags(flags: SeekFlags): void
    setSubtitleTrack(index: number): void
    setUserAgent(userAgent: string): void
    /* Methods of Clutter-1.0.Clutter.Media */
    getAudioVolume(): number
    getBufferFill(): number
    getCanSeek(): boolean
    getDuration(): number
    getPlaying(): boolean
    getProgress(): number
    getSubtitleFontName(): string
    getSubtitleUri(): string
    getUri(): string
    setAudioVolume(volume: number): void
    setFilename(filename: string): void
    setPlaying(playing: boolean): void
    setProgress(progress: number): void
    setSubtitleFontName(fontName: string): void
    setSubtitleUri(uri: string): void
    setUri(uri: string): void
    /* Signals of ClutterGst-1.0.ClutterGst.Player */
    connect(sigName: "download-buffering", callback: ((start: number, stop: number) => void)): number
    on(sigName: "download-buffering", callback: (start: number, stop: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "download-buffering", callback: (start: number, stop: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "download-buffering", callback: (start: number, stop: number) => void): NodeJS.EventEmitter
    emit(sigName: "download-buffering", start: number, stop: number): void
    /* Signals of Clutter-1.0.Clutter.Media */
    connect(sigName: "eos", callback: (() => void)): number
    on(sigName: "eos", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "eos", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "eos", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "eos"): void
    connect(sigName: "error", callback: ((error: GLib.Error) => void)): number
    on(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: (error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "error", error: GLib.Error): void
    static name: string
    /* Static methods and pseudo-constructors */
    static classInit(objectClass: GObject.ObjectClass): void
}
class VideoSink {
    /* Properties of ClutterGst-1.0.ClutterGst.VideoSink */
    texture: Clutter.Texture
    updatePriority: number
    /* Methods of GstInterfaces-0.10.GstInterfaces.Navigation */
    sendCommand(command: GstInterfaces.NavigationCommand): void
    sendEvent(structure: Gst.Structure): void
    sendKeyEvent(event: string, key: string): void
    sendMouseEvent(event: string, button: number, x: number, y: number): void
    static name: string
    static new(texture: Clutter.Texture): VideoSink
    constructor(texture: Clutter.Texture)
    /* Static methods and pseudo-constructors */
    static new(texture: Clutter.Texture): VideoSink
}
interface VideoTexture_ConstructProps extends Clutter.Texture_ConstructProps {
    /* Constructor properties of ClutterGst-1.0.ClutterGst.VideoTexture */
    pixelAspectRatio?: any
    /* Constructor properties of Clutter-1.0.Clutter.Media */
    audioVolume?: number
    playing?: boolean
    progress?: number
    subtitleFontName?: string
    subtitleUri?: string
    uri?: string
    /* Constructor properties of ClutterGst-1.0.ClutterGst.Player */
    audioStream?: number
    seekFlags?: SeekFlags
    subtitleTrack?: number
    userAgent?: string
}
class VideoTexture {
    /* Properties of ClutterGst-1.0.ClutterGst.VideoTexture */
    pixelAspectRatio: any
    /* Properties of Clutter-1.0.Clutter.Texture */
    filename: string
    filterQuality: Clutter.TextureQuality
    keepAspectRatio: boolean
    loadAsync: boolean
    loadDataAsync: boolean
    pickWithAlpha: boolean
    readonly pixelFormat: Cogl.PixelFormat
    repeatX: boolean
    repeatY: boolean
    syncSize: boolean
    readonly tileWaste: number
    /* Properties of Clutter-1.0.Clutter.Actor */
    actions: Clutter.Action
    readonly allocation: Clutter.ActorBox
    anchorGravity: Clutter.Gravity
    anchorX: number
    anchorY: number
    backgroundColor: Clutter.Color
    readonly backgroundColorSet: boolean
    childTransform: Clutter.Matrix
    readonly childTransformSet: boolean
    clip: Clutter.Geometry
    clipRect: Clutter.Rect
    clipToAllocation: boolean
    constraints: Clutter.Constraint
    content: Clutter.Content
    readonly contentBox: Clutter.ActorBox
    contentGravity: Clutter.ContentGravity
    contentRepeat: Clutter.ContentRepeat
    depth: number
    effect: Clutter.Effect
    readonly firstChild: Clutter.Actor
    fixedPositionSet: boolean
    fixedX: number
    fixedY: number
    readonly hasClip: boolean
    readonly hasPointer: boolean
    height: number
    readonly lastChild: Clutter.Actor
    layoutManager: Clutter.LayoutManager
    magnificationFilter: Clutter.ScalingFilter
    readonly mapped: boolean
    marginBottom: number
    marginLeft: number
    marginRight: number
    marginTop: number
    minHeight: number
    minHeightSet: boolean
    minWidth: number
    minWidthSet: boolean
    minificationFilter: Clutter.ScalingFilter
    name: string
    naturalHeight: number
    naturalHeightSet: boolean
    naturalWidth: number
    naturalWidthSet: boolean
    offscreenRedirect: Clutter.OffscreenRedirect
    opacity: number
    pivotPoint: Clutter.Point
    pivotPointZ: number
    position: Clutter.Point
    reactive: boolean
    readonly realized: boolean
    requestMode: Clutter.RequestMode
    rotationAngleX: number
    rotationAngleY: number
    rotationAngleZ: number
    rotationCenterX: Clutter.Vertex
    rotationCenterY: Clutter.Vertex
    rotationCenterZ: Clutter.Vertex
    rotationCenterZGravity: Clutter.Gravity
    scaleCenterX: number
    scaleCenterY: number
    scaleGravity: Clutter.Gravity
    scaleX: number
    scaleY: number
    scaleZ: number
    showOnSetParent: boolean
    size: Clutter.Size
    textDirection: Clutter.TextDirection
    transform: Clutter.Matrix
    readonly transformSet: boolean
    translationX: number
    translationY: number
    translationZ: number
    visible: boolean
    width: number
    x: number
    xAlign: Clutter.ActorAlign
    xExpand: boolean
    y: number
    yAlign: Clutter.ActorAlign
    yExpand: boolean
    zPosition: number
    /* Properties of Clutter-1.0.Clutter.Media */
    audioVolume: number
    readonly bufferFill: number
    readonly canSeek: boolean
    readonly duration: number
    playing: boolean
    progress: number
    subtitleFontName: string
    subtitleUri: string
    uri: string
    /* Properties of ClutterGst-1.0.ClutterGst.Player */
    audioStream: number
    readonly audioStreams: object
    readonly idle: boolean
    readonly inSeek: boolean
    seekFlags: SeekFlags
    subtitleTrack: number
    readonly subtitleTracks: object
    userAgent: string
    /* Fields of Clutter-1.0.Clutter.Actor */
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of ClutterGst-1.0.ClutterGst.VideoTexture */
    getAudioStream(): number
    getAudioStreams(): Gst.TagList[]
    getBufferingMode(): BufferingMode
    getIdleMaterial(): Cogl.Handle
    getPipeline(): Gst.Element
    getSeekFlags(): SeekFlags
    getSubtitleTrack(): number
    getSubtitleTracks(): Gst.TagList[]
    getUserAgent(): string
    setAudioStream(index: number): void
    setBufferingMode(mode: BufferingMode): void
    setIdleMaterial(material: Cogl.Handle): void
    setSeekFlags(flags: SeekFlags): void
    setSubtitleTrack(index: number): void
    setUserAgent(userAgent: string): void
    /* Methods of Clutter-1.0.Clutter.Texture */
    getBaseSize(): [ /* width */ number, /* height */ number ]
    getCoglMaterial(): Cogl.Handle
    getCoglTexture(): Cogl.Handle
    getFilterQuality(): Clutter.TextureQuality
    getKeepAspectRatio(): boolean
    getLoadAsync(): boolean
    getLoadDataAsync(): boolean
    getMaxTileWaste(): number
    getPickWithAlpha(): boolean
    getPixelFormat(): Cogl.PixelFormat
    getRepeat(): [ /* repeatX */ boolean, /* repeatY */ boolean ]
    getSyncSize(): boolean
    setAreaFromRgbData(data: Uint8Array, hasAlpha: boolean, x: number, y: number, width: number, height: number, rowstride: number, bpp: number, flags: Clutter.TextureFlags): boolean
    setCoglMaterial(coglMaterial: Cogl.Handle): void
    setCoglTexture(coglTex: Cogl.Handle): void
    setFilterQuality(filterQuality: Clutter.TextureQuality): void
    setFromFile(filename: string): boolean
    setFromRgbData(data: Uint8Array, hasAlpha: boolean, width: number, height: number, rowstride: number, bpp: number, flags: Clutter.TextureFlags): boolean
    setFromYuvData(data: Uint8Array, width: number, height: number, flags: Clutter.TextureFlags): boolean
    setKeepAspectRatio(keepAspect: boolean): void
    setLoadAsync(loadAsync: boolean): void
    setLoadDataAsync(loadAsync: boolean): void
    setPickWithAlpha(pickWithAlpha: boolean): void
    setRepeat(repeatX: boolean, repeatY: boolean): void
    setSyncSize(syncSize: boolean): void
    /* Methods of Clutter-1.0.Clutter.Actor */
    addAction(action: Clutter.Action): void
    addActionWithName(name: string, action: Clutter.Action): void
    addChild(child: Clutter.Actor): void
    addConstraint(constraint: Clutter.Constraint): void
    addConstraintWithName(name: string, constraint: Clutter.Constraint): void
    addEffect(effect: Clutter.Effect): void
    addEffectWithName(name: string, effect: Clutter.Effect): void
    addTransition(name: string, transition: Clutter.Transition): void
    allocate(box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    allocateAlignFill(box: Clutter.ActorBox, xAlign: number, yAlign: number, xFill: boolean, yFill: boolean, flags: Clutter.AllocationFlags): void
    allocateAvailableSize(x: number, y: number, availableWidth: number, availableHeight: number, flags: Clutter.AllocationFlags): void
    allocatePreferredSize(flags: Clutter.AllocationFlags): void
    animateWithAlphav(alpha: Clutter.Alpha, properties: string[], values: any[]): Clutter.Animation
    animateWithTimelinev(mode: number, timeline: Clutter.Timeline, properties: string[], values: any[]): Clutter.Animation
    animatev(mode: number, duration: number, properties: string[], values: any[]): Clutter.Animation
    applyRelativeTransformToPoint(ancestor: Clutter.Actor | null, point: Clutter.Vertex): /* vertex */ Clutter.Vertex
    applyTransformToPoint(point: Clutter.Vertex): /* vertex */ Clutter.Vertex
    bindModel(model: Gio.ListModel | null, createChildFunc: Clutter.ActorCreateChildFunc): void
    clearActions(): void
    clearConstraints(): void
    clearEffects(): void
    contains(descendant: Clutter.Actor): boolean
    continuePaint(): void
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    destroy(): void
    destroyAllChildren(): void
    detachAnimation(): void
    event(event: Clutter.Event, capture: boolean): boolean
    getAbsAllocationVertices(): /* verts */ Clutter.Vertex[]
    getAccessible(): Atk.Object
    getAction(name: string): Clutter.Action
    getActions(): Clutter.Action[]
    getAllocationBox(): /* box */ Clutter.ActorBox
    getAllocationGeometry(): /* geom */ Clutter.Geometry
    getAllocationVertices(ancestor?: Clutter.Actor | null): /* verts */ Clutter.Vertex[]
    getAnchorPoint(): [ /* anchorX */ number, /* anchorY */ number ]
    getAnchorPointGravity(): Clutter.Gravity
    getAnimation(): Clutter.Animation
    getBackgroundColor(): /* color */ Clutter.Color
    getChildAtIndex(index: number): Clutter.Actor
    getChildTransform(): /* transform */ Clutter.Matrix
    getChildren(): Clutter.Actor[]
    getClip(): [ /* xoff */ number | null, /* yoff */ number | null, /* width */ number | null, /* height */ number | null ]
    getClipToAllocation(): boolean
    getConstraint(name: string): Clutter.Constraint
    getConstraints(): Clutter.Constraint[]
    getContent(): Clutter.Content
    getContentBox(): /* box */ Clutter.ActorBox
    getContentGravity(): Clutter.ContentGravity
    getContentRepeat(): Clutter.ContentRepeat
    getContentScalingFilters(): [ /* minFilter */ Clutter.ScalingFilter | null, /* magFilter */ Clutter.ScalingFilter | null ]
    getDefaultPaintVolume(): Clutter.PaintVolume
    getDepth(): number
    getEasingDelay(): number
    getEasingDuration(): number
    getEasingMode(): Clutter.AnimationMode
    getEffect(name: string): Clutter.Effect
    getEffects(): Clutter.Effect[]
    getFirstChild(): Clutter.Actor
    getFixedPositionSet(): boolean
    getFlags(): Clutter.ActorFlags
    getGeometry(): /* geometry */ Clutter.Geometry
    getGid(): number
    getHeight(): number
    getLastChild(): Clutter.Actor
    getLayoutManager(): Clutter.LayoutManager
    getMargin(): /* margin */ Clutter.Margin
    getMarginBottom(): number
    getMarginLeft(): number
    getMarginRight(): number
    getMarginTop(): number
    getNChildren(): number
    getName(): string
    getNextSibling(): Clutter.Actor
    getOffscreenRedirect(): Clutter.OffscreenRedirect
    getOpacity(): number
    getPaintBox(): [ /* returnType */ boolean, /* box */ Clutter.ActorBox ]
    getPaintOpacity(): number
    getPaintVisibility(): boolean
    getPaintVolume(): Clutter.PaintVolume
    getPangoContext(): Pango.Context
    getParent(): Clutter.Actor
    getPivotPoint(): [ /* pivotX */ number | null, /* pivotY */ number | null ]
    getPivotPointZ(): number
    getPosition(): [ /* x */ number | null, /* y */ number | null ]
    getPreferredHeight(forWidth: number): [ /* minHeightP */ number | null, /* naturalHeightP */ number | null ]
    getPreferredSize(): [ /* minWidthP */ number | null, /* minHeightP */ number | null, /* naturalWidthP */ number | null, /* naturalHeightP */ number | null ]
    getPreferredWidth(forHeight: number): [ /* minWidthP */ number | null, /* naturalWidthP */ number | null ]
    getPreviousSibling(): Clutter.Actor
    getReactive(): boolean
    getRequestMode(): Clutter.RequestMode
    getRotation(axis: Clutter.RotateAxis): [ /* returnType */ number, /* x */ number, /* y */ number, /* z */ number ]
    getRotationAngle(axis: Clutter.RotateAxis): number
    getScale(): [ /* scaleX */ number | null, /* scaleY */ number | null ]
    getScaleCenter(): [ /* centerX */ number | null, /* centerY */ number | null ]
    getScaleGravity(): Clutter.Gravity
    getScaleZ(): number
    getShader(): Clutter.Shader
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    getStage(): Clutter.Stage
    getTextDirection(): Clutter.TextDirection
    getTransform(): /* transform */ Clutter.Matrix
    getTransformationMatrix(): /* matrix */ Clutter.Matrix
    getTransformedPaintVolume(relativeToAncestor: Clutter.Actor): Clutter.PaintVolume
    getTransformedPosition(): [ /* x */ number | null, /* y */ number | null ]
    getTransformedSize(): [ /* width */ number | null, /* height */ number | null ]
    getTransition(name: string): Clutter.Transition
    getTranslation(): [ /* translateX */ number | null, /* translateY */ number | null, /* translateZ */ number | null ]
    getWidth(): number
    getX(): number
    getXAlign(): Clutter.ActorAlign
    getXExpand(): boolean
    getY(): number
    getYAlign(): Clutter.ActorAlign
    getYExpand(): boolean
    getZPosition(): number
    getZRotationGravity(): Clutter.Gravity
    grabKeyFocus(): void
    hasActions(): boolean
    hasAllocation(): boolean
    hasConstraints(): boolean
    hasEffects(): boolean
    hasKeyFocus(): boolean
    hasOverlaps(): boolean
    hide(): void
    hideAll(): void
    insertChildAbove(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    insertChildAtIndex(child: Clutter.Actor, index: number): void
    insertChildBelow(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    isInClonePaint(): boolean
    isMapped(): boolean
    isRealized(): boolean
    isRotated(): boolean
    isScaled(): boolean
    isVisible(): boolean
    lower(above?: Clutter.Actor | null): void
    lowerBottom(): void
    map(): void
    moveAnchorPoint(anchorX: number, anchorY: number): void
    moveAnchorPointFromGravity(gravity: Clutter.Gravity): void
    moveBy(dx: number, dy: number): void
    needsExpand(orientation: Clutter.Orientation): boolean
    paint(): void
    popInternal(): void
    pushInternal(): void
    queueRedraw(): void
    queueRedrawWithClip(clip?: cairo.RectangleInt | null): void
    queueRelayout(): void
    raise(below?: Clutter.Actor | null): void
    raiseTop(): void
    realize(): void
    removeAction(action: Clutter.Action): void
    removeActionByName(name: string): void
    removeAllChildren(): void
    removeAllTransitions(): void
    removeChild(child: Clutter.Actor): void
    removeClip(): void
    removeConstraint(constraint: Clutter.Constraint): void
    removeConstraintByName(name: string): void
    removeEffect(effect: Clutter.Effect): void
    removeEffectByName(name: string): void
    removeTransition(name: string): void
    reparent(newParent: Clutter.Actor): void
    replaceChild(oldChild: Clutter.Actor, newChild: Clutter.Actor): void
    restoreEasingState(): void
    saveEasingState(): void
    setAllocation(box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    setAnchorPoint(anchorX: number, anchorY: number): void
    setAnchorPointFromGravity(gravity: Clutter.Gravity): void
    setBackgroundColor(color?: Clutter.Color | null): void
    setChildAboveSibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    setChildAtIndex(child: Clutter.Actor, index: number): void
    setChildBelowSibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    setChildTransform(transform?: Clutter.Matrix | null): void
    setClip(xoff: number, yoff: number, width: number, height: number): void
    setClipToAllocation(clipSet: boolean): void
    setContent(content?: Clutter.Content | null): void
    setContentGravity(gravity: Clutter.ContentGravity): void
    setContentRepeat(repeat: Clutter.ContentRepeat): void
    setContentScalingFilters(minFilter: Clutter.ScalingFilter, magFilter: Clutter.ScalingFilter): void
    setDepth(depth: number): void
    setEasingDelay(msecs: number): void
    setEasingDuration(msecs: number): void
    setEasingMode(mode: Clutter.AnimationMode): void
    setFixedPositionSet(isSet: boolean): void
    setFlags(flags: Clutter.ActorFlags): void
    setGeometry(geometry: Clutter.Geometry): void
    setHeight(height: number): void
    setLayoutManager(manager?: Clutter.LayoutManager | null): void
    setMargin(margin: Clutter.Margin): void
    setMarginBottom(margin: number): void
    setMarginLeft(margin: number): void
    setMarginRight(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOffscreenRedirect(redirect: Clutter.OffscreenRedirect): void
    setOpacity(opacity: number): void
    setParent(parent: Clutter.Actor): void
    setPivotPoint(pivotX: number, pivotY: number): void
    setPivotPointZ(pivotZ: number): void
    setPosition(x: number, y: number): void
    setReactive(reactive: boolean): void
    setRequestMode(mode: Clutter.RequestMode): void
    setRotation(axis: Clutter.RotateAxis, angle: number, x: number, y: number, z: number): void
    setRotationAngle(axis: Clutter.RotateAxis, angle: number): void
    setScale(scaleX: number, scaleY: number): void
    setScaleFull(scaleX: number, scaleY: number, centerX: number, centerY: number): void
    setScaleWithGravity(scaleX: number, scaleY: number, gravity: Clutter.Gravity): void
    setScaleZ(scaleZ: number): void
    setShader(shader?: Clutter.Shader | null): boolean
    setShaderParam(param: string, value: any): void
    setShaderParamFloat(param: string, value: number): void
    setShaderParamInt(param: string, value: number): void
    setSize(width: number, height: number): void
    setTextDirection(textDir: Clutter.TextDirection): void
    setTransform(transform?: Clutter.Matrix | null): void
    setTranslation(translateX: number, translateY: number, translateZ: number): void
    setWidth(width: number): void
    setX(x: number): void
    setXAlign(xAlign: Clutter.ActorAlign): void
    setXExpand(expand: boolean): void
    setY(y: number): void
    setYAlign(yAlign: Clutter.ActorAlign): void
    setYExpand(expand: boolean): void
    setZPosition(zPosition: number): void
    setZRotationFromGravity(angle: number, gravity: Clutter.Gravity): void
    shouldPickPaint(): boolean
    show(): void
    showAll(): void
    transformStagePoint(x: number, y: number): [ /* returnType */ boolean, /* xOut */ number, /* yOut */ number ]
    unmap(): void
    unparent(): void
    unrealize(): void
    unsetFlags(flags: Clutter.ActorFlags): void
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
    /* Methods of Clutter-1.0.Clutter.Animatable */
    animateProperty(animation: Clutter.Animation, propertyName: string, initialValue: any, finalValue: any, progress: number, value: any): boolean
    findProperty(propertyName: string): GObject.ParamSpec
    getInitialState(propertyName: string, value: any): void
    interpolateValue(propertyName: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    setFinalState(propertyName: string, value: any): void
    /* Methods of Clutter-1.0.Clutter.Container */
    addActor(actor: Clutter.Actor): void
    childGetProperty(child: Clutter.Actor, property: string, value: any): void
    childNotify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    childSetProperty(child: Clutter.Actor, property: string, value: any): void
    createChildMeta(actor: Clutter.Actor): void
    destroyChildMeta(actor: Clutter.Actor): void
    findChildByName(childName: string): Clutter.Actor
    foreach(callback: Clutter.Callback): void
    foreachWithInternals(callback: Clutter.Callback): void
    getChildMeta(actor: Clutter.Actor): Clutter.ChildMeta
    lowerChild(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    raiseChild(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    removeActor(actor: Clutter.Actor): void
    sortDepthOrder(): void
    /* Methods of Clutter-1.0.Clutter.Media */
    getAudioVolume(): number
    getBufferFill(): number
    getCanSeek(): boolean
    getDuration(): number
    getPlaying(): boolean
    getProgress(): number
    getSubtitleFontName(): string
    getSubtitleUri(): string
    getUri(): string
    setAudioVolume(volume: number): void
    setFilename(filename: string): void
    setPlaying(playing: boolean): void
    setProgress(progress: number): void
    setSubtitleFontName(fontName: string): void
    setSubtitleUri(uri: string): void
    setUri(uri: string): void
    /* Methods of Clutter-1.0.Clutter.Scriptable */
    getId(): string
    parseCustomNode(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    setCustomProperty(script: Clutter.Script, name: string, value: any): void
    setId(id: string): void
    /* Methods of ClutterGst-1.0.ClutterGst.Player */
    deinit(): void
    getAudioStreams(): string[]
    getIdle(): boolean
    getInSeek(): boolean
    getSubtitleTracks(): string[]
    init(): boolean
    setAudioStream(index: number): void
    setBufferingMode(mode: BufferingMode): void
    setSeekFlags(flags: SeekFlags): void
    setSubtitleTrack(index: number): void
    setUserAgent(userAgent: string): void
    /* Signals of Clutter-1.0.Clutter.Texture */
    connect(sigName: "load-finished", callback: ((error: GLib.Error) => void)): number
    on(sigName: "load-finished", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-finished", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-finished", callback: (error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "load-finished", error: GLib.Error): void
    connect(sigName: "pixbuf-change", callback: (() => void)): number
    on(sigName: "pixbuf-change", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pixbuf-change", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pixbuf-change", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "pixbuf-change"): void
    connect(sigName: "size-change", callback: ((width: number, height: number) => void)): number
    on(sigName: "size-change", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-change", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-change", callback: (width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "size-change", width: number, height: number): void
    /* Signals of Clutter-1.0.Clutter.Actor */
    connect(sigName: "allocation-changed", callback: ((box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    on(sigName: "allocation-changed", callback: (box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "allocation-changed", callback: (box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "allocation-changed", callback: (box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void): NodeJS.EventEmitter
    emit(sigName: "allocation-changed", box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    connect(sigName: "button-press-event", callback: ((event: Clutter.ButtonEvent) => boolean)): number
    on(sigName: "button-press-event", callback: (event: Clutter.ButtonEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (event: Clutter.ButtonEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (event: Clutter.ButtonEvent) => void): NodeJS.EventEmitter
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    connect(sigName: "button-release-event", callback: ((event: Clutter.ButtonEvent) => boolean)): number
    on(sigName: "button-release-event", callback: (event: Clutter.ButtonEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (event: Clutter.ButtonEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (event: Clutter.ButtonEvent) => void): NodeJS.EventEmitter
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    connect(sigName: "captured-event", callback: ((event: Clutter.Event) => boolean)): number
    on(sigName: "captured-event", callback: (event: Clutter.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "captured-event", callback: (event: Clutter.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "captured-event", callback: (event: Clutter.Event) => void): NodeJS.EventEmitter
    emit(sigName: "captured-event", event: Clutter.Event): void
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    connect(sigName: "enter-event", callback: ((event: Clutter.CrossingEvent) => boolean)): number
    on(sigName: "enter-event", callback: (event: Clutter.CrossingEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-event", callback: (event: Clutter.CrossingEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-event", callback: (event: Clutter.CrossingEvent) => void): NodeJS.EventEmitter
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    connect(sigName: "event", callback: ((event: Clutter.Event) => boolean)): number
    on(sigName: "event", callback: (event: Clutter.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: Clutter.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: Clutter.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: Clutter.Event): void
    connect(sigName: "hide", callback: (() => void)): number
    on(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide"): void
    connect(sigName: "key-focus-in", callback: (() => void)): number
    on(sigName: "key-focus-in", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-focus-in", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-focus-in", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "key-focus-in"): void
    connect(sigName: "key-focus-out", callback: (() => void)): number
    on(sigName: "key-focus-out", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-focus-out", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-focus-out", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "key-focus-out"): void
    connect(sigName: "key-press-event", callback: ((event: Clutter.KeyEvent) => boolean)): number
    on(sigName: "key-press-event", callback: (event: Clutter.KeyEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (event: Clutter.KeyEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (event: Clutter.KeyEvent) => void): NodeJS.EventEmitter
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    connect(sigName: "key-release-event", callback: ((event: Clutter.KeyEvent) => boolean)): number
    on(sigName: "key-release-event", callback: (event: Clutter.KeyEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (event: Clutter.KeyEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (event: Clutter.KeyEvent) => void): NodeJS.EventEmitter
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    connect(sigName: "leave-event", callback: ((event: Clutter.CrossingEvent) => boolean)): number
    on(sigName: "leave-event", callback: (event: Clutter.CrossingEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-event", callback: (event: Clutter.CrossingEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-event", callback: (event: Clutter.CrossingEvent) => void): NodeJS.EventEmitter
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    connect(sigName: "motion-event", callback: ((event: Clutter.MotionEvent) => boolean)): number
    on(sigName: "motion-event", callback: (event: Clutter.MotionEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "motion-event", callback: (event: Clutter.MotionEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "motion-event", callback: (event: Clutter.MotionEvent) => void): NodeJS.EventEmitter
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    connect(sigName: "paint", callback: (() => void)): number
    on(sigName: "paint", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paint", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paint", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "paint"): void
    connect(sigName: "parent-set", callback: ((oldParent?: Clutter.Actor | null) => void)): number
    on(sigName: "parent-set", callback: (oldParent?: Clutter.Actor | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (oldParent?: Clutter.Actor | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (oldParent?: Clutter.Actor | null) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", oldParent?: Clutter.Actor | null): void
    connect(sigName: "pick", callback: ((color: Clutter.Color) => void)): number
    on(sigName: "pick", callback: (color: Clutter.Color) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pick", callback: (color: Clutter.Color) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pick", callback: (color: Clutter.Color) => void): NodeJS.EventEmitter
    emit(sigName: "pick", color: Clutter.Color): void
    connect(sigName: "queue-redraw", callback: ((origin: Clutter.Actor) => void)): number
    on(sigName: "queue-redraw", callback: (origin: Clutter.Actor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "queue-redraw", callback: (origin: Clutter.Actor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "queue-redraw", callback: (origin: Clutter.Actor) => void): NodeJS.EventEmitter
    emit(sigName: "queue-redraw", origin: Clutter.Actor): void
    connect(sigName: "queue-relayout", callback: (() => void)): number
    on(sigName: "queue-relayout", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "queue-relayout", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "queue-relayout", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "queue-relayout"): void
    connect(sigName: "realize", callback: (() => void)): number
    on(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "realize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "realize"): void
    connect(sigName: "scroll-event", callback: ((event: Clutter.ScrollEvent) => boolean)): number
    on(sigName: "scroll-event", callback: (event: Clutter.ScrollEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (event: Clutter.ScrollEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (event: Clutter.ScrollEvent) => void): NodeJS.EventEmitter
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    connect(sigName: "show", callback: (() => void)): number
    on(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show"): void
    connect(sigName: "touch-event", callback: ((event: Clutter.Event) => boolean)): number
    on(sigName: "touch-event", callback: (event: Clutter.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "touch-event", callback: (event: Clutter.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "touch-event", callback: (event: Clutter.Event) => void): NodeJS.EventEmitter
    emit(sigName: "touch-event", event: Clutter.Event): void
    connect(sigName: "transition-stopped", callback: ((name: string, isFinished: boolean) => void)): number
    on(sigName: "transition-stopped", callback: (name: string, isFinished: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "transition-stopped", callback: (name: string, isFinished: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "transition-stopped", callback: (name: string, isFinished: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "transition-stopped", name: string, isFinished: boolean): void
    connect(sigName: "transitions-completed", callback: (() => void)): number
    on(sigName: "transitions-completed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "transitions-completed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "transitions-completed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "transitions-completed"): void
    connect(sigName: "unrealize", callback: (() => void)): number
    on(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter-1.0.Clutter.Container */
    connect(sigName: "actor-added", callback: ((actor: Clutter.Actor) => void)): number
    on(sigName: "actor-added", callback: (actor: Clutter.Actor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "actor-added", callback: (actor: Clutter.Actor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "actor-added", callback: (actor: Clutter.Actor) => void): NodeJS.EventEmitter
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    connect(sigName: "actor-removed", callback: ((actor: Clutter.Actor) => void)): number
    on(sigName: "actor-removed", callback: (actor: Clutter.Actor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "actor-removed", callback: (actor: Clutter.Actor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "actor-removed", callback: (actor: Clutter.Actor) => void): NodeJS.EventEmitter
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    connect(sigName: "child-notify", callback: ((actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (actor: Clutter.Actor, pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (actor: Clutter.Actor, pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (actor: Clutter.Actor, pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    /* Signals of Clutter-1.0.Clutter.Media */
    connect(sigName: "eos", callback: (() => void)): number
    on(sigName: "eos", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "eos", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "eos", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "eos"): void
    connect(sigName: "error", callback: ((error: GLib.Error) => void)): number
    on(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: (error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "error", error: GLib.Error): void
    /* Signals of ClutterGst-1.0.ClutterGst.Player */
    connect(sigName: "download-buffering", callback: ((start: number, stop: number) => void)): number
    on(sigName: "download-buffering", callback: (start: number, stop: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "download-buffering", callback: (start: number, stop: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "download-buffering", callback: (start: number, stop: number) => void): NodeJS.EventEmitter
    emit(sigName: "download-buffering", start: number, stop: number): void
    connect(sigName: "notify::pixel-aspect-ratio", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixel-aspect-ratio", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixel-aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixel-aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixel-aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filter-quality", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-quality", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter-quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter-quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter-quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keep-aspect-ratio", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keep-aspect-ratio", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keep-aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keep-aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keep-aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::load-async", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::load-async", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::load-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::load-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::load-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::load-data-async", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::load-data-async", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::load-data-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::load-data-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::load-data-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pick-with-alpha", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pick-with-alpha", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pick-with-alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pick-with-alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pick-with-alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixel-format", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixel-format", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixel-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixel-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixel-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::repeat-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::repeat-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::repeat-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::repeat-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::repeat-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::repeat-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::repeat-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::repeat-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sync-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sync-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sync-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sync-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-waste", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-waste", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-waste", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-waste", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-waste", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::actions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allocation", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anchor-gravity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anchor-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anchor-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-color-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-transform-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-rect", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-to-allocation", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::constraints", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-box", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-gravity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-repeat", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::depth", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::effect", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-position-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-clip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-pointer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::magnification-filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mapped", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-left", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-right", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-height-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-width-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::minification-filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-height-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-width-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offscreen-redirect", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pivot-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pivot-point-z", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reactive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::realized", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::request-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-z", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-center-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-center-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-center-z", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-center-z-gravity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-center-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-center-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-gravity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-z", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-on-set-parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text-direction", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-z", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-align", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-expand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-align", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-expand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::z-position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::audio-volume", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-volume", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::audio-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::audio-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::audio-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::buffer-fill", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-fill", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer-fill", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer-fill", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer-fill", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-seek", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-seek", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::playing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::playing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::playing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::playing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle-font-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-font-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::audio-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::audio-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::audio-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::audio-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::audio-streams", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-streams", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::audio-streams", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::audio-streams", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::audio-streams", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::idle", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::idle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::idle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::idle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-seek", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-seek", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seek-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seek-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seek-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seek-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seek-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle-track", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-track", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle-tracks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-tracks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: VideoTexture_ConstructProps)
    _init (config?: VideoTexture_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VideoTexture
    static classFindChildProperty(klass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classListChildProperties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    static classInit(objectClass: GObject.ObjectClass): void
    static $gtype: GObject.Type
}
abstract class PlayerIface {
    /* Fields of ClutterGst-1.0.ClutterGst.PlayerIface */
    readonly getPipeline: (player: Player) => Gst.Element
    readonly getUserAgent: (player: Player) => string
    readonly setUserAgent: (player: Player, userAgent: string) => void
    readonly getSeekFlags: (player: Player) => SeekFlags
    readonly setSeekFlags: (player: Player, flags: SeekFlags) => void
    readonly getBufferingMode: (player: Player) => BufferingMode
    readonly setBufferingMode: (player: Player, mode: BufferingMode) => void
    readonly getAudioStreams: (player: Player) => string[]
    readonly getAudioStream: (player: Player) => number
    readonly setAudioStream: (player: Player, index: number) => void
    readonly getSubtitleTracks: (player: Player) => string[]
    readonly getSubtitleTrack: (player: Player) => number
    readonly setSubtitleTrack: (player: Player, index: number) => void
    readonly getIdle: (player: Player) => boolean
    readonly getInSeek: (player: Player) => boolean
    readonly downloadBuffering: (player: Player, start: number, stop: number) => void
    static name: string
}
class PlayerIfacePrivate {
    static name: string
}
abstract class VideoSinkClass {
    static name: string
}
class VideoSinkPrivate {
    static name: string
}
abstract class VideoTextureClass {
    static name: string
}
class VideoTexturePrivate {
    static name: string
}
}
export default ClutterGst;