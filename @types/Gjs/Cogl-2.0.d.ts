/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Cogl-2.0
 */

import type * as Gjs from './Gjs';
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
function bitmap_error_quark(): number
function blend_string_error_quark(): number
function buffer_get_size(buffer: Buffer): number
function buffer_get_update_hint(buffer: Buffer): BufferUpdateHint
function buffer_map(buffer: Buffer, access: BufferAccess, hints: BufferMapHint): object | null
function buffer_map_range(buffer: Buffer, offset: number, size: number, access: BufferAccess, hints: BufferMapHint): object | null
function buffer_set_data(buffer: Buffer, offset: number, data: object | null, size: number): Bool
function buffer_set_update_hint(buffer: Buffer, hint: BufferUpdateHint): void
function buffer_unmap(buffer: Buffer): void
function color_equal(v1?: object | null, v2?: object | null): Bool
function color_init_from_hsl(hue: number, saturation: number, luminance: number): /* color */ Color
function debug_matrix_entry_print(entry: MatrixEntry): void
function debug_matrix_print(matrix: Matrix): void
function debug_object_foreach_type(func: DebugObjectForeachTypeCallback): void
function debug_object_print_instances(): void
function error_copy(error: GLib.Error): GLib.Error
function error_free(error: GLib.Error): void
function error_matches(error: GLib.Error, domain: number, code: number): Bool
function euler_equal(v1?: object | null, v2?: object | null): Bool
function foreach_feature(context: Context, callback: FeatureCallback): void
function framebuffer_error_quark(): number
function get_clock_time(context: Context): number
function get_draw_framebuffer(): Framebuffer
function get_static_identity_quaternion(): Quaternion
function get_static_zero_quaternion(): Quaternion
function gles2_texture_get_handle(texture: Texture, handle: number, target: number): Bool
function glib_renderer_source_new(renderer: Renderer, priority: number): GLib.Source
function glib_source_new(context: Context, priority: number): GLib.Source
function gtype_matrix_get_type(): GObject.Type
function handle_get_type(): GObject.Type
function handle_ref(handle: Handle): Handle
function handle_unref(handle: Handle): void
function has_feature(context: Context, feature: FeatureID): Bool
function is_atlas_texture(object?: object | null): Bool
function is_attribute(object?: object | null): Bool
function is_attribute_buffer(object?: object | null): Bool
function is_bitmap(object?: object | null): Bool
function is_buffer(object?: object | null): Bool
function is_context(object?: object | null): Bool
function is_display(object?: object | null): Bool
function is_frame_info(object?: object | null): Bool
function is_framebuffer(object?: object | null): Bool
function is_gles2_context(object?: object | null): Bool
function is_index_buffer(object?: object | null): Bool
function is_indices(object?: object | null): Bool
function is_matrix_stack(object?: object | null): Bool
function is_onscreen(object?: object | null): Bool
function is_onscreen_template(object?: object | null): Bool
function is_output(object?: object | null): Bool
function is_pipeline(object?: object | null): Bool
function is_pixel_buffer(object?: object | null): Bool
function is_primitive(object?: object | null): Bool
function is_primitive_texture(object?: object | null): Bool
function is_renderer(object?: object | null): Bool
function is_snippet(object?: object | null): Bool
function is_sub_texture(object?: object | null): Bool
function is_swap_chain(object?: object | null): Bool
function is_texture(object?: object | null): Bool
function is_texture_2d(object?: object | null): Bool
function is_texture_2d_sliced(object?: object | null): Bool
function is_texture_3d(object?: object | null): Bool
function is_texture_pixmap_x11(object?: object | null): Bool
function is_texture_rectangle(object?: object | null): Bool
function kms_display_queue_modes_reset(display: Display): void
function kms_display_set_ignore_crtc(display: Display, id: number, ignore: Bool): void
function kms_display_set_layout(display: Display, width: number, height: number, crtcs: KmsCrtc, n_crtcs: number): Bool
function kms_renderer_get_gbm(renderer: Renderer): object | null
function kms_renderer_get_kms_fd(renderer: Renderer): number
function kms_renderer_set_kms_fd(renderer: Renderer, fd: number): void
function matrix_equal(v1?: object | null, v2?: object | null): Bool
function poll_renderer_dispatch(renderer: Renderer, poll_fds: PollFD, n_poll_fds: number): void
function poll_renderer_get_info(renderer: Renderer, poll_fds: PollFD, n_poll_fds: number, timeout: number): number
function pop_gles2_context(ctx: Context): void
function push_gles2_context(ctx: Context, gles2_ctx: GLES2Context, read_buffer: Framebuffer, write_buffer: Framebuffer): Bool
function quaternion_equal(v1?: object | null, v2?: object | null): Bool
function renderer_error_quark(): number
function texture_error_quark(): number
function vector3_add(result: number, a: number, b: number): void
function vector3_copy(vector: number): number
function vector3_cross_product(result: number, u: number, v: number): void
function vector3_distance(a: number, b: number): number
function vector3_divide_scalar(vector: number, scalar: number): void
function vector3_dot_product(a: number, b: number): number
function vector3_equal(v1?: object | null, v2?: object | null): Bool
function vector3_equal_with_epsilon(vector0: number, vector1: number, epsilon: number): Bool
function vector3_free(vector: number): void
function vector3_init(vector: number, x: number, y: number, z: number): void
function vector3_init_zero(vector: number): void
function vector3_invert(vector: number): void
function vector3_magnitude(vector: number): number
function vector3_multiply_scalar(vector: number, scalar: number): void
function vector3_normalize(vector: number): void
function vector3_subtract(result: number, a: number, b: number): void
function wayland_display_set_compositor_display(display: Display, wayland_display?: object | null): void
function wayland_onscreen_get_shell_surface(onscreen: Onscreen): object | null
function wayland_onscreen_get_surface(onscreen: Onscreen): object | null
function wayland_onscreen_resize(onscreen: Onscreen, width: number, height: number, offset_x: number, offset_y: number): void
function wayland_onscreen_set_foreign_surface(onscreen: Onscreen, surface?: object | null): void
function wayland_renderer_get_display(renderer: Renderer): object | null
function wayland_renderer_set_event_dispatch_enabled(renderer: Renderer, enable: Bool): void
function wayland_renderer_set_foreign_display(renderer: Renderer, display?: object | null): void
function wayland_texture_set_region_from_shm_buffer(texture: Texture, src_x: number, src_y: number, width: number, height: number, shm_buffer: object | null, dst_x: number, dst_y: number, level: number): Bool
function x11_onscreen_get_visual_xid(onscreen: Onscreen): number
function x11_onscreen_get_window_xid(onscreen: Onscreen): number
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
    (sub_texture: Texture, sub_texture_coords: number, meta_coords: number): void
}
interface OnscreenDirtyCallback {
    (onscreen: Onscreen, info: OnscreenDirtyInfo): void
}
interface OnscreenResizeCallback {
    (onscreen: Onscreen, width: number, height: number): void
}
interface OnscreenX11MaskCallback {
    (onscreen: Onscreen, event_mask: number): void
}
interface OutputCallback {
    (output: Output): void
}
interface PipelineLayerCallback {
    (pipeline: Pipeline, layer_index: number): Bool
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
    cancel_fence_callback(closure: FenceClosure): void
    clear(buffers: number, color: Color): void
    clear4f(buffers: number, red: number, green: number, blue: number, alpha: number): void
    discard_buffers(buffers: number): void
    draw_attributes(pipeline: Pipeline, mode: VerticesMode, first_vertex: number, n_vertices: number, attributes: Attribute, n_attributes: number): void
    draw_indexed_attributes(pipeline: Pipeline, mode: VerticesMode, first_vertex: number, n_vertices: number, indices: Indices, attributes: Attribute, n_attributes: number): void
    draw_multitextured_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number, tex_coords: number[], tex_coords_len: number): void
    draw_primitive(pipeline: Pipeline, primitive: Primitive): void
    draw_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number): void
    draw_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void
    draw_textured_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number, s_1: number, t_1: number, s_2: number, t_2: number): void
    draw_textured_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void
    finish(): void
    frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void
    get_alpha_bits(): number
    get_blue_bits(): number
    get_color_mask(): ColorMask
    get_context(): Context
    get_depth_bits(): number
    get_depth_texture(): Texture
    get_depth_texture_enabled(): Bool
    get_depth_write_enabled(): Bool
    get_dither_enabled(): Bool
    get_green_bits(): number
    get_height(): number
    get_is_stereo(): Bool
    get_modelview_matrix(): /* matrix */ Matrix
    get_projection_matrix(): /* matrix */ Matrix
    get_red_bits(): number
    get_samples_per_pixel(): number
    get_stereo_mode(): StereoMode
    get_viewport4fv(): /* viewport */ number[]
    get_viewport_height(): number
    get_viewport_width(): number
    get_viewport_x(): number
    get_viewport_y(): number
    get_width(): number
    identity_matrix(): void
    orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void
    perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void
    pop_clip(): void
    pop_matrix(): void
    push_matrix(): void
    push_primitive_clip(primitive: Primitive, bounds_x1: number, bounds_y1: number, bounds_x2: number, bounds_y2: number): void
    push_rectangle_clip(x_1: number, y_1: number, x_2: number, y_2: number): void
    push_scissor_clip(x: number, y: number, width: number, height: number): void
    read_pixels(x: number, y: number, width: number, height: number, format: PixelFormat, pixels: number): Bool
    read_pixels_into_bitmap(x: number, y: number, source: ReadPixelsFlags, bitmap: Bitmap): Bool
    resolve_samples(): void
    resolve_samples_region(x: number, y: number, width: number, height: number): void
    rotate(angle: number, x: number, y: number, z: number): void
    rotate_euler(euler: Euler): void
    rotate_quaternion(quaternion: Quaternion): void
    scale(x: number, y: number, z: number): void
    set_color_mask(color_mask: ColorMask): void
    set_depth_texture_enabled(enabled: Bool): void
    set_depth_write_enabled(depth_write_enabled: Bool): void
    set_dither_enabled(dither_enabled: Bool): void
    set_modelview_matrix(matrix: Matrix): void
    set_projection_matrix(matrix: Matrix): void
    set_samples_per_pixel(samples_per_pixel: number): void
    set_stereo_mode(stereo_mode: StereoMode): void
    set_viewport(x: number, y: number, width: number, height: number): void
    transform(matrix: Matrix): void
    translate(x: number, y: number, z: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): number
}
class Texture {
    /* Methods of Cogl-2.0.Cogl.Texture */
    allocate(): Bool
    get_components(): TextureComponents
    get_data(format: PixelFormat, rowstride: number, data: number): number
    get_gl_texture(): [ /* returnType */ Bool, /* out_gl_handle */ number | null, /* out_gl_target */ number | null ]
    get_height(): number
    get_max_waste(): number
    get_premultiplied(): Bool
    get_width(): number
    is_sliced(): Bool
    set_components(components: TextureComponents): void
    set_data(format: PixelFormat, rowstride: number, data: number, level: number): Bool
    set_premultiplied(premultiplied: Bool): void
    set_region(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool
    set_region_from_bitmap(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, bitmap: Bitmap): Bool
    static name: string
}
class AtlasTexture {
    static name: string
    /* Static methods and pseudo-constructors */
    static new_from_bitmap(bmp: Bitmap): AtlasTexture
    static new_from_data(ctx: Context, width: number, height: number, format: PixelFormat, rowstride: number, data: number): AtlasTexture
    static new_from_file(ctx: Context, filename: string): AtlasTexture
    static new_with_size(ctx: Context, width: number, height: number): AtlasTexture
}
class Attribute {
    /* Methods of Cogl-2.0.Cogl.Attribute */
    get_buffer(): AttributeBuffer
    get_normalized(): Bool
    set_buffer(attribute_buffer: AttributeBuffer): void
    set_normalized(normalized: Bool): void
    static name: string
    static new(attribute_buffer: AttributeBuffer, name: string, stride: number, offset: number, components: number, type: AttributeType): Attribute
    constructor(attribute_buffer: AttributeBuffer, name: string, stride: number, offset: number, components: number, type: AttributeType)
    /* Static methods and pseudo-constructors */
    static new(attribute_buffer: AttributeBuffer, name: string, stride: number, offset: number, components: number, type: AttributeType): Attribute
    static new_const_1f(context: Context, name: string, value: number): Attribute
    static new_const_2f(context: Context, name: string, component0: number, component1: number): Attribute
    static new_const_2fv(context: Context, name: string, value: number): Attribute
    static new_const_2x2fv(context: Context, name: string, matrix2x2: number, transpose: Bool): Attribute
    static new_const_3f(context: Context, name: string, component0: number, component1: number, component2: number): Attribute
    static new_const_3fv(context: Context, name: string, value: number): Attribute
    static new_const_3x3fv(context: Context, name: string, matrix3x3: number, transpose: Bool): Attribute
    static new_const_4f(context: Context, name: string, component0: number, component1: number, component2: number, component3: number): Attribute
    static new_const_4fv(context: Context, name: string, value: number): Attribute
    static new_const_4x4fv(context: Context, name: string, matrix4x4: number, transpose: Bool): Attribute
}
class AttributeBuffer {
    static name: string
    /* Static methods and pseudo-constructors */
    static new_with_size(context: Context, bytes: number): AttributeBuffer
}
class Bitmap {
    /* Methods of Cogl-2.0.Cogl.Bitmap */
    get_buffer(): PixelBuffer
    get_format(): PixelFormat
    get_height(): number
    get_rowstride(): number
    get_width(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static new_for_data(context: Context, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bitmap
    static new_from_buffer(buffer: Buffer, format: PixelFormat, width: number, height: number, rowstride: number, offset: number): Bitmap
    static new_from_file(filename: string): Bitmap
    static new_with_size(context: Context, width: number, height: number, format: PixelFormat): Bitmap
    static get_size_from_file(filename: string): [ /* returnType */ Bool, /* width */ number, /* height */ number ]
}
class Context {
    /* Methods of Cogl-2.0.Cogl.Context */
    get_display(): Display
    get_renderer(): Renderer
    static name: string
    static new(display?: Display | null): Context
    constructor(display?: Display | null)
    /* Static methods and pseudo-constructors */
    static new(display?: Display | null): Context
}
class Display {
    /* Methods of Cogl-2.0.Cogl.Display */
    get_renderer(): Renderer
    set_onscreen_template(onscreen_template: OnscreenTemplate): void
    setup(): Bool
    static name: string
    static new(renderer: Renderer, onscreen_template: OnscreenTemplate): Display
    constructor(renderer: Renderer, onscreen_template: OnscreenTemplate)
    /* Static methods and pseudo-constructors */
    static new(renderer: Renderer, onscreen_template: OnscreenTemplate): Display
}
class Fixed {
    static name: string
}
class FrameInfo {
    /* Methods of Cogl-2.0.Cogl.FrameInfo */
    get_frame_counter(): number
    get_output(): Output
    get_presentation_time(): number
    get_refresh_rate(): number
    static name: string
}
class GLES2Context {
    /* Methods of Cogl-2.0.Cogl.GLES2Context */
    get_vtable(): GLES2Vtable
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
    get_offset(): number
    get_type(): IndicesType
    set_offset(offset: number): void
    static name: string
    static new(context: Context, type: IndicesType, indices_data: object | null, n_indices: number): Indices
    constructor(context: Context, type: IndicesType, indices_data: object | null, n_indices: number)
    /* Static methods and pseudo-constructors */
    static new(context: Context, type: IndicesType, indices_data: object | null, n_indices: number): Indices
    static new_for_buffer(type: IndicesType, buffer: IndexBuffer, offset: number): Indices
}
class MatrixStack {
    /* Methods of Cogl-2.0.Cogl.MatrixStack */
    frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void
    get(): [ /* returnType */ Matrix, /* matrix */ Matrix ]
    get_entry(): MatrixEntry
    get_inverse(): [ /* returnType */ Bool, /* inverse */ Matrix ]
    load_identity(): void
    multiply(matrix: Matrix): void
    orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void
    perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void
    pop(): void
    push(): void
    rotate(angle: number, x: number, y: number, z: number): void
    rotate_euler(euler: Euler): void
    rotate_quaternion(quaternion: Quaternion): void
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
    static value_get_object(value: any): object | null
    static value_set_object(value: any, object?: object | null): void
}
class Onscreen {
    /* Methods of Cogl-2.0.Cogl.Onscreen */
    add_dirty_callback(callback: OnscreenDirtyCallback, destroy?: UserDataDestroyCallback | null): OnscreenDirtyClosure
    add_frame_callback(callback: FrameCallback, destroy?: UserDataDestroyCallback | null): FrameClosure
    add_resize_callback(callback: OnscreenResizeCallback, destroy?: UserDataDestroyCallback | null): OnscreenResizeClosure
    add_swap_buffers_callback(callback: SwapBuffersNotify): number
    get_buffer_age(): number
    get_frame_counter(): number
    get_resizable(): Bool
    hide(): void
    remove_dirty_callback(closure: OnscreenDirtyClosure): void
    remove_frame_callback(closure: FrameClosure): void
    remove_resize_callback(closure: OnscreenResizeClosure): void
    remove_swap_buffers_callback(id: number): void
    set_resizable(resizable: Bool): void
    set_swap_throttled(throttled: Bool): void
    show(): void
    swap_buffers(): void
    swap_buffers_with_damage(rectangles: number, n_rectangles: number): void
    swap_region(rectangles: number, n_rectangles: number): void
    /* Methods of Cogl-2.0.Cogl.Framebuffer */
    allocate(): Bool
    cancel_fence_callback(closure: FenceClosure): void
    clear(buffers: number, color: Color): void
    clear4f(buffers: number, red: number, green: number, blue: number, alpha: number): void
    discard_buffers(buffers: number): void
    draw_attributes(pipeline: Pipeline, mode: VerticesMode, first_vertex: number, n_vertices: number, attributes: Attribute, n_attributes: number): void
    draw_indexed_attributes(pipeline: Pipeline, mode: VerticesMode, first_vertex: number, n_vertices: number, indices: Indices, attributes: Attribute, n_attributes: number): void
    draw_multitextured_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number, tex_coords: number[], tex_coords_len: number): void
    draw_primitive(pipeline: Pipeline, primitive: Primitive): void
    draw_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number): void
    draw_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void
    draw_textured_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number, s_1: number, t_1: number, s_2: number, t_2: number): void
    draw_textured_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void
    finish(): void
    frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void
    get_alpha_bits(): number
    get_blue_bits(): number
    get_color_mask(): ColorMask
    get_context(): Context
    get_depth_bits(): number
    get_depth_texture(): Texture
    get_depth_texture_enabled(): Bool
    get_depth_write_enabled(): Bool
    get_dither_enabled(): Bool
    get_green_bits(): number
    get_height(): number
    get_is_stereo(): Bool
    get_modelview_matrix(): /* matrix */ Matrix
    get_projection_matrix(): /* matrix */ Matrix
    get_red_bits(): number
    get_samples_per_pixel(): number
    get_stereo_mode(): StereoMode
    get_viewport4fv(): /* viewport */ number[]
    get_viewport_height(): number
    get_viewport_width(): number
    get_viewport_x(): number
    get_viewport_y(): number
    get_width(): number
    identity_matrix(): void
    orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void
    perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void
    pop_clip(): void
    pop_matrix(): void
    push_matrix(): void
    push_primitive_clip(primitive: Primitive, bounds_x1: number, bounds_y1: number, bounds_x2: number, bounds_y2: number): void
    push_rectangle_clip(x_1: number, y_1: number, x_2: number, y_2: number): void
    push_scissor_clip(x: number, y: number, width: number, height: number): void
    read_pixels(x: number, y: number, width: number, height: number, format: PixelFormat, pixels: number): Bool
    read_pixels_into_bitmap(x: number, y: number, source: ReadPixelsFlags, bitmap: Bitmap): Bool
    resolve_samples(): void
    resolve_samples_region(x: number, y: number, width: number, height: number): void
    rotate(angle: number, x: number, y: number, z: number): void
    rotate_euler(euler: Euler): void
    rotate_quaternion(quaternion: Quaternion): void
    scale(x: number, y: number, z: number): void
    set_color_mask(color_mask: ColorMask): void
    set_depth_texture_enabled(enabled: Bool): void
    set_depth_write_enabled(depth_write_enabled: Bool): void
    set_dither_enabled(dither_enabled: Bool): void
    set_modelview_matrix(matrix: Matrix): void
    set_projection_matrix(matrix: Matrix): void
    set_samples_per_pixel(samples_per_pixel: number): void
    set_stereo_mode(stereo_mode: StereoMode): void
    set_viewport(x: number, y: number, width: number, height: number): void
    transform(matrix: Matrix): void
    translate(x: number, y: number, z: number): void
    static name: string
    static new(context: Context, width: number, height: number): Onscreen
    constructor(context: Context, width: number, height: number)
    /* Static methods and pseudo-constructors */
    static new(context: Context, width: number, height: number): Onscreen
    static error_quark(): number
}
class OnscreenTemplate {
    /* Methods of Cogl-2.0.Cogl.OnscreenTemplate */
    set_samples_per_pixel(n: number): void
    set_stereo_enabled(enabled: Bool): void
    set_swap_throttled(throttled: Bool): void
    static name: string
    static new(swap_chain: SwapChain): OnscreenTemplate
    constructor(swap_chain: SwapChain)
    /* Static methods and pseudo-constructors */
    static new(swap_chain: SwapChain): OnscreenTemplate
}
class Output {
    /* Methods of Cogl-2.0.Cogl.Output */
    get_height(): number
    get_mm_height(): number
    get_mm_width(): number
    get_refresh_rate(): number
    get_subpixel_order(): SubpixelOrder
    get_width(): number
    get_x(): number
    get_y(): number
    static name: string
}
class Pipeline {
    /* Methods of Cogl-2.0.Cogl.Pipeline */
    add_layer_snippet(layer: number, snippet: Snippet): void
    add_snippet(snippet: Snippet): void
    copy(): Pipeline
    foreach_layer(callback: PipelineLayerCallback): void
    get_alpha_test_function(): PipelineAlphaFunc
    get_alpha_test_reference(): number
    get_ambient(ambient: Color): void
    get_color(): /* color */ Color
    get_color_mask(): ColorMask
    get_cull_face_mode(): PipelineCullFaceMode
    get_depth_state(): /* state_out */ DepthState
    get_diffuse(diffuse: Color): void
    get_emission(emission: Color): void
    get_front_face_winding(): Winding
    get_layer_mag_filter(layer_index: number): PipelineFilter
    get_layer_min_filter(layer_index: number): PipelineFilter
    get_layer_point_sprite_coords_enabled(layer_index: number): Bool
    get_layer_texture(layer_index: number): Texture
    get_layer_wrap_mode_p(layer_index: number): PipelineWrapMode
    get_layer_wrap_mode_s(layer_index: number): PipelineWrapMode
    get_layer_wrap_mode_t(layer_index: number): PipelineWrapMode
    get_n_layers(): number
    get_per_vertex_point_size(): Bool
    get_point_size(): number
    get_shininess(): number
    get_specular(specular: Color): void
    get_uniform_location(uniform_name: string): number
    get_user_program(): Handle
    remove_layer(layer_index: number): void
    set_alpha_test_function(alpha_func: PipelineAlphaFunc, alpha_reference: number): void
    set_ambient(ambient: Color): void
    set_ambient_and_diffuse(color: Color): void
    set_blend(blend_string: string): Bool
    set_blend_constant(constant_color: Color): void
    set_color(color: Color): void
    set_color4f(red: number, green: number, blue: number, alpha: number): void
    set_color4ub(red: number, green: number, blue: number, alpha: number): void
    set_color_mask(color_mask: ColorMask): void
    set_cull_face_mode(cull_face_mode: PipelineCullFaceMode): void
    set_depth_state(state: DepthState): Bool
    set_diffuse(diffuse: Color): void
    set_emission(emission: Color): void
    set_front_face_winding(front_winding: Winding): void
    set_layer_combine(layer_index: number, blend_string: string): Bool
    set_layer_combine_constant(layer_index: number, constant: Color): void
    set_layer_filters(layer_index: number, min_filter: PipelineFilter, mag_filter: PipelineFilter): void
    set_layer_matrix(layer_index: number, matrix: Matrix): void
    set_layer_null_texture(layer_index: number, texture_type: TextureType): void
    set_layer_point_sprite_coords_enabled(layer_index: number, enable: Bool): Bool
    set_layer_texture(layer_index: number, texture: Texture): void
    set_layer_wrap_mode(layer_index: number, mode: PipelineWrapMode): void
    set_layer_wrap_mode_p(layer_index: number, mode: PipelineWrapMode): void
    set_layer_wrap_mode_s(layer_index: number, mode: PipelineWrapMode): void
    set_layer_wrap_mode_t(layer_index: number, mode: PipelineWrapMode): void
    set_per_vertex_point_size(enable: Bool): Bool
    set_point_size(point_size: number): void
    set_shininess(shininess: number): void
    set_specular(specular: Color): void
    set_uniform_1f(uniform_location: number, value: number): void
    set_uniform_1i(uniform_location: number, value: number): void
    set_uniform_float(uniform_location: number, n_components: number, count: number, value: number): void
    set_uniform_int(uniform_location: number, n_components: number, count: number, value: number): void
    set_uniform_matrix(uniform_location: number, dimensions: number, count: number, transpose: Bool, value: number): void
    set_user_program(program: Handle): void
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
    foreach_attribute(callback: PrimitiveAttributeCallback): void
    get_first_vertex(): number
    get_indices(): Indices
    get_mode(): VerticesMode
    get_n_vertices(): number
    set_attributes(attributes: Attribute, n_attributes: number): void
    set_first_vertex(first_vertex: number): void
    set_indices(indices: Indices, n_indices: number): void
    set_mode(mode: VerticesMode): void
    set_n_vertices(n_vertices: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_p2(context: Context, mode: VerticesMode, data: VertexP2[]): Primitive
    static new_p2c4(context: Context, mode: VerticesMode, data: VertexP2C4[]): Primitive
    static new_p2t2(context: Context, mode: VerticesMode, data: VertexP2T2[]): Primitive
    static new_p2t2c4(context: Context, mode: VerticesMode, data: VertexP2T2C4[]): Primitive
    static new_p3(context: Context, mode: VerticesMode, data: VertexP3[]): Primitive
    static new_p3c4(context: Context, mode: VerticesMode, data: VertexP3C4[]): Primitive
    static new_p3t2(context: Context, mode: VerticesMode, data: VertexP3T2[]): Primitive
    static new_p3t2c4(context: Context, mode: VerticesMode, data: VertexP3T2C4[]): Primitive
    static new_with_attributes(mode: VerticesMode, n_vertices: number, attributes: Attribute, n_attributes: number): Primitive
    static texture_set_auto_mipmap(primitive_texture: PrimitiveTexture, value: Bool): void
}
class Renderer {
    /* Methods of Cogl-2.0.Cogl.Renderer */
    add_constraint(constraint: RendererConstraint): void
    check_onscreen_template(onscreen_template: OnscreenTemplate): Bool
    connect(): Bool
    foreach_output(callback: OutputCallback): void
    get_driver(): Driver
    get_n_fragment_texture_units(): number
    get_winsys_id(): WinsysID
    remove_constraint(constraint: RendererConstraint): void
    set_driver(driver: Driver): void
    set_winsys_id(winsys_id: WinsysID): void
    static name: string
    static new(): Renderer
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Renderer
}
class Snippet {
    /* Methods of Cogl-2.0.Cogl.Snippet */
    get_declarations(): string
    get_hook(): SnippetHook
    get_post(): string
    get_pre(): string
    get_replace(): string
    set_declarations(declarations: string): void
    set_post(post: string): void
    set_pre(pre: string): void
    set_replace(replace: string): void
    static name: string
    static new(hook: SnippetHook, declarations: string, post: string): Snippet
    constructor(hook: SnippetHook, declarations: string, post: string)
    /* Static methods and pseudo-constructors */
    static new(hook: SnippetHook, declarations: string, post: string): Snippet
}
class SubTexture {
    /* Methods of Cogl-2.0.Cogl.SubTexture */
    get_parent(): Texture
    static name: string
    static new(ctx: Context, parent_texture: Texture, sub_x: number, sub_y: number, sub_width: number, sub_height: number): SubTexture
    constructor(ctx: Context, parent_texture: Texture, sub_x: number, sub_y: number, sub_width: number, sub_height: number)
    /* Static methods and pseudo-constructors */
    static new(ctx: Context, parent_texture: Texture, sub_x: number, sub_y: number, sub_width: number, sub_height: number): SubTexture
}
class SwapChain {
    /* Methods of Cogl-2.0.Cogl.SwapChain */
    set_has_alpha(has_alpha: Bool): void
    set_length(length: number): void
    static name: string
    static new(): SwapChain
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SwapChain
}
class Texture2D {
    /* Methods of Cogl-2.0.Cogl.Texture */
    allocate(): Bool
    get_components(): TextureComponents
    get_data(format: PixelFormat, rowstride: number, data: number): number
    get_gl_texture(): [ /* returnType */ Bool, /* out_gl_handle */ number | null, /* out_gl_target */ number | null ]
    get_height(): number
    get_max_waste(): number
    get_premultiplied(): Bool
    get_width(): number
    is_sliced(): Bool
    set_components(components: TextureComponents): void
    set_data(format: PixelFormat, rowstride: number, data: number, level: number): Bool
    set_premultiplied(premultiplied: Bool): void
    set_region(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool
    set_region_from_bitmap(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, bitmap: Bitmap): Bool
    static name: string
    /* Static methods and pseudo-constructors */
    static gl_new_from_foreign(ctx: Context, gl_handle: number, width: number, height: number, format: PixelFormat): Texture2D
    static new_from_bitmap(bitmap: Bitmap): Texture2D
    static new_from_data(ctx: Context, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Texture2D
    static new_from_file(ctx: Context, filename: string): Texture2D
    static new_with_size(ctx: Context, width: number, height: number): Texture2D
}
class Texture2DSliced {
    /* Methods of Cogl-2.0.Cogl.Texture */
    allocate(): Bool
    get_components(): TextureComponents
    get_data(format: PixelFormat, rowstride: number, data: number): number
    get_gl_texture(): [ /* returnType */ Bool, /* out_gl_handle */ number | null, /* out_gl_target */ number | null ]
    get_height(): number
    get_max_waste(): number
    get_premultiplied(): Bool
    get_width(): number
    is_sliced(): Bool
    set_components(components: TextureComponents): void
    set_data(format: PixelFormat, rowstride: number, data: number, level: number): Bool
    set_premultiplied(premultiplied: Bool): void
    set_region(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool
    set_region_from_bitmap(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, bitmap: Bitmap): Bool
    static name: string
    /* Static methods and pseudo-constructors */
    static new_from_bitmap(bmp: Bitmap, max_waste: number): Texture2DSliced
    static new_from_data(ctx: Context, width: number, height: number, max_waste: number, format: PixelFormat, rowstride: number, data: number): Texture2DSliced
    static new_from_file(ctx: Context, filename: string, max_waste: number): Texture2DSliced
    static new_with_size(ctx: Context, width: number, height: number, max_waste: number): Texture2DSliced
}
class Texture3D {
    /* Methods of Cogl-2.0.Cogl.Texture */
    allocate(): Bool
    get_components(): TextureComponents
    get_data(format: PixelFormat, rowstride: number, data: number): number
    get_gl_texture(): [ /* returnType */ Bool, /* out_gl_handle */ number | null, /* out_gl_target */ number | null ]
    get_height(): number
    get_max_waste(): number
    get_premultiplied(): Bool
    get_width(): number
    is_sliced(): Bool
    set_components(components: TextureComponents): void
    set_data(format: PixelFormat, rowstride: number, data: number, level: number): Bool
    set_premultiplied(premultiplied: Bool): void
    set_region(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool
    set_region_from_bitmap(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, bitmap: Bitmap): Bool
    static name: string
    /* Static methods and pseudo-constructors */
    static new_from_bitmap(bitmap: Bitmap, height: number, depth: number): Texture3D
    static new_from_data(context: Context, width: number, height: number, depth: number, format: PixelFormat, rowstride: number, image_stride: number, data: number): Texture3D
    static new_with_size(context: Context, width: number, height: number, depth: number): Texture3D
}
class TexturePixmapX11 {
    /* Methods of Cogl-2.0.Cogl.TexturePixmapX11 */
    is_using_tfp_extension(): Bool
    set_damage_object(damage: number, report_level: TexturePixmapX11ReportLevel): void
    update_area(x: number, y: number, width: number, height: number): void
    static name: string
    static new(context: Context, pixmap: number, automatic_updates: Bool): TexturePixmapX11
    constructor(context: Context, pixmap: number, automatic_updates: Bool)
    /* Static methods and pseudo-constructors */
    static new(context: Context, pixmap: number, automatic_updates: Bool): TexturePixmapX11
    static new_left(context: Context, pixmap: number, automatic_updates: Bool): TexturePixmapX11
    static error_quark(): number
}
class TextureRectangle {
    /* Methods of Cogl-2.0.Cogl.Texture */
    allocate(): Bool
    get_components(): TextureComponents
    get_data(format: PixelFormat, rowstride: number, data: number): number
    get_gl_texture(): [ /* returnType */ Bool, /* out_gl_handle */ number | null, /* out_gl_target */ number | null ]
    get_height(): number
    get_max_waste(): number
    get_premultiplied(): Bool
    get_width(): number
    is_sliced(): Bool
    set_components(components: TextureComponents): void
    set_data(format: PixelFormat, rowstride: number, data: number, level: number): Bool
    set_premultiplied(premultiplied: Bool): void
    set_region(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool
    set_region_from_bitmap(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, bitmap: Bitmap): Bool
    static name: string
    /* Static methods and pseudo-constructors */
    static new_from_bitmap(bitmap: Bitmap): TextureRectangle
    static new_from_foreign(ctx: Context, gl_handle: number, width: number, height: number, format: PixelFormat): TextureRectangle
    static new_with_size(ctx: Context, width: number, height: number): TextureRectangle
}
class Color {
    /* Methods of Cogl-2.0.Cogl.Color */
    copy(): Color
    free(): void
    get_alpha(): number
    get_alpha_byte(): number
    get_alpha_float(): number
    get_blue(): number
    get_blue_byte(): number
    get_blue_float(): number
    get_green(): number
    get_green_byte(): number
    get_green_float(): number
    get_red(): number
    get_red_byte(): number
    get_red_float(): number
    init_from_4f(red: number, green: number, blue: number, alpha: number): void
    init_from_4fv(color_array: number): void
    init_from_4ub(red: number, green: number, blue: number, alpha: number): void
    premultiply(): void
    set_alpha(alpha: number): void
    set_alpha_byte(alpha: number): void
    set_alpha_float(alpha: number): void
    set_blue(blue: number): void
    set_blue_byte(blue: number): void
    set_blue_float(blue: number): void
    set_from_4f(red: number, green: number, blue: number, alpha: number): void
    set_from_4ub(red: number, green: number, blue: number, alpha: number): void
    set_green(green: number): void
    set_green_byte(green: number): void
    set_green_float(green: number): void
    set_red(red: number): void
    set_red_byte(red: number): void
    set_red_float(red: number): void
    to_hsl(): [ /* hue */ number, /* saturation */ number, /* luminance */ number ]
    unpremultiply(): void
    static name: string
    static new(): Color
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Color
    static equal(v1?: object | null, v2?: object | null): Bool
    static init_from_hsl(hue: number, saturation: number, luminance: number): /* color */ Color
}
class DebugObjectTypeInfo {
    /* Fields of Cogl-2.0.Cogl.DebugObjectTypeInfo */
    readonly name: string
    readonly instance_count: number
    static name: string
}
class DepthState {
    /* Methods of Cogl-2.0.Cogl.DepthState */
    get_range(near_val: number, far_val: number): void
    get_test_enabled(): Bool
    get_test_function(): DepthTestFunction
    get_write_enabled(): Bool
    init(): void
    set_range(near_val: number, far_val: number): void
    set_test_enabled(enable: Bool): void
    set_test_function(function_: DepthTestFunction): void
    set_write_enabled(enable: Bool): void
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
    init_from_matrix(matrix: Matrix): void
    init_from_quaternion(quaternion: Quaternion): void
    static name: string
    /* Static methods and pseudo-constructors */
    static equal(v1?: object | null, v2?: object | null): Bool
}
class Fence {
    static name: string
}
class FenceClosure {
    /* Methods of Cogl-2.0.Cogl.FenceClosure */
    get_user_data(): object | null
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
    readonly glDepthRangef: (near_val: GL.float, far_val: GL.float) => void
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
    readonly base_class: GObject.TypeClass
    readonly dummy: number
    static name: string
}
class GtypeObject {
    /* Fields of Cogl-2.0.Cogl.GtypeObject */
    readonly parent_instance: GObject.TypeInstance
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
    frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void
    get_array(): number
    get_inverse(): [ /* returnType */ Bool, /* inverse */ Matrix ]
    init_from_array(array: number): void
    init_from_euler(euler: Euler): void
    init_from_quaternion(quaternion: Quaternion): void
    init_identity(): void
    init_translation(tx: number, ty: number, tz: number): void
    is_identity(): Bool
    look_at(eye_position_x: number, eye_position_y: number, eye_position_z: number, object_x: number, object_y: number, object_z: number, world_up_x: number, world_up_y: number, world_up_z: number): void
    multiply(a: Matrix, b: Matrix): void
    ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): void
    orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void
    perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void
    project_points(n_components: number, stride_in: number, points_in: object | null, stride_out: number, points_out: object | null, n_points: number): void
    rotate(angle: number, x: number, y: number, z: number): void
    rotate_euler(euler: Euler): void
    rotate_quaternion(quaternion: Quaternion): void
    scale(sx: number, sy: number, sz: number): void
    transform_point(x: number, y: number, z: number, w: number): [ /* x */ number, /* y */ number, /* z */ number, /* w */ number ]
    transform_points(n_components: number, stride_in: number, points_in: object | null, stride_out: number, points_out: object | null, n_points: number): void
    translate(x: number, y: number, z: number): void
    transpose(): void
    view_2d_in_frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_2d: number, width_2d: number, height_2d: number): void
    view_2d_in_perspective(fov_y: number, aspect: number, z_near: number, z_2d: number, width_2d: number, height_2d: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static equal(v1?: object | null, v2?: object | null): Bool
}
class MatrixEntry {
    /* Methods of Cogl-2.0.Cogl.MatrixEntry */
    calculate_translation(entry1: MatrixEntry): [ /* returnType */ Bool, /* x */ number, /* y */ number, /* z */ number ]
    equal(entry1: MatrixEntry): Bool
    get(): [ /* returnType */ Matrix, /* matrix */ Matrix ]
    is_identity(): Bool
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
    dot_product(b: Quaternion): number
    free(): void
    get_rotation_angle(): number
    get_rotation_axis(): /* vector3 */ number
    init(angle: number, x: number, y: number, z: number): void
    init_from_angle_vector(angle: number, axis3f: number): void
    init_from_array(array: number): void
    init_from_euler(euler: Euler): void
    init_from_matrix(matrix: Matrix): void
    init_from_quaternion(src: Quaternion): void
    init_from_x_rotation(angle: number): void
    init_from_y_rotation(angle: number): void
    init_from_z_rotation(angle: number): void
    init_identity(): void
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
    readonly compile_time_assert_CoglColor_size: number[]
    static name: string
}
class _EulerSizeCheck {
    /* Fields of Cogl-2.0.Cogl._EulerSizeCheck */
    readonly compile_time_assert_CoglEuler_size: number[]
    static name: string
}
class _MatrixSizeCheck {
    /* Fields of Cogl-2.0.Cogl._MatrixSizeCheck */
    readonly compile_time_assert_CoglMatrix_size: number[]
    static name: string
}
class _QuaternionSizeCheck {
    /* Fields of Cogl-2.0.Cogl._QuaternionSizeCheck */
    readonly compile_time_assert_CoglQuaternion_size: number[]
    static name: string
}
class _TextureVertexSizeCheck {
    /* Fields of Cogl-2.0.Cogl._TextureVertexSizeCheck */
    readonly compile_time_assert_CoglTextureVertex_size: number[]
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