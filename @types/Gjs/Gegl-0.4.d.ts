/**
 * Gegl-0.4
 */

import type * as Gjs from './Gjs';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as Babl from './Babl-0.1';

export enum AbyssPolicy {
    NONE,
    CLAMP,
    LOOP,
    BLACK,
    WHITE,
}
export enum BablVariant {
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
export enum CachePolicy {
    AUTO,
    NEVER,
    ALWAYS,
}
export enum DistanceMetric {
    EUCLIDEAN,
    MANHATTAN,
    CHEBYSHEV,
}
export enum DitherMethod {
    NONE,
    FLOYD_STEINBERG,
    BAYER,
    RANDOM,
    RANDOM_COVARIANT,
    ADD,
    ADD_COVARIANT,
    XOR,
    XOR_COVARIANT,
}
export enum MapFlags {
    MAP_EXCLUDE_UNMAPPED,
}
export enum Orientation {
    HORIZONTAL,
    VERTICAL,
}
export enum RectangleAlignment {
    SUBSET,
    SUPERSET,
    NEAREST,
}
export enum ResolutionUnit {
    NONE,
    DPI,
    DPM,
}
export enum SamplerType {
    NEAREST,
    LINEAR,
    CUBIC,
    NOHALO,
    LOHALO,
}
export enum SplitStrategy {
    AUTO,
    HORIZONTAL,
    VERTICAL,
}
export enum TileCommand {
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
export enum AccessMode {
    READ,
    WRITE,
    READWRITE,
}
export enum BlitFlags {
    DEFAULT,
    CACHE,
    DIRTY,
}
export enum PadType {
    OUTPUT,
    INPUT,
}
export enum SerializeFlag {
    TRIM_DEFAULTS,
    VERSION,
    INDENT,
    BAKE_ANIM,
}
export const AUTO_ROWSTRIDE: number
export const CH_BACK_CENTER: number
export const CH_BACK_LEFT: number
export const CH_BACK_RIGHT: number
export const CH_FRONT_CENTER: number
export const CH_FRONT_LEFT: number
export const CH_FRONT_LEFT_OF_CENTER: number
export const CH_FRONT_RIGHT: number
export const CH_FRONT_RIGHT_OF_CENTER: number
export const CH_LAYOUT_2POINT1: number
export const CH_LAYOUT_2_1: number
export const CH_LAYOUT_2_2: number
export const CH_LAYOUT_3POINT1: number
export const CH_LAYOUT_4POINT0: number
export const CH_LAYOUT_4POINT1: number
export const CH_LAYOUT_5POINT0: number
export const CH_LAYOUT_5POINT0_BACK: number
export const CH_LAYOUT_5POINT1: number
export const CH_LAYOUT_5POINT1_BACK: number
export const CH_LAYOUT_6POINT0: number
export const CH_LAYOUT_6POINT0_FRONT: number
export const CH_LAYOUT_6POINT1: number
export const CH_LAYOUT_6POINT1_BACK: number
export const CH_LAYOUT_6POINT1_FRONT: number
export const CH_LAYOUT_7POINT0: number
export const CH_LAYOUT_7POINT0_FRONT: number
export const CH_LAYOUT_7POINT1: number
export const CH_LAYOUT_7POINT1_WIDE: number
export const CH_LAYOUT_7POINT1_WIDE_BACK: number
export const CH_LAYOUT_HEXADECAGONAL: number
export const CH_LAYOUT_HEXAGONAL: number
export const CH_LAYOUT_NATIVE: number
export const CH_LAYOUT_OCTAGONAL: number
export const CH_LAYOUT_QUAD: number
export const CH_LAYOUT_STEREO: number
export const CH_LAYOUT_STEREO_DOWNMIX: number
export const CH_LAYOUT_SURROUND: number
export const CH_LOW_FREQUENCY: number
export const CH_LOW_FREQUENCY_2: number
export const CH_SIDE_LEFT: number
export const CH_SIDE_RIGHT: number
export const CH_STEREO_LEFT: number
export const CH_STEREO_RIGHT: number
export const CH_SURROUND_DIRECT_LEFT: number
export const CH_SURROUND_DIRECT_RIGHT: number
export const CH_TOP_BACK_CENTER: number
export const CH_TOP_BACK_LEFT: number
export const CH_TOP_BACK_RIGHT: number
export const CH_TOP_CENTER: number
export const CH_TOP_FRONT_CENTER: number
export const CH_TOP_FRONT_LEFT: number
export const CH_TOP_FRONT_RIGHT: number
export const CH_WIDE_LEFT: number
export const CH_WIDE_RIGHT: number
export const FLOAT_EPSILON: number
export const LOOKUP_MAX_ENTRIES: number
export const MAJOR_VERSION: number
export const MAX_AUDIO_CHANNELS: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const PARAM_NO_VALIDATE: number
export function babl_variant(format: Babl.Object, variant: BablVariant): Babl.Object
export function cl_disable(): void
export function cl_init(): boolean
export function cl_is_accelerated(): boolean
export function config(): Config
export function create_chain(ops: string, op_start: Node, op_end: Node, time: number, rel_dim: number, path_root: string): void
export function create_chain_argv(ops: string, op_start: Node, op_end: Node, time: number, rel_dim: number, path_root: string): void
export function exit(): void
export function format(format_name: string): any | null
export function format_get_name(format: any): string | null
export function get_version(): [ /* major */ number, /* minor */ number, /* micro */ number ]
export function graph_dump_outputs(node: Node): void
export function graph_dump_request(node: Node, roi: Rectangle): void
export function has_operation(operation_type: string): boolean
export function init(argv?: string[] | null): /* argv */ string[] | null
export function is_main_thread(): boolean
export function list_operations(): string[]
export function load_module_directory(path: string): void
export function parallel_distribute(max_n: number, func: ParallelDistributeFunc): void
export function parallel_distribute_area(area: Rectangle, thread_cost: number, split_strategy: SplitStrategy, func: ParallelDistributeAreaFunc): void
export function parallel_distribute_range(size: number, thread_cost: number, func: ParallelDistributeRangeFunc): void
export function param_spec_audio_fragment(name: string, nick: string, blurb: string, flags: GObject.ParamFlags): GObject.ParamSpec
export function param_spec_color(name: string, nick: string, blurb: string, default_color: Color, flags: GObject.ParamFlags): GObject.ParamSpec
export function param_spec_color_from_string(name: string, nick: string, blurb: string, default_color_string: string, flags: GObject.ParamFlags): GObject.ParamSpec
export function param_spec_color_get_default(self: GObject.ParamSpec): Color
export function param_spec_curve(name: string, nick: string, blurb: string, default_curve: Curve, flags: GObject.ParamFlags): GObject.ParamSpec
export function param_spec_double(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, ui_minimum: number, ui_maximum: number, ui_gamma: number, flags: GObject.ParamFlags): GObject.ParamSpec
export function param_spec_enum(name: string, nick: string, blurb: string, enum_type: GObject.Type, default_value: number, flags: GObject.ParamFlags): GObject.ParamSpec
export function param_spec_file_path(name: string, nick: string, blurb: string, no_validate: boolean, null_ok: boolean, default_value: string, flags: GObject.ParamFlags): GObject.ParamSpec
export function param_spec_format(name: string, nick: string, blurb: string, flags: GObject.ParamFlags): GObject.ParamSpec
export function param_spec_get_property_key(pspec: GObject.ParamSpec, key_name: string): string
export function param_spec_int(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, ui_minimum: number, ui_maximum: number, ui_gamma: number, flags: GObject.ParamFlags): GObject.ParamSpec
export function param_spec_path(name: string, nick: string, blurb: string, default_path: Path, flags: GObject.ParamFlags): GObject.ParamSpec
export function param_spec_seed(name: string, nick: string, blurb: string, flags: GObject.ParamFlags): GObject.ParamSpec
export function param_spec_set_property_key(pspec: GObject.ParamSpec, key_name: string, value: string): void
export function param_spec_string(name: string, nick: string, blurb: string, no_validate: boolean, null_ok: boolean, default_value: string, flags: GObject.ParamFlags): GObject.ParamSpec
export function param_spec_uri(name: string, nick: string, blurb: string, no_validate: boolean, null_ok: boolean, default_value: string, flags: GObject.ParamFlags): GObject.ParamSpec
export function rectangle_infinite_plane(): Rectangle
export function reset_stats(): void
export function serialize(start: Node, end: Node, basepath: string, serialize_flags: SerializeFlag): string
export function stats(): Stats
export interface LookupFunction {
    (value: number, data?: object | null): number
}
export interface NodeFunction {
    (node: PathItem): void
}
export interface ParallelDistributeAreaFunc {
    (area: Rectangle): void
}
export interface ParallelDistributeFunc {
    (i: number, n: number): void
}
export interface ParallelDistributeRangeFunc {
    (offset: number, size: number): void
}
export interface SamplerGetFun {
    (self: Sampler, x: number, y: number, scale: BufferMatrix2, output: object | null, repeat_mode: AbyssPolicy): void
}
export interface TileCallback {
    (tile: Tile): void
}
export interface TileSourceCommand {
    (gegl_tile_source: TileSource, command: TileCommand, x: number, y: number, z: number, data?: object | null): object | null
}
export class Metadata {
    /* Methods of Gegl.Metadata */
    get_resolution(unit: ResolutionUnit, x: number, y: number): boolean
    iter_get_value(iter: MetadataIter, value: any): boolean
    iter_init(iter: MetadataIter): void
    iter_lookup(iter: MetadataIter, key: string): boolean
    iter_next(iter: MetadataIter): string
    iter_set_value(iter: MetadataIter, value: any): boolean
    register_map(file_module: string, flags: number, map: MetadataMap[]): void
    set_resolution(unit: ResolutionUnit, x: number, y: number): boolean
    unregister_map(): void
    /* Virtual methods of Gegl.Metadata */
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
export interface AudioFragment_ConstructProps extends GObject.Object_ConstructProps {
    string?: string
}
export class AudioFragment {
    /* Properties of Gegl.AudioFragment */
    string: string
    /* Fields of Gegl.AudioFragment */
    parent_instance: GObject.Object
    data: number[]
    priv: AudioFragmentPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gegl.AudioFragment */
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
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
export interface Buffer_ConstructProps extends TileHandler_ConstructProps {
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
export class Buffer {
    /* Properties of Gegl.Buffer */
    format: object
    height: number
    readonly pixels: number
    readonly px_size: number
    width: number
    x: number
    y: number
    /* Properties of Gegl.TileHandler */
    source: GObject.Object
    /* Fields of Gegl.TileHandler */
    parent_instance: TileSource
    priv: TileHandlerPrivate
    /* Fields of Gegl.TileSource */
    command: TileSourceCommand
    padding: object[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gegl.Buffer */
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
    get(rect: Rectangle, scale: number, format_name: string | null, repeat_mode: AbyssPolicy): Uint8Array[]
    set(rect: Rectangle, format_name: string, src: Uint8Array[]): void
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
    /* Methods of Gegl.TileHandler */
    damage_rect(rect: Rectangle): void
    damage_tile(x: number, y: number, z: number, damage: number): void
    lock(): void
    set_source(source: TileSource): void
    unlock(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gegl.Buffer */
    connect(sigName: "changed", callback: (($obj: Buffer, object: Rectangle) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Buffer, object: Rectangle) => void)): number
    emit(sigName: "changed", object: Rectangle): void
    /* Signals of GObject.Object */
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
    connect(sigName: "notify::source", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
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
export interface Color_ConstructProps extends GObject.Object_ConstructProps {
    string?: string
}
export class Color {
    /* Properties of Gegl.Color */
    string: string
    /* Fields of Gegl.Color */
    parent_instance: GObject.Object
    priv: ColorPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gegl.Color */
    duplicate(): Color
    get_components(format: any): number[]
    get_format(): Babl.Object
    get_rgba(): [ /* red */ number, /* green */ number, /* blue */ number, /* alpha */ number ]
    set_components(format: any, components: number[]): void
    set_rgba(red: number, green: number, blue: number, alpha: number): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
export interface Config_ConstructProps extends GObject.Object_ConstructProps {
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
export class Config {
    /* Properties of Gegl.Config */
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
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
export interface Curve_ConstructProps extends GObject.Object_ConstructProps {
}
export class Curve {
    /* Fields of Gegl.Curve */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gegl.Curve */
    add_point(x: number, y: number): number
    calc_value(x: number): number
    duplicate(): Curve
    get_point(index: number): [ /* x */ number, /* y */ number ]
    get_y_bounds(): [ /* min_y */ number, /* max_y */ number ]
    num_points(): number
    set_point(index: number, x: number, y: number): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
export interface MetadataHash_ConstructProps extends MetadataStore_ConstructProps {
}
export class MetadataHash {
    /* Properties of Gegl.MetadataStore */
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
    /* Fields of Gegl.MetadataStore */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gegl.MetadataStore */
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
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gegl.Metadata */
    get_resolution(unit: ResolutionUnit, x: number, y: number): boolean
    iter_get_value(iter: MetadataIter, value: any): boolean
    iter_init(iter: MetadataIter): void
    iter_lookup(iter: MetadataIter, key: string): boolean
    iter_next(iter: MetadataIter): string
    iter_set_value(iter: MetadataIter, value: any): boolean
    register_map(file_module: string, flags: number, map: MetadataMap[]): void
    set_resolution(unit: ResolutionUnit, x: number, y: number): boolean
    unregister_map(): void
    /* Virtual methods of Gegl.MetadataStore */
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gegl.MetadataStore */
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
    /* Signals of GObject.Object */
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
export interface MetadataStore_ConstructProps extends GObject.Object_ConstructProps {
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
export class MetadataStore {
    /* Properties of Gegl.MetadataStore */
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
    /* Fields of Gegl.MetadataStore */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gegl.MetadataStore */
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
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gegl.Metadata */
    get_resolution(unit: ResolutionUnit, x: number, y: number): boolean
    iter_get_value(iter: MetadataIter, value: any): boolean
    iter_init(iter: MetadataIter): void
    iter_lookup(iter: MetadataIter, key: string): boolean
    iter_next(iter: MetadataIter): string
    iter_set_value(iter: MetadataIter, value: any): boolean
    register_map(file_module: string, flags: number, map: MetadataMap[]): void
    set_resolution(unit: ResolutionUnit, x: number, y: number): boolean
    unregister_map(): void
    /* Virtual methods of Gegl.MetadataStore */
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gegl.MetadataStore */
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
    /* Signals of GObject.Object */
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
export interface Node_ConstructProps extends GObject.Object_ConstructProps {
    cache_policy?: CachePolicy
    dont_cache?: boolean
    gegl_operation?: Operation
    name?: string
    operation?: string
    passthrough?: boolean
    use_opencl?: boolean
}
export class Node {
    /* Properties of Gegl.Node */
    cache_policy: CachePolicy
    dont_cache: boolean
    gegl_operation: Operation
    name: string
    operation: string
    passthrough: boolean
    use_opencl: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gegl.Node */
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
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gegl.Node */
    connect(sigName: "computed", callback: (($obj: Node, object: Rectangle) => void)): number
    connect_after(sigName: "computed", callback: (($obj: Node, object: Rectangle) => void)): number
    emit(sigName: "computed", object: Rectangle): void
    connect(sigName: "invalidated", callback: (($obj: Node, object: Rectangle) => void)): number
    connect_after(sigName: "invalidated", callback: (($obj: Node, object: Rectangle) => void)): number
    emit(sigName: "invalidated", object: Rectangle): void
    connect(sigName: "progress", callback: (($obj: Node, object: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: Node, object: number) => void)): number
    emit(sigName: "progress", object: number): void
    /* Signals of GObject.Object */
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
export interface Operation_ConstructProps extends GObject.Object_ConstructProps {
}
export class Operation {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
export class ParamAudioFragment {
    /* Fields of GObject.ParamSpec */
    g_type_instance: GObject.TypeInstance
    name: string
    flags: GObject.ParamFlags
    value_type: GObject.Type
    owner_type: GObject.Type
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): GObject.Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): GObject.ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: GObject.Value): void
    vfunc_value_validate(value: GObject.Value): boolean
    vfunc_values_cmp(value1: GObject.Value, value2: GObject.Value): number
    static name: string
}
export class ParamColor {
    /* Fields of GObject.ParamSpec */
    g_type_instance: GObject.TypeInstance
    name: string
    flags: GObject.ParamFlags
    value_type: GObject.Type
    owner_type: GObject.Type
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): GObject.Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): GObject.ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: GObject.Value): void
    vfunc_value_validate(value: GObject.Value): boolean
    vfunc_values_cmp(value1: GObject.Value, value2: GObject.Value): number
    static name: string
}
export class ParamCurve {
    /* Fields of GObject.ParamSpec */
    g_type_instance: GObject.TypeInstance
    name: string
    flags: GObject.ParamFlags
    value_type: GObject.Type
    owner_type: GObject.Type
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): GObject.Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): GObject.ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: GObject.Value): void
    vfunc_value_validate(value: GObject.Value): boolean
    vfunc_values_cmp(value1: GObject.Value, value2: GObject.Value): number
    static name: string
}
export class ParamDouble {
    /* Fields of GObject.ParamSpecDouble */
    parent_instance: GObject.ParamSpec
    minimum: number
    maximum: number
    default_value: number
    epsilon: number
    /* Fields of GObject.ParamSpec */
    g_type_instance: GObject.TypeInstance
    name: string
    flags: GObject.ParamFlags
    value_type: GObject.Type
    owner_type: GObject.Type
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): GObject.Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): GObject.ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: GObject.Value): void
    vfunc_value_validate(value: GObject.Value): boolean
    vfunc_values_cmp(value1: GObject.Value, value2: GObject.Value): number
    static name: string
}
export class ParamEnum {
    /* Fields of GObject.ParamSpecEnum */
    parent_instance: GObject.ParamSpec
    enum_class: GObject.EnumClass
    default_value: number
    /* Fields of GObject.ParamSpec */
    g_type_instance: GObject.TypeInstance
    name: string
    flags: GObject.ParamFlags
    value_type: GObject.Type
    owner_type: GObject.Type
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): GObject.Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): GObject.ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: GObject.Value): void
    vfunc_value_validate(value: GObject.Value): boolean
    vfunc_values_cmp(value1: GObject.Value, value2: GObject.Value): number
    static name: string
}
export class ParamFilePath {
    /* Fields of GObject.ParamSpecString */
    parent_instance: GObject.ParamSpec
    default_value: string
    cset_first: string
    cset_nth: string
    substitutor: number
    null_fold_if_empty: number
    ensure_non_null: number
    /* Fields of GObject.ParamSpec */
    g_type_instance: GObject.TypeInstance
    name: string
    flags: GObject.ParamFlags
    value_type: GObject.Type
    owner_type: GObject.Type
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): GObject.Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): GObject.ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: GObject.Value): void
    vfunc_value_validate(value: GObject.Value): boolean
    vfunc_values_cmp(value1: GObject.Value, value2: GObject.Value): number
    static name: string
}
export class ParamFormat {
    /* Fields of GObject.ParamSpecPointer */
    parent_instance: GObject.ParamSpec
    /* Fields of GObject.ParamSpec */
    g_type_instance: GObject.TypeInstance
    name: string
    flags: GObject.ParamFlags
    value_type: GObject.Type
    owner_type: GObject.Type
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): GObject.Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): GObject.ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: GObject.Value): void
    vfunc_value_validate(value: GObject.Value): boolean
    vfunc_values_cmp(value1: GObject.Value, value2: GObject.Value): number
    static name: string
}
export class ParamInt {
    /* Fields of GObject.ParamSpecInt */
    parent_instance: GObject.ParamSpec
    minimum: number
    maximum: number
    default_value: number
    /* Fields of GObject.ParamSpec */
    g_type_instance: GObject.TypeInstance
    name: string
    flags: GObject.ParamFlags
    value_type: GObject.Type
    owner_type: GObject.Type
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): GObject.Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): GObject.ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: GObject.Value): void
    vfunc_value_validate(value: GObject.Value): boolean
    vfunc_values_cmp(value1: GObject.Value, value2: GObject.Value): number
    static name: string
}
export class ParamPath {
    /* Fields of GObject.ParamSpec */
    g_type_instance: GObject.TypeInstance
    name: string
    flags: GObject.ParamFlags
    value_type: GObject.Type
    owner_type: GObject.Type
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): GObject.Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): GObject.ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: GObject.Value): void
    vfunc_value_validate(value: GObject.Value): boolean
    vfunc_values_cmp(value1: GObject.Value, value2: GObject.Value): number
    static name: string
}
export class ParamSeed {
    /* Fields of GObject.ParamSpecUInt */
    parent_instance: GObject.ParamSpec
    minimum: number
    maximum: number
    default_value: number
    /* Fields of GObject.ParamSpec */
    g_type_instance: GObject.TypeInstance
    name: string
    flags: GObject.ParamFlags
    value_type: GObject.Type
    owner_type: GObject.Type
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): GObject.Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): GObject.ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: GObject.Value): void
    vfunc_value_validate(value: GObject.Value): boolean
    vfunc_values_cmp(value1: GObject.Value, value2: GObject.Value): number
    static name: string
}
export class ParamString {
    /* Fields of GObject.ParamSpecString */
    parent_instance: GObject.ParamSpec
    default_value: string
    cset_first: string
    cset_nth: string
    substitutor: number
    null_fold_if_empty: number
    ensure_non_null: number
    /* Fields of GObject.ParamSpec */
    g_type_instance: GObject.TypeInstance
    name: string
    flags: GObject.ParamFlags
    value_type: GObject.Type
    owner_type: GObject.Type
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): GObject.Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): GObject.ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: GObject.Value): void
    vfunc_value_validate(value: GObject.Value): boolean
    vfunc_values_cmp(value1: GObject.Value, value2: GObject.Value): number
    static name: string
}
export class ParamUri {
    /* Fields of GObject.ParamSpecString */
    parent_instance: GObject.ParamSpec
    default_value: string
    cset_first: string
    cset_nth: string
    substitutor: number
    null_fold_if_empty: number
    ensure_non_null: number
    /* Fields of GObject.ParamSpec */
    g_type_instance: GObject.TypeInstance
    name: string
    flags: GObject.ParamFlags
    value_type: GObject.Type
    owner_type: GObject.Type
    /* Methods of GObject.ParamSpec */
    get_blurb(): string
    get_default_value(): GObject.Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): GObject.ParamSpec
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: GObject.Value): void
    vfunc_value_validate(value: GObject.Value): boolean
    vfunc_values_cmp(value1: GObject.Value, value2: GObject.Value): number
    static name: string
}
export interface Path_ConstructProps extends GObject.Object_ConstructProps {
}
export class Path {
    /* Fields of Gegl.Path */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gegl.Path */
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
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gegl.Path */
    connect(sigName: "changed", callback: (($obj: Path, object?: object | null) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Path, object?: object | null) => void)): number
    emit(sigName: "changed", object?: object | null): void
    /* Signals of GObject.Object */
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
export interface Processor_ConstructProps extends GObject.Object_ConstructProps {
    chunksize?: number
    node?: Node
    progress?: number
    rectangle?: object
}
export class Processor {
    /* Properties of Gegl.Processor */
    node: Node
    progress: number
    rectangle: object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gegl.Processor */
    get_buffer(): Buffer
    set_level(level: number): void
    set_rectangle(rectangle: Rectangle): void
    set_scale(scale: number): void
    work(): [ /* returnType */ boolean, /* progress */ number ]
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
export interface Stats_ConstructProps extends GObject.Object_ConstructProps {
}
export class Stats {
    /* Properties of Gegl.Stats */
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
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
export interface TileBackend_ConstructProps extends TileSource_ConstructProps {
    flush_on_destroy?: boolean
    format?: object
    tile_height?: number
    tile_width?: number
}
export class TileBackend {
    /* Properties of Gegl.TileBackend */
    flush_on_destroy: boolean
    readonly px_size: number
    readonly tile_size: number
    /* Fields of Gegl.TileBackend */
    parent_instance: TileSource
    priv: TileBackendPrivate
    /* Fields of Gegl.TileSource */
    command: TileSourceCommand
    padding: object[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gegl.TileBackend */
    get_flush_on_destroy(): boolean
    get_tile_height(): number
    get_tile_size(): number
    get_tile_width(): number
    peek_storage(): TileSource
    set_extent(rectangle: Rectangle): void
    set_flush_on_destroy(flush_on_destroy: boolean): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
export interface TileHandler_ConstructProps extends TileSource_ConstructProps {
    source?: GObject.Object
}
export class TileHandler {
    /* Properties of Gegl.TileHandler */
    source: GObject.Object
    /* Fields of Gegl.TileHandler */
    parent_instance: TileSource
    priv: TileHandlerPrivate
    /* Fields of Gegl.TileSource */
    command: TileSourceCommand
    padding: object[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gegl.TileHandler */
    damage_rect(rect: Rectangle): void
    damage_tile(x: number, y: number, z: number, damage: number): void
    lock(): void
    set_source(source: TileSource): void
    unlock(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
export interface TileSource_ConstructProps extends GObject.Object_ConstructProps {
}
export class TileSource {
    /* Fields of Gegl.TileSource */
    parent_instance: GObject.Object
    command: TileSourceCommand
    padding: object[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
export abstract class AudioFragmentClass {
    /* Fields of Gegl.AudioFragmentClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class AudioFragmentPrivate {
    static name: string
}
export class BufferIterator {
    /* Fields of Gegl.BufferIterator */
    length: number
    priv: BufferIteratorPriv
    items: BufferIteratorItem[]
    static name: string
}
export class BufferIteratorItem {
    /* Fields of Gegl.BufferIteratorItem */
    data: object
    roi: Rectangle
    static name: string
}
export class BufferIteratorPriv {
    static name: string
}
export class BufferMatrix2 {
    /* Fields of Gegl.BufferMatrix2 */
    coeff: number[]
    /* Methods of Gegl.BufferMatrix2 */
    determinant(): number
    is_identity(): boolean
    is_scale(): boolean
    static name: string
}
export abstract class ColorClass {
    /* Fields of Gegl.ColorClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ColorPrivate {
    static name: string
}
export abstract class CurveClass {
    /* Fields of Gegl.CurveClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class Lookup {
    /* Fields of Gegl.Lookup */
    function_: LookupFunction
    data: object
    shift: number
    positive_min: number
    positive_max: number
    negative_min: number
    negative_max: number
    bitmask: number[]
    table: number[]
    static name: string
}
export class Matrix3 {
    /* Fields of Gegl.Matrix3 */
    coeff: number[]
    /* Methods of Gegl.Matrix3 */
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
export abstract class MetadataHashClass {
    /* Fields of Gegl.MetadataHashClass */
    parent_class: MetadataStoreClass
    static name: string
}
export abstract class MetadataInterface {
    /* Fields of Gegl.MetadataInterface */
    register_map: (metadata: Metadata, file_module: string, flags: number, map: MetadataMap[]) => void
    set_resolution: (metadata: Metadata, unit: ResolutionUnit, x: number, y: number) => boolean
    get_resolution: (metadata: Metadata, unit: ResolutionUnit, x: number, y: number) => boolean
    iter_lookup: (metadata: Metadata, iter: MetadataIter, key: string) => boolean
    iter_init: (metadata: Metadata, iter: MetadataIter) => void
    iter_next: (metadata: Metadata, iter: MetadataIter) => string
    iter_set_value: (metadata: Metadata, iter: MetadataIter, value: any) => boolean
    iter_get_value: (metadata: Metadata, iter: MetadataIter, value: any) => boolean
    static name: string
}
export class MetadataIter {
    static name: string
}
export class MetadataMap {
    /* Fields of Gegl.MetadataMap */
    local_name: string
    name: string
    transform: GObject.ValueTransform
    static name: string
}
export abstract class MetadataStoreClass {
    /* Fields of Gegl.MetadataStoreClass */
    set_value: (self: MetadataStore, name: string, value: any) => void
    has_value: (self: MetadataStore, name: string) => boolean
    register_hook: (self: MetadataStore, file_module_name: string, flags: number) => void
    static name: string
}
export class OperationContext {
    static name: string
}
export class ParamSpecDouble {
    /* Fields of Gegl.ParamSpecDouble */
    parent_instance: GObject.ParamSpecDouble
    ui_minimum: number
    ui_maximum: number
    ui_gamma: number
    ui_step_small: number
    ui_step_big: number
    ui_digits: number
    /* Methods of Gegl.ParamSpecDouble */
    set_digits(digits: number): void
    set_steps(small_step: number, big_step: number): void
    static name: string
}
export class ParamSpecEnum {
    /* Fields of Gegl.ParamSpecEnum */
    parent_instance: GObject.ParamSpecEnum
    excluded_values: object[]
    /* Methods of Gegl.ParamSpecEnum */
    exclude_value(value: number): void
    static name: string
}
export class ParamSpecFilePath {
    /* Fields of Gegl.ParamSpecFilePath */
    parent_instance: GObject.ParamSpecString
    no_validate: number
    null_ok: number
    static name: string
}
export class ParamSpecFormat {
    /* Fields of Gegl.ParamSpecFormat */
    parent_instance: GObject.ParamSpecPointer
    static name: string
}
export class ParamSpecInt {
    /* Fields of Gegl.ParamSpecInt */
    parent_instance: GObject.ParamSpecInt
    ui_minimum: number
    ui_maximum: number
    ui_gamma: number
    ui_step_small: number
    ui_step_big: number
    /* Methods of Gegl.ParamSpecInt */
    set_steps(small_step: number, big_step: number): void
    static name: string
}
export class ParamSpecSeed {
    /* Fields of Gegl.ParamSpecSeed */
    parent_instance: GObject.ParamSpecUInt
    ui_minimum: number
    ui_maximum: number
    static name: string
}
export class ParamSpecString {
    /* Fields of Gegl.ParamSpecString */
    parent_instance: GObject.ParamSpecString
    no_validate: number
    null_ok: number
    static name: string
}
export class ParamSpecUri {
    /* Fields of Gegl.ParamSpecUri */
    parent_instance: GObject.ParamSpecString
    no_validate: number
    null_ok: number
    static name: string
}
export abstract class PathClass {
    static name: string
}
export class PathItem {
    /* Fields of Gegl.PathItem */
    type: number
    point: PathPoint[]
    static name: string
}
export class PathList {
    /* Fields of Gegl.PathList */
    next: object
    d: PathItem
    static name: string
}
export class PathPoint {
    /* Fields of Gegl.PathPoint */
    x: number
    y: number
    static name: string
}
export class Random {
    /* Methods of Gegl.Random */
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
export class Rectangle {
    /* Fields of Gegl.Rectangle */
    x: number
    y: number
    width: number
    height: number
    /* Methods of Gegl.Rectangle */
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
export class Sampler {
    /* Methods of Gegl.Sampler */
    get(x: number, y: number, scale: BufferMatrix2, output: object | null, repeat_mode: AbyssPolicy): void
    get_context_rect(): Rectangle
    static name: string
}
export class Tile {
    static name: string
}
export abstract class TileBackendClass {
    /* Fields of Gegl.TileBackendClass */
    parent_class: TileSourceClass
    padding: object[]
    static name: string
}
export class TileBackendPrivate {
    static name: string
}
export class TileCopyParams {
    /* Fields of Gegl.TileCopyParams */
    dst_buffer: Buffer
    dst_x: number
    dst_y: number
    dst_z: number
    static name: string
}
export abstract class TileHandlerClass {
    /* Fields of Gegl.TileHandlerClass */
    parent_class: TileSourceClass
    static name: string
}
export class TileHandlerPrivate {
    static name: string
}
export abstract class TileSourceClass {
    /* Fields of Gegl.TileSourceClass */
    parent_class: GObject.ObjectClass
    padding: object[]
    static name: string
}