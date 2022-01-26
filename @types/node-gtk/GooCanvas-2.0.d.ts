/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GooCanvas-2.0
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

export namespace GooCanvas {

enum CairoAntialias {
    DEFAULT,
    NONE,
    GRAY,
    SUBPIXEL,
}
enum CairoFillRule {
    WINDING,
    EVEN_ODD,
}
enum CairoHintMetrics {
    DEFAULT,
    OFF,
    ON,
}
enum CairoLineCap {
    BUTT,
    ROUND,
    SQUARE,
}
enum CairoLineJoin {
    MITER,
    ROUND,
    BEVEL,
}
enum CairoOperator {
    CLEAR,
    SOURCE,
    OVER,
    IN,
    OUT,
    ATOP,
    DEST,
    DEST_OVER,
    DEST_IN,
    DEST_OUT,
    DEST_ATOP,
    XOR,
    ADD,
    SATURATE,
}
enum CanvasAnchorType {
    CENTER,
    NORTH,
    NORTH_WEST,
    NORTH_EAST,
    SOUTH,
    SOUTH_WEST,
    SOUTH_EAST,
    WEST,
    EAST,
    N,
    NW,
    NE,
    S,
    SW,
    SE,
    W,
    E,
}
enum CanvasAnimateType {
    FREEZE,
    RESET,
    RESTART,
    BOUNCE,
}
enum CanvasItemVisibility {
    HIDDEN,
    INVISIBLE,
    VISIBLE,
    VISIBLE_ABOVE_THRESHOLD,
}
enum CanvasPathCommandType {
    MOVE_TO,
    CLOSE_PATH,
    LINE_TO,
    HORIZONTAL_LINE_TO,
    VERTICAL_LINE_TO,
    CURVE_TO,
    SMOOTH_CURVE_TO,
    QUADRATIC_CURVE_TO,
    SMOOTH_QUADRATIC_CURVE_TO,
    ELLIPTICAL_ARC,
}
enum CanvasPointerEvents {
    VISIBLE_MASK,
    PAINTED_MASK,
    FILL_MASK,
    STROKE_MASK,
    NONE,
    VISIBLE_PAINTED,
    VISIBLE_FILL,
    VISIBLE_STROKE,
    VISIBLE,
    PAINTED,
    FILL,
    STROKE,
    ALL,
}
const CANVAS_POLYLINE_NUM_ARROW_POINTS: number
function cairoMatrixCopy(matrix: cairo.Matrix): cairo.Matrix
function cairoMatrixFree(matrix: cairo.Matrix): void
function canvasItemClassFindChildProperty(iclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
function canvasItemClassInstallChildProperty(iclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
function canvasItemClassListChildProperties(iclass: GObject.ObjectClass): GObject.ParamSpec[]
function canvasItemModelClassFindChildProperty(mclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
function canvasItemModelClassInstallChildProperty(mclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
function canvasItemModelClassListChildProperties(mclass: GObject.ObjectClass): GObject.ParamSpec[]
class CanvasItem {
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItem */
    canFocus: boolean
    description: string
    parent: CanvasItem
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItem */
    addChild(child: CanvasItem, position: number): void
    allocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    ensureUpdated(): void
    findChild(child: CanvasItem): number
    getBounds(): /* bounds */ CanvasBounds
    getCanvas(): Canvas
    getChild(childNum: number): CanvasItem
    getChildProperty(child: CanvasItem, propertyName: string, value: any): void
    getIsStatic(): boolean
    getItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    getModel(): CanvasItemModel
    getNChildren(): number
    getParent(): CanvasItem
    getRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    getRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    getRequestedHeight(cr: cairo.Context, width: number): number
    getSimpleTransform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    getStyle(): CanvasStyle
    getTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    getTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    isContainer(): boolean
    isVisible(): boolean
    lower(below?: CanvasItem | null): void
    moveChild(oldPosition: number, newPosition: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    removeChild(childNum: number): void
    requestUpdate(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setCanvas(canvas: Canvas): void
    setChildProperty(child: CanvasItem, propertyName: string, value: any): void
    setIsStatic(isStatic: boolean): void
    setModel(model: CanvasItemModel): void
    setParent(parent: CanvasItem): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    update(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Signals of GooCanvas-2.0.GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: ((stopped: boolean) => void)): number
    on(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (stopped: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "button-press-event", callback: ((targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-press-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: ((targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-release-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "child-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "enter-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "enter-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "focus-in-event", callback: ((targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-in-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: ((targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-out-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: ((targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    on(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void): NodeJS.EventEmitter
    emit(sigName: "grab-broken-event", targetItem: CanvasItem, event: Gdk.EventGrabBroken): void
    connect(sigName: "key-press-event", callback: ((targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-press-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: ((targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-release-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "leave-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "leave-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "motion-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    on(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void): NodeJS.EventEmitter
    emit(sigName: "motion-notify-event", targetItem: CanvasItem, event: Gdk.EventMotion): void
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "scroll-event", callback: ((targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    on(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void): NodeJS.EventEmitter
    emit(sigName: "scroll-event", targetItem: CanvasItem, event: Gdk.EventScroll): void
    static name: string
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(iclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classInstallChildProperty(iclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    static classListChildProperties(iclass: GObject.ObjectClass): GObject.ParamSpec[]
}
class CanvasItemModel {
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    canFocus: boolean
    description: string
    parent: CanvasItemModel
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    addChild(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    findChild(child: CanvasItemModel): number
    getChild(childNum: number): CanvasItemModel
    getChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    getNChildren(): number
    getParent(): CanvasItemModel
    getSimpleTransform(x: number, y: number, scale: number, rotation: number): boolean
    getStyle(): CanvasStyle
    getTransform(transform: cairo.Matrix): boolean
    isContainer(): boolean
    lower(below?: CanvasItemModel | null): void
    moveChild(oldPosition: number, newPosition: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    removeChild(childNum: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    setParent(parent: CanvasItemModel): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    /* Signals of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: ((stopped: boolean) => void)): number
    on(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (stopped: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "changed", callback: ((recomputeBounds: boolean) => void)): number
    on(sigName: "changed", callback: (recomputeBounds: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (recomputeBounds: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (recomputeBounds: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "changed", recomputeBounds: boolean): void
    connect(sigName: "child-added", callback: ((childNum: number) => void)): number
    on(sigName: "child-added", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (childNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", childNum: number): void
    connect(sigName: "child-moved", callback: ((oldChildNum: number, newChildNum: number) => void)): number
    on(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-moved", oldChildNum: number, newChildNum: number): void
    connect(sigName: "child-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "child-removed", callback: ((childNum: number) => void)): number
    on(sigName: "child-removed", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (childNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", childNum: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(mclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classInstallChildProperty(mclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    static classListChildProperties(mclass: GObject.ObjectClass): GObject.ParamSpec[]
}
interface Canvas_ConstructProps extends Gtk.Container_ConstructProps {
    /* Constructor properties of GooCanvas-2.0.GooCanvas.Canvas */
    anchor?: CanvasAnchorType
    automaticBounds?: boolean
    backgroundColor?: string
    backgroundColorGdkRgba?: Gdk.RGBA
    backgroundColorRgb?: number
    boundsFromOrigin?: boolean
    boundsPadding?: number
    clearBackground?: boolean
    integerLayout?: boolean
    redrawWhenScrolled?: boolean
    resolutionX?: number
    resolutionY?: number
    scale?: number
    scaleX?: number
    scaleY?: number
    units?: Gtk.Unit
    x1?: number
    x2?: number
    y1?: number
    y2?: number
    /* Constructor properties of Gtk-3.0.Gtk.Scrollable */
    hadjustment?: Gtk.Adjustment
    hscrollPolicy?: Gtk.ScrollablePolicy
    vadjustment?: Gtk.Adjustment
    vscrollPolicy?: Gtk.ScrollablePolicy
}
class Canvas {
    /* Properties of GooCanvas-2.0.GooCanvas.Canvas */
    anchor: CanvasAnchorType
    automaticBounds: boolean
    backgroundColor: string
    backgroundColorGdkRgba: Gdk.RGBA
    backgroundColorRgb: number
    boundsFromOrigin: boolean
    boundsPadding: number
    clearBackground: boolean
    integerLayout: boolean
    redrawWhenScrolled: boolean
    resolutionX: number
    resolutionY: number
    scale: number
    scaleX: number
    scaleY: number
    units: Gtk.Unit
    x1: number
    x2: number
    y1: number
    y2: number
    /* Properties of Gtk-3.0.Gtk.Container */
    borderWidth: number
    child: Gtk.Widget
    resizeMode: Gtk.ResizeMode
    /* Properties of Gtk-3.0.Gtk.Widget */
    appPaintable: boolean
    canDefault: boolean
    canFocus: boolean
    readonly compositeChild: boolean
    doubleBuffered: boolean
    events: Gdk.EventMask
    expand: boolean
    focusOnClick: boolean
    halign: Gtk.Align
    hasDefault: boolean
    hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    isFocus: boolean
    margin: number
    marginBottom: number
    marginEnd: number
    marginLeft: number
    marginRight: number
    marginStart: number
    marginTop: number
    name: string
    noShowAll: boolean
    opacity: number
    parent: Gtk.Container
    receivesDefault: boolean
    readonly scaleFactor: number
    sensitive: boolean
    style: Gtk.Style
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    readonly window: Gdk.Window
    /* Properties of Gtk-3.0.Gtk.Scrollable */
    hadjustment: Gtk.Adjustment
    hscrollPolicy: Gtk.ScrollablePolicy
    vadjustment: Gtk.Adjustment
    vscrollPolicy: Gtk.ScrollablePolicy
    /* Fields of Gtk-3.0.Gtk.Container */
    readonly widget: Gtk.Widget
    /* Fields of Gtk-3.0.Gtk.Widget */
    readonly parentInstance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GooCanvas-2.0.GooCanvas.Canvas */
    convertBoundsToItemSpace(item: CanvasItem, bounds: CanvasBounds): void
    convertFromItemSpace(item: CanvasItem, x: number, y: number): [ /* x */ number, /* y */ number ]
    convertFromPixels(x: number, y: number): [ /* x */ number, /* y */ number ]
    convertToItemSpace(item: CanvasItem, x: number, y: number): [ /* x */ number, /* y */ number ]
    convertToPixels(x: number, y: number): [ /* x */ number, /* y */ number ]
    convertUnitsFromPixels(x: number, y: number): [ /* x */ number, /* y */ number ]
    convertUnitsToPixels(x: number, y: number): [ /* x */ number, /* y */ number ]
    createCairoContext(): cairo.Context
    createItem(model: CanvasItemModel): CanvasItem
    getBounds(): [ /* left */ number | null, /* top */ number | null, /* right */ number | null, /* bottom */ number | null ]
    getDefaultLineWidth(): number
    getItem(model: CanvasItemModel): CanvasItem
    getItemAt(x: number, y: number, isPointerEvent: boolean): CanvasItem
    getItemsAt(x: number, y: number, isPointerEvent: boolean): CanvasItem[]
    getItemsInArea(area: CanvasBounds, insideArea: boolean, allowOverlaps: boolean, includeContainers: boolean): CanvasItem[]
    getRootItem(): CanvasItem
    getRootItemModel(): CanvasItemModel
    getScale(): number
    getStaticRootItem(): CanvasItem
    getStaticRootItemModel(): CanvasItemModel
    grabFocus(item: CanvasItem): void
    keyboardGrab(item: CanvasItem, ownerEvents: boolean, time: number): Gdk.GrabStatus
    keyboardUngrab(item: CanvasItem, time: number): void
    pointerGrab(item: CanvasItem, eventMask: Gdk.EventMask, cursor: Gdk.Cursor | null, time: number): Gdk.GrabStatus
    pointerUngrab(item: CanvasItem, time: number): void
    registerWidgetItem(witem: CanvasWidget): void
    render(cr: cairo.Context, bounds: CanvasBounds | null, scale: number): void
    requestItemRedraw(bounds: CanvasBounds, isStatic: boolean): void
    requestRedraw(bounds: CanvasBounds): void
    requestUpdate(): void
    scrollTo(left: number, top: number): void
    setBounds(left: number, top: number, right: number, bottom: number): void
    setRootItem(item: CanvasItem): void
    setRootItemModel(model: CanvasItemModel): void
    setScale(scale: number): void
    setStaticRootItem(item: CanvasItem): void
    setStaticRootItemModel(model: CanvasItemModel): void
    unregisterItem(model: CanvasItemModel): void
    unregisterWidgetItem(witem: CanvasWidget): void
    update(): void
    /* Methods of Gtk-3.0.Gtk.Container */
    add(widget: Gtk.Widget): void
    checkResize(): void
    childGetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    childNotify(child: Gtk.Widget, childProperty: string): void
    childNotifyByPspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    childSetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    childType(): GObject.Type
    forall(callback: Gtk.Callback): void
    foreach(callback: Gtk.Callback): void
    getBorderWidth(): number
    getChildren(): Gtk.Widget[]
    getFocusChain(): [ /* returnType */ boolean, /* focusableWidgets */ Gtk.Widget[] ]
    getFocusChild(): Gtk.Widget | null
    getFocusHadjustment(): Gtk.Adjustment | null
    getFocusVadjustment(): Gtk.Adjustment | null
    getPathForChild(child: Gtk.Widget): Gtk.WidgetPath
    getResizeMode(): Gtk.ResizeMode
    propagateDraw(child: Gtk.Widget, cr: cairo.Context): void
    remove(widget: Gtk.Widget): void
    resizeChildren(): void
    setBorderWidth(borderWidth: number): void
    setFocusChain(focusableWidgets: Gtk.Widget[]): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusHadjustment(adjustment: Gtk.Adjustment): void
    setFocusVadjustment(adjustment: Gtk.Adjustment): void
    setReallocateRedraws(needsRedraws: boolean): void
    setResizeMode(resizeMode: Gtk.ResizeMode): void
    unsetFocusChain(): void
    /* Methods of Gtk-3.0.Gtk.Widget */
    activate(): boolean
    addAccelerator(accelSignal: string, accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType, accelFlags: Gtk.AccelFlags): void
    addDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    addEvents(events: number): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    canActivateAccel(signalId: number): boolean
    childFocus(direction: Gtk.DirectionType): boolean
    childNotify(childProperty: string): void
    classPath(): [ /* pathLength */ number | null, /* path */ string | null, /* pathReversed */ string | null ]
    computeExpand(orientation: Gtk.Orientation): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    destroy(): void
    destroyed(widgetPointer: Gtk.Widget): /* widgetPointer */ Gtk.Widget
    deviceIsShadowed(device: Gdk.Device): boolean
    dragBegin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    dragBeginWithCoordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    dragDestAddImageTargets(): void
    dragDestAddTextTargets(): void
    dragDestAddUriTargets(): void
    dragDestFindTarget(context: Gdk.DragContext, targetList?: Gtk.TargetList | null): Gdk.Atom
    dragDestGetTargetList(): Gtk.TargetList | null
    dragDestGetTrackMotion(): boolean
    dragDestSet(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragDestSetProxy(proxyWindow: Gdk.Window, protocol: Gdk.DragProtocol, useCoordinates: boolean): void
    dragDestSetTargetList(targetList?: Gtk.TargetList | null): void
    dragDestSetTrackMotion(trackMotion: boolean): void
    dragDestUnset(): void
    dragGetData(context: Gdk.DragContext, target: Gdk.Atom, time: number): void
    dragHighlight(): void
    dragSourceAddImageTargets(): void
    dragSourceAddTextTargets(): void
    dragSourceAddUriTargets(): void
    dragSourceGetTargetList(): Gtk.TargetList | null
    dragSourceSet(startButtonMask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragSourceSetIconGicon(icon: Gio.Icon): void
    dragSourceSetIconName(iconName: string): void
    dragSourceSetIconPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    dragSourceSetIconStock(stockId: string): void
    dragSourceSetTargetList(targetList?: Gtk.TargetList | null): void
    dragSourceUnset(): void
    dragUnhighlight(): void
    draw(cr: cairo.Context): void
    ensureStyle(): void
    errorBell(): void
    event(event: Gdk.Event): boolean
    freezeChildNotify(): void
    getAccessible(): Atk.Object
    getActionGroup(prefix: string): Gio.ActionGroup | null
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedSize(): [ /* allocation */ Gtk.Allocation, /* baseline */ number | null ]
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getAppPaintable(): boolean
    getCanDefault(): boolean
    getCanFocus(): boolean
    getChildRequisition(): /* requisition */ Gtk.Requisition
    getChildVisible(): boolean
    getClip(): /* clip */ Gtk.Allocation
    getClipboard(selection: Gdk.Atom): Gtk.Clipboard
    getCompositeName(): string
    getDeviceEnabled(device: Gdk.Device): boolean
    getDeviceEvents(device: Gdk.Device): Gdk.EventMask
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getDoubleBuffered(): boolean
    getEvents(): number
    getFocusOnClick(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHasWindow(): boolean
    getHexpand(): boolean
    getHexpandSet(): boolean
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginLeft(): number
    getMarginRight(): number
    getMarginStart(): number
    getMarginTop(): number
    getModifierMask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    getModifierStyle(): Gtk.RcStyle
    getName(): string
    getNoShowAll(): boolean
    getOpacity(): number
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getParentWindow(): Gdk.Window | null
    getPath(): Gtk.WidgetPath
    getPointer(): [ /* x */ number | null, /* y */ number | null ]
    getPreferredHeight(): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    getPreferredHeightAndBaselineForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    getPreferredHeightForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPreferredWidth(): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    getPreferredWidthForHeight(height: number): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRequisition(): /* requisition */ Gtk.Requisition
    getRootWindow(): Gdk.Window
    getScaleFactor(): number
    getScreen(): Gdk.Screen
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getState(): Gtk.StateType
    getStateFlags(): Gtk.StateFlags
    getStyle(): Gtk.Style
    getStyleContext(): Gtk.StyleContext
    getSupportMultidevice(): boolean
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getTooltipWindow(): Gtk.Window
    getToplevel(): Gtk.Widget
    getValign(): Gtk.Align
    getValignWithBaseline(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getVisual(): Gdk.Visual
    getWindow(): Gdk.Window | null
    grabAdd(): void
    grabDefault(): void
    grabFocus(): void
    grabRemove(): void
    hasGrab(): boolean
    hasRcStyle(): boolean
    hasScreen(): boolean
    hasVisibleFocus(): boolean
    hide(): void
    hideOnDelete(): boolean
    inDestruction(): boolean
    initTemplate(): void
    inputShapeCombineRegion(region?: cairo.Region | null): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    intersect(area: Gdk.Rectangle): [ /* returnType */ boolean, /* intersection */ Gdk.Rectangle | null ]
    isAncestor(ancestor: Gtk.Widget): boolean
    isComposited(): boolean
    isDrawable(): boolean
    isSensitive(): boolean
    isToplevel(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listAccelClosures(): Function[]
    listActionPrefixes(): string[]
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    mnemonicActivate(groupCycling: boolean): boolean
    modifyBase(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyBg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyCursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    modifyFg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyFont(fontDesc?: Pango.FontDescription | null): void
    modifyStyle(style: Gtk.RcStyle): void
    modifyText(state: Gtk.StateType, color?: Gdk.Color | null): void
    overrideBackgroundColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideCursor(cursor?: Gdk.RGBA | null, secondaryCursor?: Gdk.RGBA | null): void
    overrideFont(fontDesc?: Pango.FontDescription | null): void
    overrideSymbolicColor(name: string, color?: Gdk.RGBA | null): void
    path(): [ /* pathLength */ number | null, /* path */ string | null, /* pathReversed */ string | null ]
    queueAllocate(): void
    queueComputeExpand(): void
    queueDraw(): void
    queueDrawArea(x: number, y: number, width: number, height: number): void
    queueDrawRegion(region: cairo.Region): void
    queueResize(): void
    queueResizeNoRedraw(): void
    realize(): void
    regionIntersect(region: cairo.Region): cairo.Region
    registerWindow(window: Gdk.Window): void
    removeAccelerator(accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType): boolean
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    renderIcon(stockId: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    renderIconPixbuf(stockId: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(newParent: Gtk.Widget): void
    resetRcStyles(): void
    resetStyle(): void
    sendExpose(event: Gdk.Event): number
    sendFocusChange(event: Gdk.Event): boolean
    setAccelPath(accelPath?: string | null, accelGroup?: Gtk.AccelGroup | null): void
    setAllocation(allocation: Gtk.Allocation): void
    setAppPaintable(appPaintable: boolean): void
    setCanDefault(canDefault: boolean): void
    setCanFocus(canFocus: boolean): void
    setChildVisible(isVisible: boolean): void
    setClip(clip: Gtk.Allocation): void
    setCompositeName(name: string): void
    setDeviceEnabled(device: Gdk.Device, enabled: boolean): void
    setDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    setDirection(dir: Gtk.TextDirection): void
    setDoubleBuffered(doubleBuffered: boolean): void
    setEvents(events: number): void
    setFocusOnClick(focusOnClick: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHasWindow(hasWindow: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setMapped(mapped: boolean): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginLeft(margin: number): void
    setMarginRight(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setNoShowAll(noShowAll: boolean): void
    setOpacity(opacity: number): void
    setParent(parent: Gtk.Widget): void
    setParentWindow(parentWindow: Gdk.Window): void
    setRealized(realized: boolean): void
    setReceivesDefault(receivesDefault: boolean): void
    setRedrawOnAllocate(redrawOnAllocate: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setState(state: Gtk.StateType): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setStyle(style?: Gtk.Style | null): void
    setSupportMultidevice(supportMultidevice: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setTooltipWindow(customWindow?: Gtk.Window | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    setVisual(visual?: Gdk.Visual | null): void
    setWindow(window: Gdk.Window): void
    shapeCombineRegion(region?: cairo.Region | null): void
    show(): void
    showAll(): void
    showNow(): void
    sizeAllocate(allocation: Gtk.Allocation): void
    sizeAllocateWithBaseline(allocation: Gtk.Allocation, baseline: number): void
    sizeRequest(): /* requisition */ Gtk.Requisition
    styleAttach(): void
    styleGetProperty(propertyName: string, value: any): void
    thawChildNotify(): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregisterWindow(window: Gdk.Window): void
    unsetStateFlags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk-3.0.Gtk.Buildable */
    addChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    constructChild(builder: Gtk.Builder, name: string): GObject.Object
    customFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    getInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    parserFinished(builder: Gtk.Builder): void
    setBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    setName(name: string): void
    /* Methods of Gtk-3.0.Gtk.Scrollable */
    getBorder(): [ /* returnType */ boolean, /* border */ Gtk.Border ]
    getHadjustment(): Gtk.Adjustment
    getHscrollPolicy(): Gtk.ScrollablePolicy
    getVadjustment(): Gtk.Adjustment
    getVscrollPolicy(): Gtk.ScrollablePolicy
    setHadjustment(hadjustment?: Gtk.Adjustment | null): void
    setHscrollPolicy(policy: Gtk.ScrollablePolicy): void
    setVadjustment(vadjustment?: Gtk.Adjustment | null): void
    setVscrollPolicy(policy: Gtk.ScrollablePolicy): void
    /* Signals of GooCanvas-2.0.GooCanvas.Canvas */
    connect(sigName: "item-created", callback: ((item: CanvasItem, model: CanvasItemModel) => void)): number
    on(sigName: "item-created", callback: (item: CanvasItem, model: CanvasItemModel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "item-created", callback: (item: CanvasItem, model: CanvasItemModel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "item-created", callback: (item: CanvasItem, model: CanvasItemModel) => void): NodeJS.EventEmitter
    emit(sigName: "item-created", item: CanvasItem, model: CanvasItemModel): void
    /* Signals of Gtk-3.0.Gtk.Container */
    connect(sigName: "add", callback: ((object: Gtk.Widget) => void)): number
    on(sigName: "add", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "add", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "add", callback: (object: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (() => void)): number
    on(sigName: "check-resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "check-resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "check-resize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: ((object: Gtk.Widget) => void)): number
    on(sigName: "remove", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "remove", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "remove", callback: (object: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: ((object: Gtk.Widget) => void)): number
    on(sigName: "set-focus-child", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-focus-child", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-focus-child", callback: (object: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk-3.0.Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (() => void)): number
    on(sigName: "accel-closures-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "accel-closures-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "accel-closures-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "accel-closures-changed"): void
    connect(sigName: "button-press-event", callback: ((event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: ((event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    connect(sigName: "can-activate-accel", callback: ((signalId: number) => boolean)): number
    on(sigName: "can-activate-accel", callback: (signalId: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "can-activate-accel", callback: (signalId: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "can-activate-accel", callback: (signalId: number) => void): NodeJS.EventEmitter
    emit(sigName: "can-activate-accel", signalId: number): void
    connect(sigName: "child-notify", callback: ((childProperty: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", childProperty: GObject.ParamSpec): void
    connect(sigName: "composited-changed", callback: (() => void)): number
    on(sigName: "composited-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "composited-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "composited-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "composited-changed"): void
    connect(sigName: "configure-event", callback: ((event: Gdk.EventConfigure) => boolean)): number
    on(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void): NodeJS.EventEmitter
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    connect(sigName: "damage-event", callback: ((event: Gdk.EventExpose) => boolean)): number
    on(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void): NodeJS.EventEmitter
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    connect(sigName: "delete-event", callback: ((event: Gdk.Event) => boolean)): number
    on(sigName: "delete-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "delete-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "delete-event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "delete-event", event: Gdk.Event): void
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    connect(sigName: "destroy-event", callback: ((event: Gdk.Event) => boolean)): number
    on(sigName: "destroy-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy-event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "destroy-event", event: Gdk.Event): void
    connect(sigName: "direction-changed", callback: ((previousDirection: Gtk.TextDirection) => void)): number
    on(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void): NodeJS.EventEmitter
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    connect(sigName: "drag-begin", callback: ((context: Gdk.DragContext) => void)): number
    on(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    connect(sigName: "drag-data-delete", callback: ((context: Gdk.DragContext) => void)): number
    on(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    connect(sigName: "drag-data-get", callback: ((context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-data-received", callback: ((context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-drop", callback: ((context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    on(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "drag-end", callback: ((context: Gdk.DragContext) => void)): number
    on(sigName: "drag-end", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-end", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-end", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    connect(sigName: "drag-failed", callback: ((context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    on(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void): NodeJS.EventEmitter
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    connect(sigName: "drag-leave", callback: ((context: Gdk.DragContext, time: number) => void)): number
    on(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    connect(sigName: "drag-motion", callback: ((context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    on(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "draw", callback: ((cr: cairo.Context) => boolean)): number
    on(sigName: "draw", callback: (cr: cairo.Context) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "draw", callback: (cr: cairo.Context) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "draw", callback: (cr: cairo.Context) => void): NodeJS.EventEmitter
    emit(sigName: "draw", cr: cairo.Context): void
    connect(sigName: "enter-notify-event", callback: ((event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "event", callback: ((event: Gdk.Event) => boolean)): number
    on(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "event-after", callback: ((event: Gdk.Event) => void)): number
    on(sigName: "event-after", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event-after", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event-after", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event-after", event: Gdk.Event): void
    connect(sigName: "focus", callback: ((direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    connect(sigName: "focus-in-event", callback: ((event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: ((event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: ((event: Gdk.EventGrabBroken) => boolean)): number
    on(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void): NodeJS.EventEmitter
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    connect(sigName: "grab-focus", callback: (() => void)): number
    on(sigName: "grab-focus", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-focus", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-focus", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "grab-focus"): void
    connect(sigName: "grab-notify", callback: ((wasGrabbed: boolean) => void)): number
    on(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "grab-notify", wasGrabbed: boolean): void
    connect(sigName: "hide", callback: (() => void)): number
    on(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide"): void
    connect(sigName: "hierarchy-changed", callback: ((previousToplevel?: Gtk.Widget | null) => void)): number
    on(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void): NodeJS.EventEmitter
    emit(sigName: "hierarchy-changed", previousToplevel?: Gtk.Widget | null): void
    connect(sigName: "key-press-event", callback: ((event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: ((event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    connect(sigName: "keynav-failed", callback: ((direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "leave-notify-event", callback: ((event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "map", callback: (() => void)): number
    on(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "map"): void
    connect(sigName: "map-event", callback: ((event: Gdk.EventAny) => boolean)): number
    on(sigName: "map-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map-event", callback: (event: Gdk.EventAny) => void): NodeJS.EventEmitter
    emit(sigName: "map-event", event: Gdk.EventAny): void
    connect(sigName: "mnemonic-activate", callback: ((groupCycling: boolean) => boolean)): number
    on(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    connect(sigName: "motion-notify-event", callback: ((event: Gdk.EventMotion) => boolean)): number
    on(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void): NodeJS.EventEmitter
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: ((direction: Gtk.DirectionType) => void)): number
    on(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "parent-set", callback: ((oldParent?: Gtk.Widget | null) => void)): number
    on(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", oldParent?: Gtk.Widget | null): void
    connect(sigName: "popup-menu", callback: (() => boolean)): number
    on(sigName: "popup-menu", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "popup-menu", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "popup-menu", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "popup-menu"): void
    connect(sigName: "property-notify-event", callback: ((event: Gdk.EventProperty) => boolean)): number
    on(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void): NodeJS.EventEmitter
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    connect(sigName: "proximity-in-event", callback: ((event: Gdk.EventProximity) => boolean)): number
    on(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void): NodeJS.EventEmitter
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    connect(sigName: "proximity-out-event", callback: ((event: Gdk.EventProximity) => boolean)): number
    on(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void): NodeJS.EventEmitter
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (() => void)): number
    on(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "realize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "realize"): void
    connect(sigName: "screen-changed", callback: ((previousScreen?: Gdk.Screen | null) => void)): number
    on(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void): NodeJS.EventEmitter
    emit(sigName: "screen-changed", previousScreen?: Gdk.Screen | null): void
    connect(sigName: "scroll-event", callback: ((event: Gdk.EventScroll) => boolean)): number
    on(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void): NodeJS.EventEmitter
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    connect(sigName: "selection-clear-event", callback: ((event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: ((data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: ((event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-received", callback: ((data: Gtk.SelectionData, time: number) => void)): number
    on(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    connect(sigName: "selection-request-event", callback: ((event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    connect(sigName: "show", callback: (() => void)): number
    on(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: ((helpType: Gtk.WidgetHelpType) => boolean)): number
    on(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void): NodeJS.EventEmitter
    emit(sigName: "show-help", helpType: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: ((allocation: Gtk.Allocation) => void)): number
    on(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void): NodeJS.EventEmitter
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    connect(sigName: "state-changed", callback: ((state: Gtk.StateType) => void)): number
    on(sigName: "state-changed", callback: (state: Gtk.StateType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (state: Gtk.StateType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (state: Gtk.StateType) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", state: Gtk.StateType): void
    connect(sigName: "state-flags-changed", callback: ((flags: Gtk.StateFlags) => void)): number
    on(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "style-set", callback: ((previousStyle?: Gtk.Style | null) => void)): number
    on(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void): NodeJS.EventEmitter
    emit(sigName: "style-set", previousStyle?: Gtk.Style | null): void
    connect(sigName: "style-updated", callback: (() => void)): number
    on(sigName: "style-updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "style-updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "style-updated", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "style-updated"): void
    connect(sigName: "touch-event", callback: ((object: Gdk.Event) => boolean)): number
    on(sigName: "touch-event", callback: (object: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "touch-event", callback: (object: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "touch-event", callback: (object: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "touch-event", object: Gdk.Event): void
    connect(sigName: "unmap", callback: (() => void)): number
    on(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unmap"): void
    connect(sigName: "unmap-event", callback: ((event: Gdk.EventAny) => boolean)): number
    on(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void): NodeJS.EventEmitter
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    connect(sigName: "unrealize", callback: (() => void)): number
    on(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unrealize"): void
    connect(sigName: "visibility-notify-event", callback: ((event: Gdk.EventVisibility) => boolean)): number
    on(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void): NodeJS.EventEmitter
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    connect(sigName: "window-state-event", callback: ((event: Gdk.EventWindowState) => boolean)): number
    on(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void): NodeJS.EventEmitter
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::anchor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::automatic-bounds", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-bounds", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::automatic-bounds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::automatic-bounds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::automatic-bounds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-color-rgb", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-rgb", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-color-rgb", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-color-rgb", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-color-rgb", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bounds-from-origin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bounds-from-origin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bounds-from-origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bounds-from-origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bounds-from-origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bounds-padding", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bounds-padding", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bounds-padding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bounds-padding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bounds-padding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clear-background", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clear-background", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clear-background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clear-background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clear-background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::integer-layout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::integer-layout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::integer-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::integer-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::integer-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::redraw-when-scrolled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::redraw-when-scrolled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::redraw-when-scrolled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::redraw-when-scrolled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::redraw-when-scrolled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resolution-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resolution-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resolution-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resolution-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resolution-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resolution-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resolution-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resolution-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::units", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::units", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::units", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::units", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::units", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x1", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x1", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y1", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y1", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resize-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-paintable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::composite-child", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::double-buffered", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::no-show-all", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::style", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hadjustment", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hscroll-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vadjustment", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vscroll-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Canvas_ConstructProps)
    _init (config?: Canvas_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Canvas
    static createPath(commands: CanvasPathCommand[], cr: cairo.Context): void
    static marshalBOOLEANBOXED(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalBOOLEANDOUBLEDOUBLEBOOLEANOBJECT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalBOOLEANOBJECTBOXED(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDINTINT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDOBJECTOBJECT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static parsePathData(pathData: string): CanvasPathCommand[]
    static $gtype: GObject.Type
}
interface CanvasAccessibleFactory_ConstructProps extends Atk.ObjectFactory_ConstructProps {
}
class CanvasAccessibleFactory {
    /* Fields of Atk-1.0.Atk.ObjectFactory */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.ObjectFactory */
    createAccessible(obj: GObject.Object): Atk.Object
    getAccessibleType(): GObject.Type
    invalidate(): void
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
    constructor (config?: CanvasAccessibleFactory_ConstructProps)
    _init (config?: CanvasAccessibleFactory_ConstructProps): void
    static $gtype: GObject.Type
}
interface CanvasEllipse_ConstructProps extends CanvasItemSimple_ConstructProps {
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasEllipse */
    centerX?: number
    centerY?: number
    height?: number
    radiusX?: number
    radiusY?: number
    width?: number
    x?: number
    y?: number
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasItem */
    canFocus?: boolean
    description?: string
    parent?: CanvasItem
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
class CanvasEllipse {
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasEllipse */
    centerX: number
    centerY: number
    height: number
    radiusX: number
    radiusY: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItem */
    canFocus: boolean
    description: string
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    readonly canvas: Canvas
    readonly parent: CanvasItem
    readonly model: CanvasItemModelSimple
    readonly simpleData: CanvasItemSimpleData
    readonly bounds: CanvasBounds
    readonly needUpdate: number
    readonly needEntireSubtreeUpdate: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    changed(recomputeBounds: boolean): void
    checkInPath(x: number, y: number, cr: cairo.Context, pointerEvents: CanvasPointerEvents): boolean
    checkStyle(): void
    getLineWidth(): number
    getPathBounds(cr: cairo.Context, bounds: CanvasBounds): void
    paintPath(cr: cairo.Context): void
    setModel(model: CanvasItemModel): void
    userBoundsToDevice(cr: cairo.Context, bounds: CanvasBounds): void
    userBoundsToParent(cr: cairo.Context, bounds: CanvasBounds): void
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
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItem */
    addChild(child: CanvasItem, position: number): void
    allocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    ensureUpdated(): void
    findChild(child: CanvasItem): number
    getBounds(): /* bounds */ CanvasBounds
    getCanvas(): Canvas
    getChild(childNum: number): CanvasItem
    getChildProperty(child: CanvasItem, propertyName: string, value: any): void
    getIsStatic(): boolean
    getItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    getModel(): CanvasItemModel
    getNChildren(): number
    getParent(): CanvasItem
    getRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    getRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    getRequestedHeight(cr: cairo.Context, width: number): number
    getSimpleTransform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    getStyle(): CanvasStyle
    getTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    getTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    isContainer(): boolean
    isVisible(): boolean
    lower(below?: CanvasItem | null): void
    moveChild(oldPosition: number, newPosition: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    removeChild(childNum: number): void
    requestUpdate(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setCanvas(canvas: Canvas): void
    setChildProperty(child: CanvasItem, propertyName: string, value: any): void
    setIsStatic(isStatic: boolean): void
    setModel(model: CanvasItemModel): void
    setParent(parent: CanvasItem): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    update(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-2.0.GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: ((stopped: boolean) => void)): number
    on(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (stopped: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "button-press-event", callback: ((targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-press-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: ((targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-release-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "child-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "enter-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "enter-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "focus-in-event", callback: ((targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-in-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: ((targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-out-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: ((targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    on(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void): NodeJS.EventEmitter
    emit(sigName: "grab-broken-event", targetItem: CanvasItem, event: Gdk.EventGrabBroken): void
    connect(sigName: "key-press-event", callback: ((targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-press-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: ((targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-release-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "leave-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "leave-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "motion-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    on(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void): NodeJS.EventEmitter
    emit(sigName: "motion-notify-event", targetItem: CanvasItem, event: Gdk.EventMotion): void
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "scroll-event", callback: ((targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    on(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void): NodeJS.EventEmitter
    emit(sigName: "scroll-event", targetItem: CanvasItem, event: Gdk.EventScroll): void
    connect(sigName: "notify::center-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::center-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::center-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::center-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::radius-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::radius-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::radius-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::radius-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::radius-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::radius-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::radius-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::radius-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasEllipse_ConstructProps)
    _init (config?: CanvasEllipse_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(iclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classInstallChildProperty(iclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    static classListChildProperties(iclass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
interface CanvasEllipseModel_ConstructProps extends CanvasItemModelSimple_ConstructProps {
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasEllipseModel */
    centerX?: number
    centerY?: number
    height?: number
    radiusX?: number
    radiusY?: number
    width?: number
    x?: number
    y?: number
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    canFocus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
class CanvasEllipseModel {
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasEllipseModel */
    centerX: number
    centerY: number
    height: number
    radiusX: number
    radiusY: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    canFocus: boolean
    description: string
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasItemModelSimple */
    readonly parentObject: GObject.Object
    readonly parent: CanvasItemModel
    readonly simpleData: CanvasItemSimpleData
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
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    addChild(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    findChild(child: CanvasItemModel): number
    getChild(childNum: number): CanvasItemModel
    getChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    getNChildren(): number
    getParent(): CanvasItemModel
    getSimpleTransform(x: number, y: number, scale: number, rotation: number): boolean
    getStyle(): CanvasStyle
    getTransform(transform: cairo.Matrix): boolean
    isContainer(): boolean
    lower(below?: CanvasItemModel | null): void
    moveChild(oldPosition: number, newPosition: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    removeChild(childNum: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    setParent(parent: CanvasItemModel): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: ((stopped: boolean) => void)): number
    on(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (stopped: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "changed", callback: ((recomputeBounds: boolean) => void)): number
    on(sigName: "changed", callback: (recomputeBounds: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (recomputeBounds: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (recomputeBounds: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "changed", recomputeBounds: boolean): void
    connect(sigName: "child-added", callback: ((childNum: number) => void)): number
    on(sigName: "child-added", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (childNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", childNum: number): void
    connect(sigName: "child-moved", callback: ((oldChildNum: number, newChildNum: number) => void)): number
    on(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-moved", oldChildNum: number, newChildNum: number): void
    connect(sigName: "child-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "child-removed", callback: ((childNum: number) => void)): number
    on(sigName: "child-removed", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (childNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", childNum: number): void
    connect(sigName: "notify::center-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::center-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::center-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::center-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::radius-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::radius-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::radius-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::radius-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::radius-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::radius-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::radius-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::radius-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasEllipseModel_ConstructProps)
    _init (config?: CanvasEllipseModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(mclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classInstallChildProperty(mclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    static classListChildProperties(mclass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
interface CanvasGrid_ConstructProps extends CanvasItemSimple_ConstructProps {
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasGrid */
    borderColor?: string
    borderColorGdkRgba?: Gdk.RGBA
    borderColorRgba?: number
    borderPattern?: any
    borderPixbuf?: GdkPixbuf.Pixbuf
    borderWidth?: number
    height?: number
    horzGridLineColor?: string
    horzGridLineColorGdkRgba?: Gdk.RGBA
    horzGridLineColorRgba?: number
    horzGridLinePattern?: any
    horzGridLinePixbuf?: GdkPixbuf.Pixbuf
    horzGridLineWidth?: number
    showHorzGridLines?: boolean
    showVertGridLines?: boolean
    vertGridLineColor?: string
    vertGridLineColorGdkRgba?: Gdk.RGBA
    vertGridLineColorRgba?: number
    vertGridLinePattern?: any
    vertGridLinePixbuf?: GdkPixbuf.Pixbuf
    vertGridLineWidth?: number
    vertGridLinesOnTop?: boolean
    width?: number
    x?: number
    xOffset?: number
    xStep?: number
    y?: number
    yOffset?: number
    yStep?: number
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasItem */
    canFocus?: boolean
    description?: string
    parent?: CanvasItem
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
class CanvasGrid {
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasGrid */
    borderColor: string
    borderColorGdkRgba: Gdk.RGBA
    borderColorRgba: number
    borderPattern: any
    borderPixbuf: GdkPixbuf.Pixbuf
    borderWidth: number
    height: number
    horzGridLineColor: string
    horzGridLineColorGdkRgba: Gdk.RGBA
    horzGridLineColorRgba: number
    horzGridLinePattern: any
    horzGridLinePixbuf: GdkPixbuf.Pixbuf
    horzGridLineWidth: number
    showHorzGridLines: boolean
    showVertGridLines: boolean
    vertGridLineColor: string
    vertGridLineColorGdkRgba: Gdk.RGBA
    vertGridLineColorRgba: number
    vertGridLinePattern: any
    vertGridLinePixbuf: GdkPixbuf.Pixbuf
    vertGridLineWidth: number
    vertGridLinesOnTop: boolean
    width: number
    x: number
    xOffset: number
    xStep: number
    y: number
    yOffset: number
    yStep: number
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItem */
    canFocus: boolean
    description: string
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    readonly canvas: Canvas
    readonly parent: CanvasItem
    readonly model: CanvasItemModelSimple
    readonly simpleData: CanvasItemSimpleData
    readonly bounds: CanvasBounds
    readonly needUpdate: number
    readonly needEntireSubtreeUpdate: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    changed(recomputeBounds: boolean): void
    checkInPath(x: number, y: number, cr: cairo.Context, pointerEvents: CanvasPointerEvents): boolean
    checkStyle(): void
    getLineWidth(): number
    getPathBounds(cr: cairo.Context, bounds: CanvasBounds): void
    paintPath(cr: cairo.Context): void
    setModel(model: CanvasItemModel): void
    userBoundsToDevice(cr: cairo.Context, bounds: CanvasBounds): void
    userBoundsToParent(cr: cairo.Context, bounds: CanvasBounds): void
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
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItem */
    addChild(child: CanvasItem, position: number): void
    allocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    ensureUpdated(): void
    findChild(child: CanvasItem): number
    getBounds(): /* bounds */ CanvasBounds
    getCanvas(): Canvas
    getChild(childNum: number): CanvasItem
    getChildProperty(child: CanvasItem, propertyName: string, value: any): void
    getIsStatic(): boolean
    getItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    getModel(): CanvasItemModel
    getNChildren(): number
    getParent(): CanvasItem
    getRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    getRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    getRequestedHeight(cr: cairo.Context, width: number): number
    getSimpleTransform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    getStyle(): CanvasStyle
    getTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    getTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    isContainer(): boolean
    isVisible(): boolean
    lower(below?: CanvasItem | null): void
    moveChild(oldPosition: number, newPosition: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    removeChild(childNum: number): void
    requestUpdate(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setCanvas(canvas: Canvas): void
    setChildProperty(child: CanvasItem, propertyName: string, value: any): void
    setIsStatic(isStatic: boolean): void
    setModel(model: CanvasItemModel): void
    setParent(parent: CanvasItem): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    update(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-2.0.GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: ((stopped: boolean) => void)): number
    on(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (stopped: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "button-press-event", callback: ((targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-press-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: ((targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-release-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "child-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "enter-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "enter-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "focus-in-event", callback: ((targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-in-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: ((targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-out-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: ((targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    on(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void): NodeJS.EventEmitter
    emit(sigName: "grab-broken-event", targetItem: CanvasItem, event: Gdk.EventGrabBroken): void
    connect(sigName: "key-press-event", callback: ((targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-press-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: ((targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-release-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "leave-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "leave-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "motion-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    on(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void): NodeJS.EventEmitter
    emit(sigName: "motion-notify-event", targetItem: CanvasItem, event: Gdk.EventMotion): void
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "scroll-event", callback: ((targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    on(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void): NodeJS.EventEmitter
    emit(sigName: "scroll-event", targetItem: CanvasItem, event: Gdk.EventScroll): void
    connect(sigName: "notify::border-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::horz-grid-line-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::horz-grid-line-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::horz-grid-line-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::horz-grid-line-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::horz-grid-line-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::horz-grid-line-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::horz-grid-line-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::horz-grid-line-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::horz-grid-line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-horz-grid-lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-horz-grid-lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-horz-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-horz-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-horz-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-vert-grid-lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-vert-grid-lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-vert-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-vert-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-vert-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-line-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-line-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-line-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-line-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-line-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-line-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-line-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-line-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-lines-on-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-lines-on-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-lines-on-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-lines-on-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-lines-on-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::x-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-step", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-step", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-step", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-step", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasGrid_ConstructProps)
    _init (config?: CanvasGrid_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(iclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classInstallChildProperty(iclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    static classListChildProperties(iclass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
interface CanvasGridModel_ConstructProps extends CanvasItemModelSimple_ConstructProps {
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasGridModel */
    borderColor?: string
    borderColorGdkRgba?: Gdk.RGBA
    borderColorRgba?: number
    borderPattern?: any
    borderPixbuf?: GdkPixbuf.Pixbuf
    borderWidth?: number
    height?: number
    horzGridLineColor?: string
    horzGridLineColorGdkRgba?: Gdk.RGBA
    horzGridLineColorRgba?: number
    horzGridLinePattern?: any
    horzGridLinePixbuf?: GdkPixbuf.Pixbuf
    horzGridLineWidth?: number
    showHorzGridLines?: boolean
    showVertGridLines?: boolean
    vertGridLineColor?: string
    vertGridLineColorGdkRgba?: Gdk.RGBA
    vertGridLineColorRgba?: number
    vertGridLinePattern?: any
    vertGridLinePixbuf?: GdkPixbuf.Pixbuf
    vertGridLineWidth?: number
    vertGridLinesOnTop?: boolean
    width?: number
    x?: number
    xOffset?: number
    xStep?: number
    y?: number
    yOffset?: number
    yStep?: number
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    canFocus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
class CanvasGridModel {
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasGridModel */
    borderColor: string
    borderColorGdkRgba: Gdk.RGBA
    borderColorRgba: number
    borderPattern: any
    borderPixbuf: GdkPixbuf.Pixbuf
    borderWidth: number
    height: number
    horzGridLineColor: string
    horzGridLineColorGdkRgba: Gdk.RGBA
    horzGridLineColorRgba: number
    horzGridLinePattern: any
    horzGridLinePixbuf: GdkPixbuf.Pixbuf
    horzGridLineWidth: number
    showHorzGridLines: boolean
    showVertGridLines: boolean
    vertGridLineColor: string
    vertGridLineColorGdkRgba: Gdk.RGBA
    vertGridLineColorRgba: number
    vertGridLinePattern: any
    vertGridLinePixbuf: GdkPixbuf.Pixbuf
    vertGridLineWidth: number
    vertGridLinesOnTop: boolean
    width: number
    x: number
    xOffset: number
    xStep: number
    y: number
    yOffset: number
    yStep: number
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    canFocus: boolean
    description: string
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasItemModelSimple */
    readonly parentObject: GObject.Object
    readonly parent: CanvasItemModel
    readonly simpleData: CanvasItemSimpleData
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
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    addChild(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    findChild(child: CanvasItemModel): number
    getChild(childNum: number): CanvasItemModel
    getChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    getNChildren(): number
    getParent(): CanvasItemModel
    getSimpleTransform(x: number, y: number, scale: number, rotation: number): boolean
    getStyle(): CanvasStyle
    getTransform(transform: cairo.Matrix): boolean
    isContainer(): boolean
    lower(below?: CanvasItemModel | null): void
    moveChild(oldPosition: number, newPosition: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    removeChild(childNum: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    setParent(parent: CanvasItemModel): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: ((stopped: boolean) => void)): number
    on(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (stopped: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "changed", callback: ((recomputeBounds: boolean) => void)): number
    on(sigName: "changed", callback: (recomputeBounds: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (recomputeBounds: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (recomputeBounds: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "changed", recomputeBounds: boolean): void
    connect(sigName: "child-added", callback: ((childNum: number) => void)): number
    on(sigName: "child-added", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (childNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", childNum: number): void
    connect(sigName: "child-moved", callback: ((oldChildNum: number, newChildNum: number) => void)): number
    on(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-moved", oldChildNum: number, newChildNum: number): void
    connect(sigName: "child-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "child-removed", callback: ((childNum: number) => void)): number
    on(sigName: "child-removed", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (childNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", childNum: number): void
    connect(sigName: "notify::border-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::horz-grid-line-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::horz-grid-line-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::horz-grid-line-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::horz-grid-line-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::horz-grid-line-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::horz-grid-line-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::horz-grid-line-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::horz-grid-line-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::horz-grid-line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-horz-grid-lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-horz-grid-lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-horz-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-horz-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-horz-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-vert-grid-lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-vert-grid-lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-vert-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-vert-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-vert-grid-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-line-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-line-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-line-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-line-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-line-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-line-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-line-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-line-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-lines-on-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-lines-on-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-lines-on-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-lines-on-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-lines-on-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::x-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-step", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-step", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-step", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-step", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-step", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasGridModel_ConstructProps)
    _init (config?: CanvasGridModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(mclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classInstallChildProperty(mclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    static classListChildProperties(mclass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
interface CanvasGroup_ConstructProps extends CanvasItemSimple_ConstructProps {
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasGroup */
    height?: number
    width?: number
    x?: number
    y?: number
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasItem */
    canFocus?: boolean
    description?: string
    parent?: CanvasItem
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
class CanvasGroup {
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasGroup */
    height: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItem */
    canFocus: boolean
    description: string
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    readonly canvas: Canvas
    readonly parent: CanvasItem
    readonly model: CanvasItemModelSimple
    readonly simpleData: CanvasItemSimpleData
    readonly bounds: CanvasBounds
    readonly needUpdate: number
    readonly needEntireSubtreeUpdate: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    changed(recomputeBounds: boolean): void
    checkInPath(x: number, y: number, cr: cairo.Context, pointerEvents: CanvasPointerEvents): boolean
    checkStyle(): void
    getLineWidth(): number
    getPathBounds(cr: cairo.Context, bounds: CanvasBounds): void
    paintPath(cr: cairo.Context): void
    setModel(model: CanvasItemModel): void
    userBoundsToDevice(cr: cairo.Context, bounds: CanvasBounds): void
    userBoundsToParent(cr: cairo.Context, bounds: CanvasBounds): void
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
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItem */
    addChild(child: CanvasItem, position: number): void
    allocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    ensureUpdated(): void
    findChild(child: CanvasItem): number
    getBounds(): /* bounds */ CanvasBounds
    getCanvas(): Canvas
    getChild(childNum: number): CanvasItem
    getChildProperty(child: CanvasItem, propertyName: string, value: any): void
    getIsStatic(): boolean
    getItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    getModel(): CanvasItemModel
    getNChildren(): number
    getParent(): CanvasItem
    getRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    getRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    getRequestedHeight(cr: cairo.Context, width: number): number
    getSimpleTransform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    getStyle(): CanvasStyle
    getTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    getTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    isContainer(): boolean
    isVisible(): boolean
    lower(below?: CanvasItem | null): void
    moveChild(oldPosition: number, newPosition: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    removeChild(childNum: number): void
    requestUpdate(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setCanvas(canvas: Canvas): void
    setChildProperty(child: CanvasItem, propertyName: string, value: any): void
    setIsStatic(isStatic: boolean): void
    setModel(model: CanvasItemModel): void
    setParent(parent: CanvasItem): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    update(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-2.0.GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: ((stopped: boolean) => void)): number
    on(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (stopped: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "button-press-event", callback: ((targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-press-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: ((targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-release-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "child-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "enter-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "enter-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "focus-in-event", callback: ((targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-in-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: ((targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-out-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: ((targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    on(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void): NodeJS.EventEmitter
    emit(sigName: "grab-broken-event", targetItem: CanvasItem, event: Gdk.EventGrabBroken): void
    connect(sigName: "key-press-event", callback: ((targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-press-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: ((targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-release-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "leave-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "leave-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "motion-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    on(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void): NodeJS.EventEmitter
    emit(sigName: "motion-notify-event", targetItem: CanvasItem, event: Gdk.EventMotion): void
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "scroll-event", callback: ((targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    on(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void): NodeJS.EventEmitter
    emit(sigName: "scroll-event", targetItem: CanvasItem, event: Gdk.EventScroll): void
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasGroup_ConstructProps)
    _init (config?: CanvasGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(iclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classInstallChildProperty(iclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    static classListChildProperties(iclass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
interface CanvasGroupModel_ConstructProps extends CanvasItemModelSimple_ConstructProps {
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasGroupModel */
    height?: number
    width?: number
    x?: number
    y?: number
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    canFocus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
class CanvasGroupModel {
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasGroupModel */
    height: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    canFocus: boolean
    description: string
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasItemModelSimple */
    readonly parentObject: GObject.Object
    readonly parent: CanvasItemModel
    readonly simpleData: CanvasItemSimpleData
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
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    addChild(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    findChild(child: CanvasItemModel): number
    getChild(childNum: number): CanvasItemModel
    getChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    getNChildren(): number
    getParent(): CanvasItemModel
    getSimpleTransform(x: number, y: number, scale: number, rotation: number): boolean
    getStyle(): CanvasStyle
    getTransform(transform: cairo.Matrix): boolean
    isContainer(): boolean
    lower(below?: CanvasItemModel | null): void
    moveChild(oldPosition: number, newPosition: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    removeChild(childNum: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    setParent(parent: CanvasItemModel): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: ((stopped: boolean) => void)): number
    on(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (stopped: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "changed", callback: ((recomputeBounds: boolean) => void)): number
    on(sigName: "changed", callback: (recomputeBounds: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (recomputeBounds: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (recomputeBounds: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "changed", recomputeBounds: boolean): void
    connect(sigName: "child-added", callback: ((childNum: number) => void)): number
    on(sigName: "child-added", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (childNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", childNum: number): void
    connect(sigName: "child-moved", callback: ((oldChildNum: number, newChildNum: number) => void)): number
    on(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-moved", oldChildNum: number, newChildNum: number): void
    connect(sigName: "child-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "child-removed", callback: ((childNum: number) => void)): number
    on(sigName: "child-removed", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (childNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", childNum: number): void
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasGroupModel_ConstructProps)
    _init (config?: CanvasGroupModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(mclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classInstallChildProperty(mclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    static classListChildProperties(mclass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
interface CanvasImage_ConstructProps extends CanvasItemSimple_ConstructProps {
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasImage */
    alpha?: number
    height?: number
    pattern?: any
    pixbuf?: GdkPixbuf.Pixbuf
    scaleToFit?: boolean
    width?: number
    x?: number
    y?: number
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasItem */
    canFocus?: boolean
    description?: string
    parent?: CanvasItem
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
class CanvasImage {
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasImage */
    alpha: number
    height: number
    pattern: any
    pixbuf: GdkPixbuf.Pixbuf
    scaleToFit: boolean
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItem */
    canFocus: boolean
    description: string
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    readonly canvas: Canvas
    readonly parent: CanvasItem
    readonly model: CanvasItemModelSimple
    readonly simpleData: CanvasItemSimpleData
    readonly bounds: CanvasBounds
    readonly needUpdate: number
    readonly needEntireSubtreeUpdate: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    changed(recomputeBounds: boolean): void
    checkInPath(x: number, y: number, cr: cairo.Context, pointerEvents: CanvasPointerEvents): boolean
    checkStyle(): void
    getLineWidth(): number
    getPathBounds(cr: cairo.Context, bounds: CanvasBounds): void
    paintPath(cr: cairo.Context): void
    setModel(model: CanvasItemModel): void
    userBoundsToDevice(cr: cairo.Context, bounds: CanvasBounds): void
    userBoundsToParent(cr: cairo.Context, bounds: CanvasBounds): void
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
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItem */
    addChild(child: CanvasItem, position: number): void
    allocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    ensureUpdated(): void
    findChild(child: CanvasItem): number
    getBounds(): /* bounds */ CanvasBounds
    getCanvas(): Canvas
    getChild(childNum: number): CanvasItem
    getChildProperty(child: CanvasItem, propertyName: string, value: any): void
    getIsStatic(): boolean
    getItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    getModel(): CanvasItemModel
    getNChildren(): number
    getParent(): CanvasItem
    getRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    getRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    getRequestedHeight(cr: cairo.Context, width: number): number
    getSimpleTransform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    getStyle(): CanvasStyle
    getTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    getTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    isContainer(): boolean
    isVisible(): boolean
    lower(below?: CanvasItem | null): void
    moveChild(oldPosition: number, newPosition: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    removeChild(childNum: number): void
    requestUpdate(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setCanvas(canvas: Canvas): void
    setChildProperty(child: CanvasItem, propertyName: string, value: any): void
    setIsStatic(isStatic: boolean): void
    setModel(model: CanvasItemModel): void
    setParent(parent: CanvasItem): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    update(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-2.0.GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: ((stopped: boolean) => void)): number
    on(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (stopped: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "button-press-event", callback: ((targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-press-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: ((targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-release-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "child-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "enter-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "enter-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "focus-in-event", callback: ((targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-in-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: ((targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-out-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: ((targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    on(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void): NodeJS.EventEmitter
    emit(sigName: "grab-broken-event", targetItem: CanvasItem, event: Gdk.EventGrabBroken): void
    connect(sigName: "key-press-event", callback: ((targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-press-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: ((targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-release-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "leave-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "leave-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "motion-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    on(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void): NodeJS.EventEmitter
    emit(sigName: "motion-notify-event", targetItem: CanvasItem, event: Gdk.EventMotion): void
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "scroll-event", callback: ((targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    on(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void): NodeJS.EventEmitter
    emit(sigName: "scroll-event", targetItem: CanvasItem, event: Gdk.EventScroll): void
    connect(sigName: "notify::alpha", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alpha", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-to-fit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-to-fit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-to-fit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-to-fit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-to-fit", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasImage_ConstructProps)
    _init (config?: CanvasImage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(iclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classInstallChildProperty(iclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    static classListChildProperties(iclass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
interface CanvasImageModel_ConstructProps extends CanvasItemModelSimple_ConstructProps {
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasImageModel */
    alpha?: number
    height?: number
    pattern?: any
    pixbuf?: GdkPixbuf.Pixbuf
    scaleToFit?: boolean
    width?: number
    x?: number
    y?: number
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    canFocus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
class CanvasImageModel {
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasImageModel */
    alpha: number
    height: number
    pattern: any
    pixbuf: GdkPixbuf.Pixbuf
    scaleToFit: boolean
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    canFocus: boolean
    description: string
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasItemModelSimple */
    readonly parentObject: GObject.Object
    readonly parent: CanvasItemModel
    readonly simpleData: CanvasItemSimpleData
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
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    addChild(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    findChild(child: CanvasItemModel): number
    getChild(childNum: number): CanvasItemModel
    getChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    getNChildren(): number
    getParent(): CanvasItemModel
    getSimpleTransform(x: number, y: number, scale: number, rotation: number): boolean
    getStyle(): CanvasStyle
    getTransform(transform: cairo.Matrix): boolean
    isContainer(): boolean
    lower(below?: CanvasItemModel | null): void
    moveChild(oldPosition: number, newPosition: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    removeChild(childNum: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    setParent(parent: CanvasItemModel): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: ((stopped: boolean) => void)): number
    on(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (stopped: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "changed", callback: ((recomputeBounds: boolean) => void)): number
    on(sigName: "changed", callback: (recomputeBounds: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (recomputeBounds: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (recomputeBounds: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "changed", recomputeBounds: boolean): void
    connect(sigName: "child-added", callback: ((childNum: number) => void)): number
    on(sigName: "child-added", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (childNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", childNum: number): void
    connect(sigName: "child-moved", callback: ((oldChildNum: number, newChildNum: number) => void)): number
    on(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-moved", oldChildNum: number, newChildNum: number): void
    connect(sigName: "child-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "child-removed", callback: ((childNum: number) => void)): number
    on(sigName: "child-removed", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (childNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", childNum: number): void
    connect(sigName: "notify::alpha", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alpha", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-to-fit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-to-fit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-to-fit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-to-fit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-to-fit", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasImageModel_ConstructProps)
    _init (config?: CanvasImageModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(mclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classInstallChildProperty(mclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    static classListChildProperties(mclass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
interface CanvasItemAccessibleFactory_ConstructProps extends Atk.ObjectFactory_ConstructProps {
}
class CanvasItemAccessibleFactory {
    /* Fields of Atk-1.0.Atk.ObjectFactory */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.ObjectFactory */
    createAccessible(obj: GObject.Object): Atk.Object
    getAccessibleType(): GObject.Type
    invalidate(): void
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
    constructor (config?: CanvasItemAccessibleFactory_ConstructProps)
    _init (config?: CanvasItemAccessibleFactory_ConstructProps): void
    static $gtype: GObject.Type
}
interface CanvasItemModelSimple_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasItemModelSimple */
    antialias?: CairoAntialias
    clipFillRule?: CairoFillRule
    clipPath?: string
    fillColor?: string
    fillColorGdkRgba?: Gdk.RGBA
    fillColorRgba?: number
    fillPattern?: any
    fillPixbuf?: GdkPixbuf.Pixbuf
    fillRule?: CairoFillRule
    font?: string
    fontDesc?: Pango.FontDescription
    hintMetrics?: CairoHintMetrics
    lineCap?: CairoLineCap
    lineDash?: CanvasLineDash
    lineJoin?: CairoLineJoin
    lineJoinMiterLimit?: number
    lineWidth?: number
    operator?: CairoOperator
    strokeColor?: string
    strokeColorGdkRgba?: Gdk.RGBA
    strokeColorRgba?: number
    strokePattern?: any
    strokePixbuf?: GdkPixbuf.Pixbuf
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    canFocus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
class CanvasItemModelSimple {
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    canFocus: boolean
    description: string
    parent: CanvasItemModel
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
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
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    addChild(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    findChild(child: CanvasItemModel): number
    getChild(childNum: number): CanvasItemModel
    getChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    getNChildren(): number
    getParent(): CanvasItemModel
    getSimpleTransform(x: number, y: number, scale: number, rotation: number): boolean
    getStyle(): CanvasStyle
    getTransform(transform: cairo.Matrix): boolean
    isContainer(): boolean
    lower(below?: CanvasItemModel | null): void
    moveChild(oldPosition: number, newPosition: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    removeChild(childNum: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    setParent(parent: CanvasItemModel): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: ((stopped: boolean) => void)): number
    on(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (stopped: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "changed", callback: ((recomputeBounds: boolean) => void)): number
    on(sigName: "changed", callback: (recomputeBounds: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (recomputeBounds: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (recomputeBounds: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "changed", recomputeBounds: boolean): void
    connect(sigName: "child-added", callback: ((childNum: number) => void)): number
    on(sigName: "child-added", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (childNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", childNum: number): void
    connect(sigName: "child-moved", callback: ((oldChildNum: number, newChildNum: number) => void)): number
    on(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-moved", oldChildNum: number, newChildNum: number): void
    connect(sigName: "child-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "child-removed", callback: ((childNum: number) => void)): number
    on(sigName: "child-removed", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (childNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", childNum: number): void
    connect(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasItemModelSimple_ConstructProps)
    _init (config?: CanvasItemModelSimple_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(mclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classInstallChildProperty(mclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    static classListChildProperties(mclass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
interface CanvasItemSimple_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    antialias?: CairoAntialias
    clipFillRule?: CairoFillRule
    clipPath?: string
    fillColor?: string
    fillColorGdkRgba?: Gdk.RGBA
    fillColorRgba?: number
    fillPattern?: any
    fillPixbuf?: GdkPixbuf.Pixbuf
    fillRule?: CairoFillRule
    font?: string
    fontDesc?: Pango.FontDescription
    hintMetrics?: CairoHintMetrics
    lineCap?: CairoLineCap
    lineDash?: CanvasLineDash
    lineJoin?: CairoLineJoin
    lineJoinMiterLimit?: number
    lineWidth?: number
    operator?: CairoOperator
    strokeColor?: string
    strokeColorGdkRgba?: Gdk.RGBA
    strokeColorRgba?: number
    strokePattern?: any
    strokePixbuf?: GdkPixbuf.Pixbuf
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasItem */
    canFocus?: boolean
    description?: string
    parent?: CanvasItem
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
class CanvasItemSimple {
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItem */
    canFocus: boolean
    description: string
    parent: CanvasItem
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    changed(recomputeBounds: boolean): void
    checkInPath(x: number, y: number, cr: cairo.Context, pointerEvents: CanvasPointerEvents): boolean
    checkStyle(): void
    getLineWidth(): number
    getPathBounds(cr: cairo.Context, bounds: CanvasBounds): void
    paintPath(cr: cairo.Context): void
    setModel(model: CanvasItemModel): void
    userBoundsToDevice(cr: cairo.Context, bounds: CanvasBounds): void
    userBoundsToParent(cr: cairo.Context, bounds: CanvasBounds): void
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
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItem */
    addChild(child: CanvasItem, position: number): void
    allocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    ensureUpdated(): void
    findChild(child: CanvasItem): number
    getBounds(): /* bounds */ CanvasBounds
    getCanvas(): Canvas
    getChild(childNum: number): CanvasItem
    getChildProperty(child: CanvasItem, propertyName: string, value: any): void
    getIsStatic(): boolean
    getItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    getModel(): CanvasItemModel
    getNChildren(): number
    getParent(): CanvasItem
    getRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    getRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    getRequestedHeight(cr: cairo.Context, width: number): number
    getSimpleTransform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    getStyle(): CanvasStyle
    getTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    getTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    isContainer(): boolean
    isVisible(): boolean
    lower(below?: CanvasItem | null): void
    moveChild(oldPosition: number, newPosition: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    removeChild(childNum: number): void
    requestUpdate(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setCanvas(canvas: Canvas): void
    setChildProperty(child: CanvasItem, propertyName: string, value: any): void
    setIsStatic(isStatic: boolean): void
    setModel(model: CanvasItemModel): void
    setParent(parent: CanvasItem): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    update(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-2.0.GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: ((stopped: boolean) => void)): number
    on(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (stopped: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "button-press-event", callback: ((targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-press-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: ((targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-release-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "child-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "enter-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "enter-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "focus-in-event", callback: ((targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-in-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: ((targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-out-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: ((targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    on(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void): NodeJS.EventEmitter
    emit(sigName: "grab-broken-event", targetItem: CanvasItem, event: Gdk.EventGrabBroken): void
    connect(sigName: "key-press-event", callback: ((targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-press-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: ((targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-release-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "leave-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "leave-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "motion-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    on(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void): NodeJS.EventEmitter
    emit(sigName: "motion-notify-event", targetItem: CanvasItem, event: Gdk.EventMotion): void
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "scroll-event", callback: ((targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    on(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void): NodeJS.EventEmitter
    emit(sigName: "scroll-event", targetItem: CanvasItem, event: Gdk.EventScroll): void
    connect(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasItemSimple_ConstructProps)
    _init (config?: CanvasItemSimple_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(iclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classInstallChildProperty(iclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    static classListChildProperties(iclass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
interface CanvasPath_ConstructProps extends CanvasItemSimple_ConstructProps {
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasPath */
    data?: string
    height?: number
    width?: number
    x?: number
    y?: number
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasItem */
    canFocus?: boolean
    description?: string
    parent?: CanvasItem
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
class CanvasPath {
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasPath */
    data: string
    height: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItem */
    canFocus: boolean
    description: string
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    readonly canvas: Canvas
    readonly parent: CanvasItem
    readonly model: CanvasItemModelSimple
    readonly simpleData: CanvasItemSimpleData
    readonly bounds: CanvasBounds
    readonly needUpdate: number
    readonly needEntireSubtreeUpdate: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    changed(recomputeBounds: boolean): void
    checkInPath(x: number, y: number, cr: cairo.Context, pointerEvents: CanvasPointerEvents): boolean
    checkStyle(): void
    getLineWidth(): number
    getPathBounds(cr: cairo.Context, bounds: CanvasBounds): void
    paintPath(cr: cairo.Context): void
    setModel(model: CanvasItemModel): void
    userBoundsToDevice(cr: cairo.Context, bounds: CanvasBounds): void
    userBoundsToParent(cr: cairo.Context, bounds: CanvasBounds): void
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
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItem */
    addChild(child: CanvasItem, position: number): void
    allocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    ensureUpdated(): void
    findChild(child: CanvasItem): number
    getBounds(): /* bounds */ CanvasBounds
    getCanvas(): Canvas
    getChild(childNum: number): CanvasItem
    getChildProperty(child: CanvasItem, propertyName: string, value: any): void
    getIsStatic(): boolean
    getItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    getModel(): CanvasItemModel
    getNChildren(): number
    getParent(): CanvasItem
    getRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    getRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    getRequestedHeight(cr: cairo.Context, width: number): number
    getSimpleTransform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    getStyle(): CanvasStyle
    getTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    getTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    isContainer(): boolean
    isVisible(): boolean
    lower(below?: CanvasItem | null): void
    moveChild(oldPosition: number, newPosition: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    removeChild(childNum: number): void
    requestUpdate(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setCanvas(canvas: Canvas): void
    setChildProperty(child: CanvasItem, propertyName: string, value: any): void
    setIsStatic(isStatic: boolean): void
    setModel(model: CanvasItemModel): void
    setParent(parent: CanvasItem): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    update(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-2.0.GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: ((stopped: boolean) => void)): number
    on(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (stopped: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "button-press-event", callback: ((targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-press-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: ((targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-release-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "child-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "enter-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "enter-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "focus-in-event", callback: ((targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-in-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: ((targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-out-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: ((targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    on(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void): NodeJS.EventEmitter
    emit(sigName: "grab-broken-event", targetItem: CanvasItem, event: Gdk.EventGrabBroken): void
    connect(sigName: "key-press-event", callback: ((targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-press-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: ((targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-release-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "leave-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "leave-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "motion-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    on(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void): NodeJS.EventEmitter
    emit(sigName: "motion-notify-event", targetItem: CanvasItem, event: Gdk.EventMotion): void
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "scroll-event", callback: ((targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    on(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void): NodeJS.EventEmitter
    emit(sigName: "scroll-event", targetItem: CanvasItem, event: Gdk.EventScroll): void
    connect(sigName: "notify::data", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasPath_ConstructProps)
    _init (config?: CanvasPath_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(iclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classInstallChildProperty(iclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    static classListChildProperties(iclass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
interface CanvasPathModel_ConstructProps extends CanvasItemModelSimple_ConstructProps {
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasPathModel */
    data?: string
    height?: number
    width?: number
    x?: number
    y?: number
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    canFocus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
class CanvasPathModel {
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasPathModel */
    data: string
    height: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    canFocus: boolean
    description: string
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasItemModelSimple */
    readonly parentObject: GObject.Object
    readonly parent: CanvasItemModel
    readonly simpleData: CanvasItemSimpleData
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
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    addChild(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    findChild(child: CanvasItemModel): number
    getChild(childNum: number): CanvasItemModel
    getChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    getNChildren(): number
    getParent(): CanvasItemModel
    getSimpleTransform(x: number, y: number, scale: number, rotation: number): boolean
    getStyle(): CanvasStyle
    getTransform(transform: cairo.Matrix): boolean
    isContainer(): boolean
    lower(below?: CanvasItemModel | null): void
    moveChild(oldPosition: number, newPosition: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    removeChild(childNum: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    setParent(parent: CanvasItemModel): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: ((stopped: boolean) => void)): number
    on(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (stopped: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "changed", callback: ((recomputeBounds: boolean) => void)): number
    on(sigName: "changed", callback: (recomputeBounds: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (recomputeBounds: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (recomputeBounds: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "changed", recomputeBounds: boolean): void
    connect(sigName: "child-added", callback: ((childNum: number) => void)): number
    on(sigName: "child-added", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (childNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", childNum: number): void
    connect(sigName: "child-moved", callback: ((oldChildNum: number, newChildNum: number) => void)): number
    on(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-moved", oldChildNum: number, newChildNum: number): void
    connect(sigName: "child-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "child-removed", callback: ((childNum: number) => void)): number
    on(sigName: "child-removed", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (childNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", childNum: number): void
    connect(sigName: "notify::data", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasPathModel_ConstructProps)
    _init (config?: CanvasPathModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(mclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classInstallChildProperty(mclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    static classListChildProperties(mclass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
interface CanvasPolyline_ConstructProps extends CanvasItemSimple_ConstructProps {
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasPolyline */
    arrowLength?: number
    arrowTipLength?: number
    arrowWidth?: number
    closePath?: boolean
    endArrow?: boolean
    height?: number
    points?: CanvasPoints
    startArrow?: boolean
    width?: number
    x?: number
    y?: number
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasItem */
    canFocus?: boolean
    description?: string
    parent?: CanvasItem
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
class CanvasPolyline {
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasPolyline */
    arrowLength: number
    arrowTipLength: number
    arrowWidth: number
    closePath: boolean
    endArrow: boolean
    height: number
    points: CanvasPoints
    startArrow: boolean
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItem */
    canFocus: boolean
    description: string
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    readonly canvas: Canvas
    readonly parent: CanvasItem
    readonly model: CanvasItemModelSimple
    readonly simpleData: CanvasItemSimpleData
    readonly bounds: CanvasBounds
    readonly needUpdate: number
    readonly needEntireSubtreeUpdate: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    changed(recomputeBounds: boolean): void
    checkInPath(x: number, y: number, cr: cairo.Context, pointerEvents: CanvasPointerEvents): boolean
    checkStyle(): void
    getLineWidth(): number
    getPathBounds(cr: cairo.Context, bounds: CanvasBounds): void
    paintPath(cr: cairo.Context): void
    setModel(model: CanvasItemModel): void
    userBoundsToDevice(cr: cairo.Context, bounds: CanvasBounds): void
    userBoundsToParent(cr: cairo.Context, bounds: CanvasBounds): void
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
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItem */
    addChild(child: CanvasItem, position: number): void
    allocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    ensureUpdated(): void
    findChild(child: CanvasItem): number
    getBounds(): /* bounds */ CanvasBounds
    getCanvas(): Canvas
    getChild(childNum: number): CanvasItem
    getChildProperty(child: CanvasItem, propertyName: string, value: any): void
    getIsStatic(): boolean
    getItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    getModel(): CanvasItemModel
    getNChildren(): number
    getParent(): CanvasItem
    getRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    getRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    getRequestedHeight(cr: cairo.Context, width: number): number
    getSimpleTransform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    getStyle(): CanvasStyle
    getTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    getTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    isContainer(): boolean
    isVisible(): boolean
    lower(below?: CanvasItem | null): void
    moveChild(oldPosition: number, newPosition: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    removeChild(childNum: number): void
    requestUpdate(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setCanvas(canvas: Canvas): void
    setChildProperty(child: CanvasItem, propertyName: string, value: any): void
    setIsStatic(isStatic: boolean): void
    setModel(model: CanvasItemModel): void
    setParent(parent: CanvasItem): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    update(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-2.0.GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: ((stopped: boolean) => void)): number
    on(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (stopped: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "button-press-event", callback: ((targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-press-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: ((targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-release-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "child-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "enter-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "enter-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "focus-in-event", callback: ((targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-in-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: ((targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-out-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: ((targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    on(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void): NodeJS.EventEmitter
    emit(sigName: "grab-broken-event", targetItem: CanvasItem, event: Gdk.EventGrabBroken): void
    connect(sigName: "key-press-event", callback: ((targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-press-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: ((targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-release-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "leave-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "leave-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "motion-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    on(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void): NodeJS.EventEmitter
    emit(sigName: "motion-notify-event", targetItem: CanvasItem, event: Gdk.EventMotion): void
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "scroll-event", callback: ((targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    on(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void): NodeJS.EventEmitter
    emit(sigName: "scroll-event", targetItem: CanvasItem, event: Gdk.EventScroll): void
    connect(sigName: "notify::arrow-length", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arrow-length", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::arrow-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::arrow-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::arrow-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::arrow-tip-length", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arrow-tip-length", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::arrow-tip-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::arrow-tip-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::arrow-tip-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::arrow-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arrow-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::arrow-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::arrow-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::arrow-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::close-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::close-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::close-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::close-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::end-arrow", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-arrow", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::end-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::end-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::end-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::points", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::points", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-arrow", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-arrow", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasPolyline_ConstructProps)
    _init (config?: CanvasPolyline_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(iclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classInstallChildProperty(iclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    static classListChildProperties(iclass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
interface CanvasPolylineModel_ConstructProps extends CanvasItemModelSimple_ConstructProps {
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasPolylineModel */
    arrowLength?: number
    arrowTipLength?: number
    arrowWidth?: number
    closePath?: boolean
    endArrow?: boolean
    height?: number
    points?: CanvasPoints
    startArrow?: boolean
    width?: number
    x?: number
    y?: number
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    canFocus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
class CanvasPolylineModel {
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasPolylineModel */
    arrowLength: number
    arrowTipLength: number
    arrowWidth: number
    closePath: boolean
    endArrow: boolean
    height: number
    points: CanvasPoints
    startArrow: boolean
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    canFocus: boolean
    description: string
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasItemModelSimple */
    readonly parentObject: GObject.Object
    readonly parent: CanvasItemModel
    readonly simpleData: CanvasItemSimpleData
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
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    addChild(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    findChild(child: CanvasItemModel): number
    getChild(childNum: number): CanvasItemModel
    getChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    getNChildren(): number
    getParent(): CanvasItemModel
    getSimpleTransform(x: number, y: number, scale: number, rotation: number): boolean
    getStyle(): CanvasStyle
    getTransform(transform: cairo.Matrix): boolean
    isContainer(): boolean
    lower(below?: CanvasItemModel | null): void
    moveChild(oldPosition: number, newPosition: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    removeChild(childNum: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    setParent(parent: CanvasItemModel): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: ((stopped: boolean) => void)): number
    on(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (stopped: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "changed", callback: ((recomputeBounds: boolean) => void)): number
    on(sigName: "changed", callback: (recomputeBounds: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (recomputeBounds: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (recomputeBounds: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "changed", recomputeBounds: boolean): void
    connect(sigName: "child-added", callback: ((childNum: number) => void)): number
    on(sigName: "child-added", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (childNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", childNum: number): void
    connect(sigName: "child-moved", callback: ((oldChildNum: number, newChildNum: number) => void)): number
    on(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-moved", oldChildNum: number, newChildNum: number): void
    connect(sigName: "child-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "child-removed", callback: ((childNum: number) => void)): number
    on(sigName: "child-removed", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (childNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", childNum: number): void
    connect(sigName: "notify::arrow-length", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arrow-length", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::arrow-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::arrow-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::arrow-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::arrow-tip-length", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arrow-tip-length", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::arrow-tip-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::arrow-tip-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::arrow-tip-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::arrow-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::arrow-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::arrow-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::arrow-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::arrow-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::close-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::close-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::close-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::close-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::end-arrow", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-arrow", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::end-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::end-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::end-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::points", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::points", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-arrow", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-arrow", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-arrow", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasPolylineModel_ConstructProps)
    _init (config?: CanvasPolylineModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(mclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classInstallChildProperty(mclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    static classListChildProperties(mclass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
interface CanvasRect_ConstructProps extends CanvasItemSimple_ConstructProps {
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasRect */
    height?: number
    radiusX?: number
    radiusY?: number
    width?: number
    x?: number
    y?: number
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasItem */
    canFocus?: boolean
    description?: string
    parent?: CanvasItem
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
class CanvasRect {
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasRect */
    height: number
    radiusX: number
    radiusY: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItem */
    canFocus: boolean
    description: string
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    readonly canvas: Canvas
    readonly parent: CanvasItem
    readonly model: CanvasItemModelSimple
    readonly simpleData: CanvasItemSimpleData
    readonly bounds: CanvasBounds
    readonly needUpdate: number
    readonly needEntireSubtreeUpdate: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    changed(recomputeBounds: boolean): void
    checkInPath(x: number, y: number, cr: cairo.Context, pointerEvents: CanvasPointerEvents): boolean
    checkStyle(): void
    getLineWidth(): number
    getPathBounds(cr: cairo.Context, bounds: CanvasBounds): void
    paintPath(cr: cairo.Context): void
    setModel(model: CanvasItemModel): void
    userBoundsToDevice(cr: cairo.Context, bounds: CanvasBounds): void
    userBoundsToParent(cr: cairo.Context, bounds: CanvasBounds): void
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
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItem */
    addChild(child: CanvasItem, position: number): void
    allocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    ensureUpdated(): void
    findChild(child: CanvasItem): number
    getBounds(): /* bounds */ CanvasBounds
    getCanvas(): Canvas
    getChild(childNum: number): CanvasItem
    getChildProperty(child: CanvasItem, propertyName: string, value: any): void
    getIsStatic(): boolean
    getItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    getModel(): CanvasItemModel
    getNChildren(): number
    getParent(): CanvasItem
    getRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    getRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    getRequestedHeight(cr: cairo.Context, width: number): number
    getSimpleTransform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    getStyle(): CanvasStyle
    getTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    getTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    isContainer(): boolean
    isVisible(): boolean
    lower(below?: CanvasItem | null): void
    moveChild(oldPosition: number, newPosition: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    removeChild(childNum: number): void
    requestUpdate(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setCanvas(canvas: Canvas): void
    setChildProperty(child: CanvasItem, propertyName: string, value: any): void
    setIsStatic(isStatic: boolean): void
    setModel(model: CanvasItemModel): void
    setParent(parent: CanvasItem): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    update(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-2.0.GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: ((stopped: boolean) => void)): number
    on(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (stopped: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "button-press-event", callback: ((targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-press-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: ((targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-release-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "child-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "enter-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "enter-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "focus-in-event", callback: ((targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-in-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: ((targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-out-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: ((targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    on(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void): NodeJS.EventEmitter
    emit(sigName: "grab-broken-event", targetItem: CanvasItem, event: Gdk.EventGrabBroken): void
    connect(sigName: "key-press-event", callback: ((targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-press-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: ((targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-release-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "leave-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "leave-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "motion-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    on(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void): NodeJS.EventEmitter
    emit(sigName: "motion-notify-event", targetItem: CanvasItem, event: Gdk.EventMotion): void
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "scroll-event", callback: ((targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    on(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void): NodeJS.EventEmitter
    emit(sigName: "scroll-event", targetItem: CanvasItem, event: Gdk.EventScroll): void
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::radius-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::radius-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::radius-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::radius-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::radius-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::radius-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::radius-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::radius-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasRect_ConstructProps)
    _init (config?: CanvasRect_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(iclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classInstallChildProperty(iclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    static classListChildProperties(iclass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
interface CanvasRectModel_ConstructProps extends CanvasItemModelSimple_ConstructProps {
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasRectModel */
    height?: number
    radiusX?: number
    radiusY?: number
    width?: number
    x?: number
    y?: number
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    canFocus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
class CanvasRectModel {
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasRectModel */
    height: number
    radiusX: number
    radiusY: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    canFocus: boolean
    description: string
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasItemModelSimple */
    readonly parentObject: GObject.Object
    readonly parent: CanvasItemModel
    readonly simpleData: CanvasItemSimpleData
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
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    addChild(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    findChild(child: CanvasItemModel): number
    getChild(childNum: number): CanvasItemModel
    getChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    getNChildren(): number
    getParent(): CanvasItemModel
    getSimpleTransform(x: number, y: number, scale: number, rotation: number): boolean
    getStyle(): CanvasStyle
    getTransform(transform: cairo.Matrix): boolean
    isContainer(): boolean
    lower(below?: CanvasItemModel | null): void
    moveChild(oldPosition: number, newPosition: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    removeChild(childNum: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    setParent(parent: CanvasItemModel): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: ((stopped: boolean) => void)): number
    on(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (stopped: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "changed", callback: ((recomputeBounds: boolean) => void)): number
    on(sigName: "changed", callback: (recomputeBounds: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (recomputeBounds: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (recomputeBounds: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "changed", recomputeBounds: boolean): void
    connect(sigName: "child-added", callback: ((childNum: number) => void)): number
    on(sigName: "child-added", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (childNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", childNum: number): void
    connect(sigName: "child-moved", callback: ((oldChildNum: number, newChildNum: number) => void)): number
    on(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-moved", oldChildNum: number, newChildNum: number): void
    connect(sigName: "child-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "child-removed", callback: ((childNum: number) => void)): number
    on(sigName: "child-removed", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (childNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", childNum: number): void
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::radius-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::radius-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::radius-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::radius-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::radius-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radius-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::radius-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::radius-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::radius-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasRectModel_ConstructProps)
    _init (config?: CanvasRectModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(mclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classInstallChildProperty(mclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    static classListChildProperties(mclass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
interface CanvasStyle_ConstructProps extends GObject.Object_ConstructProps {
}
class CanvasStyle {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasStyle */
    copy(): CanvasStyle
    getParent(): CanvasStyle
    getProperty(propertyId: GLib.Quark): any
    setFillOptions(cr: cairo.Context): boolean
    setParent(parent: CanvasStyle): void
    setProperty(propertyId: GLib.Quark, value: any): void
    setStrokeOptions(cr: cairo.Context): boolean
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
    constructor (config?: CanvasStyle_ConstructProps)
    _init (config?: CanvasStyle_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CanvasStyle
    static $gtype: GObject.Type
}
interface CanvasTable_ConstructProps extends CanvasGroup_ConstructProps {
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasTable */
    columnSpacing?: number
    homogeneousColumns?: boolean
    homogeneousRows?: boolean
    horzGridLineWidth?: number
    rowSpacing?: number
    vertGridLineWidth?: number
    xBorderSpacing?: number
    yBorderSpacing?: number
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasItem */
    canFocus?: boolean
    description?: string
    parent?: CanvasItem
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
class CanvasTable {
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasTable */
    columnSpacing: number
    homogeneousColumns: boolean
    homogeneousRows: boolean
    horzGridLineWidth: number
    rowSpacing: number
    vertGridLineWidth: number
    xBorderSpacing: number
    yBorderSpacing: number
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasGroup */
    height: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItem */
    canFocus: boolean
    description: string
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasGroup */
    readonly parentObject: CanvasItemSimple
    readonly items: object[]
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    readonly canvas: Canvas
    readonly parent: CanvasItem
    readonly model: CanvasItemModelSimple
    readonly simpleData: CanvasItemSimpleData
    readonly bounds: CanvasBounds
    readonly needUpdate: number
    readonly needEntireSubtreeUpdate: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    changed(recomputeBounds: boolean): void
    checkInPath(x: number, y: number, cr: cairo.Context, pointerEvents: CanvasPointerEvents): boolean
    checkStyle(): void
    getLineWidth(): number
    getPathBounds(cr: cairo.Context, bounds: CanvasBounds): void
    paintPath(cr: cairo.Context): void
    setModel(model: CanvasItemModel): void
    userBoundsToDevice(cr: cairo.Context, bounds: CanvasBounds): void
    userBoundsToParent(cr: cairo.Context, bounds: CanvasBounds): void
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
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItem */
    addChild(child: CanvasItem, position: number): void
    allocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    ensureUpdated(): void
    findChild(child: CanvasItem): number
    getBounds(): /* bounds */ CanvasBounds
    getCanvas(): Canvas
    getChild(childNum: number): CanvasItem
    getChildProperty(child: CanvasItem, propertyName: string, value: any): void
    getIsStatic(): boolean
    getItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    getModel(): CanvasItemModel
    getNChildren(): number
    getParent(): CanvasItem
    getRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    getRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    getRequestedHeight(cr: cairo.Context, width: number): number
    getSimpleTransform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    getStyle(): CanvasStyle
    getTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    getTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    isContainer(): boolean
    isVisible(): boolean
    lower(below?: CanvasItem | null): void
    moveChild(oldPosition: number, newPosition: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    removeChild(childNum: number): void
    requestUpdate(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setCanvas(canvas: Canvas): void
    setChildProperty(child: CanvasItem, propertyName: string, value: any): void
    setIsStatic(isStatic: boolean): void
    setModel(model: CanvasItemModel): void
    setParent(parent: CanvasItem): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    update(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-2.0.GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: ((stopped: boolean) => void)): number
    on(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (stopped: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "button-press-event", callback: ((targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-press-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: ((targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-release-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "child-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "enter-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "enter-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "focus-in-event", callback: ((targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-in-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: ((targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-out-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: ((targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    on(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void): NodeJS.EventEmitter
    emit(sigName: "grab-broken-event", targetItem: CanvasItem, event: Gdk.EventGrabBroken): void
    connect(sigName: "key-press-event", callback: ((targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-press-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: ((targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-release-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "leave-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "leave-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "motion-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    on(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void): NodeJS.EventEmitter
    emit(sigName: "motion-notify-event", targetItem: CanvasItem, event: Gdk.EventMotion): void
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "scroll-event", callback: ((targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    on(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void): NodeJS.EventEmitter
    emit(sigName: "scroll-event", targetItem: CanvasItem, event: Gdk.EventScroll): void
    connect(sigName: "notify::column-spacing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::column-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::column-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::column-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::homogeneous-columns", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous-columns", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::homogeneous-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::homogeneous-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::homogeneous-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::homogeneous-rows", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous-rows", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::homogeneous-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::homogeneous-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::homogeneous-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::horz-grid-line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::row-spacing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::row-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::row-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::row-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-border-spacing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-border-spacing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-border-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-border-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-border-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-border-spacing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-border-spacing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-border-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-border-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-border-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasTable_ConstructProps)
    _init (config?: CanvasTable_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(iclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classInstallChildProperty(iclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    static classListChildProperties(iclass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
interface CanvasTableModel_ConstructProps extends CanvasGroupModel_ConstructProps {
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasTableModel */
    columnSpacing?: number
    homogeneousColumns?: boolean
    homogeneousRows?: boolean
    horzGridLineWidth?: number
    rowSpacing?: number
    vertGridLineWidth?: number
    xBorderSpacing?: number
    yBorderSpacing?: number
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    canFocus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
class CanvasTableModel {
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasTableModel */
    columnSpacing: number
    homogeneousColumns: boolean
    homogeneousRows: boolean
    horzGridLineWidth: number
    rowSpacing: number
    vertGridLineWidth: number
    xBorderSpacing: number
    yBorderSpacing: number
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasGroupModel */
    height: number
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    canFocus: boolean
    description: string
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasGroupModel */
    readonly parentObject: CanvasItemModelSimple
    readonly children: object[]
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasItemModelSimple */
    readonly parent: CanvasItemModel
    readonly simpleData: CanvasItemSimpleData
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
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    addChild(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    findChild(child: CanvasItemModel): number
    getChild(childNum: number): CanvasItemModel
    getChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    getNChildren(): number
    getParent(): CanvasItemModel
    getSimpleTransform(x: number, y: number, scale: number, rotation: number): boolean
    getStyle(): CanvasStyle
    getTransform(transform: cairo.Matrix): boolean
    isContainer(): boolean
    lower(below?: CanvasItemModel | null): void
    moveChild(oldPosition: number, newPosition: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    removeChild(childNum: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    setParent(parent: CanvasItemModel): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: ((stopped: boolean) => void)): number
    on(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (stopped: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "changed", callback: ((recomputeBounds: boolean) => void)): number
    on(sigName: "changed", callback: (recomputeBounds: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (recomputeBounds: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (recomputeBounds: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "changed", recomputeBounds: boolean): void
    connect(sigName: "child-added", callback: ((childNum: number) => void)): number
    on(sigName: "child-added", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (childNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", childNum: number): void
    connect(sigName: "child-moved", callback: ((oldChildNum: number, newChildNum: number) => void)): number
    on(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-moved", oldChildNum: number, newChildNum: number): void
    connect(sigName: "child-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "child-removed", callback: ((childNum: number) => void)): number
    on(sigName: "child-removed", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (childNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", childNum: number): void
    connect(sigName: "notify::column-spacing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::column-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::column-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::column-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::homogeneous-columns", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous-columns", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::homogeneous-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::homogeneous-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::homogeneous-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::homogeneous-rows", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous-rows", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::homogeneous-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::homogeneous-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::homogeneous-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::horz-grid-line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::horz-grid-line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::horz-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::row-spacing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::row-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::row-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::row-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vert-grid-line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vert-grid-line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vert-grid-line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-border-spacing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-border-spacing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-border-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-border-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-border-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-border-spacing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-border-spacing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-border-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-border-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-border-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasTableModel_ConstructProps)
    _init (config?: CanvasTableModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(mclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classInstallChildProperty(mclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    static classListChildProperties(mclass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
interface CanvasText_ConstructProps extends CanvasItemSimple_ConstructProps {
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasText */
    alignment?: Pango.Alignment
    anchor?: CanvasAnchorType
    ellipsize?: Pango.EllipsizeMode
    height?: number
    text?: string
    useMarkup?: boolean
    width?: number
    wrap?: Pango.WrapMode
    x?: number
    y?: number
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasItem */
    canFocus?: boolean
    description?: string
    parent?: CanvasItem
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
class CanvasText {
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasText */
    alignment: Pango.Alignment
    anchor: CanvasAnchorType
    ellipsize: Pango.EllipsizeMode
    height: number
    text: string
    useMarkup: boolean
    width: number
    wrap: Pango.WrapMode
    x: number
    y: number
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItem */
    canFocus: boolean
    description: string
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    readonly canvas: Canvas
    readonly parent: CanvasItem
    readonly model: CanvasItemModelSimple
    readonly simpleData: CanvasItemSimpleData
    readonly bounds: CanvasBounds
    readonly needUpdate: number
    readonly needEntireSubtreeUpdate: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasText */
    getNaturalExtents(): [ /* inkRect */ Pango.Rectangle | null, /* logicalRect */ Pango.Rectangle | null ]
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    changed(recomputeBounds: boolean): void
    checkInPath(x: number, y: number, cr: cairo.Context, pointerEvents: CanvasPointerEvents): boolean
    checkStyle(): void
    getLineWidth(): number
    getPathBounds(cr: cairo.Context, bounds: CanvasBounds): void
    paintPath(cr: cairo.Context): void
    setModel(model: CanvasItemModel): void
    userBoundsToDevice(cr: cairo.Context, bounds: CanvasBounds): void
    userBoundsToParent(cr: cairo.Context, bounds: CanvasBounds): void
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
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItem */
    addChild(child: CanvasItem, position: number): void
    allocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    ensureUpdated(): void
    findChild(child: CanvasItem): number
    getBounds(): /* bounds */ CanvasBounds
    getCanvas(): Canvas
    getChild(childNum: number): CanvasItem
    getChildProperty(child: CanvasItem, propertyName: string, value: any): void
    getIsStatic(): boolean
    getItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    getModel(): CanvasItemModel
    getNChildren(): number
    getParent(): CanvasItem
    getRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    getRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    getRequestedHeight(cr: cairo.Context, width: number): number
    getSimpleTransform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    getStyle(): CanvasStyle
    getTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    getTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    isContainer(): boolean
    isVisible(): boolean
    lower(below?: CanvasItem | null): void
    moveChild(oldPosition: number, newPosition: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    removeChild(childNum: number): void
    requestUpdate(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setCanvas(canvas: Canvas): void
    setChildProperty(child: CanvasItem, propertyName: string, value: any): void
    setIsStatic(isStatic: boolean): void
    setModel(model: CanvasItemModel): void
    setParent(parent: CanvasItem): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    update(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-2.0.GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: ((stopped: boolean) => void)): number
    on(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (stopped: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "button-press-event", callback: ((targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-press-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: ((targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-release-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "child-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "enter-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "enter-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "focus-in-event", callback: ((targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-in-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: ((targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-out-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: ((targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    on(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void): NodeJS.EventEmitter
    emit(sigName: "grab-broken-event", targetItem: CanvasItem, event: Gdk.EventGrabBroken): void
    connect(sigName: "key-press-event", callback: ((targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-press-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: ((targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-release-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "leave-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "leave-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "motion-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    on(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void): NodeJS.EventEmitter
    emit(sigName: "motion-notify-event", targetItem: CanvasItem, event: Gdk.EventMotion): void
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "scroll-event", callback: ((targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    on(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void): NodeJS.EventEmitter
    emit(sigName: "scroll-event", targetItem: CanvasItem, event: Gdk.EventScroll): void
    connect(sigName: "notify::alignment", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anchor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ellipsize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ellipsize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ellipsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ellipsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ellipsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wrap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasText_ConstructProps)
    _init (config?: CanvasText_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(iclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classInstallChildProperty(iclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    static classListChildProperties(iclass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
interface CanvasTextModel_ConstructProps extends CanvasItemModelSimple_ConstructProps {
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasTextModel */
    alignment?: Pango.Alignment
    anchor?: CanvasAnchorType
    ellipsize?: Pango.EllipsizeMode
    height?: number
    text?: string
    useMarkup?: boolean
    width?: number
    wrap?: Pango.WrapMode
    x?: number
    y?: number
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    canFocus?: boolean
    description?: string
    parent?: CanvasItemModel
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
class CanvasTextModel {
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasTextModel */
    alignment: Pango.Alignment
    anchor: CanvasAnchorType
    ellipsize: Pango.EllipsizeMode
    height: number
    text: string
    useMarkup: boolean
    width: number
    wrap: Pango.WrapMode
    x: number
    y: number
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemModelSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    canFocus: boolean
    description: string
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasItemModelSimple */
    readonly parentObject: GObject.Object
    readonly parent: CanvasItemModel
    readonly simpleData: CanvasItemSimpleData
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
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    addChild(child: CanvasItemModel, position: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    findChild(child: CanvasItemModel): number
    getChild(childNum: number): CanvasItemModel
    getChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    getNChildren(): number
    getParent(): CanvasItemModel
    getSimpleTransform(x: number, y: number, scale: number, rotation: number): boolean
    getStyle(): CanvasStyle
    getTransform(transform: cairo.Matrix): boolean
    isContainer(): boolean
    lower(below?: CanvasItemModel | null): void
    moveChild(oldPosition: number, newPosition: number): void
    raise(above?: CanvasItemModel | null): void
    remove(): void
    removeChild(childNum: number): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setChildProperty(child: CanvasItemModel, propertyName: string, value: any): void
    setParent(parent: CanvasItemModel): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-2.0.GooCanvas.CanvasItemModel */
    connect(sigName: "animation-finished", callback: ((stopped: boolean) => void)): number
    on(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (stopped: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "changed", callback: ((recomputeBounds: boolean) => void)): number
    on(sigName: "changed", callback: (recomputeBounds: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (recomputeBounds: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (recomputeBounds: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "changed", recomputeBounds: boolean): void
    connect(sigName: "child-added", callback: ((childNum: number) => void)): number
    on(sigName: "child-added", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (childNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", childNum: number): void
    connect(sigName: "child-moved", callback: ((oldChildNum: number, newChildNum: number) => void)): number
    on(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (oldChildNum: number, newChildNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-moved", oldChildNum: number, newChildNum: number): void
    connect(sigName: "child-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "child-removed", callback: ((childNum: number) => void)): number
    on(sigName: "child-removed", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (childNum: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (childNum: number) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", childNum: number): void
    connect(sigName: "notify::alignment", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anchor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ellipsize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ellipsize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ellipsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ellipsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ellipsize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wrap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasTextModel_ConstructProps)
    _init (config?: CanvasTextModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(mclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classInstallChildProperty(mclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    static classListChildProperties(mclass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
interface CanvasWidget_ConstructProps extends CanvasItemSimple_ConstructProps {
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasWidget */
    anchor?: CanvasAnchorType
    height?: number
    widget?: Gtk.Widget
    width?: number
    x?: number
    y?: number
    /* Constructor properties of GooCanvas-2.0.GooCanvas.CanvasItem */
    canFocus?: boolean
    description?: string
    parent?: CanvasItem
    pointerEvents?: CanvasPointerEvents
    title?: string
    tooltip?: string
    transform?: any
    visibility?: CanvasItemVisibility
    visibilityThreshold?: number
}
class CanvasWidget {
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasWidget */
    anchor: CanvasAnchorType
    height: number
    widget: Gtk.Widget
    width: number
    x: number
    y: number
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    antialias: CairoAntialias
    clipFillRule: CairoFillRule
    clipPath: string
    fillColor: string
    fillColorGdkRgba: Gdk.RGBA
    fillColorRgba: number
    fillPattern: any
    fillPixbuf: GdkPixbuf.Pixbuf
    fillRule: CairoFillRule
    font: string
    fontDesc: Pango.FontDescription
    hintMetrics: CairoHintMetrics
    lineCap: CairoLineCap
    lineDash: CanvasLineDash
    lineJoin: CairoLineJoin
    lineJoinMiterLimit: number
    lineWidth: number
    operator: CairoOperator
    strokeColor: string
    strokeColorGdkRgba: Gdk.RGBA
    strokeColorRgba: number
    strokePattern: any
    strokePixbuf: GdkPixbuf.Pixbuf
    /* Properties of GooCanvas-2.0.GooCanvas.CanvasItem */
    canFocus: boolean
    description: string
    pointerEvents: CanvasPointerEvents
    title: string
    tooltip: string
    transform: any
    visibility: CanvasItemVisibility
    visibilityThreshold: number
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    readonly canvas: Canvas
    readonly parent: CanvasItem
    readonly model: CanvasItemModelSimple
    readonly simpleData: CanvasItemSimpleData
    readonly bounds: CanvasBounds
    readonly needUpdate: number
    readonly needEntireSubtreeUpdate: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItemSimple */
    changed(recomputeBounds: boolean): void
    checkInPath(x: number, y: number, cr: cairo.Context, pointerEvents: CanvasPointerEvents): boolean
    checkStyle(): void
    getLineWidth(): number
    getPathBounds(cr: cairo.Context, bounds: CanvasBounds): void
    paintPath(cr: cairo.Context): void
    setModel(model: CanvasItemModel): void
    userBoundsToDevice(cr: cairo.Context, bounds: CanvasBounds): void
    userBoundsToParent(cr: cairo.Context, bounds: CanvasBounds): void
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
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasItem */
    addChild(child: CanvasItem, position: number): void
    allocateArea(cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number): void
    animate(x: number, y: number, scale: number, degrees: number, absolute: boolean, duration: number, stepTime: number, type: CanvasAnimateType): void
    ensureUpdated(): void
    findChild(child: CanvasItem): number
    getBounds(): /* bounds */ CanvasBounds
    getCanvas(): Canvas
    getChild(childNum: number): CanvasItem
    getChildProperty(child: CanvasItem, propertyName: string, value: any): void
    getIsStatic(): boolean
    getItemsAt(x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]): CanvasItem[]
    getModel(): CanvasItemModel
    getNChildren(): number
    getParent(): CanvasItem
    getRequestedArea(cr: cairo.Context, requestedArea: CanvasBounds): boolean
    getRequestedAreaForWidth(cr: cairo.Context, width: number, requestedArea: CanvasBounds): boolean
    getRequestedHeight(cr: cairo.Context, width: number): number
    getSimpleTransform(): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* scale */ number, /* rotation */ number ]
    getStyle(): CanvasStyle
    getTransform(): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    getTransformForChild(child: CanvasItem): [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    isContainer(): boolean
    isVisible(): boolean
    lower(below?: CanvasItem | null): void
    moveChild(oldPosition: number, newPosition: number): void
    paint(cr: cairo.Context, bounds: CanvasBounds, scale: number): void
    raise(above?: CanvasItem | null): void
    remove(): void
    removeChild(childNum: number): void
    requestUpdate(): void
    rotate(degrees: number, cx: number, cy: number): void
    scale(sx: number, sy: number): void
    setCanvas(canvas: Canvas): void
    setChildProperty(child: CanvasItem, propertyName: string, value: any): void
    setIsStatic(isStatic: boolean): void
    setModel(model: CanvasItemModel): void
    setParent(parent: CanvasItem): void
    setSimpleTransform(x: number, y: number, scale: number, rotation: number): void
    setStyle(style: CanvasStyle): void
    setTransform(transform?: cairo.Matrix | null): void
    skewX(degrees: number, cx: number, cy: number): void
    skewY(degrees: number, cx: number, cy: number): void
    stopAnimation(): void
    translate(tx: number, ty: number): void
    update(entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GooCanvas-2.0.GooCanvas.CanvasItem */
    connect(sigName: "animation-finished", callback: ((stopped: boolean) => void)): number
    on(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "animation-finished", callback: (stopped: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "animation-finished", callback: (stopped: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "animation-finished", stopped: boolean): void
    connect(sigName: "button-press-event", callback: ((targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-press-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: ((targetItem: CanvasItem, event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-release-event", targetItem: CanvasItem, event: Gdk.EventButton): void
    connect(sigName: "child-notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", pspec: GObject.ParamSpec): void
    connect(sigName: "enter-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "enter-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "focus-in-event", callback: ((targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-in-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: ((targetItem: CanvasItem, event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (targetItem: CanvasItem, event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-out-event", targetItem: CanvasItem, event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: ((targetItem: CanvasItem, event: Gdk.EventGrabBroken) => boolean)): number
    on(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (targetItem: CanvasItem, event: Gdk.EventGrabBroken) => void): NodeJS.EventEmitter
    emit(sigName: "grab-broken-event", targetItem: CanvasItem, event: Gdk.EventGrabBroken): void
    connect(sigName: "key-press-event", callback: ((targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-press-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: ((targetItem: CanvasItem, event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (targetItem: CanvasItem, event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-release-event", targetItem: CanvasItem, event: Gdk.EventKey): void
    connect(sigName: "leave-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "leave-notify-event", targetItem: CanvasItem, event: Gdk.EventCrossing): void
    connect(sigName: "motion-notify-event", callback: ((targetItem: CanvasItem, event: Gdk.EventMotion) => boolean)): number
    on(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (targetItem: CanvasItem, event: Gdk.EventMotion) => void): NodeJS.EventEmitter
    emit(sigName: "motion-notify-event", targetItem: CanvasItem, event: Gdk.EventMotion): void
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "scroll-event", callback: ((targetItem: CanvasItem, event: Gdk.EventScroll) => boolean)): number
    on(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (targetItem: CanvasItem, event: Gdk.EventScroll) => void): NodeJS.EventEmitter
    emit(sigName: "scroll-event", targetItem: CanvasItem, event: Gdk.EventScroll): void
    connect(sigName: "notify::anchor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anchor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::widget", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::widget", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialias", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::antialias", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-rule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fill-rule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hint-metrics", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hint-metrics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-cap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-cap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-dash", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-dash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-join-miter-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-join-miter-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::operator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-gdk-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-gdk-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-color-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-color-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stroke-pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stroke-pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pointer-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CanvasWidget_ConstructProps)
    _init (config?: CanvasWidget_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static classFindChildProperty(iclass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    static classInstallChildProperty(iclass: GObject.ObjectClass, propertyId: number, pspec: GObject.ParamSpec): void
    static classListChildProperties(iclass: GObject.ObjectClass): GObject.ParamSpec[]
    static $gtype: GObject.Type
}
interface CanvasWidgetAccessibleFactory_ConstructProps extends Atk.ObjectFactory_ConstructProps {
}
class CanvasWidgetAccessibleFactory {
    /* Fields of Atk-1.0.Atk.ObjectFactory */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.ObjectFactory */
    createAccessible(obj: GObject.Object): Atk.Object
    getAccessibleType(): GObject.Type
    invalidate(): void
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
    constructor (config?: CanvasWidgetAccessibleFactory_ConstructProps)
    _init (config?: CanvasWidgetAccessibleFactory_ConstructProps): void
    static $gtype: GObject.Type
}
class CanvasBounds {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasBounds */
    readonly x1: number
    readonly y1: number
    readonly x2: number
    readonly y2: number
    static name: string
}
abstract class CanvasClass {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasClass */
    readonly createItem: (canvas: Canvas, model: CanvasItemModel) => CanvasItem
    readonly itemCreated: (canvas: Canvas, item: CanvasItem, model: CanvasItemModel) => void
    static name: string
}
abstract class CanvasEllipseClass {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasEllipseClass */
    readonly parentClass: CanvasItemSimpleClass
    static name: string
}
class CanvasEllipseData {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasEllipseData */
    readonly centerX: number
    readonly centerY: number
    readonly radiusX: number
    readonly radiusY: number
    static name: string
}
abstract class CanvasEllipseModelClass {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasEllipseModelClass */
    readonly parentClass: CanvasItemModelSimpleClass
    static name: string
}
abstract class CanvasGridClass {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasGridClass */
    readonly parentClass: CanvasItemSimpleClass
    static name: string
}
class CanvasGridData {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasGridData */
    readonly x: number
    readonly y: number
    readonly width: number
    readonly height: number
    readonly xStep: number
    readonly yStep: number
    readonly xOffset: number
    readonly yOffset: number
    readonly horzGridLineWidth: number
    readonly vertGridLineWidth: number
    readonly horzGridLinePattern: cairo.Pattern
    readonly vertGridLinePattern: cairo.Pattern
    readonly borderWidth: number
    readonly borderPattern: cairo.Pattern
    readonly showHorzGridLines: number
    readonly showVertGridLines: number
    readonly vertGridLinesOnTop: number
    static name: string
}
abstract class CanvasGridModelClass {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasGridModelClass */
    readonly parentClass: CanvasItemModelSimpleClass
    static name: string
}
abstract class CanvasGroupClass {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasGroupClass */
    readonly parentClass: CanvasItemSimpleClass
    static name: string
}
abstract class CanvasGroupModelClass {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasGroupModelClass */
    readonly parentClass: CanvasItemModelSimpleClass
    static name: string
}
abstract class CanvasImageClass {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasImageClass */
    readonly parentClass: CanvasItemSimpleClass
    static name: string
}
class CanvasImageData {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasImageData */
    readonly pattern: cairo.Pattern
    readonly x: number
    readonly y: number
    readonly width: number
    readonly height: number
    static name: string
}
abstract class CanvasImageModelClass {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasImageModelClass */
    readonly parentClass: CanvasItemModelSimpleClass
    static name: string
}
abstract class CanvasItemIface {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasItemIface */
    readonly getCanvas: (item: CanvasItem) => Canvas
    readonly setCanvas: (item: CanvasItem, canvas: Canvas) => void
    readonly getNChildren: (item: CanvasItem) => number
    readonly getChild: (item: CanvasItem, childNum: number) => CanvasItem
    readonly requestUpdate: (item: CanvasItem) => void
    readonly addChild: (item: CanvasItem, child: CanvasItem, position: number) => void
    readonly moveChild: (item: CanvasItem, oldPosition: number, newPosition: number) => void
    readonly removeChild: (item: CanvasItem, childNum: number) => void
    readonly getChildProperty: (item: CanvasItem, child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec) => void
    readonly setChildProperty: (item: CanvasItem, child: CanvasItem, propertyId: number, value: any, pspec: GObject.ParamSpec) => void
    readonly getTransformForChild: (item: CanvasItem, child: CanvasItem) => [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    readonly getParent: (item: CanvasItem) => CanvasItem
    readonly setParent: (item: CanvasItem, parent: CanvasItem) => void
    readonly getBounds: (item: CanvasItem) => /* bounds */ CanvasBounds
    readonly getItemsAt: (item: CanvasItem, x: number, y: number, cr: cairo.Context, isPointerEvent: boolean, parentIsVisible: boolean, foundItems: CanvasItem[]) => CanvasItem[]
    readonly update: (item: CanvasItem, entireTree: boolean, cr: cairo.Context, bounds: CanvasBounds) => void
    readonly paint: (item: CanvasItem, cr: cairo.Context, bounds: CanvasBounds, scale: number) => void
    readonly getRequestedArea: (item: CanvasItem, cr: cairo.Context, requestedArea: CanvasBounds) => boolean
    readonly allocateArea: (item: CanvasItem, cr: cairo.Context, requestedArea: CanvasBounds, allocatedArea: CanvasBounds, xOffset: number, yOffset: number) => void
    readonly getTransform: (item: CanvasItem) => [ /* returnType */ boolean, /* transform */ cairo.Matrix ]
    readonly setTransform: (item: CanvasItem, transform?: cairo.Matrix | null) => void
    readonly getStyle: (item: CanvasItem) => CanvasStyle
    readonly setStyle: (item: CanvasItem, style: CanvasStyle) => void
    readonly isVisible: (item: CanvasItem) => boolean
    readonly getRequestedHeight: (item: CanvasItem, cr: cairo.Context, width: number) => number
    readonly getModel: (item: CanvasItem) => CanvasItemModel
    readonly setModel: (item: CanvasItem, model: CanvasItemModel) => void
    readonly enterNotifyEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventCrossing) => boolean
    readonly leaveNotifyEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventCrossing) => boolean
    readonly motionNotifyEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventMotion) => boolean
    readonly buttonPressEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventButton) => boolean
    readonly buttonReleaseEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventButton) => boolean
    readonly focusInEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventFocus) => boolean
    readonly focusOutEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventFocus) => boolean
    readonly keyPressEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventKey) => boolean
    readonly keyReleaseEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventKey) => boolean
    readonly grabBrokenEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventGrabBroken) => boolean
    readonly childNotify: (item: CanvasItem, pspec: GObject.ParamSpec) => void
    readonly queryTooltip: (item: CanvasItem, x: number, y: number, keyboardTooltip: boolean, tooltip: Gtk.Tooltip) => boolean
    readonly getIsStatic: (item: CanvasItem) => boolean
    readonly setIsStatic: (item: CanvasItem, isStatic: boolean) => void
    readonly animationFinished: (item: CanvasItem, stopped: boolean) => void
    readonly scrollEvent: (item: CanvasItem, target: CanvasItem, event: Gdk.EventScroll) => boolean
    readonly getRequestedAreaForWidth: (item: CanvasItem, cr: cairo.Context, width: number, requestedArea: CanvasBounds) => boolean
    static name: string
}
abstract class CanvasItemModelIface {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasItemModelIface */
    readonly getNChildren: (model: CanvasItemModel) => number
    readonly getChild: (model: CanvasItemModel, childNum: number) => CanvasItemModel
    readonly addChild: (model: CanvasItemModel, child: CanvasItemModel, position: number) => void
    readonly moveChild: (model: CanvasItemModel, oldPosition: number, newPosition: number) => void
    readonly removeChild: (model: CanvasItemModel, childNum: number) => void
    readonly getChildProperty: (model: CanvasItemModel, child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec) => void
    readonly setChildProperty: (item: CanvasItemModel, child: CanvasItemModel, propertyId: number, value: any, pspec: GObject.ParamSpec) => void
    readonly getParent: (model: CanvasItemModel) => CanvasItemModel
    readonly setParent: (model: CanvasItemModel, parent: CanvasItemModel) => void
    readonly getTransform: (model: CanvasItemModel, transform: cairo.Matrix) => boolean
    readonly setTransform: (model: CanvasItemModel, transform?: cairo.Matrix | null) => void
    readonly getStyle: (model: CanvasItemModel) => CanvasStyle
    readonly setStyle: (model: CanvasItemModel, style: CanvasStyle) => void
    readonly childAdded: (model: CanvasItemModel, childNum: number) => void
    readonly childMoved: (model: CanvasItemModel, oldChildNum: number, newChildNum: number) => void
    readonly childRemoved: (model: CanvasItemModel, childNum: number) => void
    readonly changed: (model: CanvasItemModel, recomputeBounds: boolean) => void
    readonly childNotify: (model: CanvasItemModel, pspec: GObject.ParamSpec) => void
    readonly animationFinished: (model: CanvasItemModel, stopped: boolean) => void
    static name: string
}
abstract class CanvasItemModelSimpleClass {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasItemModelSimpleClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class CanvasItemSimpleClass {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasItemSimpleClass */
    readonly simpleCreatePath: (simple: CanvasItemSimple, cr: cairo.Context) => void
    readonly simpleUpdate: (simple: CanvasItemSimple, cr: cairo.Context) => void
    readonly simplePaint: (simple: CanvasItemSimple, cr: cairo.Context, bounds: CanvasBounds) => void
    readonly simpleIsItemAt: (simple: CanvasItemSimple, x: number, y: number, cr: cairo.Context, isPointerEvent: boolean) => boolean
    static name: string
}
class CanvasItemSimpleData {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasItemSimpleData */
    readonly style: CanvasStyle
    readonly transform: cairo.Matrix
    readonly clipPathCommands: object[]
    readonly tooltip: string
    readonly visibilityThreshold: number
    readonly visibility: number
    readonly pointerEvents: number
    readonly canFocus: number
    readonly ownStyle: number
    readonly clipFillRule: number
    readonly isStatic: number
    static name: string
}
class CanvasLineDash {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasLineDash */
    readonly refCount: number
    readonly numDashes: number
    readonly dashes: number
    readonly dashOffset: number
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasLineDash */
    ref(): CanvasLineDash
    setOffset(dashOffset: number): void
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newv(dashes: number[]): CanvasLineDash
}
abstract class CanvasPathClass {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasPathClass */
    readonly parentClass: CanvasItemSimpleClass
    static name: string
}
class CanvasPathData {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasPathData */
    readonly pathCommands: object[]
    static name: string
}
abstract class CanvasPathModelClass {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasPathModelClass */
    readonly parentClass: CanvasItemModelSimpleClass
    static name: string
}
class CanvasPoints {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasPoints */
    readonly coords: number
    readonly numPoints: number
    readonly refCount: number
    /* Methods of GooCanvas-2.0.GooCanvas.CanvasPoints */
    getPoint(idx: number): [ /* x */ number, /* y */ number ]
    ref(): CanvasPoints
    setPoint(idx: number, x: number, y: number): void
    unref(): void
    static name: string
    static new(numPoints: number): CanvasPoints
    constructor(numPoints: number)
    /* Static methods and pseudo-constructors */
    static new(numPoints: number): CanvasPoints
}
class CanvasPolylineArrowData {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasPolylineArrowData */
    readonly arrowWidth: number
    readonly arrowLength: number
    readonly arrowTipLength: number
    readonly lineStart: number[]
    readonly lineEnd: number[]
    readonly startArrowCoords: number[]
    readonly endArrowCoords: number[]
    static name: string
}
abstract class CanvasPolylineClass {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasPolylineClass */
    readonly parentClass: CanvasItemSimpleClass
    static name: string
}
class CanvasPolylineData {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasPolylineData */
    readonly coords: number
    readonly arrowData: CanvasPolylineArrowData
    readonly numPoints: number
    readonly closePath: number
    readonly startArrow: number
    readonly endArrow: number
    readonly reconfigureArrows: number
    static name: string
}
abstract class CanvasPolylineModelClass {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasPolylineModelClass */
    readonly parentClass: CanvasItemModelSimpleClass
    static name: string
}
abstract class CanvasRectClass {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasRectClass */
    readonly parentClass: CanvasItemSimpleClass
    static name: string
}
class CanvasRectData {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasRectData */
    readonly x: number
    readonly y: number
    readonly width: number
    readonly height: number
    readonly radiusX: number
    readonly radiusY: number
    static name: string
}
abstract class CanvasRectModelClass {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasRectModelClass */
    readonly parentClass: CanvasItemModelSimpleClass
    static name: string
}
abstract class CanvasStyleClass {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasStyleClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class CanvasStyleProperty {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasStyleProperty */
    readonly id: GLib.Quark
    readonly value: any
    static name: string
}
abstract class CanvasTableClass {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasTableClass */
    readonly parentClass: CanvasGroupClass
    static name: string
}
class CanvasTableData {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasTableData */
    readonly width: number
    readonly height: number
    readonly dimensions: CanvasTableDimension[]
    readonly borderWidth: number
    readonly children: object[]
    readonly layoutData: CanvasTableLayoutData
    static name: string
}
class CanvasTableDimension {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasTableDimension */
    readonly size: number
    readonly defaultSpacing: number
    readonly spacings: number
    readonly homogeneous: number
    static name: string
}
class CanvasTableLayoutData {
    static name: string
}
abstract class CanvasTableModelClass {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasTableModelClass */
    readonly parentClass: CanvasGroupModelClass
    static name: string
}
abstract class CanvasTextClass {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasTextClass */
    readonly parentClass: CanvasItemSimpleClass
    static name: string
}
class CanvasTextData {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasTextData */
    readonly text: string
    readonly x: number
    readonly y: number
    readonly width: number
    readonly useMarkup: number
    readonly anchor: number
    readonly alignment: number
    readonly ellipsize: number
    readonly wrap: number
    static name: string
}
abstract class CanvasTextModelClass {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasTextModelClass */
    readonly parentClass: CanvasItemModelSimpleClass
    static name: string
}
abstract class CanvasWidgetClass {
    /* Fields of GooCanvas-2.0.GooCanvas.CanvasWidgetClass */
    readonly parentClass: CanvasItemSimpleClass
    static name: string
}
class CanvasPathCommand {
    static name: string
}
}
export default GooCanvas;