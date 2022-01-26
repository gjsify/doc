/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstVideo-1.0
 */

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
function bufferAddVideoAfdMeta(buffer: Gst.Buffer, field: number, spec: VideoAFDSpec, afd: VideoAFDValue): VideoAFDMeta
function bufferAddVideoAffineTransformationMeta(buffer: Gst.Buffer): VideoAffineTransformationMeta
function bufferAddVideoBarMeta(buffer: Gst.Buffer, field: number, isLetterbox: boolean, barData1: number, barData2: number): VideoBarMeta
function bufferAddVideoCaptionMeta(buffer: Gst.Buffer, captionType: VideoCaptionType, data: Uint8Array): VideoCaptionMeta
function bufferAddVideoCodecAlphaMeta(buffer: Gst.Buffer, alphaBuffer: Gst.Buffer): VideoCodecAlphaMeta
function bufferAddVideoGlTextureUploadMeta(buffer: Gst.Buffer, textureOrientation: VideoGLTextureOrientation, nTextures: number, textureType: VideoGLTextureType, upload: VideoGLTextureUpload, userDataCopy: GObject.BoxedCopyFunc, userDataFree: GObject.BoxedFreeFunc): VideoGLTextureUploadMeta
function bufferAddVideoMeta(buffer: Gst.Buffer, flags: VideoFrameFlags, format: VideoFormat, width: number, height: number): VideoMeta
function bufferAddVideoMetaFull(buffer: Gst.Buffer, flags: VideoFrameFlags, format: VideoFormat, width: number, height: number, nPlanes: number, offset: number[], stride: number[]): VideoMeta
function bufferAddVideoOverlayCompositionMeta(buf: Gst.Buffer, comp?: VideoOverlayComposition | null): VideoOverlayCompositionMeta
function bufferAddVideoRegionOfInterestMeta(buffer: Gst.Buffer, roiType: string, x: number, y: number, w: number, h: number): VideoRegionOfInterestMeta
function bufferAddVideoRegionOfInterestMetaId(buffer: Gst.Buffer, roiType: GLib.Quark, x: number, y: number, w: number, h: number): VideoRegionOfInterestMeta
function bufferAddVideoTimeCodeMeta(buffer: Gst.Buffer, tc: VideoTimeCode): VideoTimeCodeMeta | null
function bufferAddVideoTimeCodeMetaFull(buffer: Gst.Buffer, fpsN: number, fpsD: number, latestDailyJam: GLib.DateTime, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, fieldCount: number): VideoTimeCodeMeta
function bufferGetVideoMeta(buffer: Gst.Buffer): VideoMeta
function bufferGetVideoMetaId(buffer: Gst.Buffer, id: number): VideoMeta
function bufferGetVideoRegionOfInterestMetaId(buffer: Gst.Buffer, id: number): VideoRegionOfInterestMeta
function bufferPoolConfigGetVideoAlignment(config: Gst.Structure, align: VideoAlignment): boolean
function bufferPoolConfigSetVideoAlignment(config: Gst.Structure, align: VideoAlignment): void
function isVideoOverlayPrepareWindowHandleMessage(msg: Gst.Message): boolean
function navigationEventGetType(event: Gst.Event): NavigationEventType
function navigationEventParseCommand(event: Gst.Event): [ /* returnType */ boolean, /* command */ NavigationCommand | null ]
function navigationEventParseKeyEvent(event: Gst.Event): [ /* returnType */ boolean, /* key */ string | null ]
function navigationEventParseMouseButtonEvent(event: Gst.Event): [ /* returnType */ boolean, /* button */ number | null, /* x */ number | null, /* y */ number | null ]
function navigationEventParseMouseMoveEvent(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
function navigationEventParseMouseScrollEvent(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* deltaX */ number | null, /* deltaY */ number | null ]
function navigationMessageGetType(message: Gst.Message): NavigationMessageType
function navigationMessageNewAnglesChanged(src: Gst.Object, curAngle: number, nAngles: number): Gst.Message
function navigationMessageNewCommandsChanged(src: Gst.Object): Gst.Message
function navigationMessageNewEvent(src: Gst.Object, event: Gst.Event): Gst.Message
function navigationMessageNewMouseOver(src: Gst.Object, active: boolean): Gst.Message
function navigationMessageParseAnglesChanged(message: Gst.Message): [ /* returnType */ boolean, /* curAngle */ number | null, /* nAngles */ number | null ]
function navigationMessageParseEvent(message: Gst.Message): [ /* returnType */ boolean, /* event */ Gst.Event | null ]
function navigationMessageParseMouseOver(message: Gst.Message): [ /* returnType */ boolean, /* active */ boolean | null ]
function navigationQueryGetType(query: Gst.Query): NavigationQueryType
function navigationQueryNewAngles(): Gst.Query
function navigationQueryNewCommands(): Gst.Query
function navigationQueryParseAngles(query: Gst.Query): [ /* returnType */ boolean, /* curAngle */ number | null, /* nAngles */ number | null ]
function navigationQueryParseCommandsLength(query: Gst.Query): [ /* returnType */ boolean, /* nCmds */ number | null ]
function navigationQueryParseCommandsNth(query: Gst.Query, nth: number): [ /* returnType */ boolean, /* cmd */ NavigationCommand | null ]
function navigationQuerySetAngles(query: Gst.Query, curAngle: number, nAngles: number): void
function navigationQuerySetCommandsv(query: Gst.Query, cmds: NavigationCommand[]): void
function videoAfdMetaApiGetType(): GObject.Type
function videoAfdMetaGetInfo(): Gst.MetaInfo
function videoAffineTransformationMetaApiGetType(): GObject.Type
function videoAffineTransformationMetaGetInfo(): Gst.MetaInfo
function videoBarMetaApiGetType(): GObject.Type
function videoBarMetaGetInfo(): Gst.MetaInfo
function videoBlend(dest: VideoFrame, src: VideoFrame, x: number, y: number, globalAlpha: number): boolean
function videoBlendScaleLinearRGBA(src: VideoInfo, srcBuffer: Gst.Buffer, destHeight: number, destWidth: number): [ /* dest */ VideoInfo, /* destBuffer */ Gst.Buffer ]
function videoCalculateDisplayRatio(videoWidth: number, videoHeight: number, videoParN: number, videoParD: number, displayParN: number, displayParD: number): [ /* returnType */ boolean, /* darN */ number, /* darD */ number ]
function videoCaptionMetaApiGetType(): GObject.Type
function videoCaptionMetaGetInfo(): Gst.MetaInfo
function videoCaptionTypeFromCaps(caps: Gst.Caps): VideoCaptionType
function videoCaptionTypeToCaps(type: VideoCaptionType): Gst.Caps
function videoCenterRect(src: VideoRectangle, dst: VideoRectangle, scaling: boolean): /* result */ VideoRectangle
function videoChromaFromString(s: string): VideoChromaSite
function videoChromaResample(resample: VideoChromaResample, lines: object | null, width: number): void
function videoChromaSiteFromString(s: string): VideoChromaSite
function videoChromaSiteToString(site: VideoChromaSite): string | null
function videoChromaToString(site: VideoChromaSite): string
function videoCodecAlphaMetaApiGetType(): GObject.Type
function videoCodecAlphaMetaGetInfo(): Gst.MetaInfo
function videoColorMatrixFromIso(value: number): VideoColorMatrix
function videoColorMatrixGetKrKb(matrix: VideoColorMatrix): [ /* returnType */ boolean, /* kr */ number, /* kb */ number ]
function videoColorMatrixToIso(matrix: VideoColorMatrix): number
function videoColorPrimariesFromIso(value: number): VideoColorPrimaries
function videoColorPrimariesGetInfo(primaries: VideoColorPrimaries): VideoColorPrimariesInfo
function videoColorPrimariesToIso(primaries: VideoColorPrimaries): number
function videoColorRangeOffsets(range: VideoColorRange, info: VideoFormatInfo): [ /* offset */ number[], /* scale */ number[] ]
function videoColorTransferDecode(func: VideoTransferFunction, val: number): number
function videoColorTransferEncode(func: VideoTransferFunction, val: number): number
function videoConvertSample(sample: Gst.Sample, toCaps: Gst.Caps, timeout: Gst.ClockTime): Gst.Sample
function videoConvertSampleAsync(sample: Gst.Sample, toCaps: Gst.Caps, timeout: Gst.ClockTime, callback: VideoConvertSampleCallback): void
function videoCropMetaApiGetType(): GObject.Type
function videoCropMetaGetInfo(): Gst.MetaInfo
function videoEventIsForceKeyUnit(event: Gst.Event): boolean
function videoEventNewDownstreamForceKeyUnit(timestamp: Gst.ClockTime, streamTime: Gst.ClockTime, runningTime: Gst.ClockTime, allHeaders: boolean, count: number): Gst.Event
function videoEventNewStillFrame(inStill: boolean): Gst.Event
function videoEventNewUpstreamForceKeyUnit(runningTime: Gst.ClockTime, allHeaders: boolean, count: number): Gst.Event
function videoEventParseDownstreamForceKeyUnit(event: Gst.Event): [ /* returnType */ boolean, /* timestamp */ Gst.ClockTime, /* streamTime */ Gst.ClockTime, /* runningTime */ Gst.ClockTime, /* allHeaders */ boolean, /* count */ number ]
function videoEventParseStillFrame(event: Gst.Event): [ /* returnType */ boolean, /* inStill */ boolean ]
function videoEventParseUpstreamForceKeyUnit(event: Gst.Event): [ /* returnType */ boolean, /* runningTime */ Gst.ClockTime, /* allHeaders */ boolean, /* count */ number ]
function videoFieldOrderFromString(order: string): VideoFieldOrder
function videoFieldOrderToString(order: VideoFieldOrder): string
function videoFormatFromFourcc(fourcc: number): VideoFormat
function videoFormatFromMasks(depth: number, bpp: number, endianness: number, redMask: number, greenMask: number, blueMask: number, alphaMask: number): VideoFormat
function videoFormatFromString(format: string): VideoFormat
function videoFormatGetInfo(format: VideoFormat): VideoFormatInfo
function videoFormatGetPalette(format: VideoFormat): [ /* returnType */ object | null, /* size */ number ]
function videoFormatToFourcc(format: VideoFormat): number
function videoFormatToString(format: VideoFormat): string
function videoFormatsRaw(): VideoFormat[]
function videoFrameMap(info: VideoInfo, buffer: Gst.Buffer, flags: Gst.MapFlags): [ /* returnType */ boolean, /* frame */ VideoFrame ]
function videoFrameMapId(info: VideoInfo, buffer: Gst.Buffer, id: number, flags: Gst.MapFlags): [ /* returnType */ boolean, /* frame */ VideoFrame ]
function videoGlTextureUploadMetaApiGetType(): GObject.Type
function videoGlTextureUploadMetaGetInfo(): Gst.MetaInfo
function videoGuessFramerate(duration: Gst.ClockTime): [ /* returnType */ boolean, /* destN */ number | null, /* destD */ number | null ]
function videoInfoFromCaps(caps: Gst.Caps): [ /* returnType */ boolean, /* info */ VideoInfo ]
function videoInfoInit(): /* info */ VideoInfo
function videoInterlaceModeFromString(mode: string): VideoInterlaceMode
function videoInterlaceModeToString(mode: VideoInterlaceMode): string
function videoMakeRawCaps(formats: VideoFormat[] | null): Gst.Caps
function videoMakeRawCapsWithFeatures(formats: VideoFormat[] | null, features?: Gst.CapsFeatures | null): Gst.Caps
function videoMasteringDisplayInfoFromString(mastering: string): [ /* returnType */ boolean, /* minfo */ VideoMasteringDisplayInfo ]
function videoMetaApiGetType(): GObject.Type
function videoMetaGetInfo(): Gst.MetaInfo
function videoMetaTransformScaleGetQuark(): GLib.Quark
function videoMultiviewGetDoubledHeightModes(): any
function videoMultiviewGetDoubledSizeModes(): any
function videoMultiviewGetDoubledWidthModes(): any
function videoMultiviewGetMonoModes(): any
function videoMultiviewGetUnpackedModes(): any
function videoMultiviewGuessHalfAspect(mvMode: VideoMultiviewMode, width: number, height: number, parN: number, parD: number): boolean
function videoMultiviewModeFromCapsString(capsMviewMode: string): VideoMultiviewMode
function videoMultiviewModeToCapsString(mviewMode: VideoMultiviewMode): string
function videoMultiviewVideoInfoChangeMode(info: VideoInfo, outMviewMode: VideoMultiviewMode, outMviewFlags: VideoMultiviewFlags): void
function videoOrientationFromTag(taglist: Gst.TagList): [ /* returnType */ boolean, /* method */ VideoOrientationMethod ]
function videoOverlayCompositionMetaApiGetType(): GObject.Type
function videoOverlayCompositionMetaGetInfo(): Gst.MetaInfo
function videoOverlayInstallProperties(oclass: GObject.ObjectClass, lastPropId: number): void
function videoOverlaySetProperty(object: GObject.Object, lastPropId: number, propertyId: number, value: any): boolean
function videoRegionOfInterestMetaApiGetType(): GObject.Type
function videoRegionOfInterestMetaGetInfo(): Gst.MetaInfo
function videoTileGetIndex(mode: VideoTileMode, x: number, y: number, xTiles: number, yTiles: number): number
function videoTimeCodeMetaApiGetType(): GObject.Type
function videoTimeCodeMetaGetInfo(): Gst.MetaInfo
function videoTransferFunctionDecode(func: VideoTransferFunction, val: number): number
function videoTransferFunctionEncode(func: VideoTransferFunction, val: number): number
function videoTransferFunctionFromIso(value: number): VideoTransferFunction
function videoTransferFunctionIsEquivalent(fromFunc: VideoTransferFunction, fromBpp: number, toFunc: VideoTransferFunction, toBpp: number): boolean
function videoTransferFunctionToIso(func: VideoTransferFunction): number
interface VideoAffineTransformationGetMatrix {
    (meta: VideoAffineTransformationMeta, matrix: number): boolean
}
interface VideoConvertSampleCallback {
    (sample: Gst.Sample, error: GLib.Error): void
}
interface VideoFormatPack {
    (info: VideoFormatInfo, flags: VideoPackFlags, src: object | null, sstride: number, data: object | null, stride: number, chromaSite: VideoChromaSite, y: number, width: number): void
}
interface VideoFormatUnpack {
    (info: VideoFormatInfo, flags: VideoPackFlags, dest: object | null, data: object | null, stride: number, x: number, y: number, width: number): void
}
interface VideoGLTextureUpload {
    (meta: VideoGLTextureUploadMeta, textureId: number): boolean
}
class ColorBalance {
    /* Methods of GstVideo-1.0.GstVideo.ColorBalance */
    getBalanceType(): ColorBalanceType
    getValue(channel: ColorBalanceChannel): number
    listChannels(): ColorBalanceChannel[]
    setValue(channel: ColorBalanceChannel, value: number): void
    valueChanged(channel: ColorBalanceChannel, value: number): void
    /* Signals of GstVideo-1.0.GstVideo.ColorBalance */
    connect(sigName: "value-changed", callback: ((channel: ColorBalanceChannel, value: number) => void)): number
    on(sigName: "value-changed", callback: (channel: ColorBalanceChannel, value: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (channel: ColorBalanceChannel, value: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (channel: ColorBalanceChannel, value: number) => void): NodeJS.EventEmitter
    emit(sigName: "value-changed", channel: ColorBalanceChannel, value: number): void
    static name: string
}
class Navigation {
    /* Methods of GstVideo-1.0.GstVideo.Navigation */
    sendCommand(command: NavigationCommand): void
    sendEvent(structure: Gst.Structure): void
    sendKeyEvent(event: string, key: string): void
    sendMouseEvent(event: string, button: number, x: number, y: number): void
    sendMouseScrollEvent(x: number, y: number, deltaX: number, deltaY: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static eventGetType(event: Gst.Event): NavigationEventType
    static eventParseCommand(event: Gst.Event): [ /* returnType */ boolean, /* command */ NavigationCommand | null ]
    static eventParseKeyEvent(event: Gst.Event): [ /* returnType */ boolean, /* key */ string | null ]
    static eventParseMouseButtonEvent(event: Gst.Event): [ /* returnType */ boolean, /* button */ number | null, /* x */ number | null, /* y */ number | null ]
    static eventParseMouseMoveEvent(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
    static eventParseMouseScrollEvent(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* deltaX */ number | null, /* deltaY */ number | null ]
    static messageGetType(message: Gst.Message): NavigationMessageType
    static messageNewAnglesChanged(src: Gst.Object, curAngle: number, nAngles: number): Gst.Message
    static messageNewCommandsChanged(src: Gst.Object): Gst.Message
    static messageNewEvent(src: Gst.Object, event: Gst.Event): Gst.Message
    static messageNewMouseOver(src: Gst.Object, active: boolean): Gst.Message
    static messageParseAnglesChanged(message: Gst.Message): [ /* returnType */ boolean, /* curAngle */ number | null, /* nAngles */ number | null ]
    static messageParseEvent(message: Gst.Message): [ /* returnType */ boolean, /* event */ Gst.Event | null ]
    static messageParseMouseOver(message: Gst.Message): [ /* returnType */ boolean, /* active */ boolean | null ]
    static queryGetType(query: Gst.Query): NavigationQueryType
    static queryNewAngles(): Gst.Query
    static queryNewCommands(): Gst.Query
    static queryParseAngles(query: Gst.Query): [ /* returnType */ boolean, /* curAngle */ number | null, /* nAngles */ number | null ]
    static queryParseCommandsLength(query: Gst.Query): [ /* returnType */ boolean, /* nCmds */ number | null ]
    static queryParseCommandsNth(query: Gst.Query, nth: number): [ /* returnType */ boolean, /* cmd */ NavigationCommand | null ]
    static querySetAngles(query: Gst.Query, curAngle: number, nAngles: number): void
    static querySetCommandsv(query: Gst.Query, cmds: NavigationCommand[]): void
}
class VideoDirection {
    /* Properties of GstVideo-1.0.GstVideo.VideoDirection */
    videoDirection: VideoOrientationMethod
    static name: string
}
class VideoOrientation {
    /* Methods of GstVideo-1.0.GstVideo.VideoOrientation */
    getHcenter(): [ /* returnType */ boolean, /* center */ number ]
    getHflip(): [ /* returnType */ boolean, /* flip */ boolean ]
    getVcenter(): [ /* returnType */ boolean, /* center */ number ]
    getVflip(): [ /* returnType */ boolean, /* flip */ boolean ]
    setHcenter(center: number): boolean
    setHflip(flip: boolean): boolean
    setVcenter(center: number): boolean
    setVflip(flip: boolean): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static fromTag(taglist: Gst.TagList): [ /* returnType */ boolean, /* method */ VideoOrientationMethod ]
}
class VideoOverlay {
    /* Methods of GstVideo-1.0.GstVideo.VideoOverlay */
    expose(): void
    gotWindowHandle(handle: number): void
    handleEvents(handleEvents: boolean): void
    prepareWindowHandle(): void
    setRenderRectangle(x: number, y: number, width: number, height: number): boolean
    setWindowHandle(handle: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static installProperties(oclass: GObject.ObjectClass, lastPropId: number): void
    static setProperty(object: GObject.Object, lastPropId: number, propertyId: number, value: any): boolean
}
interface ColorBalanceChannel_ConstructProps extends GObject.Object_ConstructProps {
}
class ColorBalanceChannel {
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
    /* Signals of GstVideo-1.0.GstVideo.ColorBalanceChannel */
    connect(sigName: "value-changed", callback: ((value: number) => void)): number
    on(sigName: "value-changed", callback: (value: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (value: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (value: number) => void): NodeJS.EventEmitter
    emit(sigName: "value-changed", value: number): void
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
    constructor (config?: ColorBalanceChannel_ConstructProps)
    _init (config?: ColorBalanceChannel_ConstructProps): void
    static $gtype: GObject.Type
}
interface VideoAggregator_ConstructProps extends GstBase.Aggregator_ConstructProps {
}
class VideoAggregator {
    /* Properties of GstBase-1.0.GstBase.Aggregator */
    emitSignals: boolean
    latency: number
    minUpstreamLatency: number
    startTime: number
    startTimeSelection: GstBase.AggregatorStartTimeSelection
    /* Fields of GstBase-1.0.GstBase.Aggregator */
    readonly parent: Gst.Element
    readonly srcpad: Gst.Pad
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
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstVideo-1.0.GstVideo.VideoAggregator */
    getExecutionTaskPool(): Gst.TaskPool
    /* Methods of GstBase-1.0.GstBase.Aggregator */
    finishBuffer(buffer: Gst.Buffer): Gst.FlowReturn
    finishBufferList(bufferlist: Gst.BufferList): Gst.FlowReturn
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    getBufferPool(): Gst.BufferPool | null
    getIgnoreInactivePads(): boolean
    getLatency(): Gst.ClockTime
    negotiate(): boolean
    peekNextSample(pad: GstBase.AggregatorPad): Gst.Sample | null
    selectedSamples(pts: Gst.ClockTime, dts: Gst.ClockTime, duration: Gst.ClockTime, info?: Gst.Structure | null): void
    setIgnoreInactivePads(ignore: boolean): void
    setLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): void
    setSrcCaps(caps: Gst.Caps): void
    simpleGetNextTime(): Gst.ClockTime
    updateSegment(segment: Gst.Segment): void
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
    /* Signals of GstBase-1.0.GstBase.Aggregator */
    connect(sigName: "samples-selected", callback: ((segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null) => void)): number
    on(sigName: "samples-selected", callback: (segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "samples-selected", callback: (segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "samples-selected", callback: (segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null) => void): NodeJS.EventEmitter
    emit(sigName: "samples-selected", segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null): void
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
    connect(sigName: "notify::emit-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latency", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-upstream-latency", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-upstream-latency", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-upstream-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-upstream-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-upstream-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-time-selection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time-selection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-time-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-time-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-time-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoAggregator_ConstructProps)
    _init (config?: VideoAggregator_ConstructProps): void
    static $gtype: GObject.Type
}
interface VideoAggregatorConvertPad_ConstructProps extends VideoAggregatorPad_ConstructProps {
    /* Constructor properties of GstVideo-1.0.GstVideo.VideoAggregatorConvertPad */
    converterConfig?: Gst.Structure
}
class VideoAggregatorConvertPad {
    /* Properties of GstVideo-1.0.GstVideo.VideoAggregatorConvertPad */
    converterConfig: Gst.Structure
    /* Properties of GstVideo-1.0.GstVideo.VideoAggregatorPad */
    maxLastBufferRepeat: number
    repeatAfterEos: boolean
    zorder: number
    /* Properties of GstBase-1.0.GstBase.AggregatorPad */
    emitSignals: boolean
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
    readonly elementPrivate: object
    readonly padtemplate: Gst.PadTemplate
    readonly direction: Gst.PadDirection
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstVideo-1.0.GstVideo.VideoAggregatorConvertPad */
    updateConversionInfo(): void
    /* Methods of GstVideo-1.0.GstVideo.VideoAggregatorPad */
    getCurrentBuffer(): Gst.Buffer
    getPreparedFrame(): VideoFrame
    hasCurrentBuffer(): boolean
    setNeedsAlpha(needsAlpha: boolean): void
    /* Methods of GstBase-1.0.GstBase.AggregatorPad */
    dropBuffer(): boolean
    hasBuffer(): boolean
    isEos(): boolean
    isInactive(): boolean
    peekBuffer(): Gst.Buffer | null
    popBuffer(): Gst.Buffer | null
    /* Methods of Gst-1.0.Gst.Pad */
    activateMode(mode: Gst.PadMode, active: boolean): boolean
    addProbe(mask: Gst.PadProbeType, callback: Gst.PadProbeCallback): number
    canLink(sinkpad: Gst.Pad): boolean
    chain(buffer: Gst.Buffer): Gst.FlowReturn
    chainList(list: Gst.BufferList): Gst.FlowReturn
    checkReconfigure(): boolean
    createStreamId(parent: Gst.Element, streamId?: string | null): string
    eventDefault(parent: Gst.Object | null, event: Gst.Event): boolean
    forward(forward: Gst.PadForwardFunction): boolean
    getAllowedCaps(): Gst.Caps | null
    getCurrentCaps(): Gst.Caps | null
    getDirection(): Gst.PadDirection
    getElementPrivate(): object | null
    getLastFlowReturn(): Gst.FlowReturn
    getOffset(): number
    getPadTemplate(): Gst.PadTemplate | null
    getPadTemplateCaps(): Gst.Caps
    getParentElement(): Gst.Element | null
    getPeer(): Gst.Pad | null
    getRange(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    getSingleInternalLink(): Gst.Pad | null
    getStickyEvent(eventType: Gst.EventType, idx: number): Gst.Event | null
    getStream(): Gst.Stream | null
    getStreamId(): string | null
    getTaskState(): Gst.TaskState
    hasCurrentCaps(): boolean
    isActive(): boolean
    isBlocked(): boolean
    isBlocking(): boolean
    isLinked(): boolean
    iterateInternalLinks(): Gst.Iterator | null
    iterateInternalLinksDefault(parent?: Gst.Object | null): Gst.Iterator | null
    link(sinkpad: Gst.Pad): Gst.PadLinkReturn
    linkFull(sinkpad: Gst.Pad, flags: Gst.PadLinkCheck): Gst.PadLinkReturn
    linkMaybeGhosting(sink: Gst.Pad): boolean
    linkMaybeGhostingFull(sink: Gst.Pad, flags: Gst.PadLinkCheck): boolean
    markReconfigure(): void
    needsReconfigure(): boolean
    pauseTask(): boolean
    peerQuery(query: Gst.Query): boolean
    peerQueryAcceptCaps(caps: Gst.Caps): boolean
    peerQueryCaps(filter?: Gst.Caps | null): Gst.Caps
    peerQueryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    peerQueryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    peerQueryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    proxyQueryAcceptCaps(query: Gst.Query): boolean
    proxyQueryCaps(query: Gst.Query): boolean
    pullRange(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    push(buffer: Gst.Buffer): Gst.FlowReturn
    pushEvent(event: Gst.Event): boolean
    pushList(list: Gst.BufferList): Gst.FlowReturn
    query(query: Gst.Query): boolean
    queryAcceptCaps(caps: Gst.Caps): boolean
    queryCaps(filter?: Gst.Caps | null): Gst.Caps
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDefault(parent: Gst.Object | null, query: Gst.Query): boolean
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    removeProbe(id: number): void
    sendEvent(event: Gst.Event): boolean
    setActivateFunctionFull(activate: Gst.PadActivateFunction): void
    setActivatemodeFunctionFull(activatemode: Gst.PadActivateModeFunction): void
    setActive(active: boolean): boolean
    setChainFunctionFull(chain: Gst.PadChainFunction): void
    setChainListFunctionFull(chainlist: Gst.PadChainListFunction): void
    setElementPrivate(priv?: object | null): void
    setEventFullFunctionFull(event: Gst.PadEventFullFunction): void
    setEventFunctionFull(event: Gst.PadEventFunction): void
    setGetrangeFunctionFull(get: Gst.PadGetRangeFunction): void
    setIterateInternalLinksFunctionFull(iterintlink: Gst.PadIterIntLinkFunction): void
    setLinkFunctionFull(link: Gst.PadLinkFunction): void
    setOffset(offset: number): void
    setQueryFunctionFull(query: Gst.PadQueryFunction): void
    setUnlinkFunctionFull(unlink: Gst.PadUnlinkFunction): void
    startTask(func: Gst.TaskFunction): boolean
    stickyEventsForeach(foreachFunc: Gst.PadStickyEventsForeachFunction): void
    stopTask(): boolean
    storeStickyEvent(event: Gst.Event): Gst.FlowReturn
    unlink(sinkpad: Gst.Pad): boolean
    useFixedCaps(): void
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
    /* Signals of GstBase-1.0.GstBase.AggregatorPad */
    connect(sigName: "buffer-consumed", callback: ((object: Gst.Buffer) => void)): number
    on(sigName: "buffer-consumed", callback: (object: Gst.Buffer) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "buffer-consumed", callback: (object: Gst.Buffer) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "buffer-consumed", callback: (object: Gst.Buffer) => void): NodeJS.EventEmitter
    emit(sigName: "buffer-consumed", object: Gst.Buffer): void
    /* Signals of Gst-1.0.Gst.Pad */
    connect(sigName: "linked", callback: ((peer: Gst.Pad) => void)): number
    on(sigName: "linked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "linked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "linked", callback: (peer: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "linked", peer: Gst.Pad): void
    connect(sigName: "unlinked", callback: ((peer: Gst.Pad) => void)): number
    on(sigName: "unlinked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unlinked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unlinked", callback: (peer: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "unlinked", peer: Gst.Pad): void
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
    connect(sigName: "notify::converter-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::converter-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::converter-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::converter-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::converter-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-last-buffer-repeat", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-last-buffer-repeat", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::repeat-after-eos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-after-eos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::emit-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::template", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoAggregatorConvertPad_ConstructProps)
    _init (config?: VideoAggregatorConvertPad_ConstructProps): void
    static $gtype: GObject.Type
}
interface VideoAggregatorPad_ConstructProps extends GstBase.AggregatorPad_ConstructProps {
    /* Constructor properties of GstVideo-1.0.GstVideo.VideoAggregatorPad */
    maxLastBufferRepeat?: number
    repeatAfterEos?: boolean
    zorder?: number
}
class VideoAggregatorPad {
    /* Properties of GstVideo-1.0.GstVideo.VideoAggregatorPad */
    maxLastBufferRepeat: number
    repeatAfterEos: boolean
    zorder: number
    /* Properties of GstBase-1.0.GstBase.AggregatorPad */
    emitSignals: boolean
    /* Properties of Gst-1.0.Gst.Pad */
    readonly caps: Gst.Caps
    offset: number
    template: Gst.PadTemplate
    /* Fields of GstBase-1.0.GstBase.AggregatorPad */
    readonly parent: Gst.Pad
    readonly segment: Gst.Segment
    /* Fields of Gst-1.0.Gst.Pad */
    readonly object: Gst.Object
    readonly elementPrivate: object
    readonly padtemplate: Gst.PadTemplate
    readonly direction: Gst.PadDirection
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstVideo-1.0.GstVideo.VideoAggregatorPad */
    getCurrentBuffer(): Gst.Buffer
    getPreparedFrame(): VideoFrame
    hasCurrentBuffer(): boolean
    setNeedsAlpha(needsAlpha: boolean): void
    /* Methods of GstBase-1.0.GstBase.AggregatorPad */
    dropBuffer(): boolean
    hasBuffer(): boolean
    isEos(): boolean
    isInactive(): boolean
    peekBuffer(): Gst.Buffer | null
    popBuffer(): Gst.Buffer | null
    /* Methods of Gst-1.0.Gst.Pad */
    activateMode(mode: Gst.PadMode, active: boolean): boolean
    addProbe(mask: Gst.PadProbeType, callback: Gst.PadProbeCallback): number
    canLink(sinkpad: Gst.Pad): boolean
    chain(buffer: Gst.Buffer): Gst.FlowReturn
    chainList(list: Gst.BufferList): Gst.FlowReturn
    checkReconfigure(): boolean
    createStreamId(parent: Gst.Element, streamId?: string | null): string
    eventDefault(parent: Gst.Object | null, event: Gst.Event): boolean
    forward(forward: Gst.PadForwardFunction): boolean
    getAllowedCaps(): Gst.Caps | null
    getCurrentCaps(): Gst.Caps | null
    getDirection(): Gst.PadDirection
    getElementPrivate(): object | null
    getLastFlowReturn(): Gst.FlowReturn
    getOffset(): number
    getPadTemplate(): Gst.PadTemplate | null
    getPadTemplateCaps(): Gst.Caps
    getParentElement(): Gst.Element | null
    getPeer(): Gst.Pad | null
    getRange(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    getSingleInternalLink(): Gst.Pad | null
    getStickyEvent(eventType: Gst.EventType, idx: number): Gst.Event | null
    getStream(): Gst.Stream | null
    getStreamId(): string | null
    getTaskState(): Gst.TaskState
    hasCurrentCaps(): boolean
    isActive(): boolean
    isBlocked(): boolean
    isBlocking(): boolean
    isLinked(): boolean
    iterateInternalLinks(): Gst.Iterator | null
    iterateInternalLinksDefault(parent?: Gst.Object | null): Gst.Iterator | null
    link(sinkpad: Gst.Pad): Gst.PadLinkReturn
    linkFull(sinkpad: Gst.Pad, flags: Gst.PadLinkCheck): Gst.PadLinkReturn
    linkMaybeGhosting(sink: Gst.Pad): boolean
    linkMaybeGhostingFull(sink: Gst.Pad, flags: Gst.PadLinkCheck): boolean
    markReconfigure(): void
    needsReconfigure(): boolean
    pauseTask(): boolean
    peerQuery(query: Gst.Query): boolean
    peerQueryAcceptCaps(caps: Gst.Caps): boolean
    peerQueryCaps(filter?: Gst.Caps | null): Gst.Caps
    peerQueryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    peerQueryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    peerQueryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    proxyQueryAcceptCaps(query: Gst.Query): boolean
    proxyQueryCaps(query: Gst.Query): boolean
    pullRange(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    push(buffer: Gst.Buffer): Gst.FlowReturn
    pushEvent(event: Gst.Event): boolean
    pushList(list: Gst.BufferList): Gst.FlowReturn
    query(query: Gst.Query): boolean
    queryAcceptCaps(caps: Gst.Caps): boolean
    queryCaps(filter?: Gst.Caps | null): Gst.Caps
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDefault(parent: Gst.Object | null, query: Gst.Query): boolean
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    removeProbe(id: number): void
    sendEvent(event: Gst.Event): boolean
    setActivateFunctionFull(activate: Gst.PadActivateFunction): void
    setActivatemodeFunctionFull(activatemode: Gst.PadActivateModeFunction): void
    setActive(active: boolean): boolean
    setChainFunctionFull(chain: Gst.PadChainFunction): void
    setChainListFunctionFull(chainlist: Gst.PadChainListFunction): void
    setElementPrivate(priv?: object | null): void
    setEventFullFunctionFull(event: Gst.PadEventFullFunction): void
    setEventFunctionFull(event: Gst.PadEventFunction): void
    setGetrangeFunctionFull(get: Gst.PadGetRangeFunction): void
    setIterateInternalLinksFunctionFull(iterintlink: Gst.PadIterIntLinkFunction): void
    setLinkFunctionFull(link: Gst.PadLinkFunction): void
    setOffset(offset: number): void
    setQueryFunctionFull(query: Gst.PadQueryFunction): void
    setUnlinkFunctionFull(unlink: Gst.PadUnlinkFunction): void
    startTask(func: Gst.TaskFunction): boolean
    stickyEventsForeach(foreachFunc: Gst.PadStickyEventsForeachFunction): void
    stopTask(): boolean
    storeStickyEvent(event: Gst.Event): Gst.FlowReturn
    unlink(sinkpad: Gst.Pad): boolean
    useFixedCaps(): void
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
    /* Signals of GstBase-1.0.GstBase.AggregatorPad */
    connect(sigName: "buffer-consumed", callback: ((object: Gst.Buffer) => void)): number
    on(sigName: "buffer-consumed", callback: (object: Gst.Buffer) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "buffer-consumed", callback: (object: Gst.Buffer) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "buffer-consumed", callback: (object: Gst.Buffer) => void): NodeJS.EventEmitter
    emit(sigName: "buffer-consumed", object: Gst.Buffer): void
    /* Signals of Gst-1.0.Gst.Pad */
    connect(sigName: "linked", callback: ((peer: Gst.Pad) => void)): number
    on(sigName: "linked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "linked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "linked", callback: (peer: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "linked", peer: Gst.Pad): void
    connect(sigName: "unlinked", callback: ((peer: Gst.Pad) => void)): number
    on(sigName: "unlinked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unlinked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unlinked", callback: (peer: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "unlinked", peer: Gst.Pad): void
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
    connect(sigName: "notify::max-last-buffer-repeat", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-last-buffer-repeat", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::repeat-after-eos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-after-eos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::emit-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::template", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoAggregatorPad_ConstructProps)
    _init (config?: VideoAggregatorPad_ConstructProps): void
    static $gtype: GObject.Type
}
interface VideoAggregatorParallelConvertPad_ConstructProps extends VideoAggregatorConvertPad_ConstructProps {
}
class VideoAggregatorParallelConvertPad {
    /* Properties of GstVideo-1.0.GstVideo.VideoAggregatorConvertPad */
    converterConfig: Gst.Structure
    /* Properties of GstVideo-1.0.GstVideo.VideoAggregatorPad */
    maxLastBufferRepeat: number
    repeatAfterEos: boolean
    zorder: number
    /* Properties of GstBase-1.0.GstBase.AggregatorPad */
    emitSignals: boolean
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
    readonly elementPrivate: object
    readonly padtemplate: Gst.PadTemplate
    readonly direction: Gst.PadDirection
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstVideo-1.0.GstVideo.VideoAggregatorConvertPad */
    updateConversionInfo(): void
    /* Methods of GstVideo-1.0.GstVideo.VideoAggregatorPad */
    getCurrentBuffer(): Gst.Buffer
    getPreparedFrame(): VideoFrame
    hasCurrentBuffer(): boolean
    setNeedsAlpha(needsAlpha: boolean): void
    /* Methods of GstBase-1.0.GstBase.AggregatorPad */
    dropBuffer(): boolean
    hasBuffer(): boolean
    isEos(): boolean
    isInactive(): boolean
    peekBuffer(): Gst.Buffer | null
    popBuffer(): Gst.Buffer | null
    /* Methods of Gst-1.0.Gst.Pad */
    activateMode(mode: Gst.PadMode, active: boolean): boolean
    addProbe(mask: Gst.PadProbeType, callback: Gst.PadProbeCallback): number
    canLink(sinkpad: Gst.Pad): boolean
    chain(buffer: Gst.Buffer): Gst.FlowReturn
    chainList(list: Gst.BufferList): Gst.FlowReturn
    checkReconfigure(): boolean
    createStreamId(parent: Gst.Element, streamId?: string | null): string
    eventDefault(parent: Gst.Object | null, event: Gst.Event): boolean
    forward(forward: Gst.PadForwardFunction): boolean
    getAllowedCaps(): Gst.Caps | null
    getCurrentCaps(): Gst.Caps | null
    getDirection(): Gst.PadDirection
    getElementPrivate(): object | null
    getLastFlowReturn(): Gst.FlowReturn
    getOffset(): number
    getPadTemplate(): Gst.PadTemplate | null
    getPadTemplateCaps(): Gst.Caps
    getParentElement(): Gst.Element | null
    getPeer(): Gst.Pad | null
    getRange(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    getSingleInternalLink(): Gst.Pad | null
    getStickyEvent(eventType: Gst.EventType, idx: number): Gst.Event | null
    getStream(): Gst.Stream | null
    getStreamId(): string | null
    getTaskState(): Gst.TaskState
    hasCurrentCaps(): boolean
    isActive(): boolean
    isBlocked(): boolean
    isBlocking(): boolean
    isLinked(): boolean
    iterateInternalLinks(): Gst.Iterator | null
    iterateInternalLinksDefault(parent?: Gst.Object | null): Gst.Iterator | null
    link(sinkpad: Gst.Pad): Gst.PadLinkReturn
    linkFull(sinkpad: Gst.Pad, flags: Gst.PadLinkCheck): Gst.PadLinkReturn
    linkMaybeGhosting(sink: Gst.Pad): boolean
    linkMaybeGhostingFull(sink: Gst.Pad, flags: Gst.PadLinkCheck): boolean
    markReconfigure(): void
    needsReconfigure(): boolean
    pauseTask(): boolean
    peerQuery(query: Gst.Query): boolean
    peerQueryAcceptCaps(caps: Gst.Caps): boolean
    peerQueryCaps(filter?: Gst.Caps | null): Gst.Caps
    peerQueryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    peerQueryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    peerQueryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    proxyQueryAcceptCaps(query: Gst.Query): boolean
    proxyQueryCaps(query: Gst.Query): boolean
    pullRange(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    push(buffer: Gst.Buffer): Gst.FlowReturn
    pushEvent(event: Gst.Event): boolean
    pushList(list: Gst.BufferList): Gst.FlowReturn
    query(query: Gst.Query): boolean
    queryAcceptCaps(caps: Gst.Caps): boolean
    queryCaps(filter?: Gst.Caps | null): Gst.Caps
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDefault(parent: Gst.Object | null, query: Gst.Query): boolean
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    removeProbe(id: number): void
    sendEvent(event: Gst.Event): boolean
    setActivateFunctionFull(activate: Gst.PadActivateFunction): void
    setActivatemodeFunctionFull(activatemode: Gst.PadActivateModeFunction): void
    setActive(active: boolean): boolean
    setChainFunctionFull(chain: Gst.PadChainFunction): void
    setChainListFunctionFull(chainlist: Gst.PadChainListFunction): void
    setElementPrivate(priv?: object | null): void
    setEventFullFunctionFull(event: Gst.PadEventFullFunction): void
    setEventFunctionFull(event: Gst.PadEventFunction): void
    setGetrangeFunctionFull(get: Gst.PadGetRangeFunction): void
    setIterateInternalLinksFunctionFull(iterintlink: Gst.PadIterIntLinkFunction): void
    setLinkFunctionFull(link: Gst.PadLinkFunction): void
    setOffset(offset: number): void
    setQueryFunctionFull(query: Gst.PadQueryFunction): void
    setUnlinkFunctionFull(unlink: Gst.PadUnlinkFunction): void
    startTask(func: Gst.TaskFunction): boolean
    stickyEventsForeach(foreachFunc: Gst.PadStickyEventsForeachFunction): void
    stopTask(): boolean
    storeStickyEvent(event: Gst.Event): Gst.FlowReturn
    unlink(sinkpad: Gst.Pad): boolean
    useFixedCaps(): void
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
    /* Signals of GstBase-1.0.GstBase.AggregatorPad */
    connect(sigName: "buffer-consumed", callback: ((object: Gst.Buffer) => void)): number
    on(sigName: "buffer-consumed", callback: (object: Gst.Buffer) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "buffer-consumed", callback: (object: Gst.Buffer) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "buffer-consumed", callback: (object: Gst.Buffer) => void): NodeJS.EventEmitter
    emit(sigName: "buffer-consumed", object: Gst.Buffer): void
    /* Signals of Gst-1.0.Gst.Pad */
    connect(sigName: "linked", callback: ((peer: Gst.Pad) => void)): number
    on(sigName: "linked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "linked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "linked", callback: (peer: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "linked", peer: Gst.Pad): void
    connect(sigName: "unlinked", callback: ((peer: Gst.Pad) => void)): number
    on(sigName: "unlinked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unlinked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unlinked", callback: (peer: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "unlinked", peer: Gst.Pad): void
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
    connect(sigName: "notify::converter-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::converter-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::converter-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::converter-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::converter-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-last-buffer-repeat", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-last-buffer-repeat", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::repeat-after-eos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-after-eos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::emit-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::template", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.BufferPool */
    acquireBuffer(params?: Gst.BufferPoolAcquireParams | null): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    getConfig(): Gst.Structure
    getOptions(): string[]
    hasOption(option: string): boolean
    isActive(): boolean
    releaseBuffer(buffer: Gst.Buffer): void
    setActive(active: boolean): boolean
    setConfig(config: Gst.Structure): boolean
    setFlushing(flushing: boolean): void
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
    constructor (config?: VideoBufferPool_ConstructProps)
    _init (config?: VideoBufferPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VideoBufferPool
    static $gtype: GObject.Type
}
interface VideoDecoder_ConstructProps extends Gst.Element_ConstructProps {
    /* Constructor properties of GstVideo-1.0.GstVideo.VideoDecoder */
    automaticRequestSyncPointFlags?: VideoDecoderRequestSyncPointFlags
    automaticRequestSyncPoints?: boolean
    discardCorruptedFrames?: boolean
    maxErrors?: number
    minForceKeyUnitInterval?: number
    qos?: boolean
}
class VideoDecoder {
    /* Properties of GstVideo-1.0.GstVideo.VideoDecoder */
    automaticRequestSyncPointFlags: VideoDecoderRequestSyncPointFlags
    automaticRequestSyncPoints: boolean
    discardCorruptedFrames: boolean
    maxErrors: number
    minForceKeyUnitInterval: number
    qos: boolean
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
    /* Methods of GstVideo-1.0.GstVideo.VideoDecoder */
    addToFrame(nBytes: number): void
    allocateOutputBuffer(): Gst.Buffer
    allocateOutputFrame(frame: VideoCodecFrame): Gst.FlowReturn
    allocateOutputFrameWithParams(frame: VideoCodecFrame, params: Gst.BufferPoolAcquireParams): Gst.FlowReturn
    dropFrame(frame: VideoCodecFrame): Gst.FlowReturn
    dropSubframe(frame: VideoCodecFrame): Gst.FlowReturn
    finishFrame(frame: VideoCodecFrame): Gst.FlowReturn
    finishSubframe(frame: VideoCodecFrame): Gst.FlowReturn
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    getBufferPool(): Gst.BufferPool
    getEstimateRate(): number
    getFrame(frameNumber: number): VideoCodecFrame
    getFrames(): VideoCodecFrame[]
    getInputSubframeIndex(frame: VideoCodecFrame): number
    getLatency(): [ /* minLatency */ Gst.ClockTime | null, /* maxLatency */ Gst.ClockTime | null ]
    getMaxDecodeTime(frame: VideoCodecFrame): Gst.ClockTimeDiff
    getMaxErrors(): number
    getNeedsFormat(): boolean
    getNeedsSyncPoint(): boolean
    getOldestFrame(): VideoCodecFrame
    getOutputState(): VideoCodecState
    getPacketized(): boolean
    getPendingFrameSize(): number
    getProcessedSubframeIndex(frame: VideoCodecFrame): number
    getQosProportion(): number
    getSubframeMode(): boolean
    haveFrame(): Gst.FlowReturn
    haveLastSubframe(frame: VideoCodecFrame): Gst.FlowReturn
    mergeTags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    negotiate(): boolean
    proxyGetcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    releaseFrame(frame: VideoCodecFrame): void
    requestSyncPoint(frame: VideoCodecFrame, flags: VideoDecoderRequestSyncPointFlags): void
    setEstimateRate(enabled: boolean): void
    setInterlacedOutputState(fmt: VideoFormat, interlaceMode: VideoInterlaceMode, width: number, height: number, reference?: VideoCodecState | null): VideoCodecState
    setLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): void
    setMaxErrors(num: number): void
    setNeedsFormat(enabled: boolean): void
    setNeedsSyncPoint(enabled: boolean): void
    setOutputState(fmt: VideoFormat, width: number, height: number, reference?: VideoCodecState | null): VideoCodecState
    setPacketized(packetized: boolean): void
    setSubframeMode(subframeMode: boolean): void
    setUseDefaultPadAcceptcaps(use: boolean): void
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
    connect(sigName: "notify::automatic-request-sync-point-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-point-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::automatic-request-sync-point-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::automatic-request-sync-point-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::automatic-request-sync-point-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::automatic-request-sync-points", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-points", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::automatic-request-sync-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::automatic-request-sync-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::automatic-request-sync-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::discard-corrupted-frames", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard-corrupted-frames", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-force-key-unit-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoDecoder_ConstructProps)
    _init (config?: VideoDecoder_ConstructProps): void
    static $gtype: GObject.Type
}
interface VideoEncoder_ConstructProps extends Gst.Element_ConstructProps {
    /* Constructor properties of GstVideo-1.0.GstVideo.VideoEncoder */
    minForceKeyUnitInterval?: number
    qos?: boolean
}
class VideoEncoder {
    /* Properties of GstVideo-1.0.GstVideo.VideoEncoder */
    minForceKeyUnitInterval: number
    qos: boolean
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
    /* Methods of GstVideo-1.0.GstVideo.VideoEncoder */
    allocateOutputBuffer(size: number): Gst.Buffer
    allocateOutputFrame(frame: VideoCodecFrame, size: number): Gst.FlowReturn
    finishFrame(frame: VideoCodecFrame): Gst.FlowReturn
    finishSubframe(frame: VideoCodecFrame): Gst.FlowReturn
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    getFrame(frameNumber: number): VideoCodecFrame
    getFrames(): VideoCodecFrame[]
    getLatency(): [ /* minLatency */ Gst.ClockTime | null, /* maxLatency */ Gst.ClockTime | null ]
    getMaxEncodeTime(frame: VideoCodecFrame): Gst.ClockTimeDiff
    getMinForceKeyUnitInterval(): Gst.ClockTime
    getOldestFrame(): VideoCodecFrame
    getOutputState(): VideoCodecState
    isQosEnabled(): boolean
    mergeTags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    negotiate(): boolean
    proxyGetcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    setHeaders(headers: Gst.Buffer[]): void
    setLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): void
    setMinForceKeyUnitInterval(interval: Gst.ClockTime): void
    setMinPts(minPts: Gst.ClockTime): void
    setOutputState(caps: Gst.Caps, reference?: VideoCodecState | null): VideoCodecState
    setQosEnabled(enabled: boolean): void
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
    /* Methods of Gst-1.0.Gst.Preset */
    deletePreset(name: string): boolean
    getMeta(name: string, tag: string): [ /* returnType */ boolean, /* value */ string ]
    getPresetNames(): string[]
    getPropertyNames(): string[]
    isEditable(): boolean
    loadPreset(name: string): boolean
    renamePreset(oldName: string, newName: string): boolean
    savePreset(name: string): boolean
    setMeta(name: string, tag: string, value?: string | null): boolean
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
    connect(sigName: "notify::min-force-key-unit-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoEncoder_ConstructProps)
    _init (config?: VideoEncoder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getAppDir(): string | null
    static setAppDir(appDir: string): boolean
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
    readonly haveSegment: boolean
    readonly segment: Gst.Segment
    readonly queuedBuf: Gst.Buffer
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
    /* Methods of GstBase-1.0.GstBase.BaseTransform */
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    getBufferPool(): Gst.BufferPool | null
    isInPlace(): boolean
    isPassthrough(): boolean
    isQosEnabled(): boolean
    reconfigure(): boolean
    reconfigureSink(): void
    reconfigureSrc(): void
    setGapAware(gapAware: boolean): void
    setInPlace(inPlace: boolean): void
    setPassthrough(passthrough: boolean): void
    setPreferPassthrough(preferPassthrough: boolean): void
    setQosEnabled(enabled: boolean): void
    updateQos(proportion: number, diff: Gst.ClockTimeDiff, timestamp: Gst.ClockTime): void
    updateSrcCaps(updatedCaps: Gst.Caps): boolean
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
    connect(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    showPrerollFrame?: boolean
}
class VideoSink {
    /* Properties of GstVideo-1.0.GstVideo.VideoSink */
    showPrerollFrame: boolean
    /* Properties of GstBase-1.0.GstBase.BaseSink */
    async: boolean
    blocksize: number
    enableLastSample: boolean
    readonly lastSample: Gst.Sample
    maxBitrate: number
    maxLateness: number
    processingDeadline: number
    qos: boolean
    renderDelay: number
    readonly stats: Gst.Structure
    sync: boolean
    throttleTime: number
    tsOffset: number
    /* Fields of GstBase-1.0.GstBase.BaseSink */
    readonly element: Gst.Element
    readonly sinkpad: Gst.Pad
    readonly padMode: Gst.PadMode
    readonly offset: number
    readonly canActivatePull: boolean
    readonly canActivatePush: boolean
    readonly prerollLock: GLib.Mutex
    readonly prerollCond: GLib.Cond
    readonly eos: boolean
    readonly needPreroll: boolean
    readonly havePreroll: boolean
    readonly playingAsync: boolean
    readonly haveNewsegment: boolean
    readonly segment: Gst.Segment
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
    /* Methods of GstBase-1.0.GstBase.BaseSink */
    doPreroll(obj: Gst.MiniObject): Gst.FlowReturn
    getBlocksize(): number
    getDropOutOfSegment(): boolean
    getLastSample(): Gst.Sample | null
    getLatency(): Gst.ClockTime
    getMaxBitrate(): number
    getMaxLateness(): number
    getProcessingDeadline(): Gst.ClockTime
    getRenderDelay(): Gst.ClockTime
    getStats(): Gst.Structure
    getSync(): boolean
    getThrottleTime(): number
    getTsOffset(): Gst.ClockTimeDiff
    isAsyncEnabled(): boolean
    isLastSampleEnabled(): boolean
    isQosEnabled(): boolean
    queryLatency(): [ /* returnType */ boolean, /* live */ boolean | null, /* upstreamLive */ boolean | null, /* minLatency */ Gst.ClockTime | null, /* maxLatency */ Gst.ClockTime | null ]
    setAsyncEnabled(enabled: boolean): void
    setBlocksize(blocksize: number): void
    setDropOutOfSegment(dropOutOfSegment: boolean): void
    setLastSampleEnabled(enabled: boolean): void
    setMaxBitrate(maxBitrate: number): void
    setMaxLateness(maxLateness: number): void
    setProcessingDeadline(processingDeadline: Gst.ClockTime): void
    setQosEnabled(enabled: boolean): void
    setRenderDelay(delay: Gst.ClockTime): void
    setSync(sync: boolean): void
    setThrottleTime(throttle: number): void
    setTsOffset(offset: Gst.ClockTimeDiff): void
    wait(time: Gst.ClockTime): [ /* returnType */ Gst.FlowReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    waitClock(time: Gst.ClockTime): [ /* returnType */ Gst.ClockReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    waitPreroll(): Gst.FlowReturn
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
    connect(sigName: "notify::show-preroll-frame", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-preroll-frame", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-preroll-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-preroll-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-preroll-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::async", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::blocksize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-last-sample", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-sample", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-sample", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-sample", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-bitrate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bitrate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-lateness", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::processing-deadline", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-deadline", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::render-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sync", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::throttle-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ts-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoSink_ConstructProps)
    _init (config?: VideoSink_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static centerRect(src: VideoRectangle, dst: VideoRectangle, scaling: boolean): /* result */ VideoRectangle
    static $gtype: GObject.Type
}
abstract class ColorBalanceChannelClass {
    /* Fields of GstVideo-1.0.GstVideo.ColorBalanceChannelClass */
    readonly parent: GObject.ObjectClass
    readonly valueChanged: (channel: ColorBalanceChannel, value: number) => void
    static name: string
}
abstract class ColorBalanceInterface {
    /* Fields of GstVideo-1.0.GstVideo.ColorBalanceInterface */
    readonly iface: GObject.TypeInterface
    readonly listChannels: (balance: ColorBalance) => ColorBalanceChannel[]
    readonly setValue: (balance: ColorBalance, channel: ColorBalanceChannel, value: number) => void
    readonly getValue: (balance: ColorBalance, channel: ColorBalanceChannel) => number
    readonly getBalanceType: (balance: ColorBalance) => ColorBalanceType
    readonly valueChanged: (balance: ColorBalance, channel: ColorBalanceChannel, value: number) => void
    static name: string
}
abstract class NavigationInterface {
    /* Fields of GstVideo-1.0.GstVideo.NavigationInterface */
    readonly iface: GObject.TypeInterface
    readonly sendEvent: (navigation: Navigation, structure: Gst.Structure) => void
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
    static getInfo(): Gst.MetaInfo
}
class VideoAffineTransformationMeta {
    /* Fields of GstVideo-1.0.GstVideo.VideoAffineTransformationMeta */
    readonly meta: Gst.Meta
    readonly matrix: number[]
    /* Methods of GstVideo-1.0.GstVideo.VideoAffineTransformationMeta */
    applyMatrix(matrix: number[]): void
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
abstract class VideoAggregatorClass {
    /* Fields of GstVideo-1.0.GstVideo.VideoAggregatorClass */
    readonly updateCaps: (videoaggregator: VideoAggregator, caps: Gst.Caps) => Gst.Caps
    readonly aggregateFrames: (videoaggregator: VideoAggregator, outbuffer: Gst.Buffer) => Gst.FlowReturn
    readonly createOutputBuffer: (videoaggregator: VideoAggregator, outbuffer: Gst.Buffer) => Gst.FlowReturn
    readonly findBestFormat: (vagg: VideoAggregator, downstreamCaps: Gst.Caps, bestInfo: VideoInfo, atLeastOneAlpha: boolean) => void
    static name: string
}
abstract class VideoAggregatorConvertPadClass {
    /* Fields of GstVideo-1.0.GstVideo.VideoAggregatorConvertPadClass */
    readonly parentClass: VideoAggregatorPadClass
    readonly createConversionInfo: (pad: VideoAggregatorConvertPad, agg: VideoAggregator, conversionInfo: VideoInfo) => void
    static name: string
}
class VideoAggregatorConvertPadPrivate {
    static name: string
}
abstract class VideoAggregatorPadClass {
    /* Fields of GstVideo-1.0.GstVideo.VideoAggregatorPadClass */
    readonly parentClass: GstBase.AggregatorPadClass
    readonly updateConversionInfo: (pad: VideoAggregatorPad) => void
    readonly prepareFrame: (pad: VideoAggregatorPad, videoaggregator: VideoAggregator, buffer: Gst.Buffer, preparedFrame: VideoFrame) => boolean
    readonly cleanFrame: (pad: VideoAggregatorPad, videoaggregator: VideoAggregator, preparedFrame: VideoFrame) => void
    readonly prepareFrameStart: (pad: VideoAggregatorPad, videoaggregator: VideoAggregator, buffer: Gst.Buffer, preparedFrame: VideoFrame) => void
    readonly prepareFrameFinish: (pad: VideoAggregatorPad, videoaggregator: VideoAggregator, preparedFrame: VideoFrame) => void
    readonly gstReserved: object[]
    static name: string
}
class VideoAggregatorPadPrivate {
    static name: string
}
abstract class VideoAggregatorParallelConvertPadClass {
    /* Fields of GstVideo-1.0.GstVideo.VideoAggregatorParallelConvertPadClass */
    readonly parentClass: VideoAggregatorConvertPadClass
    static name: string
}
class VideoAggregatorPrivate {
    static name: string
}
class VideoAlignment {
    /* Fields of GstVideo-1.0.GstVideo.VideoAlignment */
    readonly paddingTop: number
    readonly paddingBottom: number
    readonly paddingLeft: number
    readonly paddingRight: number
    readonly strideAlign: number[]
    /* Methods of GstVideo-1.0.GstVideo.VideoAlignment */
    reset(): void
    static name: string
}
class VideoAncillary {
    /* Fields of GstVideo-1.0.GstVideo.VideoAncillary */
    readonly dID: number
    readonly sDIDBlockNumber: number
    readonly dataCount: number
    readonly data: Uint8Array
    static name: string
}
class VideoBarMeta {
    /* Fields of GstVideo-1.0.GstVideo.VideoBarMeta */
    readonly meta: Gst.Meta
    readonly field: number
    readonly isLetterbox: boolean
    readonly barData1: number
    readonly barData2: number
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
abstract class VideoBufferPoolClass {
    /* Fields of GstVideo-1.0.GstVideo.VideoBufferPoolClass */
    readonly parentClass: Gst.BufferPoolClass
    static name: string
}
class VideoBufferPoolPrivate {
    static name: string
}
class VideoCaptionMeta {
    /* Fields of GstVideo-1.0.GstVideo.VideoCaptionMeta */
    readonly meta: Gst.Meta
    readonly captionType: VideoCaptionType
    readonly data: Uint8Array
    readonly size: number
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
class VideoChromaResample {
    /* Methods of GstVideo-1.0.GstVideo.VideoChromaResample */
    free(): void
    getInfo(nLines: number, offset: number): void
    static name: string
}
class VideoCodecAlphaMeta {
    /* Fields of GstVideo-1.0.GstVideo.VideoCodecAlphaMeta */
    readonly meta: Gst.Meta
    readonly buffer: Gst.Buffer
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
class VideoCodecFrame {
    /* Fields of GstVideo-1.0.GstVideo.VideoCodecFrame */
    readonly systemFrameNumber: number
    readonly dts: Gst.ClockTime
    readonly pts: Gst.ClockTime
    readonly duration: Gst.ClockTime
    readonly distanceFromSync: number
    readonly inputBuffer: Gst.Buffer
    readonly outputBuffer: Gst.Buffer
    readonly deadline: Gst.ClockTime
    /* Methods of GstVideo-1.0.GstVideo.VideoCodecFrame */
    getUserData(): object | null
    ref(): VideoCodecFrame
    setUserData(notify: GLib.DestroyNotify): void
    unref(): void
    static name: string
}
class VideoCodecState {
    /* Fields of GstVideo-1.0.GstVideo.VideoCodecState */
    readonly info: VideoInfo
    readonly caps: Gst.Caps
    readonly codecData: Gst.Buffer
    readonly allocationCaps: Gst.Caps
    readonly masteringDisplayInfo: VideoMasteringDisplayInfo
    readonly contentLightLevel: VideoContentLightLevel
    /* Methods of GstVideo-1.0.GstVideo.VideoCodecState */
    ref(): VideoCodecState
    unref(): void
    static name: string
}
class VideoColorPrimariesInfo {
    /* Fields of GstVideo-1.0.GstVideo.VideoColorPrimariesInfo */
    readonly primaries: VideoColorPrimaries
    readonly wx: number
    readonly wy: number
    readonly rx: number
    readonly ry: number
    readonly gx: number
    readonly gy: number
    readonly bx: number
    readonly by: number
    static name: string
}
class VideoColorimetry {
    /* Fields of GstVideo-1.0.GstVideo.VideoColorimetry */
    readonly range: VideoColorRange
    readonly matrix: VideoColorMatrix
    readonly transfer: VideoTransferFunction
    readonly primaries: VideoColorPrimaries
    /* Methods of GstVideo-1.0.GstVideo.VideoColorimetry */
    fromString(color: string): boolean
    isEqual(other: VideoColorimetry): boolean
    matches(color: string): boolean
    toString(): string | null
    static name: string
}
class VideoContentLightLevel {
    /* Fields of GstVideo-1.0.GstVideo.VideoContentLightLevel */
    readonly maxContentLightLevel: number
    readonly maxFrameAverageLightLevel: number
    /* Methods of GstVideo-1.0.GstVideo.VideoContentLightLevel */
    addToCaps(caps: Gst.Caps): boolean
    fromCaps(caps: Gst.Caps): boolean
    fromString(level: string): boolean
    init(): void
    isEqual(other: VideoContentLightLevel): boolean
    toString(): string
    static name: string
}
class VideoConverter {
    /* Methods of GstVideo-1.0.GstVideo.VideoConverter */
    frame(src: VideoFrame, dest: VideoFrame): void
    frameFinish(): void
    free(): void
    getConfig(): Gst.Structure
    setConfig(config: Gst.Structure): boolean
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
    static getInfo(): Gst.MetaInfo
}
abstract class VideoDecoderClass {
    /* Fields of GstVideo-1.0.GstVideo.VideoDecoderClass */
    readonly open: (decoder: VideoDecoder) => boolean
    readonly close: (decoder: VideoDecoder) => boolean
    readonly start: (decoder: VideoDecoder) => boolean
    readonly stop: (decoder: VideoDecoder) => boolean
    readonly parse: (decoder: VideoDecoder, frame: VideoCodecFrame, adapter: GstBase.Adapter, atEos: boolean) => Gst.FlowReturn
    readonly setFormat: (decoder: VideoDecoder, state: VideoCodecState) => boolean
    readonly reset: (decoder: VideoDecoder, hard: boolean) => boolean
    readonly finish: (decoder: VideoDecoder) => Gst.FlowReturn
    readonly handleFrame: (decoder: VideoDecoder, frame: VideoCodecFrame) => Gst.FlowReturn
    readonly sinkEvent: (decoder: VideoDecoder, event: Gst.Event) => boolean
    readonly srcEvent: (decoder: VideoDecoder, event: Gst.Event) => boolean
    readonly negotiate: (decoder: VideoDecoder) => boolean
    readonly decideAllocation: (decoder: VideoDecoder, query: Gst.Query) => boolean
    readonly proposeAllocation: (decoder: VideoDecoder, query: Gst.Query) => boolean
    readonly flush: (decoder: VideoDecoder) => boolean
    readonly sinkQuery: (decoder: VideoDecoder, query: Gst.Query) => boolean
    readonly srcQuery: (decoder: VideoDecoder, query: Gst.Query) => boolean
    readonly getcaps: (decoder: VideoDecoder, filter: Gst.Caps) => Gst.Caps
    readonly drain: (decoder: VideoDecoder) => Gst.FlowReturn
    readonly transformMeta: (decoder: VideoDecoder, frame: VideoCodecFrame, meta: Gst.Meta) => boolean
    readonly handleMissingData: (decoder: VideoDecoder, timestamp: Gst.ClockTime, duration: Gst.ClockTime) => boolean
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
    readonly setFormat: (encoder: VideoEncoder, state: VideoCodecState) => boolean
    readonly handleFrame: (encoder: VideoEncoder, frame: VideoCodecFrame) => Gst.FlowReturn
    readonly reset: (encoder: VideoEncoder, hard: boolean) => boolean
    readonly finish: (encoder: VideoEncoder) => Gst.FlowReturn
    readonly prePush: (encoder: VideoEncoder, frame: VideoCodecFrame) => Gst.FlowReturn
    readonly getcaps: (enc: VideoEncoder, filter: Gst.Caps) => Gst.Caps
    readonly sinkEvent: (encoder: VideoEncoder, event: Gst.Event) => boolean
    readonly srcEvent: (encoder: VideoEncoder, event: Gst.Event) => boolean
    readonly negotiate: (encoder: VideoEncoder) => boolean
    readonly decideAllocation: (encoder: VideoEncoder, query: Gst.Query) => boolean
    readonly proposeAllocation: (encoder: VideoEncoder, query: Gst.Query) => boolean
    readonly flush: (encoder: VideoEncoder) => boolean
    readonly sinkQuery: (encoder: VideoEncoder, query: Gst.Query) => boolean
    readonly srcQuery: (encoder: VideoEncoder, query: Gst.Query) => boolean
    readonly transformMeta: (encoder: VideoEncoder, frame: VideoCodecFrame, meta: Gst.Meta) => boolean
    static name: string
}
class VideoEncoderPrivate {
    static name: string
}
abstract class VideoFilterClass {
    /* Fields of GstVideo-1.0.GstVideo.VideoFilterClass */
    readonly parentClass: GstBase.BaseTransformClass
    readonly setInfo: (filter: VideoFilter, incaps: Gst.Caps, inInfo: VideoInfo, outcaps: Gst.Caps, outInfo: VideoInfo) => boolean
    readonly transformFrame: (filter: VideoFilter, inframe: VideoFrame, outframe: VideoFrame) => Gst.FlowReturn
    readonly transformFrameIp: (trans: VideoFilter, frame: VideoFrame) => Gst.FlowReturn
    static name: string
}
class VideoFormatInfo {
    /* Fields of GstVideo-1.0.GstVideo.VideoFormatInfo */
    readonly format: VideoFormat
    readonly name: string
    readonly description: string
    readonly flags: VideoFormatFlags
    readonly bits: number
    readonly nComponents: number
    readonly shift: number[]
    readonly depth: number[]
    readonly pixelStride: number[]
    readonly nPlanes: number
    readonly plane: number[]
    readonly poffset: number[]
    readonly wSub: number[]
    readonly hSub: number[]
    readonly unpackFormat: VideoFormat
    readonly unpackFunc: VideoFormatUnpack
    readonly packLines: number
    readonly packFunc: VideoFormatPack
    readonly tileMode: VideoTileMode
    readonly tileWs: number
    readonly tileHs: number
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
    copyPlane(src: VideoFrame, plane: number): boolean
    unmap(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static map(info: VideoInfo, buffer: Gst.Buffer, flags: Gst.MapFlags): [ /* returnType */ boolean, /* frame */ VideoFrame ]
    static mapId(info: VideoInfo, buffer: Gst.Buffer, id: number, flags: Gst.MapFlags): [ /* returnType */ boolean, /* frame */ VideoFrame ]
}
class VideoGLTextureUploadMeta {
    /* Fields of GstVideo-1.0.GstVideo.VideoGLTextureUploadMeta */
    readonly meta: Gst.Meta
    readonly textureOrientation: VideoGLTextureOrientation
    readonly nTextures: number
    readonly textureType: VideoGLTextureType[]
    /* Methods of GstVideo-1.0.GstVideo.VideoGLTextureUploadMeta */
    upload(textureId: number): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
class VideoInfo {
    /* Fields of GstVideo-1.0.GstVideo.VideoInfo */
    readonly finfo: VideoFormatInfo
    readonly interlaceMode: VideoInterlaceMode
    readonly flags: VideoFlags
    readonly width: number
    readonly height: number
    readonly size: number
    readonly views: number
    readonly chromaSite: VideoChromaSite
    readonly colorimetry: VideoColorimetry
    readonly parN: number
    readonly parD: number
    readonly fpsN: number
    readonly fpsD: number
    readonly offset: number[]
    readonly stride: number[]
    /* Methods of GstVideo-1.0.GstVideo.VideoInfo */
    align(align: VideoAlignment): boolean
    alignFull(align: VideoAlignment): [ /* returnType */ boolean, /* planeSize */ number | null ]
    convert(srcFormat: Gst.Format, srcValue: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destValue */ number ]
    copy(): VideoInfo
    free(): void
    isEqual(other: VideoInfo): boolean
    setFormat(format: VideoFormat, width: number, height: number): boolean
    setInterlacedFormat(format: VideoFormat, mode: VideoInterlaceMode, width: number, height: number): boolean
    toCaps(): Gst.Caps
    static name: string
    static new(): VideoInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): VideoInfo
    static fromCaps(caps: Gst.Caps): [ /* returnType */ boolean, /* info */ VideoInfo ]
    static init(): /* info */ VideoInfo
}
class VideoMasteringDisplayInfo {
    /* Fields of GstVideo-1.0.GstVideo.VideoMasteringDisplayInfo */
    readonly displayPrimaries: VideoMasteringDisplayInfoCoordinates[]
    readonly whitePoint: VideoMasteringDisplayInfoCoordinates
    readonly maxDisplayMasteringLuminance: number
    readonly minDisplayMasteringLuminance: number
    /* Methods of GstVideo-1.0.GstVideo.VideoMasteringDisplayInfo */
    addToCaps(caps: Gst.Caps): boolean
    fromCaps(caps: Gst.Caps): boolean
    init(): void
    isEqual(other: VideoMasteringDisplayInfo): boolean
    toString(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static fromString(mastering: string): [ /* returnType */ boolean, /* minfo */ VideoMasteringDisplayInfo ]
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
    readonly nPlanes: number
    readonly offset: number[]
    readonly stride: number[]
    readonly map: (meta: VideoMeta, plane: number, info: Gst.MapInfo, data: object, stride: number, flags: Gst.MapFlags) => boolean
    readonly unmap: (meta: VideoMeta, plane: number, info: Gst.MapInfo) => boolean
    readonly alignment: VideoAlignment
    /* Methods of GstVideo-1.0.GstVideo.VideoMeta */
    getPlaneHeight(): [ /* returnType */ boolean, /* planeHeight */ number[] ]
    getPlaneSize(): [ /* returnType */ boolean, /* planeSize */ number[] ]
    setAlignment(alignment: VideoAlignment): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
class VideoMetaTransform {
    /* Fields of GstVideo-1.0.GstVideo.VideoMetaTransform */
    readonly inInfo: VideoInfo
    readonly outInfo: VideoInfo
    static name: string
    /* Static methods and pseudo-constructors */
    static scaleGetQuark(): GLib.Quark
}
abstract class VideoOrientationInterface {
    /* Fields of GstVideo-1.0.GstVideo.VideoOrientationInterface */
    readonly iface: GObject.TypeInterface
    readonly getHflip: (videoOrientation: VideoOrientation) => [ /* returnType */ boolean, /* flip */ boolean ]
    readonly getVflip: (videoOrientation: VideoOrientation) => [ /* returnType */ boolean, /* flip */ boolean ]
    readonly getHcenter: (videoOrientation: VideoOrientation) => [ /* returnType */ boolean, /* center */ number ]
    readonly getVcenter: (videoOrientation: VideoOrientation) => [ /* returnType */ boolean, /* center */ number ]
    readonly setHflip: (videoOrientation: VideoOrientation, flip: boolean) => boolean
    readonly setVflip: (videoOrientation: VideoOrientation, flip: boolean) => boolean
    readonly setHcenter: (videoOrientation: VideoOrientation, center: number) => boolean
    readonly setVcenter: (videoOrientation: VideoOrientation, center: number) => boolean
    static name: string
}
class VideoOverlayComposition {
    /* Methods of GstVideo-1.0.GstVideo.VideoOverlayComposition */
    addRectangle(rectangle: VideoOverlayRectangle): void
    blend(videoBuf: VideoFrame): boolean
    copy(): VideoOverlayComposition
    getRectangle(n: number): VideoOverlayRectangle
    getSeqnum(): number
    makeWritable(): VideoOverlayComposition
    nRectangles(): number
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
    static getInfo(): Gst.MetaInfo
}
abstract class VideoOverlayInterface {
    /* Fields of GstVideo-1.0.GstVideo.VideoOverlayInterface */
    readonly iface: GObject.TypeInterface
    readonly expose: (overlay: VideoOverlay) => void
    readonly handleEvents: (overlay: VideoOverlay, handleEvents: boolean) => void
    readonly setRenderRectangle: (overlay: VideoOverlay, x: number, y: number, width: number, height: number) => void
    readonly setWindowHandle: (overlay: VideoOverlay, handle: number) => void
    static name: string
}
class VideoOverlayRectangle {
    /* Methods of GstVideo-1.0.GstVideo.VideoOverlayRectangle */
    copy(): VideoOverlayRectangle
    getFlags(): VideoOverlayFormatFlags
    getGlobalAlpha(): number
    getPixelsArgb(flags: VideoOverlayFormatFlags): Gst.Buffer
    getPixelsAyuv(flags: VideoOverlayFormatFlags): Gst.Buffer
    getPixelsRaw(flags: VideoOverlayFormatFlags): Gst.Buffer
    getPixelsUnscaledArgb(flags: VideoOverlayFormatFlags): Gst.Buffer
    getPixelsUnscaledAyuv(flags: VideoOverlayFormatFlags): Gst.Buffer
    getPixelsUnscaledRaw(flags: VideoOverlayFormatFlags): Gst.Buffer
    getRenderRectangle(): [ /* returnType */ boolean, /* renderX */ number | null, /* renderY */ number | null, /* renderWidth */ number | null, /* renderHeight */ number | null ]
    getSeqnum(): number
    setGlobalAlpha(globalAlpha: number): void
    setRenderRectangle(renderX: number, renderY: number, renderWidth: number, renderHeight: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newRaw(pixels: Gst.Buffer, renderX: number, renderY: number, renderWidth: number, renderHeight: number, flags: VideoOverlayFormatFlags): VideoOverlayRectangle
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
    readonly roiType: GLib.Quark
    readonly id: number
    readonly parentId: number
    readonly x: number
    readonly y: number
    readonly w: number
    readonly h: number
    readonly params: object[]
    /* Methods of GstVideo-1.0.GstVideo.VideoRegionOfInterestMeta */
    addParam(s: Gst.Structure): void
    getParam(name: string): Gst.Structure | null
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
class VideoResampler {
    /* Fields of GstVideo-1.0.GstVideo.VideoResampler */
    readonly inSize: number
    readonly outSize: number
    readonly maxTaps: number
    readonly nPhases: number
    readonly offset: number
    readonly phase: number
    readonly nTaps: number
    readonly taps: number
    /* Methods of GstVideo-1.0.GstVideo.VideoResampler */
    clear(): void
    init(method: VideoResamplerMethod, flags: VideoResamplerFlags, nPhases: number, nTaps: number, shift: number, inSize: number, outSize: number, options: Gst.Structure): boolean
    static name: string
}
class VideoScaler {
    /* Methods of GstVideo-1.0.GstVideo.VideoScaler */
    TODO_2d(vscale: VideoScaler, format: VideoFormat, src: object | null, srcStride: number, dest: object | null, destStride: number, x: number, y: number, width: number, height: number): void
    free(): void
    getCoeff(outOffset: number, inOffset: number, nTaps: number): number
    getMaxTaps(): number
    horizontal(format: VideoFormat, src: object | null, dest: object | null, destOffset: number, width: number): void
    vertical(format: VideoFormat, srcLines: object | null, dest: object | null, destOffset: number, width: number): void
    static name: string
}
abstract class VideoSinkClass {
    /* Fields of GstVideo-1.0.GstVideo.VideoSinkClass */
    readonly parentClass: GstBase.BaseSinkClass
    readonly showFrame: (videoSink: VideoSink, buf: Gst.Buffer) => Gst.FlowReturn
    readonly setInfo: (videoSink: VideoSink, caps: Gst.Caps, info: VideoInfo) => boolean
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
    readonly fieldCount: number
    /* Methods of GstVideo-1.0.GstVideo.VideoTimeCode */
    addFrames(frames: number): void
    addInterval(tcInter: VideoTimeCodeInterval): VideoTimeCode | null
    clear(): void
    compare(tc2: VideoTimeCode): number
    copy(): VideoTimeCode
    framesSinceDailyJam(): number
    free(): void
    incrementFrame(): void
    init(fpsN: number, fpsD: number, latestDailyJam: GLib.DateTime | null, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, fieldCount: number): void
    initFromDateTime(fpsN: number, fpsD: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, fieldCount: number): void
    initFromDateTimeFull(fpsN: number, fpsD: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, fieldCount: number): boolean
    isValid(): boolean
    nsecSinceDailyJam(): number
    toDateTime(): GLib.DateTime | null
    toString(): string
    static name: string
    static new(fpsN: number, fpsD: number, latestDailyJam: GLib.DateTime, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, fieldCount: number): VideoTimeCode
    constructor(fpsN: number, fpsD: number, latestDailyJam: GLib.DateTime, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, fieldCount: number)
    /* Static methods and pseudo-constructors */
    static new(fpsN: number, fpsD: number, latestDailyJam: GLib.DateTime, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, fieldCount: number): VideoTimeCode
    static newEmpty(): VideoTimeCode
    static newFromDateTime(fpsN: number, fpsD: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, fieldCount: number): VideoTimeCode
    static newFromDateTimeFull(fpsN: number, fpsD: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, fieldCount: number): VideoTimeCode
    static newFromString(tcStr: string): VideoTimeCode
}
class VideoTimeCodeConfig {
    /* Fields of GstVideo-1.0.GstVideo.VideoTimeCodeConfig */
    readonly fpsN: number
    readonly fpsD: number
    readonly flags: VideoTimeCodeFlags
    readonly latestDailyJam: GLib.DateTime
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
    static newFromString(tcInterStr: string): VideoTimeCodeInterval
}
class VideoTimeCodeMeta {
    /* Fields of GstVideo-1.0.GstVideo.VideoTimeCodeMeta */
    readonly meta: Gst.Meta
    readonly tc: VideoTimeCode
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
class VideoVBIEncoder {
    /* Methods of GstVideo-1.0.GstVideo.VideoVBIEncoder */
    addAncillary(composite: boolean, dID: number, sDIDBlockNumber: number, data: Uint8Array): boolean
    copy(): VideoVBIEncoder
    free(): void
    writeLine(data: number): void
    static name: string
    static new(format: VideoFormat, pixelWidth: number): VideoVBIEncoder
    constructor(format: VideoFormat, pixelWidth: number)
    /* Static methods and pseudo-constructors */
    static new(format: VideoFormat, pixelWidth: number): VideoVBIEncoder
}
class VideoVBIParser {
    /* Methods of GstVideo-1.0.GstVideo.VideoVBIParser */
    addLine(data: Uint8Array): void
    copy(): VideoVBIParser
    free(): void
    getAncillary(): [ /* returnType */ VideoVBIParserResult, /* anc */ VideoAncillary ]
    static name: string
    static new(format: VideoFormat, pixelWidth: number): VideoVBIParser
    constructor(format: VideoFormat, pixelWidth: number)
    /* Static methods and pseudo-constructors */
    static new(format: VideoFormat, pixelWidth: number): VideoVBIParser
}
}
export default GstVideo;