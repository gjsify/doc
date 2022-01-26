/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstMpegts-1.0
 */

import type * as Gjs from './Gjs';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstMpegts {

enum ATSCDescriptorType {
    STUFFING,
    AC3,
    CAPTION_SERVICE,
    CONTENT_ADVISORY,
    EXTENDED_CHANNEL_NAME,
    SERVICE_LOCATION,
    TIME_SHIFTED_SERVICE,
    COMPONENT_NAME,
    DCC_DEPARTING_REQUEST,
    DCC_ARRIVING_REQUEST,
    REDISTRIBUTION_CONTROL,
    GENRE,
    PRIVATE_INFORMATION,
    EAC3,
    ENHANCED_SIGNALING,
    DATA_SERVICE,
    PID_COUNT,
    DOWNLOAD_DESCRIPTOR,
    MULTIPROTOCOL_ENCAPSULATION,
    MODULE_LINK,
    CRC32,
    GROUP_LINK,
}
enum ATSCStreamType {
    DCII_VIDEO,
    AUDIO_AC3,
    SUBTITLING,
    ISOCH_DATA,
    SIT,
    AUDIO_EAC3,
    AUDIO_DTS_HD,
}
enum AtscMGTTableType {
    EIT0,
    EIT127,
    ETT0,
    ETT127,
}
enum CableOuterFECScheme {
    UNDEFINED,
    NONE,
    RS_204_188,
}
enum ComponentStreamContent {
    MPEG2_VIDEO,
    MPEG1_LAYER2_AUDIO,
    TELETEXT_OR_SUBTITLE,
    AC_3,
    AVC,
    AAC,
    DTS,
    SRM_CPCM,
}
enum ContentNibbleHi {
    MOVIE_DRAMA,
    NEWS_CURRENT_AFFAIRS,
    SHOW_GAME_SHOW,
    SPORTS,
    CHILDREN_YOUTH_PROGRAM,
    MUSIC_BALLET_DANCE,
    ARTS_CULTURE,
    SOCIAL_POLITICAL_ECONOMICS,
    EDUCATION_SCIENCE_FACTUAL,
    LEISURE_HOBBIES,
    SPECIAL_CHARACTERISTICS,
}
enum DVBCodeRate {
    NONE,
    TODO_1_2,
    TODO_2_3,
    TODO_3_4,
    TODO_4_5,
    TODO_5_6,
    TODO_6_7,
    TODO_7_8,
    TODO_8_9,
    AUTO,
    TODO_3_5,
    TODO_9_10,
    TODO_2_5,
}
enum DVBDescriptorType {
    NETWORK_NAME,
    SERVICE_LIST,
    STUFFING,
    SATELLITE_DELIVERY_SYSTEM,
    CABLE_DELIVERY_SYSTEM,
    VBI_DATA,
    VBI_TELETEXT,
    BOUQUET_NAME,
    SERVICE,
    COUNTRY_AVAILABILITY,
    LINKAGE,
    NVOD_REFERENCE,
    TIME_SHIFTED_SERVICE,
    SHORT_EVENT,
    EXTENDED_EVENT,
    TIME_SHIFTED_EVENT,
    COMPONENT,
    MOSAIC,
    STREAM_IDENTIFIER,
    CA_IDENTIFIER,
    CONTENT,
    PARENTAL_RATING,
    TELETEXT,
    TELEPHONE,
    LOCAL_TIME_OFFSET,
    SUBTITLING,
    TERRESTRIAL_DELIVERY_SYSTEM,
    MULTILINGUAL_NETWORK_NAME,
    MULTILINGUAL_BOUQUET_NAME,
    MULTILINGUAL_SERVICE_NAME,
    MULTILINGUAL_COMPONENT,
    PRIVATE_DATA_SPECIFIER,
    SERVICE_MOVE,
    SHORT_SMOOTHING_BUFFER,
    FREQUENCY_LIST,
    PARTIAL_TRANSPORT_STREAM,
    DATA_BROADCAST,
    SCRAMBLING,
    DATA_BROADCAST_ID,
    TRANSPORT_STREAM,
    DSNG,
    PDC,
    AC3,
    ANCILLARY_DATA,
    CELL_LIST,
    CELL_FREQUENCY_LINK,
    ANNOUNCEMENT_SUPPORT,
    APPLICATION_SIGNALLING,
    ADAPTATION_FIELD_DATA,
    SERVICE_IDENTIFIER,
    SERVICE_AVAILABILITY,
    DEFAULT_AUTHORITY,
    RELATED_CONTENT,
    TVA_ID,
    CONTENT_IDENTIFIER,
    TIMESLICE_FEC_IDENTIFIER,
    ECM_REPETITION_RATE,
    S2_SATELLITE_DELIVERY_SYSTEM,
    ENHANCED_AC3,
    DTS,
    AAC,
    XAIT_LOCATION,
    FTA_CONTENT_MANAGEMENT,
    EXTENSION,
}
enum DVBExtendedDescriptorType {
    IMAGE_ICON,
    CPCM_DELIVERY_SIGNALLING,
    CP,
    CP_IDENTIFIER,
    T2_DELIVERY_SYSTEM,
    SH_DELIVERY_SYSTEM,
    SUPPLEMENTARY_AUDIO,
    NETWORK_CHANGE_NOTIFY,
    MESSAGE,
    TARGET_REGION,
    TARGET_REGION_NAME,
    SERVICE_RELOCATED,
    XAIT_PID,
    C2_DELIVERY_SYSTEM,
    DTS_HD_AUDIO_STREAM,
    DTS_NEUTRAL,
    VIDEO_DEPTH_RANGE,
    T2MI,
    URI_LINKAGE,
    AC4,
    AUDIO_PRESELECTION,
}
enum DVBLinkageHandOverType {
    RESERVED,
    IDENTICAL,
    LOCAL_VARIATION,
    ASSOCIATED,
}
enum DVBLinkageType {
    RESERVED_00,
    INFORMATION,
    EPG,
    CA_REPLACEMENT,
    TS_CONTAINING_COMPLETE_SI,
    SERVICE_REPLACEMENT,
    DATA_BROADCAST,
    RCS_MAP,
    MOBILE_HAND_OVER,
    SYSTEM_SOFTWARE_UPDATE,
    TS_CONTAINING_SSU,
    IP_MAC_NOTIFICATION,
    TS_CONTAINING_INT,
    EVENT,
    EXTENDED_EVENT,
}
enum DVBScramblingModeType {
    RESERVED,
    CSA1,
    CSA2,
    CSA3_STANDARD,
    CSA3_MINIMAL_ENHANCED,
    CSA3_FULL_ENHANCED,
    CISSA,
    ATIS_0,
    ATIS_F,
}
enum DVBServiceType {
    RESERVED_00,
    DIGITAL_TELEVISION,
    DIGITAL_RADIO_SOUND,
    TELETEXT,
    NVOD_REFERENCE,
    NVOD_TIME_SHIFTED,
    MOSAIC,
    FM_RADIO,
    DVB_SRM,
    RESERVED_09,
    ADVANCED_CODEC_DIGITAL_RADIO_SOUND,
    ADVANCED_CODEC_MOSAIC,
    DATA_BROADCAST,
    RESERVED_0D_COMMON_INTERFACE,
    RCS_MAP,
    RCS_FLS,
    DVB_MHP,
    MPEG2_HD_DIGITAL_TELEVISION,
    ADVANCED_CODEC_SD_DIGITAL_TELEVISION,
    ADVANCED_CODEC_SD_NVOD_TIME_SHIFTED,
    ADVANCED_CODEC_SD_NVOD_REFERENCE,
    ADVANCED_CODEC_HD_DIGITAL_TELEVISION,
    ADVANCED_CODEC_HD_NVOD_TIME_SHIFTED,
    ADVANCED_CODEC_HD_NVOD_REFERENCE,
    ADVANCED_CODEC_STEREO_HD_DIGITAL_TELEVISION,
    ADVANCED_CODEC_STEREO_HD_NVOD_TIME_SHIFTED,
    ADVANCED_CODEC_STEREO_HD_NVOD_REFERENCE,
    RESERVED_FF,
}
enum DVBTeletextType {
    NITIAL_PAGE,
    UBTITLE_PAGE,
    DDITIONAL_INFO_PAGE,
    ROGRAMME_SCHEDULE_PAGE,
    EARING_IMPAIRED_PAGE,
}
enum DescriptorType {
    RESERVED_00,
    RESERVED_01,
    VIDEO_STREAM,
    AUDIO_STREAM,
    HIERARCHY,
    REGISTRATION,
    DATA_STREAM_ALIGNMENT,
    TARGET_BACKGROUND_GRID,
    VIDEO_WINDOW,
    CA,
    ISO_639_LANGUAGE,
    SYSTEM_CLOCK,
    MULTIPLEX_BUFFER_UTILISATION,
    COPYRIGHT,
    MAXIMUM_BITRATE,
    PRIVATE_DATA_INDICATOR,
    SMOOTHING_BUFFER,
    STD,
    IBP,
    DSMCC_CAROUSEL_IDENTIFIER,
    DSMCC_ASSOCIATION_TAG,
    DSMCC_DEFERRED_ASSOCIATION_TAG,
    DSMCC_NPT_REFERENCE,
    DSMCC_NPT_ENDPOINT,
    DSMCC_STREAM_MODE,
    DSMCC_STREAM_EVENT,
    MPEG4_VIDEO,
    MPEG4_AUDIO,
    IOD,
    SL,
    FMC,
    EXTERNAL_ES_ID,
    MUX_CODE,
    FMX_BUFFER_SIZE,
    MULTIPLEX_BUFFER,
    CONTENT_LABELING,
    METADATA_POINTER,
    METADATA,
    METADATA_STD,
    AVC_VIDEO,
    IPMP,
    AVC_TIMING_AND_HRD,
    MPEG2_AAC_AUDIO,
    FLEX_MUX_TIMING,
    MPEG4_TEXT,
    MPEG4_AUDIO_EXTENSION,
    AUXILIARY_VIDEO_STREAM,
    SVC_EXTENSION,
    MVC_EXTENSION,
    J2K_VIDEO,
    MVC_OPERATION_POINT,
    MPEG2_STEREOSCOPIC_VIDEO_FORMAT,
    STEREOSCOPIC_PROGRAM_INFO,
    STEREOSCOPIC_VIDEO_INFO,
}
enum HdmvStreamType {
    AUDIO_LPCM,
    AUDIO_AC3,
    AUDIO_DTS,
    AUDIO_AC3_TRUE_HD,
    AUDIO_AC3_PLUS,
    AUDIO_DTS_HD,
    AUDIO_DTS_HD_MASTER_AUDIO,
    AUDIO_EAC3,
    SUBPICTURE_PGS,
    IGS,
    SUBTITLE,
    AUDIO_AC3_PLUS_SECONDARY,
    AUDIO_DTS_HD_SECONDARY,
}
enum ISDBDescriptorType {
    HIERARCHICAL_TRANSMISSION,
    DIGITAL_COPY_CONTROL,
    NETWORK_IDENTIFICATION,
    PARTIAL_TS_TIME,
    AUDIO_COMPONENT,
    HYPERLINK,
    TARGET_REGION,
    DATA_CONTENT,
    VIDEO_DECODE_CONTROL,
    DOWNLOAD_CONTENT,
    CA_EMM_TS,
    CA_CONTRACT_INFORMATION,
    CA_SERVICE,
    TS_INFORMATION,
    EXTENDED_BROADCASTER,
    LOGO_TRANSMISSION,
    BASIC_LOCAL_EVENT,
    REFERENCE,
    NODE_RELATION,
    SHORT_NODE_INFORMATION,
    STC_REFERENCE,
    SERIES,
    EVENT_GROUP,
    SI_PARAMETER,
    BROADCASTER_NAME,
    COMPONENT_GROUP,
    SI_PRIME_TS,
    BOARD_INFORMATION,
    LDT_LINKAGE,
    CONNECTED_TRANSMISSION,
    CONTENT_AVAILABILITY,
    SERVICE_GROUP,
}
enum Iso639AudioType {
    UNDEFINED,
    CLEAN_EFFECTS,
    HEARING_IMPAIRED,
    VISUAL_IMPAIRED_COMMENTARY,
}
enum MiscDescriptorType {
    MTS_DESC_DTG_LOGICAL_CHANNEL,
}
enum ModulationType {
    QPSK,
    QAM_16,
    QAM_32,
    QAM_64,
    QAM_128,
    QAM_256,
    QAM_AUTO,
    VSB_8,
    VSB_16,
    PSK_8,
    APSK_16,
    APSK_32,
    DQPSK,
    QAM_4_NR_,
    NONE,
}
enum RunningStatus {
    UNDEFINED,
    NOT_RUNNING,
    STARTS_IN_FEW_SECONDS,
    PAUSING,
    RUNNING,
    OFF_AIR,
}
enum SCTEDescriptorType {
    STUFFING,
    AC3,
    FRAME_RATE,
    EXTENDED_VIDEO,
    COMPONENT_NAME,
    FREQUENCY_SPEC,
    MODULATION_PARAMS,
    TRANSPORT_STREAM_ID,
}
enum SCTESpliceCommandType {
    NULL,
    SCHEDULE,
    INSERT,
    TIME,
    BANDWIDTH,
    PRIVATE,
}
enum SCTESpliceDescriptor {
    AVAIL,
    DTMF,
    SEGMENTATION,
    TIME,
    AUDIO,
}
enum SatellitePolarizationType {
    LINEAR_HORIZONTAL,
    LINEAR_VERTICAL,
    CIRCULAR_LEFT,
    CIRCULAR_RIGHT,
}
enum SatelliteRolloff {
    TODO_35,
    TODO_20,
    TODO_25,
    RESERVED,
    AUTO,
}
enum ScteStreamType {
    SUBTITLING,
    ISOCH_DATA,
    SIT,
    DST_NRT,
    DSMCC_DCB,
    SIGNALING,
    SYNC_DATA,
    ASYNC_DATA,
}
enum SectionATSCTableID {
    MASTER_GUIDE,
    TERRESTRIAL_VIRTUAL_CHANNEL,
    CABLE_VIRTUAL_CHANNEL,
    RATING_REGION,
    EVENT_INFORMATION,
    CHANNEL_OR_EVENT_EXTENDED_TEXT,
    SYSTEM_TIME,
    DATA_EVENT,
    DATA_SERVICE,
    PROGRAM_IDENTIFIER,
    NETWORK_RESOURCE,
    LONG_TERM_SERVICE,
    DIRECTED_CHANNEL_CHANGE,
    DIRECTED_CHANNEL_CHANGE_SECTION_CODE,
    AGGREGATE_EVENT_INFORMATION,
    AGGREGATE_EXTENDED_TEXT,
    AGGREGATE_DATA_EVENT,
    SATELLITE_VIRTUAL_CHANNEL,
}
enum SectionDVBTableID {
    NETWORK_INFORMATION_ACTUAL_NETWORK,
    NETWORK_INFORMATION_OTHER_NETWORK,
    SERVICE_DESCRIPTION_ACTUAL_TS,
    SERVICE_DESCRIPTION_OTHER_TS,
    BOUQUET_ASSOCIATION,
    UPDATE_NOTIFICATION,
    DOWNLOADABLE_FONT_INFO,
    EVENT_INFORMATION_ACTUAL_TS_PRESENT,
    EVENT_INFORMATION_OTHER_TS_PRESENT,
    EVENT_INFORMATION_ACTUAL_TS_SCHEDULE_1,
    EVENT_INFORMATION_ACTUAL_TS_SCHEDULE_N,
    EVENT_INFORMATION_OTHER_TS_SCHEDULE_1,
    EVENT_INFORMATION_OTHER_TS_SCHEDULE_N,
    TIME_DATE,
    RUNNING_STATUS,
    STUFFING,
    TIME_OFFSET,
    APPLICATION_INFORMATION_TABLE,
    CONTAINER,
    RELATED_CONTENT,
    CONTENT_IDENTIFIER,
    MPE_FEC,
    RESOLUTION_NOTIFICATION,
    MPE_IFEC,
    PROTECTION_MESSAGE,
    DISCONTINUITY_INFORMATION,
    SELECTION_INFORMATION,
    CA_MESSAGE_ECM_0,
    CA_MESSAGE_ECM_1,
    CA_MESSAGE_SYSTEM_PRIVATE_1,
    CA_MESSAGE_SYSTEM_PRIVATE_N,
    SCT,
    FCT,
    TCT,
    SPT,
    CMT,
    TBTP,
    PCR_PACKET_PAYLOAD,
    TRANSMISSION_MODE_SUPPORT_PAYLOAD,
    TIM,
    LL_FEC_PARITY_DATA_TABLE,
}
enum SectionSCTETableID {
    EAS,
    EBIF,
    RESERVED,
    EISS,
    DII,
    DDB,
    SPLICE,
}
enum SectionTableID {
    PROGRAM_ASSOCIATION,
    CONDITIONAL_ACCESS,
    TS_PROGRAM_MAP,
    TS_DESCRIPTION,
    TODO_14496_SCENE_DESCRIPTION,
    TODO_14496_OBJET_DESCRIPTOR,
    METADATA,
    IPMP_CONTROL_INFORMATION,
    TODO_14496_SECTION,
    TODO_23001_11_SECTION,
    TODO_23001_10_SECTION,
    DSM_CC_MULTIPROTO_ENCAPSULATED_DATA,
    DSM_CC_U_N_MESSAGES,
    DSM_CC_DOWNLOAD_DATA_MESSAGES,
    DSM_CC_STREAM_DESCRIPTORS,
    DSM_CC_PRIVATE_DATA,
    DSM_CC_ADDRESSABLE_SECTIONS,
    UNSET,
}
enum SectionType {
    UNKNOWN,
    PAT,
    PMT,
    CAT,
    TSDT,
    EIT,
    NIT,
    BAT,
    SDT,
    TDT,
    TOT,
    SIT,
    ATSC_TVCT,
    ATSC_CVCT,
    ATSC_MGT,
    ATSC_ETT,
    ATSC_EIT,
    ATSC_STT,
    ATSC_RRT,
    SCTE_SIT,
}
enum StreamType {
    RESERVED_00,
    VIDEO_MPEG1,
    VIDEO_MPEG2,
    AUDIO_MPEG1,
    AUDIO_MPEG2,
    PRIVATE_SECTIONS,
    PRIVATE_PES_PACKETS,
    MHEG,
    DSM_CC,
    H_222_1,
    DSMCC_A,
    DSMCC_B,
    DSMCC_C,
    DSMCC_D,
    AUXILIARY,
    AUDIO_AAC_ADTS,
    VIDEO_MPEG4,
    AUDIO_AAC_LATM,
    SL_FLEXMUX_PES_PACKETS,
    SL_FLEXMUX_SECTIONS,
    SYNCHRONIZED_DOWNLOAD,
    METADATA_PES_PACKETS,
    METADATA_SECTIONS,
    METADATA_DATA_CAROUSEL,
    METADATA_OBJECT_CAROUSEL,
    METADATA_SYNCHRONIZED_DOWNLOAD,
    MPEG2_IPMP,
    VIDEO_H264,
    AUDIO_AAC_CLEAN,
    MPEG4_TIMED_TEXT,
    VIDEO_RVC,
    VIDEO_H264_SVC_SUB_BITSTREAM,
    VIDEO_H264_MVC_SUB_BITSTREAM,
    VIDEO_JP2K,
    VIDEO_MPEG2_STEREO_ADDITIONAL_VIEW,
    VIDEO_H264_STEREO_ADDITIONAL_VIEW,
    VIDEO_HEVC,
    IPMP_STREAM,
    USER_PRIVATE_EA,
}
enum TerrestrialGuardInterval {
    TODO_1_32,
    TODO_1_16,
    TODO_1_8,
    TODO_1_4,
    AUTO,
    TODO_1_128,
    TODO_19_128,
    TODO_19_256,
    PN420,
    PN595,
    PN945,
}
enum TerrestrialHierarchy {
    NONE,
    TODO_1,
    TODO_2,
    TODO_4,
    AUTO,
}
enum TerrestrialTransmissionMode {
    TODO_2K,
    TODO_8K,
    AUTO,
    TODO_4K,
    TODO_1K,
    TODO_16K,
    TODO_32K,
    C1,
    C3780,
}
enum RegistrationId {
    TODO_0,
    AC_3,
    CUEI,
    DRAC,
    DTS1,
    DTS2,
    DTS3,
    BSSD,
    EAC3,
    ETV1,
    GA94,
    HDMV,
    KLVA,
    OPUS,
    TSHV,
    VC_1,
    AC_4,
    OTHER_HEVC,
}
function descriptor_from_custom(tag: number, data: Uint8Array): Descriptor
function descriptor_from_custom_with_extension(tag: number, tag_extension: number, data: Uint8Array): Descriptor
function descriptor_from_dvb_network_name(name: string): Descriptor
function descriptor_from_dvb_service(service_type: DVBServiceType, service_name?: string | null, service_provider?: string | null): Descriptor
function descriptor_from_dvb_subtitling(lang: string, type: number, composition: number, ancillary: number): Descriptor
function descriptor_from_iso_639_language(language: string): Descriptor
function descriptor_from_registration(format_identifier: string, additional_info: Uint8Array | null): Descriptor
function descriptor_parse_audio_preselection_dump(source: AudioPreselectionDescriptor): void
function descriptor_parse_audio_preselection_free(source: AudioPreselectionDescriptor): void
function dvb_component_descriptor_free(source: ComponentDescriptor): void
function event_new_mpegts_section(section: Section): Gst.Event
function event_parse_mpegts_section(event: Gst.Event): Section
function find_descriptor(descriptors: Descriptor[], tag: number): Descriptor
function find_descriptor_with_extension(descriptors: Descriptor[], tag: number, tag_extension: number): Descriptor
function initialize(): void
function message_new_mpegts_section(parent: Gst.Object, section: Section): Gst.Message
function message_parse_mpegts_section(message: Gst.Message): Section
function parse_descriptors(buffer: number, buf_len: number): Descriptor[]
function pat_new(): PatProgram[]
function scte_cancel_new(event_id: number): SCTESIT
function scte_null_new(): SCTESIT
function scte_splice_in_new(event_id: number, splice_time: Gst.ClockTime): SCTESIT
function scte_splice_out_new(event_id: number, splice_time: Gst.ClockTime, duration: Gst.ClockTime): SCTESIT
function section_from_atsc_mgt(mgt: AtscMGT): Section
function section_from_atsc_rrt(rrt: AtscRRT): Section
function section_from_atsc_stt(stt: AtscSTT): Section
function section_from_nit(nit: NIT): Section
function section_from_pat(programs: PatProgram[], ts_id: number): Section
function section_from_pmt(pmt: PMT, pid: number): Section
function section_from_scte_sit(sit: SCTESIT, pid: number): Section
function section_from_sdt(sdt: SDT): Section
interface PacketizeFunc {
    (section: Section): boolean
}
class AtscEIT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscEIT */
    readonly source_id: number
    readonly protocol_version: number
    readonly events: AtscEITEvent[]
    static name: string
}
class AtscEITEvent {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscEITEvent */
    readonly event_id: number
    readonly start_time: number
    readonly etm_location: number
    readonly length_in_seconds: number
    readonly titles: AtscMultString[]
    readonly descriptors: Descriptor[]
    static name: string
}
class AtscETT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscETT */
    readonly ett_table_id_extension: number
    readonly protocol_version: number
    readonly etm_id: number
    readonly messages: AtscMultString[]
    static name: string
}
class AtscMGT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscMGT */
    readonly protocol_version: number
    readonly tables_defined: number
    readonly tables: AtscMGTTable[]
    readonly descriptors: Descriptor[]
    static name: string
    static new(): AtscMGT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AtscMGT
}
class AtscMGTTable {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscMGTTable */
    readonly table_type: number
    readonly pid: number
    readonly version_number: number
    readonly number_bytes: number
    readonly descriptors: Descriptor[]
    static name: string
}
class AtscMultString {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscMultString */
    readonly iso_639_langcode: number[]
    readonly segments: AtscStringSegment[]
    static name: string
}
class AtscRRT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscRRT */
    readonly protocol_version: number
    readonly names: AtscMultString[]
    readonly dimensions_defined: number
    readonly dimensions: AtscRRTDimension[]
    readonly descriptors: object[]
    static name: string
    static new(): AtscRRT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AtscRRT
}
class AtscRRTDimension {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscRRTDimension */
    readonly names: AtscMultString[]
    readonly graduated_scale: boolean
    readonly values_defined: number
    readonly values: AtscRRTDimensionValue[]
    static name: string
    static new(): AtscRRTDimension
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AtscRRTDimension
}
class AtscRRTDimensionValue {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscRRTDimensionValue */
    readonly abbrev_ratings: AtscMultString[]
    readonly ratings: AtscMultString[]
    static name: string
    static new(): AtscRRTDimensionValue
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AtscRRTDimensionValue
}
class AtscSTT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscSTT */
    readonly protocol_version: number
    readonly system_time: number
    readonly gps_utc_offset: number
    readonly ds_status: boolean
    readonly ds_dayofmonth: number
    readonly ds_hour: number
    readonly descriptors: Descriptor[]
    readonly utc_datetime: Gst.DateTime
    /* Methods of GstMpegts-1.0.GstMpegts.AtscSTT */
    get_datetime_utc(): Gst.DateTime
    static name: string
    static new(): AtscSTT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AtscSTT
}
class AtscStringSegment {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscStringSegment */
    readonly compression_type: number
    readonly mode: number
    readonly compressed_data_size: number
    readonly compressed_data: number
    readonly cached_string: string
    /* Methods of GstMpegts-1.0.GstMpegts.AtscStringSegment */
    get_string(): string
    set_string(string: string, compression_type: number, mode: number): boolean
    static name: string
}
class AtscVCT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscVCT */
    readonly transport_stream_id: number
    readonly protocol_version: number
    readonly sources: AtscVCTSource[]
    readonly descriptors: Descriptor[]
    static name: string
}
class AtscVCTSource {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscVCTSource */
    readonly short_name: string
    readonly major_channel_number: number
    readonly minor_channel_number: number
    readonly modulation_mode: number
    readonly carrier_frequency: number
    readonly channel_TSID: number
    readonly program_number: number
    readonly ETM_location: number
    readonly access_controlled: boolean
    readonly hidden: boolean
    readonly path_select: boolean
    readonly out_of_band: boolean
    readonly hide_guide: boolean
    readonly service_type: number
    readonly source_id: number
    readonly descriptors: Descriptor[]
    static name: string
}
class AudioPreselectionDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.AudioPreselectionDescriptor */
    readonly preselection_id: number
    readonly audio_rendering_indication: number
    readonly audio_description: boolean
    readonly spoken_subtitles: boolean
    readonly dialogue_enhancement: boolean
    readonly interactivity_enabled: boolean
    readonly language_code_present: boolean
    readonly text_label_present: boolean
    readonly multi_stream_info_present: boolean
    readonly future_extension: boolean
    readonly language_code: string
    readonly message_id: number
    static name: string
}
class BAT {
    /* Fields of GstMpegts-1.0.GstMpegts.BAT */
    readonly descriptors: Descriptor[]
    readonly streams: BATStream[]
    static name: string
}
class BATStream {
    /* Fields of GstMpegts-1.0.GstMpegts.BATStream */
    readonly transport_stream_id: number
    readonly original_network_id: number
    readonly descriptors: object[]
    static name: string
}
class CableDeliverySystemDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.CableDeliverySystemDescriptor */
    readonly frequency: number
    readonly outer_fec: CableOuterFECScheme
    readonly modulation: ModulationType
    readonly symbol_rate: number
    readonly fec_inner: DVBCodeRate
    /* Methods of GstMpegts-1.0.GstMpegts.CableDeliverySystemDescriptor */
    free(): void
    static name: string
}
class ComponentDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.ComponentDescriptor */
    readonly stream_content: number
    readonly component_type: number
    readonly component_tag: number
    readonly language_code: string
    readonly text: string
    static name: string
}
class Content {
    /* Fields of GstMpegts-1.0.GstMpegts.Content */
    readonly content_nibble_1: ContentNibbleHi
    readonly content_nibble_2: number
    readonly user_byte: number
    static name: string
}
class DVBLinkageDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBLinkageDescriptor */
    readonly transport_stream_id: number
    readonly original_network_id: number
    readonly service_id: number
    readonly linkage_type: DVBLinkageType
    readonly private_data_length: number
    readonly private_data_bytes: number
    /* Methods of GstMpegts-1.0.GstMpegts.DVBLinkageDescriptor */
    free(): void
    get_event(): DVBLinkageEvent
    get_extended_event(): DVBLinkageExtendedEvent[]
    get_mobile_hand_over(): DVBLinkageMobileHandOver
    static name: string
}
class DVBLinkageEvent {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBLinkageEvent */
    readonly target_event_id: number
    readonly target_listed: boolean
    readonly event_simulcast: boolean
    static name: string
}
class DVBLinkageExtendedEvent {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBLinkageExtendedEvent */
    readonly target_event_id: number
    readonly target_listed: boolean
    readonly event_simulcast: boolean
    readonly link_type: number
    readonly target_id_type: number
    readonly original_network_id_flag: boolean
    readonly service_id_flag: boolean
    readonly user_defined_id: number
    readonly target_transport_stream_id: number
    readonly target_original_network_id: number
    readonly target_service_id: number
    static name: string
}
class DVBLinkageMobileHandOver {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBLinkageMobileHandOver */
    readonly hand_over_type: DVBLinkageHandOverType
    readonly origin_type: boolean
    readonly network_id: number
    readonly initial_service_id: number
    static name: string
}
class DVBParentalRatingItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBParentalRatingItem */
    readonly country_code: string
    readonly rating: number
    static name: string
}
class DVBServiceListItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBServiceListItem */
    readonly service_id: number
    readonly type: DVBServiceType
    static name: string
}
class DataBroadcastDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.DataBroadcastDescriptor */
    readonly data_broadcast_id: number
    readonly component_tag: number
    readonly length: number
    readonly selector_bytes: number
    readonly language_code: string
    readonly text: string
    /* Methods of GstMpegts-1.0.GstMpegts.DataBroadcastDescriptor */
    free(): void
    static name: string
}
class Descriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.Descriptor */
    readonly tag: number
    readonly tag_extension: number
    readonly length: number
    readonly data: number
    /* Methods of GstMpegts-1.0.GstMpegts.Descriptor */
    free(): void
    parse_audio_preselection_list(): [ /* returnType */ boolean, /* list */ AudioPreselectionDescriptor[] ]
    parse_ca(): [ /* returnType */ boolean, /* ca_system_id */ number, /* ca_pid */ number, /* private_data */ Uint8Array | null ]
    parse_cable_delivery_system(): [ /* returnType */ boolean, /* res */ CableDeliverySystemDescriptor ]
    parse_dvb_bouquet_name(): [ /* returnType */ boolean, /* bouquet_name */ string | null ]
    parse_dvb_ca_identifier(): [ /* returnType */ boolean, /* list */ number[] ]
    parse_dvb_component(): [ /* returnType */ boolean, /* res */ ComponentDescriptor ]
    parse_dvb_content(): [ /* returnType */ boolean, /* content */ Content[] ]
    parse_dvb_data_broadcast(): [ /* returnType */ boolean, /* res */ DataBroadcastDescriptor ]
    parse_dvb_data_broadcast_id(): [ /* returnType */ boolean, /* data_broadcast_id */ number, /* id_selector_bytes */ Uint8Array ]
    parse_dvb_extended_event(): [ /* returnType */ boolean, /* res */ ExtendedEventDescriptor ]
    parse_dvb_frequency_list(): [ /* returnType */ boolean, /* offset */ boolean, /* list */ number[] ]
    parse_dvb_linkage(): [ /* returnType */ boolean, /* res */ DVBLinkageDescriptor ]
    parse_dvb_multilingual_bouquet_name(): [ /* returnType */ boolean, /* bouquet_name_items */ DvbMultilingualBouquetNameItem[] ]
    parse_dvb_multilingual_component(): [ /* returnType */ boolean, /* component_tag */ number, /* component_description_items */ DvbMultilingualComponentItem[] ]
    parse_dvb_multilingual_network_name(): [ /* returnType */ boolean, /* network_name_items */ DvbMultilingualNetworkNameItem[] ]
    parse_dvb_multilingual_service_name(): [ /* returnType */ boolean, /* service_name_items */ DvbMultilingualServiceNameItem[] ]
    parse_dvb_network_name(): [ /* returnType */ boolean, /* name */ string ]
    parse_dvb_parental_rating(): [ /* returnType */ boolean, /* rating */ DVBParentalRatingItem[] ]
    parse_dvb_private_data_specifier(): [ /* returnType */ boolean, /* private_data_specifier */ number, /* private_data */ Uint8Array | null ]
    parse_dvb_scrambling(): [ /* returnType */ boolean, /* scrambling_mode */ DVBScramblingModeType ]
    parse_dvb_service(): [ /* returnType */ boolean, /* service_type */ DVBServiceType | null, /* service_name */ string | null, /* provider_name */ string | null ]
    parse_dvb_service_list(): [ /* returnType */ boolean, /* list */ DVBServiceListItem[] ]
    parse_dvb_short_event(): [ /* returnType */ boolean, /* language_code */ string | null, /* event_name */ string | null, /* text */ string | null ]
    parse_dvb_stream_identifier(): [ /* returnType */ boolean, /* component_tag */ number ]
    parse_dvb_stuffing(): [ /* returnType */ boolean, /* stuffing_bytes */ number ]
    parse_dvb_subtitling_idx(idx: number): [ /* returnType */ boolean, /* lang */ string, /* type */ number | null, /* composition_page_id */ number | null, /* ancillary_page_id */ number | null ]
    parse_dvb_subtitling_nb(): number
    parse_dvb_t2_delivery_system(): [ /* returnType */ boolean, /* res */ T2DeliverySystemDescriptor ]
    parse_dvb_teletext_idx(idx: number): [ /* returnType */ boolean, /* language_code */ string | null, /* teletext_type */ DVBTeletextType | null, /* magazine_number */ number | null, /* page_number */ number | null ]
    parse_dvb_teletext_nb(): number
    parse_iso_639_language(): [ /* returnType */ boolean, /* res */ ISO639LanguageDescriptor ]
    parse_iso_639_language_idx(idx: number): [ /* returnType */ boolean, /* lang */ string, /* audio_type */ Iso639AudioType | null ]
    parse_iso_639_language_nb(): number
    parse_logical_channel(): [ /* returnType */ boolean, /* res */ LogicalChannelDescriptor ]
    parse_registration(): [ /* returnType */ boolean, /* registration_id */ number, /* additional_info */ Uint8Array | null ]
    parse_satellite_delivery_system(): [ /* returnType */ boolean, /* res */ SatelliteDeliverySystemDescriptor ]
    parse_terrestrial_delivery_system(): [ /* returnType */ boolean, /* res */ TerrestrialDeliverySystemDescriptor ]
    static name: string
    /* Static methods and pseudo-constructors */
    static from_custom(tag: number, data: Uint8Array): Descriptor
    static from_custom_with_extension(tag: number, tag_extension: number, data: Uint8Array): Descriptor
    static from_dvb_network_name(name: string): Descriptor
    static from_dvb_service(service_type: DVBServiceType, service_name?: string | null, service_provider?: string | null): Descriptor
    static from_dvb_subtitling(lang: string, type: number, composition: number, ancillary: number): Descriptor
    static from_iso_639_language(language: string): Descriptor
    static from_registration(format_identifier: string, additional_info: Uint8Array | null): Descriptor
    static parse_audio_preselection_dump(source: AudioPreselectionDescriptor): void
    static parse_audio_preselection_free(source: AudioPreselectionDescriptor): void
}
class DvbMultilingualBouquetNameItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DvbMultilingualBouquetNameItem */
    readonly language_code: string
    readonly bouquet_name: string
    static name: string
}
class DvbMultilingualComponentItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DvbMultilingualComponentItem */
    readonly language_code: string
    readonly description: string
    static name: string
}
class DvbMultilingualNetworkNameItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DvbMultilingualNetworkNameItem */
    readonly language_code: string
    readonly network_name: string
    static name: string
}
class DvbMultilingualServiceNameItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DvbMultilingualServiceNameItem */
    readonly language_code: string
    readonly provider_name: string
    readonly service_name: string
    static name: string
}
class EIT {
    /* Fields of GstMpegts-1.0.GstMpegts.EIT */
    readonly transport_stream_id: number
    readonly original_network_id: number
    readonly segment_last_section_number: number
    readonly last_table_id: number
    readonly actual_stream: boolean
    readonly present_following: boolean
    readonly events: EITEvent[]
    static name: string
}
class EITEvent {
    /* Fields of GstMpegts-1.0.GstMpegts.EITEvent */
    readonly event_id: number
    readonly start_time: Gst.DateTime
    readonly duration: number
    readonly running_status: RunningStatus
    readonly free_CA_mode: boolean
    readonly descriptors: Descriptor[]
    static name: string
}
class ExtendedEventDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.ExtendedEventDescriptor */
    readonly descriptor_number: number
    readonly last_descriptor_number: number
    readonly language_code: string
    readonly items: ExtendedEventItem[]
    readonly text: string
    /* Methods of GstMpegts-1.0.GstMpegts.ExtendedEventDescriptor */
    free(): void
    static name: string
}
class ExtendedEventItem {
    /* Fields of GstMpegts-1.0.GstMpegts.ExtendedEventItem */
    readonly item_description: string
    readonly item: string
    static name: string
}
class ISO639LanguageDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.ISO639LanguageDescriptor */
    readonly nb_language: number
    readonly language: string[]
    readonly audio_type: Iso639AudioType[]
    /* Methods of GstMpegts-1.0.GstMpegts.ISO639LanguageDescriptor */
    descriptor_free(): void
    static name: string
}
class LogicalChannel {
    /* Fields of GstMpegts-1.0.GstMpegts.LogicalChannel */
    readonly service_id: number
    readonly visible_service: boolean
    readonly logical_channel_number: number
    static name: string
}
class LogicalChannelDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.LogicalChannelDescriptor */
    readonly nb_channels: number
    readonly channels: LogicalChannel[]
    static name: string
}
class NIT {
    /* Fields of GstMpegts-1.0.GstMpegts.NIT */
    readonly actual_network: boolean
    readonly network_id: number
    readonly descriptors: Descriptor[]
    readonly streams: NITStream[]
    static name: string
    static new(): NIT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): NIT
}
class NITStream {
    /* Fields of GstMpegts-1.0.GstMpegts.NITStream */
    readonly transport_stream_id: number
    readonly original_network_id: number
    readonly descriptors: Descriptor[]
    static name: string
    static new(): NITStream
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): NITStream
}
class PMT {
    /* Fields of GstMpegts-1.0.GstMpegts.PMT */
    readonly pcr_pid: number
    readonly program_number: number
    readonly descriptors: Descriptor[]
    readonly streams: PMTStream[]
    static name: string
    static new(): PMT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): PMT
}
class PMTStream {
    /* Fields of GstMpegts-1.0.GstMpegts.PMTStream */
    readonly stream_type: number
    readonly pid: number
    readonly descriptors: Descriptor[]
    static name: string
    static new(): PMTStream
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): PMTStream
}
class PatProgram {
    /* Fields of GstMpegts-1.0.GstMpegts.PatProgram */
    readonly program_number: number
    readonly network_or_program_map_PID: number
    static name: string
    static new(): PatProgram
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): PatProgram
}
class SCTESIT {
    /* Fields of GstMpegts-1.0.GstMpegts.SCTESIT */
    readonly encrypted_packet: boolean
    readonly encryption_algorithm: number
    readonly pts_adjustment: number
    readonly cw_index: number
    readonly tier: number
    readonly splice_command_length: number
    readonly splice_command_type: SCTESpliceCommandType
    readonly splice_time_specified: boolean
    readonly splice_time: number
    readonly splices: object[]
    readonly descriptors: object[]
    readonly fully_parsed: boolean
    readonly is_running_time: boolean
    static name: string
    static new(): SCTESIT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SCTESIT
}
class SCTESpliceComponent {
    /* Fields of GstMpegts-1.0.GstMpegts.SCTESpliceComponent */
    readonly tag: number
    readonly splice_time_specified: boolean
    readonly splice_time: number
    readonly utc_splice_time: number
    static name: string
    static new(tag: number): SCTESpliceComponent
    constructor(tag: number)
    /* Static methods and pseudo-constructors */
    static new(tag: number): SCTESpliceComponent
}
class SCTESpliceEvent {
    /* Fields of GstMpegts-1.0.GstMpegts.SCTESpliceEvent */
    readonly insert_event: boolean
    readonly splice_event_id: number
    readonly splice_event_cancel_indicator: boolean
    readonly out_of_network_indicator: boolean
    readonly program_splice_flag: boolean
    readonly duration_flag: boolean
    readonly splice_immediate_flag: boolean
    readonly program_splice_time_specified: boolean
    readonly program_splice_time: number
    readonly utc_splice_time: number
    readonly components: object[]
    readonly break_duration_auto_return: boolean
    readonly break_duration: number
    readonly unique_program_id: number
    readonly avail_num: number
    readonly avails_expected: number
    static name: string
    static new(): SCTESpliceEvent
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SCTESpliceEvent
}
class SDT {
    /* Fields of GstMpegts-1.0.GstMpegts.SDT */
    readonly original_network_id: number
    readonly actual_ts: boolean
    readonly transport_stream_id: number
    readonly services: SDTService[]
    static name: string
    static new(): SDT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SDT
}
class SDTService {
    /* Fields of GstMpegts-1.0.GstMpegts.SDTService */
    readonly service_id: number
    readonly EIT_schedule_flag: boolean
    readonly EIT_present_following_flag: boolean
    readonly running_status: RunningStatus
    readonly free_CA_mode: boolean
    readonly descriptors: Descriptor[]
    static name: string
    static new(): SDTService
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SDTService
}
class SIT {
    /* Fields of GstMpegts-1.0.GstMpegts.SIT */
    readonly descriptors: Descriptor[]
    readonly services: SITService[]
    static name: string
}
class SITService {
    /* Fields of GstMpegts-1.0.GstMpegts.SITService */
    readonly service_id: number
    readonly running_status: RunningStatus
    readonly descriptors: Descriptor[]
    static name: string
}
class SatelliteDeliverySystemDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.SatelliteDeliverySystemDescriptor */
    readonly frequency: number
    readonly orbital_position: number
    readonly west_east: boolean
    readonly polarization: SatellitePolarizationType
    readonly roll_off: SatelliteRolloff
    readonly modulation_system: boolean
    readonly modulation_type: ModulationType
    readonly symbol_rate: number
    readonly fec_inner: DVBCodeRate
    static name: string
}
class Section {
    /* Fields of GstMpegts-1.0.GstMpegts.Section */
    readonly section_type: SectionType
    readonly pid: number
    readonly table_id: number
    readonly subtable_extension: number
    readonly version_number: number
    readonly current_next_indicator: boolean
    readonly section_number: number
    readonly last_section_number: number
    readonly crc: number
    /* Methods of GstMpegts-1.0.GstMpegts.Section */
    get_atsc_cvct(): AtscVCT
    get_atsc_eit(): AtscEIT
    get_atsc_ett(): AtscETT
    get_atsc_mgt(): AtscMGT
    get_atsc_rrt(): AtscRRT
    get_atsc_stt(): AtscSTT
    get_atsc_tvct(): AtscVCT
    get_bat(): BAT
    get_cat(): Descriptor[]
    get_data(): GLib.Bytes
    get_eit(): EIT
    get_nit(): NIT
    get_pat(): PatProgram[]
    get_pmt(): PMT
    get_scte_sit(): SCTESIT
    get_sdt(): SDT
    get_sit(): SIT
    get_tdt(): Gst.DateTime
    get_tot(): TOT
    get_tsdt(): Descriptor[]
    packetize(): [ /* returnType */ number, /* output_size */ number ]
    send_event(element: Gst.Element): boolean
    static name: string
    static new(pid: number, data: Uint8Array): Section
    constructor(pid: number, data: Uint8Array)
    /* Static methods and pseudo-constructors */
    static new(pid: number, data: Uint8Array): Section
    static from_atsc_mgt(mgt: AtscMGT): Section
    static from_atsc_rrt(rrt: AtscRRT): Section
    static from_atsc_stt(stt: AtscSTT): Section
    static from_nit(nit: NIT): Section
    static from_pat(programs: PatProgram[], ts_id: number): Section
    static from_pmt(pmt: PMT, pid: number): Section
    static from_scte_sit(sit: SCTESIT, pid: number): Section
    static from_sdt(sdt: SDT): Section
}
class T2DeliverySystemCell {
    /* Fields of GstMpegts-1.0.GstMpegts.T2DeliverySystemCell */
    readonly cell_id: number
    readonly centre_frequencies: number[]
    readonly sub_cells: T2DeliverySystemCellExtension[]
    static name: string
}
class T2DeliverySystemCellExtension {
    /* Fields of GstMpegts-1.0.GstMpegts.T2DeliverySystemCellExtension */
    readonly cell_id_extension: number
    readonly transposer_frequency: number
    static name: string
}
class T2DeliverySystemDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.T2DeliverySystemDescriptor */
    readonly plp_id: number
    readonly t2_system_id: number
    readonly siso_miso: number
    readonly bandwidth: number
    readonly guard_interval: TerrestrialGuardInterval
    readonly transmission_mode: TerrestrialTransmissionMode
    readonly other_frequency: boolean
    readonly tfs: boolean
    readonly cells: T2DeliverySystemCell[]
    /* Methods of GstMpegts-1.0.GstMpegts.T2DeliverySystemDescriptor */
    free(): void
    static name: string
}
class TOT {
    /* Fields of GstMpegts-1.0.GstMpegts.TOT */
    readonly utc_time: Gst.DateTime
    readonly descriptors: Descriptor[]
    static name: string
}
class TerrestrialDeliverySystemDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.TerrestrialDeliverySystemDescriptor */
    readonly frequency: number
    readonly bandwidth: number
    readonly priority: boolean
    readonly time_slicing: boolean
    readonly mpe_fec: boolean
    readonly constellation: ModulationType
    readonly hierarchy: TerrestrialHierarchy
    readonly code_rate_hp: DVBCodeRate
    readonly code_rate_lp: DVBCodeRate
    readonly guard_interval: TerrestrialGuardInterval
    readonly transmission_mode: TerrestrialTransmissionMode
    readonly other_frequency: boolean
    static name: string
}
}
export default GstMpegts;