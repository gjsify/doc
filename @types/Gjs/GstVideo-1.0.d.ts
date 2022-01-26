/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstVideo-1.0
 */

import type * as Gjs from './Gjs';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstVideo {

enum ColorBalanceType {
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
    MOUSE_SCROLL,
}
enum NavigationMessageType {
    INVALID,
    MOUSE_OVER,
    COMMANDS_CHANGED,
    ANGLES_CHANGED,
    EVENT,
}
enum NavigationQueryType {
    INVALID,
    COMMANDS,
    ANGLES,
}
enum VideoAFDSpec {
    DVB_ETSI,
    ATSC_A53,
    SMPTE_ST2016_1,
}
enum VideoAFDValue {
    UNAVAILABLE,
    TODO_16_9_TOP_ALIGNED,
    TODO_14_9_TOP_ALIGNED,
    GREATER_THAN_16_9,
    TODO_4_3_FULL_16_9_FULL,
    TODO_4_3_FULL_4_3_PILLAR,
    TODO_16_9_LETTER_16_9_FULL,
    TODO_14_9_LETTER_14_9_PILLAR,
    TODO_4_3_FULL_14_9_CENTER,
    TODO_16_9_LETTER_14_9_CENTER,
    TODO_16_9_LETTER_4_3_CENTER,
}
enum VideoAlphaMode {
    COPY,
    SET,
    MULT,
}
enum VideoAncillaryDID {
    UNDEFINED,
    DELETION,
    HANC_3G_AUDIO_DATA_FIRST,
    HANC_3G_AUDIO_DATA_LAST,
    HANC_HDTV_AUDIO_DATA_FIRST,
    HANC_HDTV_AUDIO_DATA_LAST,
    HANC_SDTV_AUDIO_DATA_1_FIRST,
    HANC_SDTV_AUDIO_DATA_1_LAST,
    CAMERA_POSITION,
    HANC_ERROR_DETECTION,
    HANC_SDTV_AUDIO_DATA_2_FIRST,
    HANC_SDTV_AUDIO_DATA_2_LAST,
}
enum VideoAncillaryDID16 {
    S334_EIA_708,
    S334_EIA_608,
    S2016_3_AFD_BAR,
}
enum VideoCaptionType {
    UNKNOWN,
    CEA608_RAW,
    CEA608_S334_1A,
    CEA708_RAW,
    CEA708_CDP,
}
enum VideoChromaMethod {
    NEAREST,
    LINEAR,
}
enum VideoChromaMode {
    FULL,
    UPSAMPLE_ONLY,
    DOWNSAMPLE_ONLY,
    NONE,
}
enum VideoColorMatrix {
    UNKNOWN,
    RGB,
    FCC,
    BT709,
    BT601,
    SMPTE240M,
    BT2020,
}
enum VideoColorPrimaries {
    UNKNOWN,
    BT709,
    BT470M,
    BT470BG,
    SMPTE170M,
    SMPTE240M,
    FILM,
    BT2020,
    ADOBERGB,
    SMPTEST428,
    SMPTERP431,
    SMPTEEG432,
    EBU3213,
}
enum VideoColorRange {
    UNKNOWN,
    TODO_0_255,
    TODO_16_235,
}
enum VideoDitherMethod {
    NONE,
    VERTERR,
    FLOYD_STEINBERG,
    SIERRA_LITE,
    BAYER,
}
enum VideoFieldOrder {
    UNKNOWN,
    TOP_FIELD_FIRST,
    BOTTOM_FIELD_FIRST,
}
enum VideoFormat {
    UNKNOWN,
    ENCODED,
    I420,
    YV12,
    YUY2,
    UYVY,
    AYUV,
    RGBX,
    BGRX,
    XRGB,
    XBGR,
    RGBA,
    BGRA,
    ARGB,
    ABGR,
    RGB,
    BGR,
    Y41B,
    Y42B,
    YVYU,
    Y444,
    V210,
    V216,
    NV12,
    NV21,
    GRAY8,
    GRAY16_BE,
    GRAY16_LE,
    V308,
    RGB16,
    BGR16,
    RGB15,
    BGR15,
    UYVP,
    A420,
    RGB8P,
    YUV9,
    YVU9,
    IYU1,
    ARGB64,
    AYUV64,
    R210,
    I420_10BE,
    I420_10LE,
    I422_10BE,
    I422_10LE,
    Y444_10BE,
    Y444_10LE,
    GBR,
    GBR_10BE,
    GBR_10LE,
    NV16,
    NV24,
    NV12_64Z32,
    A420_10BE,
    A420_10LE,
    A422_10BE,
    A422_10LE,
    A444_10BE,
    A444_10LE,
    NV61,
    P010_10BE,
    P010_10LE,
    IYU2,
    VYUY,
    GBRA,
    GBRA_10BE,
    GBRA_10LE,
    GBR_12BE,
    GBR_12LE,
    GBRA_12BE,
    GBRA_12LE,
    I420_12BE,
    I420_12LE,
    I422_12BE,
    I422_12LE,
    Y444_12BE,
    Y444_12LE,
    GRAY10_LE32,
    NV12_10LE32,
    NV16_10LE32,
    NV12_10LE40,
    Y210,
    Y410,
    VUYA,
    BGR10A2_LE,
    RGB10A2_LE,
    Y444_16BE,
    Y444_16LE,
    P016_BE,
    P016_LE,
    P012_BE,
    P012_LE,
    Y212_BE,
    Y212_LE,
    Y412_BE,
    Y412_LE,
    NV12_4L4,
    NV12_32L32,
    RGBP,
    BGRP,
    AV12,
    ARGB64_LE,
    ARGB64_BE,
    RGBA64_LE,
    RGBA64_BE,
    BGRA64_LE,
    BGRA64_BE,
    ABGR64_LE,
    ABGR64_BE,
}
enum VideoGLTextureOrientation {
    NORMAL_Y_NORMAL,
    NORMAL_Y_FLIP,
    FLIP_Y_NORMAL,
    FLIP_Y_FLIP,
}
enum VideoGLTextureType {
    LUMINANCE,
    LUMINANCE_ALPHA,
    RGB16,
    RGB,
    RGBA,
    R,
    RG,
}
enum VideoGammaMode {
    NONE,
    REMAP,
}
enum VideoInterlaceMode {
    PROGRESSIVE,
    INTERLEAVED,
    MIXED,
    FIELDS,
    ALTERNATE,
}
enum VideoMatrixMode {
    FULL,
    INPUT_ONLY,
    OUTPUT_ONLY,
    NONE,
}
enum VideoMultiviewFramePacking {
    NONE,
    MONO,
    LEFT,
    RIGHT,
    SIDE_BY_SIDE,
    SIDE_BY_SIDE_QUINCUNX,
    COLUMN_INTERLEAVED,
    ROW_INTERLEAVED,
    TOP_BOTTOM,
    CHECKERBOARD,
}
enum VideoMultiviewMode {
    NONE,
    MONO,
    LEFT,
    RIGHT,
    SIDE_BY_SIDE,
    SIDE_BY_SIDE_QUINCUNX,
    COLUMN_INTERLEAVED,
    ROW_INTERLEAVED,
    TOP_BOTTOM,
    CHECKERBOARD,
    FRAME_BY_FRAME,
    MULTIVIEW_FRAME_BY_FRAME,
    SEPARATED,
}
enum VideoOrientationMethod {
    IDENTITY,
    TODO_90R,
    TODO_180,
    TODO_90L,
    HORIZ,
    VERT,
    UL_LR,
    UR_LL,
    AUTO,
    CUSTOM,
}
enum VideoPrimariesMode {
    NONE,
    MERGE_ONLY,
    FAST,
}
enum VideoResamplerMethod {
    NEAREST,
    LINEAR,
    CUBIC,
    SINC,
    LANCZOS,
}
enum VideoTileMode {
    UNKNOWN,
    ZFLIPZ_2X2,
    LINEAR,
}
enum VideoTileType {
    INDEXED,
}
enum VideoTransferFunction {
    UNKNOWN,
    GAMMA10,
    GAMMA18,
    GAMMA20,
    GAMMA22,
    BT709,
    SMPTE240M,
    SRGB,
    GAMMA28,
    LOG100,
    LOG316,
    BT2020_12,
    ADOBERGB,
    BT2020_10,
    SMPTE2084,
    ARIB_STD_B67,
    BT601,
}
enum VideoVBIParserResult {
    DONE,
    OK,
    ERROR,
}
enum VideoBufferFlags {
    INTERLACED,
    TFF,
    RFF,
    ONEFIELD,
    MULTIPLE_VIEW,
    FIRST_IN_BUNDLE,
    TOP_FIELD,
    BOTTOM_FIELD,
    MARKER,
    LAST,
}
enum VideoChromaFlags {
    NONE,
    INTERLACED,
}
enum VideoChromaSite {
    UNKNOWN,
    NONE,
    H_COSITED,
    V_COSITED,
    ALT_LINE,
    COSITED,
    JPEG,
    MPEG2,
    DV,
}
enum VideoCodecFrameFlags {
    DECODE_ONLY,
    SYNC_POINT,
    FORCE_KEYFRAME,
    FORCE_KEYFRAME_HEADERS,
    CORRUPTED,
}
enum VideoDecoderRequestSyncPointFlags {
    DISCARD_INPUT,
    CORRUPT_OUTPUT,
}
enum VideoDitherFlags {
    NONE,
    INTERLACED,
    QUANTIZE,
}
enum VideoFlags {
    NONE,
    VARIABLE_FPS,
    PREMULTIPLIED_ALPHA,
}
enum VideoFormatFlags {
    YUV,
    RGB,
    GRAY,
    ALPHA,
    LE,
    PALETTE,
    COMPLEX,
    UNPACK,
    TILED,
}
enum VideoFrameFlags {
    NONE,
    INTERLACED,
    TFF,
    RFF,
    ONEFIELD,
    MULTIPLE_VIEW,
    FIRST_IN_BUNDLE,
    TOP_FIELD,
    BOTTOM_FIELD,
}
enum VideoFrameMapFlags {
    NO_REF,
    LAST,
}
enum VideoMultiviewFlags {
    NONE,
    RIGHT_VIEW_FIRST,
    LEFT_FLIPPED,
    LEFT_FLOPPED,
    RIGHT_FLIPPED,
    RIGHT_FLOPPED,
    HALF_ASPECT,
    MIXED_MONO,
}
enum VideoOverlayFormatFlags {
    NONE,
    PREMULTIPLIED_ALPHA,
    GLOBAL_ALPHA,
}
enum VideoPackFlags {
    NONE,
    TRUNCATE_RANGE,
    INTERLACED,
}
enum VideoResamplerFlags {
    NONE,
    HALF_TAPS,
}
enum VideoScalerFlags {
    NONE,
    INTERLACED,
}
enum VideoTimeCodeFlags {
    NONE,
    DROP_FRAME,
    INTERLACED,
}
const BUFFER_POOL_OPTION_VIDEO_AFFINE_TRANSFORMATION_META: string
const BUFFER_POOL_OPTION_VIDEO_ALIGNMENT: string
const BUFFER_POOL_OPTION_VIDEO_GL_TEXTURE_UPLOAD_META: string
const BUFFER_POOL_OPTION_VIDEO_META: string
const CAPS_FEATURE_FORMAT_INTERLACED: string
const CAPS_FEATURE_META_GST_VIDEO_AFFINE_TRANSFORMATION_META: string
const CAPS_FEATURE_META_GST_VIDEO_GL_TEXTURE_UPLOAD_META: string
const CAPS_FEATURE_META_GST_VIDEO_META: string
const CAPS_FEATURE_META_GST_VIDEO_OVERLAY_COMPOSITION: string
const META_TAG_VIDEO_COLORSPACE_STR: string
const META_TAG_VIDEO_ORIENTATION_STR: string
const META_TAG_VIDEO_SIZE_STR: string
const META_TAG_VIDEO_STR: string
const VIDEO_COLORIMETRY_BT2020: string
const VIDEO_COLORIMETRY_BT2020_10: string
const VIDEO_COLORIMETRY_BT2100_HLG: string
const VIDEO_COLORIMETRY_BT2100_PQ: string
const VIDEO_COLORIMETRY_BT601: string
const VIDEO_COLORIMETRY_BT709: string
const VIDEO_COLORIMETRY_SMPTE240M: string
const VIDEO_COLORIMETRY_SRGB: string
const VIDEO_COMP_A: number
const VIDEO_COMP_B: number
const VIDEO_COMP_G: number
const VIDEO_COMP_INDEX: number
const VIDEO_COMP_PALETTE: number
const VIDEO_COMP_R: number
const VIDEO_COMP_U: number
const VIDEO_COMP_V: number
const VIDEO_COMP_Y: number
const VIDEO_CONVERTER_OPT_ALPHA_MODE: string
const VIDEO_CONVERTER_OPT_ALPHA_VALUE: string
const VIDEO_CONVERTER_OPT_ASYNC_TASKS: string
const VIDEO_CONVERTER_OPT_BORDER_ARGB: string
const VIDEO_CONVERTER_OPT_CHROMA_MODE: string
const VIDEO_CONVERTER_OPT_CHROMA_RESAMPLER_METHOD: string
const VIDEO_CONVERTER_OPT_DEST_HEIGHT: string
const VIDEO_CONVERTER_OPT_DEST_WIDTH: string
const VIDEO_CONVERTER_OPT_DEST_X: string
const VIDEO_CONVERTER_OPT_DEST_Y: string
const VIDEO_CONVERTER_OPT_DITHER_METHOD: string
const VIDEO_CONVERTER_OPT_DITHER_QUANTIZATION: string
const VIDEO_CONVERTER_OPT_FILL_BORDER: string
const VIDEO_CONVERTER_OPT_GAMMA_MODE: string
const VIDEO_CONVERTER_OPT_MATRIX_MODE: string
const VIDEO_CONVERTER_OPT_PRIMARIES_MODE: string
const VIDEO_CONVERTER_OPT_RESAMPLER_METHOD: string
const VIDEO_CONVERTER_OPT_RESAMPLER_TAPS: string
const VIDEO_CONVERTER_OPT_SRC_HEIGHT: string
const VIDEO_CONVERTER_OPT_SRC_WIDTH: string
const VIDEO_CONVERTER_OPT_SRC_X: string
const VIDEO_CONVERTER_OPT_SRC_Y: string
const VIDEO_CONVERTER_OPT_THREADS: string
const VIDEO_DECODER_MAX_ERRORS: number
const VIDEO_DECODER_SINK_NAME: string
const VIDEO_DECODER_SRC_NAME: string
const VIDEO_ENCODER_SINK_NAME: string
const VIDEO_ENCODER_SRC_NAME: string
const VIDEO_FORMATS_ALL: string
const VIDEO_FPS_RANGE: string
const VIDEO_MAX_COMPONENTS: number
const VIDEO_MAX_PLANES: number
const VIDEO_RESAMPLER_OPT_CUBIC_B: string
const VIDEO_RESAMPLER_OPT_CUBIC_C: string
const VIDEO_RESAMPLER_OPT_ENVELOPE: string
const VIDEO_RESAMPLER_OPT_MAX_TAPS: string
const VIDEO_RESAMPLER_OPT_SHARPEN: string
const VIDEO_RESAMPLER_OPT_SHARPNESS: string
const VIDEO_SCALER_OPT_DITHER_METHOD: string
const VIDEO_SIZE_RANGE: string
const VIDEO_TILE_TYPE_MASK: number
const VIDEO_TILE_TYPE_SHIFT: number
const VIDEO_TILE_X_TILES_MASK: number
const VIDEO_TILE_Y_TILES_SHIFT: number
function buffer_add_video_afd_meta(buffer: Gst.Buffer, field: number, spec: VideoAFDSpec, afd: VideoAFDValue): VideoAFDMeta
function buffer_add_video_affine_transformation_meta(buffer: Gst.Buffer): VideoAffineTransformationMeta
function buffer_add_video_bar_meta(buffer: Gst.Buffer, field: number, is_letterbox: boolean, bar_data1: number, bar_data2: number): VideoBarMeta
function buffer_add_video_caption_meta(buffer: Gst.Buffer, caption_type: VideoCaptionType, data: Uint8Array): VideoCaptionMeta
function buffer_add_video_codec_alpha_meta(buffer: Gst.Buffer, alpha_buffer: Gst.Buffer): VideoCodecAlphaMeta
function buffer_add_video_gl_texture_upload_meta(buffer: Gst.Buffer, texture_orientation: VideoGLTextureOrientation, n_textures: number, texture_type: VideoGLTextureType, upload: VideoGLTextureUpload, user_data_copy: GObject.BoxedCopyFunc, user_data_free: GObject.BoxedFreeFunc): VideoGLTextureUploadMeta
function buffer_add_video_meta(buffer: Gst.Buffer, flags: VideoFrameFlags, format: VideoFormat, width: number, height: number): VideoMeta
function buffer_add_video_meta_full(buffer: Gst.Buffer, flags: VideoFrameFlags, format: VideoFormat, width: number, height: number, n_planes: number, offset: number[], stride: number[]): VideoMeta
function buffer_add_video_overlay_composition_meta(buf: Gst.Buffer, comp?: VideoOverlayComposition | null): VideoOverlayCompositionMeta
function buffer_add_video_region_of_interest_meta(buffer: Gst.Buffer, roi_type: string, x: number, y: number, w: number, h: number): VideoRegionOfInterestMeta
function buffer_add_video_region_of_interest_meta_id(buffer: Gst.Buffer, roi_type: GLib.Quark, x: number, y: number, w: number, h: number): VideoRegionOfInterestMeta
function buffer_add_video_time_code_meta(buffer: Gst.Buffer, tc: VideoTimeCode): VideoTimeCodeMeta | null
function buffer_add_video_time_code_meta_full(buffer: Gst.Buffer, fps_n: number, fps_d: number, latest_daily_jam: GLib.DateTime, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, field_count: number): VideoTimeCodeMeta
function buffer_get_video_meta(buffer: Gst.Buffer): VideoMeta
function buffer_get_video_meta_id(buffer: Gst.Buffer, id: number): VideoMeta
function buffer_get_video_region_of_interest_meta_id(buffer: Gst.Buffer, id: number): VideoRegionOfInterestMeta
function buffer_pool_config_get_video_alignment(config: Gst.Structure, align: VideoAlignment): boolean
function buffer_pool_config_set_video_alignment(config: Gst.Structure, align: VideoAlignment): void
function is_video_overlay_prepare_window_handle_message(msg: Gst.Message): boolean
function navigation_event_get_type(event: Gst.Event): NavigationEventType
function navigation_event_parse_command(event: Gst.Event): [ /* returnType */ boolean, /* command */ NavigationCommand | null ]
function navigation_event_parse_key_event(event: Gst.Event): [ /* returnType */ boolean, /* key */ string | null ]
function navigation_event_parse_mouse_button_event(event: Gst.Event): [ /* returnType */ boolean, /* button */ number | null, /* x */ number | null, /* y */ number | null ]
function navigation_event_parse_mouse_move_event(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
function navigation_event_parse_mouse_scroll_event(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* delta_x */ number | null, /* delta_y */ number | null ]
function navigation_message_get_type(message: Gst.Message): NavigationMessageType
function navigation_message_new_angles_changed(src: Gst.Object, cur_angle: number, n_angles: number): Gst.Message
function navigation_message_new_commands_changed(src: Gst.Object): Gst.Message
function navigation_message_new_event(src: Gst.Object, event: Gst.Event): Gst.Message
function navigation_message_new_mouse_over(src: Gst.Object, active: boolean): Gst.Message
function navigation_message_parse_angles_changed(message: Gst.Message): [ /* returnType */ boolean, /* cur_angle */ number | null, /* n_angles */ number | null ]
function navigation_message_parse_event(message: Gst.Message): [ /* returnType */ boolean, /* event */ Gst.Event | null ]
function navigation_message_parse_mouse_over(message: Gst.Message): [ /* returnType */ boolean, /* active */ boolean | null ]
function navigation_query_get_type(query: Gst.Query): NavigationQueryType
function navigation_query_new_angles(): Gst.Query
function navigation_query_new_commands(): Gst.Query
function navigation_query_parse_angles(query: Gst.Query): [ /* returnType */ boolean, /* cur_angle */ number | null, /* n_angles */ number | null ]
function navigation_query_parse_commands_length(query: Gst.Query): [ /* returnType */ boolean, /* n_cmds */ number | null ]
function navigation_query_parse_commands_nth(query: Gst.Query, nth: number): [ /* returnType */ boolean, /* cmd */ NavigationCommand | null ]
function navigation_query_set_angles(query: Gst.Query, cur_angle: number, n_angles: number): void
function navigation_query_set_commandsv(query: Gst.Query, cmds: NavigationCommand[]): void
function video_afd_meta_api_get_type(): GObject.Type
function video_afd_meta_get_info(): Gst.MetaInfo
function video_affine_transformation_meta_api_get_type(): GObject.Type
function video_affine_transformation_meta_get_info(): Gst.MetaInfo
function video_bar_meta_api_get_type(): GObject.Type
function video_bar_meta_get_info(): Gst.MetaInfo
function video_blend(dest: VideoFrame, src: VideoFrame, x: number, y: number, global_alpha: number): boolean
function video_blend_scale_linear_RGBA(src: VideoInfo, src_buffer: Gst.Buffer, dest_height: number, dest_width: number): [ /* dest */ VideoInfo, /* dest_buffer */ Gst.Buffer ]
function video_calculate_display_ratio(video_width: number, video_height: number, video_par_n: number, video_par_d: number, display_par_n: number, display_par_d: number): [ /* returnType */ boolean, /* dar_n */ number, /* dar_d */ number ]
function video_caption_meta_api_get_type(): GObject.Type
function video_caption_meta_get_info(): Gst.MetaInfo
function video_caption_type_from_caps(caps: Gst.Caps): VideoCaptionType
function video_caption_type_to_caps(type: VideoCaptionType): Gst.Caps
function video_center_rect(src: VideoRectangle, dst: VideoRectangle, scaling: boolean): /* result */ VideoRectangle
function video_chroma_from_string(s: string): VideoChromaSite
function video_chroma_resample(resample: VideoChromaResample, lines: object | null, width: number): void
function video_chroma_site_from_string(s: string): VideoChromaSite
function video_chroma_site_to_string(site: VideoChromaSite): string | null
function video_chroma_to_string(site: VideoChromaSite): string
function video_codec_alpha_meta_api_get_type(): GObject.Type
function video_codec_alpha_meta_get_info(): Gst.MetaInfo
function video_color_matrix_from_iso(value: number): VideoColorMatrix
function video_color_matrix_get_Kr_Kb(matrix: VideoColorMatrix): [ /* returnType */ boolean, /* Kr */ number, /* Kb */ number ]
function video_color_matrix_to_iso(matrix: VideoColorMatrix): number
function video_color_primaries_from_iso(value: number): VideoColorPrimaries
function video_color_primaries_get_info(primaries: VideoColorPrimaries): VideoColorPrimariesInfo
function video_color_primaries_to_iso(primaries: VideoColorPrimaries): number
function video_color_range_offsets(range: VideoColorRange, info: VideoFormatInfo): [ /* offset */ number[], /* scale */ number[] ]
function video_color_transfer_decode(func: VideoTransferFunction, val: number): number
function video_color_transfer_encode(func: VideoTransferFunction, val: number): number
function video_convert_sample(sample: Gst.Sample, to_caps: Gst.Caps, timeout: Gst.ClockTime): Gst.Sample
function video_convert_sample_async(sample: Gst.Sample, to_caps: Gst.Caps, timeout: Gst.ClockTime, callback: VideoConvertSampleCallback): void
function video_crop_meta_api_get_type(): GObject.Type
function video_crop_meta_get_info(): Gst.MetaInfo
function video_event_is_force_key_unit(event: Gst.Event): boolean
function video_event_new_downstream_force_key_unit(timestamp: Gst.ClockTime, stream_time: Gst.ClockTime, running_time: Gst.ClockTime, all_headers: boolean, count: number): Gst.Event
function video_event_new_still_frame(in_still: boolean): Gst.Event
function video_event_new_upstream_force_key_unit(running_time: Gst.ClockTime, all_headers: boolean, count: number): Gst.Event
function video_event_parse_downstream_force_key_unit(event: Gst.Event): [ /* returnType */ boolean, /* timestamp */ Gst.ClockTime, /* stream_time */ Gst.ClockTime, /* running_time */ Gst.ClockTime, /* all_headers */ boolean, /* count */ number ]
function video_event_parse_still_frame(event: Gst.Event): [ /* returnType */ boolean, /* in_still */ boolean ]
function video_event_parse_upstream_force_key_unit(event: Gst.Event): [ /* returnType */ boolean, /* running_time */ Gst.ClockTime, /* all_headers */ boolean, /* count */ number ]
function video_field_order_from_string(order: string): VideoFieldOrder
function video_field_order_to_string(order: VideoFieldOrder): string
function video_format_from_fourcc(fourcc: number): VideoFormat
function video_format_from_masks(depth: number, bpp: number, endianness: number, red_mask: number, green_mask: number, blue_mask: number, alpha_mask: number): VideoFormat
function video_format_from_string(format: string): VideoFormat
function video_format_get_info(format: VideoFormat): VideoFormatInfo
function video_format_get_palette(format: VideoFormat): [ /* returnType */ object | null, /* size */ number ]
function video_format_to_fourcc(format: VideoFormat): number
function video_format_to_string(format: VideoFormat): string
function video_formats_raw(): VideoFormat[]
function video_frame_map(info: VideoInfo, buffer: Gst.Buffer, flags: Gst.MapFlags): [ /* returnType */ boolean, /* frame */ VideoFrame ]
function video_frame_map_id(info: VideoInfo, buffer: Gst.Buffer, id: number, flags: Gst.MapFlags): [ /* returnType */ boolean, /* frame */ VideoFrame ]
function video_gl_texture_upload_meta_api_get_type(): GObject.Type
function video_gl_texture_upload_meta_get_info(): Gst.MetaInfo
function video_guess_framerate(duration: Gst.ClockTime): [ /* returnType */ boolean, /* dest_n */ number | null, /* dest_d */ number | null ]
function video_info_from_caps(caps: Gst.Caps): [ /* returnType */ boolean, /* info */ VideoInfo ]
function video_info_init(): /* info */ VideoInfo
function video_interlace_mode_from_string(mode: string): VideoInterlaceMode
function video_interlace_mode_to_string(mode: VideoInterlaceMode): string
function video_make_raw_caps(formats: VideoFormat[] | null): Gst.Caps
function video_make_raw_caps_with_features(formats: VideoFormat[] | null, features?: Gst.CapsFeatures | null): Gst.Caps
function video_mastering_display_info_from_string(mastering: string): [ /* returnType */ boolean, /* minfo */ VideoMasteringDisplayInfo ]
function video_meta_api_get_type(): GObject.Type
function video_meta_get_info(): Gst.MetaInfo
function video_meta_transform_scale_get_quark(): GLib.Quark
function video_multiview_get_doubled_height_modes(): any
function video_multiview_get_doubled_size_modes(): any
function video_multiview_get_doubled_width_modes(): any
function video_multiview_get_mono_modes(): any
function video_multiview_get_unpacked_modes(): any
function video_multiview_guess_half_aspect(mv_mode: VideoMultiviewMode, width: number, height: number, par_n: number, par_d: number): boolean
function video_multiview_mode_from_caps_string(caps_mview_mode: string): VideoMultiviewMode
function video_multiview_mode_to_caps_string(mview_mode: VideoMultiviewMode): string
function video_multiview_video_info_change_mode(info: VideoInfo, out_mview_mode: VideoMultiviewMode, out_mview_flags: VideoMultiviewFlags): void
function video_orientation_from_tag(taglist: Gst.TagList): [ /* returnType */ boolean, /* method */ VideoOrientationMethod ]
function video_overlay_composition_meta_api_get_type(): GObject.Type
function video_overlay_composition_meta_get_info(): Gst.MetaInfo
function video_overlay_install_properties(oclass: GObject.ObjectClass, last_prop_id: number): void
function video_overlay_set_property(object: GObject.Object, last_prop_id: number, property_id: number, value: any): boolean
function video_region_of_interest_meta_api_get_type(): GObject.Type
function video_region_of_interest_meta_get_info(): Gst.MetaInfo
function video_tile_get_index(mode: VideoTileMode, x: number, y: number, x_tiles: number, y_tiles: number): number
function video_time_code_meta_api_get_type(): GObject.Type
function video_time_code_meta_get_info(): Gst.MetaInfo
function video_transfer_function_decode(func: VideoTransferFunction, val: number): number
function video_transfer_function_encode(func: VideoTransferFunction, val: number): number
function video_transfer_function_from_iso(value: number): VideoTransferFunction
function video_transfer_function_is_equivalent(from_func: VideoTransferFunction, from_bpp: number, to_func: VideoTransferFunction, to_bpp: number): boolean
function video_transfer_function_to_iso(func: VideoTransferFunction): number
interface VideoAffineTransformationGetMatrix {
    (meta: VideoAffineTransformationMeta, matrix: number): boolean
}
interface VideoConvertSampleCallback {
    (sample: Gst.Sample, error: GLib.Error): void
}
interface VideoFormatPack {
    (info: VideoFormatInfo, flags: VideoPackFlags, src: object | null, sstride: number, data: object | null, stride: number, chroma_site: VideoChromaSite, y: number, width: number): void
}
interface VideoFormatUnpack {
    (info: VideoFormatInfo, flags: VideoPackFlags, dest: object | null, data: object | null, stride: number, x: number, y: number, width: number): void
}
interface VideoGLTextureUpload {
    (meta: VideoGLTextureUploadMeta, texture_id: number): boolean
}
class ColorBalance {
    /* Methods of GstVideo-1.0.GstVideo.ColorBalance */
    get_balance_type(): ColorBalanceType
    get_value(channel: ColorBalanceChannel): number
    list_channels(): ColorBalanceChannel[]
    set_value(channel: ColorBalanceChannel, value: number): void
    value_changed(channel: ColorBalanceChannel, value: number): void
    /* Virtual methods of GstVideo-1.0.GstVideo.ColorBalance */
    vfunc_get_balance_type(): ColorBalanceType
    vfunc_get_value(channel: ColorBalanceChannel): number
    vfunc_list_channels(): ColorBalanceChannel[]
    vfunc_set_value(channel: ColorBalanceChannel, value: number): void
    vfunc_value_changed(channel: ColorBalanceChannel, value: number): void
    /* Signals of GstVideo-1.0.GstVideo.ColorBalance */
    connect(sigName: "value-changed", callback: (($obj: ColorBalance, channel: ColorBalanceChannel, value: number) => void)): number
    connect_after(sigName: "value-changed", callback: (($obj: ColorBalance, channel: ColorBalanceChannel, value: number) => void)): number
    emit(sigName: "value-changed", channel: ColorBalanceChannel, value: number): void
    static name: string
}
class Navigation {
    /* Methods of GstVideo-1.0.GstVideo.Navigation */
    send_command(command: NavigationCommand): void
    send_event(structure: Gst.Structure): void
    send_key_event(event: string, key: string): void
    send_mouse_event(event: string, button: number, x: number, y: number): void
    send_mouse_scroll_event(x: number, y: number, delta_x: number, delta_y: number): void
    /* Virtual methods of GstVideo-1.0.GstVideo.Navigation */
    vfunc_send_event(structure: Gst.Structure): void
    /* Function overloads */
    vfunc_send_event(event: Gst.Event): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static event_get_type(event: Gst.Event): NavigationEventType
    static event_parse_command(event: Gst.Event): [ /* returnType */ boolean, /* command */ NavigationCommand | null ]
    static event_parse_key_event(event: Gst.Event): [ /* returnType */ boolean, /* key */ string | null ]
    static event_parse_mouse_button_event(event: Gst.Event): [ /* returnType */ boolean, /* button */ number | null, /* x */ number | null, /* y */ number | null ]
    static event_parse_mouse_move_event(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
    static event_parse_mouse_scroll_event(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* delta_x */ number | null, /* delta_y */ number | null ]
    static message_get_type(message: Gst.Message): NavigationMessageType
    static message_new_angles_changed(src: Gst.Object, cur_angle: number, n_angles: number): Gst.Message
    static message_new_commands_changed(src: Gst.Object): Gst.Message
    static message_new_event(src: Gst.Object, event: Gst.Event): Gst.Message
    static message_new_mouse_over(src: Gst.Object, active: boolean): Gst.Message
    static message_parse_angles_changed(message: Gst.Message): [ /* returnType */ boolean, /* cur_angle */ number | null, /* n_angles */ number | null ]
    static message_parse_event(message: Gst.Message): [ /* returnType */ boolean, /* event */ Gst.Event | null ]
    static message_parse_mouse_over(message: Gst.Message): [ /* returnType */ boolean, /* active */ boolean | null ]
    static query_get_type(query: Gst.Query): NavigationQueryType
    static query_new_angles(): Gst.Query
    static query_new_commands(): Gst.Query
    static query_parse_angles(query: Gst.Query): [ /* returnType */ boolean, /* cur_angle */ number | null, /* n_angles */ number | null ]
    static query_parse_commands_length(query: Gst.Query): [ /* returnType */ boolean, /* n_cmds */ number | null ]
    static query_parse_commands_nth(query: Gst.Query, nth: number): [ /* returnType */ boolean, /* cmd */ NavigationCommand | null ]
    static query_set_angles(query: Gst.Query, cur_angle: number, n_angles: number): void
    static query_set_commandsv(query: Gst.Query, cmds: NavigationCommand[]): void
}
class VideoDirection {
    /* Properties of GstVideo-1.0.GstVideo.VideoDirection */
    video_direction: VideoOrientationMethod
    static name: string
}
class VideoOrientation {
    /* Methods of GstVideo-1.0.GstVideo.VideoOrientation */
    get_hcenter(): [ /* returnType */ boolean, /* center */ number ]
    get_hflip(): [ /* returnType */ boolean, /* flip */ boolean ]
    get_vcenter(): [ /* returnType */ boolean, /* center */ number ]
    get_vflip(): [ /* returnType */ boolean, /* flip */ boolean ]
    set_hcenter(center: number): boolean
    set_hflip(flip: boolean): boolean
    set_vcenter(center: number): boolean
    set_vflip(flip: boolean): boolean
    /* Virtual methods of GstVideo-1.0.GstVideo.VideoOrientation */
    vfunc_get_hcenter(): [ /* returnType */ boolean, /* center */ number ]
    vfunc_get_hflip(): [ /* returnType */ boolean, /* flip */ boolean ]
    vfunc_get_vcenter(): [ /* returnType */ boolean, /* center */ number ]
    vfunc_get_vflip(): [ /* returnType */ boolean, /* flip */ boolean ]
    vfunc_set_hcenter(center: number): boolean
    vfunc_set_hflip(flip: boolean): boolean
    vfunc_set_vcenter(center: number): boolean
    vfunc_set_vflip(flip: boolean): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static from_tag(taglist: Gst.TagList): [ /* returnType */ boolean, /* method */ VideoOrientationMethod ]
}
class VideoOverlay {
    /* Methods of GstVideo-1.0.GstVideo.VideoOverlay */
    expose(): void
    got_window_handle(handle: number): void
    handle_events(handle_events: boolean): void
    prepare_window_handle(): void
    set_render_rectangle(x: number, y: number, width: number, height: number): boolean
    set_window_handle(handle: number): void
    /* Virtual methods of GstVideo-1.0.GstVideo.VideoOverlay */
    vfunc_expose(): void
    vfunc_handle_events(handle_events: boolean): void
    vfunc_set_render_rectangle(x: number, y: number, width: number, height: number): void
    vfunc_set_window_handle(handle: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static install_properties(oclass: GObject.ObjectClass, last_prop_id: number): void
    static set_property(object: GObject.Object, last_prop_id: number, property_id: number, value: any): boolean
}
interface ColorBalanceChannel_ConstructProps extends GObject.Object_ConstructProps {
}
class ColorBalanceChannel {
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
    /* Virtual methods of GstVideo-1.0.GstVideo.ColorBalanceChannel */
    vfunc_value_changed(value: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GstVideo-1.0.GstVideo.ColorBalanceChannel */
    connect(sigName: "value-changed", callback: (($obj: ColorBalanceChannel, value: number) => void)): number
    connect_after(sigName: "value-changed", callback: (($obj: ColorBalanceChannel, value: number) => void)): number
    emit(sigName: "value-changed", value: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ColorBalanceChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ColorBalanceChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ColorBalanceChannel_ConstructProps)
    _init (config?: ColorBalanceChannel_ConstructProps): void
    static $gtype: GObject.Type
}
interface VideoAggregator_ConstructProps extends GstBase.Aggregator_ConstructProps {
}
class VideoAggregator {
    /* Properties of GstBase-1.0.GstBase.Aggregator */
    emit_signals: boolean
    latency: number
    min_upstream_latency: number
    start_time: number
    start_time_selection: GstBase.AggregatorStartTimeSelection
    /* Fields of GstBase-1.0.GstBase.Aggregator */
    readonly parent: Gst.Element
    readonly srcpad: Gst.Pad
    /* Fields of Gst-1.0.Gst.Element */
    readonly object: Gst.Object
    readonly state_lock: GLib.RecMutex
    readonly state_cond: GLib.Cond
    readonly state_cookie: number
    readonly target_state: Gst.State
    readonly current_state: Gst.State
    readonly next_state: Gst.State
    readonly pending_state: Gst.State
    readonly last_return: Gst.StateChangeReturn
    readonly bus: Gst.Bus
    readonly clock: Gst.Clock
    readonly base_time: Gst.ClockTimeDiff
    readonly numpads: number
    readonly pads: Gst.Pad[]
    readonly numsrcpads: number
    readonly srcpads: Gst.Pad[]
    readonly numsinkpads: number
    readonly sinkpads: Gst.Pad[]
    readonly pads_cookie: number
    readonly contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstVideo-1.0.GstVideo.VideoAggregator */
    get_execution_task_pool(): Gst.TaskPool
    /* Methods of GstBase-1.0.GstBase.Aggregator */
    finish_buffer(buffer: Gst.Buffer): Gst.FlowReturn
    finish_buffer_list(bufferlist: Gst.BufferList): Gst.FlowReturn
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_buffer_pool(): Gst.BufferPool | null
    get_ignore_inactive_pads(): boolean
    get_latency(): Gst.ClockTime
    negotiate(): boolean
    peek_next_sample(pad: GstBase.AggregatorPad): Gst.Sample | null
    selected_samples(pts: Gst.ClockTime, dts: Gst.ClockTime, duration: Gst.ClockTime, info?: Gst.Structure | null): void
    set_ignore_inactive_pads(ignore: boolean): void
    set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void
    set_src_caps(caps: Gst.Caps): void
    simple_get_next_time(): Gst.ClockTime
    update_segment(segment: Gst.Segment): void
    /* Methods of Gst-1.0.Gst.Element */
    abort_state(): void
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: Gst.ElementCallAsyncFunc): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    get_base_time(): Gst.ClockTime
    get_bus(): Gst.Bus | null
    get_clock(): Gst.Clock | null
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    get_context(context_type: string): Gst.Context | null
    get_context_unlocked(context_type: string): Gst.Context | null
    get_contexts(): Gst.Context[]
    get_current_clock_time(): Gst.ClockTime
    get_current_running_time(): Gst.ClockTime
    get_factory(): Gst.ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): Gst.PadTemplate | null
    get_pad_template_list(): Gst.PadTemplate[]
    get_request_pad(name: string): Gst.Pad | null
    get_start_time(): Gst.ClockTime
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    get_static_pad(name: string): Gst.Pad | null
    is_locked_state(): boolean
    iterate_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lost_state(): void
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    no_more_pads(): void
    post_message(message: Gst.Message): boolean
    provide_clock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Gst.Pad): void
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    request_pad_simple(name: string): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    send_event(event: Gst.Event): boolean
    set_base_time(time: Gst.ClockTime): void
    set_bus(bus?: Gst.Bus | null): void
    set_clock(clock?: Gst.Clock | null): boolean
    set_context(context: Gst.Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: Gst.ClockTime): void
    set_state(state: Gst.State): Gst.StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Gst.Element): void
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GstVideo-1.0.GstVideo.VideoAggregator */
    vfunc_aggregate_frames(outbuffer: Gst.Buffer): Gst.FlowReturn
    vfunc_create_output_buffer(outbuffer: Gst.Buffer): Gst.FlowReturn
    vfunc_find_best_format(downstream_caps: Gst.Caps, best_info: VideoInfo, at_least_one_alpha: boolean): void
    vfunc_update_caps(caps: Gst.Caps): Gst.Caps
    /* Virtual methods of GstBase-1.0.GstBase.Aggregator */
    vfunc_aggregate(timeout: boolean): Gst.FlowReturn
    vfunc_clip(aggregator_pad: GstBase.AggregatorPad, buf: Gst.Buffer): Gst.Buffer
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_finish_buffer(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_finish_buffer_list(bufferlist: Gst.BufferList): Gst.FlowReturn
    vfunc_fixate_src_caps(caps: Gst.Caps): Gst.Caps
    vfunc_flush(): Gst.FlowReturn
    vfunc_get_next_time(): Gst.ClockTime
    vfunc_negotiate(): boolean
    vfunc_negotiated_src_caps(caps: Gst.Caps): boolean
    vfunc_peek_next_sample(aggregator_pad: GstBase.AggregatorPad): Gst.Sample | null
    vfunc_propose_allocation(pad: GstBase.AggregatorPad, decide_query: Gst.Query, query: Gst.Query): boolean
    vfunc_sink_event(aggregator_pad: GstBase.AggregatorPad, event: Gst.Event): boolean
    vfunc_sink_event_pre_queue(aggregator_pad: GstBase.AggregatorPad, event: Gst.Event): Gst.FlowReturn
    vfunc_sink_query(aggregator_pad: GstBase.AggregatorPad, query: Gst.Query): boolean
    vfunc_sink_query_pre_queue(aggregator_pad: GstBase.AggregatorPad, query: Gst.Query): boolean
    vfunc_src_activate(mode: Gst.PadMode, active: boolean): boolean
    vfunc_src_event(event: Gst.Event): boolean
    vfunc_src_query(query: Gst.Query): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_update_src_caps(caps: Gst.Caps): [ /* returnType */ Gst.FlowReturn, /* ret */ Gst.Caps | null ]
    /* Virtual methods of Gst-1.0.Gst.Element */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    vfunc_post_message(message: Gst.Message): boolean
    vfunc_provide_clock(): Gst.Clock | null
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_set_bus(bus?: Gst.Bus | null): void
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    vfunc_set_context(context: Gst.Context): void
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GstBase-1.0.GstBase.Aggregator */
    connect(sigName: "samples-selected", callback: (($obj: VideoAggregator, segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null) => void)): number
    connect_after(sigName: "samples-selected", callback: (($obj: VideoAggregator, segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null) => void)): number
    emit(sigName: "samples-selected", segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: VideoAggregator) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: VideoAggregator) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: VideoAggregator, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: VideoAggregator, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: VideoAggregator, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: VideoAggregator, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoAggregator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoAggregator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::emit-signals", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latency", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-upstream-latency", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-upstream-latency", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-time", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-time-selection", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time-selection", callback: (($obj: VideoAggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoAggregator_ConstructProps)
    _init (config?: VideoAggregator_ConstructProps): void
    static $gtype: GObject.Type
}
interface VideoAggregatorConvertPad_ConstructProps extends VideoAggregatorPad_ConstructProps {
    /* Constructor properties of GstVideo-1.0.GstVideo.VideoAggregatorConvertPad */
    converter_config?: Gst.Structure
}
class VideoAggregatorConvertPad {
    /* Properties of GstVideo-1.0.GstVideo.VideoAggregatorConvertPad */
    converter_config: Gst.Structure
    /* Properties of GstVideo-1.0.GstVideo.VideoAggregatorPad */
    max_last_buffer_repeat: number
    repeat_after_eos: boolean
    zorder: number
    /* Properties of GstBase-1.0.GstBase.AggregatorPad */
    emit_signals: boolean
    /* Properties of Gst-1.0.Gst.Pad */
    readonly caps: Gst.Caps
    offset: number
    template: Gst.PadTemplate
    /* Fields of GstVideo-1.0.GstVideo.VideoAggregatorPad */
    readonly parent: GstBase.AggregatorPad
    readonly info: VideoInfo
    /* Fields of GstBase-1.0.GstBase.AggregatorPad */
    readonly segment: Gst.Segment
    /* Fields of Gst-1.0.Gst.Pad */
    readonly object: Gst.Object
    readonly element_private: object
    readonly padtemplate: Gst.PadTemplate
    readonly direction: Gst.PadDirection
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstVideo-1.0.GstVideo.VideoAggregatorConvertPad */
    update_conversion_info(): void
    /* Methods of GstVideo-1.0.GstVideo.VideoAggregatorPad */
    get_current_buffer(): Gst.Buffer
    get_prepared_frame(): VideoFrame
    has_current_buffer(): boolean
    set_needs_alpha(needs_alpha: boolean): void
    /* Methods of GstBase-1.0.GstBase.AggregatorPad */
    drop_buffer(): boolean
    has_buffer(): boolean
    is_eos(): boolean
    is_inactive(): boolean
    peek_buffer(): Gst.Buffer | null
    pop_buffer(): Gst.Buffer | null
    /* Methods of Gst-1.0.Gst.Pad */
    activate_mode(mode: Gst.PadMode, active: boolean): boolean
    add_probe(mask: Gst.PadProbeType, callback: Gst.PadProbeCallback): number
    can_link(sinkpad: Gst.Pad): boolean
    chain(buffer: Gst.Buffer): Gst.FlowReturn
    chain_list(list: Gst.BufferList): Gst.FlowReturn
    check_reconfigure(): boolean
    create_stream_id(parent: Gst.Element, stream_id?: string | null): string
    event_default(parent: Gst.Object | null, event: Gst.Event): boolean
    forward(forward: Gst.PadForwardFunction): boolean
    get_allowed_caps(): Gst.Caps | null
    get_current_caps(): Gst.Caps | null
    get_direction(): Gst.PadDirection
    get_element_private(): object | null
    get_last_flow_return(): Gst.FlowReturn
    get_offset(): number
    get_pad_template(): Gst.PadTemplate | null
    get_pad_template_caps(): Gst.Caps
    get_parent_element(): Gst.Element | null
    get_peer(): Gst.Pad | null
    get_range(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    get_single_internal_link(): Gst.Pad | null
    get_sticky_event(event_type: Gst.EventType, idx: number): Gst.Event | null
    get_stream(): Gst.Stream | null
    get_stream_id(): string | null
    get_task_state(): Gst.TaskState
    has_current_caps(): boolean
    is_active(): boolean
    is_blocked(): boolean
    is_blocking(): boolean
    is_linked(): boolean
    iterate_internal_links(): Gst.Iterator | null
    iterate_internal_links_default(parent?: Gst.Object | null): Gst.Iterator | null
    link(sinkpad: Gst.Pad): Gst.PadLinkReturn
    link_full(sinkpad: Gst.Pad, flags: Gst.PadLinkCheck): Gst.PadLinkReturn
    link_maybe_ghosting(sink: Gst.Pad): boolean
    link_maybe_ghosting_full(sink: Gst.Pad, flags: Gst.PadLinkCheck): boolean
    mark_reconfigure(): void
    needs_reconfigure(): boolean
    pause_task(): boolean
    peer_query(query: Gst.Query): boolean
    peer_query_accept_caps(caps: Gst.Caps): boolean
    peer_query_caps(filter?: Gst.Caps | null): Gst.Caps
    peer_query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    peer_query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    peer_query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    proxy_query_accept_caps(query: Gst.Query): boolean
    proxy_query_caps(query: Gst.Query): boolean
    pull_range(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    push(buffer: Gst.Buffer): Gst.FlowReturn
    push_event(event: Gst.Event): boolean
    push_list(list: Gst.BufferList): Gst.FlowReturn
    query(query: Gst.Query): boolean
    query_accept_caps(caps: Gst.Caps): boolean
    query_caps(filter?: Gst.Caps | null): Gst.Caps
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_default(parent: Gst.Object | null, query: Gst.Query): boolean
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    remove_probe(id: number): void
    send_event(event: Gst.Event): boolean
    set_activate_function_full(activate: Gst.PadActivateFunction): void
    set_activatemode_function_full(activatemode: Gst.PadActivateModeFunction): void
    set_active(active: boolean): boolean
    set_chain_function_full(chain: Gst.PadChainFunction): void
    set_chain_list_function_full(chainlist: Gst.PadChainListFunction): void
    set_element_private(priv?: object | null): void
    set_event_full_function_full(event: Gst.PadEventFullFunction): void
    set_event_function_full(event: Gst.PadEventFunction): void
    set_getrange_function_full(get: Gst.PadGetRangeFunction): void
    set_iterate_internal_links_function_full(iterintlink: Gst.PadIterIntLinkFunction): void
    set_link_function_full(link: Gst.PadLinkFunction): void
    set_offset(offset: number): void
    set_query_function_full(query: Gst.PadQueryFunction): void
    set_unlink_function_full(unlink: Gst.PadUnlinkFunction): void
    start_task(func: Gst.TaskFunction): boolean
    sticky_events_foreach(foreach_func: Gst.PadStickyEventsForeachFunction): void
    stop_task(): boolean
    store_sticky_event(event: Gst.Event): Gst.FlowReturn
    unlink(sinkpad: Gst.Pad): boolean
    use_fixed_caps(): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GstVideo-1.0.GstVideo.VideoAggregatorConvertPad */
    vfunc_create_conversion_info(agg: VideoAggregator, conversion_info: VideoInfo): void
    /* Virtual methods of GstVideo-1.0.GstVideo.VideoAggregatorPad */
    vfunc_clean_frame(videoaggregator: VideoAggregator, prepared_frame: VideoFrame): void
    vfunc_prepare_frame(videoaggregator: VideoAggregator, buffer: Gst.Buffer, prepared_frame: VideoFrame): boolean
    vfunc_prepare_frame_finish(videoaggregator: VideoAggregator, prepared_frame: VideoFrame): void
    vfunc_prepare_frame_start(videoaggregator: VideoAggregator, buffer: Gst.Buffer, prepared_frame: VideoFrame): void
    vfunc_update_conversion_info(): void
    /* Virtual methods of GstBase-1.0.GstBase.AggregatorPad */
    vfunc_flush(aggregator: GstBase.Aggregator): Gst.FlowReturn
    vfunc_skip_buffer(aggregator: GstBase.Aggregator, buffer: Gst.Buffer): boolean
    /* Virtual methods of Gst-1.0.Gst.Pad */
    vfunc_linked(peer: Gst.Pad): void
    vfunc_unlinked(peer: Gst.Pad): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GstBase-1.0.GstBase.AggregatorPad */
    connect(sigName: "buffer-consumed", callback: (($obj: VideoAggregatorConvertPad, object: Gst.Buffer) => void)): number
    connect_after(sigName: "buffer-consumed", callback: (($obj: VideoAggregatorConvertPad, object: Gst.Buffer) => void)): number
    emit(sigName: "buffer-consumed", object: Gst.Buffer): void
    /* Signals of Gst-1.0.Gst.Pad */
    connect(sigName: "linked", callback: (($obj: VideoAggregatorConvertPad, peer: Gst.Pad) => void)): number
    connect_after(sigName: "linked", callback: (($obj: VideoAggregatorConvertPad, peer: Gst.Pad) => void)): number
    emit(sigName: "linked", peer: Gst.Pad): void
    connect(sigName: "unlinked", callback: (($obj: VideoAggregatorConvertPad, peer: Gst.Pad) => void)): number
    connect_after(sigName: "unlinked", callback: (($obj: VideoAggregatorConvertPad, peer: Gst.Pad) => void)): number
    emit(sigName: "unlinked", peer: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoAggregatorConvertPad, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoAggregatorConvertPad, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::converter-config", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::converter-config", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-last-buffer-repeat", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-last-buffer-repeat", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::repeat-after-eos", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-after-eos", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::zorder", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zorder", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::emit-signals", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::caps", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offset", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::template", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: VideoAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoAggregatorConvertPad_ConstructProps)
    _init (config?: VideoAggregatorConvertPad_ConstructProps): void
    static $gtype: GObject.Type
}
interface VideoAggregatorPad_ConstructProps extends GstBase.AggregatorPad_ConstructProps {
    /* Constructor properties of GstVideo-1.0.GstVideo.VideoAggregatorPad */
    max_last_buffer_repeat?: number
    repeat_after_eos?: boolean
    zorder?: number
}
class VideoAggregatorPad {
    /* Properties of GstVideo-1.0.GstVideo.VideoAggregatorPad */
    max_last_buffer_repeat: number
    repeat_after_eos: boolean
    zorder: number
    /* Properties of GstBase-1.0.GstBase.AggregatorPad */
    emit_signals: boolean
    /* Properties of Gst-1.0.Gst.Pad */
    readonly caps: Gst.Caps
    offset: number
    template: Gst.PadTemplate
    /* Fields of GstBase-1.0.GstBase.AggregatorPad */
    readonly parent: Gst.Pad
    readonly segment: Gst.Segment
    /* Fields of Gst-1.0.Gst.Pad */
    readonly object: Gst.Object
    readonly element_private: object
    readonly padtemplate: Gst.PadTemplate
    readonly direction: Gst.PadDirection
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstVideo-1.0.GstVideo.VideoAggregatorPad */
    get_current_buffer(): Gst.Buffer
    get_prepared_frame(): VideoFrame
    has_current_buffer(): boolean
    set_needs_alpha(needs_alpha: boolean): void
    /* Methods of GstBase-1.0.GstBase.AggregatorPad */
    drop_buffer(): boolean
    has_buffer(): boolean
    is_eos(): boolean
    is_inactive(): boolean
    peek_buffer(): Gst.Buffer | null
    pop_buffer(): Gst.Buffer | null
    /* Methods of Gst-1.0.Gst.Pad */
    activate_mode(mode: Gst.PadMode, active: boolean): boolean
    add_probe(mask: Gst.PadProbeType, callback: Gst.PadProbeCallback): number
    can_link(sinkpad: Gst.Pad): boolean
    chain(buffer: Gst.Buffer): Gst.FlowReturn
    chain_list(list: Gst.BufferList): Gst.FlowReturn
    check_reconfigure(): boolean
    create_stream_id(parent: Gst.Element, stream_id?: string | null): string
    event_default(parent: Gst.Object | null, event: Gst.Event): boolean
    forward(forward: Gst.PadForwardFunction): boolean
    get_allowed_caps(): Gst.Caps | null
    get_current_caps(): Gst.Caps | null
    get_direction(): Gst.PadDirection
    get_element_private(): object | null
    get_last_flow_return(): Gst.FlowReturn
    get_offset(): number
    get_pad_template(): Gst.PadTemplate | null
    get_pad_template_caps(): Gst.Caps
    get_parent_element(): Gst.Element | null
    get_peer(): Gst.Pad | null
    get_range(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    get_single_internal_link(): Gst.Pad | null
    get_sticky_event(event_type: Gst.EventType, idx: number): Gst.Event | null
    get_stream(): Gst.Stream | null
    get_stream_id(): string | null
    get_task_state(): Gst.TaskState
    has_current_caps(): boolean
    is_active(): boolean
    is_blocked(): boolean
    is_blocking(): boolean
    is_linked(): boolean
    iterate_internal_links(): Gst.Iterator | null
    iterate_internal_links_default(parent?: Gst.Object | null): Gst.Iterator | null
    link(sinkpad: Gst.Pad): Gst.PadLinkReturn
    link_full(sinkpad: Gst.Pad, flags: Gst.PadLinkCheck): Gst.PadLinkReturn
    link_maybe_ghosting(sink: Gst.Pad): boolean
    link_maybe_ghosting_full(sink: Gst.Pad, flags: Gst.PadLinkCheck): boolean
    mark_reconfigure(): void
    needs_reconfigure(): boolean
    pause_task(): boolean
    peer_query(query: Gst.Query): boolean
    peer_query_accept_caps(caps: Gst.Caps): boolean
    peer_query_caps(filter?: Gst.Caps | null): Gst.Caps
    peer_query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    peer_query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    peer_query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    proxy_query_accept_caps(query: Gst.Query): boolean
    proxy_query_caps(query: Gst.Query): boolean
    pull_range(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    push(buffer: Gst.Buffer): Gst.FlowReturn
    push_event(event: Gst.Event): boolean
    push_list(list: Gst.BufferList): Gst.FlowReturn
    query(query: Gst.Query): boolean
    query_accept_caps(caps: Gst.Caps): boolean
    query_caps(filter?: Gst.Caps | null): Gst.Caps
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_default(parent: Gst.Object | null, query: Gst.Query): boolean
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    remove_probe(id: number): void
    send_event(event: Gst.Event): boolean
    set_activate_function_full(activate: Gst.PadActivateFunction): void
    set_activatemode_function_full(activatemode: Gst.PadActivateModeFunction): void
    set_active(active: boolean): boolean
    set_chain_function_full(chain: Gst.PadChainFunction): void
    set_chain_list_function_full(chainlist: Gst.PadChainListFunction): void
    set_element_private(priv?: object | null): void
    set_event_full_function_full(event: Gst.PadEventFullFunction): void
    set_event_function_full(event: Gst.PadEventFunction): void
    set_getrange_function_full(get: Gst.PadGetRangeFunction): void
    set_iterate_internal_links_function_full(iterintlink: Gst.PadIterIntLinkFunction): void
    set_link_function_full(link: Gst.PadLinkFunction): void
    set_offset(offset: number): void
    set_query_function_full(query: Gst.PadQueryFunction): void
    set_unlink_function_full(unlink: Gst.PadUnlinkFunction): void
    start_task(func: Gst.TaskFunction): boolean
    sticky_events_foreach(foreach_func: Gst.PadStickyEventsForeachFunction): void
    stop_task(): boolean
    store_sticky_event(event: Gst.Event): Gst.FlowReturn
    unlink(sinkpad: Gst.Pad): boolean
    use_fixed_caps(): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GstVideo-1.0.GstVideo.VideoAggregatorPad */
    vfunc_clean_frame(videoaggregator: VideoAggregator, prepared_frame: VideoFrame): void
    vfunc_prepare_frame(videoaggregator: VideoAggregator, buffer: Gst.Buffer, prepared_frame: VideoFrame): boolean
    vfunc_prepare_frame_finish(videoaggregator: VideoAggregator, prepared_frame: VideoFrame): void
    vfunc_prepare_frame_start(videoaggregator: VideoAggregator, buffer: Gst.Buffer, prepared_frame: VideoFrame): void
    vfunc_update_conversion_info(): void
    /* Virtual methods of GstBase-1.0.GstBase.AggregatorPad */
    vfunc_flush(aggregator: GstBase.Aggregator): Gst.FlowReturn
    vfunc_skip_buffer(aggregator: GstBase.Aggregator, buffer: Gst.Buffer): boolean
    /* Virtual methods of Gst-1.0.Gst.Pad */
    vfunc_linked(peer: Gst.Pad): void
    vfunc_unlinked(peer: Gst.Pad): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GstBase-1.0.GstBase.AggregatorPad */
    connect(sigName: "buffer-consumed", callback: (($obj: VideoAggregatorPad, object: Gst.Buffer) => void)): number
    connect_after(sigName: "buffer-consumed", callback: (($obj: VideoAggregatorPad, object: Gst.Buffer) => void)): number
    emit(sigName: "buffer-consumed", object: Gst.Buffer): void
    /* Signals of Gst-1.0.Gst.Pad */
    connect(sigName: "linked", callback: (($obj: VideoAggregatorPad, peer: Gst.Pad) => void)): number
    connect_after(sigName: "linked", callback: (($obj: VideoAggregatorPad, peer: Gst.Pad) => void)): number
    emit(sigName: "linked", peer: Gst.Pad): void
    connect(sigName: "unlinked", callback: (($obj: VideoAggregatorPad, peer: Gst.Pad) => void)): number
    connect_after(sigName: "unlinked", callback: (($obj: VideoAggregatorPad, peer: Gst.Pad) => void)): number
    emit(sigName: "unlinked", peer: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoAggregatorPad, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoAggregatorPad, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::max-last-buffer-repeat", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-last-buffer-repeat", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::repeat-after-eos", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-after-eos", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::zorder", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zorder", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::emit-signals", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::caps", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offset", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::template", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: VideoAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoAggregatorPad_ConstructProps)
    _init (config?: VideoAggregatorPad_ConstructProps): void
    static $gtype: GObject.Type
}
interface VideoAggregatorParallelConvertPad_ConstructProps extends VideoAggregatorConvertPad_ConstructProps {
}
class VideoAggregatorParallelConvertPad {
    /* Properties of GstVideo-1.0.GstVideo.VideoAggregatorConvertPad */
    converter_config: Gst.Structure
    /* Properties of GstVideo-1.0.GstVideo.VideoAggregatorPad */
    max_last_buffer_repeat: number
    repeat_after_eos: boolean
    zorder: number
    /* Properties of GstBase-1.0.GstBase.AggregatorPad */
    emit_signals: boolean
    /* Properties of Gst-1.0.Gst.Pad */
    readonly caps: Gst.Caps
    offset: number
    template: Gst.PadTemplate
    /* Fields of GstVideo-1.0.GstVideo.VideoAggregatorPad */
    readonly parent: GstBase.AggregatorPad
    readonly info: VideoInfo
    /* Fields of GstBase-1.0.GstBase.AggregatorPad */
    readonly segment: Gst.Segment
    /* Fields of Gst-1.0.Gst.Pad */
    readonly object: Gst.Object
    readonly element_private: object
    readonly padtemplate: Gst.PadTemplate
    readonly direction: Gst.PadDirection
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstVideo-1.0.GstVideo.VideoAggregatorConvertPad */
    update_conversion_info(): void
    /* Methods of GstVideo-1.0.GstVideo.VideoAggregatorPad */
    get_current_buffer(): Gst.Buffer
    get_prepared_frame(): VideoFrame
    has_current_buffer(): boolean
    set_needs_alpha(needs_alpha: boolean): void
    /* Methods of GstBase-1.0.GstBase.AggregatorPad */
    drop_buffer(): boolean
    has_buffer(): boolean
    is_eos(): boolean
    is_inactive(): boolean
    peek_buffer(): Gst.Buffer | null
    pop_buffer(): Gst.Buffer | null
    /* Methods of Gst-1.0.Gst.Pad */
    activate_mode(mode: Gst.PadMode, active: boolean): boolean
    add_probe(mask: Gst.PadProbeType, callback: Gst.PadProbeCallback): number
    can_link(sinkpad: Gst.Pad): boolean
    chain(buffer: Gst.Buffer): Gst.FlowReturn
    chain_list(list: Gst.BufferList): Gst.FlowReturn
    check_reconfigure(): boolean
    create_stream_id(parent: Gst.Element, stream_id?: string | null): string
    event_default(parent: Gst.Object | null, event: Gst.Event): boolean
    forward(forward: Gst.PadForwardFunction): boolean
    get_allowed_caps(): Gst.Caps | null
    get_current_caps(): Gst.Caps | null
    get_direction(): Gst.PadDirection
    get_element_private(): object | null
    get_last_flow_return(): Gst.FlowReturn
    get_offset(): number
    get_pad_template(): Gst.PadTemplate | null
    get_pad_template_caps(): Gst.Caps
    get_parent_element(): Gst.Element | null
    get_peer(): Gst.Pad | null
    get_range(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    get_single_internal_link(): Gst.Pad | null
    get_sticky_event(event_type: Gst.EventType, idx: number): Gst.Event | null
    get_stream(): Gst.Stream | null
    get_stream_id(): string | null
    get_task_state(): Gst.TaskState
    has_current_caps(): boolean
    is_active(): boolean
    is_blocked(): boolean
    is_blocking(): boolean
    is_linked(): boolean
    iterate_internal_links(): Gst.Iterator | null
    iterate_internal_links_default(parent?: Gst.Object | null): Gst.Iterator | null
    link(sinkpad: Gst.Pad): Gst.PadLinkReturn
    link_full(sinkpad: Gst.Pad, flags: Gst.PadLinkCheck): Gst.PadLinkReturn
    link_maybe_ghosting(sink: Gst.Pad): boolean
    link_maybe_ghosting_full(sink: Gst.Pad, flags: Gst.PadLinkCheck): boolean
    mark_reconfigure(): void
    needs_reconfigure(): boolean
    pause_task(): boolean
    peer_query(query: Gst.Query): boolean
    peer_query_accept_caps(caps: Gst.Caps): boolean
    peer_query_caps(filter?: Gst.Caps | null): Gst.Caps
    peer_query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    peer_query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    peer_query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    proxy_query_accept_caps(query: Gst.Query): boolean
    proxy_query_caps(query: Gst.Query): boolean
    pull_range(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    push(buffer: Gst.Buffer): Gst.FlowReturn
    push_event(event: Gst.Event): boolean
    push_list(list: Gst.BufferList): Gst.FlowReturn
    query(query: Gst.Query): boolean
    query_accept_caps(caps: Gst.Caps): boolean
    query_caps(filter?: Gst.Caps | null): Gst.Caps
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_default(parent: Gst.Object | null, query: Gst.Query): boolean
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    remove_probe(id: number): void
    send_event(event: Gst.Event): boolean
    set_activate_function_full(activate: Gst.PadActivateFunction): void
    set_activatemode_function_full(activatemode: Gst.PadActivateModeFunction): void
    set_active(active: boolean): boolean
    set_chain_function_full(chain: Gst.PadChainFunction): void
    set_chain_list_function_full(chainlist: Gst.PadChainListFunction): void
    set_element_private(priv?: object | null): void
    set_event_full_function_full(event: Gst.PadEventFullFunction): void
    set_event_function_full(event: Gst.PadEventFunction): void
    set_getrange_function_full(get: Gst.PadGetRangeFunction): void
    set_iterate_internal_links_function_full(iterintlink: Gst.PadIterIntLinkFunction): void
    set_link_function_full(link: Gst.PadLinkFunction): void
    set_offset(offset: number): void
    set_query_function_full(query: Gst.PadQueryFunction): void
    set_unlink_function_full(unlink: Gst.PadUnlinkFunction): void
    start_task(func: Gst.TaskFunction): boolean
    sticky_events_foreach(foreach_func: Gst.PadStickyEventsForeachFunction): void
    stop_task(): boolean
    store_sticky_event(event: Gst.Event): Gst.FlowReturn
    unlink(sinkpad: Gst.Pad): boolean
    use_fixed_caps(): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GstVideo-1.0.GstVideo.VideoAggregatorConvertPad */
    vfunc_create_conversion_info(agg: VideoAggregator, conversion_info: VideoInfo): void
    /* Virtual methods of GstVideo-1.0.GstVideo.VideoAggregatorPad */
    vfunc_clean_frame(videoaggregator: VideoAggregator, prepared_frame: VideoFrame): void
    vfunc_prepare_frame(videoaggregator: VideoAggregator, buffer: Gst.Buffer, prepared_frame: VideoFrame): boolean
    vfunc_prepare_frame_finish(videoaggregator: VideoAggregator, prepared_frame: VideoFrame): void
    vfunc_prepare_frame_start(videoaggregator: VideoAggregator, buffer: Gst.Buffer, prepared_frame: VideoFrame): void
    vfunc_update_conversion_info(): void
    /* Virtual methods of GstBase-1.0.GstBase.AggregatorPad */
    vfunc_flush(aggregator: GstBase.Aggregator): Gst.FlowReturn
    vfunc_skip_buffer(aggregator: GstBase.Aggregator, buffer: Gst.Buffer): boolean
    /* Virtual methods of Gst-1.0.Gst.Pad */
    vfunc_linked(peer: Gst.Pad): void
    vfunc_unlinked(peer: Gst.Pad): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GstBase-1.0.GstBase.AggregatorPad */
    connect(sigName: "buffer-consumed", callback: (($obj: VideoAggregatorParallelConvertPad, object: Gst.Buffer) => void)): number
    connect_after(sigName: "buffer-consumed", callback: (($obj: VideoAggregatorParallelConvertPad, object: Gst.Buffer) => void)): number
    emit(sigName: "buffer-consumed", object: Gst.Buffer): void
    /* Signals of Gst-1.0.Gst.Pad */
    connect(sigName: "linked", callback: (($obj: VideoAggregatorParallelConvertPad, peer: Gst.Pad) => void)): number
    connect_after(sigName: "linked", callback: (($obj: VideoAggregatorParallelConvertPad, peer: Gst.Pad) => void)): number
    emit(sigName: "linked", peer: Gst.Pad): void
    connect(sigName: "unlinked", callback: (($obj: VideoAggregatorParallelConvertPad, peer: Gst.Pad) => void)): number
    connect_after(sigName: "unlinked", callback: (($obj: VideoAggregatorParallelConvertPad, peer: Gst.Pad) => void)): number
    emit(sigName: "unlinked", peer: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoAggregatorParallelConvertPad, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoAggregatorParallelConvertPad, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoAggregatorParallelConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoAggregatorParallelConvertPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::converter-config", callback: (($obj: VideoAggregatorParallelConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::converter-config", callback: (($obj: VideoAggregatorParallelConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-last-buffer-repeat", callback: (($obj: VideoAggregatorParallelConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-last-buffer-repeat", callback: (($obj: VideoAggregatorParallelConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::repeat-after-eos", callback: (($obj: VideoAggregatorParallelConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-after-eos", callback: (($obj: VideoAggregatorParallelConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::zorder", callback: (($obj: VideoAggregatorParallelConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zorder", callback: (($obj: VideoAggregatorParallelConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::emit-signals", callback: (($obj: VideoAggregatorParallelConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: VideoAggregatorParallelConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::caps", callback: (($obj: VideoAggregatorParallelConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: VideoAggregatorParallelConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offset", callback: (($obj: VideoAggregatorParallelConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: VideoAggregatorParallelConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::template", callback: (($obj: VideoAggregatorParallelConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: VideoAggregatorParallelConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoAggregatorParallelConvertPad_ConstructProps)
    _init (config?: VideoAggregatorParallelConvertPad_ConstructProps): void
    static $gtype: GObject.Type
}
interface VideoBufferPool_ConstructProps extends Gst.BufferPool_ConstructProps {
}
class VideoBufferPool {
    /* Fields of Gst-1.0.Gst.BufferPool */
    readonly object: Gst.Object
    readonly flushing: number
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.BufferPool */
    acquire_buffer(params?: Gst.BufferPoolAcquireParams | null): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    get_config(): Gst.Structure
    get_options(): string[]
    has_option(option: string): boolean
    is_active(): boolean
    release_buffer(buffer: Gst.Buffer): void
    set_active(active: boolean): boolean
    set_config(config: Gst.Structure): boolean
    set_flushing(flushing: boolean): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.BufferPool */
    vfunc_acquire_buffer(params?: Gst.BufferPoolAcquireParams | null): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    vfunc_alloc_buffer(params?: Gst.BufferPoolAcquireParams | null): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    vfunc_flush_start(): void
    vfunc_flush_stop(): void
    vfunc_free_buffer(buffer: Gst.Buffer): void
    vfunc_get_options(): string[]
    vfunc_release_buffer(buffer: Gst.Buffer): void
    vfunc_reset_buffer(buffer: Gst.Buffer): void
    vfunc_set_config(config: Gst.Structure): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoBufferPool, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoBufferPool, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoBufferPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoBufferPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoBufferPool_ConstructProps)
    _init (config?: VideoBufferPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VideoBufferPool
    static $gtype: GObject.Type
}
interface VideoDecoder_ConstructProps extends Gst.Element_ConstructProps {
    /* Constructor properties of GstVideo-1.0.GstVideo.VideoDecoder */
    automatic_request_sync_point_flags?: VideoDecoderRequestSyncPointFlags
    automatic_request_sync_points?: boolean
    discard_corrupted_frames?: boolean
    max_errors?: number
    min_force_key_unit_interval?: number
    qos?: boolean
}
class VideoDecoder {
    /* Properties of GstVideo-1.0.GstVideo.VideoDecoder */
    automatic_request_sync_point_flags: VideoDecoderRequestSyncPointFlags
    automatic_request_sync_points: boolean
    discard_corrupted_frames: boolean
    max_errors: number
    min_force_key_unit_interval: number
    qos: boolean
    /* Fields of Gst-1.0.Gst.Element */
    readonly object: Gst.Object
    readonly state_lock: GLib.RecMutex
    readonly state_cond: GLib.Cond
    readonly state_cookie: number
    readonly target_state: Gst.State
    readonly current_state: Gst.State
    readonly next_state: Gst.State
    readonly pending_state: Gst.State
    readonly last_return: Gst.StateChangeReturn
    readonly bus: Gst.Bus
    readonly clock: Gst.Clock
    readonly base_time: Gst.ClockTimeDiff
    readonly start_time: Gst.ClockTime
    readonly numpads: number
    readonly pads: Gst.Pad[]
    readonly numsrcpads: number
    readonly srcpads: Gst.Pad[]
    readonly numsinkpads: number
    readonly sinkpads: Gst.Pad[]
    readonly pads_cookie: number
    readonly contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstVideo-1.0.GstVideo.VideoDecoder */
    add_to_frame(n_bytes: number): void
    allocate_output_buffer(): Gst.Buffer
    allocate_output_frame(frame: VideoCodecFrame): Gst.FlowReturn
    allocate_output_frame_with_params(frame: VideoCodecFrame, params: Gst.BufferPoolAcquireParams): Gst.FlowReturn
    drop_frame(frame: VideoCodecFrame): Gst.FlowReturn
    drop_subframe(frame: VideoCodecFrame): Gst.FlowReturn
    finish_frame(frame: VideoCodecFrame): Gst.FlowReturn
    finish_subframe(frame: VideoCodecFrame): Gst.FlowReturn
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_buffer_pool(): Gst.BufferPool
    get_estimate_rate(): number
    get_frame(frame_number: number): VideoCodecFrame
    get_frames(): VideoCodecFrame[]
    get_input_subframe_index(frame: VideoCodecFrame): number
    get_latency(): [ /* min_latency */ Gst.ClockTime | null, /* max_latency */ Gst.ClockTime | null ]
    get_max_decode_time(frame: VideoCodecFrame): Gst.ClockTimeDiff
    get_max_errors(): number
    get_needs_format(): boolean
    get_needs_sync_point(): boolean
    get_oldest_frame(): VideoCodecFrame
    get_output_state(): VideoCodecState
    get_packetized(): boolean
    get_pending_frame_size(): number
    get_processed_subframe_index(frame: VideoCodecFrame): number
    get_qos_proportion(): number
    get_subframe_mode(): boolean
    have_frame(): Gst.FlowReturn
    have_last_subframe(frame: VideoCodecFrame): Gst.FlowReturn
    merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    negotiate(): boolean
    proxy_getcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    release_frame(frame: VideoCodecFrame): void
    request_sync_point(frame: VideoCodecFrame, flags: VideoDecoderRequestSyncPointFlags): void
    set_estimate_rate(enabled: boolean): void
    set_interlaced_output_state(fmt: VideoFormat, interlace_mode: VideoInterlaceMode, width: number, height: number, reference?: VideoCodecState | null): VideoCodecState
    set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void
    set_max_errors(num: number): void
    set_needs_format(enabled: boolean): void
    set_needs_sync_point(enabled: boolean): void
    set_output_state(fmt: VideoFormat, width: number, height: number, reference?: VideoCodecState | null): VideoCodecState
    set_packetized(packetized: boolean): void
    set_subframe_mode(subframe_mode: boolean): void
    set_use_default_pad_acceptcaps(use: boolean): void
    /* Methods of Gst-1.0.Gst.Element */
    abort_state(): void
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: Gst.ElementCallAsyncFunc): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    get_base_time(): Gst.ClockTime
    get_bus(): Gst.Bus | null
    get_clock(): Gst.Clock | null
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    get_context(context_type: string): Gst.Context | null
    get_context_unlocked(context_type: string): Gst.Context | null
    get_contexts(): Gst.Context[]
    get_current_clock_time(): Gst.ClockTime
    get_current_running_time(): Gst.ClockTime
    get_factory(): Gst.ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): Gst.PadTemplate | null
    get_pad_template_list(): Gst.PadTemplate[]
    get_request_pad(name: string): Gst.Pad | null
    get_start_time(): Gst.ClockTime
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    get_static_pad(name: string): Gst.Pad | null
    is_locked_state(): boolean
    iterate_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lost_state(): void
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    no_more_pads(): void
    post_message(message: Gst.Message): boolean
    provide_clock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Gst.Pad): void
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    request_pad_simple(name: string): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    send_event(event: Gst.Event): boolean
    set_base_time(time: Gst.ClockTime): void
    set_bus(bus?: Gst.Bus | null): void
    set_clock(clock?: Gst.Clock | null): boolean
    set_context(context: Gst.Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: Gst.ClockTime): void
    set_state(state: Gst.State): Gst.StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Gst.Element): void
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GstVideo-1.0.GstVideo.VideoDecoder */
    vfunc_close(): boolean
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_drain(): Gst.FlowReturn
    vfunc_finish(): Gst.FlowReturn
    vfunc_flush(): boolean
    vfunc_getcaps(filter: Gst.Caps): Gst.Caps
    vfunc_handle_frame(frame: VideoCodecFrame): Gst.FlowReturn
    vfunc_handle_missing_data(timestamp: Gst.ClockTime, duration: Gst.ClockTime): boolean
    vfunc_negotiate(): boolean
    vfunc_open(): boolean
    vfunc_parse(frame: VideoCodecFrame, adapter: GstBase.Adapter, at_eos: boolean): Gst.FlowReturn
    vfunc_propose_allocation(query: Gst.Query): boolean
    vfunc_reset(hard: boolean): boolean
    vfunc_set_format(state: VideoCodecState): boolean
    vfunc_sink_event(event: Gst.Event): boolean
    vfunc_sink_query(query: Gst.Query): boolean
    vfunc_src_event(event: Gst.Event): boolean
    vfunc_src_query(query: Gst.Query): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_transform_meta(frame: VideoCodecFrame, meta: Gst.Meta): boolean
    /* Virtual methods of Gst-1.0.Gst.Element */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    vfunc_post_message(message: Gst.Message): boolean
    vfunc_provide_clock(): Gst.Clock | null
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_set_bus(bus?: Gst.Bus | null): void
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    vfunc_set_context(context: Gst.Context): void
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: VideoDecoder) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: VideoDecoder) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: VideoDecoder, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: VideoDecoder, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: VideoDecoder, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: VideoDecoder, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoDecoder, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoDecoder, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::automatic-request-sync-point-flags", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-point-flags", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::automatic-request-sync-points", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-points", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::discard-corrupted-frames", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard-corrupted-frames", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-errors", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-force-key-unit-interval", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: VideoDecoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoDecoder_ConstructProps)
    _init (config?: VideoDecoder_ConstructProps): void
    static $gtype: GObject.Type
}
interface VideoEncoder_ConstructProps extends Gst.Element_ConstructProps {
    /* Constructor properties of GstVideo-1.0.GstVideo.VideoEncoder */
    min_force_key_unit_interval?: number
    qos?: boolean
}
class VideoEncoder {
    /* Properties of GstVideo-1.0.GstVideo.VideoEncoder */
    min_force_key_unit_interval: number
    qos: boolean
    /* Fields of Gst-1.0.Gst.Element */
    readonly object: Gst.Object
    readonly state_lock: GLib.RecMutex
    readonly state_cond: GLib.Cond
    readonly state_cookie: number
    readonly target_state: Gst.State
    readonly current_state: Gst.State
    readonly next_state: Gst.State
    readonly pending_state: Gst.State
    readonly last_return: Gst.StateChangeReturn
    readonly bus: Gst.Bus
    readonly clock: Gst.Clock
    readonly base_time: Gst.ClockTimeDiff
    readonly start_time: Gst.ClockTime
    readonly numpads: number
    readonly pads: Gst.Pad[]
    readonly numsrcpads: number
    readonly srcpads: Gst.Pad[]
    readonly numsinkpads: number
    readonly sinkpads: Gst.Pad[]
    readonly pads_cookie: number
    readonly contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstVideo-1.0.GstVideo.VideoEncoder */
    allocate_output_buffer(size: number): Gst.Buffer
    allocate_output_frame(frame: VideoCodecFrame, size: number): Gst.FlowReturn
    finish_frame(frame: VideoCodecFrame): Gst.FlowReturn
    finish_subframe(frame: VideoCodecFrame): Gst.FlowReturn
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_frame(frame_number: number): VideoCodecFrame
    get_frames(): VideoCodecFrame[]
    get_latency(): [ /* min_latency */ Gst.ClockTime | null, /* max_latency */ Gst.ClockTime | null ]
    get_max_encode_time(frame: VideoCodecFrame): Gst.ClockTimeDiff
    get_min_force_key_unit_interval(): Gst.ClockTime
    get_oldest_frame(): VideoCodecFrame
    get_output_state(): VideoCodecState
    is_qos_enabled(): boolean
    merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    negotiate(): boolean
    proxy_getcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    set_headers(headers: Gst.Buffer[]): void
    set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void
    set_min_force_key_unit_interval(interval: Gst.ClockTime): void
    set_min_pts(min_pts: Gst.ClockTime): void
    set_output_state(caps: Gst.Caps, reference?: VideoCodecState | null): VideoCodecState
    set_qos_enabled(enabled: boolean): void
    /* Methods of Gst-1.0.Gst.Element */
    abort_state(): void
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: Gst.ElementCallAsyncFunc): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    get_base_time(): Gst.ClockTime
    get_bus(): Gst.Bus | null
    get_clock(): Gst.Clock | null
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    get_context(context_type: string): Gst.Context | null
    get_context_unlocked(context_type: string): Gst.Context | null
    get_contexts(): Gst.Context[]
    get_current_clock_time(): Gst.ClockTime
    get_current_running_time(): Gst.ClockTime
    get_factory(): Gst.ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): Gst.PadTemplate | null
    get_pad_template_list(): Gst.PadTemplate[]
    get_request_pad(name: string): Gst.Pad | null
    get_start_time(): Gst.ClockTime
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    get_static_pad(name: string): Gst.Pad | null
    is_locked_state(): boolean
    iterate_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lost_state(): void
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    no_more_pads(): void
    post_message(message: Gst.Message): boolean
    provide_clock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Gst.Pad): void
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    request_pad_simple(name: string): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    send_event(event: Gst.Event): boolean
    set_base_time(time: Gst.ClockTime): void
    set_bus(bus?: Gst.Bus | null): void
    set_clock(clock?: Gst.Clock | null): boolean
    set_context(context: Gst.Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: Gst.ClockTime): void
    set_state(state: Gst.State): Gst.StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Gst.Element): void
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Methods of Gst-1.0.Gst.Preset */
    delete_preset(name: string): boolean
    get_meta(name: string, tag: string): [ /* returnType */ boolean, /* value */ string ]
    get_preset_names(): string[]
    get_property_names(): string[]
    is_editable(): boolean
    load_preset(name: string): boolean
    rename_preset(old_name: string, new_name: string): boolean
    save_preset(name: string): boolean
    set_meta(name: string, tag: string, value?: string | null): boolean
    /* Virtual methods of GstVideo-1.0.GstVideo.VideoEncoder */
    vfunc_close(): boolean
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_finish(): Gst.FlowReturn
    vfunc_flush(): boolean
    vfunc_getcaps(filter: Gst.Caps): Gst.Caps
    vfunc_handle_frame(frame: VideoCodecFrame): Gst.FlowReturn
    vfunc_negotiate(): boolean
    vfunc_open(): boolean
    vfunc_pre_push(frame: VideoCodecFrame): Gst.FlowReturn
    vfunc_propose_allocation(query: Gst.Query): boolean
    vfunc_reset(hard: boolean): boolean
    vfunc_set_format(state: VideoCodecState): boolean
    vfunc_sink_event(event: Gst.Event): boolean
    vfunc_sink_query(query: Gst.Query): boolean
    vfunc_src_event(event: Gst.Event): boolean
    vfunc_src_query(query: Gst.Query): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_transform_meta(frame: VideoCodecFrame, meta: Gst.Meta): boolean
    vfunc_delete_preset(name: string): boolean
    vfunc_get_meta(name: string, tag: string): [ /* returnType */ boolean, /* value */ string ]
    vfunc_get_preset_names(): string[]
    vfunc_get_property_names(): string[]
    vfunc_load_preset(name: string): boolean
    vfunc_rename_preset(old_name: string, new_name: string): boolean
    vfunc_save_preset(name: string): boolean
    vfunc_set_meta(name: string, tag: string, value?: string | null): boolean
    /* Virtual methods of Gst-1.0.Gst.Element */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    vfunc_post_message(message: Gst.Message): boolean
    vfunc_provide_clock(): Gst.Clock | null
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_set_bus(bus?: Gst.Bus | null): void
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    vfunc_set_context(context: Gst.Context): void
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: VideoEncoder) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: VideoEncoder) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: VideoEncoder, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: VideoEncoder, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: VideoEncoder, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: VideoEncoder, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoEncoder, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoEncoder, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoEncoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::min-force-key-unit-interval", callback: (($obj: VideoEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: (($obj: VideoEncoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos", callback: (($obj: VideoEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: VideoEncoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoEncoder_ConstructProps)
    _init (config?: VideoEncoder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_app_dir(): string | null
    static set_app_dir(app_dir: string): boolean
    static $gtype: GObject.Type
}
interface VideoFilter_ConstructProps extends GstBase.BaseTransform_ConstructProps {
}
class VideoFilter {
    /* Properties of GstBase-1.0.GstBase.BaseTransform */
    qos: boolean
    /* Fields of GstBase-1.0.GstBase.BaseTransform */
    readonly element: Gst.Element
    readonly sinkpad: Gst.Pad
    readonly srcpad: Gst.Pad
    readonly have_segment: boolean
    readonly segment: Gst.Segment
    readonly queued_buf: Gst.Buffer
    /* Fields of Gst-1.0.Gst.Element */
    readonly object: Gst.Object
    readonly state_lock: GLib.RecMutex
    readonly state_cond: GLib.Cond
    readonly state_cookie: number
    readonly target_state: Gst.State
    readonly current_state: Gst.State
    readonly next_state: Gst.State
    readonly pending_state: Gst.State
    readonly last_return: Gst.StateChangeReturn
    readonly bus: Gst.Bus
    readonly clock: Gst.Clock
    readonly base_time: Gst.ClockTimeDiff
    readonly start_time: Gst.ClockTime
    readonly numpads: number
    readonly pads: Gst.Pad[]
    readonly numsrcpads: number
    readonly srcpads: Gst.Pad[]
    readonly numsinkpads: number
    readonly sinkpads: Gst.Pad[]
    readonly pads_cookie: number
    readonly contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstBase-1.0.GstBase.BaseTransform */
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_buffer_pool(): Gst.BufferPool | null
    is_in_place(): boolean
    is_passthrough(): boolean
    is_qos_enabled(): boolean
    reconfigure(): boolean
    reconfigure_sink(): void
    reconfigure_src(): void
    set_gap_aware(gap_aware: boolean): void
    set_in_place(in_place: boolean): void
    set_passthrough(passthrough: boolean): void
    set_prefer_passthrough(prefer_passthrough: boolean): void
    set_qos_enabled(enabled: boolean): void
    update_qos(proportion: number, diff: Gst.ClockTimeDiff, timestamp: Gst.ClockTime): void
    update_src_caps(updated_caps: Gst.Caps): boolean
    /* Methods of Gst-1.0.Gst.Element */
    abort_state(): void
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: Gst.ElementCallAsyncFunc): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    get_base_time(): Gst.ClockTime
    get_bus(): Gst.Bus | null
    get_clock(): Gst.Clock | null
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    get_context(context_type: string): Gst.Context | null
    get_context_unlocked(context_type: string): Gst.Context | null
    get_contexts(): Gst.Context[]
    get_current_clock_time(): Gst.ClockTime
    get_current_running_time(): Gst.ClockTime
    get_factory(): Gst.ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): Gst.PadTemplate | null
    get_pad_template_list(): Gst.PadTemplate[]
    get_request_pad(name: string): Gst.Pad | null
    get_start_time(): Gst.ClockTime
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    get_static_pad(name: string): Gst.Pad | null
    is_locked_state(): boolean
    iterate_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lost_state(): void
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    no_more_pads(): void
    post_message(message: Gst.Message): boolean
    provide_clock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Gst.Pad): void
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    request_pad_simple(name: string): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    send_event(event: Gst.Event): boolean
    set_base_time(time: Gst.ClockTime): void
    set_bus(bus?: Gst.Bus | null): void
    set_clock(clock?: Gst.Clock | null): boolean
    set_context(context: Gst.Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: Gst.ClockTime): void
    set_state(state: Gst.State): Gst.StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Gst.Element): void
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GstVideo-1.0.GstVideo.VideoFilter */
    vfunc_set_info(incaps: Gst.Caps, in_info: VideoInfo, outcaps: Gst.Caps, out_info: VideoInfo): boolean
    vfunc_transform_frame(inframe: VideoFrame, outframe: VideoFrame): Gst.FlowReturn
    vfunc_transform_frame_ip(frame: VideoFrame): Gst.FlowReturn
    vfunc_query(direction: Gst.PadDirection, query: Gst.Query): boolean
    /* Function overloads */
    vfunc_query(query: Gst.Query): boolean
    /* Virtual methods of GstBase-1.0.GstBase.BaseTransform */
    vfunc_accept_caps(direction: Gst.PadDirection, caps: Gst.Caps): boolean
    vfunc_before_transform(buffer: Gst.Buffer): void
    vfunc_copy_metadata(input: Gst.Buffer, outbuf: Gst.Buffer): boolean
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_filter_meta(query: Gst.Query, api: GObject.Type, params: Gst.Structure): boolean
    vfunc_fixate_caps(direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps): Gst.Caps
    vfunc_generate_output(): [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer ]
    vfunc_get_unit_size(caps: Gst.Caps): [ /* returnType */ boolean, /* size */ number ]
    vfunc_prepare_output_buffer(input: Gst.Buffer): [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer ]
    vfunc_propose_allocation(decide_query: Gst.Query, query: Gst.Query): boolean
    vfunc_query(direction: Gst.PadDirection, query: Gst.Query): boolean
    /* Function overloads */
    vfunc_query(query: Gst.Query): boolean
    vfunc_set_caps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean
    vfunc_sink_event(event: Gst.Event): boolean
    vfunc_src_event(event: Gst.Event): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_submit_input_buffer(is_discont: boolean, input: Gst.Buffer): Gst.FlowReturn
    vfunc_transform(inbuf: Gst.Buffer, outbuf: Gst.Buffer): Gst.FlowReturn
    vfunc_transform_caps(direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps
    vfunc_transform_ip(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_transform_meta(outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer): boolean
    vfunc_transform_size(direction: Gst.PadDirection, caps: Gst.Caps, size: number, othercaps: Gst.Caps): [ /* returnType */ boolean, /* othersize */ number ]
    /* Virtual methods of Gst-1.0.Gst.Element */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    vfunc_post_message(message: Gst.Message): boolean
    vfunc_provide_clock(): Gst.Clock | null
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_set_bus(bus?: Gst.Bus | null): void
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    vfunc_set_context(context: Gst.Context): void
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: VideoFilter) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: VideoFilter) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: VideoFilter, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: VideoFilter, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: VideoFilter, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: VideoFilter, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoFilter, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoFilter, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::qos", callback: (($obj: VideoFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: VideoFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoFilter_ConstructProps)
    _init (config?: VideoFilter_ConstructProps): void
    static $gtype: GObject.Type
}
class VideoMultiviewFlagsSet {
    static name: string
}
interface VideoSink_ConstructProps extends GstBase.BaseSink_ConstructProps {
    /* Constructor properties of GstVideo-1.0.GstVideo.VideoSink */
    show_preroll_frame?: boolean
}
class VideoSink {
    /* Properties of GstVideo-1.0.GstVideo.VideoSink */
    show_preroll_frame: boolean
    /* Properties of GstBase-1.0.GstBase.BaseSink */
    async: boolean
    blocksize: number
    enable_last_sample: boolean
    readonly last_sample: Gst.Sample
    max_bitrate: number
    max_lateness: number
    processing_deadline: number
    qos: boolean
    render_delay: number
    readonly stats: Gst.Structure
    sync: boolean
    throttle_time: number
    ts_offset: number
    /* Fields of GstBase-1.0.GstBase.BaseSink */
    readonly element: Gst.Element
    readonly sinkpad: Gst.Pad
    readonly pad_mode: Gst.PadMode
    readonly offset: number
    readonly can_activate_pull: boolean
    readonly can_activate_push: boolean
    readonly preroll_lock: GLib.Mutex
    readonly preroll_cond: GLib.Cond
    readonly eos: boolean
    readonly need_preroll: boolean
    readonly have_preroll: boolean
    readonly playing_async: boolean
    readonly have_newsegment: boolean
    readonly segment: Gst.Segment
    /* Fields of Gst-1.0.Gst.Element */
    readonly object: Gst.Object
    readonly state_lock: GLib.RecMutex
    readonly state_cond: GLib.Cond
    readonly state_cookie: number
    readonly target_state: Gst.State
    readonly current_state: Gst.State
    readonly next_state: Gst.State
    readonly pending_state: Gst.State
    readonly last_return: Gst.StateChangeReturn
    readonly bus: Gst.Bus
    readonly clock: Gst.Clock
    readonly base_time: Gst.ClockTimeDiff
    readonly start_time: Gst.ClockTime
    readonly numpads: number
    readonly pads: Gst.Pad[]
    readonly numsrcpads: number
    readonly srcpads: Gst.Pad[]
    readonly numsinkpads: number
    readonly sinkpads: Gst.Pad[]
    readonly pads_cookie: number
    readonly contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstBase-1.0.GstBase.BaseSink */
    do_preroll(obj: Gst.MiniObject): Gst.FlowReturn
    get_blocksize(): number
    get_drop_out_of_segment(): boolean
    get_last_sample(): Gst.Sample | null
    get_latency(): Gst.ClockTime
    get_max_bitrate(): number
    get_max_lateness(): number
    get_processing_deadline(): Gst.ClockTime
    get_render_delay(): Gst.ClockTime
    get_stats(): Gst.Structure
    get_sync(): boolean
    get_throttle_time(): number
    get_ts_offset(): Gst.ClockTimeDiff
    is_async_enabled(): boolean
    is_last_sample_enabled(): boolean
    is_qos_enabled(): boolean
    query_latency(): [ /* returnType */ boolean, /* live */ boolean | null, /* upstream_live */ boolean | null, /* min_latency */ Gst.ClockTime | null, /* max_latency */ Gst.ClockTime | null ]
    set_async_enabled(enabled: boolean): void
    set_blocksize(blocksize: number): void
    set_drop_out_of_segment(drop_out_of_segment: boolean): void
    set_last_sample_enabled(enabled: boolean): void
    set_max_bitrate(max_bitrate: number): void
    set_max_lateness(max_lateness: number): void
    set_processing_deadline(processing_deadline: Gst.ClockTime): void
    set_qos_enabled(enabled: boolean): void
    set_render_delay(delay: Gst.ClockTime): void
    set_sync(sync: boolean): void
    set_throttle_time(throttle: number): void
    set_ts_offset(offset: Gst.ClockTimeDiff): void
    wait(time: Gst.ClockTime): [ /* returnType */ Gst.FlowReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    wait_clock(time: Gst.ClockTime): [ /* returnType */ Gst.ClockReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    wait_preroll(): Gst.FlowReturn
    /* Methods of Gst-1.0.Gst.Element */
    abort_state(): void
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: Gst.ElementCallAsyncFunc): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    get_base_time(): Gst.ClockTime
    get_bus(): Gst.Bus | null
    get_clock(): Gst.Clock | null
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    get_context(context_type: string): Gst.Context | null
    get_context_unlocked(context_type: string): Gst.Context | null
    get_contexts(): Gst.Context[]
    get_current_clock_time(): Gst.ClockTime
    get_current_running_time(): Gst.ClockTime
    get_factory(): Gst.ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): Gst.PadTemplate | null
    get_pad_template_list(): Gst.PadTemplate[]
    get_request_pad(name: string): Gst.Pad | null
    get_start_time(): Gst.ClockTime
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    get_static_pad(name: string): Gst.Pad | null
    is_locked_state(): boolean
    iterate_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lost_state(): void
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    no_more_pads(): void
    post_message(message: Gst.Message): boolean
    provide_clock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Gst.Pad): void
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    request_pad_simple(name: string): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    send_event(event: Gst.Event): boolean
    set_base_time(time: Gst.ClockTime): void
    set_bus(bus?: Gst.Bus | null): void
    set_clock(clock?: Gst.Clock | null): boolean
    set_context(context: Gst.Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: Gst.ClockTime): void
    set_state(state: Gst.State): Gst.StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Gst.Element): void
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GstVideo-1.0.GstVideo.VideoSink */
    vfunc_set_info(caps: Gst.Caps, info: VideoInfo): boolean
    vfunc_show_frame(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_query(query: Gst.Query): boolean
    /* Function overloads */
    vfunc_query(query: Gst.Query): boolean
    /* Virtual methods of GstBase-1.0.GstBase.BaseSink */
    vfunc_activate_pull(active: boolean): boolean
    vfunc_event(event: Gst.Event): boolean
    vfunc_fixate(caps: Gst.Caps): Gst.Caps
    vfunc_get_caps(filter: Gst.Caps): Gst.Caps
    vfunc_get_times(buffer: Gst.Buffer, start: Gst.ClockTime, end: Gst.ClockTime): void
    vfunc_prepare(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_prepare_list(buffer_list: Gst.BufferList): Gst.FlowReturn
    vfunc_preroll(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_propose_allocation(query: Gst.Query): boolean
    vfunc_query(query: Gst.Query): boolean
    /* Function overloads */
    vfunc_query(query: Gst.Query): boolean
    vfunc_render(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_render_list(buffer_list: Gst.BufferList): Gst.FlowReturn
    vfunc_set_caps(caps: Gst.Caps): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_unlock(): boolean
    vfunc_unlock_stop(): boolean
    vfunc_wait_event(event: Gst.Event): Gst.FlowReturn
    /* Virtual methods of Gst-1.0.Gst.Element */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    vfunc_post_message(message: Gst.Message): boolean
    vfunc_provide_clock(): Gst.Clock | null
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_set_bus(bus?: Gst.Bus | null): void
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    vfunc_set_context(context: Gst.Context): void
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: VideoSink) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: VideoSink) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: VideoSink, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: VideoSink, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: VideoSink, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: VideoSink, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoSink, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoSink, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::show-preroll-frame", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-preroll-frame", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::async", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::blocksize", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-bitrate", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bitrate", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-lateness", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::processing-deadline", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-deadline", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::render-delay", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stats", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sync", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::throttle-time", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle-time", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ts-offset", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoSink_ConstructProps)
    _init (config?: VideoSink_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static center_rect(src: VideoRectangle, dst: VideoRectangle, scaling: boolean): /* result */ VideoRectangle
    static $gtype: GObject.Type
}
abstract class ColorBalanceChannelClass {
    /* Fields of GstVideo-1.0.GstVideo.ColorBalanceChannelClass */
    readonly parent: GObject.ObjectClass
    readonly value_changed: (channel: ColorBalanceChannel, value: number) => void
    static name: string
}
abstract class ColorBalanceInterface {
    /* Fields of GstVideo-1.0.GstVideo.ColorBalanceInterface */
    readonly iface: GObject.TypeInterface
    readonly list_channels: (balance: ColorBalance) => ColorBalanceChannel[]
    readonly set_value: (balance: ColorBalance, channel: ColorBalanceChannel, value: number) => void
    readonly get_value: (balance: ColorBalance, channel: ColorBalanceChannel) => number
    readonly get_balance_type: (balance: ColorBalance) => ColorBalanceType
    readonly value_changed: (balance: ColorBalance, channel: ColorBalanceChannel, value: number) => void
    static name: string
}
abstract class NavigationInterface {
    /* Fields of GstVideo-1.0.GstVideo.NavigationInterface */
    readonly iface: GObject.TypeInterface
    readonly send_event: (navigation: Navigation, structure: Gst.Structure) => void
    static name: string
}
class VideoAFDMeta {
    /* Fields of GstVideo-1.0.GstVideo.VideoAFDMeta */
    readonly meta: Gst.Meta
    readonly field: number
    readonly spec: VideoAFDSpec
    readonly afd: VideoAFDValue
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
class VideoAffineTransformationMeta {
    /* Fields of GstVideo-1.0.GstVideo.VideoAffineTransformationMeta */
    readonly meta: Gst.Meta
    readonly matrix: number[]
    /* Methods of GstVideo-1.0.GstVideo.VideoAffineTransformationMeta */
    apply_matrix(matrix: number[]): void
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
abstract class VideoAggregatorClass {
    /* Fields of GstVideo-1.0.GstVideo.VideoAggregatorClass */
    readonly update_caps: (videoaggregator: VideoAggregator, caps: Gst.Caps) => Gst.Caps
    readonly aggregate_frames: (videoaggregator: VideoAggregator, outbuffer: Gst.Buffer) => Gst.FlowReturn
    readonly create_output_buffer: (videoaggregator: VideoAggregator, outbuffer: Gst.Buffer) => Gst.FlowReturn
    readonly find_best_format: (vagg: VideoAggregator, downstream_caps: Gst.Caps, best_info: VideoInfo, at_least_one_alpha: boolean) => void
    static name: string
}
abstract class VideoAggregatorConvertPadClass {
    /* Fields of GstVideo-1.0.GstVideo.VideoAggregatorConvertPadClass */
    readonly parent_class: VideoAggregatorPadClass
    readonly create_conversion_info: (pad: VideoAggregatorConvertPad, agg: VideoAggregator, conversion_info: VideoInfo) => void
    static name: string
}
class VideoAggregatorConvertPadPrivate {
    static name: string
}
abstract class VideoAggregatorPadClass {
    /* Fields of GstVideo-1.0.GstVideo.VideoAggregatorPadClass */
    readonly parent_class: GstBase.AggregatorPadClass
    readonly update_conversion_info: (pad: VideoAggregatorPad) => void
    readonly prepare_frame: (pad: VideoAggregatorPad, videoaggregator: VideoAggregator, buffer: Gst.Buffer, prepared_frame: VideoFrame) => boolean
    readonly clean_frame: (pad: VideoAggregatorPad, videoaggregator: VideoAggregator, prepared_frame: VideoFrame) => void
    readonly prepare_frame_start: (pad: VideoAggregatorPad, videoaggregator: VideoAggregator, buffer: Gst.Buffer, prepared_frame: VideoFrame) => void
    readonly prepare_frame_finish: (pad: VideoAggregatorPad, videoaggregator: VideoAggregator, prepared_frame: VideoFrame) => void
    readonly _gst_reserved: object[]
    static name: string
}
class VideoAggregatorPadPrivate {
    static name: string
}
abstract class VideoAggregatorParallelConvertPadClass {
    /* Fields of GstVideo-1.0.GstVideo.VideoAggregatorParallelConvertPadClass */
    readonly parent_class: VideoAggregatorConvertPadClass
    static name: string
}
class VideoAggregatorPrivate {
    static name: string
}
class VideoAlignment {
    /* Fields of GstVideo-1.0.GstVideo.VideoAlignment */
    readonly padding_top: number
    readonly padding_bottom: number
    readonly padding_left: number
    readonly padding_right: number
    readonly stride_align: number[]
    /* Methods of GstVideo-1.0.GstVideo.VideoAlignment */
    reset(): void
    static name: string
}
class VideoAncillary {
    /* Fields of GstVideo-1.0.GstVideo.VideoAncillary */
    readonly DID: number
    readonly SDID_block_number: number
    readonly data_count: number
    readonly data: Uint8Array
    static name: string
}
class VideoBarMeta {
    /* Fields of GstVideo-1.0.GstVideo.VideoBarMeta */
    readonly meta: Gst.Meta
    readonly field: number
    readonly is_letterbox: boolean
    readonly bar_data1: number
    readonly bar_data2: number
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
abstract class VideoBufferPoolClass {
    /* Fields of GstVideo-1.0.GstVideo.VideoBufferPoolClass */
    readonly parent_class: Gst.BufferPoolClass
    static name: string
}
class VideoBufferPoolPrivate {
    static name: string
}
class VideoCaptionMeta {
    /* Fields of GstVideo-1.0.GstVideo.VideoCaptionMeta */
    readonly meta: Gst.Meta
    readonly caption_type: VideoCaptionType
    readonly data: Uint8Array
    readonly size: number
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
class VideoChromaResample {
    /* Methods of GstVideo-1.0.GstVideo.VideoChromaResample */
    free(): void
    get_info(n_lines: number, offset: number): void
    static name: string
}
class VideoCodecAlphaMeta {
    /* Fields of GstVideo-1.0.GstVideo.VideoCodecAlphaMeta */
    readonly meta: Gst.Meta
    readonly buffer: Gst.Buffer
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
class VideoCodecFrame {
    /* Fields of GstVideo-1.0.GstVideo.VideoCodecFrame */
    readonly system_frame_number: number
    readonly dts: Gst.ClockTime
    readonly pts: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly distance_from_sync: number
    readonly input_buffer: Gst.Buffer
    readonly output_buffer: Gst.Buffer
    readonly deadline: Gst.ClockTime
    /* Methods of GstVideo-1.0.GstVideo.VideoCodecFrame */
    get_user_data(): object | null
    ref(): VideoCodecFrame
    set_user_data(notify: GLib.DestroyNotify): void
    unref(): void
    static name: string
}
class VideoCodecState {
    /* Fields of GstVideo-1.0.GstVideo.VideoCodecState */
    readonly info: VideoInfo
    readonly caps: Gst.Caps
    readonly codec_data: Gst.Buffer
    readonly allocation_caps: Gst.Caps
    readonly mastering_display_info: VideoMasteringDisplayInfo
    readonly content_light_level: VideoContentLightLevel
    /* Methods of GstVideo-1.0.GstVideo.VideoCodecState */
    ref(): VideoCodecState
    unref(): void
    static name: string
}
class VideoColorPrimariesInfo {
    /* Fields of GstVideo-1.0.GstVideo.VideoColorPrimariesInfo */
    readonly primaries: VideoColorPrimaries
    readonly Wx: number
    readonly Wy: number
    readonly Rx: number
    readonly Ry: number
    readonly Gx: number
    readonly Gy: number
    readonly Bx: number
    readonly By: number
    static name: string
}
class VideoColorimetry {
    /* Fields of GstVideo-1.0.GstVideo.VideoColorimetry */
    readonly range: VideoColorRange
    readonly matrix: VideoColorMatrix
    readonly transfer: VideoTransferFunction
    readonly primaries: VideoColorPrimaries
    /* Methods of GstVideo-1.0.GstVideo.VideoColorimetry */
    from_string(color: string): boolean
    is_equal(other: VideoColorimetry): boolean
    matches(color: string): boolean
    to_string(): string | null
    static name: string
}
class VideoContentLightLevel {
    /* Fields of GstVideo-1.0.GstVideo.VideoContentLightLevel */
    readonly max_content_light_level: number
    readonly max_frame_average_light_level: number
    /* Methods of GstVideo-1.0.GstVideo.VideoContentLightLevel */
    add_to_caps(caps: Gst.Caps): boolean
    from_caps(caps: Gst.Caps): boolean
    from_string(level: string): boolean
    init(): void
    is_equal(other: VideoContentLightLevel): boolean
    to_string(): string
    static name: string
}
class VideoConverter {
    /* Methods of GstVideo-1.0.GstVideo.VideoConverter */
    frame(src: VideoFrame, dest: VideoFrame): void
    frame_finish(): void
    free(): void
    get_config(): Gst.Structure
    set_config(config: Gst.Structure): boolean
    static name: string
}
class VideoCropMeta {
    /* Fields of GstVideo-1.0.GstVideo.VideoCropMeta */
    readonly meta: Gst.Meta
    readonly x: number
    readonly y: number
    readonly width: number
    readonly height: number
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
abstract class VideoDecoderClass {
    /* Fields of GstVideo-1.0.GstVideo.VideoDecoderClass */
    readonly open: (decoder: VideoDecoder) => boolean
    readonly close: (decoder: VideoDecoder) => boolean
    readonly start: (decoder: VideoDecoder) => boolean
    readonly stop: (decoder: VideoDecoder) => boolean
    readonly parse: (decoder: VideoDecoder, frame: VideoCodecFrame, adapter: GstBase.Adapter, at_eos: boolean) => Gst.FlowReturn
    readonly set_format: (decoder: VideoDecoder, state: VideoCodecState) => boolean
    readonly reset: (decoder: VideoDecoder, hard: boolean) => boolean
    readonly finish: (decoder: VideoDecoder) => Gst.FlowReturn
    readonly handle_frame: (decoder: VideoDecoder, frame: VideoCodecFrame) => Gst.FlowReturn
    readonly sink_event: (decoder: VideoDecoder, event: Gst.Event) => boolean
    readonly src_event: (decoder: VideoDecoder, event: Gst.Event) => boolean
    readonly negotiate: (decoder: VideoDecoder) => boolean
    readonly decide_allocation: (decoder: VideoDecoder, query: Gst.Query) => boolean
    readonly propose_allocation: (decoder: VideoDecoder, query: Gst.Query) => boolean
    readonly flush: (decoder: VideoDecoder) => boolean
    readonly sink_query: (decoder: VideoDecoder, query: Gst.Query) => boolean
    readonly src_query: (decoder: VideoDecoder, query: Gst.Query) => boolean
    readonly getcaps: (decoder: VideoDecoder, filter: Gst.Caps) => Gst.Caps
    readonly drain: (decoder: VideoDecoder) => Gst.FlowReturn
    readonly transform_meta: (decoder: VideoDecoder, frame: VideoCodecFrame, meta: Gst.Meta) => boolean
    readonly handle_missing_data: (decoder: VideoDecoder, timestamp: Gst.ClockTime, duration: Gst.ClockTime) => boolean
    static name: string
}
class VideoDecoderPrivate {
    static name: string
}
abstract class VideoDirectionInterface {
    /* Fields of GstVideo-1.0.GstVideo.VideoDirectionInterface */
    readonly iface: GObject.TypeInterface
    static name: string
}
class VideoDither {
    /* Methods of GstVideo-1.0.GstVideo.VideoDither */
    free(): void
    line(line: object | null, x: number, y: number, width: number): void
    static name: string
}
abstract class VideoEncoderClass {
    /* Fields of GstVideo-1.0.GstVideo.VideoEncoderClass */
    readonly open: (encoder: VideoEncoder) => boolean
    readonly close: (encoder: VideoEncoder) => boolean
    readonly start: (encoder: VideoEncoder) => boolean
    readonly stop: (encoder: VideoEncoder) => boolean
    readonly set_format: (encoder: VideoEncoder, state: VideoCodecState) => boolean
    readonly handle_frame: (encoder: VideoEncoder, frame: VideoCodecFrame) => Gst.FlowReturn
    readonly reset: (encoder: VideoEncoder, hard: boolean) => boolean
    readonly finish: (encoder: VideoEncoder) => Gst.FlowReturn
    readonly pre_push: (encoder: VideoEncoder, frame: VideoCodecFrame) => Gst.FlowReturn
    readonly getcaps: (enc: VideoEncoder, filter: Gst.Caps) => Gst.Caps
    readonly sink_event: (encoder: VideoEncoder, event: Gst.Event) => boolean
    readonly src_event: (encoder: VideoEncoder, event: Gst.Event) => boolean
    readonly negotiate: (encoder: VideoEncoder) => boolean
    readonly decide_allocation: (encoder: VideoEncoder, query: Gst.Query) => boolean
    readonly propose_allocation: (encoder: VideoEncoder, query: Gst.Query) => boolean
    readonly flush: (encoder: VideoEncoder) => boolean
    readonly sink_query: (encoder: VideoEncoder, query: Gst.Query) => boolean
    readonly src_query: (encoder: VideoEncoder, query: Gst.Query) => boolean
    readonly transform_meta: (encoder: VideoEncoder, frame: VideoCodecFrame, meta: Gst.Meta) => boolean
    static name: string
}
class VideoEncoderPrivate {
    static name: string
}
abstract class VideoFilterClass {
    /* Fields of GstVideo-1.0.GstVideo.VideoFilterClass */
    readonly parent_class: GstBase.BaseTransformClass
    readonly set_info: (filter: VideoFilter, incaps: Gst.Caps, in_info: VideoInfo, outcaps: Gst.Caps, out_info: VideoInfo) => boolean
    readonly transform_frame: (filter: VideoFilter, inframe: VideoFrame, outframe: VideoFrame) => Gst.FlowReturn
    readonly transform_frame_ip: (trans: VideoFilter, frame: VideoFrame) => Gst.FlowReturn
    static name: string
}
class VideoFormatInfo {
    /* Fields of GstVideo-1.0.GstVideo.VideoFormatInfo */
    readonly format: VideoFormat
    readonly name: string
    readonly description: string
    readonly flags: VideoFormatFlags
    readonly bits: number
    readonly n_components: number
    readonly shift: number[]
    readonly depth: number[]
    readonly pixel_stride: number[]
    readonly n_planes: number
    readonly plane: number[]
    readonly poffset: number[]
    readonly w_sub: number[]
    readonly h_sub: number[]
    readonly unpack_format: VideoFormat
    readonly unpack_func: VideoFormatUnpack
    readonly pack_lines: number
    readonly pack_func: VideoFormatPack
    readonly tile_mode: VideoTileMode
    readonly tile_ws: number
    readonly tile_hs: number
    /* Methods of GstVideo-1.0.GstVideo.VideoFormatInfo */
    component(plane: number): /* components */ number
    static name: string
}
class VideoFrame {
    /* Fields of GstVideo-1.0.GstVideo.VideoFrame */
    readonly info: VideoInfo
    readonly flags: VideoFrameFlags
    readonly buffer: Gst.Buffer
    readonly meta: object
    readonly id: number
    readonly data: object[]
    readonly map: Gst.MapInfo[]
    /* Methods of GstVideo-1.0.GstVideo.VideoFrame */
    copy(src: VideoFrame): boolean
    copy_plane(src: VideoFrame, plane: number): boolean
    unmap(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static map(info: VideoInfo, buffer: Gst.Buffer, flags: Gst.MapFlags): [ /* returnType */ boolean, /* frame */ VideoFrame ]
    static map_id(info: VideoInfo, buffer: Gst.Buffer, id: number, flags: Gst.MapFlags): [ /* returnType */ boolean, /* frame */ VideoFrame ]
}
class VideoGLTextureUploadMeta {
    /* Fields of GstVideo-1.0.GstVideo.VideoGLTextureUploadMeta */
    readonly meta: Gst.Meta
    readonly texture_orientation: VideoGLTextureOrientation
    readonly n_textures: number
    readonly texture_type: VideoGLTextureType[]
    /* Methods of GstVideo-1.0.GstVideo.VideoGLTextureUploadMeta */
    upload(texture_id: number): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
class VideoInfo {
    /* Fields of GstVideo-1.0.GstVideo.VideoInfo */
    readonly finfo: VideoFormatInfo
    readonly interlace_mode: VideoInterlaceMode
    readonly flags: VideoFlags
    readonly width: number
    readonly height: number
    readonly size: number
    readonly views: number
    readonly chroma_site: VideoChromaSite
    readonly colorimetry: VideoColorimetry
    readonly par_n: number
    readonly par_d: number
    readonly fps_n: number
    readonly fps_d: number
    readonly offset: number[]
    readonly stride: number[]
    /* Methods of GstVideo-1.0.GstVideo.VideoInfo */
    align(align: VideoAlignment): boolean
    align_full(align: VideoAlignment): [ /* returnType */ boolean, /* plane_size */ number | null ]
    convert(src_format: Gst.Format, src_value: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_value */ number ]
    copy(): VideoInfo
    free(): void
    is_equal(other: VideoInfo): boolean
    set_format(format: VideoFormat, width: number, height: number): boolean
    set_interlaced_format(format: VideoFormat, mode: VideoInterlaceMode, width: number, height: number): boolean
    to_caps(): Gst.Caps
    static name: string
    static new(): VideoInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): VideoInfo
    static from_caps(caps: Gst.Caps): [ /* returnType */ boolean, /* info */ VideoInfo ]
    static init(): /* info */ VideoInfo
}
class VideoMasteringDisplayInfo {
    /* Fields of GstVideo-1.0.GstVideo.VideoMasteringDisplayInfo */
    readonly display_primaries: VideoMasteringDisplayInfoCoordinates[]
    readonly white_point: VideoMasteringDisplayInfoCoordinates
    readonly max_display_mastering_luminance: number
    readonly min_display_mastering_luminance: number
    /* Methods of GstVideo-1.0.GstVideo.VideoMasteringDisplayInfo */
    add_to_caps(caps: Gst.Caps): boolean
    from_caps(caps: Gst.Caps): boolean
    init(): void
    is_equal(other: VideoMasteringDisplayInfo): boolean
    to_string(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static from_string(mastering: string): [ /* returnType */ boolean, /* minfo */ VideoMasteringDisplayInfo ]
}
class VideoMasteringDisplayInfoCoordinates {
    /* Fields of GstVideo-1.0.GstVideo.VideoMasteringDisplayInfoCoordinates */
    readonly x: number
    readonly y: number
    static name: string
}
class VideoMeta {
    /* Fields of GstVideo-1.0.GstVideo.VideoMeta */
    readonly meta: Gst.Meta
    readonly buffer: Gst.Buffer
    readonly flags: VideoFrameFlags
    readonly format: VideoFormat
    readonly id: number
    readonly width: number
    readonly height: number
    readonly n_planes: number
    readonly offset: number[]
    readonly stride: number[]
    readonly map: (meta: VideoMeta, plane: number, info: Gst.MapInfo, data: object, stride: number, flags: Gst.MapFlags) => boolean
    readonly unmap: (meta: VideoMeta, plane: number, info: Gst.MapInfo) => boolean
    readonly alignment: VideoAlignment
    /* Methods of GstVideo-1.0.GstVideo.VideoMeta */
    get_plane_height(): [ /* returnType */ boolean, /* plane_height */ number[] ]
    get_plane_size(): [ /* returnType */ boolean, /* plane_size */ number[] ]
    set_alignment(alignment: VideoAlignment): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
class VideoMetaTransform {
    /* Fields of GstVideo-1.0.GstVideo.VideoMetaTransform */
    readonly in_info: VideoInfo
    readonly out_info: VideoInfo
    static name: string
    /* Static methods and pseudo-constructors */
    static scale_get_quark(): GLib.Quark
}
abstract class VideoOrientationInterface {
    /* Fields of GstVideo-1.0.GstVideo.VideoOrientationInterface */
    readonly iface: GObject.TypeInterface
    readonly get_hflip: (video_orientation: VideoOrientation) => [ /* returnType */ boolean, /* flip */ boolean ]
    readonly get_vflip: (video_orientation: VideoOrientation) => [ /* returnType */ boolean, /* flip */ boolean ]
    readonly get_hcenter: (video_orientation: VideoOrientation) => [ /* returnType */ boolean, /* center */ number ]
    readonly get_vcenter: (video_orientation: VideoOrientation) => [ /* returnType */ boolean, /* center */ number ]
    readonly set_hflip: (video_orientation: VideoOrientation, flip: boolean) => boolean
    readonly set_vflip: (video_orientation: VideoOrientation, flip: boolean) => boolean
    readonly set_hcenter: (video_orientation: VideoOrientation, center: number) => boolean
    readonly set_vcenter: (video_orientation: VideoOrientation, center: number) => boolean
    static name: string
}
class VideoOverlayComposition {
    /* Methods of GstVideo-1.0.GstVideo.VideoOverlayComposition */
    add_rectangle(rectangle: VideoOverlayRectangle): void
    blend(video_buf: VideoFrame): boolean
    copy(): VideoOverlayComposition
    get_rectangle(n: number): VideoOverlayRectangle
    get_seqnum(): number
    make_writable(): VideoOverlayComposition
    n_rectangles(): number
    static name: string
    static new(rectangle?: VideoOverlayRectangle | null): VideoOverlayComposition
    constructor(rectangle?: VideoOverlayRectangle | null)
    /* Static methods and pseudo-constructors */
    static new(rectangle?: VideoOverlayRectangle | null): VideoOverlayComposition
}
class VideoOverlayCompositionMeta {
    /* Fields of GstVideo-1.0.GstVideo.VideoOverlayCompositionMeta */
    readonly meta: Gst.Meta
    readonly overlay: VideoOverlayComposition
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
abstract class VideoOverlayInterface {
    /* Fields of GstVideo-1.0.GstVideo.VideoOverlayInterface */
    readonly iface: GObject.TypeInterface
    readonly expose: (overlay: VideoOverlay) => void
    readonly handle_events: (overlay: VideoOverlay, handle_events: boolean) => void
    readonly set_render_rectangle: (overlay: VideoOverlay, x: number, y: number, width: number, height: number) => void
    readonly set_window_handle: (overlay: VideoOverlay, handle: number) => void
    static name: string
}
class VideoOverlayRectangle {
    /* Methods of GstVideo-1.0.GstVideo.VideoOverlayRectangle */
    copy(): VideoOverlayRectangle
    get_flags(): VideoOverlayFormatFlags
    get_global_alpha(): number
    get_pixels_argb(flags: VideoOverlayFormatFlags): Gst.Buffer
    get_pixels_ayuv(flags: VideoOverlayFormatFlags): Gst.Buffer
    get_pixels_raw(flags: VideoOverlayFormatFlags): Gst.Buffer
    get_pixels_unscaled_argb(flags: VideoOverlayFormatFlags): Gst.Buffer
    get_pixels_unscaled_ayuv(flags: VideoOverlayFormatFlags): Gst.Buffer
    get_pixels_unscaled_raw(flags: VideoOverlayFormatFlags): Gst.Buffer
    get_render_rectangle(): [ /* returnType */ boolean, /* render_x */ number | null, /* render_y */ number | null, /* render_width */ number | null, /* render_height */ number | null ]
    get_seqnum(): number
    set_global_alpha(global_alpha: number): void
    set_render_rectangle(render_x: number, render_y: number, render_width: number, render_height: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_raw(pixels: Gst.Buffer, render_x: number, render_y: number, render_width: number, render_height: number, flags: VideoOverlayFormatFlags): VideoOverlayRectangle
}
class VideoRectangle {
    /* Fields of GstVideo-1.0.GstVideo.VideoRectangle */
    readonly x: number
    readonly y: number
    readonly w: number
    readonly h: number
    static name: string
}
class VideoRegionOfInterestMeta {
    /* Fields of GstVideo-1.0.GstVideo.VideoRegionOfInterestMeta */
    readonly meta: Gst.Meta
    readonly roi_type: GLib.Quark
    readonly id: number
    readonly parent_id: number
    readonly x: number
    readonly y: number
    readonly w: number
    readonly h: number
    readonly params: object[]
    /* Methods of GstVideo-1.0.GstVideo.VideoRegionOfInterestMeta */
    add_param(s: Gst.Structure): void
    get_param(name: string): Gst.Structure | null
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
class VideoResampler {
    /* Fields of GstVideo-1.0.GstVideo.VideoResampler */
    readonly in_size: number
    readonly out_size: number
    readonly max_taps: number
    readonly n_phases: number
    readonly offset: number
    readonly phase: number
    readonly n_taps: number
    readonly taps: number
    /* Methods of GstVideo-1.0.GstVideo.VideoResampler */
    clear(): void
    init(method: VideoResamplerMethod, flags: VideoResamplerFlags, n_phases: number, n_taps: number, shift: number, in_size: number, out_size: number, options: Gst.Structure): boolean
    static name: string
}
class VideoScaler {
    /* Methods of GstVideo-1.0.GstVideo.VideoScaler */
    TODO_2d(vscale: VideoScaler, format: VideoFormat, src: object | null, src_stride: number, dest: object | null, dest_stride: number, x: number, y: number, width: number, height: number): void
    free(): void
    get_coeff(out_offset: number, in_offset: number, n_taps: number): number
    get_max_taps(): number
    horizontal(format: VideoFormat, src: object | null, dest: object | null, dest_offset: number, width: number): void
    vertical(format: VideoFormat, src_lines: object | null, dest: object | null, dest_offset: number, width: number): void
    static name: string
}
abstract class VideoSinkClass {
    /* Fields of GstVideo-1.0.GstVideo.VideoSinkClass */
    readonly parent_class: GstBase.BaseSinkClass
    readonly show_frame: (video_sink: VideoSink, buf: Gst.Buffer) => Gst.FlowReturn
    readonly set_info: (video_sink: VideoSink, caps: Gst.Caps, info: VideoInfo) => boolean
    static name: string
}
class VideoSinkPrivate {
    static name: string
}
class VideoTimeCode {
    /* Fields of GstVideo-1.0.GstVideo.VideoTimeCode */
    readonly config: VideoTimeCodeConfig
    readonly hours: number
    readonly minutes: number
    readonly seconds: number
    readonly frames: number
    readonly field_count: number
    /* Methods of GstVideo-1.0.GstVideo.VideoTimeCode */
    add_frames(frames: number): void
    add_interval(tc_inter: VideoTimeCodeInterval): VideoTimeCode | null
    clear(): void
    compare(tc2: VideoTimeCode): number
    copy(): VideoTimeCode
    frames_since_daily_jam(): number
    free(): void
    increment_frame(): void
    init(fps_n: number, fps_d: number, latest_daily_jam: GLib.DateTime | null, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, field_count: number): void
    init_from_date_time(fps_n: number, fps_d: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, field_count: number): void
    init_from_date_time_full(fps_n: number, fps_d: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, field_count: number): boolean
    is_valid(): boolean
    nsec_since_daily_jam(): number
    to_date_time(): GLib.DateTime | null
    to_string(): string
    static name: string
    static new(fps_n: number, fps_d: number, latest_daily_jam: GLib.DateTime, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, field_count: number): VideoTimeCode
    constructor(fps_n: number, fps_d: number, latest_daily_jam: GLib.DateTime, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, field_count: number)
    /* Static methods and pseudo-constructors */
    static new(fps_n: number, fps_d: number, latest_daily_jam: GLib.DateTime, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, field_count: number): VideoTimeCode
    static new_empty(): VideoTimeCode
    static new_from_date_time(fps_n: number, fps_d: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, field_count: number): VideoTimeCode
    static new_from_date_time_full(fps_n: number, fps_d: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, field_count: number): VideoTimeCode
    static new_from_string(tc_str: string): VideoTimeCode
}
class VideoTimeCodeConfig {
    /* Fields of GstVideo-1.0.GstVideo.VideoTimeCodeConfig */
    readonly fps_n: number
    readonly fps_d: number
    readonly flags: VideoTimeCodeFlags
    readonly latest_daily_jam: GLib.DateTime
    static name: string
}
class VideoTimeCodeInterval {
    /* Fields of GstVideo-1.0.GstVideo.VideoTimeCodeInterval */
    readonly hours: number
    readonly minutes: number
    readonly seconds: number
    readonly frames: number
    /* Methods of GstVideo-1.0.GstVideo.VideoTimeCodeInterval */
    clear(): void
    copy(): VideoTimeCodeInterval
    free(): void
    init(hours: number, minutes: number, seconds: number, frames: number): void
    static name: string
    static new(hours: number, minutes: number, seconds: number, frames: number): VideoTimeCodeInterval
    constructor(hours: number, minutes: number, seconds: number, frames: number)
    /* Static methods and pseudo-constructors */
    static new(hours: number, minutes: number, seconds: number, frames: number): VideoTimeCodeInterval
    static new_from_string(tc_inter_str: string): VideoTimeCodeInterval
}
class VideoTimeCodeMeta {
    /* Fields of GstVideo-1.0.GstVideo.VideoTimeCodeMeta */
    readonly meta: Gst.Meta
    readonly tc: VideoTimeCode
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
class VideoVBIEncoder {
    /* Methods of GstVideo-1.0.GstVideo.VideoVBIEncoder */
    add_ancillary(composite: boolean, DID: number, SDID_block_number: number, data: Uint8Array): boolean
    copy(): VideoVBIEncoder
    free(): void
    write_line(data: number): void
    static name: string
    static new(format: VideoFormat, pixel_width: number): VideoVBIEncoder
    constructor(format: VideoFormat, pixel_width: number)
    /* Static methods and pseudo-constructors */
    static new(format: VideoFormat, pixel_width: number): VideoVBIEncoder
}
class VideoVBIParser {
    /* Methods of GstVideo-1.0.GstVideo.VideoVBIParser */
    add_line(data: Uint8Array): void
    copy(): VideoVBIParser
    free(): void
    get_ancillary(): [ /* returnType */ VideoVBIParserResult, /* anc */ VideoAncillary ]
    static name: string
    static new(format: VideoFormat, pixel_width: number): VideoVBIParser
    constructor(format: VideoFormat, pixel_width: number)
    /* Static methods and pseudo-constructors */
    static new(format: VideoFormat, pixel_width: number): VideoVBIParser
}
}
export default GstVideo;