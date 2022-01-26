/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gegl-0.4
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Babl from './Babl-0.1';

export namespace Gegl {

enum AbyssPolicy {
    NONE,
    CLAMP,
    LOOP,
    BLACK,
    WHITE,
}
enum BablVariant {
    FLOAT,
    LINEAR,
    NON_LINEAR,
    PERCEPTUAL,
    LINEAR_PREMULTIPLIED,
    PERCEPTUAL_PREMULTIPLIED,
    LINEAR_PREMULTIPLIED_IF_ALPHA,
    PERCEPTUAL_PREMULTIPLIED_IF_ALPHA,
    ADD_ALPHA,
}
enum CachePolicy {
    AUTO,
    NEVER,
    ALWAYS,
}
enum DistanceMetric {
    EUCLIDEAN,
    MANHATTAN,
    CHEBYSHEV,
}
enum DitherMethod {
    NONE,
    FLOYD_STEINBERG,
    BAYER,
    RANDOM,
    RANDOM_COVARIANT,
    ADD,
    ADD_COVARIANT,
    XOR,
    XOR_COVARIANT,
    BLUE_NOISE,
    BLUE_NOISE_COVARIANT,
}
enum MapFlags {
    MAP_EXCLUDE_UNMAPPED,
}
enum Orientation {
    HORIZONTAL,
    VERTICAL,
}
enum RectangleAlignment {
    SUBSET,
    SUPERSET,
    NEAREST,
}
enum ResolutionUnit {
    NONE,
    DPI,
    DPM,
}
enum SamplerType {
    NEAREST,
    LINEAR,
    CUBIC,
    NOHALO,
    LOHALO,
}
enum SplitStrategy {
    AUTO,
    HORIZONTAL,
    VERTICAL,
}
enum TileCommand {
    EGL_TILE_IDLE,
    EGL_TILE_SET,
    EGL_TILE_GET,
    EGL_TILE_IS_CACHED,
    EGL_TILE_EXIST,
    EGL_TILE_VOID,
    EGL_TILE_FLUSH,
    EGL_TILE_REFETCH,
    EGL_TILE_REINIT,
    GEGL_TILE_LAST_0_4_8_COMMAND,
    EGL_TILE_COPY,
    EGL_TILE_LAST_COMMAND,
}
enum AccessMode {
    READ,
    WRITE,
    READWRITE,
}
enum BlitFlags {
    DEFAULT,
    CACHE,
    DIRTY,
}
enum PadType {
    OUTPUT,
    INPUT,
}
enum SerializeFlag {
    TRIM_DEFAULTS,
    VERSION,
    INDENT,
    BAKE_ANIM,
}
const AUTO_ROWSTRIDE: number
const CH_BACK_CENTER: number
const CH_BACK_LEFT: number
const CH_BACK_RIGHT: number
const CH_FRONT_CENTER: number
const CH_FRONT_LEFT: number
const CH_FRONT_LEFT_OF_CENTER: number
const CH_FRONT_RIGHT: number
const CH_FRONT_RIGHT_OF_CENTER: number
const CH_LAYOUT_2POINT1: number
const CH_LAYOUT_2_1: number
const CH_LAYOUT_2_2: number
const CH_LAYOUT_3POINT1: number
const CH_LAYOUT_4POINT0: number
const CH_LAYOUT_4POINT1: number
const CH_LAYOUT_5POINT0: number
const CH_LAYOUT_5POINT0_BACK: number
const CH_LAYOUT_5POINT1: number
const CH_LAYOUT_5POINT1_BACK: number
const CH_LAYOUT_6POINT0: number
const CH_LAYOUT_6POINT0_FRONT: number
const CH_LAYOUT_6POINT1: number
const CH_LAYOUT_6POINT1_BACK: number
const CH_LAYOUT_6POINT1_FRONT: number
const CH_LAYOUT_7POINT0: number
const CH_LAYOUT_7POINT0_FRONT: number
const CH_LAYOUT_7POINT1: number
const CH_LAYOUT_7POINT1_WIDE: number
const CH_LAYOUT_7POINT1_WIDE_BACK: number
const CH_LAYOUT_HEXADECAGONAL: number
const CH_LAYOUT_HEXAGONAL: number
const CH_LAYOUT_NATIVE: number
const CH_LAYOUT_OCTAGONAL: number
const CH_LAYOUT_QUAD: number
const CH_LAYOUT_STEREO: number
const CH_LAYOUT_STEREO_DOWNMIX: number
const CH_LAYOUT_SURROUND: number
const CH_LOW_FREQUENCY: number
const CH_LOW_FREQUENCY_2: number
const CH_SIDE_LEFT: number
const CH_SIDE_RIGHT: number
const CH_STEREO_LEFT: number
const CH_STEREO_RIGHT: number
const CH_SURROUND_DIRECT_LEFT: number
const CH_SURROUND_DIRECT_RIGHT: number
const CH_TOP_BACK_CENTER: number
const CH_TOP_BACK_LEFT: number
const CH_TOP_BACK_RIGHT: number
const CH_TOP_CENTER: number
const CH_TOP_FRONT_CENTER: number
const CH_TOP_FRONT_LEFT: number
const CH_TOP_FRONT_RIGHT: number
const CH_WIDE_LEFT: number
const CH_WIDE_RIGHT: number
const FLOAT_EPSILON: number
const LOOKUP_MAX_ENTRIES: number
const MAJOR_VERSION: number
const MAX_AUDIO_CHANNELS: number
const MICRO_VERSION: number
const MINOR_VERSION: number
const PARAM_NO_VALIDATE: number
function babl_variant(format: Babl.Object, variant: BablVariant): Babl.Object
function cl_disable(): void
function cl_init(): boolean
function cl_is_accelerated(): boolean
function config(): Config
function create_chain(ops: string, op_start: Node, op_end: Node, time: number, rel_dim: number, path_root: string): void
function create_chain_argv(ops: string, op_start: Node, op_end: Node, time: number, rel_dim: number, path_root: string): void
function exit(): void
function format(format_name: string): any | null
function format_get_name(format: any): string | null
function get_version(): [ /* major */ number, /* minor */ number, /* micro */ number ]
function graph_dump_outputs(node: Node): void
function graph_dump_request(node: Node, roi: Rectangle): void
function has_operation(operation_type: string): boolean
function init(argv?: string[] | null): /* argv */ string[] | null
function is_main_thread(): boolean
function list_operations(): string[]
function load_module_directory(path: string): void
function parallel_distribute(max_n: number, func: ParallelDistributeFunc): void
function parallel_distribute_area(area: Rectangle, thread_cost: number, split_strategy: SplitStrategy, func: ParallelDistributeAreaFunc): void
function parallel_distribute_range(size: number, thread_cost: number, func: ParallelDistributeRangeFunc): void
function param_spec_audio_fragment(name: string, nick: string, blurb: string, flags: GObject.ParamFlags): GObject.ParamSpec
function param_spec_color(name: string, nick: string, blurb: string, default_color: Color, flags: GObject.ParamFlags): GObject.ParamSpec
function param_spec_color_from_string(name: string, nick: string, blurb: string, default_color_string: string, flags: GObject.ParamFlags): GObject.ParamSpec
function param_spec_color_get_default(self: GObject.ParamSpec): Color
function param_spec_curve(name: string, nick: string, blurb: string, default_curve: Curve, flags: GObject.ParamFlags): GObject.ParamSpec
function param_spec_double(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, ui_minimum: number, ui_maximum: number, ui_gamma: number, flags: GObject.ParamFlags): GObject.ParamSpec
function param_spec_enum(name: string, nick: string, blurb: string, enum_type: GObject.Type, default_value: number, flags: GObject.ParamFlags): GObject.ParamSpec
function param_spec_file_path(name: string, nick: string, blurb: string, no_validate: boolean, null_ok: boolean, default_value: string, flags: GObject.ParamFlags): GObject.ParamSpec
function param_spec_format(name: string, nick: string, blurb: string, flags: GObject.ParamFlags): GObject.ParamSpec
function param_spec_get_property_key(pspec: GObject.ParamSpec, key_name: string): string
function param_spec_int(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, ui_minimum: number, ui_maximum: number, ui_gamma: number, flags: GObject.ParamFlags): GObject.ParamSpec
function param_spec_path(name: string, nick: string, blurb: string, default_path: Path, flags: GObject.ParamFlags): GObject.ParamSpec
function param_spec_seed(name: string, nick: string, blurb: string, flags: GObject.ParamFlags): GObject.ParamSpec
function param_spec_set_property_key(pspec: GObject.ParamSpec, key_name: string, value: string): void
function param_spec_string(name: string, nick: string, blurb: string, no_validate: boolean, null_ok: boolean, default_value: string, flags: GObject.ParamFlags): GObject.ParamSpec
function param_spec_uri(name: string, nick: string, blurb: string, no_validate: boolean, null_ok: boolean, default_value: string, flags: GObject.ParamFlags): GObject.ParamSpec
function rectangle_infinite_plane(): Rectangle
function reset_stats(): void
function serialize(start: Node, end: Node, basepath: string, serialize_flags: SerializeFlag): string
function stats(): Stats
interface LookupFunction {
    (value: number, data?: object | null): number
}
interface NodeFunction {
    (node: PathItem): void
}
interface ParallelDistributeAreaFunc {
    (area: Rectangle): void
}
interface ParallelDistributeFunc {
    (i: number, n: number): void
}
interface ParallelDistributeRangeFunc {
    (offset: number, size: number): void
}
interface SamplerGetFun {
    (self: Sampler, x: number, y: number, scale: BufferMatrix2, output: object | null, repeat_mode: AbyssPolicy): void
}
interface TileCallback {
    (tile: Tile): void
}
interface TileSourceCommand {
    (gegl_tile_source: TileSource, command: TileCommand, x: number, y: number, z: number, data?: object | null): object | null
}
class Metadata {
    /* Methods of Gegl-0.4.Gegl.Metadata */
    get_resolution(unit: ResolutionUnit, x: number, y: number): boolean
    iter_get_value(iter: MetadataIter, value: any): boolean
    iter_init(iter: MetadataIter): void
    iter_lookup(iter: MetadataIter, key: string): boolean
    iter_next(iter: MetadataIter): string
    iter_set_value(iter: MetadataIter, value: any): boolean
    register_map(file_module: string, flags: number, map: MetadataMap[]): void
    set_resolution(unit: ResolutionUnit, x: number, y: number): boolean
    unregister_map(): void
    /* Virtual methods of Gegl-0.4.Gegl.Metadata */
    vfunc_get_resolution(unit: ResolutionUnit, x: number, y: number): boolean
    vfunc_iter_get_value(iter: MetadataIter, value: any): boolean
    vfunc_iter_init(iter: MetadataIter): void
    vfunc_iter_lookup(iter: MetadataIter, key: string): boolean
    vfunc_iter_next(iter: MetadataIter): string
    vfunc_iter_set_value(iter: MetadataIter, value: any): boolean
    vfunc_register_map(file_module: string, flags: number, map: MetadataMap[]): void
    vfunc_set_resolution(unit: ResolutionUnit, x: number, y: number): boolean
    static name: string
}
interface AudioFragment_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gegl-0.4.Gegl.AudioFragment */
    string?: string
}
class AudioFragment {
    /* Properties of Gegl-0.4.Gegl.AudioFragment */
    string: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.AudioFragment */
    get_channel_layout(): number
    get_channels(): number
    get_max_samples(): number
    get_pos(): number
    get_sample_count(): number
    get_sample_rate(): number
    set_channel_layout(channel_layout: number): void
    set_channels(channels: number): void
    set_max_samples(max_samples: number): void
    set_pos(pos: number): void
    set_sample_count(sample_count: number): void
    set_sample_rate(sample_rate: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AudioFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::string", callback: (($obj: AudioFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::string", callback: (($obj: AudioFragment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AudioFragment_ConstructProps)
    _init (config?: AudioFragment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sample_rate: number, channels: number, channel_layout: number, max_samples: number): AudioFragment
    static $gtype: GObject.Type
}
interface Buffer_ConstructProps extends TileHandler_ConstructProps {
    /* Constructor properties of Gegl-0.4.Gegl.Buffer */
    abyss_height?: number
    abyss_width?: number
    abyss_x?: number
    abyss_y?: number
    backend?: TileBackend
    format?: object
    height?: number
    initialized?: boolean
    path?: string
    shift_x?: number
    shift_y?: number
    tile_height?: number
    tile_width?: number
    width?: number
    x?: number
    y?: number
}
class Buffer {
    /* Properties of Gegl-0.4.Gegl.Buffer */
    format: object
    height: number
    readonly pixels: number
    readonly px_size: number
    width: number
    x: number
    y: number
    /* Fields of Gegl-0.4.Gegl.TileHandler */
    readonly parent_instance: TileSource
    readonly source: TileSource
    readonly priv: TileHandlerPrivate
    /* Fields of Gegl-0.4.Gegl.TileSource */
    readonly command: TileSourceCommand
    readonly padding: object[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.Buffer */
    add_handler(handler?: object | null): void
    clear(roi: Rectangle): void
    copy(src_rect: Rectangle, repeat_mode: AbyssPolicy, dst: Buffer, dst_rect: Rectangle): void
    create_sub_buffer(extent: Rectangle): Buffer
    dup(): Buffer
    flush(): void
    flush_ext(rect: Rectangle): void
    freeze_changed(): void
    get_abyss(): Rectangle
    get_extent(): Rectangle
    get(rect: Rectangle, scale: number, format_name: string | null, repeat_mode: AbyssPolicy): Uint8Array
    set(rect: Rectangle, format_name: string, src: Uint8Array): void
    linear_close(linear?: object | null): void
    remove_handler(handler?: object | null): void
    sample_cleanup(): void
    save(path: string, roi: Rectangle): void
    set_abyss(abyss: Rectangle): boolean
    set_color(rect: Rectangle, color: Color): void
    set_color_from_pixel(rect: Rectangle, pixel: object | null, pixel_format: Babl.Object): void
    set_extent(extent: Rectangle): boolean
    set_pattern(rect: Rectangle, pattern: Buffer, x_offset: number, y_offset: number): void
    share_storage(buffer2: Buffer): boolean
    signal_connect(detailed_signal: string, c_handler: GObject.Callback): number
    thaw_changed(): void
    /* Methods of Gegl-0.4.Gegl.TileHandler */
    damage_rect(rect: Rectangle): void
    damage_tile(x: number, y: number, z: number, damage: number): void
    lock(): void
    set_source(source: TileSource): void
    unlock(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gegl-0.4.Gegl.Buffer */
    connect(sigName: "changed", callback: (($obj: Buffer, object: Rectangle) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Buffer, object: Rectangle) => void)): number
    emit(sigName: "changed", object: Rectangle): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::format", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pixels", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::px-size", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::px-size", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::x", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::y", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Buffer_ConstructProps)
    _init (config?: Buffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(format_name: string, x: number, y: number, width: number, height: number): Buffer
    static new_for_backend(extent: Rectangle, backend: TileBackend): Buffer
    static load(path: string): Buffer
    static open(path: string): Buffer
    static swap_create_file(suffix?: string | null): string | null
    static swap_has_file(path: string): boolean
    static swap_remove_file(path: string): void
    static $gtype: GObject.Type
}
interface Color_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gegl-0.4.Gegl.Color */
    string?: string
}
class Color {
    /* Properties of Gegl-0.4.Gegl.Color */
    string: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.Color */
    duplicate(): Color
    get_components(format: any): number[]
    get_format(): Babl.Object
    get_rgba(): [ /* red */ number, /* green */ number, /* blue */ number, /* alpha */ number ]
    set_components(format: any, components: number[]): void
    set_rgba(red: number, green: number, blue: number, alpha: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Color, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Color, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::string", callback: (($obj: Color, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::string", callback: (($obj: Color, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Color_ConstructProps)
    _init (config?: Color_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(string: string): Color
    static $gtype: GObject.Type
}
interface Config_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gegl-0.4.Gegl.Config */
    application_license?: string
    chunk_size?: number
    mipmap_rendering?: boolean
    quality?: number
    queue_size?: number
    swap?: string
    swap_compression?: string
    threads?: number
    tile_cache_size?: number
    tile_height?: number
    tile_width?: number
    use_opencl?: boolean
}
class Config {
    /* Properties of Gegl-0.4.Gegl.Config */
    application_license: string
    chunk_size: number
    mipmap_rendering: boolean
    quality: number
    queue_size: number
    swap: string
    swap_compression: string
    threads: number
    tile_cache_size: number
    tile_height: number
    tile_width: number
    use_opencl: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::application-license", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-license", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::chunk-size", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chunk-size", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mipmap-rendering", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mipmap-rendering", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::quality", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quality", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::queue-size", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::queue-size", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::swap", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::swap-compression", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-compression", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::threads", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::threads", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tile-cache-size", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-size", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tile-height", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-height", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tile-width", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-width", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-opencl", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-opencl", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Config_ConstructProps)
    _init (config?: Config_ConstructProps): void
    static $gtype: GObject.Type
}
interface Curve_ConstructProps extends GObject.Object_ConstructProps {
}
class Curve {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.Curve */
    add_point(x: number, y: number): number
    calc_value(x: number): number
    duplicate(): Curve
    get_point(index: number): [ /* x */ number, /* y */ number ]
    get_y_bounds(): [ /* min_y */ number, /* max_y */ number ]
    num_points(): number
    set_point(index: number, x: number, y: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Curve, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Curve, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Curve_ConstructProps)
    _init (config?: Curve_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(y_min: number, y_max: number): Curve
    static new_default(): Curve
    static $gtype: GObject.Type
}
interface MetadataHash_ConstructProps extends MetadataStore_ConstructProps {
}
class MetadataHash {
    /* Properties of Gegl-0.4.Gegl.MetadataStore */
    artist: string
    comment: string
    copyright: string
    description: string
    disclaimer: string
    readonly file_module_name: string
    resolution_unit: ResolutionUnit
    resolution_x: number
    resolution_y: number
    software: string
    source: string
    timestamp: GLib.DateTime
    title: string
    warning: string
    /* Fields of Gegl-0.4.Gegl.MetadataStore */
    readonly parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.MetadataStore */
    declare(pspec: GObject.ParamSpec): void
    get_artist(): string
    get_comment(): string
    get_copyright(): string
    get_description(): string
    get_disclaimer(): string
    get_file_module_name(): string
    get_resolution_unit(): ResolutionUnit
    get_resolution_x(): number
    get_resolution_y(): number
    get_software(): string
    get_source(): string
    get_string(name: string): string
    get_timestamp(): GLib.DateTime
    get_title(): string
    get_value(name: string, value: any): /* value */ any
    get_warning(): string
    has_value(name: string): boolean
    notify(pspec: GObject.ParamSpec, shadow: boolean): void
    register(local_name: string, name: string, transform: GObject.ValueTransform): void
    set_artist(artist: string): void
    set_comment(comment: string): void
    set_copyright(copyright: string): void
    set_description(description: string): void
    set_disclaimer(disclaimer: string): void
    set_resolution_unit(unit: ResolutionUnit): void
    set_resolution_x(resolution_x: number): void
    set_resolution_y(resolution_y: number): void
    set_software(software: string): void
    set_source(source: string): void
    set_string(name: string, string: string): void
    set_timestamp(timestamp: GLib.DateTime): void
    set_title(title: string): void
    set_value(name: string, value: any): void
    set_warning(warning: string): void
    typeof_value(name: string): GObject.Type
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gegl-0.4.Gegl.Metadata */
    get_resolution(unit: ResolutionUnit, x: number, y: number): boolean
    iter_get_value(iter: MetadataIter, value: any): boolean
    iter_init(iter: MetadataIter): void
    iter_lookup(iter: MetadataIter, key: string): boolean
    iter_next(iter: MetadataIter): string
    iter_set_value(iter: MetadataIter, value: any): boolean
    register_map(file_module: string, flags: number, map: MetadataMap[]): void
    set_resolution(unit: ResolutionUnit, x: number, y: number): boolean
    unregister_map(): void
    /* Virtual methods of Gegl-0.4.Gegl.MetadataHash */
    vfunc_get_resolution(unit: ResolutionUnit, x: number, y: number): boolean
    vfunc_iter_get_value(iter: MetadataIter, value: any): boolean
    vfunc_iter_init(iter: MetadataIter): void
    vfunc_iter_lookup(iter: MetadataIter, key: string): boolean
    vfunc_iter_next(iter: MetadataIter): string
    vfunc_iter_set_value(iter: MetadataIter, value: any): boolean
    vfunc_register_map(file_module: string, flags: number, map: MetadataMap[]): void
    vfunc_set_resolution(unit: ResolutionUnit, x: number, y: number): boolean
    /* Virtual methods of Gegl-0.4.Gegl.MetadataStore */
    vfunc__declare(pspec: GObject.ParamSpec, shadow: boolean): void
    vfunc__get_value(name: string): any
    vfunc_has_value(name: string): boolean
    vfunc_register_hook(file_module_name: string, flags: number): void
    vfunc_set_value(name: string, value: any): void
    vfunc_get_resolution(unit: ResolutionUnit, x: number, y: number): boolean
    vfunc_iter_get_value(iter: MetadataIter, value: any): boolean
    vfunc_iter_init(iter: MetadataIter): void
    vfunc_iter_lookup(iter: MetadataIter, key: string): boolean
    vfunc_iter_next(iter: MetadataIter): string
    vfunc_iter_set_value(iter: MetadataIter, value: any): boolean
    vfunc_register_map(file_module: string, flags: number, map: MetadataMap[]): void
    vfunc_set_resolution(unit: ResolutionUnit, x: number, y: number): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gegl-0.4.Gegl.MetadataStore */
    connect(sigName: "changed", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "changed", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "changed", pspec: GObject.ParamSpec): void
    connect(sigName: "generate-value", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec, value: any) => boolean)): number
    connect_after(sigName: "generate-value", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec, value: any) => boolean)): number
    emit(sigName: "generate-value", pspec: GObject.ParamSpec, value: any): void
    connect(sigName: "mapped", callback: (($obj: MetadataHash, file_module: string, exclude_unmapped: boolean) => void)): number
    connect_after(sigName: "mapped", callback: (($obj: MetadataHash, file_module: string, exclude_unmapped: boolean) => void)): number
    emit(sigName: "mapped", file_module: string, exclude_unmapped: boolean): void
    connect(sigName: "parse-value", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec, value: any) => boolean)): number
    connect_after(sigName: "parse-value", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec, value: any) => boolean)): number
    emit(sigName: "parse-value", pspec: GObject.ParamSpec, value: any): void
    connect(sigName: "unmapped", callback: (($obj: MetadataHash, file_module: string, local_name: string) => void)): number
    connect_after(sigName: "unmapped", callback: (($obj: MetadataHash, file_module: string, local_name: string) => void)): number
    emit(sigName: "unmapped", file_module: string, local_name: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::artist", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::comment", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::comment", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::copyright", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copyright", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::disclaimer", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disclaimer", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::file-module-name", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-module-name", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resolution-unit", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-unit", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resolution-x", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-x", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resolution-y", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-y", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::software", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::software", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timestamp", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::warning", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MetadataHash_ConstructProps)
    _init (config?: MetadataHash_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MetadataHash
    static $gtype: GObject.Type
}
interface MetadataStore_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gegl-0.4.Gegl.MetadataStore */
    artist?: string
    comment?: string
    copyright?: string
    description?: string
    disclaimer?: string
    resolution_unit?: ResolutionUnit
    resolution_x?: number
    resolution_y?: number
    software?: string
    source?: string
    timestamp?: GLib.DateTime
    title?: string
    warning?: string
}
class MetadataStore {
    /* Properties of Gegl-0.4.Gegl.MetadataStore */
    artist: string
    comment: string
    copyright: string
    description: string
    disclaimer: string
    readonly file_module_name: string
    resolution_unit: ResolutionUnit
    resolution_x: number
    resolution_y: number
    software: string
    source: string
    timestamp: GLib.DateTime
    title: string
    warning: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.MetadataStore */
    declare(pspec: GObject.ParamSpec): void
    get_artist(): string
    get_comment(): string
    get_copyright(): string
    get_description(): string
    get_disclaimer(): string
    get_file_module_name(): string
    get_resolution_unit(): ResolutionUnit
    get_resolution_x(): number
    get_resolution_y(): number
    get_software(): string
    get_source(): string
    get_string(name: string): string
    get_timestamp(): GLib.DateTime
    get_title(): string
    get_value(name: string, value: any): /* value */ any
    get_warning(): string
    has_value(name: string): boolean
    notify(pspec: GObject.ParamSpec, shadow: boolean): void
    register(local_name: string, name: string, transform: GObject.ValueTransform): void
    set_artist(artist: string): void
    set_comment(comment: string): void
    set_copyright(copyright: string): void
    set_description(description: string): void
    set_disclaimer(disclaimer: string): void
    set_resolution_unit(unit: ResolutionUnit): void
    set_resolution_x(resolution_x: number): void
    set_resolution_y(resolution_y: number): void
    set_software(software: string): void
    set_source(source: string): void
    set_string(name: string, string: string): void
    set_timestamp(timestamp: GLib.DateTime): void
    set_title(title: string): void
    set_value(name: string, value: any): void
    set_warning(warning: string): void
    typeof_value(name: string): GObject.Type
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gegl-0.4.Gegl.Metadata */
    get_resolution(unit: ResolutionUnit, x: number, y: number): boolean
    iter_get_value(iter: MetadataIter, value: any): boolean
    iter_init(iter: MetadataIter): void
    iter_lookup(iter: MetadataIter, key: string): boolean
    iter_next(iter: MetadataIter): string
    iter_set_value(iter: MetadataIter, value: any): boolean
    register_map(file_module: string, flags: number, map: MetadataMap[]): void
    set_resolution(unit: ResolutionUnit, x: number, y: number): boolean
    unregister_map(): void
    /* Virtual methods of Gegl-0.4.Gegl.MetadataStore */
    vfunc__declare(pspec: GObject.ParamSpec, shadow: boolean): void
    vfunc__get_value(name: string): any
    vfunc_has_value(name: string): boolean
    vfunc_register_hook(file_module_name: string, flags: number): void
    vfunc_set_value(name: string, value: any): void
    vfunc_get_resolution(unit: ResolutionUnit, x: number, y: number): boolean
    vfunc_iter_get_value(iter: MetadataIter, value: any): boolean
    vfunc_iter_init(iter: MetadataIter): void
    vfunc_iter_lookup(iter: MetadataIter, key: string): boolean
    vfunc_iter_next(iter: MetadataIter): string
    vfunc_iter_set_value(iter: MetadataIter, value: any): boolean
    vfunc_register_map(file_module: string, flags: number, map: MetadataMap[]): void
    vfunc_set_resolution(unit: ResolutionUnit, x: number, y: number): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gegl-0.4.Gegl.MetadataStore */
    connect(sigName: "changed", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "changed", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "changed", pspec: GObject.ParamSpec): void
    connect(sigName: "generate-value", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec, value: any) => boolean)): number
    connect_after(sigName: "generate-value", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec, value: any) => boolean)): number
    emit(sigName: "generate-value", pspec: GObject.ParamSpec, value: any): void
    connect(sigName: "mapped", callback: (($obj: MetadataStore, file_module: string, exclude_unmapped: boolean) => void)): number
    connect_after(sigName: "mapped", callback: (($obj: MetadataStore, file_module: string, exclude_unmapped: boolean) => void)): number
    emit(sigName: "mapped", file_module: string, exclude_unmapped: boolean): void
    connect(sigName: "parse-value", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec, value: any) => boolean)): number
    connect_after(sigName: "parse-value", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec, value: any) => boolean)): number
    emit(sigName: "parse-value", pspec: GObject.ParamSpec, value: any): void
    connect(sigName: "unmapped", callback: (($obj: MetadataStore, file_module: string, local_name: string) => void)): number
    connect_after(sigName: "unmapped", callback: (($obj: MetadataStore, file_module: string, local_name: string) => void)): number
    emit(sigName: "unmapped", file_module: string, local_name: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::artist", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::comment", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::comment", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::copyright", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copyright", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::disclaimer", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disclaimer", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::file-module-name", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-module-name", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resolution-unit", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-unit", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resolution-x", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-x", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resolution-y", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-y", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::software", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::software", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timestamp", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::warning", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MetadataStore_ConstructProps)
    _init (config?: MetadataStore_ConstructProps): void
    static $gtype: GObject.Type
}
interface Node_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gegl-0.4.Gegl.Node */
    cache_policy?: CachePolicy
    dont_cache?: boolean
    gegl_operation?: Operation
    name?: string
    operation?: string
    passthrough?: boolean
    use_opencl?: boolean
}
class Node {
    /* Properties of Gegl-0.4.Gegl.Node */
    cache_policy: CachePolicy
    dont_cache: boolean
    gegl_operation: Operation
    name: string
    operation: string
    passthrough: boolean
    use_opencl: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.Node */
    add_child(child: Node): Node
    blit_buffer(buffer: Buffer | null, roi: Rectangle | null, level: number, abyss_policy: AbyssPolicy): void
    connect_from(input_pad_name: string, source: Node, output_pad_name: string): boolean
    connect_to(output_pad_name: string, sink: Node, input_pad_name: string): boolean
    create_child(operation: string): Node
    detect(x: number, y: number): Node
    disconnect(input_pad: string): boolean
    find_property(property_name: string): GObject.ParamSpec
    get_children(): Node[]
    get_consumers(output_pad: string): [ /* returnType */ number, /* nodes */ Node[] | null, /* pads */ string[] | null ]
    get_gegl_operation(): Operation | null
    get_input_proxy(pad_name: string): Node
    get_operation(): string
    get_output_proxy(pad_name: string): Node
    get_parent(): Node
    get_passthrough(): boolean
    get_producer(input_pad_name: string, output_pad_name?: string | null): Node
    has_pad(pad_name: string): boolean
    get_bounding_box(): Rectangle
    get_property(property_name: string): any
    is_graph(): boolean
    link(sink: Node): void
    list_input_pads(): string[]
    list_output_pads(): string[]
    new_processor(rectangle: Rectangle): Processor
    process(): void
    progress(progress: number, message: string): void
    remove_child(child: Node): Node
    set_passthrough(passthrough: boolean): void
    set_property(property_name: string, value: any): void
    set_time(time: number): void
    to_xml(path_root: string): string
    to_xml_full(tail: Node | null, path_root: string): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gegl-0.4.Gegl.Node */
    connect(sigName: "computed", callback: (($obj: Node, object: Rectangle) => void)): number
    connect_after(sigName: "computed", callback: (($obj: Node, object: Rectangle) => void)): number
    emit(sigName: "computed", object: Rectangle): void
    connect(sigName: "invalidated", callback: (($obj: Node, object: Rectangle) => void)): number
    connect_after(sigName: "invalidated", callback: (($obj: Node, object: Rectangle) => void)): number
    emit(sigName: "invalidated", object: Rectangle): void
    connect(sigName: "progress", callback: (($obj: Node, object: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: Node, object: number) => void)): number
    emit(sigName: "progress", object: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cache-policy", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-policy", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dont-cache", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dont-cache", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gegl-operation", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gegl-operation", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::operation", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operation", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::passthrough", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::passthrough", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-opencl", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-opencl", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Node_ConstructProps)
    _init (config?: Node_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Node
    static new_from_file(path: string): Node
    static new_from_serialized(chaindata: string, path_root: string): Node
    static new_from_xml(xmldata: string, path_root: string): Node
    static $gtype: GObject.Type
}
interface Operation_ConstructProps extends GObject.Object_ConstructProps {
}
class Operation {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Operation_ConstructProps)
    _init (config?: Operation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static find_property(operation_type: string, property_name: string): GObject.ParamSpec
    static get_key(operation_type: string, key_name: string): string
    static get_op_version(op_name: string): string
    static get_property_key(operation_type: string, property_name: string, property_key_name: string): string
    static list_keys(operation_type: string): string[]
    static list_properties(operation_type: string): GObject.ParamSpec[]
    static list_property_keys(operation_type: string, property_name: string): string[]
    static $gtype: GObject.Type
}
class ParamAudioFragment {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: GObject.TypeInstance
    readonly name: string
    readonly flags: GObject.ParamFlags
    readonly value_type: GObject.Type
    readonly owner_type: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): GObject.ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamColor {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: GObject.TypeInstance
    readonly name: string
    readonly flags: GObject.ParamFlags
    readonly value_type: GObject.Type
    readonly owner_type: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): GObject.ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamCurve {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: GObject.TypeInstance
    readonly name: string
    readonly flags: GObject.ParamFlags
    readonly value_type: GObject.Type
    readonly owner_type: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): GObject.ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamDouble {
    /* Fields of GObject-2.0.GObject.ParamSpecDouble */
    readonly parent_instance: GObject.ParamSpec
    readonly minimum: number
    readonly maximum: number
    readonly default_value: number
    readonly epsilon: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: GObject.TypeInstance
    readonly name: string
    readonly flags: GObject.ParamFlags
    readonly value_type: GObject.Type
    readonly owner_type: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): GObject.ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamEnum {
    /* Fields of GObject-2.0.GObject.ParamSpecEnum */
    readonly parent_instance: GObject.ParamSpec
    readonly enum_class: GObject.EnumClass
    readonly default_value: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: GObject.TypeInstance
    readonly name: string
    readonly flags: GObject.ParamFlags
    readonly value_type: GObject.Type
    readonly owner_type: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): GObject.ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamFilePath {
    /* Fields of GObject-2.0.GObject.ParamSpecString */
    readonly parent_instance: GObject.ParamSpec
    readonly default_value: string
    readonly cset_first: string
    readonly cset_nth: string
    readonly substitutor: number
    readonly null_fold_if_empty: number
    readonly ensure_non_null: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: GObject.TypeInstance
    readonly name: string
    readonly flags: GObject.ParamFlags
    readonly value_type: GObject.Type
    readonly owner_type: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): GObject.ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamFormat {
    /* Fields of GObject-2.0.GObject.ParamSpecPointer */
    readonly parent_instance: GObject.ParamSpec
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: GObject.TypeInstance
    readonly name: string
    readonly flags: GObject.ParamFlags
    readonly value_type: GObject.Type
    readonly owner_type: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): GObject.ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamInt {
    /* Fields of GObject-2.0.GObject.ParamSpecInt */
    readonly parent_instance: GObject.ParamSpec
    readonly minimum: number
    readonly maximum: number
    readonly default_value: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: GObject.TypeInstance
    readonly name: string
    readonly flags: GObject.ParamFlags
    readonly value_type: GObject.Type
    readonly owner_type: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): GObject.ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamPath {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: GObject.TypeInstance
    readonly name: string
    readonly flags: GObject.ParamFlags
    readonly value_type: GObject.Type
    readonly owner_type: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): GObject.ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSeed {
    /* Fields of GObject-2.0.GObject.ParamSpecUInt */
    readonly parent_instance: GObject.ParamSpec
    readonly minimum: number
    readonly maximum: number
    readonly default_value: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: GObject.TypeInstance
    readonly name: string
    readonly flags: GObject.ParamFlags
    readonly value_type: GObject.Type
    readonly owner_type: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): GObject.ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamString {
    /* Fields of GObject-2.0.GObject.ParamSpecString */
    readonly parent_instance: GObject.ParamSpec
    readonly default_value: string
    readonly cset_first: string
    readonly cset_nth: string
    readonly substitutor: number
    readonly null_fold_if_empty: number
    readonly ensure_non_null: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: GObject.TypeInstance
    readonly name: string
    readonly flags: GObject.ParamFlags
    readonly value_type: GObject.Type
    readonly owner_type: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): GObject.ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamUri {
    /* Fields of GObject-2.0.GObject.ParamSpecString */
    readonly parent_instance: GObject.ParamSpec
    readonly default_value: string
    readonly cset_first: string
    readonly cset_nth: string
    readonly substitutor: number
    readonly null_fold_if_empty: number
    readonly ensure_non_null: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: GObject.TypeInstance
    readonly name: string
    readonly flags: GObject.ParamFlags
    readonly value_type: GObject.Type
    readonly owner_type: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): GObject.ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
interface Path_ConstructProps extends GObject.Object_ConstructProps {
}
class Path {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.Path */
    calc(pos: number): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    calc_y_for_x(x: number): [ /* returnType */ number, /* y */ number ]
    clear(): void
    closest_point(x: number, y: number): [ /* returnType */ number, /* on_path_x */ number, /* on_path_y */ number, /* node_pos_before */ number ]
    dirty(): void
    foreach(each_item: NodeFunction): void
    foreach_flat(each_item: NodeFunction): void
    freeze(): void
    get_bounds(): [ /* min_x */ number, /* max_x */ number, /* min_y */ number, /* max_y */ number ]
    get_length(): number
    get_matrix(): /* matrix */ Matrix3
    get_n_nodes(): number
    get_node(index: number): [ /* returnType */ boolean, /* node */ PathItem ]
    insert_node(pos: number, node: PathItem): void
    is_empty(): boolean
    parse_string(instructions: string): void
    remove_node(pos: number): void
    replace_node(pos: number, node: PathItem): void
    set_matrix(matrix: Matrix3): void
    thaw(): void
    to_string(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gegl-0.4.Gegl.Path */
    connect(sigName: "changed", callback: (($obj: Path, object?: object | null) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Path, object?: object | null) => void)): number
    emit(sigName: "changed", object?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Path, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Path, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Path_ConstructProps)
    _init (config?: Path_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Path
    static new_from_string(instructions: string): Path
    static add_type(type: number, items: number, description: string): void
    static $gtype: GObject.Type
}
interface Processor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gegl-0.4.Gegl.Processor */
    chunksize?: number
    node?: Node
    progress?: number
    rectangle?: object
}
class Processor {
    /* Properties of Gegl-0.4.Gegl.Processor */
    node: Node
    progress: number
    rectangle: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.Processor */
    get_buffer(): Buffer
    set_level(level: number): void
    set_rectangle(rectangle: Rectangle): void
    set_scale(scale: number): void
    work(): [ /* returnType */ boolean, /* progress */ number ]
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Processor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Processor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::node", callback: (($obj: Processor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: Processor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress", callback: (($obj: Processor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: Processor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rectangle", callback: (($obj: Processor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangle", callback: (($obj: Processor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Processor_ConstructProps)
    _init (config?: Processor_ConstructProps): void
    static $gtype: GObject.Type
}
interface Stats_ConstructProps extends GObject.Object_ConstructProps {
}
class Stats {
    /* Properties of Gegl-0.4.Gegl.Stats */
    readonly active_threads: number
    readonly assigned_threads: number
    readonly scratch_total: number
    readonly swap_busy: boolean
    readonly swap_file_size: number
    readonly swap_queue_full: boolean
    readonly swap_queue_stalls: number
    readonly swap_queued_total: number
    readonly swap_read_total: number
    readonly swap_reading: boolean
    readonly swap_total: number
    readonly swap_total_uncompressed: number
    readonly swap_write_total: number
    readonly swap_writing: boolean
    readonly tile_alloc_total: number
    readonly tile_cache_hits: number
    readonly tile_cache_misses: number
    readonly tile_cache_total: number
    readonly tile_cache_total_max: number
    readonly tile_cache_total_uncompressed: number
    readonly zoom_total: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active-threads", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-threads", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::assigned-threads", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::assigned-threads", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scratch-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scratch-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::swap-busy", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-busy", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::swap-file-size", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-file-size", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::swap-queue-full", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-queue-full", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::swap-queue-stalls", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-queue-stalls", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::swap-queued-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-queued-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::swap-read-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-read-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::swap-reading", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-reading", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::swap-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::swap-total-uncompressed", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-total-uncompressed", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::swap-write-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-write-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::swap-writing", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-writing", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tile-alloc-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-alloc-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tile-cache-hits", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-hits", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tile-cache-misses", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-misses", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tile-cache-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tile-cache-total-max", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-total-max", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tile-cache-total-uncompressed", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-total-uncompressed", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::zoom-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Stats_ConstructProps)
    _init (config?: Stats_ConstructProps): void
    static $gtype: GObject.Type
}
interface TileBackend_ConstructProps extends TileSource_ConstructProps {
    /* Constructor properties of Gegl-0.4.Gegl.TileBackend */
    flush_on_destroy?: boolean
    format?: object
    tile_height?: number
    tile_width?: number
}
class TileBackend {
    /* Properties of Gegl-0.4.Gegl.TileBackend */
    flush_on_destroy: boolean
    readonly px_size: number
    readonly tile_size: number
    /* Fields of Gegl-0.4.Gegl.TileSource */
    readonly parent_instance: GObject.Object
    readonly padding: object[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.TileBackend */
    command(command: TileCommand, x: number, y: number, z: number, data?: object | null): object | null
    get_flush_on_destroy(): boolean
    get_tile_height(): number
    get_tile_size(): number
    get_tile_width(): number
    peek_storage(): TileSource
    set_extent(rectangle: Rectangle): void
    set_flush_on_destroy(flush_on_destroy: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TileBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TileBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::flush-on-destroy", callback: (($obj: TileBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flush-on-destroy", callback: (($obj: TileBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::px-size", callback: (($obj: TileBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::px-size", callback: (($obj: TileBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tile-size", callback: (($obj: TileBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-size", callback: (($obj: TileBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TileBackend_ConstructProps)
    _init (config?: TileBackend_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static unlink_swap(path: string): void
    static $gtype: GObject.Type
}
interface TileHandler_ConstructProps extends TileSource_ConstructProps {
    /* Constructor properties of Gegl-0.4.Gegl.TileHandler */
    source?: GObject.Object
}
class TileHandler {
    /* Properties of Gegl-0.4.Gegl.TileHandler */
    source: GObject.Object
    /* Fields of Gegl-0.4.Gegl.TileSource */
    readonly parent_instance: GObject.Object
    readonly command: TileSourceCommand
    readonly padding: object[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gegl-0.4.Gegl.TileHandler */
    damage_rect(rect: Rectangle): void
    damage_tile(x: number, y: number, z: number, damage: number): void
    lock(): void
    set_source(source: TileSource): void
    unlock(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TileHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TileHandler, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::source", callback: (($obj: TileHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: TileHandler, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TileHandler_ConstructProps)
    _init (config?: TileHandler_ConstructProps): void
    static $gtype: GObject.Type
}
interface TileSource_ConstructProps extends GObject.Object_ConstructProps {
}
class TileSource {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TileSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TileSource_ConstructProps)
    _init (config?: TileSource_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class AudioFragmentClass {
    /* Fields of Gegl-0.4.Gegl.AudioFragmentClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class AudioFragmentPrivate {
    static name: string
}
class BufferIterator {
    /* Fields of Gegl-0.4.Gegl.BufferIterator */
    readonly length: number
    readonly priv: BufferIteratorPriv
    readonly items: BufferIteratorItem[]
    static name: string
}
class BufferIteratorItem {
    /* Fields of Gegl-0.4.Gegl.BufferIteratorItem */
    readonly data: object
    readonly roi: Rectangle
    static name: string
}
class BufferIteratorPriv {
    static name: string
}
class BufferMatrix2 {
    /* Fields of Gegl-0.4.Gegl.BufferMatrix2 */
    readonly coeff: number[]
    /* Methods of Gegl-0.4.Gegl.BufferMatrix2 */
    determinant(): number
    is_identity(): boolean
    is_scale(): boolean
    static name: string
}
abstract class ColorClass {
    /* Fields of Gegl-0.4.Gegl.ColorClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class ColorPrivate {
    static name: string
}
abstract class CurveClass {
    /* Fields of Gegl-0.4.Gegl.CurveClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class Lookup {
    /* Fields of Gegl-0.4.Gegl.Lookup */
    readonly function_: LookupFunction
    readonly data: object
    readonly shift: number
    readonly positive_min: number
    readonly positive_max: number
    readonly negative_min: number
    readonly negative_max: number
    readonly bitmask: number[]
    readonly table: number[]
    static name: string
}
class Matrix3 {
    /* Fields of Gegl-0.4.Gegl.Matrix3 */
    readonly coeff: number[]
    /* Methods of Gegl-0.4.Gegl.Matrix3 */
    copy(): Matrix3
    copy_into(src: Matrix3): void
    determinant(): number
    equal(matrix2: Matrix3): boolean
    identity(): void
    invert(): void
    is_affine(): boolean
    is_identity(): boolean
    is_scale(): boolean
    is_translate(): boolean
    multiply(right: Matrix3, product: Matrix3): void
    originate(x: number, y: number): void
    parse_string(string: string): void
    round_error(): void
    to_string(): string
    transform_point(x: number, y: number): void
    static name: string
    static new(): Matrix3
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Matrix3
}
abstract class MetadataHashClass {
    /* Fields of Gegl-0.4.Gegl.MetadataHashClass */
    readonly parent_class: MetadataStoreClass
    static name: string
}
abstract class MetadataInterface {
    /* Fields of Gegl-0.4.Gegl.MetadataInterface */
    readonly register_map: (metadata: Metadata, file_module: string, flags: number, map: MetadataMap[]) => void
    readonly set_resolution: (metadata: Metadata, unit: ResolutionUnit, x: number, y: number) => boolean
    readonly get_resolution: (metadata: Metadata, unit: ResolutionUnit, x: number, y: number) => boolean
    readonly iter_lookup: (metadata: Metadata, iter: MetadataIter, key: string) => boolean
    readonly iter_init: (metadata: Metadata, iter: MetadataIter) => void
    readonly iter_next: (metadata: Metadata, iter: MetadataIter) => string
    readonly iter_set_value: (metadata: Metadata, iter: MetadataIter, value: any) => boolean
    readonly iter_get_value: (metadata: Metadata, iter: MetadataIter, value: any) => boolean
    static name: string
}
class MetadataIter {
    static name: string
}
class MetadataMap {
    /* Fields of Gegl-0.4.Gegl.MetadataMap */
    readonly local_name: string
    readonly name: string
    readonly transform: GObject.ValueTransform
    static name: string
}
abstract class MetadataStoreClass {
    /* Fields of Gegl-0.4.Gegl.MetadataStoreClass */
    readonly set_value: (self: MetadataStore, name: string, value: any) => void
    readonly has_value: (self: MetadataStore, name: string) => boolean
    readonly register_hook: (self: MetadataStore, file_module_name: string, flags: number) => void
    static name: string
}
class OperationContext {
    static name: string
}
class ParamSpecDouble {
    /* Fields of Gegl-0.4.Gegl.ParamSpecDouble */
    readonly parent_instance: GObject.ParamSpecDouble
    readonly ui_minimum: number
    readonly ui_maximum: number
    readonly ui_gamma: number
    readonly ui_step_small: number
    readonly ui_step_big: number
    readonly ui_digits: number
    /* Methods of Gegl-0.4.Gegl.ParamSpecDouble */
    set_digits(digits: number): void
    set_steps(small_step: number, big_step: number): void
    static name: string
}
class ParamSpecEnum {
    /* Fields of Gegl-0.4.Gegl.ParamSpecEnum */
    readonly parent_instance: GObject.ParamSpecEnum
    readonly excluded_values: object[]
    /* Methods of Gegl-0.4.Gegl.ParamSpecEnum */
    exclude_value(value: number): void
    static name: string
}
class ParamSpecFilePath {
    /* Fields of Gegl-0.4.Gegl.ParamSpecFilePath */
    readonly parent_instance: GObject.ParamSpecString
    readonly no_validate: number
    readonly null_ok: number
    static name: string
}
class ParamSpecFormat {
    /* Fields of Gegl-0.4.Gegl.ParamSpecFormat */
    readonly parent_instance: GObject.ParamSpecPointer
    static name: string
}
class ParamSpecInt {
    /* Fields of Gegl-0.4.Gegl.ParamSpecInt */
    readonly parent_instance: GObject.ParamSpecInt
    readonly ui_minimum: number
    readonly ui_maximum: number
    readonly ui_gamma: number
    readonly ui_step_small: number
    readonly ui_step_big: number
    /* Methods of Gegl-0.4.Gegl.ParamSpecInt */
    set_steps(small_step: number, big_step: number): void
    static name: string
}
class ParamSpecSeed {
    /* Fields of Gegl-0.4.Gegl.ParamSpecSeed */
    readonly parent_instance: GObject.ParamSpecUInt
    readonly ui_minimum: number
    readonly ui_maximum: number
    static name: string
}
class ParamSpecString {
    /* Fields of Gegl-0.4.Gegl.ParamSpecString */
    readonly parent_instance: GObject.ParamSpecString
    readonly no_validate: number
    readonly null_ok: number
    static name: string
}
class ParamSpecUri {
    /* Fields of Gegl-0.4.Gegl.ParamSpecUri */
    readonly parent_instance: GObject.ParamSpecString
    readonly no_validate: number
    readonly null_ok: number
    static name: string
}
abstract class PathClass {
    static name: string
}
class PathItem {
    /* Fields of Gegl-0.4.Gegl.PathItem */
    readonly type: number
    readonly point: PathPoint[]
    static name: string
}
class PathList {
    /* Fields of Gegl-0.4.Gegl.PathList */
    readonly next: object
    readonly d: PathItem
    static name: string
}
class PathPoint {
    /* Fields of Gegl-0.4.Gegl.PathPoint */
    readonly x: number
    readonly y: number
    static name: string
}
class Random {
    /* Methods of Gegl-0.4.Gegl.Random */
    duplicate(): Random
    float(x: number, y: number, z: number, n: number): number
    float_range(x: number, y: number, z: number, n: number, min: number, max: number): number
    free(): void
    int(x: number, y: number, z: number, n: number): number
    int_range(x: number, y: number, z: number, n: number, min: number, max: number): number
    set_seed(seed: number): void
    static name: string
    static new(): Random
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Random
    static new_with_seed(seed: number): Random
}
class Rectangle {
    /* Fields of Gegl-0.4.Gegl.Rectangle */
    readonly x: number
    readonly y: number
    readonly width: number
    readonly height: number
    /* Methods of Gegl-0.4.Gegl.Rectangle */
    align(rectangle: Rectangle, tile: Rectangle, alignment: RectangleAlignment): boolean
    align_to_buffer(rectangle: Rectangle, buffer: Buffer, alignment: RectangleAlignment): boolean
    bounding_box(source1: Rectangle, source2: Rectangle): void
    contains(child: Rectangle): boolean
    copy(source: Rectangle): void
    dump(): void
    dup(): Rectangle
    equal(rectangle2: Rectangle): boolean
    equal_coords(x: number, y: number, width: number, height: number): boolean
    intersect(src1: Rectangle, src2: Rectangle): boolean
    is_empty(): boolean
    is_infinite_plane(): boolean
    set(x: number, y: number, width: number, height: number): void
    subtract(minuend: Rectangle, subtrahend: Rectangle): number
    subtract_bounding_box(minuend: Rectangle, subtrahend: Rectangle): boolean
    xor(source1: Rectangle, source2: Rectangle): number
    static name: string
    static new(x: number, y: number, width: number, height: number): Rectangle
    constructor(x: number, y: number, width: number, height: number)
    /* Static methods and pseudo-constructors */
    static new(x: number, y: number, width: number, height: number): Rectangle
    static infinite_plane(): Rectangle
}
class Sampler {
    /* Methods of Gegl-0.4.Gegl.Sampler */
    get(x: number, y: number, scale: BufferMatrix2, output: object | null, repeat_mode: AbyssPolicy): void
    get_context_rect(): Rectangle
    static name: string
}
class Tile {
    static name: string
}
abstract class TileBackendClass {
    /* Fields of Gegl-0.4.Gegl.TileBackendClass */
    readonly parent_class: TileSourceClass
    readonly padding: object[]
    static name: string
}
class TileBackendPrivate {
    static name: string
}
class TileCopyParams {
    /* Fields of Gegl-0.4.Gegl.TileCopyParams */
    readonly dst_buffer: Buffer
    readonly dst_x: number
    readonly dst_y: number
    readonly dst_z: number
    static name: string
}
abstract class TileHandlerClass {
    /* Fields of Gegl-0.4.Gegl.TileHandlerClass */
    readonly parent_class: TileSourceClass
    static name: string
}
class TileHandlerPrivate {
    static name: string
}
abstract class TileSourceClass {
    /* Fields of Gegl-0.4.Gegl.TileSourceClass */
    readonly parent_class: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
}
export default Gegl;