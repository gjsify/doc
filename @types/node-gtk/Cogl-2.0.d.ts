/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Cogl-2.0
 */

import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GL from './GL-1.0';

export namespace Cogl {

enum AttributeType {
    BYTE,
    UNSIGNED_BYTE,
    SHORT,
    UNSIGNED_SHORT,
    FLOAT,
}
enum BitmapError {
    FAILED,
    UNKNOWN_TYPE,
    CORRUPT_IMAGE,
}
enum BlendStringError {
    PARSE_ERROR,
    ARGUMENT_PARSE_ERROR,
    INVALID_ERROR,
    GPU_UNSUPPORTED_ERROR,
}
enum BufferError {
    BUFFER_ERROR_MAP,
}
enum BufferUpdateHint {
    STATIC,
    DYNAMIC,
    STREAM,
}
enum DepthTestFunction {
    NEVER,
    LESS,
    EQUAL,
    LEQUAL,
    GREATER,
    NOTEQUAL,
    GEQUAL,
    ALWAYS,
}
enum Driver {
    ANY,
    NOP,
    GL,
    GL3,
    GLES1,
    GLES2,
    WEBGL,
}
enum FeatureID {
    OGL_FEATURE_ID_TEXTURE_NPOT_BASIC,
    OGL_FEATURE_ID_TEXTURE_NPOT_MIPMAP,
    OGL_FEATURE_ID_TEXTURE_NPOT_REPEAT,
    OGL_FEATURE_ID_TEXTURE_NPOT,
    OGL_FEATURE_ID_TEXTURE_RECTANGLE,
    OGL_FEATURE_ID_TEXTURE_3D,
    OGL_FEATURE_ID_GLSL,
    OGL_FEATURE_ID_ARBFP,
    OGL_FEATURE_ID_OFFSCREEN,
    OGL_FEATURE_ID_OFFSCREEN_MULTISAMPLE,
    OGL_FEATURE_ID_ONSCREEN_MULTIPLE,
    OGL_FEATURE_ID_UNSIGNED_INT_INDICES,
    OGL_FEATURE_ID_DEPTH_RANGE,
    OGL_FEATURE_ID_POINT_SPRITE,
    OGL_FEATURE_ID_MAP_BUFFER_FOR_READ,
    OGL_FEATURE_ID_MAP_BUFFER_FOR_WRITE,
    OGL_FEATURE_ID_MIRRORED_REPEAT,
    OGL_FEATURE_ID_SWAP_BUFFERS_EVENT,
    OGL_FEATURE_ID_GLES2_CONTEXT,
    OGL_FEATURE_ID_DEPTH_TEXTURE,
    OGL_FEATURE_ID_PRESENTATION_TIME,
    OGL_FEATURE_ID_FENCE,
    OGL_FEATURE_ID_PER_VERTEX_POINT_SIZE,
    OGL_FEATURE_ID_TEXTURE_RG,
    OGL_FEATURE_ID_BUFFER_AGE,
}
enum FilterReturn {
    CONTINUE,
    REMOVE,
}
enum FogMode {
    LINEAR,
    EXPONENTIAL,
    EXPONENTIAL_SQUARED,
}
enum FrameEvent {
    SYNC,
    COMPLETE,
}
enum FramebufferError {
    FRAMEBUFFER_ERROR_ALLOCATE,
}
enum GLES2ContextError {
    UNSUPPORTED,
    DRIVER,
}
enum IndicesType {
    BYTE,
    SHORT,
    INT,
}
enum MaterialAlphaFunc {
    NEVER,
    LESS,
    EQUAL,
    LEQUAL,
    GREATER,
    NOTEQUAL,
    GEQUAL,
    ALWAYS,
}
enum MaterialFilter {
    NEAREST,
    LINEAR,
    NEAREST_MIPMAP_NEAREST,
    LINEAR_MIPMAP_NEAREST,
    NEAREST_MIPMAP_LINEAR,
    LINEAR_MIPMAP_LINEAR,
}
enum MaterialLayerType {
    TEXTURE,
}
enum MaterialWrapMode {
    REPEAT,
    CLAMP_TO_EDGE,
    AUTOMATIC,
}
enum PipelineAlphaFunc {
    NEVER,
    LESS,
    EQUAL,
    LEQUAL,
    GREATER,
    NOTEQUAL,
    GEQUAL,
    ALWAYS,
}
enum PipelineCullFaceMode {
    NONE,
    FRONT,
    BACK,
    BOTH,
}
enum PipelineFilter {
    NEAREST,
    LINEAR,
    NEAREST_MIPMAP_NEAREST,
    LINEAR_MIPMAP_NEAREST,
    NEAREST_MIPMAP_LINEAR,
    LINEAR_MIPMAP_LINEAR,
}
enum PipelineWrapMode {
    REPEAT,
    MIRRORED_REPEAT,
    CLAMP_TO_EDGE,
    AUTOMATIC,
}
enum PixelFormat {
    ANY,
    A_8,
    RGB_565,
    RGBA_4444,
    RGBA_5551,
    YUV,
    G_8,
    RG_88,
    RGB_888,
    BGR_888,
    RGBA_8888,
    BGRA_8888,
    ARGB_8888,
    ABGR_8888,
    RGBA_1010102,
    BGRA_1010102,
    ARGB_2101010,
    ABGR_2101010,
    RGBA_8888_PRE,
    BGRA_8888_PRE,
    ARGB_8888_PRE,
    ABGR_8888_PRE,
    RGBA_4444_PRE,
    RGBA_5551_PRE,
    RGBA_1010102_PRE,
    BGRA_1010102_PRE,
    ARGB_2101010_PRE,
    ABGR_2101010_PRE,
    DEPTH_16,
    DEPTH_32,
    DEPTH_24_STENCIL_8,
}
enum PollFDEvent {
    IN,
    PRI,
    OUT,
    ERR,
    HUP,
    NVAL,
}
enum RendererError {
    XLIB_DISPLAY_OPEN,
    BAD_CONSTRAINT,
}
enum ShaderType {
    VERTEX,
    FRAGMENT,
}
enum SnippetHook {
    VERTEX,
    VERTEX_TRANSFORM,
    VERTEX_GLOBALS,
    POINT_SIZE,
    FRAGMENT,
    FRAGMENT_GLOBALS,
    TEXTURE_COORD_TRANSFORM,
    LAYER_FRAGMENT,
    TEXTURE_LOOKUP,
}
enum StereoMode {
    BOTH,
    LEFT,
    RIGHT,
}
enum SubpixelOrder {
    UNKNOWN,
    NONE,
    HORIZONTAL_RGB,
    HORIZONTAL_BGR,
    VERTICAL_RGB,
    VERTICAL_BGR,
}
enum SystemError {
    COGL_SYSTEM_ERROR_UNSUPPORTED,
    COGL_SYSTEM_ERROR_NO_MEMORY,
}
enum TextureComponents {
    A,
    RG,
    RGB,
    RGBA,
    DEPTH,
}
enum TextureError {
    SIZE,
    FORMAT,
    BAD_PARAMETER,
    TYPE,
}
enum TexturePixmapX11Error {
    TEXTURE_PIXMAP_X11_ERROR_X11,
}
enum TexturePixmapX11ReportLevel {
    RAW_RECTANGLES,
    DELTA_RECTANGLES,
    BOUNDING_BOX,
    NON_EMPTY,
}
enum TextureType {
    TODO_2D,
    TODO_3D,
    RECTANGLE,
}
enum VerticesMode {
    POINTS,
    LINES,
    LINE_LOOP,
    LINE_STRIP,
    TRIANGLES,
    TRIANGLE_STRIP,
    TRIANGLE_FAN,
}
enum Winding {
    CLOCKWISE,
    COUNTER_CLOCKWISE,
}
enum WinsysFeature {
    MULTIPLE_ONSCREEN,
    SWAP_THROTTLE,
    VBLANK_COUNTER,
    VBLANK_WAIT,
    TEXTURE_FROM_PIXMAP,
    SWAP_BUFFERS_EVENT,
    SWAP_REGION,
    SWAP_REGION_THROTTLE,
    SWAP_REGION_SYNCHRONIZED,
    BUFFER_AGE,
    SYNC_AND_COMPLETE_EVENT,
    N_FEATURES,
}
enum WinsysID {
    ANY,
    STUB,
    GLX,
    EGL_XLIB,
    EGL_NULL,
    EGL_GDL,
    EGL_WAYLAND,
    EGL_KMS,
    EGL_ANDROID,
    EGL_MIR,
    WGL,
    SDL,
}
enum BufferAccess {
    READ,
    WRITE,
    READ_WRITE,
}
enum BufferBit {
    COLOR,
    DEPTH,
    STENCIL,
}
enum BufferMapHint {
    _RANGE,
}
enum BufferTarget {
    WINDOW_BUFFER,
    OFFSCREEN_BUFFER,
}
enum ColorMask {
    NONE,
    RED,
    GREEN,
    BLUE,
    ALPHA,
    ALL,
}
enum FeatureFlags {
    TEXTURE_RECTANGLE,
    TEXTURE_NPOT,
    TEXTURE_YUV,
    TEXTURE_READ_PIXELS,
    SHADERS_GLSL,
    OFFSCREEN,
    OFFSCREEN_MULTISAMPLE,
    OFFSCREEN_BLIT,
    FOUR_CLIP_PLANES,
    STENCIL_BUFFER,
    VBOS,
    PBOS,
    UNSIGNED_INT_INDICES,
    DEPTH_RANGE,
    TEXTURE_NPOT_BASIC,
    TEXTURE_NPOT_MIPMAP,
    TEXTURE_NPOT_REPEAT,
    POINT_SPRITE,
    TEXTURE_3D,
    SHADERS_ARBFP,
    MAP_BUFFER_FOR_READ,
    MAP_BUFFER_FOR_WRITE,
    ONSCREEN_MULTIPLE,
    DEPTH_TEXTURE,
}
enum ReadPixelsFlags {
    COLOR_BUFFER,
}
enum RendererConstraint {
    USES_X11,
    USES_XLIB,
    USES_EGL,
    SUPPORTS_COGL_GLES2,
}
enum TextureFlags {
    NONE,
    NO_AUTO_MIPMAP,
    NO_SLICING,
    NO_ATLAS,
}
const AFIRST_BIT: number
const A_BIT: number
const BGR_BIT: number
const DEPTH_BIT: number
const PREMULT_BIT: number
const STENCIL_BIT: number
const TEXTURE_MAX_WASTE: number
const VERSION_COMPONENT_BITS: number
const VERSION_MAX_COMPONENT_VALUE: number
function bitmapErrorQuark(): number
function blendStringErrorQuark(): number
function bufferGetSize(buffer: Buffer): number
function bufferGetUpdateHint(buffer: Buffer): BufferUpdateHint
function bufferMap(buffer: Buffer, access: BufferAccess, hints: BufferMapHint): object | null
function bufferMapRange(buffer: Buffer, offset: number, size: number, access: BufferAccess, hints: BufferMapHint): object | null
function bufferSetData(buffer: Buffer, offset: number, data: object | null, size: number): Bool
function bufferSetUpdateHint(buffer: Buffer, hint: BufferUpdateHint): void
function bufferUnmap(buffer: Buffer): void
function colorEqual(v1?: object | null, v2?: object | null): Bool
function colorInitFromHsl(hue: number, saturation: number, luminance: number): /* color */ Color
function debugMatrixEntryPrint(entry: MatrixEntry): void
function debugMatrixPrint(matrix: Matrix): void
function debugObjectForeachType(func: DebugObjectForeachTypeCallback): void
function debugObjectPrintInstances(): void
function errorCopy(error: GLib.Error): GLib.Error
function errorFree(error: GLib.Error): void
function errorMatches(error: GLib.Error, domain: number, code: number): Bool
function eulerEqual(v1?: object | null, v2?: object | null): Bool
function foreachFeature(context: Context, callback: FeatureCallback): void
function framebufferErrorQuark(): number
function getClockTime(context: Context): number
function getDrawFramebuffer(): Framebuffer
function getStaticIdentityQuaternion(): Quaternion
function getStaticZeroQuaternion(): Quaternion
function gles2TextureGetHandle(texture: Texture, handle: number, target: number): Bool
function glibRendererSourceNew(renderer: Renderer, priority: number): GLib.Source
function glibSourceNew(context: Context, priority: number): GLib.Source
function gtypeMatrixGetType(): GObject.Type
function handleGetType(): GObject.Type
function handleRef(handle: Handle): Handle
function handleUnref(handle: Handle): void
function hasFeature(context: Context, feature: FeatureID): Bool
function isAtlasTexture(object?: object | null): Bool
function isAttribute(object?: object | null): Bool
function isAttributeBuffer(object?: object | null): Bool
function isBitmap(object?: object | null): Bool
function isBuffer(object?: object | null): Bool
function isContext(object?: object | null): Bool
function isDisplay(object?: object | null): Bool
function isFrameInfo(object?: object | null): Bool
function isFramebuffer(object?: object | null): Bool
function isGles2Context(object?: object | null): Bool
function isIndexBuffer(object?: object | null): Bool
function isIndices(object?: object | null): Bool
function isMatrixStack(object?: object | null): Bool
function isOnscreen(object?: object | null): Bool
function isOnscreenTemplate(object?: object | null): Bool
function isOutput(object?: object | null): Bool
function isPipeline(object?: object | null): Bool
function isPixelBuffer(object?: object | null): Bool
function isPrimitive(object?: object | null): Bool
function isPrimitiveTexture(object?: object | null): Bool
function isRenderer(object?: object | null): Bool
function isSnippet(object?: object | null): Bool
function isSubTexture(object?: object | null): Bool
function isSwapChain(object?: object | null): Bool
function isTexture(object?: object | null): Bool
function isTexture2d(object?: object | null): Bool
function isTexture2dSliced(object?: object | null): Bool
function isTexture3d(object?: object | null): Bool
function isTexturePixmapX11(object?: object | null): Bool
function isTextureRectangle(object?: object | null): Bool
function kmsDisplayQueueModesReset(display: Display): void
function kmsDisplaySetIgnoreCrtc(display: Display, id: number, ignore: Bool): void
function kmsDisplaySetLayout(display: Display, width: number, height: number, crtcs: KmsCrtc, nCrtcs: number): Bool
function kmsRendererGetGbm(renderer: Renderer): object | null
function kmsRendererGetKmsFd(renderer: Renderer): number
function kmsRendererSetKmsFd(renderer: Renderer, fd: number): void
function matrixEqual(v1?: object | null, v2?: object | null): Bool
function pollRendererDispatch(renderer: Renderer, pollFds: PollFD, nPollFds: number): void
function pollRendererGetInfo(renderer: Renderer, pollFds: PollFD, nPollFds: number, timeout: number): number
function popGles2Context(ctx: Context): void
function pushGles2Context(ctx: Context, gles2Ctx: GLES2Context, readBuffer: Framebuffer, writeBuffer: Framebuffer): Bool
function quaternionEqual(v1?: object | null, v2?: object | null): Bool
function rendererErrorQuark(): number
function textureErrorQuark(): number
function vector3Add(result: number, a: number, b: number): void
function vector3Copy(vector: number): number
function vector3CrossProduct(result: number, u: number, v: number): void
function vector3Distance(a: number, b: number): number
function vector3DivideScalar(vector: number, scalar: number): void
function vector3DotProduct(a: number, b: number): number
function vector3Equal(v1?: object | null, v2?: object | null): Bool
function vector3EqualWithEpsilon(vector0: number, vector1: number, epsilon: number): Bool
function vector3Free(vector: number): void
function vector3Init(vector: number, x: number, y: number, z: number): void
function vector3InitZero(vector: number): void
function vector3Invert(vector: number): void
function vector3Magnitude(vector: number): number
function vector3MultiplyScalar(vector: number, scalar: number): void
function vector3Normalize(vector: number): void
function vector3Subtract(result: number, a: number, b: number): void
function waylandDisplaySetCompositorDisplay(display: Display, waylandDisplay?: object | null): void
function waylandOnscreenGetShellSurface(onscreen: Onscreen): object | null
function waylandOnscreenGetSurface(onscreen: Onscreen): object | null
function waylandOnscreenResize(onscreen: Onscreen, width: number, height: number, offsetX: number, offsetY: number): void
function waylandOnscreenSetForeignSurface(onscreen: Onscreen, surface?: object | null): void
function waylandRendererGetDisplay(renderer: Renderer): object | null
function waylandRendererSetEventDispatchEnabled(renderer: Renderer, enable: Bool): void
function waylandRendererSetForeignDisplay(renderer: Renderer, display?: object | null): void
function waylandTextureSetRegionFromShmBuffer(texture: Texture, srcX: number, srcY: number, width: number, height: number, shmBuffer: object | null, dstX: number, dstY: number, level: number): Bool
function x11OnscreenGetVisualXid(onscreen: Onscreen): number
function x11OnscreenGetWindowXid(onscreen: Onscreen): number
interface DebugObjectForeachTypeCallback {
    (info: DebugObjectTypeInfo): void
}
interface FeatureCallback {
    (feature: FeatureID): void
}
interface FenceCallback {
    (fence: Fence): void
}
interface FrameCallback {
    (onscreen: Onscreen, event: FrameEvent, info: FrameInfo): void
}
interface FuncPtr {
    (): void
}
interface MetaTextureCallback {
    (subTexture: Texture, subTextureCoords: number, metaCoords: number): void
}
interface OnscreenDirtyCallback {
    (onscreen: Onscreen, info: OnscreenDirtyInfo): void
}
interface OnscreenResizeCallback {
    (onscreen: Onscreen, width: number, height: number): void
}
interface OnscreenX11MaskCallback {
    (onscreen: Onscreen, eventMask: number): void
}
interface OutputCallback {
    (output: Output): void
}
interface PipelineLayerCallback {
    (pipeline: Pipeline, layerIndex: number): Bool
}
interface PrimitiveAttributeCallback {
    (primitive: Primitive, attribute: Attribute): Bool
}
interface SwapBuffersNotify {
    (framebuffer: Framebuffer): void
}
class Framebuffer {
    /* Methods of Cogl-2.0.Cogl.Framebuffer */
    allocate(): Bool
    cancelFenceCallback(closure: FenceClosure): void
    clear(buffers: number, color: Color): void
    clear4f(buffers: number, red: number, green: number, blue: number, alpha: number): void
    discardBuffers(buffers: number): void
    drawAttributes(pipeline: Pipeline, mode: VerticesMode, firstVertex: number, nVertices: number, attributes: Attribute, nAttributes: number): void
    drawIndexedAttributes(pipeline: Pipeline, mode: VerticesMode, firstVertex: number, nVertices: number, indices: Indices, attributes: Attribute, nAttributes: number): void
    drawMultitexturedRectangle(pipeline: Pipeline, x1: number, y1: number, x2: number, y2: number, texCoords: number[], texCoordsLen: number): void
    drawPrimitive(pipeline: Pipeline, primitive: Primitive): void
    drawRectangle(pipeline: Pipeline, x1: number, y1: number, x2: number, y2: number): void
    drawRectangles(pipeline: Pipeline, coordinates: number[], nRectangles: number): void
    drawTexturedRectangle(pipeline: Pipeline, x1: number, y1: number, x2: number, y2: number, s1: number, t1: number, s2: number, t2: number): void
    drawTexturedRectangles(pipeline: Pipeline, coordinates: number[], nRectangles: number): void
    finish(): void
    frustum(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): void
    getAlphaBits(): number
    getBlueBits(): number
    getColorMask(): ColorMask
    getContext(): Context
    getDepthBits(): number
    getDepthTexture(): Texture
    getDepthTextureEnabled(): Bool
    getDepthWriteEnabled(): Bool
    getDitherEnabled(): Bool
    getGreenBits(): number
    getHeight(): number
    getIsStereo(): Bool
    getModelviewMatrix(): /* matrix */ Matrix
    getProjectionMatrix(): /* matrix */ Matrix
    getRedBits(): number
    getSamplesPerPixel(): number
    getStereoMode(): StereoMode
    getViewport4fv(): /* viewport */ number[]
    getViewportHeight(): number
    getViewportWidth(): number
    getViewportX(): number
    getViewportY(): number
    getWidth(): number
    identityMatrix(): void
    orthographic(x1: number, y1: number, x2: number, y2: number, near: number, far: number): void
    perspective(fovY: number, aspect: number, zNear: number, zFar: number): void
    popClip(): void
    popMatrix(): void
    pushMatrix(): void
    pushPrimitiveClip(primitive: Primitive, boundsX1: number, boundsY1: number, boundsX2: number, boundsY2: number): void
    pushRectangleClip(x1: number, y1: number, x2: number, y2: number): void
    pushScissorClip(x: number, y: number, width: number, height: number): void
    readPixels(x: number, y: number, width: number, height: number, format: PixelFormat, pixels: number): Bool
    readPixelsIntoBitmap(x: number, y: number, source: ReadPixelsFlags, bitmap: Bitmap): Bool
    resolveSamples(): void
    resolveSamplesRegion(x: number, y: number, width: number, height: number): void
    rotate(angle: number, x: number, y: number, z: number): void
    rotateEuler(euler: Euler): void
    rotateQuaternion(quaternion: Quaternion): void
    scale(x: number, y: number, z: number): void
    setColorMask(colorMask: ColorMask): void
    setDepthTextureEnabled(enabled: Bool): void
    setDepthWriteEnabled(depthWriteEnabled: Bool): void
    setDitherEnabled(ditherEnabled: Bool): void
    setModelviewMatrix(matrix: Matrix): void
    setProjectionMatrix(matrix: Matrix): void
    setSamplesPerPixel(samplesPerPixel: number): void
    setStereoMode(stereoMode: StereoMode): void
    setViewport(x: number, y: number, width: number, height: number): void
    transform(matrix: Matrix): void
    translate(x: number, y: number, z: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): number
}
class Texture {
    /* Methods of Cogl-2.0.Cogl.Texture */
    allocate(): Bool
    getComponents(): TextureComponents
    getData(format: PixelFormat, rowstride: number, data: number): number
    getGlTexture(): [ /* returnType */ Bool, /* outGlHandle */ number | null, /* outGlTarget */ number | null ]
    getHeight(): number
    getMaxWaste(): number
    getPremultiplied(): Bool
    getWidth(): number
    isSliced(): Bool
    setComponents(components: TextureComponents): void
    setData(format: PixelFormat, rowstride: number, data: number, level: number): Bool
    setPremultiplied(premultiplied: Bool): void
    setRegion(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool
    setRegionFromBitmap(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, bitmap: Bitmap): Bool
    static name: string
}
class AtlasTexture {
    static name: string
    /* Static methods and pseudo-constructors */
    static newFromBitmap(bmp: Bitmap): AtlasTexture
    static newFromData(ctx: Context, width: number, height: number, format: PixelFormat, rowstride: number, data: number): AtlasTexture
    static newFromFile(ctx: Context, filename: string): AtlasTexture
    static newWithSize(ctx: Context, width: number, height: number): AtlasTexture
}
class Attribute {
    /* Methods of Cogl-2.0.Cogl.Attribute */
    getBuffer(): AttributeBuffer
    getNormalized(): Bool
    setBuffer(attributeBuffer: AttributeBuffer): void
    setNormalized(normalized: Bool): void
    static name: string
    static new(attributeBuffer: AttributeBuffer, name: string, stride: number, offset: number, components: number, type: AttributeType): Attribute
    constructor(attributeBuffer: AttributeBuffer, name: string, stride: number, offset: number, components: number, type: AttributeType)
    /* Static methods and pseudo-constructors */
    static new(attributeBuffer: AttributeBuffer, name: string, stride: number, offset: number, components: number, type: AttributeType): Attribute
    static newConst1f(context: Context, name: string, value: number): Attribute
    static newConst2f(context: Context, name: string, component0: number, component1: number): Attribute
    static newConst2fv(context: Context, name: string, value: number): Attribute
    static newConst2x2fv(context: Context, name: string, matrix2x2: number, transpose: Bool): Attribute
    static newConst3f(context: Context, name: string, component0: number, component1: number, component2: number): Attribute
    static newConst3fv(context: Context, name: string, value: number): Attribute
    static newConst3x3fv(context: Context, name: string, matrix3x3: number, transpose: Bool): Attribute
    static newConst4f(context: Context, name: string, component0: number, component1: number, component2: number, component3: number): Attribute
    static newConst4fv(context: Context, name: string, value: number): Attribute
    static newConst4x4fv(context: Context, name: string, matrix4x4: number, transpose: Bool): Attribute
}
class AttributeBuffer {
    static name: string
    /* Static methods and pseudo-constructors */
    static newWithSize(context: Context, bytes: number): AttributeBuffer
}
class Bitmap {
    /* Methods of Cogl-2.0.Cogl.Bitmap */
    getBuffer(): PixelBuffer
    getFormat(): PixelFormat
    getHeight(): number
    getRowstride(): number
    getWidth(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static newForData(context: Context, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bitmap
    static newFromBuffer(buffer: Buffer, format: PixelFormat, width: number, height: number, rowstride: number, offset: number): Bitmap
    static newFromFile(filename: string): Bitmap
    static newWithSize(context: Context, width: number, height: number, format: PixelFormat): Bitmap
    static getSizeFromFile(filename: string): [ /* returnType */ Bool, /* width */ number, /* height */ number ]
}
class Context {
    /* Methods of Cogl-2.0.Cogl.Context */
    getDisplay(): Display
    getRenderer(): Renderer
    static name: string
    static new(display?: Display | null): Context
    constructor(display?: Display | null)
    /* Static methods and pseudo-constructors */
    static new(display?: Display | null): Context
}
class Display {
    /* Methods of Cogl-2.0.Cogl.Display */
    getRenderer(): Renderer
    setOnscreenTemplate(onscreenTemplate: OnscreenTemplate): void
    setup(): Bool
    static name: string
    static new(renderer: Renderer, onscreenTemplate: OnscreenTemplate): Display
    constructor(renderer: Renderer, onscreenTemplate: OnscreenTemplate)
    /* Static methods and pseudo-constructors */
    static new(renderer: Renderer, onscreenTemplate: OnscreenTemplate): Display
}
class Fixed {
    static name: string
}
class FrameInfo {
    /* Methods of Cogl-2.0.Cogl.FrameInfo */
    getFrameCounter(): number
    getOutput(): Output
    getPresentationTime(): number
    getRefreshRate(): number
    static name: string
}
class GLES2Context {
    /* Methods of Cogl-2.0.Cogl.GLES2Context */
    getVtable(): GLES2Vtable
    static name: string
    static new(ctx: Context): GLES2Context
    constructor(ctx: Context)
    /* Static methods and pseudo-constructors */
    static new(ctx: Context): GLES2Context
}
class IndexBuffer {
    static name: string
    static new(context: Context, bytes: number): IndexBuffer
    constructor(context: Context, bytes: number)
    /* Static methods and pseudo-constructors */
    static new(context: Context, bytes: number): IndexBuffer
}
class Indices {
    /* Methods of Cogl-2.0.Cogl.Indices */
    getOffset(): number
    getType(): IndicesType
    setOffset(offset: number): void
    static name: string
    static new(context: Context, type: IndicesType, indicesData: object | null, nIndices: number): Indices
    constructor(context: Context, type: IndicesType, indicesData: object | null, nIndices: number)
    /* Static methods and pseudo-constructors */
    static new(context: Context, type: IndicesType, indicesData: object | null, nIndices: number): Indices
    static newForBuffer(type: IndicesType, buffer: IndexBuffer, offset: number): Indices
}
class MatrixStack {
    /* Methods of Cogl-2.0.Cogl.MatrixStack */
    frustum(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): void
    get(): [ /* returnType */ Matrix, /* matrix */ Matrix ]
    getEntry(): MatrixEntry
    getInverse(): [ /* returnType */ Bool, /* inverse */ Matrix ]
    loadIdentity(): void
    multiply(matrix: Matrix): void
    orthographic(x1: number, y1: number, x2: number, y2: number, near: number, far: number): void
    perspective(fovY: number, aspect: number, zNear: number, zFar: number): void
    pop(): void
    push(): void
    rotate(angle: number, x: number, y: number, z: number): void
    rotateEuler(euler: Euler): void
    rotateQuaternion(quaternion: Quaternion): void
    scale(x: number, y: number, z: number): void
    set(matrix: Matrix): void
    translate(x: number, y: number, z: number): void
    static name: string
    static new(ctx: Context): MatrixStack
    constructor(ctx: Context)
    /* Static methods and pseudo-constructors */
    static new(ctx: Context): MatrixStack
}
class Object {
    static name: string
    /* Static methods and pseudo-constructors */
    static valueGetObject(value: any): object | null
    static valueSetObject(value: any, object?: object | null): void
}
class Onscreen {
    /* Methods of Cogl-2.0.Cogl.Onscreen */
    addDirtyCallback(callback: OnscreenDirtyCallback, destroy?: UserDataDestroyCallback | null): OnscreenDirtyClosure
    addFrameCallback(callback: FrameCallback, destroy?: UserDataDestroyCallback | null): FrameClosure
    addResizeCallback(callback: OnscreenResizeCallback, destroy?: UserDataDestroyCallback | null): OnscreenResizeClosure
    addSwapBuffersCallback(callback: SwapBuffersNotify): number
    getBufferAge(): number
    getFrameCounter(): number
    getResizable(): Bool
    hide(): void
    removeDirtyCallback(closure: OnscreenDirtyClosure): void
    removeFrameCallback(closure: FrameClosure): void
    removeResizeCallback(closure: OnscreenResizeClosure): void
    removeSwapBuffersCallback(id: number): void
    setResizable(resizable: Bool): void
    setSwapThrottled(throttled: Bool): void
    show(): void
    swapBuffers(): void
    swapBuffersWithDamage(rectangles: number, nRectangles: number): void
    swapRegion(rectangles: number, nRectangles: number): void
    /* Methods of Cogl-2.0.Cogl.Framebuffer */
    allocate(): Bool
    cancelFenceCallback(closure: FenceClosure): void
    clear(buffers: number, color: Color): void
    clear4f(buffers: number, red: number, green: number, blue: number, alpha: number): void
    discardBuffers(buffers: number): void
    drawAttributes(pipeline: Pipeline, mode: VerticesMode, firstVertex: number, nVertices: number, attributes: Attribute, nAttributes: number): void
    drawIndexedAttributes(pipeline: Pipeline, mode: VerticesMode, firstVertex: number, nVertices: number, indices: Indices, attributes: Attribute, nAttributes: number): void
    drawMultitexturedRectangle(pipeline: Pipeline, x1: number, y1: number, x2: number, y2: number, texCoords: number[], texCoordsLen: number): void
    drawPrimitive(pipeline: Pipeline, primitive: Primitive): void
    drawRectangle(pipeline: Pipeline, x1: number, y1: number, x2: number, y2: number): void
    drawRectangles(pipeline: Pipeline, coordinates: number[], nRectangles: number): void
    drawTexturedRectangle(pipeline: Pipeline, x1: number, y1: number, x2: number, y2: number, s1: number, t1: number, s2: number, t2: number): void
    drawTexturedRectangles(pipeline: Pipeline, coordinates: number[], nRectangles: number): void
    finish(): void
    frustum(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): void
    getAlphaBits(): number
    getBlueBits(): number
    getColorMask(): ColorMask
    getContext(): Context
    getDepthBits(): number
    getDepthTexture(): Texture
    getDepthTextureEnabled(): Bool
    getDepthWriteEnabled(): Bool
    getDitherEnabled(): Bool
    getGreenBits(): number
    getHeight(): number
    getIsStereo(): Bool
    getModelviewMatrix(): /* matrix */ Matrix
    getProjectionMatrix(): /* matrix */ Matrix
    getRedBits(): number
    getSamplesPerPixel(): number
    getStereoMode(): StereoMode
    getViewport4fv(): /* viewport */ number[]
    getViewportHeight(): number
    getViewportWidth(): number
    getViewportX(): number
    getViewportY(): number
    getWidth(): number
    identityMatrix(): void
    orthographic(x1: number, y1: number, x2: number, y2: number, near: number, far: number): void
    perspective(fovY: number, aspect: number, zNear: number, zFar: number): void
    popClip(): void
    popMatrix(): void
    pushMatrix(): void
    pushPrimitiveClip(primitive: Primitive, boundsX1: number, boundsY1: number, boundsX2: number, boundsY2: number): void
    pushRectangleClip(x1: number, y1: number, x2: number, y2: number): void
    pushScissorClip(x: number, y: number, width: number, height: number): void
    readPixels(x: number, y: number, width: number, height: number, format: PixelFormat, pixels: number): Bool
    readPixelsIntoBitmap(x: number, y: number, source: ReadPixelsFlags, bitmap: Bitmap): Bool
    resolveSamples(): void
    resolveSamplesRegion(x: number, y: number, width: number, height: number): void
    rotate(angle: number, x: number, y: number, z: number): void
    rotateEuler(euler: Euler): void
    rotateQuaternion(quaternion: Quaternion): void
    scale(x: number, y: number, z: number): void
    setColorMask(colorMask: ColorMask): void
    setDepthTextureEnabled(enabled: Bool): void
    setDepthWriteEnabled(depthWriteEnabled: Bool): void
    setDitherEnabled(ditherEnabled: Bool): void
    setModelviewMatrix(matrix: Matrix): void
    setProjectionMatrix(matrix: Matrix): void
    setSamplesPerPixel(samplesPerPixel: number): void
    setStereoMode(stereoMode: StereoMode): void
    setViewport(x: number, y: number, width: number, height: number): void
    transform(matrix: Matrix): void
    translate(x: number, y: number, z: number): void
    static name: string
    static new(context: Context, width: number, height: number): Onscreen
    constructor(context: Context, width: number, height: number)
    /* Static methods and pseudo-constructors */
    static new(context: Context, width: number, height: number): Onscreen
    static errorQuark(): number
}
class OnscreenTemplate {
    /* Methods of Cogl-2.0.Cogl.OnscreenTemplate */
    setSamplesPerPixel(n: number): void
    setStereoEnabled(enabled: Bool): void
    setSwapThrottled(throttled: Bool): void
    static name: string
    static new(swapChain: SwapChain): OnscreenTemplate
    constructor(swapChain: SwapChain)
    /* Static methods and pseudo-constructors */
    static new(swapChain: SwapChain): OnscreenTemplate
}
class Output {
    /* Methods of Cogl-2.0.Cogl.Output */
    getHeight(): number
    getMmHeight(): number
    getMmWidth(): number
    getRefreshRate(): number
    getSubpixelOrder(): SubpixelOrder
    getWidth(): number
    getX(): number
    getY(): number
    static name: string
}
class Pipeline {
    /* Methods of Cogl-2.0.Cogl.Pipeline */
    addLayerSnippet(layer: number, snippet: Snippet): void
    addSnippet(snippet: Snippet): void
    copy(): Pipeline
    foreachLayer(callback: PipelineLayerCallback): void
    getAlphaTestFunction(): PipelineAlphaFunc
    getAlphaTestReference(): number
    getAmbient(ambient: Color): void
    getColor(): /* color */ Color
    getColorMask(): ColorMask
    getCullFaceMode(): PipelineCullFaceMode
    getDepthState(): /* stateOut */ DepthState
    getDiffuse(diffuse: Color): void
    getEmission(emission: Color): void
    getFrontFaceWinding(): Winding
    getLayerMagFilter(layerIndex: number): PipelineFilter
    getLayerMinFilter(layerIndex: number): PipelineFilter
    getLayerPointSpriteCoordsEnabled(layerIndex: number): Bool
    getLayerTexture(layerIndex: number): Texture
    getLayerWrapModeP(layerIndex: number): PipelineWrapMode
    getLayerWrapModeS(layerIndex: number): PipelineWrapMode
    getLayerWrapModeT(layerIndex: number): PipelineWrapMode
    getNLayers(): number
    getPerVertexPointSize(): Bool
    getPointSize(): number
    getShininess(): number
    getSpecular(specular: Color): void
    getUniformLocation(uniformName: string): number
    getUserProgram(): Handle
    removeLayer(layerIndex: number): void
    setAlphaTestFunction(alphaFunc: PipelineAlphaFunc, alphaReference: number): void
    setAmbient(ambient: Color): void
    setAmbientAndDiffuse(color: Color): void
    setBlend(blendString: string): Bool
    setBlendConstant(constantColor: Color): void
    setColor(color: Color): void
    setColor4f(red: number, green: number, blue: number, alpha: number): void
    setColor4ub(red: number, green: number, blue: number, alpha: number): void
    setColorMask(colorMask: ColorMask): void
    setCullFaceMode(cullFaceMode: PipelineCullFaceMode): void
    setDepthState(state: DepthState): Bool
    setDiffuse(diffuse: Color): void
    setEmission(emission: Color): void
    setFrontFaceWinding(frontWinding: Winding): void
    setLayerCombine(layerIndex: number, blendString: string): Bool
    setLayerCombineConstant(layerIndex: number, constant: Color): void
    setLayerFilters(layerIndex: number, minFilter: PipelineFilter, magFilter: PipelineFilter): void
    setLayerMatrix(layerIndex: number, matrix: Matrix): void
    setLayerNullTexture(layerIndex: number, textureType: TextureType): void
    setLayerPointSpriteCoordsEnabled(layerIndex: number, enable: Bool): Bool
    setLayerTexture(layerIndex: number, texture: Texture): void
    setLayerWrapMode(layerIndex: number, mode: PipelineWrapMode): void
    setLayerWrapModeP(layerIndex: number, mode: PipelineWrapMode): void
    setLayerWrapModeS(layerIndex: number, mode: PipelineWrapMode): void
    setLayerWrapModeT(layerIndex: number, mode: PipelineWrapMode): void
    setPerVertexPointSize(enable: Bool): Bool
    setPointSize(pointSize: number): void
    setShininess(shininess: number): void
    setSpecular(specular: Color): void
    setUniform1f(uniformLocation: number, value: number): void
    setUniform1i(uniformLocation: number, value: number): void
    setUniformFloat(uniformLocation: number, nComponents: number, count: number, value: number): void
    setUniformInt(uniformLocation: number, nComponents: number, count: number, value: number): void
    setUniformMatrix(uniformLocation: number, dimensions: number, count: number, transpose: Bool, value: number): void
    setUserProgram(program: Handle): void
    static name: string
    static new(context: Context): Pipeline
    constructor(context: Context)
    /* Static methods and pseudo-constructors */
    static new(context: Context): Pipeline
}
class PixelBuffer {
    static name: string
    static new(context: Context, size: number, data?: object | null): PixelBuffer
    constructor(context: Context, size: number, data?: object | null)
    /* Static methods and pseudo-constructors */
    static new(context: Context, size: number, data?: object | null): PixelBuffer
}
class Primitive {
    /* Methods of Cogl-2.0.Cogl.Primitive */
    copy(): Primitive
    draw(framebuffer: Framebuffer, pipeline: Pipeline): void
    foreachAttribute(callback: PrimitiveAttributeCallback): void
    getFirstVertex(): number
    getIndices(): Indices
    getMode(): VerticesMode
    getNVertices(): number
    setAttributes(attributes: Attribute, nAttributes: number): void
    setFirstVertex(firstVertex: number): void
    setIndices(indices: Indices, nIndices: number): void
    setMode(mode: VerticesMode): void
    setNVertices(nVertices: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newP2(context: Context, mode: VerticesMode, data: VertexP2[]): Primitive
    static newP2c4(context: Context, mode: VerticesMode, data: VertexP2C4[]): Primitive
    static newP2t2(context: Context, mode: VerticesMode, data: VertexP2T2[]): Primitive
    static newP2t2c4(context: Context, mode: VerticesMode, data: VertexP2T2C4[]): Primitive
    static newP3(context: Context, mode: VerticesMode, data: VertexP3[]): Primitive
    static newP3c4(context: Context, mode: VerticesMode, data: VertexP3C4[]): Primitive
    static newP3t2(context: Context, mode: VerticesMode, data: VertexP3T2[]): Primitive
    static newP3t2c4(context: Context, mode: VerticesMode, data: VertexP3T2C4[]): Primitive
    static newWithAttributes(mode: VerticesMode, nVertices: number, attributes: Attribute, nAttributes: number): Primitive
    static textureSetAutoMipmap(primitiveTexture: PrimitiveTexture, value: Bool): void
}
class Renderer {
    /* Methods of Cogl-2.0.Cogl.Renderer */
    addConstraint(constraint: RendererConstraint): void
    checkOnscreenTemplate(onscreenTemplate: OnscreenTemplate): Bool
    connect(): Bool
    foreachOutput(callback: OutputCallback): void
    getDriver(): Driver
    getNFragmentTextureUnits(): number
    getWinsysId(): WinsysID
    removeConstraint(constraint: RendererConstraint): void
    setDriver(driver: Driver): void
    setWinsysId(winsysId: WinsysID): void
    static name: string
    static new(): Renderer
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Renderer
}
class Snippet {
    /* Methods of Cogl-2.0.Cogl.Snippet */
    getDeclarations(): string
    getHook(): SnippetHook
    getPost(): string
    getPre(): string
    getReplace(): string
    setDeclarations(declarations: string): void
    setPost(post: string): void
    setPre(pre: string): void
    setReplace(replace: string): void
    static name: string
    static new(hook: SnippetHook, declarations: string, post: string): Snippet
    constructor(hook: SnippetHook, declarations: string, post: string)
    /* Static methods and pseudo-constructors */
    static new(hook: SnippetHook, declarations: string, post: string): Snippet
}
class SubTexture {
    /* Methods of Cogl-2.0.Cogl.SubTexture */
    getParent(): Texture
    static name: string
    static new(ctx: Context, parentTexture: Texture, subX: number, subY: number, subWidth: number, subHeight: number): SubTexture
    constructor(ctx: Context, parentTexture: Texture, subX: number, subY: number, subWidth: number, subHeight: number)
    /* Static methods and pseudo-constructors */
    static new(ctx: Context, parentTexture: Texture, subX: number, subY: number, subWidth: number, subHeight: number): SubTexture
}
class SwapChain {
    /* Methods of Cogl-2.0.Cogl.SwapChain */
    setHasAlpha(hasAlpha: Bool): void
    setLength(length: number): void
    static name: string
    static new(): SwapChain
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SwapChain
}
class Texture2D {
    /* Methods of Cogl-2.0.Cogl.Texture */
    allocate(): Bool
    getComponents(): TextureComponents
    getData(format: PixelFormat, rowstride: number, data: number): number
    getGlTexture(): [ /* returnType */ Bool, /* outGlHandle */ number | null, /* outGlTarget */ number | null ]
    getHeight(): number
    getMaxWaste(): number
    getPremultiplied(): Bool
    getWidth(): number
    isSliced(): Bool
    setComponents(components: TextureComponents): void
    setData(format: PixelFormat, rowstride: number, data: number, level: number): Bool
    setPremultiplied(premultiplied: Bool): void
    setRegion(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool
    setRegionFromBitmap(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, bitmap: Bitmap): Bool
    static name: string
    /* Static methods and pseudo-constructors */
    static glNewFromForeign(ctx: Context, glHandle: number, width: number, height: number, format: PixelFormat): Texture2D
    static newFromBitmap(bitmap: Bitmap): Texture2D
    static newFromData(ctx: Context, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Texture2D
    static newFromFile(ctx: Context, filename: string): Texture2D
    static newWithSize(ctx: Context, width: number, height: number): Texture2D
}
class Texture2DSliced {
    /* Methods of Cogl-2.0.Cogl.Texture */
    allocate(): Bool
    getComponents(): TextureComponents
    getData(format: PixelFormat, rowstride: number, data: number): number
    getGlTexture(): [ /* returnType */ Bool, /* outGlHandle */ number | null, /* outGlTarget */ number | null ]
    getHeight(): number
    getMaxWaste(): number
    getPremultiplied(): Bool
    getWidth(): number
    isSliced(): Bool
    setComponents(components: TextureComponents): void
    setData(format: PixelFormat, rowstride: number, data: number, level: number): Bool
    setPremultiplied(premultiplied: Bool): void
    setRegion(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool
    setRegionFromBitmap(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, bitmap: Bitmap): Bool
    static name: string
    /* Static methods and pseudo-constructors */
    static newFromBitmap(bmp: Bitmap, maxWaste: number): Texture2DSliced
    static newFromData(ctx: Context, width: number, height: number, maxWaste: number, format: PixelFormat, rowstride: number, data: number): Texture2DSliced
    static newFromFile(ctx: Context, filename: string, maxWaste: number): Texture2DSliced
    static newWithSize(ctx: Context, width: number, height: number, maxWaste: number): Texture2DSliced
}
class Texture3D {
    /* Methods of Cogl-2.0.Cogl.Texture */
    allocate(): Bool
    getComponents(): TextureComponents
    getData(format: PixelFormat, rowstride: number, data: number): number
    getGlTexture(): [ /* returnType */ Bool, /* outGlHandle */ number | null, /* outGlTarget */ number | null ]
    getHeight(): number
    getMaxWaste(): number
    getPremultiplied(): Bool
    getWidth(): number
    isSliced(): Bool
    setComponents(components: TextureComponents): void
    setData(format: PixelFormat, rowstride: number, data: number, level: number): Bool
    setPremultiplied(premultiplied: Bool): void
    setRegion(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool
    setRegionFromBitmap(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, bitmap: Bitmap): Bool
    static name: string
    /* Static methods and pseudo-constructors */
    static newFromBitmap(bitmap: Bitmap, height: number, depth: number): Texture3D
    static newFromData(context: Context, width: number, height: number, depth: number, format: PixelFormat, rowstride: number, imageStride: number, data: number): Texture3D
    static newWithSize(context: Context, width: number, height: number, depth: number): Texture3D
}
class TexturePixmapX11 {
    /* Methods of Cogl-2.0.Cogl.TexturePixmapX11 */
    isUsingTfpExtension(): Bool
    setDamageObject(damage: number, reportLevel: TexturePixmapX11ReportLevel): void
    updateArea(x: number, y: number, width: number, height: number): void
    static name: string
    static new(context: Context, pixmap: number, automaticUpdates: Bool): TexturePixmapX11
    constructor(context: Context, pixmap: number, automaticUpdates: Bool)
    /* Static methods and pseudo-constructors */
    static new(context: Context, pixmap: number, automaticUpdates: Bool): TexturePixmapX11
    static newLeft(context: Context, pixmap: number, automaticUpdates: Bool): TexturePixmapX11
    static errorQuark(): number
}
class TextureRectangle {
    /* Methods of Cogl-2.0.Cogl.Texture */
    allocate(): Bool
    getComponents(): TextureComponents
    getData(format: PixelFormat, rowstride: number, data: number): number
    getGlTexture(): [ /* returnType */ Bool, /* outGlHandle */ number | null, /* outGlTarget */ number | null ]
    getHeight(): number
    getMaxWaste(): number
    getPremultiplied(): Bool
    getWidth(): number
    isSliced(): Bool
    setComponents(components: TextureComponents): void
    setData(format: PixelFormat, rowstride: number, data: number, level: number): Bool
    setPremultiplied(premultiplied: Bool): void
    setRegion(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool
    setRegionFromBitmap(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, bitmap: Bitmap): Bool
    static name: string
    /* Static methods and pseudo-constructors */
    static newFromBitmap(bitmap: Bitmap): TextureRectangle
    static newFromForeign(ctx: Context, glHandle: number, width: number, height: number, format: PixelFormat): TextureRectangle
    static newWithSize(ctx: Context, width: number, height: number): TextureRectangle
}
class Color {
    /* Methods of Cogl-2.0.Cogl.Color */
    copy(): Color
    free(): void
    getAlpha(): number
    getAlphaByte(): number
    getAlphaFloat(): number
    getBlue(): number
    getBlueByte(): number
    getBlueFloat(): number
    getGreen(): number
    getGreenByte(): number
    getGreenFloat(): number
    getRed(): number
    getRedByte(): number
    getRedFloat(): number
    initFrom4f(red: number, green: number, blue: number, alpha: number): void
    initFrom4fv(colorArray: number): void
    initFrom4ub(red: number, green: number, blue: number, alpha: number): void
    premultiply(): void
    setAlpha(alpha: number): void
    setAlphaByte(alpha: number): void
    setAlphaFloat(alpha: number): void
    setBlue(blue: number): void
    setBlueByte(blue: number): void
    setBlueFloat(blue: number): void
    setFrom4f(red: number, green: number, blue: number, alpha: number): void
    setFrom4ub(red: number, green: number, blue: number, alpha: number): void
    setGreen(green: number): void
    setGreenByte(green: number): void
    setGreenFloat(green: number): void
    setRed(red: number): void
    setRedByte(red: number): void
    setRedFloat(red: number): void
    toHsl(): [ /* hue */ number, /* saturation */ number, /* luminance */ number ]
    unpremultiply(): void
    static name: string
    static new(): Color
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Color
    static equal(v1?: object | null, v2?: object | null): Bool
    static initFromHsl(hue: number, saturation: number, luminance: number): /* color */ Color
}
class DebugObjectTypeInfo {
    /* Fields of Cogl-2.0.Cogl.DebugObjectTypeInfo */
    readonly name: string
    readonly instanceCount: number
    static name: string
}
class DepthState {
    /* Methods of Cogl-2.0.Cogl.DepthState */
    getRange(nearVal: number, farVal: number): void
    getTestEnabled(): Bool
    getTestFunction(): DepthTestFunction
    getWriteEnabled(): Bool
    init(): void
    setRange(nearVal: number, farVal: number): void
    setTestEnabled(enable: Bool): void
    setTestFunction(function_: DepthTestFunction): void
    setWriteEnabled(enable: Bool): void
    static name: string
}
class Euler {
    /* Fields of Cogl-2.0.Cogl.Euler */
    readonly heading: number
    readonly pitch: number
    readonly roll: number
    /* Methods of Cogl-2.0.Cogl.Euler */
    copy(): Euler
    free(): void
    init(heading: number, pitch: number, roll: number): void
    initFromMatrix(matrix: Matrix): void
    initFromQuaternion(quaternion: Quaternion): void
    static name: string
    /* Static methods and pseudo-constructors */
    static equal(v1?: object | null, v2?: object | null): Bool
}
class Fence {
    static name: string
}
class FenceClosure {
    /* Methods of Cogl-2.0.Cogl.FenceClosure */
    getUserData(): object | null
    static name: string
}
class FrameClosure {
    static name: string
}
class GLES2Vtable {
    /* Fields of Cogl-2.0.Cogl.GLES2Vtable */
    readonly glBindTexture: (target: GL.enum_, texture: GL.uint) => void
    readonly glBlendFunc: (sfactor: GL.enum_, dfactor: GL.enum_) => void
    readonly glClear: (mask: GL.bitfield) => void
    readonly glClearColor: (red: GL.clampf, green: GL.clampf, blue: GL.clampf, alpha: GL.clampf) => void
    readonly glClearStencil: (s: GL.int) => void
    readonly glColorMask: (red: GL.boolean_, green: GL.boolean_, blue: GL.boolean_, alpha: GL.boolean_) => void
    readonly glCopyTexSubImage2D: (target: GL.enum_, level: GL.int, xoffset: GL.int, yoffset: GL.int, x: GL.int, y: GL.int, width: GL.sizei, height: GL.sizei) => void
    readonly glDeleteTextures: (n: GL.sizei, textures: GL.uint) => void
    readonly glDepthFunc: (func: GL.enum_) => void
    readonly glDepthMask: (flag: GL.boolean_) => void
    readonly glDisable: (cap: GL.enum_) => void
    readonly glDrawArrays: (mode: GL.enum_, first: GL.int, count: GL.sizei) => void
    readonly glDrawElements: (mode: GL.enum_, count: GL.sizei, type: GL.enum_, indices: GL.void_) => void
    readonly glEnable: (cap: GL.enum_) => void
    readonly glFinish: () => void
    readonly glFlush: () => void
    readonly glFrontFace: (mode: GL.enum_) => void
    readonly glCullFace: (mode: GL.enum_) => void
    readonly glGenTextures: (n: GL.sizei, textures: GL.uint) => void
    readonly glGetIntegerv: (pname: GL.enum_, params: GL.int) => void
    readonly glGetBooleanv: (pname: GL.enum_, params: GL.boolean_) => void
    readonly glGetFloatv: (pname: GL.enum_, params: GL.float) => void
    readonly glHint: (target: GL.enum_, mode: GL.enum_) => void
    readonly glPixelStorei: (pname: GL.enum_, param: GL.int) => void
    readonly glReadPixels: (x: GL.int, y: GL.int, width: GL.sizei, height: GL.sizei, format: GL.enum_, type: GL.enum_, pixels: GL.void_) => void
    readonly glScissor: (x: GL.int, y: GL.int, width: GL.sizei, height: GL.sizei) => void
    readonly glStencilFunc: (func: GL.enum_, ref: GL.int, mask: GL.uint) => void
    readonly glStencilMask: (mask: GL.uint) => void
    readonly glStencilOp: (fail: GL.enum_, zfail: GL.enum_, zpass: GL.enum_) => void
    readonly glTexImage2D: (target: GL.enum_, level: GL.int, internalformat: GL.int, width: GL.sizei, height: GL.sizei, border: GL.int, format: GL.enum_, type: GL.enum_, pixels: GL.void_) => void
    readonly glTexParameterf: (target: GL.enum_, pname: GL.enum_, param: GL.float) => void
    readonly glTexParameterfv: (target: GL.enum_, pname: GL.enum_, params: GL.float) => void
    readonly glTexParameteri: (target: GL.enum_, pname: GL.enum_, param: GL.int) => void
    readonly glTexParameteriv: (target: GL.enum_, pname: GL.enum_, params: GL.int) => void
    readonly glGetTexParameterfv: (target: GL.enum_, pname: GL.enum_, params: GL.float) => void
    readonly glGetTexParameteriv: (target: GL.enum_, pname: GL.enum_, params: GL.int) => void
    readonly glTexSubImage2D: (target: GL.enum_, level: GL.int, xoffset: GL.int, yoffset: GL.int, width: GL.sizei, height: GL.sizei, format: GL.enum_, type: GL.enum_, pixels: GL.void_) => void
    readonly glCopyTexImage2D: (target: GL.enum_, level: GL.int, internalformat: GL.enum_, x: GL.int, y: GL.int, width: GL.sizei, height: GL.sizei, border: GL.int) => void
    readonly glViewport: (x: GL.int, y: GL.int, width: GL.sizei, height: GL.sizei) => void
    readonly glLineWidth: (width: GL.float) => void
    readonly glPolygonOffset: (factor: GL.float, units: GL.float) => void
    readonly glDepthRangef: (nearVal: GL.float, farVal: GL.float) => void
    readonly glClearDepthf: (depth: GL.clampf) => void
    readonly glCompressedTexImage2D: (target: GL.enum_, level: GL.int, internalformat: GL.enum_, width: GL.sizei, height: GL.sizei, border: GL.int, imageSize: GL.sizei, data: GL.void_) => void
    readonly glCompressedTexSubImage2D: (target: GL.enum_, level: GL.int, xoffset: GL.int, yoffset: GL.int, width: GL.sizei, height: GL.sizei, format: GL.enum_, imageSize: GL.sizei, data: GL.void_) => void
    readonly glSampleCoverage: (value: GL.clampf, invert: GL.boolean_) => void
    readonly glGetBufferParameteriv: (target: GL.enum_, pname: GL.enum_, params: GL.int) => void
    readonly glGenBuffers: (n: GL.sizei, buffers: GL.uint) => void
    readonly glBindBuffer: (target: GL.enum_, buffer: GL.uint) => void
    readonly glBufferData: (target: GL.enum_, size: GL.sizeiptr, data: GL.void_, usage: GL.enum_) => void
    readonly glBufferSubData: (target: GL.enum_, offset: GL.intptr, size: GL.sizeiptr, data: GL.void_) => void
    readonly glDeleteBuffers: (n: GL.sizei, buffers: GL.uint) => void
    readonly glActiveTexture: (texture: GL.enum_) => void
    readonly glGenRenderbuffers: (n: GL.sizei, renderbuffers: GL.uint) => void
    readonly glDeleteRenderbuffers: (n: GL.sizei, renderbuffers: GL.uint) => void
    readonly glBindRenderbuffer: (target: GL.enum_, renderbuffer: GL.uint) => void
    readonly glRenderbufferStorage: (target: GL.enum_, internalformat: GL.enum_, width: GL.sizei, height: GL.sizei) => void
    readonly glGenFramebuffers: (n: GL.sizei, framebuffers: GL.uint) => void
    readonly glBindFramebuffer: (target: GL.enum_, framebuffer: GL.uint) => void
    readonly glFramebufferTexture2D: (target: GL.enum_, attachment: GL.enum_, textarget: GL.enum_, texture: GL.uint, level: GL.int) => void
    readonly glFramebufferRenderbuffer: (target: GL.enum_, attachment: GL.enum_, renderbuffertarget: GL.enum_, renderbuffer: GL.uint) => void
    readonly glDeleteFramebuffers: (n: GL.sizei, framebuffers: GL.uint) => void
    readonly glGenerateMipmap: (target: GL.enum_) => void
    readonly glGetFramebufferAttachmentParameteriv: (target: GL.enum_, attachment: GL.enum_, pname: GL.enum_, params: GL.int) => void
    readonly glGetRenderbufferParameteriv: (target: GL.enum_, pname: GL.enum_, params: GL.int) => void
    readonly glBlendEquation: (mode: GL.enum_) => void
    readonly glBlendColor: (red: GL.clampf, green: GL.clampf, blue: GL.clampf, alpha: GL.clampf) => void
    readonly glBlendFuncSeparate: (srcRGB: GL.enum_, dstRGB: GL.enum_, srcAlpha: GL.enum_, dstAlpha: GL.enum_) => void
    readonly glBlendEquationSeparate: (modeRGB: GL.enum_, modeAlpha: GL.enum_) => void
    readonly glReleaseShaderCompiler: () => void
    readonly glGetShaderPrecisionFormat: (shadertype: GL.enum_, precisiontype: GL.enum_, range: GL.int, precision: GL.int) => void
    readonly glShaderBinary: (n: GL.sizei, shaders: GL.uint, binaryformat: GL.enum_, binary: GL.void_, length: GL.sizei) => void
    readonly glStencilFuncSeparate: (face: GL.enum_, func: GL.enum_, ref: GL.int, mask: GL.uint) => void
    readonly glStencilMaskSeparate: (face: GL.enum_, mask: GL.uint) => void
    readonly glStencilOpSeparate: (face: GL.enum_, fail: GL.enum_, zfail: GL.enum_, zpass: GL.enum_) => void
    readonly glDeleteShader: (shader: GL.uint) => void
    readonly glAttachShader: (program: GL.uint, shader: GL.uint) => void
    readonly glUseProgram: (program: GL.uint) => void
    readonly glDeleteProgram: (program: GL.uint) => void
    readonly glGetShaderInfoLog: (shader: GL.uint, maxLength: GL.sizei, length: GL.sizei, infoLog: string) => void
    readonly glGetProgramInfoLog: (program: GL.uint, bufSize: GL.sizei, length: GL.sizei, infoLog: string) => void
    readonly glGetShaderiv: (shader: GL.uint, pname: GL.enum_, params: GL.int) => void
    readonly glGetProgramiv: (program: GL.uint, pname: GL.enum_, params: GL.int) => void
    readonly glDetachShader: (program: GL.uint, shader: GL.uint) => void
    readonly glGetAttachedShaders: (program: GL.uint, maxcount: GL.sizei, count: GL.sizei, shaders: GL.uint) => void
    readonly glShaderSource: (shader: GL.uint, count: GL.sizei, string: string, length: GL.int) => void
    readonly glCompileShader: (shader: GL.uint) => void
    readonly glLinkProgram: (program: GL.uint) => void
    readonly glUniform1f: (location: GL.int, v0: GL.float) => void
    readonly glUniform2f: (location: GL.int, v0: GL.float, v1: GL.float) => void
    readonly glUniform3f: (location: GL.int, v0: GL.float, v1: GL.float, v2: GL.float) => void
    readonly glUniform4f: (location: GL.int, v0: GL.float, v1: GL.float, v2: GL.float, v3: GL.float) => void
    readonly glUniform1fv: (location: GL.int, count: GL.sizei, value: GL.float) => void
    readonly glUniform2fv: (location: GL.int, count: GL.sizei, value: GL.float) => void
    readonly glUniform3fv: (location: GL.int, count: GL.sizei, value: GL.float) => void
    readonly glUniform4fv: (location: GL.int, count: GL.sizei, value: GL.float) => void
    readonly glUniform1i: (location: GL.int, v0: GL.int) => void
    readonly glUniform2i: (location: GL.int, v0: GL.int, v1: GL.int) => void
    readonly glUniform3i: (location: GL.int, v0: GL.int, v1: GL.int, v2: GL.int) => void
    readonly glUniform4i: (location: GL.int, v0: GL.int, v1: GL.int, v2: GL.int, v3: GL.int) => void
    readonly glUniform1iv: (location: GL.int, count: GL.sizei, value: GL.int) => void
    readonly glUniform2iv: (location: GL.int, count: GL.sizei, value: GL.int) => void
    readonly glUniform3iv: (location: GL.int, count: GL.sizei, value: GL.int) => void
    readonly glUniform4iv: (location: GL.int, count: GL.sizei, value: GL.int) => void
    readonly glUniformMatrix2fv: (location: GL.int, count: GL.sizei, transpose: GL.boolean_, value: GL.float) => void
    readonly glUniformMatrix3fv: (location: GL.int, count: GL.sizei, transpose: GL.boolean_, value: GL.float) => void
    readonly glUniformMatrix4fv: (location: GL.int, count: GL.sizei, transpose: GL.boolean_, value: GL.float) => void
    readonly glGetUniformfv: (program: GL.uint, location: GL.int, params: GL.float) => void
    readonly glGetUniformiv: (program: GL.uint, location: GL.int, params: GL.int) => void
    readonly glValidateProgram: (program: GL.uint) => void
    readonly glVertexAttribPointer: (index: GL.uint, size: GL.int, type: GL.enum_, normalized: GL.boolean_, stride: GL.sizei, pointer: GL.void_) => void
    readonly glEnableVertexAttribArray: (index: GL.uint) => void
    readonly glDisableVertexAttribArray: (index: GL.uint) => void
    readonly glVertexAttrib1f: (indx: GL.uint, x: GL.float) => void
    readonly glVertexAttrib1fv: (indx: GL.uint, values: GL.float) => void
    readonly glVertexAttrib2f: (indx: GL.uint, x: GL.float, y: GL.float) => void
    readonly glVertexAttrib2fv: (indx: GL.uint, values: GL.float) => void
    readonly glVertexAttrib3f: (indx: GL.uint, x: GL.float, y: GL.float, z: GL.float) => void
    readonly glVertexAttrib3fv: (indx: GL.uint, values: GL.float) => void
    readonly glVertexAttrib4f: (index: GL.uint, x: GL.float, y: GL.float, z: GL.float, w: GL.float) => void
    readonly glVertexAttrib4fv: (indx: GL.uint, values: GL.float) => void
    readonly glGetVertexAttribfv: (index: GL.uint, pname: GL.enum_, params: GL.float) => void
    readonly glGetVertexAttribiv: (index: GL.uint, pname: GL.enum_, params: GL.int) => void
    readonly glGetVertexAttribPointerv: (index: GL.uint, pname: GL.enum_, pointer: GL.void_) => void
    static name: string
}
class GtypeClass {
    /* Fields of Cogl-2.0.Cogl.GtypeClass */
    readonly baseClass: GObject.TypeClass
    readonly dummy: number
    static name: string
}
class GtypeObject {
    /* Fields of Cogl-2.0.Cogl.GtypeObject */
    readonly parentInstance: GObject.TypeInstance
    readonly dummy: number
    static name: string
}
class KmsCrtc {
    /* Fields of Cogl-2.0.Cogl.KmsCrtc */
    readonly id: number
    readonly x: number
    readonly y: number
    readonly connectors: number
    readonly count: number
    readonly ignore: Bool
    static name: string
}
class Matrix {
    /* Fields of Cogl-2.0.Cogl.Matrix */
    readonly xx: number
    readonly yx: number
    readonly zx: number
    readonly wx: number
    readonly xy: number
    readonly yy: number
    readonly zy: number
    readonly wy: number
    readonly xz: number
    readonly yz: number
    readonly zz: number
    readonly wz: number
    readonly xw: number
    readonly yw: number
    readonly zw: number
    readonly ww: number
    /* Methods of Cogl-2.0.Cogl.Matrix */
    copy(): Matrix
    free(): void
    frustum(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): void
    getArray(): number
    getInverse(): [ /* returnType */ Bool, /* inverse */ Matrix ]
    initFromArray(array: number): void
    initFromEuler(euler: Euler): void
    initFromQuaternion(quaternion: Quaternion): void
    initIdentity(): void
    initTranslation(tx: number, ty: number, tz: number): void
    isIdentity(): Bool
    lookAt(eyePositionX: number, eyePositionY: number, eyePositionZ: number, objectX: number, objectY: number, objectZ: number, worldUpX: number, worldUpY: number, worldUpZ: number): void
    multiply(a: Matrix, b: Matrix): void
    ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): void
    orthographic(x1: number, y1: number, x2: number, y2: number, near: number, far: number): void
    perspective(fovY: number, aspect: number, zNear: number, zFar: number): void
    projectPoints(nComponents: number, strideIn: number, pointsIn: object | null, strideOut: number, pointsOut: object | null, nPoints: number): void
    rotate(angle: number, x: number, y: number, z: number): void
    rotateEuler(euler: Euler): void
    rotateQuaternion(quaternion: Quaternion): void
    scale(sx: number, sy: number, sz: number): void
    transformPoint(x: number, y: number, z: number, w: number): [ /* x */ number, /* y */ number, /* z */ number, /* w */ number ]
    transformPoints(nComponents: number, strideIn: number, pointsIn: object | null, strideOut: number, pointsOut: object | null, nPoints: number): void
    translate(x: number, y: number, z: number): void
    transpose(): void
    view2dInFrustum(left: number, right: number, bottom: number, top: number, zNear: number, z2d: number, width2d: number, height2d: number): void
    view2dInPerspective(fovY: number, aspect: number, zNear: number, z2d: number, width2d: number, height2d: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static equal(v1?: object | null, v2?: object | null): Bool
}
class MatrixEntry {
    /* Methods of Cogl-2.0.Cogl.MatrixEntry */
    calculateTranslation(entry1: MatrixEntry): [ /* returnType */ Bool, /* x */ number, /* y */ number, /* z */ number ]
    equal(entry1: MatrixEntry): Bool
    get(): [ /* returnType */ Matrix, /* matrix */ Matrix ]
    isIdentity(): Bool
    ref(): MatrixEntry
    unref(): void
    static name: string
}
class OnscreenDirtyClosure {
    static name: string
}
class OnscreenDirtyInfo {
    /* Fields of Cogl-2.0.Cogl.OnscreenDirtyInfo */
    readonly x: number
    readonly y: number
    readonly width: number
    readonly height: number
    static name: string
}
class OnscreenResizeClosure {
    static name: string
}
class PollFD {
    /* Fields of Cogl-2.0.Cogl.PollFD */
    readonly fd: number
    static name: string
}
class Quaternion {
    /* Fields of Cogl-2.0.Cogl.Quaternion */
    readonly w: number
    readonly x: number
    readonly y: number
    readonly z: number
    /* Methods of Cogl-2.0.Cogl.Quaternion */
    copy(): Quaternion
    dotProduct(b: Quaternion): number
    free(): void
    getRotationAngle(): number
    getRotationAxis(): /* vector3 */ number
    init(angle: number, x: number, y: number, z: number): void
    initFromAngleVector(angle: number, axis3f: number): void
    initFromArray(array: number): void
    initFromEuler(euler: Euler): void
    initFromMatrix(matrix: Matrix): void
    initFromQuaternion(src: Quaternion): void
    initFromXRotation(angle: number): void
    initFromYRotation(angle: number): void
    initFromZRotation(angle: number): void
    initIdentity(): void
    invert(): void
    multiply(left: Quaternion, right: Quaternion): void
    nlerp(a: Quaternion, b: Quaternion, t: number): void
    normalize(): void
    pow(exponent: number): void
    slerp(a: Quaternion, b: Quaternion, t: number): void
    squad(prev: Quaternion, a: Quaternion, b: Quaternion, next: Quaternion, t: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static equal(v1?: object | null, v2?: object | null): Bool
}
class TextureVertex {
    /* Fields of Cogl-2.0.Cogl.TextureVertex */
    readonly x: number
    readonly y: number
    readonly z: number
    readonly tx: number
    readonly ty: number
    readonly color: Color
    static name: string
}
class UserDataKey {
    /* Fields of Cogl-2.0.Cogl.UserDataKey */
    readonly unused: number
    static name: string
}
class VertexP2 {
    /* Fields of Cogl-2.0.Cogl.VertexP2 */
    readonly x: number
    readonly y: number
    static name: string
}
class VertexP2C4 {
    /* Fields of Cogl-2.0.Cogl.VertexP2C4 */
    readonly x: number
    readonly y: number
    readonly r: number
    readonly g: number
    readonly b: number
    readonly a: number
    static name: string
}
class VertexP2T2 {
    /* Fields of Cogl-2.0.Cogl.VertexP2T2 */
    readonly x: number
    readonly y: number
    readonly s: number
    readonly t: number
    static name: string
}
class VertexP2T2C4 {
    /* Fields of Cogl-2.0.Cogl.VertexP2T2C4 */
    readonly x: number
    readonly y: number
    readonly s: number
    readonly t: number
    readonly r: number
    readonly g: number
    readonly b: number
    readonly a: number
    static name: string
}
class VertexP3 {
    /* Fields of Cogl-2.0.Cogl.VertexP3 */
    readonly x: number
    readonly y: number
    readonly z: number
    static name: string
}
class VertexP3C4 {
    /* Fields of Cogl-2.0.Cogl.VertexP3C4 */
    readonly x: number
    readonly y: number
    readonly z: number
    readonly r: number
    readonly g: number
    readonly b: number
    readonly a: number
    static name: string
}
class VertexP3T2 {
    /* Fields of Cogl-2.0.Cogl.VertexP3T2 */
    readonly x: number
    readonly y: number
    readonly z: number
    readonly s: number
    readonly t: number
    static name: string
}
class VertexP3T2C4 {
    /* Fields of Cogl-2.0.Cogl.VertexP3T2C4 */
    readonly x: number
    readonly y: number
    readonly z: number
    readonly s: number
    readonly t: number
    readonly r: number
    readonly g: number
    readonly b: number
    readonly a: number
    static name: string
}
class _ColorSizeCheck {
    /* Fields of Cogl-2.0.Cogl._ColorSizeCheck */
    readonly compileTimeAssertCoglColorSize: number[]
    static name: string
}
class _EulerSizeCheck {
    /* Fields of Cogl-2.0.Cogl._EulerSizeCheck */
    readonly compileTimeAssertCoglEulerSize: number[]
    static name: string
}
class _MatrixSizeCheck {
    /* Fields of Cogl-2.0.Cogl._MatrixSizeCheck */
    readonly compileTimeAssertCoglMatrixSize: number[]
    static name: string
}
class _QuaternionSizeCheck {
    /* Fields of Cogl-2.0.Cogl._QuaternionSizeCheck */
    readonly compileTimeAssertCoglQuaternionSize: number[]
    static name: string
}
class _TextureVertexSizeCheck {
    /* Fields of Cogl-2.0.Cogl._TextureVertexSizeCheck */
    readonly compileTimeAssertCoglTextureVertexSize: number[]
    static name: string
}
    type Angle = number
    type Bool = number
    type Buffer = void
    type Handle = object
    type MetaTexture = void
    type PrimitiveTexture = void
    type UserDataDestroyCallback = GLib.DestroyNotify
}
export default Cogl;