/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstMpegts-1.0
 */

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
function descriptorFromCustom(tag: number, data: Uint8Array): Descriptor
function descriptorFromCustomWithExtension(tag: number, tagExtension: number, data: Uint8Array): Descriptor
function descriptorFromDvbNetworkName(name: string): Descriptor
function descriptorFromDvbService(serviceType: DVBServiceType, serviceName?: string | null, serviceProvider?: string | null): Descriptor
function descriptorFromDvbSubtitling(lang: string, type: number, composition: number, ancillary: number): Descriptor
function descriptorFromIso639Language(language: string): Descriptor
function descriptorFromRegistration(formatIdentifier: string, additionalInfo: Uint8Array | null): Descriptor
function descriptorParseAudioPreselectionDump(source: AudioPreselectionDescriptor): void
function descriptorParseAudioPreselectionFree(source: AudioPreselectionDescriptor): void
function dvbComponentDescriptorFree(source: ComponentDescriptor): void
function eventNewMpegtsSection(section: Section): Gst.Event
function eventParseMpegtsSection(event: Gst.Event): Section
function findDescriptor(descriptors: Descriptor[], tag: number): Descriptor
function findDescriptorWithExtension(descriptors: Descriptor[], tag: number, tagExtension: number): Descriptor
function initialize(): void
function messageNewMpegtsSection(parent: Gst.Object, section: Section): Gst.Message
function messageParseMpegtsSection(message: Gst.Message): Section
function parseDescriptors(buffer: number, bufLen: number): Descriptor[]
function patNew(): PatProgram[]
function scteCancelNew(eventId: number): SCTESIT
function scteNullNew(): SCTESIT
function scteSpliceInNew(eventId: number, spliceTime: Gst.ClockTime): SCTESIT
function scteSpliceOutNew(eventId: number, spliceTime: Gst.ClockTime, duration: Gst.ClockTime): SCTESIT
function sectionFromAtscMgt(mgt: AtscMGT): Section
function sectionFromAtscRrt(rrt: AtscRRT): Section
function sectionFromAtscStt(stt: AtscSTT): Section
function sectionFromNit(nit: NIT): Section
function sectionFromPat(programs: PatProgram[], tsId: number): Section
function sectionFromPmt(pmt: PMT, pid: number): Section
function sectionFromScteSit(sit: SCTESIT, pid: number): Section
function sectionFromSdt(sdt: SDT): Section
interface PacketizeFunc {
    (section: Section): boolean
}
class AtscEIT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscEIT */
    readonly sourceId: number
    readonly protocolVersion: number
    readonly events: AtscEITEvent[]
    static name: string
}
class AtscEITEvent {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscEITEvent */
    readonly eventId: number
    readonly startTime: number
    readonly etmLocation: number
    readonly lengthInSeconds: number
    readonly titles: AtscMultString[]
    readonly descriptors: Descriptor[]
    static name: string
}
class AtscETT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscETT */
    readonly ettTableIdExtension: number
    readonly protocolVersion: number
    readonly etmId: number
    readonly messages: AtscMultString[]
    static name: string
}
class AtscMGT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscMGT */
    readonly protocolVersion: number
    readonly tablesDefined: number
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
    readonly tableType: number
    readonly pid: number
    readonly versionNumber: number
    readonly numberBytes: number
    readonly descriptors: Descriptor[]
    static name: string
}
class AtscMultString {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscMultString */
    readonly iso639Langcode: number[]
    readonly segments: AtscStringSegment[]
    static name: string
}
class AtscRRT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscRRT */
    readonly protocolVersion: number
    readonly names: AtscMultString[]
    readonly dimensionsDefined: number
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
    readonly graduatedScale: boolean
    readonly valuesDefined: number
    readonly values: AtscRRTDimensionValue[]
    static name: string
    static new(): AtscRRTDimension
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AtscRRTDimension
}
class AtscRRTDimensionValue {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscRRTDimensionValue */
    readonly abbrevRatings: AtscMultString[]
    readonly ratings: AtscMultString[]
    static name: string
    static new(): AtscRRTDimensionValue
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AtscRRTDimensionValue
}
class AtscSTT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscSTT */
    readonly protocolVersion: number
    readonly systemTime: number
    readonly gpsUtcOffset: number
    readonly dsStatus: boolean
    readonly dsDayofmonth: number
    readonly dsHour: number
    readonly descriptors: Descriptor[]
    readonly utcDatetime: Gst.DateTime
    /* Methods of GstMpegts-1.0.GstMpegts.AtscSTT */
    getDatetimeUtc(): Gst.DateTime
    static name: string
    static new(): AtscSTT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AtscSTT
}
class AtscStringSegment {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscStringSegment */
    readonly compressionType: number
    readonly mode: number
    readonly compressedDataSize: number
    readonly compressedData: number
    readonly cachedString: string
    /* Methods of GstMpegts-1.0.GstMpegts.AtscStringSegment */
    getString(): string
    setString(string: string, compressionType: number, mode: number): boolean
    static name: string
}
class AtscVCT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscVCT */
    readonly transportStreamId: number
    readonly protocolVersion: number
    readonly sources: AtscVCTSource[]
    readonly descriptors: Descriptor[]
    static name: string
}
class AtscVCTSource {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscVCTSource */
    readonly shortName: string
    readonly majorChannelNumber: number
    readonly minorChannelNumber: number
    readonly modulationMode: number
    readonly carrierFrequency: number
    readonly channelTSID: number
    readonly programNumber: number
    readonly eTMLocation: number
    readonly accessControlled: boolean
    readonly hidden: boolean
    readonly pathSelect: boolean
    readonly outOfBand: boolean
    readonly hideGuide: boolean
    readonly serviceType: number
    readonly sourceId: number
    readonly descriptors: Descriptor[]
    static name: string
}
class AudioPreselectionDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.AudioPreselectionDescriptor */
    readonly preselectionId: number
    readonly audioRenderingIndication: number
    readonly audioDescription: boolean
    readonly spokenSubtitles: boolean
    readonly dialogueEnhancement: boolean
    readonly interactivityEnabled: boolean
    readonly languageCodePresent: boolean
    readonly textLabelPresent: boolean
    readonly multiStreamInfoPresent: boolean
    readonly futureExtension: boolean
    readonly languageCode: string
    readonly messageId: number
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
    readonly transportStreamId: number
    readonly originalNetworkId: number
    readonly descriptors: object[]
    static name: string
}
class CableDeliverySystemDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.CableDeliverySystemDescriptor */
    readonly frequency: number
    readonly outerFec: CableOuterFECScheme
    readonly modulation: ModulationType
    readonly symbolRate: number
    readonly fecInner: DVBCodeRate
    /* Methods of GstMpegts-1.0.GstMpegts.CableDeliverySystemDescriptor */
    free(): void
    static name: string
}
class ComponentDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.ComponentDescriptor */
    readonly streamContent: number
    readonly componentType: number
    readonly componentTag: number
    readonly languageCode: string
    readonly text: string
    static name: string
}
class Content {
    /* Fields of GstMpegts-1.0.GstMpegts.Content */
    readonly contentNibble1: ContentNibbleHi
    readonly contentNibble2: number
    readonly userByte: number
    static name: string
}
class DVBLinkageDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBLinkageDescriptor */
    readonly transportStreamId: number
    readonly originalNetworkId: number
    readonly serviceId: number
    readonly linkageType: DVBLinkageType
    readonly privateDataLength: number
    readonly privateDataBytes: number
    /* Methods of GstMpegts-1.0.GstMpegts.DVBLinkageDescriptor */
    free(): void
    getEvent(): DVBLinkageEvent
    getExtendedEvent(): DVBLinkageExtendedEvent[]
    getMobileHandOver(): DVBLinkageMobileHandOver
    static name: string
}
class DVBLinkageEvent {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBLinkageEvent */
    readonly targetEventId: number
    readonly targetListed: boolean
    readonly eventSimulcast: boolean
    static name: string
}
class DVBLinkageExtendedEvent {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBLinkageExtendedEvent */
    readonly targetEventId: number
    readonly targetListed: boolean
    readonly eventSimulcast: boolean
    readonly linkType: number
    readonly targetIdType: number
    readonly originalNetworkIdFlag: boolean
    readonly serviceIdFlag: boolean
    readonly userDefinedId: number
    readonly targetTransportStreamId: number
    readonly targetOriginalNetworkId: number
    readonly targetServiceId: number
    static name: string
}
class DVBLinkageMobileHandOver {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBLinkageMobileHandOver */
    readonly handOverType: DVBLinkageHandOverType
    readonly originType: boolean
    readonly networkId: number
    readonly initialServiceId: number
    static name: string
}
class DVBParentalRatingItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBParentalRatingItem */
    readonly countryCode: string
    readonly rating: number
    static name: string
}
class DVBServiceListItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBServiceListItem */
    readonly serviceId: number
    readonly type: DVBServiceType
    static name: string
}
class DataBroadcastDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.DataBroadcastDescriptor */
    readonly dataBroadcastId: number
    readonly componentTag: number
    readonly length: number
    readonly selectorBytes: number
    readonly languageCode: string
    readonly text: string
    /* Methods of GstMpegts-1.0.GstMpegts.DataBroadcastDescriptor */
    free(): void
    static name: string
}
class Descriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.Descriptor */
    readonly tag: number
    readonly tagExtension: number
    readonly length: number
    readonly data: number
    /* Methods of GstMpegts-1.0.GstMpegts.Descriptor */
    free(): void
    parseAudioPreselectionList(): [ /* returnType */ boolean, /* list */ AudioPreselectionDescriptor[] ]
    parseCa(): [ /* returnType */ boolean, /* caSystemId */ number, /* caPid */ number, /* privateData */ Uint8Array | null ]
    parseCableDeliverySystem(): [ /* returnType */ boolean, /* res */ CableDeliverySystemDescriptor ]
    parseDvbBouquetName(): [ /* returnType */ boolean, /* bouquetName */ string | null ]
    parseDvbCaIdentifier(): [ /* returnType */ boolean, /* list */ number[] ]
    parseDvbComponent(): [ /* returnType */ boolean, /* res */ ComponentDescriptor ]
    parseDvbContent(): [ /* returnType */ boolean, /* content */ Content[] ]
    parseDvbDataBroadcast(): [ /* returnType */ boolean, /* res */ DataBroadcastDescriptor ]
    parseDvbDataBroadcastId(): [ /* returnType */ boolean, /* dataBroadcastId */ number, /* idSelectorBytes */ Uint8Array ]
    parseDvbExtendedEvent(): [ /* returnType */ boolean, /* res */ ExtendedEventDescriptor ]
    parseDvbFrequencyList(): [ /* returnType */ boolean, /* offset */ boolean, /* list */ number[] ]
    parseDvbLinkage(): [ /* returnType */ boolean, /* res */ DVBLinkageDescriptor ]
    parseDvbMultilingualBouquetName(): [ /* returnType */ boolean, /* bouquetNameItems */ DvbMultilingualBouquetNameItem[] ]
    parseDvbMultilingualComponent(): [ /* returnType */ boolean, /* componentTag */ number, /* componentDescriptionItems */ DvbMultilingualComponentItem[] ]
    parseDvbMultilingualNetworkName(): [ /* returnType */ boolean, /* networkNameItems */ DvbMultilingualNetworkNameItem[] ]
    parseDvbMultilingualServiceName(): [ /* returnType */ boolean, /* serviceNameItems */ DvbMultilingualServiceNameItem[] ]
    parseDvbNetworkName(): [ /* returnType */ boolean, /* name */ string ]
    parseDvbParentalRating(): [ /* returnType */ boolean, /* rating */ DVBParentalRatingItem[] ]
    parseDvbPrivateDataSpecifier(): [ /* returnType */ boolean, /* privateDataSpecifier */ number, /* privateData */ Uint8Array | null ]
    parseDvbScrambling(): [ /* returnType */ boolean, /* scramblingMode */ DVBScramblingModeType ]
    parseDvbService(): [ /* returnType */ boolean, /* serviceType */ DVBServiceType | null, /* serviceName */ string | null, /* providerName */ string | null ]
    parseDvbServiceList(): [ /* returnType */ boolean, /* list */ DVBServiceListItem[] ]
    parseDvbShortEvent(): [ /* returnType */ boolean, /* languageCode */ string | null, /* eventName */ string | null, /* text */ string | null ]
    parseDvbStreamIdentifier(): [ /* returnType */ boolean, /* componentTag */ number ]
    parseDvbStuffing(): [ /* returnType */ boolean, /* stuffingBytes */ number ]
    parseDvbSubtitlingIdx(idx: number): [ /* returnType */ boolean, /* lang */ string, /* type */ number | null, /* compositionPageId */ number | null, /* ancillaryPageId */ number | null ]
    parseDvbSubtitlingNb(): number
    parseDvbT2DeliverySystem(): [ /* returnType */ boolean, /* res */ T2DeliverySystemDescriptor ]
    parseDvbTeletextIdx(idx: number): [ /* returnType */ boolean, /* languageCode */ string | null, /* teletextType */ DVBTeletextType | null, /* magazineNumber */ number | null, /* pageNumber */ number | null ]
    parseDvbTeletextNb(): number
    parseIso639Language(): [ /* returnType */ boolean, /* res */ ISO639LanguageDescriptor ]
    parseIso639LanguageIdx(idx: number): [ /* returnType */ boolean, /* lang */ string, /* audioType */ Iso639AudioType | null ]
    parseIso639LanguageNb(): number
    parseLogicalChannel(): [ /* returnType */ boolean, /* res */ LogicalChannelDescriptor ]
    parseRegistration(): [ /* returnType */ boolean, /* registrationId */ number, /* additionalInfo */ Uint8Array | null ]
    parseSatelliteDeliverySystem(): [ /* returnType */ boolean, /* res */ SatelliteDeliverySystemDescriptor ]
    parseTerrestrialDeliverySystem(): [ /* returnType */ boolean, /* res */ TerrestrialDeliverySystemDescriptor ]
    static name: string
    /* Static methods and pseudo-constructors */
    static fromCustom(tag: number, data: Uint8Array): Descriptor
    static fromCustomWithExtension(tag: number, tagExtension: number, data: Uint8Array): Descriptor
    static fromDvbNetworkName(name: string): Descriptor
    static fromDvbService(serviceType: DVBServiceType, serviceName?: string | null, serviceProvider?: string | null): Descriptor
    static fromDvbSubtitling(lang: string, type: number, composition: number, ancillary: number): Descriptor
    static fromIso639Language(language: string): Descriptor
    static fromRegistration(formatIdentifier: string, additionalInfo: Uint8Array | null): Descriptor
    static parseAudioPreselectionDump(source: AudioPreselectionDescriptor): void
    static parseAudioPreselectionFree(source: AudioPreselectionDescriptor): void
}
class DvbMultilingualBouquetNameItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DvbMultilingualBouquetNameItem */
    readonly languageCode: string
    readonly bouquetName: string
    static name: string
}
class DvbMultilingualComponentItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DvbMultilingualComponentItem */
    readonly languageCode: string
    readonly description: string
    static name: string
}
class DvbMultilingualNetworkNameItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DvbMultilingualNetworkNameItem */
    readonly languageCode: string
    readonly networkName: string
    static name: string
}
class DvbMultilingualServiceNameItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DvbMultilingualServiceNameItem */
    readonly languageCode: string
    readonly providerName: string
    readonly serviceName: string
    static name: string
}
class EIT {
    /* Fields of GstMpegts-1.0.GstMpegts.EIT */
    readonly transportStreamId: number
    readonly originalNetworkId: number
    readonly segmentLastSectionNumber: number
    readonly lastTableId: number
    readonly actualStream: boolean
    readonly presentFollowing: boolean
    readonly events: EITEvent[]
    static name: string
}
class EITEvent {
    /* Fields of GstMpegts-1.0.GstMpegts.EITEvent */
    readonly eventId: number
    readonly startTime: Gst.DateTime
    readonly duration: number
    readonly runningStatus: RunningStatus
    readonly freeCAMode: boolean
    readonly descriptors: Descriptor[]
    static name: string
}
class ExtendedEventDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.ExtendedEventDescriptor */
    readonly descriptorNumber: number
    readonly lastDescriptorNumber: number
    readonly languageCode: string
    readonly items: ExtendedEventItem[]
    readonly text: string
    /* Methods of GstMpegts-1.0.GstMpegts.ExtendedEventDescriptor */
    free(): void
    static name: string
}
class ExtendedEventItem {
    /* Fields of GstMpegts-1.0.GstMpegts.ExtendedEventItem */
    readonly itemDescription: string
    readonly item: string
    static name: string
}
class ISO639LanguageDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.ISO639LanguageDescriptor */
    readonly nbLanguage: number
    readonly language: string[]
    readonly audioType: Iso639AudioType[]
    /* Methods of GstMpegts-1.0.GstMpegts.ISO639LanguageDescriptor */
    descriptorFree(): void
    static name: string
}
class LogicalChannel {
    /* Fields of GstMpegts-1.0.GstMpegts.LogicalChannel */
    readonly serviceId: number
    readonly visibleService: boolean
    readonly logicalChannelNumber: number
    static name: string
}
class LogicalChannelDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.LogicalChannelDescriptor */
    readonly nbChannels: number
    readonly channels: LogicalChannel[]
    static name: string
}
class NIT {
    /* Fields of GstMpegts-1.0.GstMpegts.NIT */
    readonly actualNetwork: boolean
    readonly networkId: number
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
    readonly transportStreamId: number
    readonly originalNetworkId: number
    readonly descriptors: Descriptor[]
    static name: string
    static new(): NITStream
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): NITStream
}
class PMT {
    /* Fields of GstMpegts-1.0.GstMpegts.PMT */
    readonly pcrPid: number
    readonly programNumber: number
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
    readonly streamType: number
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
    readonly programNumber: number
    readonly networkOrProgramMapPID: number
    static name: string
    static new(): PatProgram
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): PatProgram
}
class SCTESIT {
    /* Fields of GstMpegts-1.0.GstMpegts.SCTESIT */
    readonly encryptedPacket: boolean
    readonly encryptionAlgorithm: number
    readonly ptsAdjustment: number
    readonly cwIndex: number
    readonly tier: number
    readonly spliceCommandLength: number
    readonly spliceCommandType: SCTESpliceCommandType
    readonly spliceTimeSpecified: boolean
    readonly spliceTime: number
    readonly splices: object[]
    readonly descriptors: object[]
    readonly fullyParsed: boolean
    readonly isRunningTime: boolean
    static name: string
    static new(): SCTESIT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SCTESIT
}
class SCTESpliceComponent {
    /* Fields of GstMpegts-1.0.GstMpegts.SCTESpliceComponent */
    readonly tag: number
    readonly spliceTimeSpecified: boolean
    readonly spliceTime: number
    readonly utcSpliceTime: number
    static name: string
    static new(tag: number): SCTESpliceComponent
    constructor(tag: number)
    /* Static methods and pseudo-constructors */
    static new(tag: number): SCTESpliceComponent
}
class SCTESpliceEvent {
    /* Fields of GstMpegts-1.0.GstMpegts.SCTESpliceEvent */
    readonly insertEvent: boolean
    readonly spliceEventId: number
    readonly spliceEventCancelIndicator: boolean
    readonly outOfNetworkIndicator: boolean
    readonly programSpliceFlag: boolean
    readonly durationFlag: boolean
    readonly spliceImmediateFlag: boolean
    readonly programSpliceTimeSpecified: boolean
    readonly programSpliceTime: number
    readonly utcSpliceTime: number
    readonly components: object[]
    readonly breakDurationAutoReturn: boolean
    readonly breakDuration: number
    readonly uniqueProgramId: number
    readonly availNum: number
    readonly availsExpected: number
    static name: string
    static new(): SCTESpliceEvent
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SCTESpliceEvent
}
class SDT {
    /* Fields of GstMpegts-1.0.GstMpegts.SDT */
    readonly originalNetworkId: number
    readonly actualTs: boolean
    readonly transportStreamId: number
    readonly services: SDTService[]
    static name: string
    static new(): SDT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SDT
}
class SDTService {
    /* Fields of GstMpegts-1.0.GstMpegts.SDTService */
    readonly serviceId: number
    readonly eITScheduleFlag: boolean
    readonly eITPresentFollowingFlag: boolean
    readonly runningStatus: RunningStatus
    readonly freeCAMode: boolean
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
    readonly serviceId: number
    readonly runningStatus: RunningStatus
    readonly descriptors: Descriptor[]
    static name: string
}
class SatelliteDeliverySystemDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.SatelliteDeliverySystemDescriptor */
    readonly frequency: number
    readonly orbitalPosition: number
    readonly westEast: boolean
    readonly polarization: SatellitePolarizationType
    readonly rollOff: SatelliteRolloff
    readonly modulationSystem: boolean
    readonly modulationType: ModulationType
    readonly symbolRate: number
    readonly fecInner: DVBCodeRate
    static name: string
}
class Section {
    /* Fields of GstMpegts-1.0.GstMpegts.Section */
    readonly sectionType: SectionType
    readonly pid: number
    readonly tableId: number
    readonly subtableExtension: number
    readonly versionNumber: number
    readonly currentNextIndicator: boolean
    readonly sectionNumber: number
    readonly lastSectionNumber: number
    readonly crc: number
    /* Methods of GstMpegts-1.0.GstMpegts.Section */
    getAtscCvct(): AtscVCT
    getAtscEit(): AtscEIT
    getAtscEtt(): AtscETT
    getAtscMgt(): AtscMGT
    getAtscRrt(): AtscRRT
    getAtscStt(): AtscSTT
    getAtscTvct(): AtscVCT
    getBat(): BAT
    getCat(): Descriptor[]
    getData(): any
    getEit(): EIT
    getNit(): NIT
    getPat(): PatProgram[]
    getPmt(): PMT
    getScteSit(): SCTESIT
    getSdt(): SDT
    getSit(): SIT
    getTdt(): Gst.DateTime
    getTot(): TOT
    getTsdt(): Descriptor[]
    packetize(): [ /* returnType */ number, /* outputSize */ number ]
    sendEvent(element: Gst.Element): boolean
    static name: string
    static new(pid: number, data: Uint8Array): Section
    constructor(pid: number, data: Uint8Array)
    /* Static methods and pseudo-constructors */
    static new(pid: number, data: Uint8Array): Section
    static fromAtscMgt(mgt: AtscMGT): Section
    static fromAtscRrt(rrt: AtscRRT): Section
    static fromAtscStt(stt: AtscSTT): Section
    static fromNit(nit: NIT): Section
    static fromPat(programs: PatProgram[], tsId: number): Section
    static fromPmt(pmt: PMT, pid: number): Section
    static fromScteSit(sit: SCTESIT, pid: number): Section
    static fromSdt(sdt: SDT): Section
}
class T2DeliverySystemCell {
    /* Fields of GstMpegts-1.0.GstMpegts.T2DeliverySystemCell */
    readonly cellId: number
    readonly centreFrequencies: number[]
    readonly subCells: T2DeliverySystemCellExtension[]
    static name: string
}
class T2DeliverySystemCellExtension {
    /* Fields of GstMpegts-1.0.GstMpegts.T2DeliverySystemCellExtension */
    readonly cellIdExtension: number
    readonly transposerFrequency: number
    static name: string
}
class T2DeliverySystemDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.T2DeliverySystemDescriptor */
    readonly plpId: number
    readonly t2SystemId: number
    readonly sisoMiso: number
    readonly bandwidth: number
    readonly guardInterval: TerrestrialGuardInterval
    readonly transmissionMode: TerrestrialTransmissionMode
    readonly otherFrequency: boolean
    readonly tfs: boolean
    readonly cells: T2DeliverySystemCell[]
    /* Methods of GstMpegts-1.0.GstMpegts.T2DeliverySystemDescriptor */
    free(): void
    static name: string
}
class TOT {
    /* Fields of GstMpegts-1.0.GstMpegts.TOT */
    readonly utcTime: Gst.DateTime
    readonly descriptors: Descriptor[]
    static name: string
}
class TerrestrialDeliverySystemDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.TerrestrialDeliverySystemDescriptor */
    readonly frequency: number
    readonly bandwidth: number
    readonly priority: boolean
    readonly timeSlicing: boolean
    readonly mpeFec: boolean
    readonly constellation: ModulationType
    readonly hierarchy: TerrestrialHierarchy
    readonly codeRateHp: DVBCodeRate
    readonly codeRateLp: DVBCodeRate
    readonly guardInterval: TerrestrialGuardInterval
    readonly transmissionMode: TerrestrialTransmissionMode
    readonly otherFrequency: boolean
    static name: string
}
}
export default GstMpegts;